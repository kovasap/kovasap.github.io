goog.provide('clojure.test.check.random.longs.bit_count_impl');
clojure.test.check.random.longs.bit_count_impl.lookup = (function (){var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(arr[(0)] = (0));

var n__5636__auto___42596 = (256);
var i_42597 = (0);
while(true){
if((i_42597 < n__5636__auto___42596)){
(arr[i_42597] = ((arr[(i_42597 >> (1))]) + (i_42597 & (1))));

var G__42598 = (i_42597 + (1));
i_42597 = G__42598;
continue;
} else {
}
break;
}

return arr;
})();
/**
 * Returns a JS number (not a Long), the number of set bits in the
 *   given Long.
 */
clojure.test.check.random.longs.bit_count_impl.bit_count = (function clojure$test$check$random$longs$bit_count_impl$bit_count(x){
var low = x.low_;
var high = x.high_;
return ((((((((clojure.test.check.random.longs.bit_count_impl.lookup[(low & (255))]) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (24)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[(high & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (24)) & (255))]));
});

//# sourceMappingURL=clojure.test.check.random.longs.bit_count_impl.js.map
