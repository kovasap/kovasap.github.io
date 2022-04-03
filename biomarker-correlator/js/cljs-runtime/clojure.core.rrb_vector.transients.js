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
var n_83296 = ret;
var shift_83297__$1 = shift;
while(true){
var arr_83298 = n_83296.arr;
var subidx_83299 = (((cnt - (1)) >> shift_83297__$1) & (31));
if((shift_83297__$1 === (5))){
(arr_83298[subidx_83299] = tail_node);
} else {
var child_83300 = (arr_83298[subidx_83299]);
if((child_83300 == null)){
(arr_83298[subidx_83299] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_83297__$1 - (5)),tail_node));
} else {
var editable_child_83301 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_83300);
(arr_83298[subidx_83299] = editable_child_83301);

var G__83302 = editable_child_83301;
var G__83303 = (shift_83297__$1 - (5));
n_83296 = G__83302;
shift_83297__$1 = G__83303;
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
var G__83267 = (shift - (5));
var G__83268 = ccnt;
var G__83269 = root_edit;
var G__83270 = child;
var G__83271 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__83267,G__83268,G__83269,G__83270,G__83271) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__83267,G__83268,G__83269,G__83270,G__83271));
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
var msg_83305 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_83306 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_83305,data_83306);
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
var child = (function (){var G__83272 = (shift - (5));
var G__83273 = cnt;
var G__83274 = root_edit;
var G__83275 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__83272,G__83273,G__83274,G__83275) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__83272,G__83273,G__83274,G__83275));
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
var new_child = (function (){var G__83281 = (shift - (5));
var G__83282 = child_cnt;
var G__83283 = root_edit;
var G__83284 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__83281,G__83282,G__83283,G__83284) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__83281,G__83282,G__83283,G__83284));
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
var shift_83312__$1 = shift;
var node_83313 = ret;
while(true){
if((shift_83312__$1 === (0))){
var arr_83314 = node_83313.arr;
(arr_83314[(i & (31))] = val);
} else {
var arr_83315 = node_83313.arr;
var subidx_83316 = ((i >> shift_83312__$1) & (31));
var child_83317 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_83315[subidx_83316]));
(arr_83315[subidx_83316] = child_83317);

var G__83318 = (shift_83312__$1 - (5));
var G__83319 = child_83317;
shift_83312__$1 = G__83318;
node_83313 = G__83319;
continue;
}
break;
}
} else {
var arr_83320 = ret.arr;
var rngs_83321 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_83322 = ((i >> shift) & (31));
var subidx_83323__$1 = (function (){var subidx_83323__$1 = subidx_83322;
while(true){
if((i < ((rngs_83321[subidx_83323__$1]) | (0)))){
return subidx_83323__$1;
} else {
var G__83325 = (subidx_83323__$1 + (1));
subidx_83323__$1 = G__83325;
continue;
}
break;
}
})();
var i_83324__$1 = (((subidx_83323__$1 === (0)))?i:(i - (rngs_83321[(subidx_83323__$1 - (1))])));
(arr_83320[subidx_83323__$1] = (function (){var G__83291 = (shift - (5));
var G__83292 = root_edit;
var G__83293 = (arr_83320[subidx_83323__$1]);
var G__83294 = i_83324__$1;
var G__83295 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__83291,G__83292,G__83293,G__83294,G__83295) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__83291,G__83292,G__83293,G__83294,G__83295));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
