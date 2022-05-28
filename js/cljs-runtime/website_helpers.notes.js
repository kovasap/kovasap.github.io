goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.Hiccup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"any","any",1705907423)], null);
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/one.md",new cljs.core.Keyword(null,"title","title",636505583),"one",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["a",null,"b",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/two.md",new cljs.core.Keyword(null,"title","title",636505583),"two",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a",null], null), null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/thr.md",new cljs.core.Keyword(null,"title","title",636505583),"thr",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)], null)], null);
/**
 * Returns a map of categories to all notes with that category.
 */
website_helpers.notes.get_notes_by_category = (function website_helpers$notes$get_notes_by_category(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__50524(s__50525){
return (new cljs.core.LazySeq(null,(function (){
var s__50525__$1 = s__50525;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50525__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var note = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__50525__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__50524_$_iter__50526(s__50527){
return (new cljs.core.LazySeq(null,((function (s__50525__$1,note,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__50527__$1 = s__50527;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50527__$1);
if(temp__5753__auto____$1){
var s__50527__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50527__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50527__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50529 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50528 = (0);
while(true){
if((i__50528 < size__4651__auto__)){
var category = cljs.core._nth(c__4650__auto__,i__50528);
cljs.core.chunk_append(b__50529,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__50572 = (i__50528 + (1));
i__50528 = G__50572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50529),website_helpers$notes$get_notes_by_category_$_iter__50524_$_iter__50526(cljs.core.chunk_rest(s__50527__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50529),null);
}
} else {
var category = cljs.core.first(s__50527__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__50524_$_iter__50526(cljs.core.rest(s__50527__$2)));
}
} else {
return null;
}
break;
}
});})(s__50525__$1,note,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__50525__$1,note,xs__6308__auto__,temp__5753__auto__))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,website_helpers$notes$get_notes_by_category_$_iter__50524(cljs.core.rest(s__50525__$1)));
} else {
var G__50573 = cljs.core.rest(s__50525__$1);
s__50525__$1 = G__50573;
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
var G__50531 = arguments.length;
switch (G__50531) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__50532){
var vec__50533 = p__50532;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(1),null);
return cljs.core.count(v);
}),(function (){var iter__4652__auto__ = (function website_helpers$notes$iter__50536(s__50537){
return (new cljs.core.LazySeq(null,(function (){
var s__50537__$1 = s__50537;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50537__$1);
if(temp__5753__auto__){
var s__50537__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50537__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50537__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50539 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50538 = (0);
while(true){
if((i__50538 < size__4651__auto__)){
var vec__50540 = cljs.core._nth(c__4650__auto__,i__50538);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__50539,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__50579 = (i__50538 + (1));
i__50538 = G__50579;
continue;
} else {
var G__50580 = (i__50538 + (1));
i__50538 = G__50580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50539),website_helpers$notes$iter__50536(cljs.core.chunk_rest(s__50537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50539),null);
}
} else {
var vec__50543 = cljs.core.first(s__50537__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50543,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__50536(cljs.core.rest(s__50537__$2)));
} else {
var G__50581 = cljs.core.rest(s__50537__$2);
s__50537__$1 = G__50581;
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
var G__50547 = arguments.length;
switch (G__50547) {
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
if((cljs.core.count(notes) <= (1))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
var vec__50548 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50548,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50548,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),clojure.string.replace(clojure.string.replace_first(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note),"content",""),/.md/,"/")], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null)], null);
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$notes$make_subtree_$_iter__50551(s__50552){
return (new cljs.core.LazySeq(null,(function (){
var s__50552__$1 = s__50552;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50552__$1);
if(temp__5753__auto__){
var s__50552__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50552__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50552__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50554 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50553 = (0);
while(true){
if((i__50553 < size__4651__auto__)){
var vec__50555 = cljs.core._nth(c__4650__auto__,i__50553);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50555,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50555,(1),null);
cljs.core.chunk_append(b__50554,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__50553,vec__50555,category,subtree,c__4650__auto__,size__4651__auto__,b__50554,s__50552__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__50551_$_iter__50558(s__50559){
return (new cljs.core.LazySeq(null,((function (i__50553,vec__50555,category,subtree,c__4650__auto__,size__4651__auto__,b__50554,s__50552__$2,temp__5753__auto__){
return (function (){
var s__50559__$1 = s__50559;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50559__$1);
if(temp__5753__auto____$1){
var s__50559__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50559__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__50559__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__50561 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__50560 = (0);
while(true){
if((i__50560 < size__4651__auto____$1)){
var note = cljs.core._nth(c__4650__auto____$1,i__50560);
cljs.core.chunk_append(b__50561,website_helpers.notes.note_to_li(note));

var G__50583 = (i__50560 + (1));
i__50560 = G__50583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50561),website_helpers$notes$make_subtree_$_iter__50551_$_iter__50558(cljs.core.chunk_rest(s__50559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50561),null);
}
} else {
var note = cljs.core.first(s__50559__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__50551_$_iter__50558(cljs.core.rest(s__50559__$2)));
}
} else {
return null;
}
break;
}
});})(i__50553,vec__50555,category,subtree,c__4650__auto__,size__4651__auto__,b__50554,s__50552__$2,temp__5753__auto__))
,null,null));
});})(i__50553,vec__50555,category,subtree,c__4650__auto__,size__4651__auto__,b__50554,s__50552__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)));

var G__50584 = (i__50553 + (1));
i__50553 = G__50584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50554),website_helpers$notes$make_subtree_$_iter__50551(cljs.core.chunk_rest(s__50552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50554),null);
}
} else {
var vec__50562 = cljs.core.first(s__50552__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__50562,category,subtree,s__50552__$2,temp__5753__auto__){
return (function website_helpers$notes$make_subtree_$_iter__50551_$_iter__50565(s__50566){
return (new cljs.core.LazySeq(null,(function (){
var s__50566__$1 = s__50566;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50566__$1);
if(temp__5753__auto____$1){
var s__50566__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50566__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50566__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50568 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50567 = (0);
while(true){
if((i__50567 < size__4651__auto__)){
var note = cljs.core._nth(c__4650__auto__,i__50567);
cljs.core.chunk_append(b__50568,website_helpers.notes.note_to_li(note));

var G__50585 = (i__50567 + (1));
i__50567 = G__50585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50568),website_helpers$notes$make_subtree_$_iter__50551_$_iter__50565(cljs.core.chunk_rest(s__50566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50568),null);
}
} else {
var note = cljs.core.first(s__50566__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note),website_helpers$notes$make_subtree_$_iter__50551_$_iter__50565(cljs.core.rest(s__50566__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50562,category,subtree,s__50552__$2,temp__5753__auto__))
;
return iter__4652__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),category], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$1(subtree) : website_helpers.notes.make_subtree.call(null,subtree))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__50551(cljs.core.rest(s__50552__$2)));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50569_SHARP_){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__50569_SHARP_)))));
}),notes);
});
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,selected_categories,organization_fn){
return website_helpers.notes.make_subtree((function (){var G__50570 = cljs.core.set(website_helpers.notes.get_notes_for_categories(notes,selected_categories));
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__50570) : organization_fn.call(null,G__50570));
})());
});
website_helpers.notes.example_selected_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["a",null,"b",null,"c",null], null), null);

//# sourceMappingURL=website_helpers.notes.js.map
