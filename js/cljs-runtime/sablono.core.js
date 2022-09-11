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
var G__42187__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__41806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__41807 = cljs.core.seq(vec__41806);
var first__41808 = cljs.core.first(seq__41807);
var seq__41807__$1 = cljs.core.next(seq__41807);
var tag = first__41808;
var body = seq__41807__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__42187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42188__i = 0, G__42188__a = new Array(arguments.length -  0);
while (G__42188__i < G__42188__a.length) {G__42188__a[G__42188__i] = arguments[G__42188__i + 0]; ++G__42188__i;}
  args = new cljs.core.IndexedSeq(G__42188__a,0,null);
} 
return G__42187__delegate.call(this,args);};
G__42187.cljs$lang$maxFixedArity = 0;
G__42187.cljs$lang$applyTo = (function (arglist__42189){
var args = cljs.core.seq(arglist__42189);
return G__42187__delegate(args);
});
G__42187.cljs$core$IFn$_invoke$arity$variadic = G__42187__delegate;
return G__42187;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5523__auto__ = (function sablono$core$update_arglists_$_iter__41812(s__41813){
return (new cljs.core.LazySeq(null,(function (){
var s__41813__$1 = s__41813;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41813__$1);
if(temp__5804__auto__){
var s__41813__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41813__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41813__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41815 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41814 = (0);
while(true){
if((i__41814 < size__5522__auto__)){
var args = cljs.core._nth(c__5521__auto__,i__41814);
cljs.core.chunk_append(b__41815,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__42190 = (i__41814 + (1));
i__41814 = G__42190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41815),sablono$core$update_arglists_$_iter__41812(cljs.core.chunk_rest(s__41813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41815),null);
}
} else {
var args = cljs.core.first(s__41813__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__41812(cljs.core.rest(s__41813__$2)));
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
var len__5769__auto___42191 = arguments.length;
var i__5770__auto___42192 = (0);
while(true){
if((i__5770__auto___42192 < len__5769__auto___42191)){
args__5775__auto__.push((arguments[i__5770__auto___42192]));

var G__42193 = (i__5770__auto___42192 + (1));
i__5770__auto___42192 = G__42193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5523__auto__ = (function sablono$core$iter__41823(s__41824){
return (new cljs.core.LazySeq(null,(function (){
var s__41824__$1 = s__41824;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41824__$1);
if(temp__5804__auto__){
var s__41824__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41824__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41824__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41826 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41825 = (0);
while(true){
if((i__41825 < size__5522__auto__)){
var style = cljs.core._nth(c__5521__auto__,i__41825);
cljs.core.chunk_append(b__41826,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__42218 = (i__41825 + (1));
i__41825 = G__42218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41826),sablono$core$iter__41823(cljs.core.chunk_rest(s__41824__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41826),null);
}
} else {
var style = cljs.core.first(s__41824__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__41823(cljs.core.rest(s__41824__$2)));
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
(sablono.core.include_css.cljs$lang$applyTo = (function (seq41820){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41820));
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
sablono.core.link_to41842 = (function sablono$core$link_to41842(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42219 = arguments.length;
var i__5770__auto___42220 = (0);
while(true){
if((i__5770__auto___42220 < len__5769__auto___42219)){
args__5775__auto__.push((arguments[i__5770__auto___42220]));

var G__42221 = (i__5770__auto___42220 + (1));
i__5770__auto___42220 = G__42221;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to41842.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.link_to41842.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to41842.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to41842.cljs$lang$applyTo = (function (seq41845){
var G__41846 = cljs.core.first(seq41845);
var seq41845__$1 = cljs.core.next(seq41845);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41846,seq41845__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to41842);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to41853 = (function sablono$core$mail_to41853(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42222 = arguments.length;
var i__5770__auto___42223 = (0);
while(true){
if((i__5770__auto___42223 < len__5769__auto___42222)){
args__5775__auto__.push((arguments[i__5770__auto___42223]));

var G__42224 = (i__5770__auto___42223 + (1));
i__5770__auto___42223 = G__42224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to41853.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.mail_to41853.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__41859){
var vec__41860 = p__41859;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41860,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__5045__auto__ = content;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to41853.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to41853.cljs$lang$applyTo = (function (seq41855){
var G__41856 = cljs.core.first(seq41855);
var seq41855__$1 = cljs.core.next(seq41855);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41856,seq41855__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to41853);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list41865 = (function sablono$core$unordered_list41865(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function sablono$core$unordered_list41865_$_iter__41866(s__41867){
return (new cljs.core.LazySeq(null,(function (){
var s__41867__$1 = s__41867;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41867__$1);
if(temp__5804__auto__){
var s__41867__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41867__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41867__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41869 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41868 = (0);
while(true){
if((i__41868 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41868);
cljs.core.chunk_append(b__41869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42225 = (i__41868 + (1));
i__41868 = G__42225;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41869),sablono$core$unordered_list41865_$_iter__41866(cljs.core.chunk_rest(s__41867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41869),null);
}
} else {
var x = cljs.core.first(s__41867__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list41865_$_iter__41866(cljs.core.rest(s__41867__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list41865);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list41914 = (function sablono$core$ordered_list41914(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5523__auto__ = (function sablono$core$ordered_list41914_$_iter__41915(s__41916){
return (new cljs.core.LazySeq(null,(function (){
var s__41916__$1 = s__41916;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__41916__$1);
if(temp__5804__auto__){
var s__41916__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41916__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__41916__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__41918 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__41917 = (0);
while(true){
if((i__41917 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__41917);
cljs.core.chunk_append(b__41918,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__42226 = (i__41917 + (1));
i__41917 = G__42226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41918),sablono$core$ordered_list41914_$_iter__41915(cljs.core.chunk_rest(s__41916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41918),null);
}
} else {
var x = cljs.core.first(s__41916__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list41914_$_iter__41915(cljs.core.rest(s__41916__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list41914);
/**
 * Create an image element.
 */
sablono.core.image41927 = (function sablono$core$image41927(var_args){
var G__41931 = arguments.length;
switch (G__41931) {
case 1:
return sablono.core.image41927.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image41927.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image41927.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image41927.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image41927.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image41927);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41932_SHARP_,p2__41933_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41932_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41933_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__41938_SHARP_,p2__41939_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41938_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41939_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__41941 = arguments.length;
switch (G__41941) {
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
sablono.core.color_field41950 = (function sablono$core$color_field41950(var_args){
var G__41952 = arguments.length;
switch (G__41952) {
case 1:
return sablono.core.color_field41950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field41950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field41950.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41793__auto__);
}));

(sablono.core.color_field41950.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.color_field41950.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field41950);

/**
 * Creates a date input field.
 */
sablono.core.date_field41960 = (function sablono$core$date_field41960(var_args){
var G__41962 = arguments.length;
switch (G__41962) {
case 1:
return sablono.core.date_field41960.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field41960.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field41960.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41793__auto__);
}));

(sablono.core.date_field41960.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.date_field41960.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field41960);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field41969 = (function sablono$core$datetime_field41969(var_args){
var G__41971 = arguments.length;
switch (G__41971) {
case 1:
return sablono.core.datetime_field41969.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field41969.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field41969.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41793__auto__);
}));

(sablono.core.datetime_field41969.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.datetime_field41969.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field41969);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field41979 = (function sablono$core$datetime_local_field41979(var_args){
var G__41981 = arguments.length;
switch (G__41981) {
case 1:
return sablono.core.datetime_local_field41979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field41979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field41979.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41793__auto__);
}));

(sablono.core.datetime_local_field41979.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.datetime_local_field41979.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field41979);

/**
 * Creates a email input field.
 */
sablono.core.email_field41988 = (function sablono$core$email_field41988(var_args){
var G__41991 = arguments.length;
switch (G__41991) {
case 1:
return sablono.core.email_field41988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field41988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field41988.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41793__auto__);
}));

(sablono.core.email_field41988.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.email_field41988.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field41988);

/**
 * Creates a file input field.
 */
sablono.core.file_field41992 = (function sablono$core$file_field41992(var_args){
var G__41995 = arguments.length;
switch (G__41995) {
case 1:
return sablono.core.file_field41992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field41992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field41992.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41793__auto__);
}));

(sablono.core.file_field41992.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.file_field41992.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field41992);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field42028 = (function sablono$core$hidden_field42028(var_args){
var G__42033 = arguments.length;
switch (G__42033) {
case 1:
return sablono.core.hidden_field42028.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field42028.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field42028.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41793__auto__);
}));

(sablono.core.hidden_field42028.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.hidden_field42028.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field42028);

/**
 * Creates a month input field.
 */
sablono.core.month_field42035 = (function sablono$core$month_field42035(var_args){
var G__42037 = arguments.length;
switch (G__42037) {
case 1:
return sablono.core.month_field42035.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field42035.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field42035.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41793__auto__);
}));

(sablono.core.month_field42035.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.month_field42035.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field42035);

/**
 * Creates a number input field.
 */
sablono.core.number_field42039 = (function sablono$core$number_field42039(var_args){
var G__42041 = arguments.length;
switch (G__42041) {
case 1:
return sablono.core.number_field42039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field42039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field42039.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41793__auto__);
}));

(sablono.core.number_field42039.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.number_field42039.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field42039);

/**
 * Creates a password input field.
 */
sablono.core.password_field42046 = (function sablono$core$password_field42046(var_args){
var G__42048 = arguments.length;
switch (G__42048) {
case 1:
return sablono.core.password_field42046.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field42046.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field42046.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41793__auto__);
}));

(sablono.core.password_field42046.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.password_field42046.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field42046);

/**
 * Creates a range input field.
 */
sablono.core.range_field42049 = (function sablono$core$range_field42049(var_args){
var G__42051 = arguments.length;
switch (G__42051) {
case 1:
return sablono.core.range_field42049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field42049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field42049.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41793__auto__);
}));

(sablono.core.range_field42049.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.range_field42049.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field42049);

/**
 * Creates a search input field.
 */
sablono.core.search_field42060 = (function sablono$core$search_field42060(var_args){
var G__42066 = arguments.length;
switch (G__42066) {
case 1:
return sablono.core.search_field42060.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field42060.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field42060.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41793__auto__);
}));

(sablono.core.search_field42060.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.search_field42060.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field42060);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field42067 = (function sablono$core$tel_field42067(var_args){
var G__42069 = arguments.length;
switch (G__42069) {
case 1:
return sablono.core.tel_field42067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field42067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field42067.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41793__auto__);
}));

(sablono.core.tel_field42067.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.tel_field42067.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field42067);

/**
 * Creates a text input field.
 */
sablono.core.text_field42070 = (function sablono$core$text_field42070(var_args){
var G__42072 = arguments.length;
switch (G__42072) {
case 1:
return sablono.core.text_field42070.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field42070.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field42070.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41793__auto__);
}));

(sablono.core.text_field42070.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.text_field42070.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field42070);

/**
 * Creates a time input field.
 */
sablono.core.time_field42073 = (function sablono$core$time_field42073(var_args){
var G__42075 = arguments.length;
switch (G__42075) {
case 1:
return sablono.core.time_field42073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field42073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field42073.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41793__auto__);
}));

(sablono.core.time_field42073.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.time_field42073.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field42073);

/**
 * Creates a url input field.
 */
sablono.core.url_field42076 = (function sablono$core$url_field42076(var_args){
var G__42085 = arguments.length;
switch (G__42085) {
case 1:
return sablono.core.url_field42076.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field42076.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field42076.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41793__auto__);
}));

(sablono.core.url_field42076.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.url_field42076.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field42076);

/**
 * Creates a week input field.
 */
sablono.core.week_field42087 = (function sablono$core$week_field42087(var_args){
var G__42089 = arguments.length;
switch (G__42089) {
case 1:
return sablono.core.week_field42087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field42087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field42087.cljs$core$IFn$_invoke$arity$1 = (function (name__41793__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41793__auto__);
}));

(sablono.core.week_field42087.cljs$core$IFn$_invoke$arity$2 = (function (name__41793__auto__,value__41794__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__41793__auto__,value__41794__auto__);
}));

(sablono.core.week_field42087.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field42087);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box42091 = (function sablono$core$check_box42091(var_args){
var G__42094 = arguments.length;
switch (G__42094) {
case 1:
return sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42091.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box42091.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box42091);
/**
 * Creates a radio button.
 */
sablono.core.radio_button42096 = (function sablono$core$radio_button42096(var_args){
var G__42098 = arguments.length;
switch (G__42098) {
case 1:
return sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42096.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button42096.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button42096);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options42105 = (function sablono$core$select_options42105(coll){
var iter__5523__auto__ = (function sablono$core$select_options42105_$_iter__42106(s__42107){
return (new cljs.core.LazySeq(null,(function (){
var s__42107__$1 = s__42107;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__42107__$1);
if(temp__5804__auto__){
var s__42107__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42107__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__42107__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__42109 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__42108 = (0);
while(true){
if((i__42108 < size__5522__auto__)){
var x = cljs.core._nth(c__5521__auto__,i__42108);
cljs.core.chunk_append(b__42109,((cljs.core.sequential_QMARK_(x))?(function (){var vec__42111 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42111,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42111,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42111,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42105.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42105.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42105.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__42265 = (i__42108 + (1));
i__42108 = G__42265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42109),sablono$core$select_options42105_$_iter__42106(cljs.core.chunk_rest(s__42107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42109),null);
}
} else {
var x = cljs.core.first(s__42107__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__42129 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42129,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42129,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42129,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options42105.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options42105.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options42105.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options42105_$_iter__42106(cljs.core.rest(s__42107__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options42105);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down42132 = (function sablono$core$drop_down42132(var_args){
var G__42134 = arguments.length;
switch (G__42134) {
case 2:
return sablono.core.drop_down42132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down42132.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down42132.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down42132.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down42132.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down42132.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down42132);
/**
 * Creates a text area element.
 */
sablono.core.text_area42136 = (function sablono$core$text_area42136(var_args){
var G__42154 = arguments.length;
switch (G__42154) {
case 1:
return sablono.core.text_area42136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area42136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area42136.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area42136.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = value;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area42136.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area42136);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label42168 = (function sablono$core$label42168(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label42168);
/**
 * Creates a submit button.
 */
sablono.core.submit_button42169 = (function sablono$core$submit_button42169(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button42169);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button42170 = (function sablono$core$reset_button42170(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button42170);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to42171 = (function sablono$core$form_to42171(var_args){
var args__5775__auto__ = [];
var len__5769__auto___42268 = arguments.length;
var i__5770__auto___42269 = (0);
while(true){
if((i__5770__auto___42269 < len__5769__auto___42268)){
args__5775__auto__.push((arguments[i__5770__auto___42269]));

var G__42270 = (i__5770__auto___42269 + (1));
i__5770__auto___42269 = G__42270;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to42171.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sablono.core.form_to42171.cljs$core$IFn$_invoke$arity$variadic = (function (p__42174,body){
var vec__42175 = p__42174;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42175,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42175,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to42171.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to42171.cljs$lang$applyTo = (function (seq42172){
var G__42173 = cljs.core.first(seq42172);
var seq42172__$1 = cljs.core.next(seq42172);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42173,seq42172__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to42171);

//# sourceMappingURL=sablono.core.js.map
