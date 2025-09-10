goog.provide('website_helpers.notes');
website_helpers.notes.Note = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
website_helpers.notes.ex_note = (function website_helpers$notes$ex_note(n,categories){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"markdown","markdown",1227225089),["text ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"path","path",-188191168),["content/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".md"].join(''),new cljs.core.Keyword(null,"title","title",636505583),["t-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword(null,"categories","categories",178386610),categories], null);
});
website_helpers.notes.example_notes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.notes.ex_note("1",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["b",null,"a 1",null], null), null)),website_helpers.notes.ex_note("2",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["a 1",null], null), null)),website_helpers.notes.ex_note("3",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["c",null], null), null)),website_helpers.notes.ex_note("4",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null))], null);
website_helpers.notes.sync_url_params_BANG_ = (function website_helpers$notes$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__20609 = cljs.core.seq(vars);
var chunk__20610 = null;
var count__20611 = (0);
var i__20612 = (0);
while(true){
if((i__20612 < count__20611)){
var vec__20619 = chunk__20610.cljs$core$IIndexed$_nth$arity$2(null,i__20612);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__21098 = seq__20609;
var G__21099 = chunk__20610;
var G__21100 = count__20611;
var G__21101 = (i__20612 + (1));
seq__20609 = G__21098;
chunk__20610 = G__21099;
count__20611 = G__21100;
i__20612 = G__21101;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20609);
if(temp__5823__auto__){
var seq__20609__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20609__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20609__$1);
var G__21108 = cljs.core.chunk_rest(seq__20609__$1);
var G__21109 = c__5568__auto__;
var G__21110 = cljs.core.count(c__5568__auto__);
var G__21111 = (0);
seq__20609 = G__21108;
chunk__20610 = G__21109;
count__20611 = G__21110;
i__20612 = G__21111;
continue;
} else {
var vec__20623 = cljs.core.first(seq__20609__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__21118 = cljs.core.next(seq__20609__$1);
var G__21119 = null;
var G__21120 = (0);
var G__21121 = (0);
seq__20609 = G__21118;
chunk__20610 = G__21119;
count__20611 = G__21120;
i__20612 = G__21121;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_category_$_iter__20641(s__20642){
return (new cljs.core.LazySeq(null,(function (){
var s__20642__$1 = s__20642;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20642__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var note = cljs.core.first(xs__6383__auto__);
var iterys__5519__auto__ = ((function (s__20642__$1,note,xs__6383__auto__,temp__5823__auto__){
return (function website_helpers$notes$get_notes_by_category_$_iter__20641_$_iter__20643(s__20644){
return (new cljs.core.LazySeq(null,((function (s__20642__$1,note,xs__6383__auto__,temp__5823__auto__){
return (function (){
var s__20644__$1 = s__20644;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20644__$1);
if(temp__5823__auto____$1){
var s__20644__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20644__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20644__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20646 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20645 = (0);
while(true){
if((i__20645 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20645);
cljs.core.chunk_append(b__20646,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__21142 = (i__20645 + (1));
i__20645 = G__21142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20646),website_helpers$notes$get_notes_by_category_$_iter__20641_$_iter__20643(cljs.core.chunk_rest(s__20644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20646),null);
}
} else {
var category = cljs.core.first(s__20644__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_category_$_iter__20641_$_iter__20643(cljs.core.rest(s__20644__$2)));
}
} else {
return null;
}
break;
}
});})(s__20642__$1,note,xs__6383__auto__,temp__5823__auto__))
,null,null));
});})(s__20642__$1,note,xs__6383__auto__,temp__5823__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_category_$_iter__20641(cljs.core.rest(s__20642__$1)));
} else {
var G__21152 = cljs.core.rest(s__20642__$1);
s__20642__$1 = G__21152;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$get_notes_by_directory_$_iter__20678(s__20679){
return (new cljs.core.LazySeq(null,(function (){
var s__20679__$1 = s__20679;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20679__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var note = cljs.core.first(xs__6383__auto__);
var iterys__5519__auto__ = ((function (s__20679__$1,note,xs__6383__auto__,temp__5823__auto__){
return (function website_helpers$notes$get_notes_by_directory_$_iter__20678_$_iter__20680(s__20681){
return (new cljs.core.LazySeq(null,((function (s__20679__$1,note,xs__6383__auto__,temp__5823__auto__){
return (function (){
var s__20681__$1 = s__20681;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20681__$1);
if(temp__5823__auto____$1){
var s__20681__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20681__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20681__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20683 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20682 = (0);
while(true){
if((i__20682 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__20682);
cljs.core.chunk_append(b__20683,cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]));

var G__21166 = (i__20682 + (1));
i__20682 = G__21166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20683),website_helpers$notes$get_notes_by_directory_$_iter__20678_$_iter__20680(cljs.core.chunk_rest(s__20681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20683),null);
}
} else {
var category = cljs.core.first(s__20681__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([category,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"notes","notes",-1039600523),cljs.core.PersistentHashSet.createAsIfByAssoc([note])], null)]),website_helpers$notes$get_notes_by_directory_$_iter__20678_$_iter__20680(cljs.core.rest(s__20681__$2)));
}
} else {
return null;
}
break;
}
});})(s__20679__$1,note,xs__6383__auto__,temp__5823__auto__))
,null,null));
});})(s__20679__$1,note,xs__6383__auto__,temp__5823__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(note)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,website_helpers$notes$get_notes_by_directory_$_iter__20678(cljs.core.rest(s__20679__$1)));
} else {
var G__21167 = cljs.core.rest(s__20679__$1);
s__20679__$1 = G__21167;
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
var G__20692 = arguments.length;
switch (G__20692) {
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__20693){
var vec__20698 = p__20693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(1),null);
return cljs.core.count(v);
}),(function (){var iter__5523__auto__ = (function website_helpers$notes$iter__20701(s__20702){
return (new cljs.core.LazySeq(null,(function (){
var s__20702__$1 = s__20702;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20702__$1);
if(temp__5823__auto__){
var s__20702__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20702__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20702__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20704 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20703 = (0);
while(true){
if((i__20703 < size__5522__auto__)){
var vec__20705 = cljs.core._nth(c__5521__auto__,i__20703);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20705,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
cljs.core.chunk_append(b__20704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null));

var G__21178 = (i__20703 + (1));
i__20703 = G__21178;
continue;
} else {
var G__21179 = (i__20703 + (1));
i__20703 = G__21179;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20704),website_helpers$notes$iter__20701(cljs.core.chunk_rest(s__20702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20704),null);
}
} else {
var vec__20708 = cljs.core.first(s__20702__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708,(0),null);
var notes_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20708,(1),null);
if((!(cljs.core.contains_QMARK_(categories_to_ignore,category)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [category,new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1(notes_map)], null),website_helpers$notes$iter__20701(cljs.core.rest(s__20702__$2)));
} else {
var G__21182 = cljs.core.rest(s__20702__$2);
s__20702__$1 = G__21182;
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
var G__20718 = arguments.length;
switch (G__20718) {
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
var vec__20745 = website_helpers.notes.get_largest_category.cljs$core$IFn$_invoke$arity$2(notes,categories_to_ignore);
var largest_category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(0),null);
var largest_notes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20745,(1),null);
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
website_helpers.notes.month_name_to_index = (function website_helpers$notes$month_name_to_index(month_name){
var G__20767 = month_name;
switch (G__20767) {
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
var vec__20777 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_string,/ /);
var month_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(0),null);
var year_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(1),null);
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
website_helpers.notes.note__GT_link = (function website_helpers$notes$note__GT_link(note,cur_page_note,p__20813){
var map__20814 = p__20813;
var map__20814__$1 = cljs.core.__destructure_map(map__20814);
var recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814__$1,new cljs.core.Keyword(null,"recently-created-notes","recently-created-notes",237979596));
var recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20814__$1,new cljs.core.Keyword(null,"recently-modified-notes","recently-modified-notes",-186225427));
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20826_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.path__GT_url(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__20826_SHARP_)),url);
}),possible_notes));
});
website_helpers.notes.make_nested_note_html = (function website_helpers$notes$make_nested_note_html(notes_by_category,cur_page,p__20831){
var map__20832 = p__20831;
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var recentcy_data = map__20832__$1;
var categories_with_recently_modified_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"categories-with-recently-modified-notes","categories-with-recently-modified-notes",-1132824786));
var categories_with_recently_created_notes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"categories-with-recently-created-notes","categories-with-recently-created-notes",-427644495));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$notes$make_nested_note_html_$_iter__20840(s__20841){
return (new cljs.core.LazySeq(null,(function (){
var s__20841__$1 = s__20841;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20841__$1);
if(temp__5823__auto__){
var s__20841__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20841__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20841__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20843 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20842 = (0);
while(true){
if((i__20842 < size__5522__auto__)){
var vec__20847 = cljs.core._nth(c__5521__auto__,i__20842);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(1),null);
cljs.core.chunk_append(b__20843,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__20842,vec__20847,category,subtree,c__5521__auto__,size__5522__auto__,b__20843,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20850(s__20851){
return (new cljs.core.LazySeq(null,((function (i__20842,vec__20847,category,subtree,c__5521__auto__,size__5522__auto__,b__20843,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function (){
var s__20851__$1 = s__20851;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20851__$1);
if(temp__5823__auto____$1){
var s__20851__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20851__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__20851__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__20853 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__20852 = (0);
while(true){
if((i__20852 < size__5522__auto____$1)){
var note = cljs.core._nth(c__5521__auto____$1,i__20852);
cljs.core.chunk_append(b__20853,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__21245 = (i__20852 + (1));
i__20852 = G__21245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20853),website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20850(cljs.core.chunk_rest(s__20851__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20853),null);
}
} else {
var note = cljs.core.first(s__20851__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20850(cljs.core.rest(s__20851__$2)));
}
} else {
return null;
}
break;
}
});})(i__20842,vec__20847,category,subtree,c__5521__auto__,size__5522__auto__,b__20843,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
,null,null));
});})(i__20842,vec__20847,category,subtree,c__5521__auto__,size__5522__auto__,b__20843,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)));

var G__21255 = (i__20842 + (1));
i__20842 = G__21255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20843),website_helpers$notes$make_nested_note_html_$_iter__20840(cljs.core.chunk_rest(s__20841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20843),null);
}
} else {
var vec__20864 = cljs.core.first(s__20841__$2);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(0),null);
var subtree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20864,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(category,new cljs.core.Keyword(null,"notes","notes",-1039600523)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (vec__20864,category,subtree,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes){
return (function website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20868(s__20869){
return (new cljs.core.LazySeq(null,(function (){
var s__20869__$1 = s__20869;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20869__$1);
if(temp__5823__auto____$1){
var s__20869__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20869__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20869__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20871 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20870 = (0);
while(true){
if((i__20870 < size__5522__auto__)){
var note = cljs.core._nth(c__5521__auto__,i__20870);
cljs.core.chunk_append(b__20871,website_helpers.notes.note_to_li(note,cur_page,recentcy_data));

var G__21263 = (i__20870 + (1));
i__20870 = G__21263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20871),website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20868(cljs.core.chunk_rest(s__20869__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20871),null);
}
} else {
var note = cljs.core.first(s__20869__$2);
return cljs.core.cons(website_helpers.notes.note_to_li(note,cur_page,recentcy_data),website_helpers$notes$make_nested_note_html_$_iter__20840_$_iter__20868(cljs.core.rest(s__20869__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__20864,category,subtree,s__20841__$2,temp__5823__auto__,map__20832,map__20832__$1,recentcy_data,categories_with_recently_modified_notes,categories_with_recently_created_notes))
;
return iter__5523__auto__(subtree);
})()):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),category,new cljs.core.Keyword(null,"open","open",-1763596448),((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(cur_page),category)) || (((5) > cljs.core.count(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(notes_by_category))))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),clojure.string.capitalize(category)," ",((cljs.core.contains_QMARK_(categories_with_recently_created_notes,category))?"+":""),((cljs.core.contains_QMARK_(categories_with_recently_modified_notes,category))?"*":"")], null)], null),(website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3 ? website_helpers.notes.make_nested_note_html.cljs$core$IFn$_invoke$arity$3(subtree,cur_page,recentcy_data) : website_helpers.notes.make_nested_note_html.call(null,subtree,cur_page,recentcy_data))], null)], null)], null)),website_helpers$notes$make_nested_note_html_$_iter__20840(cljs.core.rest(s__20841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__20830_SHARP_){
var k = cljs.core.first(p1__20830_SHARP_);
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
var G__20886 = k;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__20886], 0));

return G__20886;

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
return cljs.core.some((function (p1__20891_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__20891_SHARP_);
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
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_recently_modified_notes_to_highlight,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20906_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__20906_SHARP_);
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
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20957_SHARP_){
return clojure.set.subset_QMARK_(selected_categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__20957_SHARP_));
}),notes));
}
});
website_helpers.notes.make_nested_note_list = (function website_helpers$notes$make_nested_note_list(notes,selected_categories,organization_fn,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
return website_helpers.notes.make_nested_note_html((function (){var G__20972 = website_helpers.notes.get_notes_for_categories(notes,selected_categories);
return (organization_fn.cljs$core$IFn$_invoke$arity$1 ? organization_fn.cljs$core$IFn$_invoke$arity$1(G__20972) : organization_fn.call(null,G__20972));
})(),website_helpers.notes.get_cur_page_note(notes),website_helpers.notes.get_recentcy_data(notes,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight));
});
website_helpers.notes.set_one_to_true = (function website_helpers$notes$set_one_to_true(ks,k_to_true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$notes$set_one_to_true_$_iter__20990(s__20991){
return (new cljs.core.LazySeq(null,(function (){
var s__20991__$1 = s__20991;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20991__$1);
if(temp__5823__auto__){
var s__20991__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20991__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20991__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20993 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20992 = (0);
while(true){
if((i__20992 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__20992);
cljs.core.chunk_append(b__20993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null));

var G__21284 = (i__20992 + (1));
i__20992 = G__21284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20993),website_helpers$notes$set_one_to_true_$_iter__20990(cljs.core.chunk_rest(s__20991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20993),null);
}
} else {
var k = cljs.core.first(s__20991__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null),website_helpers$notes$set_one_to_true_$_iter__20990(cljs.core.rest(s__20991__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently created:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21000_SHARP_){
return website_helpers.notes.note_to_li(p1__21000_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),recently_created_notes)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Most recently modified:"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21001_SHARP_){
return website_helpers.notes.note_to_li(p1__21001_SHARP_,cur_page_note,cljs.core.PersistentArrayMap.EMPTY);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(website_helpers.notes.last_modification_time,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21002_SHARP_){
return website_helpers.notes.in_QMARK_(recently_created_notes,p1__21002_SHARP_);
}),notes))))))], null);
});
website_helpers.notes.make_index_menu = (function website_helpers$notes$make_index_menu(){
var organization_scheme = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.notes.set_one_to_true(cljs.core.keys(website_helpers.notes.organization_schemes),new cljs.core.Keyword(null,"largest-category","largest-category",227675861)));
return (function (){
var notes = cljs.core.deref(website_helpers.global.notes);
var cur_page_note = website_helpers.notes.get_cur_page_note(notes);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,website_helpers.global.category_selections,"Select Categories",website_helpers.notes.select_category_BANG_,"checkbox"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.common_components.dropdown_select_list,organization_scheme,["Organize by ",cljs.core.name(cljs.core.some((function (p__21031){
var vec__21032 = p__21031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21032,(1),null);
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
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(website_helpers.global.num_recently_created_notes_to_highlight)], null)], null)], null)], null),(function (){var selected_organization_scheme = cljs.core.first((function (){var iter__5523__auto__ = (function website_helpers$notes$make_index_menu_$_iter__21040(s__21041){
return (new cljs.core.LazySeq(null,(function (){
var s__21041__$1 = s__21041;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21041__$1);
if(temp__5823__auto__){
var s__21041__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21041__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21041__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21043 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21042 = (0);
while(true){
if((i__21042 < size__5522__auto__)){
var vec__21045 = cljs.core._nth(c__5521__auto__,i__21042);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21045,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
cljs.core.chunk_append(b__21043,scheme);

var G__21307 = (i__21042 + (1));
i__21042 = G__21307;
continue;
} else {
var G__21308 = (i__21042 + (1));
i__21042 = G__21308;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21043),website_helpers$notes$make_index_menu_$_iter__21040(cljs.core.chunk_rest(s__21041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21043),null);
}
} else {
var vec__21048 = cljs.core.first(s__21041__$2);
var scheme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21048,(0),null);
var selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21048,(1),null);
if(cljs.core.truth_(selected_QMARK_)){
return cljs.core.cons(scheme,website_helpers$notes$make_index_menu_$_iter__21040(cljs.core.rest(s__21041__$2)));
} else {
var G__21312 = cljs.core.rest(s__21041__$2);
s__21041__$1 = G__21312;
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
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with * indicate they contain recent modifications."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Sections/pages with + indicate recent page additions."], null)], null)], null)], null);
});
});
goog.exportSymbol('website_helpers.notes.make_index_menu', website_helpers.notes.make_index_menu);
website_helpers.notes.random_page = (function website_helpers$notes$random_page(var_args){
var G__21055 = arguments.length;
switch (G__21055) {
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
