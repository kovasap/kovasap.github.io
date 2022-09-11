goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_48393 = ret;
var shift_48394__$1 = shift;
while(true){
var arr_48395 = n_48393.arr;
var subidx_48396 = (((cnt - (1)) >> shift_48394__$1) & (31));
if((shift_48394__$1 === (5))){
(arr_48395[subidx_48396] = tail_node);
} else {
var child_48397 = (arr_48395[subidx_48396]);
if((child_48397 == null)){
(arr_48395[subidx_48396] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_48394__$1 - (5)),tail_node));
} else {
var editable_child_48398 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_48397);
(arr_48395[subidx_48396] = editable_child_48398);

var G__48399 = editable_child_48398;
var G__48400 = (shift_48394__$1 - (5));
n_48393 = G__48399;
shift_48394__$1 = G__48400;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__48375 = (shift - (5));
var G__48376 = ccnt;
var G__48377 = root_edit;
var G__48378 = child;
var G__48379 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__48375,G__48376,G__48377,G__48378,G__48379) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__48375,G__48376,G__48377,G__48378,G__48379));
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
var msg_48404 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_48405 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_48404,data_48405);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__48380 = (shift - (5));
var G__48381 = cnt;
var G__48382 = root_edit;
var G__48383 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__48380,G__48381,G__48382,G__48383) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__48380,G__48381,G__48382,G__48383));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__48384 = (shift - (5));
var G__48385 = child_cnt;
var G__48386 = root_edit;
var G__48387 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__48384,G__48385,G__48386,G__48387) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__48384,G__48385,G__48386,G__48387));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_48419__$1 = shift;
var node_48420 = ret;
while(true){
if((shift_48419__$1 === (0))){
var arr_48421 = node_48420.arr;
(arr_48421[(i & (31))] = val);
} else {
var arr_48422 = node_48420.arr;
var subidx_48423 = ((i >> shift_48419__$1) & (31));
var child_48424 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_48422[subidx_48423]));
(arr_48422[subidx_48423] = child_48424);

var G__48425 = (shift_48419__$1 - (5));
var G__48426 = child_48424;
shift_48419__$1 = G__48425;
node_48420 = G__48426;
continue;
}
break;
}
} else {
var arr_48428 = ret.arr;
var rngs_48429 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_48430 = ((i >> shift) & (31));
var subidx_48431__$1 = (function (){var subidx_48431__$1 = subidx_48430;
while(true){
if((i < ((rngs_48429[subidx_48431__$1]) | (0)))){
return subidx_48431__$1;
} else {
var G__48433 = (subidx_48431__$1 + (1));
subidx_48431__$1 = G__48433;
continue;
}
break;
}
})();
var i_48432__$1 = (((subidx_48431__$1 === (0)))?i:(i - (rngs_48429[(subidx_48431__$1 - (1))])));
(arr_48428[subidx_48431__$1] = (function (){var G__48388 = (shift - (5));
var G__48389 = root_edit;
var G__48390 = (arr_48428[subidx_48431__$1]);
var G__48391 = i_48432__$1;
var G__48392 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__48388,G__48389,G__48390,G__48391,G__48392) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__48388,G__48389,G__48390,G__48391,G__48392));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
