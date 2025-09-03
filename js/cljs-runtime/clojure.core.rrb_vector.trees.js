goog.provide('clojure.core.rrb_vector.trees');
clojure.core.rrb_vector.trees.new_path = (function clojure$core$rrb_vector$trees$new_path(tail,edit,shift,current_node){
if((tail.length === (32))){
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

var G__36351 = (s + (5));
var G__36352 = ret;
s = G__36351;
n = G__36352;
continue;
}
break;
}
} else {
var s = (0);
var n = current_node;
while(true){
if((s === shift)){
return n;
} else {
var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var rngs = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var ret = cljs.core.__GT_VectorNode(edit,arr);
(arr[(0)] = n);

(arr[(32)] = rngs);

(rngs[(32)] = (1));

(rngs[(0)] = tail.length);

var G__36353 = (s + (5));
var G__36354 = ret;
s = G__36353;
n = G__36354;
continue;
}
break;
}
}
});
clojure.core.rrb_vector.trees.push_tail = (function clojure$core$rrb_vector$trees$push_tail(shift,cnt,root_edit,current_node,tail_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var arr = cljs.core.aclone(current_node.arr);
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var n_36355 = ret;
var shift_36356__$1 = shift;
while(true){
var arr_36357__$1 = n_36355.arr;
var subidx_36358 = (((cnt - (1)) >> shift_36356__$1) & (31));
if((shift_36356__$1 === (5))){
(arr_36357__$1[subidx_36358] = tail_node);
} else {
var temp__5802__auto___36359 = (arr_36357__$1[subidx_36358]);
if(cljs.core.truth_(temp__5802__auto___36359)){
var child_36360 = temp__5802__auto___36359;
var new_carr_36361 = cljs.core.aclone(child_36360.arr);
var new_child_36362 = cljs.core.__GT_VectorNode(root_edit,new_carr_36361);
(arr_36357__$1[subidx_36358] = new_child_36362);

var G__36363 = new_child_36362;
var G__36364 = (shift_36356__$1 - (5));
n_36355 = G__36363;
shift_36356__$1 = G__36364;
continue;
} else {
(arr_36357__$1[subidx_36358] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_36356__$1 - (5)),tail_node));
}
}
break;
}

return ret;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var li = ((rngs[(32)]) - (1));
var ret = cljs.core.__GT_VectorNode(current_node.edit,arr);
var cret = (((shift === (5)))?null:(function (){var child = (arr[li]);
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__36319 = (shift - (5));
var G__36320 = ccnt;
var G__36321 = root_edit;
var G__36322 = child;
var G__36323 = tail_node;
return (clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.trees.push_tail.cljs$core$IFn$_invoke$arity$5(G__36319,G__36320,G__36321,G__36322,G__36323) : clojure.core.rrb_vector.trees.push_tail.call(null,G__36319,G__36320,G__36321,G__36322,G__36323));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_36365 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_36366 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnt","cnt",283978798),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_36365,data_36366);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.trees.pop_tail = (function clojure$core$rrb_vector$trees$pop_tail(shift,cnt,root_edit,current_node){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var new_child = (function (){var G__36330 = (shift - (5));
var G__36331 = cnt;
var G__36332 = root_edit;
var G__36333 = (current_node.arr[subidx]);
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__36330,G__36331,G__36332,G__36333) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__36330,G__36331,G__36332,G__36333));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = new_child);

return cljs.core.__GT_VectorNode(root_edit,arr);
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
(arr[subidx] = null);

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var subidx = ((rngs[(32)]) - (1));
var new_rngs = cljs.core.aclone(rngs);
if((shift > (5))){
var child = (current_node.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__36338 = (shift - (5));
var G__36339 = child_cnt;
var G__36340 = root_edit;
var G__36341 = child;
return (clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.pop_tail.cljs$core$IFn$_invoke$arity$4(G__36338,G__36339,G__36340,G__36341) : clojure.core.rrb_vector.trees.pop_tail.call(null,G__36338,G__36339,G__36340,G__36341));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx] = ((new_rngs[subidx]) - (32)));

(arr[subidx] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = cljs.core.aclone(current_node.arr);
(new_rngs[subidx] = ((new_rngs[subidx]) - diff));

(arr[subidx] = new_child);

(arr[(32)] = new_rngs);

if((new_child == null)){
(new_rngs[(32)] = ((new_rngs[(32)]) - (1)));
} else {
}

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = cljs.core.aclone(current_node.arr);
var child = (arr[subidx]);
var new_rngs__$1 = cljs.core.aclone(rngs);
(arr[subidx] = null);

(arr[(32)] = new_rngs__$1);

(new_rngs__$1[subidx] = (0));

(new_rngs__$1[(32)] = ((new_rngs__$1[(32)]) - (1)));

return cljs.core.__GT_VectorNode(root_edit,arr);

}
}
}
});
clojure.core.rrb_vector.trees.do_assoc = (function clojure$core$rrb_vector$trees$do_assoc(shift,current_node,i,val){
if(clojure.core.rrb_vector.nodes.regular_QMARK_(current_node)){
var node = clojure.core.rrb_vector.nodes.clone(shift,current_node);
var shift_36367__$1 = shift;
var node_36368__$1 = node;
while(true){
if((shift_36367__$1 === (0))){
var arr_36369 = node_36368__$1.arr;
(arr_36369[(i & (31))] = val);
} else {
var arr_36370 = node_36368__$1.arr;
var subidx_36371 = ((i >> shift_36367__$1) & (31));
var child_36372 = clojure.core.rrb_vector.nodes.clone(shift_36367__$1,(arr_36370[subidx_36371]));
(arr_36370[subidx_36371] = child_36372);

var G__36373 = (shift_36367__$1 - (5));
var G__36374 = child_36372;
shift_36367__$1 = G__36373;
node_36368__$1 = G__36374;
continue;
}
break;
}

return node;
} else {
var arr = cljs.core.aclone(current_node.arr);
var rngs = clojure.core.rrb_vector.nodes.node_ranges(current_node);
var subidx = ((i >> shift) & (31));
var subidx__$1 = (function (){var subidx__$1 = subidx;
while(true){
if((i < ((rngs[subidx__$1]) | (0)))){
return subidx__$1;
} else {
var G__36375 = (subidx__$1 + (1));
subidx__$1 = G__36375;
continue;
}
break;
}
})();
var i__$1 = (((subidx__$1 === (0)))?i:(i - (rngs[(subidx__$1 - (1))])));
(arr[subidx__$1] = (function (){var G__36347 = (shift - (5));
var G__36348 = (arr[subidx__$1]);
var G__36349 = i__$1;
var G__36350 = val;
return (clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.trees.do_assoc.cljs$core$IFn$_invoke$arity$4(G__36347,G__36348,G__36349,G__36350) : clojure.core.rrb_vector.trees.do_assoc.call(null,G__36347,G__36348,G__36349,G__36350));
})());

return cljs.core.__GT_VectorNode(current_node.edit,arr);
}
});

//# sourceMappingURL=clojure.core.rrb_vector.trees.js.map
