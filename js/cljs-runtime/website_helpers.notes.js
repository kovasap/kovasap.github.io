goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.ex_note = (function website_helpers$notes$ex_note(n,categories){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"markdown","markdown",1227225089),["text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"path","path",-188191168),["content/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".md"].join(''),new cljs.core.Keyword(null,"title","title",636505583),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
});
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.ex_note("1",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)),website_helpers.notes.ex_note("2",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)),website_helpers.notes.ex_note("3",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)),website_helpers.notes.ex_note("4",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null))], null);
website_helpers.notes.sync_url_params_BANG_ = (function website_helpers$notes$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__44902 = cljs.core.seq(vars);
var chunk__44903 = null;
var count__44904 = (0);
var i__44905 = (0);
while(true){
if((i__44905 < count__44904)){
var vec__44912 = chunk__44903.cljs$core$IIndexed$_nth$arity$2(null,i__44905);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44912,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44912,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__45011 = seq__44902;
var G__45012 = chunk__44903;
var G__45013 = count__44904;
var G__45014 = (i__44905 + (1));
seq__44902 = G__45011;
chunk__44903 = G__45012;
count__44904 = G__45013;
i__44905 = G__45014;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__44902);
if(temp__5825__auto__){
var seq__44902__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44902__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44902__$1);
var G__45015 = cljs.core.chunk_rest(seq__44902__$1);
var G__45016 = c__5568__auto__;
var G__45017 = cljs.core.count(c__5568__auto__);
var G__45018 = (0);
seq__44902 = G__45015;
chunk__44903 = G__45016;
count__44904 = G__45017;
i__44905 = G__45018;
continue;
} else {
var vec__44915 = cljs.core.first(seq__44902__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44915,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44915,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__45019 = cljs.core.next(seq__44902__$1);
var G__45020 = null;
var G__45021 = (0);
var G__45022 = (0);
seq__44902 = G__45019;
chunk__44903 = G__45020;
count__44904 = G__45021;
i__44905 = G__45022;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.notes.select_category_BANG_ = (function website_helpers$notes$select_category_BANG_(category,currently_selected_QMARK_){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setting ",category," to ",currently_selected_QMARK_], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(website_helpers.global.category_selections,cljs.core.assoc,category,cljs.core.not(currently_selected_QMARK_));

website_helpers.notes.sync_url_params_BANG_(cljs.core.deref(website_helpers.global.category_selections));

return website_helpers.global.sync_category_selections_BANG_();
});
website_helpers.notes.toggle_category_BANG_ = (function website_helpers$notes$toggle_category_BANG_(category){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["toggling ",category], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(website_helpers.global.category_selections,cljs.core.update,category,cljs.core.not);

website_helpers.notes.sync_url_params_BANG_(cljs.core.deref(website_helpers.global.category_selections));

return website_helpers.global.sync_category_selections_BANG_();
});
/**
 * Returns a map of categories to all notes with that category.
 */
website_helpers.notes.get_notes_by_category = (function website_helpers$notes$get_notes_by_category(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__44918(s__44919){
return (new cljs.core.LazySeq(null,(function (){
var s__44919__$1 = s__44919;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44919__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__44919__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__44918_$_iter__44920(s__44921){
return (new cljs.core.LazySeq(null,((function (s__44919__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__44921__$1 = s__44921;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__44921__$1);
if(temp__5825__auto____$1){
var s__44921__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44921__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44921__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44923 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44922 = (0);
while(true){
if((i__44922 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__44922);
cljs.core.chunk_append(b__44923,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__45023 = (i__44922 + (1));
i__44922 = G__45023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44923),website_helpers$notes$get_notes_by_category_$_iter__44918_$_iter__44920(cljs.core.chunk_rest(s__44921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44923),null);
}
} else {
var category = cljs.core.first(s__44921__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__44918_$_iter__44920(cljs.core.rest(s__44921__$2)));
}
} else {
return null;
}
break;
}
});})(s__44919__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__44919__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__44918(cljs.core.rest(s__44919__$1)));
} else {
var G__45024 = cljs.core.rest(s__44919__$1);
s__44919__$1 = G__45024;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__44924(s__44925){
return (new cljs.core.LazySeq(null,(function (){
var s__44925__$1 = s__44925;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44925__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__44925__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__44924_$_iter__44926(s__44927){
return (new cljs.core.LazySeq(null,((function (s__44925__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__44927__$1 = s__44927;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__44927__$1);
if(temp__5825__auto____$1){
var s__44927__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44927__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44927__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44929 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44928 = (0);
while(true){
if((i__44928 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__44928);
cljs.core.chunk_append(b__44929,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__45025 = (i__44928 + (1));
i__44928 = G__45025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44929),website_helpers$notes$get_notes_by_directory_$_iter__44924_$_iter__44926(cljs.core.chunk_rest(s__44927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44929),null);
}
} else {
var category = cljs.core.first(s__44927__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__44924_$_iter__44926(cljs.core.rest(s__44927__$2)));
}
} else {
return null;
}
break;
}
});})(s__44925__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__44925__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__44924(cljs.core.rest(s__44925__$1)));
} else {
var G__45026 = cljs.core.rest(s__44925__$1);
s__44925__$1 = G__45026;
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
var G__44931 = arguments.length;
switch (G__44931) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__44932){
var vec__44933 = p__44932;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44933,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__44936(s__44937){
return (new cljs.core.LazySeq(null,(function (){
var s__44937__$1 = s__44937;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44937__$1);
if(temp__5825__auto__){
var s__44937__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44937__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44937__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44939 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44938 = (0);
while(true){
if((i__44938 < size__5522__auto__)){
var vec__44940 = cljs.core._nth(c__5521__auto__,i__44938);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44940,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44940,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__44939,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__45028 = (i__44938 + (1));
i__44938 = G__45028;
continue;
} else {
var G__45029 = (i__44938 + (1));
i__44938 = G__45029;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44939),website_helpers$notes$iter__44936(cljs.core.chunk_rest(s__44937__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44939),null);
}
} else {
var vec__44943 = cljs.core.first(s__44937__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__44936(cljs.core.rest(s__44937__$2)));
} else {
var G__45030 = cljs.core.rest(s__44937__$2);
s__44937__$1 = G__45030;
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
var G__44947 = arguments.length;
switch (G__44947) {
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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),notes)], null);
} else {
var vec__44948 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(1),null);
var other_notes = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(notes,largest_notes);
if((largest_notes == null)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),notes)], null);
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
website_helpers.notes.timestamp__GT_day = (function website_helpers$notes$timestamp__GT_day(timestamp){
return (new Date((timestamp * (1000)))).toLocaleString("en-US",({"month": "long", "year": "numeric", "day": "numeric"}));
});
website_helpers.notes.month_name_to_index = (function website_helpers$notes$month_name_to_index(month_name){
var G__44951 = month_name;
switch (G__44951) {
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
var vec__44952 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_string,/ /);
var month_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(0),null);
var year_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44952,(1),null);
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
website_helpers.notes.note__GT_link = (function website_helpers$notes$note__GT_link(note,cur_page_note,p__44955){
var map__44956 = p__44955;
var map__44956__$1 = cljs.core.__destructure_map(map__44956);
var recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"recently-created-notes","recently-created-notes",237979596));
var recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"recently-modified-notes","recently-modified-notes",-186225427));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),(function (){var attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_page_note,note)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null));
} else {
return attrs;
}
})(),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(note)," ",((cljs.core.contains_QMARK_(recently_created_notes,note))?"+":""),((cljs.core.contains_QMARK_(recently_modified_notes,note))?"*":"")], null);
});
website_helpers.notes.note_to_li = (function website_helpers$notes$note_to_li(note,cur_page_note,recentcy_data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(note)], null),website_helpers.notes.note__GT_link(note,cur_page_note,recentcy_data)], null);
});
website_helpers.notes.get_cur_page_note = (function website_helpers$notes$get_cur_page_note(possible_notes){
var url = window.location.pathname;
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44957_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__44957_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page,p__44959){
var map__44960 = p__44959;
var map__44960__$1 = cljs.core.__destructure_map(map__44960);
var recentcy_data = map__44960__$1;
var categories_with_recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword(null,"categories-with-recently-modified-notes","categories-with-recently-modified-notes",-1132824786));
var categories_with_recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44960__$1,new cljs.core.Keyword(null,"categories-with-recently-created-notes","categories-with-recently-created-notes",-427644495));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__44961(s__44962){
return (new cljs.core.LazySeq(null,(function (){
var s__44962__$1 = s__44962;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44962__$1);
if(temp__5825__auto__){
var s__44962__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44962__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44962__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44964 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44963 = (0);
while(true){
if((i__44963 < size__5522__auto__)){
var vec__44965 = cljs.core._nth(c__5521__auto__,i__44963);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44965,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44965,(1),null);
cljs.core.chunk_append(b__44964,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__44963,vec__44965,category,subtree,c__5521__auto__,size__5522__auto__,b__44964,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44968(s__44969){
return (new cljs.core.LazySeq(null,((function (i__44963,vec__44965,category,subtree,c__5521__auto__,size__5522__auto__,b__44964,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function (){
var s__44969__$1 = s__44969;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__44969__$1);
if(temp__5825__auto____$1){
var s__44969__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44969__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__44969__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__44971 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__44970 = (0);
while(true){
if((i__44970 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__44970);
cljs.core.chunk_append(b__44971,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__45033 = (i__44970 + (1));
i__44970 = G__45033;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44971),website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44968(cljs.core.chunk_rest(s__44969__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44971),null);
}
} else {
var note = cljs.core.first(s__44969__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44968(cljs.core.rest(s__44969__$2)));
}
} else {
return null;
}
break;
}
});})(i__44963,vec__44965,category,subtree,c__5521__auto__,size__5522__auto__,b__44964,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
,null,null));
});})(i__44963,vec__44965,category,subtree,c__5521__auto__,size__5522__auto__,b__44964,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)));

var G__45036 = (i__44963 + (1));
i__44963 = G__45036;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44964),website_helpers$notes$make_nested_note_html_$_iter__44961(cljs.core.chunk_rest(s__44962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44964),null);
}
} else {
var vec__44972 = cljs.core.first(s__44962__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44972,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44972,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__44972,category,subtree,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44975(s__44976){
return (new cljs.core.LazySeq(null,(function (){
var s__44976__$1 = s__44976;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__44976__$1);
if(temp__5825__auto____$1){
var s__44976__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__44976__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44976__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44978 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44977 = (0);
while(true){
if((i__44977 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__44977);
cljs.core.chunk_append(b__44978,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__45038 = (i__44977 + (1));
i__44977 = G__45038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44978),website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44975(cljs.core.chunk_rest(s__44976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44978),null);
}
} else {
var note = cljs.core.first(s__44976__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__44961_$_iter__44975(cljs.core.rest(s__44976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__44972,category,subtree,s__44962__$2,temp__5825__auto__,map__44960,map__44960__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__44961(cljs.core.rest(s__44962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__44958_SHARP_){
var k = cljs.core.first(p1__44958_SHARP_);
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
var G__44979 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__44979], 0));

return G__44979;

}
}
}
}
}
}),notes_by_category));
})()));
});
/**
 * true if coll contains elm
 */
website_helpers.notes.in_QMARK_ = (function website_helpers$notes$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__44980_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__44980_SHARP_);
}),coll);
});
website_helpers.notes.get_recently_created_notes = (function website_helpers$notes$get_recently_created_notes(notes,num_recently_created_notes_to_highlight){
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_recently_created_notes_to_highlight,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.creation_time,notes))));
});
website_helpers.notes.get_categories_with_recently_created_notes = (function website_helpers$notes$get_categories_with_recently_created_notes(notes,num_recently_created_notes_to_highlight){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"categories","categories",178386610),website_helpers.notes.get_recently_created_notes(notes,num_recently_created_notes_to_highlight)));
});
website_helpers.notes.get_recently_modified_notes = (function website_helpers$notes$get_recently_modified_notes(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
var recently_created_notes = website_helpers.notes.get_recently_created_notes(notes,num_recently_created_notes_to_highlight);
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_recently_modified_notes_to_highlight,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44981_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__44981_SHARP_);
}),notes)))));
});
website_helpers.notes.get_categories_with_recently_modified_notes = (function website_helpers$notes$get_categories_with_recently_modified_notes(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"categories","categories",178386610),website_helpers.notes.get_recently_modified_notes(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight)));
});
website_helpers.notes.get_recentcy_data = (function website_helpers$notes$get_recentcy_data(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recently-modified-notes","recently-modified-notes",-186225427),website_helpers.notes.get_recently_modified_notes(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight),new cljs.core.Keyword(null,"recently-created-notes","recently-created-notes",237979596),website_helpers.notes.get_recently_created_notes(notes,num_recently_created_notes_to_highlight),new cljs.core.Keyword(null,"categories-with-recently-created-notes","categories-with-recently-created-notes",-427644495),website_helpers.notes.get_categories_with_recently_created_notes(notes,num_recently_created_notes_to_highlight),new cljs.core.Keyword(null,"categories-with-recently-modified-notes","categories-with-recently-modified-notes",-1132824786),website_helpers.notes.get_categories_with_recently_modified_notes(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight)], null);
});
website_helpers.notes.overlap_QMARK_ = (function website_helpers$notes$overlap_QMARK_(set1,set2){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(set1,set2))));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories))){
return cljs.core.set(notes);
} else {
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__44982_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__44982_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
return website_helpers.notes.make_nested_note_html((function (){var G__44983 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__44983) : organization_fn.call(null,G__44983));
})(),website_helpers.notes.get_cur_page_note(notes),website_helpers.notes.get_recentcy_data(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__44984(s__44985){
return (new cljs.core.LazySeq(null,(function (){
var s__44985__$1 = s__44985;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44985__$1);
if(temp__5825__auto__){
var s__44985__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44985__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44985__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44987 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44986 = (0);
while(true){
if((i__44986 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__44986);
cljs.core.chunk_append(b__44987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__45041 = (i__44986 + (1));
i__44986 = G__45041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44987),website_helpers$notes$set_one_to_true_$_iter__44984(cljs.core.chunk_rest(s__44985__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44987),null);
}
} else {
var k = cljs.core.first(s__44985__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__44984(cljs.core.rest(s__44985__$2)));
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
website_helpers.notes.most_recent_lists = (function website_helpers$notes$most_recent_lists(notes,cur_page_note){
var recently_created_notes = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.creation_time,notes)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently created:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44988_SHARP_){
return website_helpers.notes.note_to_li(p1__44988_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),recently_created_notes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently modified:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44989_SHARP_){
return website_helpers.notes.note_to_li(p1__44989_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44990_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__44990_SHARP_);
}),notes))))))], null);
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(){
var organization_scheme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),new cljs.core.Keyword(null,"largest-category","largest-category",227675861)));
return (function (){
var notes = cljs.core.deref(website_helpers.global.notes);
var cur_page_note = website_helpers.notes.get_cur_page_note(notes);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,website_helpers.global.category_selections,"Select Categories",website_helpers.notes.select_category_BANG_,"checkbox"], null)], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__44991(s__44992){
return (new cljs.core.LazySeq(null,(function (){
var s__44992__$1 = s__44992;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44992__$1);
if(temp__5825__auto__){
var s__44992__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44992__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44992__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44994 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44993 = (0);
while(true){
if((i__44993 < size__5522__auto__)){
var vec__44995 = cljs.core._nth(c__5521__auto__,i__44993);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44995,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44995,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__44994,scheme);

var G__45051 = (i__44993 + (1));
i__44993 = G__45051;
continue;
} else {
var G__45052 = (i__44993 + (1));
i__44993 = G__45052;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44994),website_helpers$notes$make_index_menu_$_iter__44991(cljs.core.chunk_rest(s__44992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44994),null);
}
} else {
var vec__44998 = cljs.core.first(s__44992__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44998,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44998,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__44991(cljs.core.rest(s__44992__$2)));
} else {
var G__45053 = cljs.core.rest(s__44992__$2);
s__44992__$1 = G__45053;
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
return website_helpers.notes.make_nested_note_list(notes,website_helpers.utils.get_selected_vars(cljs.core.deref(website_helpers.global.category_selections)),(selected_organization_scheme.cljs$core$IFn$_invoke$arity$1 ? selected_organization_scheme.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.organization_schemes) : selected_organization_scheme.call(null,website_helpers.notes.organization_schemes)),cljs.core.deref(website_helpers.global.num_recently_modified_notes_to_highlight),cljs.core.deref(website_helpers.global.num_recently_created_notes_to_highlight));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,organization_scheme,["Organize by ",cljs.core.name(cljs.core.some((function (p__45005){
var vec__45006 = p__45005;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45006,(1),null);
if(cljs.core.truth_(v)){
return k;
} else {
return null;
}
}),cljs.core.deref(organization_scheme)))].join(''),(function (k,_v){
return cljs.core.reset_BANG_(organization_scheme,website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),k));
}),"radio"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"show-unselected-nodes-in-graph",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(website_helpers.global.show_unselected_nodes_in_graph_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.show_unselected_nodes_in_graph_QMARK_,cljs.core.not);
})], null)], null),"Show unselected pages in graph?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"include-home-node-in-graph",new cljs.core.Keyword(null,"style","style",-496642736),website_helpers.common_components.input_style,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref(website_helpers.global.include_home_node_in_graph_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.graph_update_num,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(website_helpers.global.include_home_node_in_graph_QMARK_,cljs.core.not);
})], null)], null),"Include home node in graph?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of recently modified pages to highlight: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(website_helpers.global.num_recently_modified_notes_to_highlight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"50",new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.reset_BANG_(website_helpers.global.num_recently_modified_notes_to_highlight,parseInt(event.target.value));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(website_helpers.global.num_recently_modified_notes_to_highlight)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Number of recently created pages to highlight: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref(website_helpers.global.num_recently_created_notes_to_highlight),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"50",new cljs.core.Keyword(null,"class","class",-2030961996),"slider",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.reset_BANG_(website_helpers.global.num_recently_created_notes_to_highlight,parseInt(event.target.value));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(website_helpers.global.num_recently_created_notes_to_highlight)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with * indicate they contain recent modifications."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with + indicate recent page additions."], null)], null)], null)], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__45010 = arguments.length;
switch (G__45010) {
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
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Random Page: "], null),website_helpers.notes.note__GT_link(note,null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"70%"], null)], null)], null)," (",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)),")"], null);
});
}));

(website_helpers.notes.random_page.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=website_helpers.notes.js.map
