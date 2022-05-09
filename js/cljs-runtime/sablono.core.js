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
var G__44185__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__43944 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__43945 = cljs.core.seq(vec__43944);
var first__43946 = cljs.core.first(seq__43945);
var seq__43945__$1 = cljs.core.next(seq__43945);
var tag = first__43946;
var body = seq__43945__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__44185 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44186__i = 0, G__44186__a = new Array(arguments.length -  0);
while (G__44186__i < G__44186__a.length) {G__44186__a[G__44186__i] = arguments[G__44186__i + 0]; ++G__44186__i;}
  args = new cljs.core.IndexedSeq(G__44186__a,0,null);
} 
return G__44185__delegate.call(this,args);};
G__44185.cljs$lang$maxFixedArity = 0;
G__44185.cljs$lang$applyTo = (function (arglist__44187){
var args = cljs.core.seq(arglist__44187);
return G__44185__delegate(args);
});
G__44185.cljs$core$IFn$_invoke$arity$variadic = G__44185__delegate;
return G__44185;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4652__auto__ = (function sablono$core$update_arglists_$_iter__43950(s__43951){
return (new cljs.core.LazySeq(null,(function (){
var s__43951__$1 = s__43951;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43951__$1);
if(temp__5753__auto__){
var s__43951__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43951__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43951__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43953 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43952 = (0);
while(true){
if((i__43952 < size__4651__auto__)){
var args = cljs.core._nth(c__4650__auto__,i__43952);
cljs.core.chunk_append(b__43953,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__44199 = (i__43952 + (1));
i__43952 = G__44199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43953),sablono$core$update_arglists_$_iter__43950(cljs.core.chunk_rest(s__43951__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43953),null);
}
} else {
var args = cljs.core.first(s__43951__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__43950(cljs.core.rest(s__43951__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44204 = arguments.length;
var i__4865__auto___44205 = (0);
while(true){
if((i__4865__auto___44205 < len__4864__auto___44204)){
args__4870__auto__.push((arguments[i__4865__auto___44205]));

var G__44206 = (i__4865__auto___44205 + (1));
i__4865__auto___44205 = G__44206;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4652__auto__ = (function sablono$core$iter__43955(s__43956){
return (new cljs.core.LazySeq(null,(function (){
var s__43956__$1 = s__43956;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43956__$1);
if(temp__5753__auto__){
var s__43956__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43956__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43956__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43958 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43957 = (0);
while(true){
if((i__43957 < size__4651__auto__)){
var style = cljs.core._nth(c__4650__auto__,i__43957);
cljs.core.chunk_append(b__43958,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__44207 = (i__43957 + (1));
i__43957 = G__44207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43958),sablono$core$iter__43955(cljs.core.chunk_rest(s__43956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43958),null);
}
} else {
var style = cljs.core.first(s__43956__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__43955(cljs.core.rest(s__43956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq43954){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43954));
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
sablono.core.link_to43962 = (function sablono$core$link_to43962(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44214 = arguments.length;
var i__4865__auto___44215 = (0);
while(true){
if((i__4865__auto___44215 < len__4864__auto___44214)){
args__4870__auto__.push((arguments[i__4865__auto___44215]));

var G__44216 = (i__4865__auto___44215 + (1));
i__4865__auto___44215 = G__44216;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to43962.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.link_to43962.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to43962.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to43962.cljs$lang$applyTo = (function (seq43963){
var G__43964 = cljs.core.first(seq43963);
var seq43963__$1 = cljs.core.next(seq43963);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43964,seq43963__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to43962);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to43969 = (function sablono$core$mail_to43969(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44217 = arguments.length;
var i__4865__auto___44218 = (0);
while(true){
if((i__4865__auto___44218 < len__4864__auto___44217)){
args__4870__auto__.push((arguments[i__4865__auto___44218]));

var G__44219 = (i__4865__auto___44218 + (1));
i__4865__auto___44218 = G__44219;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to43969.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.mail_to43969.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__43972){
var vec__43973 = p__43972;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43973,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4253__auto__ = content;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to43969.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to43969.cljs$lang$applyTo = (function (seq43970){
var G__43971 = cljs.core.first(seq43970);
var seq43970__$1 = cljs.core.next(seq43970);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43971,seq43970__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to43969);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list43978 = (function sablono$core$unordered_list43978(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function sablono$core$unordered_list43978_$_iter__43979(s__43980){
return (new cljs.core.LazySeq(null,(function (){
var s__43980__$1 = s__43980;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43980__$1);
if(temp__5753__auto__){
var s__43980__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43980__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43980__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43982 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43981 = (0);
while(true){
if((i__43981 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__43981);
cljs.core.chunk_append(b__43982,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44224 = (i__43981 + (1));
i__43981 = G__44224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43982),sablono$core$unordered_list43978_$_iter__43979(cljs.core.chunk_rest(s__43980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43982),null);
}
} else {
var x = cljs.core.first(s__43980__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list43978_$_iter__43979(cljs.core.rest(s__43980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list43978);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list43985 = (function sablono$core$ordered_list43985(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4652__auto__ = (function sablono$core$ordered_list43985_$_iter__43990(s__43991){
return (new cljs.core.LazySeq(null,(function (){
var s__43991__$1 = s__43991;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43991__$1);
if(temp__5753__auto__){
var s__43991__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43991__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43991__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43993 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43992 = (0);
while(true){
if((i__43992 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__43992);
cljs.core.chunk_append(b__43993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__44229 = (i__43992 + (1));
i__43992 = G__44229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43993),sablono$core$ordered_list43985_$_iter__43990(cljs.core.chunk_rest(s__43991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43993),null);
}
} else {
var x = cljs.core.first(s__43991__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list43985_$_iter__43990(cljs.core.rest(s__43991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list43985);
/**
 * Create an image element.
 */
sablono.core.image43994 = (function sablono$core$image43994(var_args){
var G__43996 = arguments.length;
switch (G__43996) {
case 1:
return sablono.core.image43994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image43994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image43994.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image43994.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image43994.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image43994);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__43997_SHARP_,p2__43998_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__43997_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__43998_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__44000_SHARP_,p2__44001_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44000_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__44001_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__44012 = arguments.length;
switch (G__44012) {
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field44022 = (function sablono$core$color_field44022(var_args){
var G__44028 = arguments.length;
switch (G__44028) {
case 1:
return sablono.core.color_field44022.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field44022.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field44022.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__43931__auto__);
}));

(sablono.core.color_field44022.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.color_field44022.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field44022);

/**
 * Creates a date input field.
 */
sablono.core.date_field44037 = (function sablono$core$date_field44037(var_args){
var G__44039 = arguments.length;
switch (G__44039) {
case 1:
return sablono.core.date_field44037.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field44037.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field44037.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__43931__auto__);
}));

(sablono.core.date_field44037.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.date_field44037.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field44037);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field44044 = (function sablono$core$datetime_field44044(var_args){
var G__44046 = arguments.length;
switch (G__44046) {
case 1:
return sablono.core.datetime_field44044.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field44044.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field44044.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__43931__auto__);
}));

(sablono.core.datetime_field44044.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.datetime_field44044.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field44044);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field44047 = (function sablono$core$datetime_local_field44047(var_args){
var G__44049 = arguments.length;
switch (G__44049) {
case 1:
return sablono.core.datetime_local_field44047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field44047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field44047.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__43931__auto__);
}));

(sablono.core.datetime_local_field44047.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.datetime_local_field44047.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field44047);

/**
 * Creates a email input field.
 */
sablono.core.email_field44050 = (function sablono$core$email_field44050(var_args){
var G__44052 = arguments.length;
switch (G__44052) {
case 1:
return sablono.core.email_field44050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field44050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field44050.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__43931__auto__);
}));

(sablono.core.email_field44050.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.email_field44050.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field44050);

/**
 * Creates a file input field.
 */
sablono.core.file_field44059 = (function sablono$core$file_field44059(var_args){
var G__44062 = arguments.length;
switch (G__44062) {
case 1:
return sablono.core.file_field44059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field44059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field44059.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__43931__auto__);
}));

(sablono.core.file_field44059.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.file_field44059.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field44059);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field44081 = (function sablono$core$hidden_field44081(var_args){
var G__44087 = arguments.length;
switch (G__44087) {
case 1:
return sablono.core.hidden_field44081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field44081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field44081.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__43931__auto__);
}));

(sablono.core.hidden_field44081.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.hidden_field44081.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field44081);

/**
 * Creates a month input field.
 */
sablono.core.month_field44100 = (function sablono$core$month_field44100(var_args){
var G__44102 = arguments.length;
switch (G__44102) {
case 1:
return sablono.core.month_field44100.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field44100.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field44100.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__43931__auto__);
}));

(sablono.core.month_field44100.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.month_field44100.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field44100);

/**
 * Creates a number input field.
 */
sablono.core.number_field44103 = (function sablono$core$number_field44103(var_args){
var G__44105 = arguments.length;
switch (G__44105) {
case 1:
return sablono.core.number_field44103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field44103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field44103.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__43931__auto__);
}));

(sablono.core.number_field44103.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.number_field44103.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field44103);

/**
 * Creates a password input field.
 */
sablono.core.password_field44106 = (function sablono$core$password_field44106(var_args){
var G__44108 = arguments.length;
switch (G__44108) {
case 1:
return sablono.core.password_field44106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field44106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field44106.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__43931__auto__);
}));

(sablono.core.password_field44106.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.password_field44106.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field44106);

/**
 * Creates a range input field.
 */
sablono.core.range_field44109 = (function sablono$core$range_field44109(var_args){
var G__44111 = arguments.length;
switch (G__44111) {
case 1:
return sablono.core.range_field44109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field44109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field44109.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__43931__auto__);
}));

(sablono.core.range_field44109.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.range_field44109.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field44109);

/**
 * Creates a search input field.
 */
sablono.core.search_field44112 = (function sablono$core$search_field44112(var_args){
var G__44114 = arguments.length;
switch (G__44114) {
case 1:
return sablono.core.search_field44112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field44112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field44112.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__43931__auto__);
}));

(sablono.core.search_field44112.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.search_field44112.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field44112);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field44115 = (function sablono$core$tel_field44115(var_args){
var G__44117 = arguments.length;
switch (G__44117) {
case 1:
return sablono.core.tel_field44115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field44115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field44115.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__43931__auto__);
}));

(sablono.core.tel_field44115.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.tel_field44115.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field44115);

/**
 * Creates a text input field.
 */
sablono.core.text_field44118 = (function sablono$core$text_field44118(var_args){
var G__44120 = arguments.length;
switch (G__44120) {
case 1:
return sablono.core.text_field44118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field44118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field44118.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__43931__auto__);
}));

(sablono.core.text_field44118.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.text_field44118.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field44118);

/**
 * Creates a time input field.
 */
sablono.core.time_field44121 = (function sablono$core$time_field44121(var_args){
var G__44123 = arguments.length;
switch (G__44123) {
case 1:
return sablono.core.time_field44121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field44121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field44121.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__43931__auto__);
}));

(sablono.core.time_field44121.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.time_field44121.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field44121);

/**
 * Creates a url input field.
 */
sablono.core.url_field44124 = (function sablono$core$url_field44124(var_args){
var G__44126 = arguments.length;
switch (G__44126) {
case 1:
return sablono.core.url_field44124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field44124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field44124.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__43931__auto__);
}));

(sablono.core.url_field44124.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.url_field44124.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field44124);

/**
 * Creates a week input field.
 */
sablono.core.week_field44127 = (function sablono$core$week_field44127(var_args){
var G__44129 = arguments.length;
switch (G__44129) {
case 1:
return sablono.core.week_field44127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field44127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field44127.cljs$core$IFn$_invoke$arity$1 = (function (name__43931__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__43931__auto__);
}));

(sablono.core.week_field44127.cljs$core$IFn$_invoke$arity$2 = (function (name__43931__auto__,value__43932__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__43931__auto__,value__43932__auto__);
}));

(sablono.core.week_field44127.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field44127);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box44130 = (function sablono$core$check_box44130(var_args){
var G__44132 = arguments.length;
switch (G__44132) {
case 1:
return sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box44130.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box44130.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box44130);
/**
 * Creates a radio button.
 */
sablono.core.radio_button44133 = (function sablono$core$radio_button44133(var_args){
var G__44135 = arguments.length;
switch (G__44135) {
case 1:
return sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button44133.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button44133.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button44133);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options44142 = (function sablono$core$select_options44142(coll){
var iter__4652__auto__ = (function sablono$core$select_options44142_$_iter__44143(s__44144){
return (new cljs.core.LazySeq(null,(function (){
var s__44144__$1 = s__44144;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__44144__$1);
if(temp__5753__auto__){
var s__44144__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44144__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__44144__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__44146 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__44145 = (0);
while(true){
if((i__44145 < size__4651__auto__)){
var x = cljs.core._nth(c__4650__auto__,i__44145);
cljs.core.chunk_append(b__44146,((cljs.core.sequential_QMARK_(x))?(function (){var vec__44152 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44152,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44152,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44152,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options44142.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options44142.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options44142.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__44389 = (i__44145 + (1));
i__44145 = G__44389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44146),sablono$core$select_options44142_$_iter__44143(cljs.core.chunk_rest(s__44144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44146),null);
}
} else {
var x = cljs.core.first(s__44144__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__44164 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44164,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44164,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44164,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options44142.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options44142.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options44142.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options44142_$_iter__44143(cljs.core.rest(s__44144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options44142);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down44169 = (function sablono$core$drop_down44169(var_args){
var G__44171 = arguments.length;
switch (G__44171) {
case 2:
return sablono.core.drop_down44169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down44169.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down44169.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down44169.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down44169.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down44169.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down44169);
/**
 * Creates a text area element.
 */
sablono.core.text_area44172 = (function sablono$core$text_area44172(var_args){
var G__44174 = arguments.length;
switch (G__44174) {
case 1:
return sablono.core.text_area44172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area44172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area44172.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area44172.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4253__auto__ = value;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area44172.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area44172);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label44175 = (function sablono$core$label44175(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label44175);
/**
 * Creates a submit button.
 */
sablono.core.submit_button44176 = (function sablono$core$submit_button44176(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button44176);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button44177 = (function sablono$core$reset_button44177(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button44177);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to44178 = (function sablono$core$form_to44178(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44520 = arguments.length;
var i__4865__auto___44533 = (0);
while(true){
if((i__4865__auto___44533 < len__4864__auto___44520)){
args__4870__auto__.push((arguments[i__4865__auto___44533]));

var G__44550 = (i__4865__auto___44533 + (1));
i__4865__auto___44533 = G__44550;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to44178.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(sablono.core.form_to44178.cljs$core$IFn$_invoke$arity$variadic = (function (p__44181,body){
var vec__44182 = p__44181;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44182,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44182,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to44178.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to44178.cljs$lang$applyTo = (function (seq44179){
var G__44180 = cljs.core.first(seq44179);
var seq44179__$1 = cljs.core.next(seq44179);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44180,seq44179__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to44178);

//# sourceMappingURL=sablono.core.js.map
