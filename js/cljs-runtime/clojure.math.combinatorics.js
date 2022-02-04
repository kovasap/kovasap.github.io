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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__42526 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__42526) : clojure.math.combinatorics.join.call(null,G__42526));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__42536(s__42537){
return (new cljs.core.LazySeq(null,(function (){
var s__42537__$1 = s__42537;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42537__$1);
if(temp__5753__auto__){
var s__42537__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42537__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42537__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42539 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42538 = (0);
while(true){
if((i__42538 < size__4651__auto__)){
var j = cljs.core._nth(c__4650__auto__,i__42538);
cljs.core.chunk_append(b__42539,((j + cnt) + (- (n + (1)))));

var G__43242 = (i__42538 + (1));
i__42538 = G__43242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42539),clojure$math$combinatorics$index_combinations_$_iter__42536(cljs.core.chunk_rest(s__42537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42539),null);
}
} else {
var j = cljs.core.first(s__42537__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__42536(cljs.core.rest(s__42537__$2)));
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
var G__43244 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__43245 = (j__$1 - (1));
c__$3 = G__43244;
j__$1 = G__43245;
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
var G__43248 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__43249 = (index__$1 + (1));
var G__43250 = (already_distributed__$1 + mi);
distribution__$1 = G__43248;
index__$1 = G__43249;
already_distributed__$1 = G__43250;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__42572 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42572,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42572,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42572,(2),null);
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
var vec__42582 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42582,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42582,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42582,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__43252 = distribution__$2;
distribution__$1 = G__43252;
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
var m = cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__42598(s__42599){
return (new cljs.core.LazySeq(null,(function (){
var s__42599__$1 = s__42599;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42599__$1);
if(temp__5753__auto__){
var s__42599__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42599__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42599__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42601 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42600 = (0);
while(true){
if((i__42600 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__42600);
cljs.core.chunk_append(b__42601,(function (){var G__42608 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42608) : f.call(null,G__42608));
})());

var G__43256 = (i__42600 + (1));
i__42600 = G__43256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42601),clojure$math$combinatorics$multi_comb_$_iter__42598(cljs.core.chunk_rest(s__42599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42601),null);
}
} else {
var i = cljs.core.first(s__42599__$2);
return cljs.core.cons((function (){var G__42609 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42609) : f.call(null,G__42609));
})(),clojure$math$combinatorics$multi_comb_$_iter__42598(cljs.core.rest(s__42599__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__42610(s__42611){
return (new cljs.core.LazySeq(null,(function (){
var s__42611__$1 = s__42611;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42611__$1);
if(temp__5753__auto__){
var s__42611__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42611__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42611__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42613 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42612 = (0);
while(true){
if((i__42612 < size__4651__auto__)){
var q = cljs.core._nth(c__4650__auto__,i__42612);
cljs.core.chunk_append(b__42613,clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (i__42612,q,c__4650__auto__,size__4651__auto__,b__42613,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42616(s__42617){
return (new cljs.core.LazySeq(null,((function (i__42612,q,c__4650__auto__,size__4651__auto__,b__42613,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function (){
var s__42617__$1 = s__42617;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42617__$1);
if(temp__5753__auto____$1){
var s__42617__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42617__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__42617__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__42619 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__42618 = (0);
while(true){
if((i__42618 < size__4651__auto____$1)){
var vec__42620 = cljs.core._nth(c__4650__auto____$1,i__42618);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42620,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42620,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42620,(2),null);
cljs.core.chunk_append(b__42619,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__43257 = (i__42618 + (1));
i__42618 = G__43257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42619),clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42616(cljs.core.chunk_rest(s__42617__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42619),null);
}
} else {
var vec__42623 = cljs.core.first(s__42617__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42623,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42623,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42623,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42616(cljs.core.rest(s__42617__$2)));
}
} else {
return null;
}
break;
}
});})(i__42612,q,c__4650__auto__,size__4651__auto__,b__42613,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs))
,null,null));
});})(i__42612,q,c__4650__auto__,size__4651__auto__,b__42613,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()));

var G__43258 = (i__42612 + (1));
i__42612 = G__43258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42613),clojure$math$combinatorics$multi_comb_$_iter__42610(cljs.core.chunk_rest(s__42611__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42613),null);
}
} else {
var q = cljs.core.first(s__42611__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4652__auto__ = ((function (q,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42634(s__42635){
return (new cljs.core.LazySeq(null,(function (){
var s__42635__$1 = s__42635;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__42635__$1);
if(temp__5753__auto____$1){
var s__42635__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42635__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42635__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42637 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42636 = (0);
while(true){
if((i__42636 < size__4651__auto__)){
var vec__42638 = cljs.core._nth(c__4650__auto__,i__42636);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42638,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42638,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42638,(2),null);
cljs.core.chunk_append(b__42637,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__43259 = (i__42636 + (1));
i__42636 = G__43259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42637),clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42634(cljs.core.chunk_rest(s__42635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42637),null);
}
} else {
var vec__42651 = cljs.core.first(s__42635__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42651,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42651,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42651,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__42610_$_iter__42634(cljs.core.rest(s__42635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__42611__$2,temp__5753__auto__,f,v,domain,m,qs))
;
return iter__4652__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__42610(cljs.core.rest(s__42611__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$combinations_$_iter__42666(s__42667){
return (new cljs.core.LazySeq(null,(function (){
var s__42667__$1 = s__42667;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42667__$1);
if(temp__5753__auto__){
var s__42667__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42667__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42667__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42669 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42668 = (0);
while(true){
if((i__42668 < size__4651__auto__)){
var item = cljs.core._nth(c__4650__auto__,i__42668);
cljs.core.chunk_append(b__42669,(new cljs.core.List(null,item,null,(1),null)));

var G__43261 = (i__42668 + (1));
i__42668 = G__43261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42669),clojure$math$combinatorics$combinations_$_iter__42666(cljs.core.chunk_rest(s__42667__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42669),null);
}
} else {
var item = cljs.core.first(s__42667__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__42666(cljs.core.rest(s__42667__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42659_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__42659_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__42681 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__42681) : clojure.math.combinatorics.unchunk.call(null,G__42681));
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
var len__4864__auto___43263 = arguments.length;
var i__4865__auto___43264 = (0);
while(true){
if((i__4865__auto___43264 < len__4864__auto___43263)){
args__4870__auto__.push((arguments[i__4865__auto___43264]));

var G__43265 = (i__4865__auto___43264 + (1));
i__4865__auto___43264 = G__43265;
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
var G__43266 = (i - (1));
var G__43267 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__43266;
v_seqs__$2 = G__43267;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq42689){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42689));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__42700 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__42700) : v.call(null,G__42700));
})())){
return i;
} else {
var G__43269 = (i - (1));
i = G__43269;
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
var G__43270 = (i - (1));
i = G__43270;
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
var G__43271 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__43272 = (k + (1));
var G__43273 = (l__$1 - (1));
v__$1 = G__43271;
k = G__43272;
l__$1 = G__43273;
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
var G__42702 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__42702) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__42702));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__42706(s__42707){
return (new cljs.core.LazySeq(null,(function (){
var s__42707__$1 = s__42707;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42707__$1);
if(temp__5753__auto__){
var s__42707__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42707__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42707__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42709 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42708 = (0);
while(true){
if((i__42708 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__42708);
cljs.core.chunk_append(b__42709,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42710 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42710) : f.call(null,G__42710));
})(),i));

var G__43275 = (i__42708 + (1));
i__42708 = G__43275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42709),clojure$math$combinatorics$multi_perm_$_iter__42706(cljs.core.chunk_rest(s__42707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42709),null);
}
} else {
var i = cljs.core.first(s__42707__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42711 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42711) : f.call(null,G__42711));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__42706(cljs.core.rest(s__42707__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42713_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__42713_SHARP_);
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
var G__43280 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__43281 = (n__$1 - (1));
acc = G__43280;
n__$1 = G__43281;
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
var G__43282 = q;
var G__43283 = cljs.core.cons(r,digits);
var G__43284 = (divisor + (1));
n__$1 = G__43282;
digits = G__43283;
divisor = G__43284;
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
var G__43285 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__43286 = cljs.core.rest(l__$1);
var G__43287 = (n__$1 - (1));
acc = G__43285;
l__$1 = G__43286;
n__$1 = G__43287;
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
var G__43288 = cljs.core.rest(indices);
var G__43289 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__43290 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__43288;
l__$1 = G__43289;
perm = G__43290;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__42744(s__42745){
return (new cljs.core.LazySeq(null,(function (){
var s__42745__$1 = s__42745;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42745__$1);
if(temp__5753__auto__){
var s__42745__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42745__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42745__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42747 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42746 = (0);
while(true){
if((i__42746 < size__4651__auto__)){
var vec__42758 = cljs.core._nth(c__4650__auto__,i__42746);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42758,(1),null);
cljs.core.chunk_append(b__42747,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__43292 = (i__42746 + (1));
i__42746 = G__43292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42747),clojure$math$combinatorics$initial_perm_numbers_$_iter__42744(cljs.core.chunk_rest(s__42745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42747),null);
}
} else {
var vec__42791 = cljs.core.first(s__42745__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42791,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42791,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__42744(cljs.core.rest(s__42745__$2)));
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
var G__43293 = cljs.core.rest(perm_numbers__$1);
var G__43294 = (index + (1));
perm_numbers__$1 = G__43293;
index = G__43294;
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
var vec__42861 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(1),null);
var G__43295 = remainder;
var G__43296 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__43297 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__43295;
digits = G__43296;
freqs__$1 = G__43297;
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
var G__43298 = clojure.math.combinatorics.dec_key(freqs,item);
var G__43299 = cljs.core.rest(indices);
var G__43300 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__43298;
indices = G__43299;
perm = G__43300;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__42903(s__42904){
return (new cljs.core.LazySeq(null,(function (){
var s__42904__$1 = s__42904;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42904__$1);
if(temp__5753__auto__){
var s__42904__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42904__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42904__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42906 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42905 = (0);
while(true){
if((i__42905 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__42905);
cljs.core.chunk_append(b__42906,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42918 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42918) : f.call(null,G__42918));
})(),i));

var G__43301 = (i__42905 + (1));
i__42905 = G__43301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42906),clojure$math$combinatorics$nth_permutation_$_iter__42903(cljs.core.chunk_rest(s__42904__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42906),null);
}
} else {
var i = cljs.core.first(s__42904__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42924 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42924) : f.call(null,G__42924));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__42903(cljs.core.rest(s__42904__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__42932(s__42933){
return (new cljs.core.LazySeq(null,(function (){
var s__42933__$1 = s__42933;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42933__$1);
if(temp__5753__auto__){
var s__42933__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42933__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42933__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42935 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42934 = (0);
while(true){
if((i__42934 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__42934);
cljs.core.chunk_append(b__42935,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42941 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42941) : f.call(null,G__42941));
})(),i));

var G__43304 = (i__42934 + (1));
i__42934 = G__43304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42935),clojure$math$combinatorics$drop_permutations_$_iter__42932(cljs.core.chunk_rest(s__42933__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42935),null);
}
} else {
var i = cljs.core.first(s__42933__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__42944 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42944) : f.call(null,G__42944));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__42932(cljs.core.rest(s__42933__$2)));
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
var G__43306 = n;
var G__43307 = (n - k);
n = G__43306;
k = G__43307;
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
var G__42951 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,new_freqs,(t - (1)));
var G__42952 = clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs))),t);
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__42951,G__42952) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__42951,G__42952));

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
var count_combinations_from_frequencies_orig_val__42956 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__42957 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__42957);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__42956);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__43311 = n__$1;
var G__43312 = y;
var G__43313 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__43311;
y = G__43312;
z = G__43313;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__43314 = n__$1;
var G__43315 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__43316 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__43314;
y = G__43315;
z = G__43316;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__42963(s__42964){
return (new cljs.core.LazySeq(null,(function (){
var s__42964__$1 = s__42964;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42964__$1);
if(temp__5753__auto__){
var s__42964__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42964__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42964__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__42966 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__42965 = (0);
while(true){
if((i__42965 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__42965);
cljs.core.chunk_append(b__42966,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__43320 = (i__42965 + (1));
i__42965 = G__43320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42966),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__42963(cljs.core.chunk_rest(s__42964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42966),null);
}
} else {
var i = cljs.core.first(s__42964__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__42963(cljs.core.rest(s__42964__$2)));
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
var count_combinations_from_frequencies_orig_val__42968 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__42969 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__42969);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__42968);
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
var G__43323 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__43324 = cljs.core.rest(items__$1);
var G__43325 = (t__$1 - (1));
var G__43326 = n__$1;
comb = G__43323;
items__$1 = G__43324;
t__$1 = G__43325;
n__$1 = G__43326;
continue;
} else {
var G__43327 = comb;
var G__43328 = cljs.core.rest(items__$1);
var G__43329 = t__$1;
var G__43330 = (n__$1 - dc_dt);
comb = G__43327;
items__$1 = G__43328;
t__$1 = G__43329;
n__$1 = G__43330;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__42998(s__42999){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__42999__$1 = s__42999;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__42999__$1);
if(temp__5753__auto__){
var s__42999__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42999__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__42999__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43001 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43000 = (0);
while(true){
if((i__43000 < size__4651__auto__)){
var vec__43005 = cljs.core._nth(c__4650__auto__,i__43000);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43005,(1),null);
cljs.core.chunk_append(b__43001,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__43331 = (i__43000 + (1));
i__43000 = G__43331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43001),clojure$math$combinatorics$nth_combination_freqs_$_iter__42998(cljs.core.chunk_rest(s__42999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43001),null);
}
} else {
var vec__43009 = cljs.core.first(s__42999__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43009,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43009,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__42998(cljs.core.rest(s__42999__$2)));
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
var G__43332 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__43333 = remove_one_key;
var G__43334 = (t__$1 - (1));
var G__43335 = n__$1;
comb = G__43332;
freqs__$1 = G__43333;
t__$1 = G__43334;
n__$1 = G__43335;
continue;
} else {
var G__43336 = comb;
var G__43337 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__43338 = t__$1;
var G__43339 = (n__$1 - dc_dt);
comb = G__43336;
freqs__$1 = G__43337;
t__$1 = G__43338;
n__$1 = G__43339;
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
var count_combinations_from_frequencies_orig_val__43015 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__43016 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__43016);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__43017(s__43018){
return (new cljs.core.LazySeq(null,(function (){
var s__43018__$1 = s__43018;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43018__$1);
if(temp__5753__auto__){
var s__43018__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43018__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43018__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43020 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43019 = (0);
while(true){
if((i__43019 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__43019);
cljs.core.chunk_append(b__43020,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__43029 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43029) : f.call(null,G__43029));
})(),i));

var G__43341 = (i__43019 + (1));
i__43019 = G__43341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43020),clojure$math$combinatorics$nth_combination_$_iter__43017(cljs.core.chunk_rest(s__43018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43020),null);
}
} else {
var i = cljs.core.first(s__43018__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__43030 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43030) : f.call(null,G__43030));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__43017(cljs.core.rest(s__43018__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__43015);
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
var G__43344 = (size + (1));
var G__43345 = (n__$1 - num_combinations);
size = G__43344;
n__$1 = G__43345;
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
var G__43347 = cljs.core.rest(l__$1);
var G__43348 = (n + (1));
l__$1 = G__43347;
n = G__43348;
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
var G__43349 = cljs.core.rest(l__$1);
var G__43350 = (function (){var G__43043 = index;
var G__43044 = (function (){var G__43045 = clojure.math.combinatorics.factorial(n);
var G__43046 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__43045,G__43046) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__43045,G__43046));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__43043,G__43044) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__43043,G__43044));
})();
var G__43351 = (n - (1));
l__$1 = G__43349;
index = G__43350;
n = G__43351;
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
var G__43352 = cljs.core.rest(l__$1);
var G__43353 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4652__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__43055(s__43056){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__43056__$1 = s__43056;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43056__$1);
if(temp__5753__auto__){
var s__43056__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43056__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43056__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43058 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43057 = (0);
while(true){
if((i__43057 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__43057);
cljs.core.chunk_append(b__43058,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__43356 = (i__43057 + (1));
i__43057 = G__43356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43058),clojure$math$combinatorics$permutation_index_duplicates_$_iter__43055(cljs.core.chunk_rest(s__43056__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43058),null);
}
} else {
var k = cljs.core.first(s__43056__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__43055(cljs.core.rest(s__43056__$2)));
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
return (function (p1__43048_SHARP_){
return (cljs.core.compare(p1__43048_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4652__auto__))
,cljs.core.keys(freqs)));
})());
var G__43354 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__43352;
index = G__43353;
freqs = G__43354;
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
return cljs.core.vec((function (){var iter__4652__auto__ = (function clojure$math$combinatorics$init_$_iter__43066(s__43067){
return (new cljs.core.LazySeq(null,(function (){
var s__43067__$1 = s__43067;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43067__$1);
if(temp__5753__auto__){
var s__43067__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43067__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43067__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43069 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43068 = (0);
while(true){
if((i__43068 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__43068);
cljs.core.chunk_append(b__43069,(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());

var G__43361 = (i__43068 + (1));
i__43068 = G__43361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43069),clojure$math$combinatorics$init_$_iter__43066(cljs.core.chunk_rest(s__43067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43069),null);
}
} else {
var i = cljs.core.first(s__43067__$2);
return cljs.core.cons((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (i - ((n - s) - (-1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),clojure$math$combinatorics$init_$_iter__43066(cljs.core.rest(s__43067__$2)));
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
var G__43080 = arguments.length;
switch (G__43080) {
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
var G__43367 = (j - (1));
j = G__43367;
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
var vec__43095 = (function (){var a__$2 = a__$1;
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
var G__43373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__43374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__43375 = (i + (1));
var G__43376 = (function (){var x__4336__auto__ = current_max;
var y__4337__auto__ = (new_a_i + (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
a__$2 = G__43373;
b__$1 = G__43374;
i = G__43375;
current_max = G__43376;
continue;
} else {
var G__43377 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__43378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__43379 = (i + (1));
var G__43380 = current_max;
a__$2 = G__43377;
b__$1 = G__43378;
i = G__43379;
current_max = G__43380;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43095,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43095,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43381 = arguments.length;
var i__4865__auto___43382 = (0);
while(true){
if((i__4865__auto___43382 < len__4864__auto___43381)){
args__4870__auto__.push((arguments[i__4865__auto___43382]));

var G__43385 = (i__4865__auto___43382 + (1));
i__4865__auto___43382 = G__43385;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__43105){
var map__43106 = p__43105;
var map__43106__$1 = cljs.core.__destructure_map(map__43106);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43106__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43106__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__43107(s__43108){
return (new cljs.core.LazySeq(null,(function (){
var s__43108__$1 = s__43108;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43108__$1);
if(temp__5753__auto__){
var s__43108__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43108__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43108__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43110 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43109 = (0);
while(true){
if((i__43109 < size__4651__auto__)){
var growth_string = cljs.core._nth(c__4650__auto__,i__43109);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__43110,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__43388 = (i__43109 + (1));
i__43109 = G__43388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43110),clojure$math$combinatorics$iter__43107(cljs.core.chunk_rest(s__43108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43110),null);
}
} else {
var growth_string = cljs.core.first(s__43108__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__43107(cljs.core.rest(s__43108__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq43103){
var G__43104 = cljs.core.first(seq43103);
var seq43103__$1 = cljs.core.next(seq43103);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43104,seq43103__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43392 = arguments.length;
var i__4865__auto___43393 = (0);
while(true){
if((i__4865__auto___43393 < len__4864__auto___43392)){
args__4870__auto__.push((arguments[i__4865__auto___43393]));

var G__43396 = (i__4865__auto___43393 + (1));
i__4865__auto___43393 = G__43396;
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__43114(s__43115){
return (new cljs.core.LazySeq(null,(function (){
var s__43115__$1 = s__43115;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43115__$1);
if(temp__5753__auto__){
var s__43115__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43115__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43115__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43117 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43116 = (0);
while(true){
if((i__43116 < size__4651__auto__)){
var parts = cljs.core._nth(c__4650__auto__,i__43116);
cljs.core.chunk_append(b__43117,(function (){var iter__4652__auto__ = ((function (i__43116,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__43114_$_iter__43122(s__43123){
return (new cljs.core.LazySeq(null,((function (i__43116,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function (){
var s__43123__$1 = s__43123;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43123__$1);
if(temp__5753__auto____$1){
var s__43123__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43123__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__43123__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__43125 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__43124 = (0);
while(true){
if((i__43124 < size__4651__auto____$1)){
var part = cljs.core._nth(c__4650__auto____$1,i__43124);
cljs.core.chunk_append(b__43125,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__43124,i__43116,part,c__4650__auto____$1,size__4651__auto____$1,b__43125,s__43123__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__43124,i__43116,part,c__4650__auto____$1,size__4651__auto____$1,b__43125,s__43123__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__43402 = (i__43124 + (1));
i__43124 = G__43402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43125),clojure$math$combinatorics$iter__43114_$_iter__43122(cljs.core.chunk_rest(s__43123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43125),null);
}
} else {
var part = cljs.core.first(s__43123__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__43116,part,s__43123__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__43116,part,s__43123__$2,temp__5753__auto____$1,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__43114_$_iter__43122(cljs.core.rest(s__43123__$2)));
}
} else {
return null;
}
break;
}
});})(i__43116,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
,null,null));
});})(i__43116,parts,c__4650__auto__,size__4651__auto__,b__43117,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})());

var G__43405 = (i__43116 + (1));
i__43116 = G__43405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43117),clojure$math$combinatorics$iter__43114(cljs.core.chunk_rest(s__43115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43117),null);
}
} else {
var parts = cljs.core.first(s__43115__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__43114_$_iter__43133(s__43134){
return (new cljs.core.LazySeq(null,(function (){
var s__43134__$1 = s__43134;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43134__$1);
if(temp__5753__auto____$1){
var s__43134__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43134__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43134__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43136 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43135 = (0);
while(true){
if((i__43135 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__43135);
cljs.core.chunk_append(b__43136,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__43135,part,c__4650__auto__,size__4651__auto__,b__43136,s__43134__$2,temp__5753__auto____$1,parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__43135,part,c__4650__auto__,size__4651__auto__,b__43136,s__43134__$2,temp__5753__auto____$1,parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__43407 = (i__43135 + (1));
i__43135 = G__43407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43136),clojure$math$combinatorics$iter__43114_$_iter__43133(cljs.core.chunk_rest(s__43134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43136),null);
}
} else {
var part = cljs.core.first(s__43134__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__43134__$2,temp__5753__auto____$1,parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__43134__$2,temp__5753__auto____$1,parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__43114_$_iter__43133(cljs.core.rest(s__43134__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__43115__$2,temp__5753__auto__,items__$1,N,lex))
;
return iter__4652__auto__(parts);
})(),clojure$math$combinatorics$iter__43114(cljs.core.rest(s__43115__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq43112){
var G__43113 = cljs.core.first(seq43112);
var seq43112__$1 = cljs.core.next(seq43112);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43113,seq43112__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__43140 = arguments.length;
switch (G__43140) {
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
var vec__43141 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__43413 = (j + (1));
var G__43414 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__43415 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__43146 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__43146) : multiset.call(null,G__43146));
})());
var G__43416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__43147 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__43147) : multiset.call(null,G__43147));
})());
j = G__43413;
c__$1 = G__43414;
u__$1 = G__43415;
v__$1 = G__43416;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43141,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__43148 = (function (){var j = a;
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
var G__43417 = (j + (1));
var G__43418 = k;
var G__43419 = true;
var G__43420 = u__$2;
var G__43421 = v__$1;
var G__43422 = c__$1;
j = G__43417;
k = G__43418;
x = G__43419;
u__$1 = G__43420;
v__$1 = G__43421;
c__$1 = G__43422;
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
var G__43427 = j__$1;
var G__43428 = k__$1;
var G__43429 = x__$1;
var G__43430 = u__$2;
var G__43431 = v__$2;
var G__43432 = c__$2;
j = G__43427;
k = G__43428;
x = G__43429;
u__$1 = G__43430;
v__$1 = G__43431;
c__$1 = G__43432;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__43433 = j__$1;
var G__43434 = k__$1;
var G__43435 = x;
var G__43436 = u__$2;
var G__43437 = v__$2;
var G__43438 = c__$2;
j = G__43433;
k = G__43434;
x = G__43435;
u__$1 = G__43436;
v__$1 = G__43437;
c__$1 = G__43438;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(4),null);
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
var G__43444 = n;
var G__43445 = m;
var G__43446 = f__$1;
var G__43447 = c__$1;
var G__43448 = u__$1;
var G__43449 = v__$1;
var G__43450 = a__$1;
var G__43451 = b__$1;
var G__43452 = l__$1;
var G__43453 = r;
var G__43454 = s;
n = G__43444;
m = G__43445;
f = G__43446;
c = G__43447;
u = G__43448;
v = G__43449;
a = G__43450;
b = G__43451;
l = G__43452;
r = G__43453;
s = G__43454;
continue;
} else {
var part = (function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43151(s__43152){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43152__$1 = s__43152;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43152__$1);
if(temp__5753__auto__){
var s__43152__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43152__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43152__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43154 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43153 = (0);
while(true){
if((i__43153 < size__4651__auto__)){
var y = cljs.core._nth(c__4650__auto__,i__43153);
cljs.core.chunk_append(b__43154,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__43155 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43155) : f.call(null,G__43155));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__43153,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__43154,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43151_$_iter__43156(s__43157){
return (new cljs.core.LazySeq(null,((function (i__43153,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__43154,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43157__$1 = s__43157;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43157__$1);
if(temp__5753__auto____$1){
var s__43157__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43157__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__43157__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__43159 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__43158 = (0);
while(true){
if((i__43158 < size__4651__auto____$1)){
var z = cljs.core._nth(c__4650__auto____$1,i__43158);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__43159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__43455 = (i__43158 + (1));
i__43158 = G__43455;
continue;
} else {
var G__43456 = (i__43158 + (1));
i__43158 = G__43456;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43159),clojure$math$combinatorics$iter__43151_$_iter__43156(cljs.core.chunk_rest(s__43157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43159),null);
}
} else {
var z = cljs.core.first(s__43157__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__43151_$_iter__43156(cljs.core.rest(s__43157__$2)));
} else {
var G__43457 = cljs.core.rest(s__43157__$2);
s__43157__$1 = G__43457;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__43153,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__43154,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__43153,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4650__auto__,size__4651__auto__,b__43154,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__43458 = (i__43153 + (1));
i__43153 = G__43458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43154),clojure$math$combinatorics$iter__43151(cljs.core.chunk_rest(s__43152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43154),null);
}
} else {
var y = cljs.core.first(s__43152__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__43160 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43160) : f.call(null,G__43160));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__43151_$_iter__43161(s__43162){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__43162__$1 = s__43162;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43162__$1);
if(temp__5753__auto____$1){
var s__43162__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43162__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43162__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43164 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43163 = (0);
while(true){
if((i__43163 < size__4651__auto__)){
var z = cljs.core._nth(c__4650__auto__,i__43163);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__43164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__43462 = (i__43163 + (1));
i__43163 = G__43462;
continue;
} else {
var G__43463 = (i__43163 + (1));
i__43163 = G__43463;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43164),clojure$math$combinatorics$iter__43151_$_iter__43161(cljs.core.chunk_rest(s__43162__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43164),null);
}
} else {
var z = cljs.core.first(s__43162__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__43151_$_iter__43161(cljs.core.rest(s__43162__$2)));
} else {
var G__43464 = cljs.core.rest(s__43162__$2);
s__43162__$1 = G__43464;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__43152__$2,temp__5753__auto__,vec__43148,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__43151(cljs.core.rest(s__43152__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__43148,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__43148,u__$1,v__$1,c__$1,j,k))
;
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__43148,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__43148,u__$1,v__$1,c__$1,j,k))
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
var G__43466 = (j - (1));
j = G__43466;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$m5_$_iter__43165(s__43166){
return (new cljs.core.LazySeq(null,(function (){
var s__43166__$1 = s__43166;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43166__$1);
if(temp__5753__auto__){
var s__43166__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43166__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43166__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43168 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43167 = (0);
while(true){
if((i__43167 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__43167);
cljs.core.chunk_append(b__43168,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__43470 = (i__43167 + (1));
i__43167 = G__43470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43168),clojure$math$combinatorics$m5_$_iter__43165(cljs.core.chunk_rest(s__43166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43168),null);
}
} else {
var i = cljs.core.first(s__43166__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__43165(cljs.core.rest(s__43166__$2)));
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
var G__43471 = cljs.core.rest(ks);
var G__43472 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__43471;
v__$2 = G__43472;
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
var G__43473 = (k_1 - (1));
var G__43474 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__43475 = (amount - vk);
k_1 = G__43473;
v__$3 = G__43474;
amount = G__43475;
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
var len__4864__auto___43476 = arguments.length;
var i__4865__auto___43477 = (0);
while(true){
if((i__4865__auto___43477 < len__4864__auto___43476)){
args__4870__auto__.push((arguments[i__4865__auto___43477]));

var G__43478 = (i__4865__auto___43477 + (1));
i__4865__auto___43477 = G__43478;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__43173){
var map__43174 = p__43173;
var map__43174__$1 = cljs.core.__destructure_map(map__43174);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43174__$1,new cljs.core.Keyword(null,"min","min",444991522));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43174__$1,new cljs.core.Keyword(null,"max","max",61366548));
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function clojure$math$combinatorics$iter__43176(s__43177){
return (new cljs.core.LazySeq(null,(function (){
var s__43177__$1 = s__43177;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43177__$1);
if(temp__5753__auto__){
var s__43177__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43177__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43177__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43179 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43178 = (0);
while(true){
if((i__43178 < size__4651__auto__)){
var i = cljs.core._nth(c__4650__auto__,i__43178);
var j = (i + (1));
cljs.core.chunk_append(b__43179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__43184 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__43184) : freqs.call(null,G__43184));
})()], null));

var G__43480 = (i__43178 + (1));
i__43178 = G__43480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43179),clojure$math$combinatorics$iter__43176(cljs.core.chunk_rest(s__43177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43179),null);
}
} else {
var i = cljs.core.first(s__43177__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__43185 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__43185) : freqs.call(null,G__43185));
})()], null),clojure$math$combinatorics$iter__43176(cljs.core.rest(s__43177__$2)));
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
var iter__4652__auto__ = (function clojure$math$combinatorics$iter__43186(s__43187){
return (new cljs.core.LazySeq(null,(function (){
var s__43187__$1 = s__43187;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43187__$1);
if(temp__5753__auto__){
var s__43187__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43187__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43187__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43189 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43188 = (0);
while(true){
if((i__43188 < size__4651__auto__)){
var part = cljs.core._nth(c__4650__auto__,i__43188);
cljs.core.chunk_append(b__43189,(function (){var iter__4652__auto__ = ((function (i__43188,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function clojure$math$combinatorics$iter__43186_$_iter__43192(s__43193){
return (new cljs.core.LazySeq(null,((function (i__43188,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function (){
var s__43193__$1 = s__43193;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43193__$1);
if(temp__5753__auto____$1){
var s__43193__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43193__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__43193__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__43195 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__43194 = (0);
while(true){
if((i__43194 < size__4651__auto____$1)){
var multiset = cljs.core._nth(c__4650__auto____$1,i__43194);
cljs.core.chunk_append(b__43195,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__43194,i__43188,multiset,c__4650__auto____$1,size__4651__auto____$1,b__43195,s__43193__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function (p__43196){
var vec__43197 = p__43196;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43197,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43197,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__43200 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__43200) : ditems.call(null,G__43200));
})());
});})(i__43194,i__43188,multiset,c__4650__auto____$1,size__4651__auto____$1,b__43195,s__43193__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
,multiset)));

var G__43481 = (i__43194 + (1));
i__43194 = G__43481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43195),clojure$math$combinatorics$iter__43186_$_iter__43192(cljs.core.chunk_rest(s__43193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43195),null);
}
} else {
var multiset = cljs.core.first(s__43193__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__43188,multiset,s__43193__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function (p__43201){
var vec__43202 = p__43201;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43202,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43202,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__43205 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__43205) : ditems.call(null,G__43205));
})());
});})(i__43188,multiset,s__43193__$2,temp__5753__auto____$1,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__43186_$_iter__43192(cljs.core.rest(s__43193__$2)));
}
} else {
return null;
}
break;
}
});})(i__43188,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
,null,null));
});})(i__43188,part,c__4650__auto__,size__4651__auto__,b__43189,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
;
return iter__4652__auto__(part);
})());

var G__43482 = (i__43188 + (1));
i__43188 = G__43482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43189),clojure$math$combinatorics$iter__43186(cljs.core.chunk_rest(s__43187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43189),null);
}
} else {
var part = cljs.core.first(s__43187__$2);
return cljs.core.cons((function (){var iter__4652__auto__ = ((function (part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function clojure$math$combinatorics$iter__43186_$_iter__43206(s__43207){
return (new cljs.core.LazySeq(null,(function (){
var s__43207__$1 = s__43207;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__43207__$1);
if(temp__5753__auto____$1){
var s__43207__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43207__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__43207__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__43209 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__43208 = (0);
while(true){
if((i__43208 < size__4651__auto__)){
var multiset = cljs.core._nth(c__4650__auto__,i__43208);
cljs.core.chunk_append(b__43209,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__43208,multiset,c__4650__auto__,size__4651__auto__,b__43209,s__43207__$2,temp__5753__auto____$1,part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function (p__43210){
var vec__43211 = p__43210;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43211,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43211,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__43214 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__43214) : ditems.call(null,G__43214));
})());
});})(i__43208,multiset,c__4650__auto__,size__4651__auto__,b__43209,s__43207__$2,temp__5753__auto____$1,part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
,multiset)));

var G__43483 = (i__43208 + (1));
i__43208 = G__43483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43209),clojure$math$combinatorics$iter__43186_$_iter__43206(cljs.core.chunk_rest(s__43207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43209),null);
}
} else {
var multiset = cljs.core.first(s__43207__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__43207__$2,temp__5753__auto____$1,part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to){
return (function (p__43215){
var vec__43216 = p__43215;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43216,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43216,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__43219 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__43219) : ditems.call(null,G__43219));
})());
});})(multiset,s__43207__$2,temp__5753__auto____$1,part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__43186_$_iter__43206(cljs.core.rest(s__43207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__43187__$2,temp__5753__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__43174,map__43174__$1,from,to))
;
return iter__4652__auto__(part);
})(),clojure$math$combinatorics$iter__43186(cljs.core.rest(s__43187__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq43171){
var G__43172 = cljs.core.first(seq43171);
var seq43171__$1 = cljs.core.next(seq43171);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43172,seq43171__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43484 = arguments.length;
var i__4865__auto___43485 = (0);
while(true){
if((i__4865__auto___43485 < len__4864__auto___43484)){
args__4870__auto__.push((arguments[i__4865__auto___43485]));

var G__43486 = (i__4865__auto___43485 + (1));
i__4865__auto___43485 = G__43486;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq43228){
var G__43229 = cljs.core.first(seq43228);
var seq43228__$1 = cljs.core.next(seq43228);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43229,seq43228__$1);
}));


//# sourceMappingURL=clojure.math.combinatorics.js.map
