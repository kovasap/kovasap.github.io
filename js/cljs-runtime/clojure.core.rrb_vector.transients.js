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
var n_73332 = ret;
var shift_73333__$1 = shift;
while(true){
var arr_73334 = n_73332.arr;
var subidx_73335 = (((cnt - (1)) >> shift_73333__$1) & (31));
if((shift_73333__$1 === (5))){
(arr_73334[subidx_73335] = tail_node);
} else {
var child_73336 = (arr_73334[subidx_73335]);
if((child_73336 == null)){
(arr_73334[subidx_73335] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_73333__$1 - (5)),tail_node));
} else {
var editable_child_73337 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_73336);
(arr_73334[subidx_73335] = editable_child_73337);

var G__73338 = editable_child_73337;
var G__73339 = (shift_73333__$1 - (5));
n_73332 = G__73338;
shift_73333__$1 = G__73339;
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
var G__73314 = (shift - (5));
var G__73315 = ccnt;
var G__73316 = root_edit;
var G__73317 = child;
var G__73318 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__73314,G__73315,G__73316,G__73317,G__73318) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__73314,G__73315,G__73316,G__73317,G__73318));
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
var msg_73340 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_73341 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_73340,data_73341);
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
var child = (function (){var G__73319 = (shift - (5));
var G__73320 = cnt;
var G__73321 = root_edit;
var G__73322 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__73319,G__73320,G__73321,G__73322) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__73319,G__73320,G__73321,G__73322));
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
var new_child = (function (){var G__73323 = (shift - (5));
var G__73324 = child_cnt;
var G__73325 = root_edit;
var G__73326 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__73323,G__73324,G__73325,G__73326) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__73323,G__73324,G__73325,G__73326));
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
var shift_73357__$1 = shift;
var node_73358 = ret;
while(true){
if((shift_73357__$1 === (0))){
var arr_73359 = node_73358.arr;
(arr_73359[(i & (31))] = val);
} else {
var arr_73361 = node_73358.arr;
var subidx_73362 = ((i >> shift_73357__$1) & (31));
var child_73363 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_73361[subidx_73362]));
(arr_73361[subidx_73362] = child_73363);

var G__73364 = (shift_73357__$1 - (5));
var G__73365 = child_73363;
shift_73357__$1 = G__73364;
node_73358 = G__73365;
continue;
}
break;
}
} else {
var arr_73366 = ret.arr;
var rngs_73367 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_73368 = ((i >> shift) & (31));
var subidx_73369__$1 = (function (){var subidx_73369__$1 = subidx_73368;
while(true){
if((i < ((rngs_73367[subidx_73369__$1]) | (0)))){
return subidx_73369__$1;
} else {
var G__73372 = (subidx_73369__$1 + (1));
subidx_73369__$1 = G__73372;
continue;
}
break;
}
})();
var i_73370__$1 = (((subidx_73369__$1 === (0)))?i:(i - (rngs_73367[(subidx_73369__$1 - (1))])));
(arr_73366[subidx_73369__$1] = (function (){var G__73327 = (shift - (5));
var G__73328 = root_edit;
var G__73329 = (arr_73366[subidx_73369__$1]);
var G__73330 = i_73370__$1;
var G__73331 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__73327,G__73328,G__73329,G__73330,G__73331) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__73327,G__73328,G__73329,G__73330,G__73331));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
