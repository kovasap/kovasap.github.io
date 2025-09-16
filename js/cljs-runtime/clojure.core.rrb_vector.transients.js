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
var n_36396 = ret;
var shift_36397__$1 = shift;
while(true){
var arr_36398 = n_36396.arr;
var subidx_36399 = (((cnt - (1)) >> shift_36397__$1) & (31));
if((shift_36397__$1 === (5))){
(arr_36398[subidx_36399] = tail_node);
} else {
var child_36400 = (arr_36398[subidx_36399]);
if((child_36400 == null)){
(arr_36398[subidx_36399] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_36397__$1 - (5)),tail_node));
} else {
var editable_child_36401 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_36400);
(arr_36398[subidx_36399] = editable_child_36401);

var G__36402 = editable_child_36401;
var G__36403 = (shift_36397__$1 - (5));
n_36396 = G__36402;
shift_36397__$1 = G__36403;
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
var G__36378 = (shift - (5));
var G__36379 = ccnt;
var G__36380 = root_edit;
var G__36381 = child;
var G__36382 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__36378,G__36379,G__36380,G__36381,G__36382) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__36378,G__36379,G__36380,G__36381,G__36382));
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
var msg_36404 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_36405 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_36404,data_36405);
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
var child = (function (){var G__36383 = (shift - (5));
var G__36384 = cnt;
var G__36385 = root_edit;
var G__36386 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__36383,G__36384,G__36385,G__36386) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__36383,G__36384,G__36385,G__36386));
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
var new_child = (function (){var G__36387 = (shift - (5));
var G__36388 = child_cnt;
var G__36389 = root_edit;
var G__36390 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__36387,G__36388,G__36389,G__36390) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__36387,G__36388,G__36389,G__36390));
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
var shift_36407__$1 = shift;
var node_36408 = ret;
while(true){
if((shift_36407__$1 === (0))){
var arr_36409 = node_36408.arr;
(arr_36409[(i & (31))] = val);
} else {
var arr_36410 = node_36408.arr;
var subidx_36411 = ((i >> shift_36407__$1) & (31));
var child_36412 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_36410[subidx_36411]));
(arr_36410[subidx_36411] = child_36412);

var G__36413 = (shift_36407__$1 - (5));
var G__36414 = child_36412;
shift_36407__$1 = G__36413;
node_36408 = G__36414;
continue;
}
break;
}
} else {
var arr_36416 = ret.arr;
var rngs_36417 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_36418 = ((i >> shift) & (31));
var subidx_36419__$1 = (function (){var subidx_36419__$1 = subidx_36418;
while(true){
if((i < ((rngs_36417[subidx_36419__$1]) | (0)))){
return subidx_36419__$1;
} else {
var G__36421 = (subidx_36419__$1 + (1));
subidx_36419__$1 = G__36421;
continue;
}
break;
}
})();
var i_36420__$1 = (((subidx_36419__$1 === (0)))?i:(i - (rngs_36417[(subidx_36419__$1 - (1))])));
(arr_36416[subidx_36419__$1] = (function (){var G__36391 = (shift - (5));
var G__36392 = root_edit;
var G__36393 = (arr_36416[subidx_36419__$1]);
var G__36394 = i_36420__$1;
var G__36395 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__36391,G__36392,G__36393,G__36394,G__36395) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__36391,G__36392,G__36393,G__36394,G__36395));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
