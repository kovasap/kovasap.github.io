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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__81673 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__81673) : clojure.math.combinatorics.join.call(null,G__81673));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__81675(s__81676){
return (new cljs.core.LazySeq(null,(function (){
var s__81676__$1 = s__81676;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81676__$1);
if(temp__5753__auto__){
var s__81676__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81676__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81676__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81678 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81677 = (0);
while(true){
if((i__81677 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__81677);
cljs.core.chunk_append(b__81678,((j + cnt) + (- (n + (1)))));

var G__82196 = (i__81677 + (1));
i__81677 = G__82196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81678),clojure$math$combinatorics$index_combinations_$_iter__81675(cljs.core.chunk_rest(s__81676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81678),null);
}
} else {
var j = cljs.core.first(s__81676__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__81675(cljs.core.rest(s__81676__$2)));
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
var G__82197 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__82198 = (j__$1 - (1));
c__$3 = G__82197;
j__$1 = G__82198;
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
var G__82203 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__82204 = (index__$1 + (1));
var G__82205 = (already_distributed__$1 + mi);
distribution__$1 = G__82203;
index__$1 = G__82204;
already_distributed__$1 = G__82205;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__81694 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81694,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81694,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81694,(2),null);
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
var vec__81699 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81699,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81699,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81699,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__82207 = distribution__$2;
distribution__$1 = G__82207;
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
var m = cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__81713(s__81714){
return (new cljs.core.LazySeq(null,(function (){
var s__81714__$1 = s__81714;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81714__$1);
if(temp__5753__auto__){
var s__81714__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81714__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81714__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81716 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81715 = (0);
while(true){
if((i__81715 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81715);
cljs.core.chunk_append(b__81716,(function (){var G__81720 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81720) : f.call(null,G__81720));
})());

var G__82208 = (i__81715 + (1));
i__81715 = G__82208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81716),clojure$math$combinatorics$multi_comb_$_iter__81713(cljs.core.chunk_rest(s__81714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81716),null);
}
} else {
var i = cljs.core.first(s__81714__$2);
return cljs.core.cons((function (){var G__81721 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81721) : f.call(null,G__81721));
})(),clojure$math$combinatorics$multi_comb_$_iter__81713(cljs.core.rest(s__81714__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__81722(s__81723){
return (new cljs.core.LazySeq(null,(function (){
var s__81723__$1 = s__81723;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81723__$1);
if(temp__5753__auto__){
var s__81723__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81723__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81723__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81725 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81724 = (0);
while(true){
if((i__81724 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__81724);
cljs.core.chunk_append(b__81725,clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (i__81724,q,c__4650__auto__,size__4651__auto__,b__81725,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81737(s__81738){
return (new cljs.core.LazySeq(null,((function (i__81724,q,c__4650__auto__,size__4651__auto__,b__81725,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__81738__$1 = s__81738;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81738__$1);
if(temp__5753__auto____$1){
var s__81738__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81738__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__81738__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__81740 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__81739 = (0);
while(true){
if((i__81739 < size__4651__auto____$1)){
var vec__81741 = cljs.core._nth(c__4650__auto____$1,i__81739);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81741,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81741,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81741,(2),null);
cljs.core.chunk_append(b__81740,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__82209 = (i__81739 + (1));
i__81739 = G__82209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81740),clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81737(cljs.core.chunk_rest(s__81738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81740),null);
}
} else {
var vec__81744 = cljs.core.first(s__81738__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81744,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81744,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81744,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81737(cljs.core.rest(s__81738__$2)));
}
} else {
return null;
}
break;
}
});})(i__81724,q,c__4650__auto__,size__4651__auto__,b__81725,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__81724,q,c__4650__auto__,size__4651__auto__,b__81725,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()));

var G__82213 = (i__81724 + (1));
i__81724 = G__82213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81725),clojure$math$combinatorics$multi_comb_$_iter__81722(cljs.core.chunk_rest(s__81723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81725),null);
}
} else {
var q = cljs.core.first(s__81723__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (q,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81756(s__81757){
return (new cljs.core.LazySeq(null,(function (){
var s__81757__$1 = s__81757;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81757__$1);
if(temp__5753__auto____$1){
var s__81757__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81757__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81757__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81759 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81758 = (0);
while(true){
if((i__81758 < size__4651__auto__)){
var vec__81769 = cljs.core._nth(c__4650__auto__,i__81758);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81769,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81769,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81769,(2),null);
cljs.core.chunk_append(b__81759,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__82216 = (i__81758 + (1));
i__81758 = G__82216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81759),clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81756(cljs.core.chunk_rest(s__81757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81759),null);
}
} else {
var vec__81772 = cljs.core.first(s__81757__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81772,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81772,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81772,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__81722_$_iter__81756(cljs.core.rest(s__81757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__81723__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__81722(cljs.core.rest(s__81723__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$combinations_$_iter__81777(s__81778){
return (new cljs.core.LazySeq(null,(function (){
var s__81778__$1 = s__81778;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81778__$1);
if(temp__5753__auto__){
var s__81778__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81778__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81778__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81780 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81779 = (0);
while(true){
if((i__81779 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__81779);
cljs.core.chunk_append(b__81780,(new cljs.core.List(null,item,null,(1),null)));

var G__82217 = (i__81779 + (1));
i__81779 = G__82217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81780),clojure$math$combinatorics$combinations_$_iter__81777(cljs.core.chunk_rest(s__81778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81780),null);
}
} else {
var item = cljs.core.first(s__81778__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__81777(cljs.core.rest(s__81778__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81775_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__81775_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__81789 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__81789) : clojure.math.combinatorics.unchunk.call(null,G__81789));
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
var len__4864__auto___82219 = arguments.length;
var i__4865__auto___82220 = (0);
while(true){
if((i__4865__auto___82220 < len__4864__auto___82219)){
args__4870__auto__.push((arguments[i__4865__auto___82220]));

var G__82221 = (i__4865__auto___82220 + (1));
i__4865__auto___82220 = G__82221;
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
var G__82224 = (i - (1));
var G__82225 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__82224;
v_seqs__$2 = G__82225;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq81796){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81796));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__81812 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__81812) : v.call(null,G__81812));
})())){
return i;
} else {
var G__82227 = (i - (1));
i = G__82227;
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
var G__82231 = (i - (1));
i = G__82231;
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
var G__82232 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__82233 = (k + (1));
var G__82234 = (l__$1 - (1));
v__$1 = G__82232;
k = G__82233;
l__$1 = G__82234;
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
var G__81819 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__81819) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__81819));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__81820(s__81821){
return (new cljs.core.LazySeq(null,(function (){
var s__81821__$1 = s__81821;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81821__$1);
if(temp__5753__auto__){
var s__81821__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81821__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81821__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81823 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81822 = (0);
while(true){
if((i__81822 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81822);
cljs.core.chunk_append(b__81823,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81826 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81826) : f.call(null,G__81826));
})(),i));

var G__82236 = (i__81822 + (1));
i__81822 = G__82236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81823),clojure$math$combinatorics$multi_perm_$_iter__81820(cljs.core.chunk_rest(s__81821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81823),null);
}
} else {
var i = cljs.core.first(s__81821__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81827 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81827) : f.call(null,G__81827));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__81820(cljs.core.rest(s__81821__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81830_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__81830_SHARP_);
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
var G__82237 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__82238 = (n__$1 - (1));
acc = G__82237;
n__$1 = G__82238;
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
var G__82240 = q;
var G__82241 = cljs.core.cons(r,digits);
var G__82242 = (divisor + (1));
n__$1 = G__82240;
digits = G__82241;
divisor = G__82242;
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
var G__82246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__82247 = cljs.core.rest(l__$1);
var G__82248 = (n__$1 - (1));
acc = G__82246;
l__$1 = G__82247;
n__$1 = G__82248;
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
var G__82252 = cljs.core.rest(indices);
var G__82253 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__82254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__82252;
l__$1 = G__82253;
perm = G__82254;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__81837(s__81838){
return (new cljs.core.LazySeq(null,(function (){
var s__81838__$1 = s__81838;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81838__$1);
if(temp__5753__auto__){
var s__81838__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81838__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81838__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81840 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81839 = (0);
while(true){
if((i__81839 < size__4651__auto__)){
var vec__81842 = cljs.core._nth(c__4650__auto__,i__81839);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81842,(1),null);
cljs.core.chunk_append(b__81840,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__82255 = (i__81839 + (1));
i__81839 = G__82255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81840),clojure$math$combinatorics$initial_perm_numbers_$_iter__81837(cljs.core.chunk_rest(s__81838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81840),null);
}
} else {
var vec__81845 = cljs.core.first(s__81838__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81845,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__81837(cljs.core.rest(s__81838__$2)));
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
var G__82256 = cljs.core.rest(perm_numbers__$1);
var G__82257 = (index + (1));
perm_numbers__$1 = G__82256;
index = G__82257;
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
var vec__81858 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81858,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81858,(1),null);
var G__82264 = remainder;
var G__82265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__82266 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__82264;
digits = G__82265;
freqs__$1 = G__82266;
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
var G__82267 = clojure.math.combinatorics.dec_key(freqs,item);
var G__82268 = cljs.core.rest(indices);
var G__82269 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__82267;
indices = G__82268;
perm = G__82269;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__81870(s__81871){
return (new cljs.core.LazySeq(null,(function (){
var s__81871__$1 = s__81871;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81871__$1);
if(temp__5753__auto__){
var s__81871__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81871__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81871__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81873 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81872 = (0);
while(true){
if((i__81872 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81872);
cljs.core.chunk_append(b__81873,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81874 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81874) : f.call(null,G__81874));
})(),i));

var G__82275 = (i__81872 + (1));
i__81872 = G__82275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81873),clojure$math$combinatorics$nth_permutation_$_iter__81870(cljs.core.chunk_rest(s__81871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81873),null);
}
} else {
var i = cljs.core.first(s__81871__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81875 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81875) : f.call(null,G__81875));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__81870(cljs.core.rest(s__81871__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__81876(s__81877){
return (new cljs.core.LazySeq(null,(function (){
var s__81877__$1 = s__81877;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81877__$1);
if(temp__5753__auto__){
var s__81877__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81877__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81877__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81879 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81878 = (0);
while(true){
if((i__81878 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81878);
cljs.core.chunk_append(b__81879,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81880 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81880) : f.call(null,G__81880));
})(),i));

var G__82280 = (i__81878 + (1));
i__81878 = G__82280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81879),clojure$math$combinatorics$drop_permutations_$_iter__81876(cljs.core.chunk_rest(s__81877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81879),null);
}
} else {
var i = cljs.core.first(s__81877__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81884 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81884) : f.call(null,G__81884));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__81876(cljs.core.rest(s__81877__$2)));
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
var G__82281 = n;
var G__82282 = (n - k);
n = G__82281;
k = G__82282;
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
var G__81885 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__81886 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__81885,G__81886) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__81885,G__81886));

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
var count_combinations_from_frequencies_orig_val__81887 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__81888 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__81888);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__81887);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__82286 = n__$1;
var G__82287 = y;
var G__82288 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__82286;
y = G__82287;
z = G__82288;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__82289 = n__$1;
var G__82290 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__82291 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__82289;
y = G__82290;
z = G__82291;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__81889(s__81890){
return (new cljs.core.LazySeq(null,(function (){
var s__81890__$1 = s__81890;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81890__$1);
if(temp__5753__auto__){
var s__81890__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81890__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81890__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81892 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81891 = (0);
while(true){
if((i__81891 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81891);
cljs.core.chunk_append(b__81892,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__82292 = (i__81891 + (1));
i__81891 = G__82292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81892),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__81889(cljs.core.chunk_rest(s__81890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81892),null);
}
} else {
var i = cljs.core.first(s__81890__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__81889(cljs.core.rest(s__81890__$2)));
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
var count_combinations_from_frequencies_orig_val__81896 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__81897 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__81897);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__81896);
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
var G__82293 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__82294 = cljs.core.rest(items__$1);
var G__82295 = (t__$1 - (1));
var G__82296 = n__$1;
comb = G__82293;
items__$1 = G__82294;
t__$1 = G__82295;
n__$1 = G__82296;
continue;
} else {
var G__82297 = comb;
var G__82298 = cljs.core.rest(items__$1);
var G__82299 = t__$1;
var G__82300 = (n__$1 - dc_dt);
comb = G__82297;
items__$1 = G__82298;
t__$1 = G__82299;
n__$1 = G__82300;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__81919(s__81920){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__81920__$1 = s__81920;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81920__$1);
if(temp__5753__auto__){
var s__81920__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81920__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81920__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81922 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81921 = (0);
while(true){
if((i__81921 < size__4651__auto__)){
var vec__81923 = cljs.core._nth(c__4650__auto__,i__81921);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81923,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81923,(1),null);
cljs.core.chunk_append(b__81922,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__82301 = (i__81921 + (1));
i__81921 = G__82301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81922),clojure$math$combinatorics$nth_combination_freqs_$_iter__81919(cljs.core.chunk_rest(s__81920__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81922),null);
}
} else {
var vec__81926 = cljs.core.first(s__81920__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81926,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81926,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__81919(cljs.core.rest(s__81920__$2)));
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
var G__82302 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__82303 = remove_one_key;
var G__82304 = (t__$1 - (1));
var G__82305 = n__$1;
comb = G__82302;
freqs__$1 = G__82303;
t__$1 = G__82304;
n__$1 = G__82305;
continue;
} else {
var G__82306 = comb;
var G__82307 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__82308 = t__$1;
var G__82309 = (n__$1 - dc_dt);
comb = G__82306;
freqs__$1 = G__82307;
t__$1 = G__82308;
n__$1 = G__82309;
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
var count_combinations_from_frequencies_orig_val__81929 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__81930 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__81930);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__81931(s__81932){
return (new cljs.core.LazySeq(null,(function (){
var s__81932__$1 = s__81932;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81932__$1);
if(temp__5753__auto__){
var s__81932__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81932__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81932__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81934 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81933 = (0);
while(true){
if((i__81933 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81933);
cljs.core.chunk_append(b__81934,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81936 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81936) : f.call(null,G__81936));
})(),i));

var G__82315 = (i__81933 + (1));
i__81933 = G__82315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81934),clojure$math$combinatorics$nth_combination_$_iter__81931(cljs.core.chunk_rest(s__81932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81934),null);
}
} else {
var i = cljs.core.first(s__81932__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__81937 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__81937) : f.call(null,G__81937));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__81931(cljs.core.rest(s__81932__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__81929);
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
var G__82319 = (size + (1));
var G__82320 = (n__$1 - num_combinations);
size = G__82319;
n__$1 = G__82320;
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
var G__82321 = cljs.core.rest(l__$1);
var G__82322 = (n + (1));
l__$1 = G__82321;
n = G__82322;
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
var G__82327 = cljs.core.rest(l__$1);
var G__82328 = (function (){var G__81942 = index;
var G__81943 = (function (){var G__81944 = clojure.math.combinatorics.factorial(n);
var G__81945 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__81944,G__81945) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__81944,G__81945));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__81942,G__81943) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__81942,G__81943));
})();
var G__82329 = (n - (1));
l__$1 = G__82327;
index = G__82328;
n = G__82329;
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
var G__82330 = cljs.core.rest(l__$1);
var G__82331 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4652__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__81951(s__81952){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__81952__$1 = s__81952;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81952__$1);
if(temp__5753__auto__){
var s__81952__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81952__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81952__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81954 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81953 = (0);
while(true){
if((i__81953 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__81953);
cljs.core.chunk_append(b__81954,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__82333 = (i__81953 + (1));
i__81953 = G__82333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81954),clojure$math$combinatorics$permutation_index_duplicates_$_iter__81951(cljs.core.chunk_rest(s__81952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81954),null);
}
} else {
var k = cljs.core.first(s__81952__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__81951(cljs.core.rest(s__81952__$2)));
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
return (function (p1__81946_SHARP_){
return (cljs.core.compare(p1__81946_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4652__auto__))
,cljs.core.keys(freqs)));
})());
var G__82332 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__82330;
index = G__82331;
freqs = G__82332;
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
return cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$init_$_iter__81961(s__81962){
return (new cljs.core.LazySeq(null,(function (){
var s__81962__$1 = s__81962;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81962__$1);
if(temp__5753__auto__){
var s__81962__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81962__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81962__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81964 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81963 = (0);
while(true){
if((i__81963 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__81963);
cljs.core.chunk_append(b__81964,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());

var G__82339 = (i__81963 + (1));
i__81963 = G__82339;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81964),clojure$math$combinatorics$init_$_iter__81961(cljs.core.chunk_rest(s__81962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81964),null);
}
} else {
var i = cljs.core.first(s__81962__$2);
return cljs.core.cons((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),clojure$math$combinatorics$init_$_iter__81961(cljs.core.rest(s__81962__$2)));
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
var G__81966 = arguments.length;
switch (G__81966) {
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
var G__82344 = (j - (1));
j = G__82344;
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
var vec__81967 = (function (){var a__$2 = a__$1;
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
var G__82346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__82347 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__82348 = (i + (1));
var G__82349 = (function (){var x__4336__auto__ = current_max;
var y__4337__auto__ = (new_a_i + (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
a__$2 = G__82346;
b__$1 = G__82347;
i = G__82348;
current_max = G__82349;
continue;
} else {
var G__82351 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__82352 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__82353 = (i + (1));
var G__82354 = current_max;
a__$2 = G__82351;
b__$1 = G__82352;
i = G__82353;
current_max = G__82354;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81967,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81967,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82359 = arguments.length;
var i__4865__auto___82360 = (0);
while(true){
if((i__4865__auto___82360 < len__4864__auto___82359)){
args__4870__auto__.push((arguments[i__4865__auto___82360]));

var G__82361 = (i__4865__auto___82360 + (1));
i__4865__auto___82360 = G__82361;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__81972){
var map__81973 = p__81972;
var map__81973__$1 = cljs.core.__destructure_map(map__81973);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81973__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81973__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__81976(s__81977){
return (new cljs.core.LazySeq(null,(function (){
var s__81977__$1 = s__81977;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81977__$1);
if(temp__5753__auto__){
var s__81977__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81977__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81977__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81979 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81978 = (0);
while(true){
if((i__81978 < size__4651__auto__)){
var growth_string = cljs.core._nth(c__4650__auto__,i__81978);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__81979,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__82364 = (i__81978 + (1));
i__81978 = G__82364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81979),clojure$math$combinatorics$iter__81976(cljs.core.chunk_rest(s__81977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81979),null);
}
} else {
var growth_string = cljs.core.first(s__81977__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__81976(cljs.core.rest(s__81977__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq81970){
var G__81971 = cljs.core.first(seq81970);
var seq81970__$1 = cljs.core.next(seq81970);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81971,seq81970__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82365 = arguments.length;
var i__4865__auto___82366 = (0);
while(true){
if((i__4865__auto___82366 < len__4864__auto___82365)){
args__4870__auto__.push((arguments[i__4865__auto___82366]));

var G__82367 = (i__4865__auto___82366 + (1));
i__4865__auto___82366 = G__82367;
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__81982(s__81983){
return (new cljs.core.LazySeq(null,(function (){
var s__81983__$1 = s__81983;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81983__$1);
if(temp__5753__auto__){
var s__81983__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81983__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81983__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81985 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81984 = (0);
while(true){
if((i__81984 < size__4651__auto__)){
var parts = cljs.core._nth(c__4650__auto__,i__81984);
cljs.core.chunk_append(b__81985,(function (){var iter__4652__auto__ = ((function (i__81984,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__81982_$_iter__81988(s__81989){
return (new cljs.core.LazySeq(null,((function (i__81984,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__81989__$1 = s__81989;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81989__$1);
if(temp__5753__auto____$1){
var s__81989__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81989__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__81989__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__81991 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__81990 = (0);
while(true){
if((i__81990 < size__4651__auto____$1)){
var part = cljs.core._nth(c__4650__auto____$1,i__81990);
cljs.core.chunk_append(b__81991,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__81990,i__81984,part,c__4650__auto____$1,size__4651__auto____$1,b__81991,s__81989__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__81990,i__81984,part,c__4650__auto____$1,size__4651__auto____$1,b__81991,s__81989__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__82368 = (i__81990 + (1));
i__81990 = G__82368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81991),clojure$math$combinatorics$iter__81982_$_iter__81988(cljs.core.chunk_rest(s__81989__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81991),null);
}
} else {
var part = cljs.core.first(s__81989__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__81984,part,s__81989__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__81984,part,s__81989__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__81982_$_iter__81988(cljs.core.rest(s__81989__$2)));
}
} else {
return null;
}
break;
}
});})(i__81984,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__81984,parts,c__4650__auto__,size__4651__auto__,b__81985,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})());

var G__82370 = (i__81984 + (1));
i__81984 = G__82370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81985),clojure$math$combinatorics$iter__81982(cljs.core.chunk_rest(s__81983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81985),null);
}
} else {
var parts = cljs.core.first(s__81983__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__81982_$_iter__82001(s__82002){
return (new cljs.core.LazySeq(null,(function (){
var s__82002__$1 = s__82002;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82002__$1);
if(temp__5753__auto____$1){
var s__82002__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82002__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82002__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82004 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82003 = (0);
while(true){
if((i__82003 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__82003);
cljs.core.chunk_append(b__82004,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__82003,part,c__4650__auto__,size__4651__auto__,b__82004,s__82002__$2,temp__5753__auto____$1,parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__82003,part,c__4650__auto__,size__4651__auto__,b__82004,s__82002__$2,temp__5753__auto____$1,parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__82371 = (i__82003 + (1));
i__82003 = G__82371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82004),clojure$math$combinatorics$iter__81982_$_iter__82001(cljs.core.chunk_rest(s__82002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82004),null);
}
} else {
var part = cljs.core.first(s__82002__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__82002__$2,temp__5753__auto____$1,parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__82002__$2,temp__5753__auto____$1,parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__81982_$_iter__82001(cljs.core.rest(s__82002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__81983__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})(),clojure$math$combinatorics$iter__81982(cljs.core.rest(s__81983__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq81980){
var G__81981 = cljs.core.first(seq81980);
var seq81980__$1 = cljs.core.next(seq81980);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81981,seq81980__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__82021 = arguments.length;
switch (G__82021) {
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
var vec__82026 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__82380 = (j + (1));
var G__82381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__82382 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__82037 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__82037) : multiset.call(null,G__82037));
})());
var G__82383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__82039 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__82039) : multiset.call(null,G__82039));
})());
j = G__82380;
c__$1 = G__82381;
u__$1 = G__82382;
v__$1 = G__82383;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82026,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82026,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82026,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__82045 = (function (){var j = a;
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
var G__82384 = (j + (1));
var G__82385 = k;
var G__82386 = true;
var G__82387 = u__$2;
var G__82388 = v__$1;
var G__82389 = c__$1;
j = G__82384;
k = G__82385;
x = G__82386;
u__$1 = G__82387;
v__$1 = G__82388;
c__$1 = G__82389;
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
var G__82390 = j__$1;
var G__82391 = k__$1;
var G__82392 = x__$1;
var G__82393 = u__$2;
var G__82394 = v__$2;
var G__82395 = c__$2;
j = G__82390;
k = G__82391;
x = G__82392;
u__$1 = G__82393;
v__$1 = G__82394;
c__$1 = G__82395;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__82396 = j__$1;
var G__82397 = k__$1;
var G__82398 = x;
var G__82399 = u__$2;
var G__82400 = v__$2;
var G__82401 = c__$2;
j = G__82396;
k = G__82397;
x = G__82398;
u__$1 = G__82399;
v__$1 = G__82400;
c__$1 = G__82401;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82045,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82045,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82045,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82045,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82045,(4),null);
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
var G__82406 = n;
var G__82407 = m;
var G__82408 = f__$1;
var G__82409 = c__$1;
var G__82410 = u__$1;
var G__82411 = v__$1;
var G__82412 = a__$1;
var G__82413 = b__$1;
var G__82414 = l__$1;
var G__82415 = r;
var G__82416 = s;
n = G__82406;
m = G__82407;
f = G__82408;
c = G__82409;
u = G__82410;
v = G__82411;
a = G__82412;
b = G__82413;
l = G__82414;
r = G__82415;
s = G__82416;
continue;
} else {
var part = (function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__82061(s__82062){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__82062__$1 = s__82062;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82062__$1);
if(temp__5753__auto__){
var s__82062__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82062__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82062__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82064 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82063 = (0);
while(true){
if((i__82063 < size__4651__auto__)){
var y = cljs.core._nth(c__4650__auto__,i__82063);
cljs.core.chunk_append(b__82064,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__82070 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__82070) : f.call(null,G__82070));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__82063,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__82064,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__82061_$_iter__82072(s__82073){
return (new cljs.core.LazySeq(null,((function (i__82063,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__82064,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__82073__$1 = s__82073;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82073__$1);
if(temp__5753__auto____$1){
var s__82073__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82073__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__82073__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__82075 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__82074 = (0);
while(true){
if((i__82074 < size__4651__auto____$1)){
var z = cljs.core._nth(c__4650__auto____$1,i__82074);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__82075,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__82422 = (i__82074 + (1));
i__82074 = G__82422;
continue;
} else {
var G__82423 = (i__82074 + (1));
i__82074 = G__82423;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82075),clojure$math$combinatorics$iter__82061_$_iter__82072(cljs.core.chunk_rest(s__82073__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82075),null);
}
} else {
var z = cljs.core.first(s__82073__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__82061_$_iter__82072(cljs.core.rest(s__82073__$2)));
} else {
var G__82426 = cljs.core.rest(s__82073__$2);
s__82073__$1 = G__82426;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__82063,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__82064,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__82063,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__82064,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__82429 = (i__82063 + (1));
i__82063 = G__82429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82064),clojure$math$combinatorics$iter__82061(cljs.core.chunk_rest(s__82062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82064),null);
}
} else {
var y = cljs.core.first(s__82062__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__82078 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__82078) : f.call(null,G__82078));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__82061_$_iter__82079(s__82080){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__82080__$1 = s__82080;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82080__$1);
if(temp__5753__auto____$1){
var s__82080__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82080__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82080__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82082 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82081 = (0);
while(true){
if((i__82081 < size__4651__auto__)){
var z = cljs.core._nth(c__4650__auto__,i__82081);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__82082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__82435 = (i__82081 + (1));
i__82081 = G__82435;
continue;
} else {
var G__82436 = (i__82081 + (1));
i__82081 = G__82436;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82082),clojure$math$combinatorics$iter__82061_$_iter__82079(cljs.core.chunk_rest(s__82080__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82082),null);
}
} else {
var z = cljs.core.first(s__82080__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__82061_$_iter__82079(cljs.core.rest(s__82080__$2)));
} else {
var G__82437 = cljs.core.rest(s__82080__$2);
s__82080__$1 = G__82437;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__82062__$2,temp__5753__auto__,vec__82045,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__82061(cljs.core.rest(s__82062__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__82045,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__82045,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__82045,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__82045,u__$1,v__$1,c__$1,j,k))
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
var G__82441 = (j - (1));
j = G__82441;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$m5_$_iter__82091(s__82092){
return (new cljs.core.LazySeq(null,(function (){
var s__82092__$1 = s__82092;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82092__$1);
if(temp__5753__auto__){
var s__82092__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82092__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82092__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82094 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82093 = (0);
while(true){
if((i__82093 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__82093);
cljs.core.chunk_append(b__82094,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__82445 = (i__82093 + (1));
i__82093 = G__82445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82094),clojure$math$combinatorics$m5_$_iter__82091(cljs.core.chunk_rest(s__82092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82094),null);
}
} else {
var i = cljs.core.first(s__82092__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__82091(cljs.core.rest(s__82092__$2)));
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
var G__82446 = cljs.core.rest(ks);
var G__82447 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__82446;
v__$2 = G__82447;
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
var G__82448 = (k_1 - (1));
var G__82449 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__82450 = (amount - vk);
k_1 = G__82448;
v__$3 = G__82449;
amount = G__82450;
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
var len__4864__auto___82455 = arguments.length;
var i__4865__auto___82456 = (0);
while(true){
if((i__4865__auto___82456 < len__4864__auto___82455)){
args__4870__auto__.push((arguments[i__4865__auto___82456]));

var G__82457 = (i__4865__auto___82456 + (1));
i__4865__auto___82456 = G__82457;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__82108){
var map__82109 = p__82108;
var map__82109__$1 = cljs.core.__destructure_map(map__82109);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82109__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82109__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$iter__82117(s__82118){
return (new cljs.core.LazySeq(null,(function (){
var s__82118__$1 = s__82118;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82118__$1);
if(temp__5753__auto__){
var s__82118__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82118__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82118__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82120 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82119 = (0);
while(true){
if((i__82119 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__82119);
var j = (i + (1));
cljs.core.chunk_append(b__82120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__82122 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__82122) : freqs.call(null,G__82122));
})()], null));

var G__82459 = (i__82119 + (1));
i__82119 = G__82459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82120),clojure$math$combinatorics$iter__82117(cljs.core.chunk_rest(s__82118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82120),null);
}
} else {
var i = cljs.core.first(s__82118__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__82124 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__82124) : freqs.call(null,G__82124));
})()], null),clojure$math$combinatorics$iter__82117(cljs.core.rest(s__82118__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__82126(s__82127){
return (new cljs.core.LazySeq(null,(function (){
var s__82127__$1 = s__82127;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__82127__$1);
if(temp__5753__auto__){
var s__82127__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82127__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82127__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82129 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82128 = (0);
while(true){
if((i__82128 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__82128);
cljs.core.chunk_append(b__82129,(function (){var iter__4652__auto__ = ((function (i__82128,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function clojure$math$combinatorics$iter__82126_$_iter__82130(s__82131){
return (new cljs.core.LazySeq(null,((function (i__82128,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function (){
var s__82131__$1 = s__82131;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82131__$1);
if(temp__5753__auto____$1){
var s__82131__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82131__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__82131__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__82133 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__82132 = (0);
while(true){
if((i__82132 < size__4651__auto____$1)){
var multiset = cljs.core._nth(c__4650__auto____$1,i__82132);
cljs.core.chunk_append(b__82133,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__82132,i__82128,multiset,c__4650__auto____$1,size__4651__auto____$1,b__82133,s__82131__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function (p__82138){
var vec__82141 = p__82138;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82141,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82141,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__82147 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__82147) : ditems.call(null,G__82147));
})());
});})(i__82132,i__82128,multiset,c__4650__auto____$1,size__4651__auto____$1,b__82133,s__82131__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
,multiset)));

var G__82462 = (i__82132 + (1));
i__82132 = G__82462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82133),clojure$math$combinatorics$iter__82126_$_iter__82130(cljs.core.chunk_rest(s__82131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82133),null);
}
} else {
var multiset = cljs.core.first(s__82131__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__82128,multiset,s__82131__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function (p__82151){
var vec__82152 = p__82151;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82152,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82152,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__82158 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__82158) : ditems.call(null,G__82158));
})());
});})(i__82128,multiset,s__82131__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__82126_$_iter__82130(cljs.core.rest(s__82131__$2)));
}
} else {
return null;
}
break;
}
});})(i__82128,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
,null,null));
});})(i__82128,part,c__4650__auto__,size__4651__auto__,b__82129,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
;
return iter__4652__auto__(part);
})());

var G__82464 = (i__82128 + (1));
i__82128 = G__82464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82129),clojure$math$combinatorics$iter__82126(cljs.core.chunk_rest(s__82127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82129),null);
}
} else {
var part = cljs.core.first(s__82127__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function clojure$math$combinatorics$iter__82126_$_iter__82161(s__82162){
return (new cljs.core.LazySeq(null,(function (){
var s__82162__$1 = s__82162;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__82162__$1);
if(temp__5753__auto____$1){
var s__82162__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82162__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__82162__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__82164 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__82163 = (0);
while(true){
if((i__82163 < size__4651__auto__)){
var multiset = cljs.core._nth(c__4650__auto__,i__82163);
cljs.core.chunk_append(b__82164,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__82163,multiset,c__4650__auto__,size__4651__auto__,b__82164,s__82162__$2,temp__5753__auto____$1,part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function (p__82166){
var vec__82167 = p__82166;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82167,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82167,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__82170 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__82170) : ditems.call(null,G__82170));
})());
});})(i__82163,multiset,c__4650__auto__,size__4651__auto__,b__82164,s__82162__$2,temp__5753__auto____$1,part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
,multiset)));

var G__82465 = (i__82163 + (1));
i__82163 = G__82465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82164),clojure$math$combinatorics$iter__82126_$_iter__82161(cljs.core.chunk_rest(s__82162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82164),null);
}
} else {
var multiset = cljs.core.first(s__82162__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__82162__$2,temp__5753__auto____$1,part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to){
return (function (p__82171){
var vec__82172 = p__82171;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82172,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82172,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__82175 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__82175) : ditems.call(null,G__82175));
})());
});})(multiset,s__82162__$2,temp__5753__auto____$1,part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__82126_$_iter__82161(cljs.core.rest(s__82162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__82127__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__82109,map__82109__$1,from,to))
;
return iter__4652__auto__(part);
})(),clojure$math$combinatorics$iter__82126(cljs.core.rest(s__82127__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq82101){
var G__82102 = cljs.core.first(seq82101);
var seq82101__$1 = cljs.core.next(seq82101);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82102,seq82101__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4870__auto__ = [];
var len__4864__auto___82467 = arguments.length;
var i__4865__auto___82468 = (0);
while(true){
if((i__4865__auto___82468 < len__4864__auto___82467)){
args__4870__auto__.push((arguments[i__4865__auto___82468]));

var G__82469 = (i__4865__auto___82468 + (1));
i__4865__auto___82468 = G__82469;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq82188){
var G__82189 = cljs.core.first(seq82188);
var seq82188__$1 = cljs.core.next(seq82188);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82189,seq82188__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
