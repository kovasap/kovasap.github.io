goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.ex_note = (function website_helpers$notes$ex_note(n,categories){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"markdown","markdown",1227225089),["text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"path","path",-188191168),["content/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".md"].join(''),new cljs.core.Keyword(null,"title","title",636505583),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
});
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.ex_note("1",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)),website_helpers.notes.ex_note("2",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)),website_helpers.notes.ex_note("3",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)),website_helpers.notes.ex_note("4",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null))], null);
/**
 * Returns a map of categories to all notes with that category.
 */
website_helpers.notes.get_notes_by_category = (function website_helpers$notes$get_notes_by_category(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__86297(s__86298){
return (new cljs.core.LazySeq(null,(function (){
var s__86298__$1 = s__86298;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86298__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var note = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__86298__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__86297_$_iter__86299(s__86300){
return (new cljs.core.LazySeq(null,((function (s__86298__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__86300__$1 = s__86300;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__86300__$1);
if(temp__5753__auto____$1){
var s__86300__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__86300__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86300__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86302 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86301 = (0);
while(true){
if((i__86301 < size__4651__auto__)){
var category = cljs.core._nth(c__4650__auto__,i__86301);
cljs.core.chunk_append(b__86302,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__86368 = (i__86301 + (1));
i__86301 = G__86368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86302),website_helpers$notes$get_notes_by_category_$_iter__86297_$_iter__86299(cljs.core.chunk_rest(s__86300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86302),null);
}
} else {
var category = cljs.core.first(s__86300__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__86297_$_iter__86299(cljs.core.rest(s__86300__$2)));
}
} else {
return null;
}
break;
}
});})(s__86298__$1,note,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__86298__$1,note,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,website_helpers$notes$get_notes_by_category_$_iter__86297(cljs.core.rest(s__86298__$1)));
} else {
var G__86369 = cljs.core.rest(s__86298__$1);
s__86298__$1 = G__86369;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(notes);
})());
});
website_helpers.notes.get_largest_category = (function website_helpers$notes$get_largest_category(var_args){
var G__86304 = arguments.length;
switch (G__86304) {
case 1:
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__86305){
var vec__86306 = p__86305;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86306,(1),null);
return cljs.core.count(v);
}),(function (){var iter__4652__auto__ = (function website_helpers$notes$iter__86309(s__86310){
return (new cljs.core.LazySeq(null,(function (){
var s__86310__$1 = s__86310;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86310__$1);
if(temp__5753__auto__){
var s__86310__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86310__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86310__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86312 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86311 = (0);
while(true){
if((i__86311 < size__4651__auto__)){
var vec__86313 = cljs.core._nth(c__4650__auto__,i__86311);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86313,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86313,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__86312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__86379 = (i__86311 + (1));
i__86311 = G__86379;
continue;
} else {
var G__86380 = (i__86311 + (1));
i__86311 = G__86380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86312),website_helpers$notes$iter__86309(cljs.core.chunk_rest(s__86310__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86312),null);
}
} else {
var vec__86316 = cljs.core.first(s__86310__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86316,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86316,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__86309(cljs.core.rest(s__86310__$2)));
} else {
var G__86381 = cljs.core.rest(s__86310__$2);
s__86310__$1 = G__86381;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(website_helpers.notes.get_notes_by_category(notes));
})())));
}));

(website_helpers.notes.get_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category = (function website_helpers$notes$get_notes_by_largest_category(var_args){
var G__86320 = arguments.length;
switch (G__86320) {
case 1:
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
if((((notes == null)) || ((cljs.core.count(notes) <= (1))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
var vec__86321 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86321,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86321,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
if((largest_notes == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1(cljs.core.set(website_helpers.all_data.notes));
website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clojure.string.replace(clojure.string.replace_first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note),"content",""),/.md/,"/")], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null)], null);
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$notes$make_subtree_$_iter__86324(s__86325){
return (new cljs.core.LazySeq(null,(function (){
var s__86325__$1 = s__86325;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86325__$1);
if(temp__5753__auto__){
var s__86325__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86325__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86325__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86327 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86326 = (0);
while(true){
if((i__86326 < size__4651__auto__)){
var vec__86328 = cljs.core._nth(c__4650__auto__,i__86326);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86328,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86328,(1),null);
cljs.core.chunk_append(b__86327,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__86326,vec__86328,category,subtree,c__4650__auto__,size__4651__auto__,b__86327,s__86325__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__86324_$_iter__86331(s__86332){
return (new cljs.core.LazySeq(null,((function (i__86326,vec__86328,category,subtree,c__4650__auto__,size__4651__auto__,b__86327,s__86325__$2,temp__5753__auto__){
return (function (){
var s__86332__$1 = s__86332;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__86332__$1);
if(temp__5753__auto____$1){
var s__86332__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__86332__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__86332__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__86334 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__86333 = (0);
while(true){
if((i__86333 < size__4651__auto____$1)){
var note = cljs.core._nth(c__4650__auto____$1,i__86333);
cljs.core.chunk_append(b__86334,website_helpers.notes.note_to_li(note));

var G__86395 = (i__86333 + (1));
i__86333 = G__86395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86334),website_helpers$notes$make_subtree_$_iter__86324_$_iter__86331(cljs.core.chunk_rest(s__86332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86334),null);
}
} else {
var note = cljs.core.first(s__86332__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__86324_$_iter__86331(cljs.core.rest(s__86332__$2)));
}
} else {
return null;
}
break;
}
});})(i__86326,vec__86328,category,subtree,c__4650__auto__,size__4651__auto__,b__86327,s__86325__$2,temp__5753__auto__))
,null,null));
});})(i__86326,vec__86328,category,subtree,c__4650__auto__,size__4651__auto__,b__86327,s__86325__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)));

var G__86396 = (i__86326 + (1));
i__86326 = G__86396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86327),website_helpers$notes$make_subtree_$_iter__86324(cljs.core.chunk_rest(s__86325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86327),null);
}
} else {
var vec__86335 = cljs.core.first(s__86325__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86335,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86335,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__86335,category,subtree,s__86325__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__86324_$_iter__86338(s__86339){
return (new cljs.core.LazySeq(null,(function (){
var s__86339__$1 = s__86339;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__86339__$1);
if(temp__5753__auto____$1){
var s__86339__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__86339__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86339__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86341 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86340 = (0);
while(true){
if((i__86340 < size__4651__auto__)){
var note = cljs.core._nth(c__4650__auto__,i__86340);
cljs.core.chunk_append(b__86341,website_helpers.notes.note_to_li(note));

var G__86397 = (i__86340 + (1));
i__86340 = G__86397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86341),website_helpers$notes$make_subtree_$_iter__86324_$_iter__86338(cljs.core.chunk_rest(s__86339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86341),null);
}
} else {
var note = cljs.core.first(s__86339__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__86324_$_iter__86338(cljs.core.rest(s__86339__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__86335,category,subtree,s__86325__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__86324(cljs.core.rest(s__86325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(notes_by_category);
})()));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__86342_SHARP_){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__86342_SHARP_)))));
}),notes));
});
/**
 * Converts a map produced by get-notes-by-category to a PageTree
 *   readable by page_graph.cljs logic.
 */
website_helpers.notes.notes_by_category_to_children_tree = (function website_helpers$notes$notes_by_category_to_children_tree(notes_by_category,categories_to_idx){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$notes$notes_by_category_to_children_tree_$_iter__86343(s__86344){
return (new cljs.core.LazySeq(null,(function (){
var s__86344__$1 = s__86344;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86344__$1);
if(temp__5753__auto__){
var s__86344__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86344__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86344__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86346 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86345 = (0);
while(true){
if((i__86345 < size__4651__auto__)){
var vec__86347 = cljs.core._nth(c__4650__auto__,i__86345);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86347,(1),null);
cljs.core.chunk_append(b__86346,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)));

var G__86406 = (i__86345 + (1));
i__86345 = G__86406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86346),website_helpers$notes$notes_by_category_to_children_tree_$_iter__86343(cljs.core.chunk_rest(s__86344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86346),null);
}
} else {
var vec__86350 = cljs.core.first(s__86344__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86350,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)),website_helpers$notes$notes_by_category_to_children_tree_$_iter__86343(cljs.core.rest(s__86344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(notes_by_category);
})()));
});
website_helpers.notes.organize_notes_by_category = (function website_helpers$notes$organize_notes_by_category(notes,selected_categories){
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.get_notes_for_categories(notes,selected_categories));
});
website_helpers.notes.index_categories = (function website_helpers$notes$index_categories(categories,num_notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$notes$index_categories_$_iter__86353(s__86354){
return (new cljs.core.LazySeq(null,(function (){
var s__86354__$1 = s__86354;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__86354__$1);
if(temp__5753__auto__){
var s__86354__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__86354__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__86354__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__86356 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__86355 = (0);
while(true){
if((i__86355 < size__4651__auto__)){
var vec__86357 = cljs.core._nth(c__4650__auto__,i__86355);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86357,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86357,(1),null);
cljs.core.chunk_append(b__86356,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null));

var G__86411 = (i__86355 + (1));
i__86355 = G__86411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__86356),website_helpers$notes$index_categories_$_iter__86353(cljs.core.chunk_rest(s__86354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__86356),null);
}
} else {
var vec__86360 = cljs.core.first(s__86354__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86360,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__86360,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null),website_helpers$notes$index_categories_$_iter__86353(cljs.core.rest(s__86354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,categories));
})());
});
website_helpers.notes.to_tree = (function website_helpers$notes$to_tree(){
return cljs.test.test_var(website_helpers.notes.to_tree.cljs$lang$var);
});
website_helpers.notes.to_tree.cljs$lang$test = (function (){
website_helpers.notes.example_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null);

try{var values__9749__auto__ = (new cljs.core.List(null,website_helpers.notes.notes_by_category_to_children_tree(website_helpers.notes.organize_notes_by_category(website_helpers.notes.example_notes,website_helpers.notes.example_categories),website_helpers.notes.index_categories(website_helpers.notes.example_categories,cljs.core.count(website_helpers.notes.example_notes))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)], null)], null),null,(1),null)),(2),null));
var result__9750__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9749__auto__);
if(cljs.core.truth_(result__9750__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),152,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9749__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),152,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9749__auto__),null,(1),null)),(2),null)),null]));
}

return result__9750__auto__;
}catch (e86363){var t__9800__auto__ = e86363;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),7,136,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),152,t__9800__auto__,null]));
}});

(website_helpers.notes.to_tree.cljs$lang$var = new cljs.core.Var(function(){return website_helpers.notes.to_tree;},new cljs.core.Symbol("website-helpers.notes","to-tree","website-helpers.notes/to-tree",-1805703668,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website-helpers.notes","website-helpers.notes",1477508270,null),new cljs.core.Symbol(null,"to-tree","to-tree",-639084910,null),"website_helpers/notes.cljs",17,1,134,134,cljs.core.List.EMPTY,null,(cljs.core.truth_(website_helpers.notes.to_tree)?website_helpers.notes.to_tree.cljs$lang$test:null)])));
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,selected_categories){
return website_helpers.notes.make_subtree(website_helpers.notes.organize_notes_by_category(notes,selected_categories));
});
website_helpers.notes.get_category_selections = (function website_helpers$notes$get_category_selections(notes){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.keys(website_helpers.notes.get_notes_by_category(notes)))));
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(notes){
var category_selections = website_helpers.notes.get_category_selections(notes);
return (function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["categories"], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(category_selections)], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,category_selections,"Select Categories"], null)], null),website_helpers.notes.make_category_menu(notes,website_helpers.utils.get_selected_vars(cljs.core.deref(category_selections)))], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);

//# sourceMappingURL=website_helpers.notes.js.map
