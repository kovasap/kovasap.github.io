goog.provide('reddit_tree.core');
reddit_tree.core.print_comment_bodies = (function reddit_tree$core$print_comment_bodies(comments_json){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comments_json)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(comments_json))){
var G__41526 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(comments_json);
return (reddit_tree.core.print_comment_bodies.cljs$core$IFn$_invoke$arity$1 ? reddit_tree.core.print_comment_bodies.cljs$core$IFn$_invoke$arity$1(G__41526) : reddit_tree.core.print_comment_bodies.call(null,G__41526));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comments_json))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.print_comment_bodies,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comments_json));
} else {
return null;
}
}
});
/**
 * Same as assoc, but skip the assoc if v is nil.
 */
reddit_tree.core._QMARK_assoc = (function reddit_tree$core$_QMARK_assoc(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41645 = arguments.length;
var i__4819__auto___41646 = (0);
while(true){
if((i__4819__auto___41646 < len__4818__auto___41645)){
args__4824__auto__.push((arguments[i__4819__auto___41646]));

var G__41647 = (i__4819__auto___41646 + (1));
i__4819__auto___41646 = G__41647;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return reddit_tree.core._QMARK_assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(reddit_tree.core._QMARK_assoc.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs))));
}));

(reddit_tree.core._QMARK_assoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reddit_tree.core._QMARK_assoc.cljs$lang$applyTo = (function (seq41530){
var G__41531 = cljs.core.first(seq41530);
var seq41530__$1 = cljs.core.next(seq41530);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41531,seq41530__$1);
}));

reddit_tree.core.is_map = (function reddit_tree$core$is_map(thing){
return (((thing instanceof cljs.core.PersistentHashMap)) || ((thing instanceof cljs.core.PersistentArrayMap)));
});
/**
 * Removes redundant data fields levels from json. And collapses :replies to :children.
 */
reddit_tree.core.simplify_comment_tree = (function reddit_tree$core$simplify_comment_tree(comments_json){
if(reddit_tree.core.is_map(comments_json)){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(comments_json);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(reddit_tree.core._QMARK_assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982),(cljs.core.truth_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(data))?(function (){var G__41538 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(data);
return (reddit_tree.core.simplify_comment_tree.cljs$core$IFn$_invoke$arity$1 ? reddit_tree.core.simplify_comment_tree.cljs$core$IFn$_invoke$arity$1(G__41538) : reddit_tree.core.simplify_comment_tree.call(null,G__41538));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"replies","replies",-1389888974).cljs$core$IFn$_invoke$arity$1(data)))?cljs.core.PersistentVector.EMPTY:((reddit_tree.core.is_map(new cljs.core.Keyword(null,"replies","replies",-1389888974).cljs$core$IFn$_invoke$arity$1(data)))?(function (){var G__41539 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"replies","replies",-1389888974).cljs$core$IFn$_invoke$arity$1(data)));
return (reddit_tree.core.simplify_comment_tree.cljs$core$IFn$_invoke$arity$1 ? reddit_tree.core.simplify_comment_tree.cljs$core$IFn$_invoke$arity$1(G__41539) : reddit_tree.core.simplify_comment_tree.call(null,G__41539));
})():cljs.core.PersistentVector.EMPTY
)))], 0)),new cljs.core.Keyword(null,"replies","replies",-1389888974));
} else {
if((comments_json instanceof cljs.core.PersistentVector)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.simplify_comment_tree,comments_json);
} else {
return comments_json;

}
}
});
/**
 * Removes all nil values, and all non-provided fields from the input json structure.
 */
reddit_tree.core.filter_fields = (function reddit_tree$core$filter_fields(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41648 = arguments.length;
var i__4819__auto___41649 = (0);
while(true){
if((i__4819__auto___41649 < len__4818__auto___41648)){
args__4824__auto__.push((arguments[i__4819__auto___41649]));

var G__41650 = (i__4819__auto___41649 + (1));
i__4819__auto___41649 = G__41650;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return reddit_tree.core.filter_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(reddit_tree.core.filter_fields.cljs$core$IFn$_invoke$arity$variadic = (function (comments_json,fields){
if((((comments_json instanceof cljs.core.PersistentHashMap)) || ((comments_json instanceof cljs.core.PersistentArrayMap)))){
var non_nil_fields = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return (!(((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(comments_json) : f.call(null,comments_json)) == null)));
}),fields);
return cljs.core.zipmap(non_nil_fields,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reddit_tree.core.filter_fields,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(comments_json) : f.call(null,comments_json)),fields);
}),non_nil_fields));
} else {
if((comments_json instanceof cljs.core.PersistentVector)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(reddit_tree.core.filter_fields,e,fields);
}),comments_json);
} else {
return comments_json;

}
}
}));

(reddit_tree.core.filter_fields.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reddit_tree.core.filter_fields.cljs$lang$applyTo = (function (seq41540){
var G__41541 = cljs.core.first(seq41540);
var seq41540__$1 = cljs.core.next(seq41540);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41541,seq41540__$1);
}));

reddit_tree.core.example_data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),(2),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(1),new cljs.core.Keyword(null,"body","body",-2049205669),"A",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(1),new cljs.core.Keyword(null,"body","body",-2049205669),"B",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(1),new cljs.core.Keyword(null,"body","body",-2049205669),"C",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"body","body",-2049205669),"D",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(1),new cljs.core.Keyword(null,"body","body",-2049205669),"E",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(2),new cljs.core.Keyword(null,"body","body",-2049205669),"F",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"score","score",-1963588780),(1),new cljs.core.Keyword(null,"body","body",-2049205669),"G",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null)], null);
reddit_tree.core.example_graph = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"OP",new cljs.core.Keyword(null,"size","size",1098693007),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"A",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"B",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"C",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"D",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"E",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"F",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"G",new cljs.core.Keyword(null,"size","size",1098693007),(1)], null)], null),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"OP",new cljs.core.Keyword(null,"target","target",253001721),"A",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"OP",new cljs.core.Keyword(null,"target","target",253001721),"B",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"OP",new cljs.core.Keyword(null,"target","target",253001721),"C",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"OP",new cljs.core.Keyword(null,"target","target",253001721),"D",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"D",new cljs.core.Keyword(null,"target","target",253001721),"E",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"D",new cljs.core.Keyword(null,"target","target",253001721),"G",new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),"E",new cljs.core.Keyword(null,"target","target",253001721),"F",new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null)], null);
reddit_tree.core.score_to_value = (function reddit_tree$core$score_to_value(score){
if((score <= (0))){
return (1);
} else {
return ((5) + ((2) * Math.log10(score)));
}
});
reddit_tree.core.max_time_secs = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
reddit_tree.core.slider_secs_after_op = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
reddit_tree.core.min_opacity = 0.1;
reddit_tree.core.max_opacity = 1.0;
reddit_tree.core.time_to_opacity = (function reddit_tree$core$time_to_opacity(secs){
var time_frac = ((1) - (function (){var x__4298__auto__ = 1.0;
var y__4299__auto__ = (secs / cljs.core.deref(reddit_tree.core.max_time_secs));
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})());
return (reddit_tree.core.min_opacity + ((reddit_tree.core.max_opacity - reddit_tree.core.min_opacity) * time_frac));
});
reddit_tree.core.get_nodes = (function reddit_tree$core$get_nodes(var_args){
var G__41571 = arguments.length;
switch (G__41571) {
case 1:
return reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$1 = (function (comment){
return reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$2((0),comment);
}));

(reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$2 = (function (depth,comment){
var is_hash = typeof comment === 'string';
var is_op = (((!(is_hash))) && ((!(cljs.core.contains_QMARK_(comment,new cljs.core.Keyword(null,"body","body",-2049205669))))));
var size = reddit_tree.core.score_to_value(cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"score","score",-1963588780),(10)));
if(((is_op) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comment))))){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"depth","depth",1768663640)],[depth,((is_op)?"OP":((is_hash)?["hash_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment)].join(''):new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(comment)
)),size,cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048),(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"permalink","permalink",1009167849),""),((is_op)?1.0:reddit_tree.core.time_to_opacity(cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048),(0)))),cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048),(0)),cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"score","score",-1963588780),(0)),depth])], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.get_nodes,((1) + depth)),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comment))));
}
}));

(reddit_tree.core.get_nodes.cljs$lang$maxFixedArity = 2);

reddit_tree.core.get_links = (function reddit_tree$core$get_links(parent_name,comment){
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comment);
var is_hash = typeof comment === 'string';
var name = ((is_hash)?comment:cljs.core.get.cljs$core$IFn$_invoke$arity$3(comment,new cljs.core.Keyword(null,"body","body",-2049205669),"OP"));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),parent_name,new cljs.core.Keyword(null,"target","target",253001721),name,new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.get_links,name),children)));
});
reddit_tree.core.named_links_to_indexed_links = (function reddit_tree$core$named_links_to_indexed_links(nodes,links){
var name_to_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n),i], null);
}),nodes));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (link){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(link,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.get.cljs$core$IFn$_invoke$arity$2(name_to_idx,new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(link)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),cljs.core.get.cljs$core$IFn$_invoke$arity$2(name_to_idx,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(link))], 0));
}),links);
});
reddit_tree.core.make_reddit_comment_data_into_graph = (function reddit_tree$core$make_reddit_comment_data_into_graph(data){
var nodes = reddit_tree.core.get_nodes.cljs$core$IFn$_invoke$arity$1(data);
var links = reddit_tree.core.get_links("OP",data);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"links","links",-654507394),reddit_tree.core.named_links_to_indexed_links(nodes,links)], null);
});
reddit_tree.core.add_secs_after_op = (function reddit_tree$core$add_secs_after_op(post_data,comment_data){
var op_time = new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(post_data)));
if(reddit_tree.core.is_map(comment_data)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(comment_data,new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048),(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(comment_data) - op_time),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__41587 = post_data;
var G__41588 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comment_data);
return (reddit_tree.core.add_secs_after_op.cljs$core$IFn$_invoke$arity$2 ? reddit_tree.core.add_secs_after_op.cljs$core$IFn$_invoke$arity$2(G__41587,G__41588) : reddit_tree.core.add_secs_after_op.call(null,G__41587,G__41588));
})()], 0));
} else {
if((comment_data instanceof cljs.core.PersistentVector)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.add_secs_after_op,post_data),comment_data);
} else {
return comment_data;

}
}
});
reddit_tree.core.get_max_time_secs = (function reddit_tree$core$get_max_time_secs(comment_data){
if(reddit_tree.core.is_map(comment_data)){
var x__4295__auto__ = new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048).cljs$core$IFn$_invoke$arity$1(comment_data);
var y__4296__auto__ = (function (){var G__41592 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(comment_data);
return (reddit_tree.core.get_max_time_secs.cljs$core$IFn$_invoke$arity$1 ? reddit_tree.core.get_max_time_secs.cljs$core$IFn$_invoke$arity$1(G__41592) : reddit_tree.core.get_max_time_secs.call(null,G__41592));
})();
return ((x__4295__auto__ > y__4296__auto__) ? x__4295__auto__ : y__4296__auto__);
} else {
if((comment_data instanceof cljs.core.PersistentVector)){
if(cljs.core.empty_QMARK_(comment_data)){
return (0);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.get_max_time_secs,comment_data));
}
} else {
return comment_data;

}
}
});
reddit_tree.core.reddit_post_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empty","empty",767870958),"map"], null));
reddit_tree.core.reddit_comment_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"empty","empty",767870958),"map"], null));
reddit_tree.core.reddit_comment_graph = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentVector.EMPTY], null));
reddit_tree.core.update_reddit_data_BANG_ = (function reddit_tree$core$update_reddit_data_BANG_(link){
var c__32333__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32334__auto__ = (function (){var switch__32148__auto__ = (function (state_41629){
var state_val_41630 = (state_41629[(1)]);
if((state_val_41630 === (1))){
var inst_41599 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),".json?limit=10000"].join('');
var inst_41600 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_41601 = [false];
var inst_41602 = cljs.core.PersistentHashMap.fromArrays(inst_41600,inst_41601);
var inst_41603 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_41599,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_41602], 0));
var state_41629__$1 = state_41629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41629__$1,(2),inst_41603);
} else {
if((state_val_41630 === (2))){
var inst_41605 = (state_41629[(2)]);
var inst_41611 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_41605);
var inst_41613 = reddit_tree.core.filter_fields.cljs$core$IFn$_invoke$arity$variadic(inst_41611,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"selftext","selftext",621378021),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"replies","replies",-1389888974),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"permalink","permalink",1009167849)], 0));
var inst_41614 = reddit_tree.core.simplify_comment_tree(inst_41613);
var inst_41615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41614,(0),null);
var inst_41616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41614,(1),null);
var inst_41617 = reddit_tree.core.add_secs_after_op(inst_41615,inst_41616);
var inst_41618 = reddit_tree.core.get_max_time_secs(inst_41617);
var inst_41619 = cljs.core.reset_BANG_(reddit_tree.core.max_time_secs,inst_41618);
var inst_41620 = cljs.core.deref(reddit_tree.core.max_time_secs);
var inst_41621 = cljs.core.reset_BANG_(reddit_tree.core.slider_secs_after_op,inst_41620);
var inst_41622 = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(inst_41615);
var inst_41623 = cljs.core.first(inst_41622);
var inst_41624 = cljs.core.reset_BANG_(reddit_tree.core.reddit_post_data,inst_41623);
var inst_41625 = cljs.core.reset_BANG_(reddit_tree.core.reddit_comment_data,inst_41617);
var inst_41626 = reddit_tree.core.make_reddit_comment_data_into_graph(inst_41617);
var inst_41627 = cljs.core.reset_BANG_(reddit_tree.core.reddit_comment_graph,inst_41626);
var state_41629__$1 = (function (){var statearr_41631 = state_41629;
(statearr_41631[(7)] = inst_41625);

(statearr_41631[(8)] = inst_41621);

(statearr_41631[(9)] = inst_41619);

(statearr_41631[(10)] = inst_41624);

return statearr_41631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41629__$1,inst_41627);
} else {
return null;
}
}
});
return (function() {
var reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__ = null;
var reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____0 = (function (){
var statearr_41632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41632[(0)] = reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__);

(statearr_41632[(1)] = (1));

return statearr_41632;
});
var reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____1 = (function (state_41629){
while(true){
var ret_value__32150__auto__ = (function (){try{while(true){
var result__32151__auto__ = switch__32148__auto__(state_41629);
if(cljs.core.keyword_identical_QMARK_(result__32151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32151__auto__;
}
break;
}
}catch (e41633){var ex__32152__auto__ = e41633;
var statearr_41634_41652 = state_41629;
(statearr_41634_41652[(2)] = ex__32152__auto__);


if(cljs.core.seq((state_41629[(4)]))){
var statearr_41635_41653 = state_41629;
(statearr_41635_41653[(1)] = cljs.core.first((state_41629[(4)])));

} else {
throw ex__32152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41654 = state_41629;
state_41629 = G__41654;
continue;
} else {
return ret_value__32150__auto__;
}
break;
}
});
reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__ = function(state_41629){
switch(arguments.length){
case 0:
return reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____0.call(this);
case 1:
return reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____1.call(this,state_41629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$0 = reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____0;
reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__.cljs$core$IFn$_invoke$arity$1 = reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto____1;
return reddit_tree$core$update_reddit_data_BANG__$_state_machine__32149__auto__;
})()
})();
var state__32335__auto__ = (function (){var statearr_41636 = f__32334__auto__();
(statearr_41636[(6)] = c__32333__auto__);

return statearr_41636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32335__auto__);
}));

return c__32333__auto__;
});
reddit_tree.core.format_reddit_timestamp = (function reddit_tree$core$format_reddit_timestamp(timestamp){
return cljs_time.format.unparse(new cljs.core.Keyword(null,"rfc822","rfc822",-404628697).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),cljs_time.coerce.from_long(((1000) * timestamp)));
});
/**
 * Makes sure we can append .json to the given url and get a proper response from reddit.
 */
reddit_tree.core.sanitize_reddit_url = (function reddit_tree$core$sanitize_reddit_url(url){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,cljs.core.count(url),cljs.core.count(url)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,(0),cljs.core.count(url));
} else {
return url;
}
});
reddit_tree.core.url_input = (function reddit_tree$core$url_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
cljs.core.reset_BANG_(value,reddit_tree.core.sanitize_reddit_url(e.target.value));

return reddit_tree.core.update_reddit_data_BANG_(cljs.core.deref(value));
})], null)], null);
});
/**
 * Updates all nodes in reddit-comment-graph with the given function (that takes and returns a node).
 */
reddit_tree.core.update_nodes_BANG_ = (function reddit_tree$core$update_nodes_BANG_(update_func){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.reddit_comment_graph,(function (data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(function (nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(update_func,nodes);
}));
}));
});
reddit_tree.core.secs_after_op_log_slider = (function reddit_tree$core$secs_after_op_log_slider(value,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),Math.log(value),new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"min","min",444991522),0.01,new cljs.core.Keyword(null,"max","max",61366548),Math.log(max),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = e.target.value;
cljs.core.reset_BANG_(reddit_tree.core.slider_secs_after_op,Math.exp(new_value));

return reddit_tree.core.update_nodes_BANG_((function (node){
var selected_by_slider = ((0) <= (cljs.core.deref(reddit_tree.core.slider_secs_after_op) - new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048).cljs$core$IFn$_invoke$arity$1(node)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"opacity","opacity",397153780),((selected_by_slider)?(1):(0)));
}));
})], null)], null);
});
reddit_tree.core.secs_after_op_slider = (function reddit_tree$core$secs_after_op_slider(value,max){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var new_value = e.target.value;
cljs.core.reset_BANG_(reddit_tree.core.slider_secs_after_op,new_value);

return reddit_tree.core.update_nodes_BANG_((function (node){
var selected_by_slider = ((0) <= (cljs.core.deref(reddit_tree.core.slider_secs_after_op) - new cljs.core.Keyword(null,"secs-after-op","secs-after-op",-1126788048).cljs$core$IFn$_invoke$arity$1(node)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"opacity","opacity",397153780),((selected_by_slider)?(1):(0)));
}));
})], null)], null);
});
/**
 * Converts seconds to a string with hours, minutes, and seconds.
 */
reddit_tree.core.secs_to_days_hrs_mins_secs_str = (function reddit_tree$core$secs_to_days_hrs_mins_secs_str(secs){
var str_days = ((((secs / (60)) / (60)) / (24)) | (0));
var str_hours = (cljs.core.mod(((secs / (60)) / (60)),(24)) | (0));
var str_mins = (cljs.core.mod((secs / (60)),(60)) | (0));
var str_secs = (cljs.core.mod(secs,(60)) | (0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_days)," days, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_hours)," hours, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_mins)," minutes, and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(str_secs)," seconds."].join('');
});
reddit_tree.core.test_urls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://www.reddit.com/r/interestingasfuck/comments/qew7al/train_to_machu_picchu_with_a_balcony/","https://www.reddit.com/r/Hydroponics/comments/p6jlip/growing_medium_falling_out_of_net_pots"], null);
reddit_tree.core.home_page = (function reddit_tree$core$home_page(){
var input_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reddit_tree.core.test_urls,(0)));
reddit_tree.core.update_reddit_data_BANG_(cljs.core.deref(input_value));

return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Reddit Comment Analyzer"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter URL Here:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_tree.core.url_input,input_value], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_post_data))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)," posted on ",reddit_tree.core.format_reddit_timestamp(new cljs.core.Keyword(null,"created","created",-704993748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_post_data)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Scroll through time:",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_tree.core.secs_after_op_slider,cljs.core.deref(reddit_tree.core.slider_secs_after_op),cljs.core.deref(reddit_tree.core.max_time_secs)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Log scale:",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_tree.core.secs_after_op_log_slider,cljs.core.deref(reddit_tree.core.slider_secs_after_op),cljs.core.deref(reddit_tree.core.max_time_secs)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Time after OP: ",reddit_tree.core.secs_to_days_hrs_mins_secs_str(cljs.core.deref(reddit_tree.core.slider_secs_after_op))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_tree.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(reddit_tree.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reddit_tree.core.reddit_comment_graph], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Double click on nodes to go directly to the comment they ","represent."], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Each node in the graph is a comment. The nodes are sized by ","their score (upvotes - downvotes). Their opacity represents ","their posting time relative to the original post (OP) - darker ","is older (closer to OP). All comments will have the same ","(minimum) opacity if they were posted more than ",goog.string.format("%.2f",(((cljs.core.deref(reddit_tree.core.max_time_secs) / (60)) / (60)) / (24)))," days after the original post."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.count(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph)))," total comments,",new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41637_SHARP_){
return (new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41637_SHARP_) >= (1000));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score greater than 1000,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41638_SHARP_){
return ((((99) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41638_SHARP_))) && ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41638_SHARP_) < (1001))));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score between 100 and 1000,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41639_SHARP_){
return ((((49) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41639_SHARP_))) && ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41639_SHARP_) < (101))));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score between 50 and 100,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41640_SHARP_){
return ((((14) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41640_SHARP_))) && ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41640_SHARP_) < (51))));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score between 15 and 50,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41641_SHARP_){
return ((((6) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41641_SHARP_))) && ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41641_SHARP_) < (16))));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score between 5 and 15,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41642_SHARP_){
return ((((2) < new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41642_SHARP_))) && ((new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41642_SHARP_) < (6))));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score between 2 and 5,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41643_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41643_SHARP_),(1));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score of 1,"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__41644_SHARP_){
return (new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(p1__41644_SHARP_) < (0));
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(reddit_tree.core.reddit_comment_graph))))," with score less than 0."], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dev-notes"], null),"Source code can be found at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/kovasap/reddit-tree"], null),"github.com/kovasap/reddit-tree"], null),".",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"Raw Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Graph Data: ",cljs.core.deref(reddit_tree.core.reddit_comment_graph)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Post Data: ",cljs.core.deref(reddit_tree.core.reddit_post_data)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Comment Data: ",cljs.core.deref(reddit_tree.core.reddit_comment_data)], null)], null)], null)], null);
});
});
reddit_tree.core.mount_root = (function reddit_tree$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reddit_tree.core.home_page], null),document.getElementById("app"));
});
reddit_tree.core.init_BANG_ = (function reddit_tree$core$init_BANG_(){
return reddit_tree.core.mount_root();
});
goog.exportSymbol('reddit_tree.core.init_BANG_', reddit_tree.core.init_BANG_);

//# sourceMappingURL=reddit_tree.core.js.map
