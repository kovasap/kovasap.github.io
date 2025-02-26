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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__30061(s__30062){
return (new cljs.core.LazySeq(null,(function (){
var s__30062__$1 = s__30062;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30062__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var note = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__30062__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__30061_$_iter__30063(s__30064){
return (new cljs.core.LazySeq(null,((function (s__30062__$1,note,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__30064__$1 = s__30064;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30064__$1);
if(temp__5804__auto____$1){
var s__30064__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30064__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30064__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30066 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30065 = (0);
while(true){
if((i__30065 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__30065);
cljs.core.chunk_append(b__30066,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__30195 = (i__30065 + (1));
i__30065 = G__30195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30066),website_helpers$notes$get_notes_by_category_$_iter__30061_$_iter__30063(cljs.core.chunk_rest(s__30064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30066),null);
}
} else {
var category = cljs.core.first(s__30064__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__30061_$_iter__30063(cljs.core.rest(s__30064__$2)));
}
} else {
return null;
}
break;
}
});})(s__30062__$1,note,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__30062__$1,note,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__30061(cljs.core.rest(s__30062__$1)));
} else {
var G__30197 = cljs.core.rest(s__30062__$1);
s__30062__$1 = G__30197;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes);
})());
});
website_helpers.notes.get_largest_category = (function website_helpers$notes$get_largest_category(var_args){
var G__30075 = arguments.length;
switch (G__30075) {
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
return website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,cljs.core.PersistentHashSet.EMPTY);
}));

(website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2 = (function (notes,categories_to_ignore){
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__30091){
var vec__30092 = p__30091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30092,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__30095(s__30096){
return (new cljs.core.LazySeq(null,(function (){
var s__30096__$1 = s__30096;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30096__$1);
if(temp__5804__auto__){
var s__30096__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30096__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30096__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30098 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30097 = (0);
while(true){
if((i__30097 < size__5522__auto__)){
var vec__30099 = cljs.core._nth(c__5521__auto__,i__30097);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30099,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__30098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__30202 = (i__30097 + (1));
i__30097 = G__30202;
continue;
} else {
var G__30203 = (i__30097 + (1));
i__30097 = G__30203;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30098),website_helpers$notes$iter__30095(cljs.core.chunk_rest(s__30096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30098),null);
}
} else {
var vec__30102 = cljs.core.first(s__30096__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30102,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__30095(cljs.core.rest(s__30096__$2)));
} else {
var G__30204 = cljs.core.rest(s__30096__$2);
s__30096__$1 = G__30204;
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
return iter__5523__auto__(website_helpers.notes.get_notes_by_category(notes));
})())));
}));

(website_helpers.notes.get_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_largest_category = (function website_helpers$notes$get_notes_by_largest_category(var_args){
var G__30106 = arguments.length;
switch (G__30106) {
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
var vec__30107 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30107,(1),null);
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
website_helpers.notes.path__GT_url = (function website_helpers$notes$path__GT_url(path){
return clojure.string.replace(clojure.string.replace_first(path,"content",""),/.md/,"/");
});
website_helpers.notes.note__GT_link = (function website_helpers$notes$note__GT_link(note,cur_page_note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_page_note,note)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null));
} else {
return attrs;
}
})(),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)], null);
});
website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note,cur_page_note){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(note)], null),website_helpers.notes.note__GT_link(note,cur_page_note)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30110_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__30110_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_subtree = (function website_helpers$notes$make_subtree(notes_by_category,cur_page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_subtree_$_iter__30113(s__30114){
return (new cljs.core.LazySeq(null,(function (){
var s__30114__$1 = s__30114;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30114__$1);
if(temp__5804__auto__){
var s__30114__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30114__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30114__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30116 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30115 = (0);
while(true){
if((i__30115 < size__5522__auto__)){
var vec__30117 = cljs.core._nth(c__5521__auto__,i__30115);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30117,(1),null);
cljs.core.chunk_append(b__30116,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__30115,vec__30117,category,subtree,c__5521__auto__,size__5522__auto__,b__30116,s__30114__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__30113_$_iter__30120(s__30121){
return (new cljs.core.LazySeq(null,((function (i__30115,vec__30117,category,subtree,c__5521__auto__,size__5522__auto__,b__30116,s__30114__$2,temp__5804__auto__){
return (function (){
var s__30121__$1 = s__30121;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30121__$1);
if(temp__5804__auto____$1){
var s__30121__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30121__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__30121__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__30123 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__30122 = (0);
while(true){
if((i__30122 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__30122);
cljs.core.chunk_append(b__30123,website_helpers.notes.note_to_li(note,cur_page));

var G__30210 = (i__30122 + (1));
i__30122 = G__30210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30123),website_helpers$notes$make_subtree_$_iter__30113_$_iter__30120(cljs.core.chunk_rest(s__30121__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30123),null);
}
} else {
var note = cljs.core.first(s__30121__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_subtree_$_iter__30113_$_iter__30120(cljs.core.rest(s__30121__$2)));
}
} else {
return null;
}
break;
}
});})(i__30115,vec__30117,category,subtree,c__5521__auto__,size__5522__auto__,b__30116,s__30114__$2,temp__5804__auto__))
,null,null));
});})(i__30115,vec__30117,category,subtree,c__5521__auto__,size__5522__auto__,b__30116,s__30114__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_subtree.call(null,subtree,cur_page))], null)], null)], null)));

var G__30211 = (i__30115 + (1));
i__30115 = G__30211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30116),website_helpers$notes$make_subtree_$_iter__30113(cljs.core.chunk_rest(s__30114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30116),null);
}
} else {
var vec__30125 = cljs.core.first(s__30114__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30125,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__30125,category,subtree,s__30114__$2,temp__5804__auto__){
return (function website_helpers$notes$make_subtree_$_iter__30113_$_iter__30129(s__30130){
return (new cljs.core.LazySeq(null,(function (){
var s__30130__$1 = s__30130;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30130__$1);
if(temp__5804__auto____$1){
var s__30130__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30130__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30130__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30132 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30131 = (0);
while(true){
if((i__30131 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__30131);
cljs.core.chunk_append(b__30132,website_helpers.notes.note_to_li(note,cur_page));

var G__30214 = (i__30131 + (1));
i__30131 = G__30214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),website_helpers$notes$make_subtree_$_iter__30113_$_iter__30129(cljs.core.chunk_rest(s__30130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30132),null);
}
} else {
var note = cljs.core.first(s__30130__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_subtree_$_iter__30113_$_iter__30129(cljs.core.rest(s__30130__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__30125,category,subtree,s__30114__$2,temp__5804__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_subtree.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_subtree.call(null,subtree,cur_page))], null)], null)], null)),website_helpers$notes$make_subtree_$_iter__30113(cljs.core.rest(s__30114__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__30112_SHARP_){
var k = cljs.core.first(p1__30112_SHARP_);
if(typeof k === 'string'){
return k;
} else {
return cljs.core.name(k);
}
}),notes_by_category));
})()));
});
website_helpers.notes.overlap_QMARK_ = (function website_helpers$notes$overlap_QMARK_(set1,set2){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(set1,set2))));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories))){
return cljs.core.set(notes);
} else {
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30144_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__30144_SHARP_));
}),notes));
}
});
/**
 * Converts a map produced by get-notes-by-category to a PageTree)
 *   readable by page_graph.cljs logic.
 */
website_helpers.notes.notes_by_category_to_children_tree = (function website_helpers$notes$notes_by_category_to_children_tree(notes_by_category,categories_to_idx){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$notes_by_category_to_children_tree_$_iter__30145(s__30146){
return (new cljs.core.LazySeq(null,(function (){
var s__30146__$1 = s__30146;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30146__$1);
if(temp__5804__auto__){
var s__30146__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30146__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30146__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30148 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30147 = (0);
while(true){
if((i__30147 < size__5522__auto__)){
var vec__30149 = cljs.core._nth(c__5521__auto__,i__30147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30149,(1),null);
cljs.core.chunk_append(b__30148,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)));

var G__30261 = (i__30147 + (1));
i__30147 = G__30261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30148),website_helpers$notes$notes_by_category_to_children_tree_$_iter__30145(cljs.core.chunk_rest(s__30146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30148),null);
}
} else {
var vec__30152 = cljs.core.first(s__30146__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30152,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"notes","notes",-1039600523),k))?cljs.core.vec(v):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,k),new cljs.core.Keyword(null,"children","children",-940561982),(website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.notes_by_category_to_children_tree.cljs$core$IFn$_invoke$arity$2(v,categories_to_idx) : website_helpers.notes.notes_by_category_to_children_tree.call(null,v,categories_to_idx))], null)], null)),website_helpers$notes$notes_by_category_to_children_tree_$_iter__30145(cljs.core.rest(s__30146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(notes_by_category);
})()));
});
website_helpers.notes.organize_notes_by_category = (function website_helpers$notes$organize_notes_by_category(notes,selected_categories){
return website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.get_notes_for_categories(notes,selected_categories));
});
website_helpers.notes.index_categories = (function website_helpers$notes$index_categories(categories,num_notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$index_categories_$_iter__30159(s__30160){
return (new cljs.core.LazySeq(null,(function (){
var s__30160__$1 = s__30160;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30160__$1);
if(temp__5804__auto__){
var s__30160__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30160__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30160__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30162 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30161 = (0);
while(true){
if((i__30161 < size__5522__auto__)){
var vec__30164 = cljs.core._nth(c__5521__auto__,i__30161);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30164,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30164,(1),null);
cljs.core.chunk_append(b__30162,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null));

var G__30268 = (i__30161 + (1));
i__30161 = G__30268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30162),website_helpers$notes$index_categories_$_iter__30159(cljs.core.chunk_rest(s__30160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30162),null);
}
} else {
var vec__30168 = cljs.core.first(s__30160__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30168,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30168,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null),website_helpers$notes$index_categories_$_iter__30159(cljs.core.rest(s__30160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,categories));
})());
});
website_helpers.notes.to_tree = (function website_helpers$notes$to_tree(){
return cljs.test.test_var(website_helpers.notes.to_tree.cljs$lang$var);
});
website_helpers.notes.to_tree.cljs$lang$test = (function (){
website_helpers.notes.example_categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null);

try{var values__10764__auto__ = (new cljs.core.List(null,website_helpers.notes.notes_by_category_to_children_tree(website_helpers.notes.organize_notes_by_category(website_helpers.notes.example_notes,website_helpers.notes.example_categories),website_helpers.notes.index_categories(website_helpers.notes.example_categories,cljs.core.count(website_helpers.notes.example_notes))),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)], null)], null),null,(1),null)),(2),null));
var result__10765__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__10764__auto__);
if(cljs.core.truth_(result__10765__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),7,172,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),188,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),7,172,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),188,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10764__auto__),null,(1),null)),(2),null)),null]));
}

return result__10765__auto__;
}catch (e30174){var t__10815__auto__ = e30174;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["website_helpers/notes.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),7,172,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"notes-by-category-to-children-tree","notes-by-category-to-children-tree",-982591524,null),cljs.core.list(new cljs.core.Symbol(null,"organize-notes-by-category","organize-notes-by-category",-1788070850,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null)),cljs.core.list(new cljs.core.Symbol(null,"index-categories","index-categories",-594031902,null),new cljs.core.Symbol(null,"example-categories","example-categories",2141439083,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"example-notes","example-notes",-803370595,null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"a 1",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"c",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"4",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 4",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/4.md",new cljs.core.Keyword(null,"title","title",636505583),"t-4",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"b",new cljs.core.Keyword(null,"idx","idx",1053688473),null,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"1",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 1",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/1.md",new cljs.core.Keyword(null,"title","title",636505583),"t-1",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b","null","a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"2",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 2",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/2.md",new cljs.core.Keyword(null,"title","title",636505583),"t-2",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1","null"], null), null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"3",new cljs.core.Keyword(null,"markdown","markdown",1227225089),"text 3",new cljs.core.Keyword(null,"path","path",-188191168),"content/docs/3.md",new cljs.core.Keyword(null,"title","title",636505583),"t-3",new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c","null"], null), null)], null)], null)),188,t__10815__auto__,null]));
}});

(website_helpers.notes.to_tree.cljs$lang$var = new cljs.core.Var(function(){return website_helpers.notes.to_tree;},new cljs.core.Symbol("website-helpers.notes","to-tree","website-helpers.notes/to-tree",-1805703668,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"website-helpers.notes","website-helpers.notes",1477508270,null),new cljs.core.Symbol(null,"to-tree","to-tree",-639084910,null),"website_helpers/notes.cljs",17,1,170,170,cljs.core.List.EMPTY,null,(cljs.core.truth_(website_helpers.notes.to_tree)?website_helpers.notes.to_tree.cljs$lang$test:null)])));
website_helpers.notes.make_category_menu = (function website_helpers$notes$make_category_menu(notes,selected_categories){
return website_helpers.notes.make_subtree(website_helpers.notes.organize_notes_by_category(notes,selected_categories),website_helpers.notes.get_cur_page_note(notes));
});
website_helpers.notes.filter_category_selections = (function website_helpers$notes$filter_category_selections(notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$filter_category_selections_$_iter__30178(s__30179){
return (new cljs.core.LazySeq(null,(function (){
var s__30179__$1 = s__30179;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30179__$1);
if(temp__5804__auto__){
var s__30179__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30179__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__30179__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__30181 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__30180 = (0);
while(true){
if((i__30180 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__30180);
cljs.core.chunk_append(b__30181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null));

var G__30276 = (i__30180 + (1));
i__30180 = G__30276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30181),website_helpers$notes$filter_category_selections_$_iter__30178(cljs.core.chunk_rest(s__30179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30181),null);
}
} else {
var category = cljs.core.first(s__30179__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,cljs.core.contains_QMARK_(cljs.core.deref(website_helpers.global.url_params),category)], null),website_helpers$notes$filter_category_selections_$_iter__30178(cljs.core.rest(s__30179__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.keys(website_helpers.notes.get_notes_by_category(notes)));
})());
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(notes){
var category_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.keys(website_helpers.notes.filter_category_selections(notes))),website_helpers.global.url_params));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,category_selections,"Select Categories"], null)], null),website_helpers.notes.make_category_menu(notes,website_helpers.utils.get_selected_vars(cljs.core.deref(category_selections)))], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(notes){
return (function (){
var note = cljs.core.rand_nth(notes);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Random Page: ",website_helpers.notes.note__GT_link(note,null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70%"], null)], null)," (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)),")"], null)], null);
});
});
goog.exportSymbol('website_helpers.notes.random_page', website_helpers.notes.random_page);

//# sourceMappingURL=website_helpers.notes.js.map
