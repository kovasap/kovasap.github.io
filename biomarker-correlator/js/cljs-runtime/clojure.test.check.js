goog.provide('clojure.test.check');

clojure.test.check.make_rng = (function clojure$test$check$make_rng(seed){
if(cljs.core.truth_(seed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)], null);
} else {
var non_nil_seed = clojure.test.check.impl.get_current_time_millis();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [non_nil_seed,clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(non_nil_seed)], null);
}
});
clojure.test.check.complete = (function clojure$test$check$complete(property,num_trials,seed,start_time,reporter_fn){
var time_elapsed_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var G__38580_38738 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"complete","complete",-500388775),new cljs.core.Keyword(null,"property","property",-1114278232),property,new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38580_38738) : reporter_fn.call(null,G__38580_38738));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"result","result",1415092211),true,new cljs.core.Keyword(null,"pass?","pass?",-424635753),true,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),num_trials,new cljs.core.Keyword(null,"time-elapsed-ms","time-elapsed-ms",-755913315),time_elapsed_ms,new cljs.core.Keyword(null,"seed","seed",68613327),seed], null);
});
/**
 * Returns a value for the legacy :result key, which has the peculiar
 *   property of conflating returned exceptions with thrown exceptions.
 */
clojure.test.check.legacy_result = (function clojure$test$check$legacy_result(result){
if((((!((result == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === result.clojure$test$check$results$Result$))))?true:(((!result.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result):false)):cljs.core.native_satisfies_QMARK_(clojure.test.check.results.Result,result))){
var d = clojure.test.check.results.result_data(result);
var temp__5751__auto__ = cljs.core.find(d,new cljs.core.Keyword("clojure.test.check.properties","error","clojure.test.check.properties/error",483933635));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__38609 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609,(1),null);
if((e instanceof Error)){
return e;
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Non-Error object thrown in test",cljs.core.PersistentArrayMap.EMPTY,e);
}
} else {
return clojure.test.check.results.pass_QMARK_(result);
}
} else {
return result;
}
});
/**
 * Tests `property` `num-tests` times.
 * 
 *   Takes several optional keys:
 * 
 *   `:seed`
 *  Can be used to re-run previous tests, as the seed used is returned
 *  after a test is run.
 * 
 *   `:max-size`.
 *  can be used to control the 'size' of generated values. The size will
 *  start at 0, and grow up to max-size, as the number of tests increases.
 *  Generators will use the size parameter to bound their growth. This
 *  prevents, for example, generating a five-thousand element vector on
 *  the very first test.
 * 
 *   `:reporter-fn`
 *  A callback function that will be called at various points in the test
 *  run, with a map like:
 * 
 *    ;; called after a passing trial
 *    {:type            :trial
 *     :args            [...]
 *     :num-tests       <number of tests run so far>
 *     :num-tests-total <total number of tests to be run>
 *     :seed            42
 *     :pass?           true
 *     :property        #<...>
 *     :result          true
 *     :result-data     {...}}
 * 
 *    ;; called after the first failing trial
 *    {:type         :failure
 *     :fail         [...failing args...]
 *     :failing-size 13
 *     :num-tests    <tests ran before failure found>
 *     :pass?        false
 *     :property     #<...>
 *     :result       false/exception
 *     :result-data  {...}
 *     :seed         42}
 * 
 *  It will also be called on :complete, :shrink-step and :shrunk. Many
 *  of the keys also appear in the quick-check return value, and are
 *  documented below.
 * 
 *   If the test passes, the return value will be something like:
 * 
 *    {:num-tests       100,
 *     :pass?           true,
 *     :result          true,
 *     :seed            1561826505982,
 *     :time-elapsed-ms 24}
 * 
 *   If the test fails, the return value will be something like:
 * 
 *    {:fail            [0],
 *     :failed-after-ms 0,
 *     :failing-size    0,
 *     :num-tests       1,
 *     :pass?           false,
 *     :result          false,
 *     :result-data     nil,
 *     :seed            1561826506080,
 *     :shrunk
 *     {:depth               0,
 *      :pass?               false,
 *      :result              false,
 *      :result-data         nil,
 *      :smallest            [0],
 *      :time-shrinking-ms   0,
 *      :total-nodes-visited 0}}
 * 
 *   The meaning of the individual entries is:
 * 
 *    :num-tests
 *    The total number of trials that was were run, not including
 *    shrinking (if applicable)
 * 
 *    :pass?
 *    A boolean indicating whether the test passed or failed
 * 
 *    :result
 *    A legacy entry that is similar to :pass?
 * 
 *    :seed
 *    The seed used for the entire test run; can be used to reproduce
 *    a test run by passing it as the :seed option to quick-check
 * 
 *    :time-elapsed-ms
 *    The total time, in milliseconds, of a successful test run
 * 
 *    :fail
 *    The generated values for the first failure; note that this is
 *    always a vector, since prop/for-all can have multiple clauses
 * 
 *    :failed-after-ms
 *    The total time, in milliseconds, spent finding the first failing
 *    trial
 * 
 *    :failing-size
 *    The value of the size parameter used to generate the first
 *    failure
 * 
 *    :result-data
 *    The result data, if any, of the first failing trial (to take
 *    advantage of this a property must return an object satisfying
 *    the clojure.test.check.results/Result protocol)
 * 
 *    :shrunk
 *    A map of data about the shrinking process; nested keys that
 *    appear at the top level have the same meaning; other keys are
 *    documented next
 * 
 *    :shrunk / :depth
 *    The depth in the shrink tree that the smallest failing instance
 *    was found; this is essentially the idea of how many times the
 *    original failure was successfully shrunk
 * 
 *    :smallest
 *    The smallest values found in the shrinking process that still
 *    fail the test; this is a vector of the same type as :fail
 * 
 *    :time-shrinking-ms
 *    The total time, in milliseconds, spent shrinking
 * 
 *    :total-nodes-visited
 *    The total number of steps in the shrinking process
 * 
 *   Examples:
 * 
 *    (def p (for-all [a gen/nat] (> (* a a) a)))
 * 
 *    (quick-check 100 p)
 *    (quick-check 200 p
 *                 :seed 42
 *                 :max-size 50
 *                 :reporter-fn (fn [m]
 *                                (when (= :failure (:type m))
 *                                  (println "Uh oh..."))))
 */
clojure.test.check.quick_check = (function clojure$test$check$quick_check(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38782 = arguments.length;
var i__4865__auto___38783 = (0);
while(true){
if((i__4865__auto___38783 < len__4864__auto___38782)){
args__4870__auto__.push((arguments[i__4865__auto___38783]));

var G__38793 = (i__4865__auto___38783 + (1));
i__4865__auto___38783 = G__38793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(clojure.test.check.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (num_tests,property,p__38634){
var map__38635 = p__38634;
var map__38635__$1 = cljs.core.__destructure_map(map__38635);
var seed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38635__$1,new cljs.core.Keyword(null,"seed","seed",68613327));
var max_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38635__$1,new cljs.core.Keyword(null,"max-size","max-size",-874966132),(200));
var reporter_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38635__$1,new cljs.core.Keyword(null,"reporter-fn","reporter-fn",1280520247),cljs.core.constantly(null));
var vec__38636 = clojure.test.check.make_rng(seed);
var created_seed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38636,(0),null);
var rng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38636,(1),null);
var size_seq = clojure.test.check.generators.make_size_range_seq(max_size);
var start_time = clojure.test.check.impl.get_current_time_millis();
var so_far = (0);
var size_seq__$1 = size_seq;
var rstate = rng;
while(true){
if((so_far === num_tests)){
return clojure.test.check.complete(property,num_tests,created_seed,start_time,reporter_fn);
} else {
var vec__38650 = size_seq__$1;
var seq__38651 = cljs.core.seq(vec__38650);
var first__38652 = cljs.core.first(seq__38651);
var seq__38651__$1 = cljs.core.next(seq__38651);
var size = first__38652;
var rest_size_seq = seq__38651__$1;
var vec__38653 = clojure.test.check.random.split(rstate);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38653,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38653,(1),null);
var result_map_rose = clojure.test.check.generators.call_gen(property,r1,size);
var result_map = clojure.test.check.rose_tree.root(result_map_rose);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(result_map);
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(result_map);
var so_far__$1 = (so_far + (1));
if(cljs.core.truth_(clojure.test.check.results.pass_QMARK_(result))){
var G__38657_38801 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"num-tests-total","num-tests-total",-2113009946),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[args,num_tests,property,so_far__$1,new cljs.core.Keyword(null,"trial","trial",-677458347),seed,result,clojure.test.check.results.result_data(result),true]);
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38657_38801) : reporter_fn.call(null,G__38657_38801));

var G__38808 = so_far__$1;
var G__38809 = rest_size_seq;
var G__38810 = r2;
so_far = G__38808;
size_seq__$1 = G__38809;
rstate = G__38810;
continue;
} else {
return (clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7 ? clojure.test.check.failure.cljs$core$IFn$_invoke$arity$7(property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn) : clojure.test.check.failure.call(null,property,result_map_rose,so_far__$1,size,created_seed,start_time,reporter_fn));
}
}
break;
}
}));

(clojure.test.check.quick_check.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(clojure.test.check.quick_check.cljs$lang$applyTo = (function (seq38627){
var G__38628 = cljs.core.first(seq38627);
var seq38627__$1 = cljs.core.next(seq38627);
var G__38629 = cljs.core.first(seq38627__$1);
var seq38627__$2 = cljs.core.next(seq38627__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38628,G__38629,seq38627__$2);
}));

clojure.test.check.smallest_shrink = (function clojure$test$check$smallest_shrink(total_nodes_visited,depth,smallest,start_time){
var map__38661 = smallest;
var map__38661__$1 = cljs.core.__destructure_map(map__38661);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),false,new cljs.core.Keyword(null,"result","result",1415092211),clojure.test.check.legacy_result(result),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data(result),new cljs.core.Keyword(null,"time-shrinking-ms","time-shrinking-ms",-383238219),(clojure.test.check.impl.get_current_time_millis() - start_time),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(smallest)], null);
});
/**
 * Shrinking a value produces a sequence of smaller values of the same type.
 *   Each of these values can then be shrunk. Think of this as a tree. We do a
 *   modified depth-first search of the tree:
 * 
 *   Do a non-exhaustive search for a deeper (than the root) failing example.
 *   Additional rules added to depth-first search:
 *   * If a node passes the property, you may continue searching at this depth,
 *   but not backtrack
 *   * If a node fails the property, search its children
 *   The value returned is the left-most failing example at the depth where a
 *   passing example was found.
 * 
 *   Calls reporter-fn on every shrink step.
 */
clojure.test.check.shrink_loop = (function clojure$test$check$shrink_loop(rose_tree,reporter_fn){
var start_time = clojure.test.check.impl.get_current_time_millis();
var shrinks_this_depth = clojure.test.check.rose_tree.children(rose_tree);
var nodes = shrinks_this_depth;
var current_smallest = clojure.test.check.rose_tree.root(rose_tree);
var total_nodes_visited = (0);
var depth = (0);
while(true){
if(cljs.core.empty_QMARK_(nodes)){
return clojure.test.check.smallest_shrink(total_nodes_visited,depth,current_smallest,start_time);
} else {
var head = cljs.core.first(nodes);
var tail = cljs.core.rest(nodes);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(clojure.test.check.rose_tree.root(head));
var pass_QMARK_ = clojure.test.check.results.pass_QMARK_(result);
var reporter_fn_arg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrink-step","shrink-step",-541828120),new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"pass?","pass?",-424635753),cljs.core.boolean$(pass_QMARK_),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"result-data","result-data",-1724248844),clojure.test.check.results.result_data(result),new cljs.core.Keyword(null,"smallest","smallest",-152623883),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(current_smallest),new cljs.core.Keyword(null,"total-nodes-visited","total-nodes-visited",-620132443),total_nodes_visited], null)], null);
if(cljs.core.truth_(pass_QMARK_)){
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(reporter_fn_arg) : reporter_fn.call(null,reporter_fn_arg));

var G__38858 = tail;
var G__38859 = current_smallest;
var G__38860 = (total_nodes_visited + (1));
var G__38861 = depth;
nodes = G__38858;
current_smallest = G__38859;
total_nodes_visited = G__38860;
depth = G__38861;
continue;
} else {
var new_smallest = clojure.test.check.rose_tree.root(head);
var G__38691_38874 = cljs.core.assoc_in(reporter_fn_arg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shrinking","shrinking",2049648186),new cljs.core.Keyword(null,"smallest","smallest",-152623883)], null),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(new_smallest));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38691_38874) : reporter_fn.call(null,G__38691_38874));

var temp__5751__auto__ = cljs.core.seq(clojure.test.check.rose_tree.children(head));
if(temp__5751__auto__){
var children = temp__5751__auto__;
var G__38875 = children;
var G__38876 = new_smallest;
var G__38877 = (total_nodes_visited + (1));
var G__38878 = (depth + (1));
nodes = G__38875;
current_smallest = G__38876;
total_nodes_visited = G__38877;
depth = G__38878;
continue;
} else {
var G__38880 = tail;
var G__38881 = new_smallest;
var G__38882 = (total_nodes_visited + (1));
var G__38883 = depth;
nodes = G__38880;
current_smallest = G__38881;
total_nodes_visited = G__38882;
depth = G__38883;
continue;
}
}
}
break;
}
});
clojure.test.check.failure = (function clojure$test$check$failure(property,failing_rose_tree,trial_number,size,seed,start_time,reporter_fn){
var failed_after_ms = (clojure.test.check.impl.get_current_time_millis() - start_time);
var root = clojure.test.check.rose_tree.root(failing_rose_tree);
var result = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(root);
var failure_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"failed-after-ms","failed-after-ms",912141156),new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),new cljs.core.Keyword(null,"seed","seed",68613327),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result-data","result-data",-1724248844),new cljs.core.Keyword(null,"failing-size","failing-size",-429562538),new cljs.core.Keyword(null,"pass?","pass?",-424635753)],[failed_after_ms,property,trial_number,seed,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(root),clojure.test.check.legacy_result(result),clojure.test.check.results.result_data(result),size,false]);
var G__38697_38907 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38697_38907) : reporter_fn.call(null,G__38697_38907));

var shrunk = clojure.test.check.shrink_loop(failing_rose_tree,(function (p1__38695_SHARP_){
var G__38702 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure_data,p1__38695_SHARP_], 0));
return (reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38702) : reporter_fn.call(null,G__38702));
}));
var G__38706_38909 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(failure_data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk], 0));
(reporter_fn.cljs$core$IFn$_invoke$arity$1 ? reporter_fn.cljs$core$IFn$_invoke$arity$1(G__38706_38909) : reporter_fn.call(null,G__38706_38909));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(failure_data,new cljs.core.Keyword(null,"property","property",-1114278232)),new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412),shrunk);
});

//# sourceMappingURL=clojure.test.check.js.map
