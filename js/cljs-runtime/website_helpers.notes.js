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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__37224(s__37225){
return (new cljs.core.LazySeq(null,(function (){
var s__37225__$1 = s__37225;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37225__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__37225__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__37224_$_iter__37226(s__37227){
return (new cljs.core.LazySeq(null,((function (s__37225__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37227__$1 = s__37227;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37227__$1);
if(temp__5825__auto____$1){
var s__37227__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37227__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37227__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37229 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37228 = (0);
while(true){
if((i__37228 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__37228);
cljs.core.chunk_append(b__37229,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__37314 = (i__37228 + (1));
i__37228 = G__37314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37229),website_helpers$notes$get_notes_by_category_$_iter__37224_$_iter__37226(cljs.core.chunk_rest(s__37227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37229),null);
}
} else {
var category = cljs.core.first(s__37227__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__37224_$_iter__37226(cljs.core.rest(s__37227__$2)));
}
} else {
return null;
}
break;
}
});})(s__37225__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37225__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__37224(cljs.core.rest(s__37225__$1)));
} else {
var G__37315 = cljs.core.rest(s__37225__$1);
s__37225__$1 = G__37315;
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
/**
 * Returns a map of path categories (derived from directories) to all notes
 *   with that category.
 */
website_helpers.notes.get_notes_by_directory = (function website_helpers$notes$get_notes_by_directory(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__37230(s__37231){
return (new cljs.core.LazySeq(null,(function (){
var s__37231__$1 = s__37231;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37231__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__37231__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__37230_$_iter__37232(s__37233){
return (new cljs.core.LazySeq(null,((function (s__37231__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__37233__$1 = s__37233;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37233__$1);
if(temp__5825__auto____$1){
var s__37233__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37233__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37233__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37235 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37234 = (0);
while(true){
if((i__37234 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__37234);
cljs.core.chunk_append(b__37235,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__37316 = (i__37234 + (1));
i__37234 = G__37316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37235),website_helpers$notes$get_notes_by_directory_$_iter__37230_$_iter__37232(cljs.core.chunk_rest(s__37233__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37235),null);
}
} else {
var category = cljs.core.first(s__37233__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__37230_$_iter__37232(cljs.core.rest(s__37233__$2)));
}
} else {
return null;
}
break;
}
});})(s__37231__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__37231__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__37230(cljs.core.rest(s__37231__$1)));
} else {
var G__37317 = cljs.core.rest(s__37231__$1);
s__37231__$1 = G__37317;
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
var G__37237 = arguments.length;
switch (G__37237) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__37238){
var vec__37239 = p__37238;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37239,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__37242(s__37243){
return (new cljs.core.LazySeq(null,(function (){
var s__37243__$1 = s__37243;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37243__$1);
if(temp__5825__auto__){
var s__37243__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37243__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37243__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37245 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37244 = (0);
while(true){
if((i__37244 < size__5522__auto__)){
var vec__37246 = cljs.core._nth(c__5521__auto__,i__37244);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37246,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__37245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__37319 = (i__37244 + (1));
i__37244 = G__37319;
continue;
} else {
var G__37320 = (i__37244 + (1));
i__37244 = G__37320;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37245),website_helpers$notes$iter__37242(cljs.core.chunk_rest(s__37243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37245),null);
}
} else {
var vec__37249 = cljs.core.first(s__37243__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37249,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__37242(cljs.core.rest(s__37243__$2)));
} else {
var G__37321 = cljs.core.rest(s__37243__$2);
s__37243__$1 = G__37321;
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
var G__37253 = arguments.length;
switch (G__37253) {
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
var vec__37254 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
if((largest_notes == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),notes], null);
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([largest_category,website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(largest_notes,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(categories_to_ignore,largest_category))]),website_helpers.notes.get_notes_by_largest_category.cljs$core$IFn$_invoke$arity$2(other_notes,categories_to_ignore)], 0));
}
}
}));

(website_helpers.notes.get_notes_by_largest_category.cljs$lang$maxFixedArity = 2);

website_helpers.notes.get_notes_by_fn = (function website_helpers$notes$get_notes_by_fn(notes,f){
return cljs.core.update_vals(cljs.core.group_by(f,notes),(function (v){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),v], null);
}));
});
website_helpers.notes.creation_time = (function website_helpers$notes$creation_time(note){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(note));
});
website_helpers.notes.timestamp__GT_month = (function website_helpers$notes$timestamp__GT_month(timestamp){
return (new Date((timestamp * (1000)))).toLocaleString("en-US",({"month": "long", "year": "numeric"}));
});
website_helpers.notes.month_name_to_index = (function website_helpers$notes$month_name_to_index(month_name){
var G__37257 = month_name;
switch (G__37257) {
case "January":
return (0);

break;
case "February":
return (1);

break;
case "March":
return (2);

break;
case "April":
return (3);

break;
case "May":
return (4);

break;
case "June":
return (5);

break;
case "July":
return (6);

break;
case "August":
return (7);

break;
case "September":
return (8);

break;
case "October":
return (9);

break;
case "November":
return (10);

break;
case "December":
return (11);

break;
default:
return null;

}
});
website_helpers.notes.month__GT_timestamp = (function website_helpers$notes$month__GT_timestamp(date_string){
var vec__37258 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_string,/ /);
var month_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(0),null);
var year_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(1),null);
var year = parseInt(year_str);
var month_index = website_helpers.notes.month_name_to_index(month_name);
if(cljs.core.truth_((function (){var and__5043__auto__ = month_index;
if(cljs.core.truth_(and__5043__auto__)){
return year;
} else {
return and__5043__auto__;
}
})())){
var js_date = (new Date(year,month_index,(1)));
return Math.floor((js_date.getTime() / (1000)));
} else {
return null;
}
});
website_helpers.notes.last_modification_time = (function website_helpers$notes$last_modification_time(note){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(note));
});
website_helpers.notes.organization_schemes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directory","directory",-58912409),website_helpers.notes.get_notes_by_directory,new cljs.core.Keyword(null,"most-recently-created","most-recently-created",605389572),(function (notes){
return website_helpers.notes.get_notes_by_fn(notes,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.creation_time));
}),new cljs.core.Keyword(null,"most-recently-changed","most-recently-changed",-1386837287),(function (notes){
return website_helpers.notes.get_notes_by_fn(notes,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.timestamp__GT_month,website_helpers.notes.last_modification_time));
}),new cljs.core.Keyword(null,"category","category",-593092832),website_helpers.notes.get_notes_by_category,new cljs.core.Keyword(null,"largest-category","largest-category",227675861),website_helpers.notes.get_notes_by_largest_category], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note)], null),website_helpers.notes.note__GT_link(note,cur_page_note)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37261_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__37261_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__37263(s__37264){
return (new cljs.core.LazySeq(null,(function (){
var s__37264__$1 = s__37264;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37264__$1);
if(temp__5825__auto__){
var s__37264__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37264__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37264__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37266 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37265 = (0);
while(true){
if((i__37265 < size__5522__auto__)){
var vec__37267 = cljs.core._nth(c__5521__auto__,i__37265);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37267,(1),null);
cljs.core.chunk_append(b__37266,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__37265,vec__37267,category,subtree,c__5521__auto__,size__5522__auto__,b__37266,s__37264__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37270(s__37271){
return (new cljs.core.LazySeq(null,((function (i__37265,vec__37267,category,subtree,c__5521__auto__,size__5522__auto__,b__37266,s__37264__$2,temp__5825__auto__){
return (function (){
var s__37271__$1 = s__37271;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37271__$1);
if(temp__5825__auto____$1){
var s__37271__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37271__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__37271__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__37273 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__37272 = (0);
while(true){
if((i__37272 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__37272);
cljs.core.chunk_append(b__37273,website_helpers.notes.note_to_li(note,cur_page));

var G__37332 = (i__37272 + (1));
i__37272 = G__37332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37273),website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37270(cljs.core.chunk_rest(s__37271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37273),null);
}
} else {
var note = cljs.core.first(s__37271__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37270(cljs.core.rest(s__37271__$2)));
}
} else {
return null;
}
break;
}
});})(i__37265,vec__37267,category,subtree,c__5521__auto__,size__5522__auto__,b__37266,s__37264__$2,temp__5825__auto__))
,null,null));
});})(i__37265,vec__37267,category,subtree,c__5521__auto__,size__5522__auto__,b__37266,s__37264__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)));

var G__37333 = (i__37265 + (1));
i__37265 = G__37333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37266),website_helpers$notes$make_nested_note_html_$_iter__37263(cljs.core.chunk_rest(s__37264__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37266),null);
}
} else {
var vec__37274 = cljs.core.first(s__37264__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37274,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37274,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__37274,category,subtree,s__37264__$2,temp__5825__auto__){
return (function website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37277(s__37278){
return (new cljs.core.LazySeq(null,(function (){
var s__37278__$1 = s__37278;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37278__$1);
if(temp__5825__auto____$1){
var s__37278__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37278__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37278__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37280 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37279 = (0);
while(true){
if((i__37279 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__37279);
cljs.core.chunk_append(b__37280,website_helpers.notes.note_to_li(note,cur_page));

var G__37338 = (i__37279 + (1));
i__37279 = G__37338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37280),website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37277(cljs.core.chunk_rest(s__37278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37280),null);
}
} else {
var note = cljs.core.first(s__37278__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page),website_helpers$notes$make_nested_note_html_$_iter__37263_$_iter__37277(cljs.core.rest(s__37278__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__37274,category,subtree,s__37264__$2,temp__5825__auto__))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$2(subtree,cur_page) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__37263(cljs.core.rest(s__37264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__37262_SHARP_){
var k = cljs.core.first(p1__37262_SHARP_);
if((!((website_helpers.notes.month__GT_timestamp(k) == null)))){
return (- website_helpers.notes.month__GT_timestamp(k));
} else {
if(typeof k === 'string'){
return k;
} else {
if(cljs.core.int_QMARK_(k)){
return (- k);
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((k == null)){
return (- (1000));
} else {
var G__37281 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__37281], 0));

return G__37281;

}
}
}
}
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37282_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__37282_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__37283 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__37283) : organization_fn.call(null,G__37283));
})(),website_helpers.notes.get_cur_page_note(notes));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__37284(s__37285){
return (new cljs.core.LazySeq(null,(function (){
var s__37285__$1 = s__37285;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37285__$1);
if(temp__5825__auto__){
var s__37285__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37285__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37285__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37287 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37286 = (0);
while(true){
if((i__37286 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__37286);
cljs.core.chunk_append(b__37287,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__37339 = (i__37286 + (1));
i__37286 = G__37339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37287),website_helpers$notes$set_one_to_true_$_iter__37284(cljs.core.chunk_rest(s__37285__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37287),null);
}
} else {
var k = cljs.core.first(s__37285__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__37284(cljs.core.rest(s__37285__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(ks);
})()),k_to_true,true);
});
website_helpers.notes.organization_radios = (function website_helpers$notes$organization_radios(organization_scheme){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Organize by:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null)], null),(function (){var iter__5523__auto__ = (function website_helpers$notes$organization_radios_$_iter__37288(s__37289){
return (new cljs.core.LazySeq(null,(function (){
var s__37289__$1 = s__37289;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37289__$1);
if(temp__5825__auto__){
var s__37289__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37289__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37289__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37291 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37290 = (0);
while(true){
if((i__37290 < size__5522__auto__)){
var vec__37292 = cljs.core._nth(c__5521__auto__,i__37290);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37292,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37292,(1),null);
cljs.core.chunk_append(b__37291,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__37290,vec__37292,scheme,selected,c__5521__auto__,size__5522__auto__,b__37291,s__37289__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(i__37290,vec__37292,scheme,selected,c__5521__auto__,size__5522__auto__,b__37291,s__37289__$2,temp__5825__auto__))
], null)], null),scheme], null));

var G__37342 = (i__37290 + (1));
i__37290 = G__37342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37291),website_helpers$notes$organization_radios_$_iter__37288(cljs.core.chunk_rest(s__37289__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37291),null);
}
} else {
var vec__37295 = cljs.core.first(s__37289__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37295,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),scheme], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"organization-scheme",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__37295,scheme,selected,s__37289__$2,temp__5825__auto__){
return (function (_){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),scheme));
});})(vec__37295,scheme,selected,s__37289__$2,temp__5825__auto__))
], null)], null),scheme], null),website_helpers$notes$organization_radios_$_iter__37288(cljs.core.rest(s__37289__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(organization_scheme));
})())], null);
});
/**
 * true if coll contains elm
 */
website_helpers.notes.in_QMARK_ = (function website_helpers$notes$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__37298_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__37298_SHARP_);
}),coll);
});
website_helpers.notes.most_recent_lists = (function website_helpers$notes$most_recent_lists(notes,cur_page_note){
var recently_created_notes = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.creation_time,notes)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently created:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37299_SHARP_){
return website_helpers.notes.note_to_li(p1__37299_SHARP_,cur_page_note);
}),recently_created_notes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently modified:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37300_SHARP_){
return website_helpers.notes.note_to_li(p1__37300_SHARP_,cur_page_note);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37301_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__37301_SHARP_);
}),notes))))))], null);
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(){
var organization_scheme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),new cljs.core.Keyword(null,"largest-category","largest-category",227675861)));
return (function (){
var notes = cljs.core.deref(website_helpers.global.notes);
var cur_page_note = website_helpers.notes.get_cur_page_note(notes);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),website_helpers.notes.most_recent_lists(notes,cur_page_note),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_check_list,website_helpers.global.category_selections,"Select Categories",website_helpers.global.sync_category_selections_BANG_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.organization_radios,organization_scheme], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"show-unselected-nodes-in-graph",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(website_helpers.global.show_unselected_nodes_in_graph_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.show_unselected_nodes_in_graph_QMARK_,cljs.core.not);
})], null)], null),"Show unselected pages in graph?"], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__37302(s__37303){
return (new cljs.core.LazySeq(null,(function (){
var s__37303__$1 = s__37303;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37303__$1);
if(temp__5825__auto__){
var s__37303__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37303__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37303__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37305 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37304 = (0);
while(true){
if((i__37304 < size__5522__auto__)){
var vec__37306 = cljs.core._nth(c__5521__auto__,i__37304);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37306,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__37305,scheme);

var G__37347 = (i__37304 + (1));
i__37304 = G__37347;
continue;
} else {
var G__37348 = (i__37304 + (1));
i__37304 = G__37348;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37305),website_helpers$notes$make_index_menu_$_iter__37302(cljs.core.chunk_rest(s__37303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37305),null);
}
} else {
var vec__37309 = cljs.core.first(s__37303__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37309,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37309,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__37302(cljs.core.rest(s__37303__$2)));
} else {
var G__37349 = cljs.core.rest(s__37303__$2);
s__37303__$1 = G__37349;
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
return iter__5523__auto__(cljs.core.deref(organization_scheme));
})());
return website_helpers.notes.make_nested_note_list(notes,website_helpers.utils.get_selected_vars(cljs.core.deref(website_helpers.global.category_selections)),(selected_organization_scheme.cljs$core$IFn$_invoke$arity$1 ? selected_organization_scheme.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes) : selected_organization_scheme.call(null,website_helpers.notes.organization_schemes)));
})()], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__37313 = arguments.length;
switch (G__37313) {
case 0:
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.notes.random_page', website_helpers.notes.random_page);

(website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$0 = (function (){
return website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(website_helpers.global.notes));
}));

(website_helpers.notes.random_page.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return (function (){
var note = cljs.core.rand_nth(notes);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Random Page: "], null),website_helpers.notes.note__GT_link(note,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70%"], null)], null)], null)," (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)),")"], null);
});
}));

(website_helpers.notes.random_page.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=website_helpers.notes.js.map
