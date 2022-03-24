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
var n_62813 = ret;
var shift_62814__$1 = shift;
while(true){
var arr_62815 = n_62813.arr;
var subidx_62816 = (((cnt - (1)) >> shift_62814__$1) & (31));
if((shift_62814__$1 === (5))){
(arr_62815[subidx_62816] = tail_node);
} else {
var child_62817 = (arr_62815[subidx_62816]);
if((child_62817 == null)){
(arr_62815[subidx_62816] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_62814__$1 - (5)),tail_node));
} else {
var editable_child_62818 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_62817);
(arr_62815[subidx_62816] = editable_child_62818);

var G__62819 = editable_child_62818;
var G__62820 = (shift_62814__$1 - (5));
n_62813 = G__62819;
shift_62814__$1 = G__62820;
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
var G__62786 = (shift - (5));
var G__62787 = ccnt;
var G__62788 = root_edit;
var G__62789 = child;
var G__62790 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__62786,G__62787,G__62788,G__62789,G__62790) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__62786,G__62787,G__62788,G__62789,G__62790));
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
var msg_62821 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_62822 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_62821,data_62822);
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
var child = (function (){var G__62797 = (shift - (5));
var G__62798 = cnt;
var G__62799 = root_edit;
var G__62800 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__62797,G__62798,G__62799,G__62800) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__62797,G__62798,G__62799,G__62800));
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
var new_child = (function (){var G__62803 = (shift - (5));
var G__62804 = child_cnt;
var G__62805 = root_edit;
var G__62806 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__62803,G__62804,G__62805,G__62806) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__62803,G__62804,G__62805,G__62806));
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
var shift_62830__$1 = shift;
var node_62831 = ret;
while(true){
if((shift_62830__$1 === (0))){
var arr_62832 = node_62831.arr;
(arr_62832[(i & (31))] = val);
} else {
var arr_62833 = node_62831.arr;
var subidx_62834 = ((i >> shift_62830__$1) & (31));
var child_62835 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_62833[subidx_62834]));
(arr_62833[subidx_62834] = child_62835);

var G__62838 = (shift_62830__$1 - (5));
var G__62839 = child_62835;
shift_62830__$1 = G__62838;
node_62831 = G__62839;
continue;
}
break;
}
} else {
var arr_62840 = ret.arr;
var rngs_62841 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_62842 = ((i >> shift) & (31));
var subidx_62843__$1 = (function (){var subidx_62843__$1 = subidx_62842;
while(true){
if((i < ((rngs_62841[subidx_62843__$1]) | (0)))){
return subidx_62843__$1;
} else {
var G__62846 = (subidx_62843__$1 + (1));
subidx_62843__$1 = G__62846;
continue;
}
break;
}
})();
var i_62844__$1 = (((subidx_62843__$1 === (0)))?i:(i - (rngs_62841[(subidx_62843__$1 - (1))])));
(arr_62840[subidx_62843__$1] = (function (){var G__62808 = (shift - (5));
var G__62809 = root_edit;
var G__62810 = (arr_62840[subidx_62843__$1]);
var G__62811 = i_62844__$1;
var G__62812 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__62808,G__62809,G__62810,G__62811,G__62812) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__62808,G__62809,G__62810,G__62811,G__62812));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
