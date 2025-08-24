goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.ex_note = (function website_helpers$notes$ex_note(n,categories){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"markdown","markdown",1227225089),["text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"path","path",-188191168),["content/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".md"].join(''),new cljs.core.Keyword(null,"title","title",636505583),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
});
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.ex_note("1",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)),website_helpers.notes.ex_note("2",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)),website_helpers.notes.ex_note("3",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)),website_helpers.notes.ex_note("4",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null))], null);
website_helpers.notes.sync_url_params_BANG_ = (function website_helpers$notes$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__57505 = cljs.core.seq(vars);
var chunk__57506 = null;
var count__57507 = (0);
var i__57508 = (0);
while(true){
if((i__57508 < count__57507)){
var vec__57516 = chunk__57506.cljs$core$IIndexed$_nth$arity$2(null,i__57508);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57516,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57516,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__57812 = seq__57505;
var G__57813 = chunk__57506;
var G__57814 = count__57507;
var G__57815 = (i__57508 + (1));
seq__57505 = G__57812;
chunk__57506 = G__57813;
count__57507 = G__57814;
i__57508 = G__57815;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__57505);
if(temp__5825__auto__){
var seq__57505__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57505__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57505__$1);
var G__57816 = cljs.core.chunk_rest(seq__57505__$1);
var G__57817 = c__5568__auto__;
var G__57818 = cljs.core.count(c__5568__auto__);
var G__57819 = (0);
seq__57505 = G__57816;
chunk__57506 = G__57817;
count__57507 = G__57818;
i__57508 = G__57819;
continue;
} else {
var vec__57519 = cljs.core.first(seq__57505__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57519,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57519,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__57820 = cljs.core.next(seq__57505__$1);
var G__57821 = null;
var G__57822 = (0);
var G__57823 = (0);
seq__57505 = G__57820;
chunk__57506 = G__57821;
count__57507 = G__57822;
i__57508 = G__57823;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__57534(s__57535){
return (new cljs.core.LazySeq(null,(function (){
var s__57535__$1 = s__57535;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57535__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__57535__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__57534_$_iter__57536(s__57537){
return (new cljs.core.LazySeq(null,((function (s__57535__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__57537__$1 = s__57537;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57537__$1);
if(temp__5825__auto____$1){
var s__57537__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57537__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57537__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57539 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57538 = (0);
while(true){
if((i__57538 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__57538);
cljs.core.chunk_append(b__57539,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__57826 = (i__57538 + (1));
i__57538 = G__57826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57539),website_helpers$notes$get_notes_by_category_$_iter__57534_$_iter__57536(cljs.core.chunk_rest(s__57537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57539),null);
}
} else {
var category = cljs.core.first(s__57537__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__57534_$_iter__57536(cljs.core.rest(s__57537__$2)));
}
} else {
return null;
}
break;
}
});})(s__57535__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__57535__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__57534(cljs.core.rest(s__57535__$1)));
} else {
var G__57827 = cljs.core.rest(s__57535__$1);
s__57535__$1 = G__57827;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__57563(s__57564){
return (new cljs.core.LazySeq(null,(function (){
var s__57564__$1 = s__57564;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57564__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var note = cljs.core.first(xs__6385__auto__);
var iterys__5519__auto__ = ((function (s__57564__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__57563_$_iter__57565(s__57566){
return (new cljs.core.LazySeq(null,((function (s__57564__$1,note,xs__6385__auto__,temp__5825__auto__){
return (function (){
var s__57566__$1 = s__57566;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57566__$1);
if(temp__5825__auto____$1){
var s__57566__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57566__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57566__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57568 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57567 = (0);
while(true){
if((i__57567 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__57567);
cljs.core.chunk_append(b__57568,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__57829 = (i__57567 + (1));
i__57567 = G__57829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57568),website_helpers$notes$get_notes_by_directory_$_iter__57563_$_iter__57565(cljs.core.chunk_rest(s__57566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57568),null);
}
} else {
var category = cljs.core.first(s__57566__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__57563_$_iter__57565(cljs.core.rest(s__57566__$2)));
}
} else {
return null;
}
break;
}
});})(s__57564__$1,note,xs__6385__auto__,temp__5825__auto__))
,null,null));
});})(s__57564__$1,note,xs__6385__auto__,temp__5825__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__57563(cljs.core.rest(s__57564__$1)));
} else {
var G__57830 = cljs.core.rest(s__57564__$1);
s__57564__$1 = G__57830;
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
var G__57583 = arguments.length;
switch (G__57583) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__57588){
var vec__57589 = p__57588;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57589,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__57592(s__57593){
return (new cljs.core.LazySeq(null,(function (){
var s__57593__$1 = s__57593;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57593__$1);
if(temp__5825__auto__){
var s__57593__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57593__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57593__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57595 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57594 = (0);
while(true){
if((i__57594 < size__5522__auto__)){
var vec__57597 = cljs.core._nth(c__5521__auto__,i__57594);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57597,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57597,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__57595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__57832 = (i__57594 + (1));
i__57594 = G__57832;
continue;
} else {
var G__57833 = (i__57594 + (1));
i__57594 = G__57833;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57595),website_helpers$notes$iter__57592(cljs.core.chunk_rest(s__57593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57595),null);
}
} else {
var vec__57600 = cljs.core.first(s__57593__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57600,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57600,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__57592(cljs.core.rest(s__57593__$2)));
} else {
var G__57835 = cljs.core.rest(s__57593__$2);
s__57593__$1 = G__57835;
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
var G__57604 = arguments.length;
switch (G__57604) {
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
var vec__57609 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57609,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57609,(1),null);
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
var G__57629 = month_name;
switch (G__57629) {
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
var vec__57637 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_string,/ /);
var month_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57637,(0),null);
var year_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57637,(1),null);
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
website_helpers.notes.note__GT_link = (function website_helpers$notes$note__GT_link(note,cur_page_note,p__57656){
var map__57661 = p__57656;
var map__57661__$1 = cljs.core.__destructure_map(map__57661);
var recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57661__$1,new cljs.core.Keyword(null,"recently-created-notes","recently-created-notes",237979596));
var recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57661__$1,new cljs.core.Keyword(null,"recently-modified-notes","recently-modified-notes",-186225427));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__57697_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page,p__57722){
var map__57723 = p__57722;
var map__57723__$1 = cljs.core.__destructure_map(map__57723);
var recentcy_data = map__57723__$1;
var categories_with_recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57723__$1,new cljs.core.Keyword(null,"categories-with-recently-modified-notes","categories-with-recently-modified-notes",-1132824786));
var categories_with_recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57723__$1,new cljs.core.Keyword(null,"categories-with-recently-created-notes","categories-with-recently-created-notes",-427644495));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__57727(s__57728){
return (new cljs.core.LazySeq(null,(function (){
var s__57728__$1 = s__57728;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57728__$1);
if(temp__5825__auto__){
var s__57728__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57728__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57728__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57730 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57729 = (0);
while(true){
if((i__57729 < size__5522__auto__)){
var vec__57738 = cljs.core._nth(c__5521__auto__,i__57729);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57738,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57738,(1),null);
cljs.core.chunk_append(b__57730,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__57729,vec__57738,category,subtree,c__5521__auto__,size__5522__auto__,b__57730,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57741(s__57742){
return (new cljs.core.LazySeq(null,((function (i__57729,vec__57738,category,subtree,c__5521__auto__,size__5522__auto__,b__57730,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function (){
var s__57742__$1 = s__57742;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57742__$1);
if(temp__5825__auto____$1){
var s__57742__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57742__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__57742__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__57744 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__57743 = (0);
while(true){
if((i__57743 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__57743);
cljs.core.chunk_append(b__57744,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__57841 = (i__57743 + (1));
i__57743 = G__57841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57744),website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57741(cljs.core.chunk_rest(s__57742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57744),null);
}
} else {
var note = cljs.core.first(s__57742__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57741(cljs.core.rest(s__57742__$2)));
}
} else {
return null;
}
break;
}
});})(i__57729,vec__57738,category,subtree,c__5521__auto__,size__5522__auto__,b__57730,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
,null,null));
});})(i__57729,vec__57738,category,subtree,c__5521__auto__,size__5522__auto__,b__57730,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)));

var G__57842 = (i__57729 + (1));
i__57729 = G__57842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57730),website_helpers$notes$make_nested_note_html_$_iter__57727(cljs.core.chunk_rest(s__57728__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57730),null);
}
} else {
var vec__57750 = cljs.core.first(s__57728__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57750,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57750,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__57750,category,subtree,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57753(s__57754){
return (new cljs.core.LazySeq(null,(function (){
var s__57754__$1 = s__57754;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__57754__$1);
if(temp__5825__auto____$1){
var s__57754__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57754__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57754__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57756 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57755 = (0);
while(true){
if((i__57755 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__57755);
cljs.core.chunk_append(b__57756,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__57843 = (i__57755 + (1));
i__57755 = G__57843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57756),website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57753(cljs.core.chunk_rest(s__57754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57756),null);
}
} else {
var note = cljs.core.first(s__57754__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__57727_$_iter__57753(cljs.core.rest(s__57754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__57750,category,subtree,s__57728__$2,temp__5825__auto__,map__57723,map__57723__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__57727(cljs.core.rest(s__57728__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__57718_SHARP_){
var k = cljs.core.first(p1__57718_SHARP_);
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
var G__57761 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__57761], 0));

return G__57761;

}
}
}
}
}
}),notes_by_category));
})()));
});
website_helpers.notes.num_recently_modified_notes_to_highlight = (10);
website_helpers.notes.num_recently_created_notes_to_highlight = (5);
/**
 * true if coll contains elm
 */
website_helpers.notes.in_QMARK_ = (function website_helpers$notes$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__57762_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__57762_SHARP_);
}),coll);
});
website_helpers.notes.get_recently_created_notes = (function website_helpers$notes$get_recently_created_notes(notes){
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.num_recently_created_notes_to_highlight,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.creation_time,notes))));
});
website_helpers.notes.get_categories_with_recently_created_notes = (function website_helpers$notes$get_categories_with_recently_created_notes(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"categories","categories",178386610),website_helpers.notes.get_recently_created_notes(notes)));
});
website_helpers.notes.get_recently_modified_notes = (function website_helpers$notes$get_recently_modified_notes(notes){
var recently_created_notes = website_helpers.notes.get_recently_created_notes(notes);
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.num_recently_modified_notes_to_highlight,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57767_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__57767_SHARP_);
}),notes)))));
});
website_helpers.notes.get_categories_with_recently_modified_notes = (function website_helpers$notes$get_categories_with_recently_modified_notes(notes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"categories","categories",178386610),website_helpers.notes.get_recently_modified_notes(notes)));
});
website_helpers.notes.get_recentcy_data = (function website_helpers$notes$get_recentcy_data(notes){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"recently-modified-notes","recently-modified-notes",-186225427),website_helpers.notes.get_recently_modified_notes(notes),new cljs.core.Keyword(null,"recently-created-notes","recently-created-notes",237979596),website_helpers.notes.get_recently_created_notes(notes),new cljs.core.Keyword(null,"categories-with-recently-created-notes","categories-with-recently-created-notes",-427644495),website_helpers.notes.get_categories_with_recently_created_notes(notes),new cljs.core.Keyword(null,"categories-with-recently-modified-notes","categories-with-recently-modified-notes",-1132824786),website_helpers.notes.get_categories_with_recently_modified_notes(notes)], null);
});
website_helpers.notes.overlap_QMARK_ = (function website_helpers$notes$overlap_QMARK_(set1,set2){
return (!(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(set1,set2))));
});
website_helpers.notes.get_notes_for_categories = (function website_helpers$notes$get_notes_for_categories(notes,selected_categories){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories))){
return cljs.core.set(notes);
} else {
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57776_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__57776_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn){
return website_helpers.notes.make_nested_note_html((function (){var G__57777 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__57777) : organization_fn.call(null,G__57777));
})(),website_helpers.notes.get_cur_page_note(notes),website_helpers.notes.get_recentcy_data(notes));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__57778(s__57779){
return (new cljs.core.LazySeq(null,(function (){
var s__57779__$1 = s__57779;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57779__$1);
if(temp__5825__auto__){
var s__57779__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57779__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57779__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57781 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57780 = (0);
while(true){
if((i__57780 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__57780);
cljs.core.chunk_append(b__57781,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__57852 = (i__57780 + (1));
i__57780 = G__57852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57781),website_helpers$notes$set_one_to_true_$_iter__57778(cljs.core.chunk_rest(s__57779__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57781),null);
}
} else {
var k = cljs.core.first(s__57779__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__57778(cljs.core.rest(s__57779__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently created:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57782_SHARP_){
return website_helpers.notes.note_to_li(p1__57782_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),recently_created_notes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently modified:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57783_SHARP_){
return website_helpers.notes.note_to_li(p1__57783_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57784_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__57784_SHARP_);
}),notes))))))], null);
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(){
var organization_scheme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),new cljs.core.Keyword(null,"largest-category","largest-category",227675861)));
return (function (){
var notes = cljs.core.deref(website_helpers.global.notes);
var cur_page_note = website_helpers.notes.get_cur_page_note(notes);
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,website_helpers.global.category_selections,"Select Categories",website_helpers.notes.select_category_BANG_,"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,organization_scheme,["Organize by ",cljs.core.name(cljs.core.some((function (p__57789){
var vec__57790 = p__57789;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790,(1),null);
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
})], null)], null),"Include home node in graph?"], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__57795(s__57796){
return (new cljs.core.LazySeq(null,(function (){
var s__57796__$1 = s__57796;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__57796__$1);
if(temp__5825__auto__){
var s__57796__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57796__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57796__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57798 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57797 = (0);
while(true){
if((i__57797 < size__5522__auto__)){
var vec__57800 = cljs.core._nth(c__5521__auto__,i__57797);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57800,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__57798,scheme);

var G__57857 = (i__57797 + (1));
i__57797 = G__57857;
continue;
} else {
var G__57858 = (i__57797 + (1));
i__57797 = G__57858;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57798),website_helpers$notes$make_index_menu_$_iter__57795(cljs.core.chunk_rest(s__57796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57798),null);
}
} else {
var vec__57803 = cljs.core.first(s__57796__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57803,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57803,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__57795(cljs.core.rest(s__57796__$2)));
} else {
var G__57859 = cljs.core.rest(s__57796__$2);
s__57796__$1 = G__57859;
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
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with * indicate they contain recent modifications."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with + indicate recent page additions."], null)], null)], null)], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__57808 = arguments.length;
switch (G__57808) {
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
