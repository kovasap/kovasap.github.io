goog.provide('website_helpers.recent_posts');
/**
 * A post title with the first few lines.  Links to the actual post.
 */
website_helpers.recent_posts.collapsed_post = (function website_helpers$recent_posts$collapsed_post(p__45228){
var map__45229 = p__45228;
var map__45229__$1 = cljs.core.__destructure_map(map__45229);
var note = map__45229__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"title","title",636505583));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var markdown__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
var categories = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45229__$1,new cljs.core.Keyword(null,"categories","categories",178386610));
var paragraphs = clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__5045__auto__ = markdown__$1;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),/\n\n/);
var first_p_of_content = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45227_SHARP_){
return ((clojure.string.starts_with_QMARK_(p1__45227_SHARP_,"---")) || (clojure.string.starts_with_QMARK_(p1__45227_SHARP_,"#")));
}),paragraphs));
if(clojure.string.blank_QMARK_(cljs.core.first(paragraphs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Empty page"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"baseline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),website_helpers.notes.timestamp__GT_day(website_helpers.notes.last_modification_time(note))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",categories)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),first_p_of_content,"  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.hyperlink_lists.markdown_path_to_url(path)], null),"..."], null)], null)], null);
}
});
website_helpers.recent_posts.recent_posts = (function website_helpers$recent_posts$recent_posts(var_args){
var G__45231 = arguments.length;
switch (G__45231) {
case 0:
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.recent_posts.recent_posts', website_helpers.recent_posts.recent_posts);

(website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$0 = (function (){
return website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(website_helpers.global.notes));
}));

(website_helpers.recent_posts.recent_posts.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return (function (){
var notes_by_month = (function (){var fexpr__45232 = new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287).cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes);
return (fexpr__45232.cljs$core$IFn$_invoke$arity$1 ? fexpr__45232.cljs$core$IFn$_invoke$arity$1(notes) : fexpr__45232.call(null,notes));
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5523__auto__ = (function website_helpers$recent_posts$iter__45233(s__45234){
return (new cljs.core.LazySeq(null,(function (){
var s__45234__$1 = s__45234;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__45234__$1);
if(temp__5825__auto__){
var s__45234__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45234__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__45234__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__45236 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__45235 = (0);
while(true){
if((i__45235 < size__5522__auto__)){
var vec__45237 = cljs.core._nth(c__5521__auto__,i__45235);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45237,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45237,(1),null);
cljs.core.chunk_append(b__45236,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(website_helpers.recent_posts.collapsed_post,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(group))));

var G__45244 = (i__45235 + (1));
i__45235 = G__45244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45236),website_helpers$recent_posts$iter__45233(cljs.core.chunk_rest(s__45234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45236),null);
}
} else {
var vec__45240 = cljs.core.first(s__45234__$2);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45240,(0),null);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45240,(1),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(website_helpers.recent_posts.collapsed_post,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(group))),website_helpers$recent_posts$iter__45233(cljs.core.rest(s__45234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes_by_month);
})());
});
}));

(website_helpers.recent_posts.recent_posts.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=website_helpers.recent_posts.js.map
