goog.provide('reddit_tree.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
reddit_tree.graph.html = (function reddit_tree$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
reddit_tree.graph.create_sim = (function reddit_tree$graph$create_sim(viz_state){
var map__40413 = cljs.core.deref(viz_state);
var map__40413__$1 = cljs.core.__destructure_map(map__40413);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40413__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40413__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__40414 = d3.forceSimulation();
G__40414.stop();

G__40414.force("link",d3.forceLink().strength(1.2).id((function (p1__40406_SHARP_){
return p1__40406_SHARP_.index;
})));

G__40414.force("charge",d3.forceManyBody());

G__40414.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__40414.on("tick",(function (){
var temp__5753__auto___40520 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___40520)){
var s_40521 = temp__5753__auto___40520;
rid3.attrs.attrs(s_40521,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__40407_SHARP_){
return p1__40407_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__40408_SHARP_){
return p1__40408_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__40409_SHARP_){
return p1__40409_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__40410_SHARP_){
return p1__40410_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cx","cx",1272694324),(function (p1__40411_SHARP_){
return p1__40411_SHARP_.x;
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cy","cy",755331060),(function (p1__40412_SHARP_){
return p1__40412_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__40414;
});
reddit_tree.graph.create_drag = (function reddit_tree$graph$create_drag(sim){
return d3.drag().on("start",(function reddit_tree$graph$create_drag_$_started(event,d,_){
if((event.active === (0))){
sim.alphaTarget(0.3).restart();
} else {
}

(d.fx = d.x);

return (d.fy = d.y);
})).on("drag",(function reddit_tree$graph$create_drag_$_dragged(event,d,_){
(d.fx = event.x);

return (d.fy = event.y);
})).on("end",(function reddit_tree$graph$create_drag_$_ended(event,d,_){
if((event.active === (0))){
sim.alphaTarget((0));
} else {
}

(d.fx = null);

return (d.fy = null);
}));
});
reddit_tree.graph.merge_nodes = (function reddit_tree$graph$merge_nodes(orig,new$,id){
var orig_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n) : id.call(null,n)),i], null);
}),orig));
var seq__40424_40531 = cljs.core.seq(new$);
var chunk__40425_40532 = null;
var count__40426_40533 = (0);
var i__40427_40534 = (0);
while(true){
if((i__40427_40534 < count__40426_40533)){
var n_40535 = chunk__40425_40532.cljs$core$IIndexed$_nth$arity$2(null,i__40427_40534);
var temp__5753__auto___40536 = (orig[(function (){var G__40449 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40535) : id.call(null,n_40535));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40449) : orig_map.call(null,G__40449));
})()]);
if(cljs.core.truth_(temp__5753__auto___40536)){
var old_40537 = temp__5753__auto___40536;
var temp__5753__auto___40538__$1 = old_40537.x;
if(cljs.core.truth_(temp__5753__auto___40538__$1)){
var x_40539 = temp__5753__auto___40538__$1;
(n_40535.x = x_40539);
} else {
}

var temp__5753__auto___40540__$1 = old_40537.y;
if(cljs.core.truth_(temp__5753__auto___40540__$1)){
var y_40541 = temp__5753__auto___40540__$1;
(n_40535.y = y_40541);
} else {
}

var temp__5753__auto___40542__$1 = old_40537.vx;
if(cljs.core.truth_(temp__5753__auto___40542__$1)){
var vx_40543 = temp__5753__auto___40542__$1;
(n_40535.vx = vx_40543);
} else {
}

var temp__5753__auto___40544__$1 = old_40537.vy;
if(cljs.core.truth_(temp__5753__auto___40544__$1)){
var vy_40545 = temp__5753__auto___40544__$1;
(n_40535.vy = vy_40545);
} else {
}

var temp__5753__auto___40546__$1 = old_40537.fx;
if(cljs.core.truth_(temp__5753__auto___40546__$1)){
var fx_40547 = temp__5753__auto___40546__$1;
(n_40535.fx = fx_40547);
} else {
}

var temp__5753__auto___40548__$1 = old_40537.fy;
if(cljs.core.truth_(temp__5753__auto___40548__$1)){
var fy_40549 = temp__5753__auto___40548__$1;
(n_40535.fy = fy_40549);
} else {
}
} else {
}


var G__40551 = seq__40424_40531;
var G__40552 = chunk__40425_40532;
var G__40553 = count__40426_40533;
var G__40554 = (i__40427_40534 + (1));
seq__40424_40531 = G__40551;
chunk__40425_40532 = G__40552;
count__40426_40533 = G__40553;
i__40427_40534 = G__40554;
continue;
} else {
var temp__5753__auto___40555 = cljs.core.seq(seq__40424_40531);
if(temp__5753__auto___40555){
var seq__40424_40556__$1 = temp__5753__auto___40555;
if(cljs.core.chunked_seq_QMARK_(seq__40424_40556__$1)){
var c__4638__auto___40557 = cljs.core.chunk_first(seq__40424_40556__$1);
var G__40558 = cljs.core.chunk_rest(seq__40424_40556__$1);
var G__40559 = c__4638__auto___40557;
var G__40560 = cljs.core.count(c__4638__auto___40557);
var G__40561 = (0);
seq__40424_40531 = G__40558;
chunk__40425_40532 = G__40559;
count__40426_40533 = G__40560;
i__40427_40534 = G__40561;
continue;
} else {
var n_40562 = cljs.core.first(seq__40424_40556__$1);
var temp__5753__auto___40563__$1 = (orig[(function (){var G__40458 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40562) : id.call(null,n_40562));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40458) : orig_map.call(null,G__40458));
})()]);
if(cljs.core.truth_(temp__5753__auto___40563__$1)){
var old_40565 = temp__5753__auto___40563__$1;
var temp__5753__auto___40566__$2 = old_40565.x;
if(cljs.core.truth_(temp__5753__auto___40566__$2)){
var x_40567 = temp__5753__auto___40566__$2;
(n_40562.x = x_40567);
} else {
}

var temp__5753__auto___40568__$2 = old_40565.y;
if(cljs.core.truth_(temp__5753__auto___40568__$2)){
var y_40570 = temp__5753__auto___40568__$2;
(n_40562.y = y_40570);
} else {
}

var temp__5753__auto___40572__$2 = old_40565.vx;
if(cljs.core.truth_(temp__5753__auto___40572__$2)){
var vx_40573 = temp__5753__auto___40572__$2;
(n_40562.vx = vx_40573);
} else {
}

var temp__5753__auto___40574__$2 = old_40565.vy;
if(cljs.core.truth_(temp__5753__auto___40574__$2)){
var vy_40575 = temp__5753__auto___40574__$2;
(n_40562.vy = vy_40575);
} else {
}

var temp__5753__auto___40577__$2 = old_40565.fx;
if(cljs.core.truth_(temp__5753__auto___40577__$2)){
var fx_40581 = temp__5753__auto___40577__$2;
(n_40562.fx = fx_40581);
} else {
}

var temp__5753__auto___40582__$2 = old_40565.fy;
if(cljs.core.truth_(temp__5753__auto___40582__$2)){
var fy_40584 = temp__5753__auto___40582__$2;
(n_40562.fy = fy_40584);
} else {
}
} else {
}


var G__40585 = cljs.core.next(seq__40424_40556__$1);
var G__40586 = null;
var G__40587 = (0);
var G__40588 = (0);
seq__40424_40531 = G__40585;
chunk__40425_40532 = G__40586;
count__40426_40533 = G__40587;
i__40427_40534 = G__40588;
continue;
}
} else {
}
}
break;
}

return new$;
});
reddit_tree.graph.update_sim_BANG_ = (function reddit_tree$graph$update_sim_BANG_(sim,alpha_target,p__40476){
var map__40477 = p__40476;
var map__40477__$1 = cljs.core.__destructure_map(map__40477);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40477__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40477__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = reddit_tree.graph.merge_nodes(old_nodes,nodes,(function (p1__40475_SHARP_){
return p1__40475_SHARP_.name;
}));
var G__40482 = sim;
G__40482.nodes(new_nodes);

G__40482.force("link").links(links);

G__40482.alpha(alpha_target);

G__40482.restart();

return G__40482;
});
reddit_tree.graph.viz = (function reddit_tree$graph$viz(ratom){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = reddit_tree.graph.create_sim(viz_state);
var drag = reddit_tree.graph.create_drag(sim);
var color = d3.scaleOrdinal(d3.schemeSet1);
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rid3-force-demo",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__40494_40589 = cljs.core.deref(viz_state);
var map__40494_40590__$1 = cljs.core.__destructure_map(map__40494_40589);
var width_40591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494_40590__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_40592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40494_40590__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_40591,new cljs.core.Keyword(null,"height","height",1025178622),height_40592,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_40591,height_40592]], null));

return reddit_tree.graph.update_sim_BANG_(sim,(1),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return reddit_tree.graph.update_sim_BANG_(sim,0.3,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__40483_SHARP_){
return Math.sqrt(p1__40483_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"circle",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"r","r",-471384190),(function (p1__40484_SHARP_){
return p1__40484_SHARP_.size;
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__40485_SHARP_){
var G__40504 = p1__40485_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__40504) : color.call(null,G__40504));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__40486_SHARP_){
return p1__40486_SHARP_.opacity;
})], null)).on("mouseover",(function (_event,node){
return d3.selectAll(goog.string.format(".c%s",node.id)).attr("pointer-events","all").attr("x",(node.x - (150))).attr("y",(node.y + (10))).classed("hovered",true).classed("fade-out-active",false);
})).on("mouseout",(function (_event,node){
return d3.selectAll(goog.string.format(".c%s",node.id)).attr("pointer-events","none").classed("fade-out-active",true);
})).on("dblclick",(function (_event,node){
return window.open(["https://www.reddit.com",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.link)].join(''));
})).call(drag);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text",new cljs.core.Keyword(null,"tag","tag",-1290361223),"foreignObject",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(-100),new cljs.core.Keyword(null,"cy","cy",755331060),(-100),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__40491_SHARP_){
return ["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40491_SHARP_.id)].join('');
})], null)).html((function (p1__40492_SHARP_){
return reddit_tree.graph.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text-div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p1__40492_SHARP_.name], null)], null));
}));
})], null)], null)], null)], null);
});
});
reddit_tree.graph.prechew = (function reddit_tree$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=reddit_tree.graph.js.map
