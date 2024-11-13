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
var n_48403 = ret;
var shift_48404__$1 = shift;
while(true){
var arr_48405 = n_48403.arr;
var subidx_48406 = (((cnt - (1)) >> shift_48404__$1) & (31));
if((shift_48404__$1 === (5))){
(arr_48405[subidx_48406] = tail_node);
} else {
var child_48407 = (arr_48405[subidx_48406]);
if((child_48407 == null)){
(arr_48405[subidx_48406] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_48404__$1 - (5)),tail_node));
} else {
var editable_child_48408 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_48407);
(arr_48405[subidx_48406] = editable_child_48408);

var G__48409 = editable_child_48408;
var G__48410 = (shift_48404__$1 - (5));
n_48403 = G__48409;
shift_48404__$1 = G__48410;
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
var G__48385 = (shift - (5));
var G__48386 = ccnt;
var G__48387 = root_edit;
var G__48388 = child;
var G__48389 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__48385,G__48386,G__48387,G__48388,G__48389) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__48385,G__48386,G__48387,G__48388,G__48389));
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
var msg_48411 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_48412 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_48411,data_48412);
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
var child = (function (){var G__48390 = (shift - (5));
var G__48391 = cnt;
var G__48392 = root_edit;
var G__48393 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__48390,G__48391,G__48392,G__48393) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__48390,G__48391,G__48392,G__48393));
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
var new_child = (function (){var G__48394 = (shift - (5));
var G__48395 = child_cnt;
var G__48396 = root_edit;
var G__48397 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__48394,G__48395,G__48396,G__48397) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__48394,G__48395,G__48396,G__48397));
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
var shift_48413__$1 = shift;
var node_48414 = ret;
while(true){
if((shift_48413__$1 === (0))){
var arr_48415 = node_48414.arr;
(arr_48415[(i & (31))] = val);
} else {
var arr_48416 = node_48414.arr;
var subidx_48417 = ((i >> shift_48413__$1) & (31));
var child_48418 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_48416[subidx_48417]));
(arr_48416[subidx_48417] = child_48418);

var G__48419 = (shift_48413__$1 - (5));
var G__48420 = child_48418;
shift_48413__$1 = G__48419;
node_48414 = G__48420;
continue;
}
break;
}
} else {
var arr_48421 = ret.arr;
var rngs_48422 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_48423 = ((i >> shift) & (31));
var subidx_48424__$1 = (function (){var subidx_48424__$1 = subidx_48423;
while(true){
if((i < ((rngs_48422[subidx_48424__$1]) | (0)))){
return subidx_48424__$1;
} else {
var G__48426 = (subidx_48424__$1 + (1));
subidx_48424__$1 = G__48426;
continue;
}
break;
}
})();
var i_48425__$1 = (((subidx_48424__$1 === (0)))?i:(i - (rngs_48422[(subidx_48424__$1 - (1))])));
(arr_48421[subidx_48424__$1] = (function (){var G__48398 = (shift - (5));
var G__48399 = root_edit;
var G__48400 = (arr_48421[subidx_48424__$1]);
var G__48401 = i_48425__$1;
var G__48402 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__48398,G__48399,G__48400,G__48401,G__48402) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__48398,G__48399,G__48400,G__48401,G__48402));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
