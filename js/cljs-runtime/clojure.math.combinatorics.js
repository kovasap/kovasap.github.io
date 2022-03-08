goog.provide('clojure.math.combinatorics');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(colls);
if(temp__5753__auto__){
var s = temp__5753__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__52736 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__52736) : clojure.math.combinatorics.join.call(null,G__52736));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__52743(s__52744){
return (new cljs.core.LazySeq(null,(function (){
var s__52744__$1 = s__52744;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52744__$1);
if(temp__5753__auto__){
var s__52744__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52744__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52744__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52746 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52745 = (0);
while(true){
if((i__52745 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__52745);
cljs.core.chunk_append(b__52746,((j + cnt) + (- (n + (1)))));

var G__53659 = (i__52745 + (1));
i__52745 = G__53659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52746),clojure$math$combinatorics$index_combinations_$_iter__52743(cljs.core.chunk_rest(s__52744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52746),null);
}
} else {
var j = cljs.core.first(s__52744__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__52743(cljs.core.rest(s__52744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__53665 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__53666 = (j__$1 - (1));
c__$3 = G__53665;
j__$1 = G__53666;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__53670 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__53671 = (index__$1 + (1));
var G__53672 = (already_distributed__$1 + mi);
distribution__$1 = G__53670;
index__$1 = G__53671;
already_distributed__$1 = G__53672;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__52763 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52763,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__52768 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__53675 = distribution__$2;
distribution__$1 = G__53675;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5753__auto__)){
var next_step = temp__5753__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__52776(s__52777){
return (new cljs.core.LazySeq(null,(function (){
var s__52777__$1 = s__52777;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52777__$1);
if(temp__5753__auto__){
var s__52777__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52777__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52777__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52779 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52778 = (0);
while(true){
if((i__52778 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__52778);
cljs.core.chunk_append(b__52779,(function (){var G__52781 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52781) : f.call(null,G__52781));
})());

var G__53681 = (i__52778 + (1));
i__52778 = G__53681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52779),clojure$math$combinatorics$multi_comb_$_iter__52776(cljs.core.chunk_rest(s__52777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52779),null);
}
} else {
var i = cljs.core.first(s__52777__$2);
return cljs.core.cons((function (){var G__52794 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52794) : f.call(null,G__52794));
})(),clojure$math$combinatorics$multi_comb_$_iter__52776(cljs.core.rest(s__52777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__52795(s__52796){
return (new cljs.core.LazySeq(null,(function (){
var s__52796__$1 = s__52796;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52796__$1);
if(temp__5753__auto__){
var s__52796__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52796__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52796__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52798 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52797 = (0);
while(true){
if((i__52797 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__52797);
cljs.core.chunk_append(b__52798,clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (i__52797,q,c__4650__auto__,size__4651__auto__,b__52798,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52801(s__52802){
return (new cljs.core.LazySeq(null,((function (i__52797,q,c__4650__auto__,size__4651__auto__,b__52798,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__52802__$1 = s__52802;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52802__$1);
if(temp__5753__auto____$1){
var s__52802__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52802__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__52802__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__52804 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__52803 = (0);
while(true){
if((i__52803 < size__4651__auto____$1)){
var vec__52813 = cljs.core._nth(c__4650__auto____$1,i__52803);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52813,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52813,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52813,(2),null);
cljs.core.chunk_append(b__52804,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__53684 = (i__52803 + (1));
i__52803 = G__53684;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52804),clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52801(cljs.core.chunk_rest(s__52802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52804),null);
}
} else {
var vec__52816 = cljs.core.first(s__52802__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52816,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52801(cljs.core.rest(s__52802__$2)));
}
} else {
return null;
}
break;
}
});})(i__52797,q,c__4650__auto__,size__4651__auto__,b__52798,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__52797,q,c__4650__auto__,size__4651__auto__,b__52798,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()));

var G__53685 = (i__52797 + (1));
i__52797 = G__53685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52798),clojure$math$combinatorics$multi_comb_$_iter__52795(cljs.core.chunk_rest(s__52796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52798),null);
}
} else {
var q = cljs.core.first(s__52796__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (q,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52819(s__52820){
return (new cljs.core.LazySeq(null,(function (){
var s__52820__$1 = s__52820;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52820__$1);
if(temp__5753__auto____$1){
var s__52820__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52820__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52820__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52822 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52821 = (0);
while(true){
if((i__52821 < size__4651__auto__)){
var vec__52827 = cljs.core._nth(c__4650__auto__,i__52821);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52827,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52827,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52827,(2),null);
cljs.core.chunk_append(b__52822,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__53688 = (i__52821 + (1));
i__52821 = G__53688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52822),clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52819(cljs.core.chunk_rest(s__52820__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52822),null);
}
} else {
var vec__52834 = cljs.core.first(s__52820__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52834,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52834,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52834,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__52795_$_iter__52819(cljs.core.rest(s__52820__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__52796__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__52795(cljs.core.rest(s__52796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4652__auto__ = (function clojure$math$combinatorics$combinations_$_iter__52846(s__52847){
return (new cljs.core.LazySeq(null,(function (){
var s__52847__$1 = s__52847;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52847__$1);
if(temp__5753__auto__){
var s__52847__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52847__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52847__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52849 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52848 = (0);
while(true){
if((i__52848 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__52848);
cljs.core.chunk_append(b__52849,(new cljs.core.List(null,item,null,(1),null)));

var G__53692 = (i__52848 + (1));
i__52848 = G__53692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52849),clojure$math$combinatorics$combinations_$_iter__52846(cljs.core.chunk_rest(s__52847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52849),null);
}
} else {
var item = cljs.core.first(s__52847__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__52846(cljs.core.rest(s__52847__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52843_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__52843_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__52870 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__52870) : clojure.math.combinatorics.unchunk.call(null,G__52870));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53693 = arguments.length;
var i__4865__auto___53694 = (0);
while(true){
if((i__4865__auto___53694 < len__4864__auto___53693)){
args__4870__auto__.push((arguments[i__4865__auto___53694]));

var G__53695 = (i__4865__auto___53694 + (1));
i__4865__auto___53694 = G__53695;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5751__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5751__auto__){
var rst = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__53696 = (i - (1));
var G__53697 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__53696;
v_seqs__$2 = G__53697;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq52879){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52879));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__52905 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__52905) : v.call(null,G__52905));
})())){
return i;
} else {
var G__53706 = (i - (1));
i = G__53706;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__53707 = (i - (1));
i = G__53707;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__53709 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__53710 = (k + (1));
var G__53711 = (l__$1 - (1));
v__$1 = G__53709;
k = G__53710;
l__$1 = G__53711;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__52911 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__52911) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__52911));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
var and__4251__auto__ = cljs.core.every_QMARK_(cljs.core.number_QMARK_,s);
if(and__4251__auto__){
var or__4253__auto__ = cljs.core.empty_QMARK_(s);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return and__4251__auto__;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__52915(s__52916){
return (new cljs.core.LazySeq(null,(function (){
var s__52916__$1 = s__52916;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52916__$1);
if(temp__5753__auto__){
var s__52916__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52916__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52916__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52918 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52917 = (0);
while(true){
if((i__52917 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__52917);
cljs.core.chunk_append(b__52918,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__52923 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52923) : f.call(null,G__52923));
})(),i));

var G__53720 = (i__52917 + (1));
i__52917 = G__53720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52918),clojure$math$combinatorics$multi_perm_$_iter__52915(cljs.core.chunk_rest(s__52916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52918),null);
}
} else {
var i = cljs.core.first(s__52916__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__52924 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__52924) : f.call(null,G__52924));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__52915(cljs.core.rest(s__52916__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52926_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__52926_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__53724 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__53725 = (n__$1 - (1));
acc = G__53724;
n__$1 = G__53725;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__53730 = q;
var G__53731 = cljs.core.cons(r,digits);
var G__53732 = (divisor + (1));
n__$1 = G__53730;
digits = G__53731;
divisor = G__53732;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__53733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__53734 = cljs.core.rest(l__$1);
var G__53735 = (n__$1 - (1));
acc = G__53733;
l__$1 = G__53734;
n__$1 = G__53735;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__53739 = cljs.core.rest(indices);
var G__53740 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__53741 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__53739;
l__$1 = G__53740;
perm = G__53741;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__52987(s__52988){
return (new cljs.core.LazySeq(null,(function (){
var s__52988__$1 = s__52988;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52988__$1);
if(temp__5753__auto__){
var s__52988__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52988__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__52988__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__52990 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__52989 = (0);
while(true){
if((i__52989 < size__4651__auto__)){
var vec__52997 = cljs.core._nth(c__4650__auto__,i__52989);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52997,(1),null);
cljs.core.chunk_append(b__52990,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__53749 = (i__52989 + (1));
i__52989 = G__53749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52990),clojure$math$combinatorics$initial_perm_numbers_$_iter__52987(cljs.core.chunk_rest(s__52988__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52990),null);
}
} else {
var vec__53005 = cljs.core.first(s__52988__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53005,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__52987(cljs.core.rest(s__52988__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__53753 = cljs.core.rest(perm_numbers__$1);
var G__53754 = (index + (1));
perm_numbers__$1 = G__53753;
index = G__53754;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__53044 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53044,(1),null);
var G__53759 = remainder;
var G__53760 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__53761 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__53759;
digits = G__53760;
freqs__$1 = G__53761;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__53766 = clojure.math.combinatorics.dec_key(freqs,item);
var G__53767 = cljs.core.rest(indices);
var G__53768 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__53766;
indices = G__53767;
perm = G__53768;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__53048(s__53049){
return (new cljs.core.LazySeq(null,(function (){
var s__53049__$1 = s__53049;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53049__$1);
if(temp__5753__auto__){
var s__53049__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53049__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53049__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53051 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53050 = (0);
while(true){
if((i__53050 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53050);
cljs.core.chunk_append(b__53051,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53053 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53053) : f.call(null,G__53053));
})(),i));

var G__53772 = (i__53050 + (1));
i__53050 = G__53772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53051),clojure$math$combinatorics$nth_permutation_$_iter__53048(cljs.core.chunk_rest(s__53049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53051),null);
}
} else {
var i = cljs.core.first(s__53049__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53055 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53055) : f.call(null,G__53055));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__53048(cljs.core.rest(s__53049__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__53065(s__53066){
return (new cljs.core.LazySeq(null,(function (){
var s__53066__$1 = s__53066;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53066__$1);
if(temp__5753__auto__){
var s__53066__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53066__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53066__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53068 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53067 = (0);
while(true){
if((i__53067 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53067);
cljs.core.chunk_append(b__53068,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53071 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53071) : f.call(null,G__53071));
})(),i));

var G__53779 = (i__53067 + (1));
i__53067 = G__53779;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53068),clojure$math$combinatorics$drop_permutations_$_iter__53065(cljs.core.chunk_rest(s__53066__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53068),null);
}
} else {
var i = cljs.core.first(s__53066__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53075 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53075) : f.call(null,G__53075));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__53065(cljs.core.rest(s__53066__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__53780 = n;
var G__53781 = (n - k);
n = G__53780;
k = G__53781;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__53089 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__53090 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__53089,G__53090) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__53089,G__53090));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t);
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__53094 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__53095 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__53095);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__53094);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__53783 = n__$1;
var G__53784 = y;
var G__53785 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__53783;
y = G__53784;
z = G__53785;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__53787 = n__$1;
var G__53788 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__53789 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__53787;
y = G__53788;
z = G__53789;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__53124(s__53125){
return (new cljs.core.LazySeq(null,(function (){
var s__53125__$1 = s__53125;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53125__$1);
if(temp__5753__auto__){
var s__53125__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53125__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53125__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53127 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53126 = (0);
while(true){
if((i__53126 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53126);
cljs.core.chunk_append(b__53127,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__53791 = (i__53126 + (1));
i__53126 = G__53791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53127),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__53124(cljs.core.chunk_rest(s__53125__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53127),null);
}
} else {
var i = cljs.core.first(s__53125__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__53124(cljs.core.rest(s__53125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__53145 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__53146 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__53146);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__53145);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__53793 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__53794 = cljs.core.rest(items__$1);
var G__53795 = (t__$1 - (1));
var G__53796 = n__$1;
comb = G__53793;
items__$1 = G__53794;
t__$1 = G__53795;
n__$1 = G__53796;
continue;
} else {
var G__53798 = comb;
var G__53799 = cljs.core.rest(items__$1);
var G__53800 = t__$1;
var G__53801 = (n__$1 - dc_dt);
comb = G__53798;
items__$1 = G__53799;
t__$1 = G__53800;
n__$1 = G__53801;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__53177(s__53178){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__53178__$1 = s__53178;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53178__$1);
if(temp__5753__auto__){
var s__53178__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53178__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53178__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53180 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53179 = (0);
while(true){
if((i__53179 < size__4651__auto__)){
var vec__53183 = cljs.core._nth(c__4650__auto__,i__53179);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53183,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53183,(1),null);
cljs.core.chunk_append(b__53180,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__53803 = (i__53179 + (1));
i__53179 = G__53803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53180),clojure$math$combinatorics$nth_combination_freqs_$_iter__53177(cljs.core.chunk_rest(s__53178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53180),null);
}
} else {
var vec__53189 = cljs.core.first(s__53178__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53189,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__53177(cljs.core.rest(s__53178__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4652__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__53805 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__53806 = remove_one_key;
var G__53807 = (t__$1 - (1));
var G__53808 = n__$1;
comb = G__53805;
freqs__$1 = G__53806;
t__$1 = G__53807;
n__$1 = G__53808;
continue;
} else {
var G__53809 = comb;
var G__53810 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__53811 = t__$1;
var G__53812 = (n__$1 - dc_dt);
comb = G__53809;
freqs__$1 = G__53810;
t__$1 = G__53811;
n__$1 = G__53812;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__53196 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__53197 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__53197);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__53198(s__53199){
return (new cljs.core.LazySeq(null,(function (){
var s__53199__$1 = s__53199;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53199__$1);
if(temp__5753__auto__){
var s__53199__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53199__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53199__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53201 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53200 = (0);
while(true){
if((i__53200 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53200);
cljs.core.chunk_append(b__53201,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53206 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53206) : f.call(null,G__53206));
})(),i));

var G__53817 = (i__53200 + (1));
i__53200 = G__53817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53201),clojure$math$combinatorics$nth_combination_$_iter__53198(cljs.core.chunk_rest(s__53199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53201),null);
}
} else {
var i = cljs.core.first(s__53199__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__53212 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53212) : f.call(null,G__53212));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__53198(cljs.core.rest(s__53199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__53196);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__53819 = (size + (1));
var G__53820 = (n__$1 - num_combinations);
size = G__53819;
n__$1 = G__53820;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__53822 = cljs.core.rest(l__$1);
var G__53823 = (n + (1));
l__$1 = G__53822;
n = G__53823;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__53825 = cljs.core.rest(l__$1);
var G__53826 = (function (){var G__53232 = index;
var G__53233 = (function (){var G__53234 = clojure.math.combinatorics.factorial(n);
var G__53235 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__53234,G__53235) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__53234,G__53235));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__53232,G__53233) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__53232,G__53233));
})();
var G__53827 = (n - (1));
l__$1 = G__53825;
index = G__53826;
n = G__53827;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__53828 = cljs.core.rest(l__$1);
var G__53829 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4652__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__53274(s__53275){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__53275__$1 = s__53275;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53275__$1);
if(temp__5753__auto__){
var s__53275__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53275__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53275__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53277 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53276 = (0);
while(true){
if((i__53276 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__53276);
cljs.core.chunk_append(b__53277,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__53834 = (i__53276 + (1));
i__53276 = G__53834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53277),clojure$math$combinatorics$permutation_index_duplicates_$_iter__53274(cljs.core.chunk_rest(s__53275__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53277),null);
}
} else {
var k = cljs.core.first(s__53275__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__53274(cljs.core.rest(s__53275__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4652__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4652__auto__){
return (function (p1__53239_SHARP_){
return (cljs.core.compare(p1__53239_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4652__auto__))
,cljs.core.keys(freqs)));
})());
var G__53830 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__53828;
index = G__53829;
freqs = G__53830;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$init_$_iter__53308(s__53309){
return (new cljs.core.LazySeq(null,(function (){
var s__53309__$1 = s__53309;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53309__$1);
if(temp__5753__auto__){
var s__53309__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53309__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53309__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53311 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53310 = (0);
while(true){
if((i__53310 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53310);
cljs.core.chunk_append(b__53311,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());

var G__53839 = (i__53310 + (1));
i__53310 = G__53839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53311),clojure$math$combinatorics$init_$_iter__53308(cljs.core.chunk_rest(s__53309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53311),null);
}
} else {
var i = cljs.core.first(s__53309__$2);
return cljs.core.cons((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),clojure$math$combinatorics$init_$_iter__53308(cljs.core.rest(s__53309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__53327 = arguments.length;
switch (G__53327) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((function (){var and__4251__auto__ = (cljs.core.peek(b) > cljs.core.peek(a));
if(and__4251__auto__){
if(cljs.core.truth_(r)){
return (cljs.core.peek(a) < (r - (1)));
} else {
return true;
}
} else {
return and__4251__auto__;
}
})()){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if((function (){var and__4251__auto__ = ((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)));
if(and__4251__auto__){
var and__4251__auto____$1 = (cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true);
if(and__4251__auto____$1){
if(cljs.core.truth_(s)){
return (((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j));
} else {
return true;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})()){
return j;
} else {
var G__53843 = (j - (1));
j = G__53843;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__53336 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4251__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__53847 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__53849 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__53850 = (i + (1));
var G__53851 = (function (){var x__4336__auto__ = current_max;
var y__4337__auto__ = (new_a_i + (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
a__$2 = G__53847;
b__$1 = G__53849;
i = G__53850;
current_max = G__53851;
continue;
} else {
var G__53852 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__53853 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__53854 = (i + (1));
var G__53855 = current_max;
a__$2 = G__53852;
b__$1 = G__53853;
i = G__53854;
current_max = G__53855;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53857 = arguments.length;
var i__4865__auto___53858 = (0);
while(true){
if((i__4865__auto___53858 < len__4864__auto___53857)){
args__4870__auto__.push((arguments[i__4865__auto___53858]));

var G__53859 = (i__4865__auto___53858 + (1));
i__4865__auto___53858 = G__53859;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__53347){
var map__53348 = p__53347;
var map__53348__$1 = cljs.core.__destructure_map(map__53348);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53348__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53348__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4253__auto__ = from;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4253__auto__ = to;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = from;
if(cljs.core.truth_(and__4251__auto__)){
return (from <= (1));
} else {
return and__4251__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = to;
if(cljs.core.truth_(and__4251__auto__)){
return (to >= N);
} else {
return and__4251__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4253__auto__ = from__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4253__auto__ = from__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})() <= (function (){var or__4253__auto__ = to__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return N;
}
})())) && (((function (){var or__4253__auto__ = to__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__53360(s__53361){
return (new cljs.core.LazySeq(null,(function (){
var s__53361__$1 = s__53361;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53361__$1);
if(temp__5753__auto__){
var s__53361__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53361__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53361__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53363 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53362 = (0);
while(true){
if((i__53362 < size__4651__auto__)){
var growth_string = cljs.core._nth(c__4650__auto__,i__53362);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__53363,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__53866 = (i__53362 + (1));
i__53362 = G__53866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53363),clojure$math$combinatorics$iter__53360(cljs.core.chunk_rest(s__53361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53363),null);
}
} else {
var growth_string = cljs.core.first(s__53361__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__53360(cljs.core.rest(s__53361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq53344){
var G__53345 = cljs.core.first(seq53344);
var seq53344__$1 = cljs.core.next(seq53344);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53345,seq53344__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53868 = arguments.length;
var i__4865__auto___53869 = (0);
while(true){
if((i__4865__auto___53869 < len__4864__auto___53868)){
args__4870__auto__.push((arguments[i__4865__auto___53869]));

var G__53871 = (i__4865__auto___53869 + (1));
i__4865__auto___53869 = G__53871;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__53377(s__53378){
return (new cljs.core.LazySeq(null,(function (){
var s__53378__$1 = s__53378;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53378__$1);
if(temp__5753__auto__){
var s__53378__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53378__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53378__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53380 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53379 = (0);
while(true){
if((i__53379 < size__4651__auto__)){
var parts = cljs.core._nth(c__4650__auto__,i__53379);
cljs.core.chunk_append(b__53380,(function (){var iter__4652__auto__ = ((function (i__53379,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__53377_$_iter__53385(s__53386){
return (new cljs.core.LazySeq(null,((function (i__53379,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__53386__$1 = s__53386;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53386__$1);
if(temp__5753__auto____$1){
var s__53386__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53386__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__53386__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__53388 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__53387 = (0);
while(true){
if((i__53387 < size__4651__auto____$1)){
var part = cljs.core._nth(c__4650__auto____$1,i__53387);
cljs.core.chunk_append(b__53388,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__53387,i__53379,part,c__4650__auto____$1,size__4651__auto____$1,b__53388,s__53386__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__53387,i__53379,part,c__4650__auto____$1,size__4651__auto____$1,b__53388,s__53386__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__53876 = (i__53387 + (1));
i__53387 = G__53876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53388),clojure$math$combinatorics$iter__53377_$_iter__53385(cljs.core.chunk_rest(s__53386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53388),null);
}
} else {
var part = cljs.core.first(s__53386__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__53379,part,s__53386__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__53379,part,s__53386__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__53377_$_iter__53385(cljs.core.rest(s__53386__$2)));
}
} else {
return null;
}
break;
}
});})(i__53379,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__53379,parts,c__4650__auto__,size__4651__auto__,b__53380,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})());

var G__53879 = (i__53379 + (1));
i__53379 = G__53879;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53380),clojure$math$combinatorics$iter__53377(cljs.core.chunk_rest(s__53378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53380),null);
}
} else {
var parts = cljs.core.first(s__53378__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__53377_$_iter__53395(s__53396){
return (new cljs.core.LazySeq(null,(function (){
var s__53396__$1 = s__53396;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53396__$1);
if(temp__5753__auto____$1){
var s__53396__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53396__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53396__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53398 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53397 = (0);
while(true){
if((i__53397 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__53397);
cljs.core.chunk_append(b__53398,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__53397,part,c__4650__auto__,size__4651__auto__,b__53398,s__53396__$2,temp__5753__auto____$1,parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__53397,part,c__4650__auto__,size__4651__auto__,b__53398,s__53396__$2,temp__5753__auto____$1,parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__53882 = (i__53397 + (1));
i__53397 = G__53882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53398),clojure$math$combinatorics$iter__53377_$_iter__53395(cljs.core.chunk_rest(s__53396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53398),null);
}
} else {
var part = cljs.core.first(s__53396__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__53396__$2,temp__5753__auto____$1,parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__53396__$2,temp__5753__auto____$1,parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__53377_$_iter__53395(cljs.core.rest(s__53396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__53378__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})(),clojure$math$combinatorics$iter__53377(cljs.core.rest(s__53378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq53371){
var G__53372 = cljs.core.first(seq53371);
var seq53371__$1 = cljs.core.next(seq53371);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53372,seq53371__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__53416 = arguments.length;
switch (G__53416) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__53421 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__53889 = (j + (1));
var G__53890 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__53891 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__53427 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__53427) : multiset.call(null,G__53427));
})());
var G__53892 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__53428 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__53428) : multiset.call(null,G__53428));
})());
j = G__53889;
c__$1 = G__53890;
u__$1 = G__53891;
v__$1 = G__53892;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53421,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53421,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53421,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__53431 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__53898 = (j + (1));
var G__53899 = k;
var G__53900 = true;
var G__53901 = u__$2;
var G__53902 = v__$1;
var G__53903 = c__$1;
j = G__53898;
k = G__53899;
x = G__53900;
u__$1 = G__53901;
v__$1 = G__53902;
c__$1 = G__53903;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4339__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4340__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__53905 = j__$1;
var G__53906 = k__$1;
var G__53907 = x__$1;
var G__53908 = u__$2;
var G__53909 = v__$2;
var G__53910 = c__$2;
j = G__53905;
k = G__53906;
x = G__53907;
u__$1 = G__53908;
v__$1 = G__53909;
c__$1 = G__53910;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__53911 = j__$1;
var G__53912 = k__$1;
var G__53913 = x;
var G__53914 = u__$2;
var G__53915 = v__$2;
var G__53916 = c__$2;
j = G__53911;
k = G__53912;
x = G__53913;
u__$1 = G__53914;
v__$1 = G__53915;
c__$1 = G__53916;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53431,(4),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = r;
if(cljs.core.truth_(and__4251__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4251__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = s;
if(cljs.core.truth_(and__4251__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4251__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__53918 = n;
var G__53919 = m;
var G__53920 = f__$1;
var G__53921 = c__$1;
var G__53922 = u__$1;
var G__53923 = v__$1;
var G__53924 = a__$1;
var G__53925 = b__$1;
var G__53926 = l__$1;
var G__53927 = r;
var G__53928 = s;
n = G__53918;
m = G__53919;
f = G__53920;
c = G__53921;
u = G__53922;
v = G__53923;
a = G__53924;
b = G__53925;
l = G__53926;
r = G__53927;
s = G__53928;
continue;
} else {
var part = (function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__53449(s__53450){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__53450__$1 = s__53450;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53450__$1);
if(temp__5753__auto__){
var s__53450__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53450__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53450__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53452 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53451 = (0);
while(true){
if((i__53451 < size__4651__auto__)){
var y = cljs.core._nth(c__4650__auto__,i__53451);
cljs.core.chunk_append(b__53452,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__53455 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53455) : f.call(null,G__53455));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__53451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__53452,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__53449_$_iter__53458(s__53459){
return (new cljs.core.LazySeq(null,((function (i__53451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__53452,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__53459__$1 = s__53459;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53459__$1);
if(temp__5753__auto____$1){
var s__53459__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53459__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__53459__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__53461 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__53460 = (0);
while(true){
if((i__53460 < size__4651__auto____$1)){
var z = cljs.core._nth(c__4650__auto____$1,i__53460);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__53461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__53931 = (i__53460 + (1));
i__53460 = G__53931;
continue;
} else {
var G__53932 = (i__53460 + (1));
i__53460 = G__53932;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53461),clojure$math$combinatorics$iter__53449_$_iter__53458(cljs.core.chunk_rest(s__53459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53461),null);
}
} else {
var z = cljs.core.first(s__53459__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__53449_$_iter__53458(cljs.core.rest(s__53459__$2)));
} else {
var G__53934 = cljs.core.rest(s__53459__$2);
s__53459__$1 = G__53934;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__53451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__53452,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__53451,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__53452,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__53935 = (i__53451 + (1));
i__53451 = G__53935;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53452),clojure$math$combinatorics$iter__53449(cljs.core.chunk_rest(s__53450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53452),null);
}
} else {
var y = cljs.core.first(s__53450__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__53471 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__53471) : f.call(null,G__53471));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__53449_$_iter__53473(s__53474){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__53474__$1 = s__53474;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53474__$1);
if(temp__5753__auto____$1){
var s__53474__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53474__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53474__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53476 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53475 = (0);
while(true){
if((i__53475 < size__4651__auto__)){
var z = cljs.core._nth(c__4650__auto__,i__53475);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__53476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__53937 = (i__53475 + (1));
i__53475 = G__53937;
continue;
} else {
var G__53938 = (i__53475 + (1));
i__53475 = G__53938;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53476),clojure$math$combinatorics$iter__53449_$_iter__53473(cljs.core.chunk_rest(s__53474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53476),null);
}
} else {
var z = cljs.core.first(s__53474__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__53449_$_iter__53473(cljs.core.rest(s__53474__$2)));
} else {
var G__53940 = cljs.core.rest(s__53474__$2);
s__53474__$1 = G__53940;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__53450__$2,temp__5753__auto__,vec__53431,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__53449(cljs.core.rest(s__53450__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__53431,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__53431,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__53431,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__53431,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__53942 = (j - (1));
j = G__53942;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = r;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4251__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$m5_$_iter__53512(s__53513){
return (new cljs.core.LazySeq(null,(function (){
var s__53513__$1 = s__53513;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53513__$1);
if(temp__5753__auto__){
var s__53513__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53513__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53513__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53515 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53514 = (0);
while(true){
if((i__53514 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53514);
cljs.core.chunk_append(b__53515,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__53947 = (i__53514 + (1));
i__53514 = G__53947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53515),clojure$math$combinatorics$m5_$_iter__53512(cljs.core.chunk_rest(s__53513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53515),null);
}
} else {
var i = cljs.core.first(s__53513__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__53512(cljs.core.rest(s__53513__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__53950 = cljs.core.rest(ks);
var G__53951 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__53950;
v__$2 = G__53951;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__53952 = (k_1 - (1));
var G__53953 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__53954 = (amount - vk);
k_1 = G__53952;
v__$3 = G__53953;
amount = G__53954;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53958 = arguments.length;
var i__4865__auto___53959 = (0);
while(true){
if((i__4865__auto___53959 < len__4864__auto___53958)){
args__4870__auto__.push((arguments[i__4865__auto___53959]));

var G__53960 = (i__4865__auto___53959 + (1));
i__4865__auto___53959 = G__53960;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__53553){
var map__53555 = p__53553;
var map__53555__$1 = cljs.core.__destructure_map(map__53555);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53555__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53555__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4253__auto__ = from;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4253__auto__ = to;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = from;
if(cljs.core.truth_(and__4251__auto__)){
return (from <= (1));
} else {
return and__4251__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4251__auto__ = to;
if(cljs.core.truth_(and__4251__auto__)){
return (to >= N);
} else {
return and__4251__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4253__auto__ = from__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4253__auto__ = from__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})() <= (function (){var or__4253__auto__ = to__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return N;
}
})())) && (((function (){var or__4253__auto__ = to__$1;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$iter__53564(s__53565){
return (new cljs.core.LazySeq(null,(function (){
var s__53565__$1 = s__53565;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53565__$1);
if(temp__5753__auto__){
var s__53565__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53565__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53565__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53567 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53566 = (0);
while(true){
if((i__53566 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__53566);
var j = (i + (1));
cljs.core.chunk_append(b__53567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__53569 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__53569) : freqs.call(null,G__53569));
})()], null));

var G__53965 = (i__53566 + (1));
i__53566 = G__53965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53567),clojure$math$combinatorics$iter__53564(cljs.core.chunk_rest(s__53565__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53567),null);
}
} else {
var i = cljs.core.first(s__53565__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__53571 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__53571) : freqs.call(null,G__53571));
})()], null),clojure$math$combinatorics$iter__53564(cljs.core.rest(s__53565__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__53575(s__53576){
return (new cljs.core.LazySeq(null,(function (){
var s__53576__$1 = s__53576;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53576__$1);
if(temp__5753__auto__){
var s__53576__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53576__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53576__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53578 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53577 = (0);
while(true){
if((i__53577 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__53577);
cljs.core.chunk_append(b__53578,(function (){var iter__4652__auto__ = ((function (i__53577,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function clojure$math$combinatorics$iter__53575_$_iter__53582(s__53583){
return (new cljs.core.LazySeq(null,((function (i__53577,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function (){
var s__53583__$1 = s__53583;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53583__$1);
if(temp__5753__auto____$1){
var s__53583__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53583__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__53583__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__53585 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__53584 = (0);
while(true){
if((i__53584 < size__4651__auto____$1)){
var multiset = cljs.core._nth(c__4650__auto____$1,i__53584);
cljs.core.chunk_append(b__53585,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__53584,i__53577,multiset,c__4650__auto____$1,size__4651__auto____$1,b__53585,s__53583__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function (p__53590){
var vec__53591 = p__53590;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53591,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53591,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__53594 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__53594) : ditems.call(null,G__53594));
})());
});})(i__53584,i__53577,multiset,c__4650__auto____$1,size__4651__auto____$1,b__53585,s__53583__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
,multiset)));

var G__53971 = (i__53584 + (1));
i__53584 = G__53971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53585),clojure$math$combinatorics$iter__53575_$_iter__53582(cljs.core.chunk_rest(s__53583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53585),null);
}
} else {
var multiset = cljs.core.first(s__53583__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__53577,multiset,s__53583__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function (p__53598){
var vec__53599 = p__53598;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53599,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53599,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__53604 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__53604) : ditems.call(null,G__53604));
})());
});})(i__53577,multiset,s__53583__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__53575_$_iter__53582(cljs.core.rest(s__53583__$2)));
}
} else {
return null;
}
break;
}
});})(i__53577,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
,null,null));
});})(i__53577,part,c__4650__auto__,size__4651__auto__,b__53578,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
;
return iter__4652__auto__(part);
})());

var G__53975 = (i__53577 + (1));
i__53577 = G__53975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53578),clojure$math$combinatorics$iter__53575(cljs.core.chunk_rest(s__53576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53578),null);
}
} else {
var part = cljs.core.first(s__53576__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function clojure$math$combinatorics$iter__53575_$_iter__53609(s__53610){
return (new cljs.core.LazySeq(null,(function (){
var s__53610__$1 = s__53610;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53610__$1);
if(temp__5753__auto____$1){
var s__53610__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53610__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53610__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53612 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53611 = (0);
while(true){
if((i__53611 < size__4651__auto__)){
var multiset = cljs.core._nth(c__4650__auto__,i__53611);
cljs.core.chunk_append(b__53612,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__53611,multiset,c__4650__auto__,size__4651__auto__,b__53612,s__53610__$2,temp__5753__auto____$1,part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function (p__53614){
var vec__53618 = p__53614;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53618,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__53622 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__53622) : ditems.call(null,G__53622));
})());
});})(i__53611,multiset,c__4650__auto__,size__4651__auto__,b__53612,s__53610__$2,temp__5753__auto____$1,part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
,multiset)));

var G__53978 = (i__53611 + (1));
i__53611 = G__53978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53612),clojure$math$combinatorics$iter__53575_$_iter__53609(cljs.core.chunk_rest(s__53610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53612),null);
}
} else {
var multiset = cljs.core.first(s__53610__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__53610__$2,temp__5753__auto____$1,part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to){
return (function (p__53624){
var vec__53625 = p__53624;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53625,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__53628 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__53628) : ditems.call(null,G__53628));
})());
});})(multiset,s__53610__$2,temp__5753__auto____$1,part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__53575_$_iter__53609(cljs.core.rest(s__53610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__53576__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__53555,map__53555__$1,from,to))
;
return iter__4652__auto__(part);
})(),clojure$math$combinatorics$iter__53575(cljs.core.rest(s__53576__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq53549){
var G__53550 = cljs.core.first(seq53549);
var seq53549__$1 = cljs.core.next(seq53549);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53550,seq53549__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4870__auto__ = [];
var len__4864__auto___53981 = arguments.length;
var i__4865__auto___53982 = (0);
while(true){
if((i__4865__auto___53982 < len__4864__auto___53981)){
args__4870__auto__.push((arguments[i__4865__auto___53982]));

var G__53983 = (i__4865__auto___53982 + (1));
i__4865__auto___53982 = G__53983;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq53634){
var G__53635 = cljs.core.first(seq53634);
var seq53634__$1 = cljs.core.next(seq53634);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53635,seq53634__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
