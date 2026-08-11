goog.provide('reddit_tree.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
reddit_tree.graph.html = (function reddit_tree$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
reddit_tree.graph.create_sim = (function reddit_tree$graph$create_sim(viz_state){
var map__10443 = cljs.core.deref(viz_state);
var map__10443__$1 = cljs.core.__destructure_map(map__10443);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10443__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10443__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__10444 = d3.forceSimulation();
G__10444.stop();

G__10444.force("link",d3.forceLink().strength(1.2).id((function (p1__10436_SHARP_){
return p1__10436_SHARP_.index;
})));

G__10444.force("charge",d3.forceManyBody());

G__10444.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__10444.on("tick",(function (){
var temp__5753__auto___10465 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___10465)){
var s_10466 = temp__5753__auto___10465;
rid3.attrs.attrs(s_10466,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__10437_SHARP_){
return p1__10437_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__10438_SHARP_){
return p1__10438_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__10439_SHARP_){
return p1__10439_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__10440_SHARP_){
return p1__10440_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cx","cx",1272694324),(function (p1__10441_SHARP_){
return p1__10441_SHARP_.x;
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cy","cy",755331060),(function (p1__10442_SHARP_){
return p1__10442_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__10444;
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
var seq__10445_10467 = cljs.core.seq(new$);
var chunk__10446_10468 = null;
var count__10447_10469 = (0);
var i__10448_10470 = (0);
while(true){
if((i__10448_10470 < count__10447_10469)){
var n_10471 = chunk__10446_10468.cljs$core$IIndexed$_nth$arity$2(null,i__10448_10470);
var temp__5753__auto___10472 = (orig[(function (){var G__10451 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_10471) : id.call(null,n_10471));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__10451) : orig_map.call(null,G__10451));
})()]);
if(cljs.core.truth_(temp__5753__auto___10472)){
var old_10473 = temp__5753__auto___10472;
var temp__5753__auto___10474__$1 = old_10473.x;
if(cljs.core.truth_(temp__5753__auto___10474__$1)){
var x_10475 = temp__5753__auto___10474__$1;
(n_10471.x = x_10475);
} else {
}

var temp__5753__auto___10476__$1 = old_10473.y;
if(cljs.core.truth_(temp__5753__auto___10476__$1)){
var y_10477 = temp__5753__auto___10476__$1;
(n_10471.y = y_10477);
} else {
}

var temp__5753__auto___10478__$1 = old_10473.vx;
if(cljs.core.truth_(temp__5753__auto___10478__$1)){
var vx_10479 = temp__5753__auto___10478__$1;
(n_10471.vx = vx_10479);
} else {
}

var temp__5753__auto___10480__$1 = old_10473.vy;
if(cljs.core.truth_(temp__5753__auto___10480__$1)){
var vy_10481 = temp__5753__auto___10480__$1;
(n_10471.vy = vy_10481);
} else {
}

var temp__5753__auto___10482__$1 = old_10473.fx;
if(cljs.core.truth_(temp__5753__auto___10482__$1)){
var fx_10483 = temp__5753__auto___10482__$1;
(n_10471.fx = fx_10483);
} else {
}

var temp__5753__auto___10484__$1 = old_10473.fy;
if(cljs.core.truth_(temp__5753__auto___10484__$1)){
var fy_10485 = temp__5753__auto___10484__$1;
(n_10471.fy = fy_10485);
} else {
}
} else {
}


var G__10486 = seq__10445_10467;
var G__10487 = chunk__10446_10468;
var G__10488 = count__10447_10469;
var G__10489 = (i__10448_10470 + (1));
seq__10445_10467 = G__10486;
chunk__10446_10468 = G__10487;
count__10447_10469 = G__10488;
i__10448_10470 = G__10489;
continue;
} else {
var temp__5753__auto___10490 = cljs.core.seq(seq__10445_10467);
if(temp__5753__auto___10490){
var seq__10445_10491__$1 = temp__5753__auto___10490;
if(cljs.core.chunked_seq_QMARK_(seq__10445_10491__$1)){
var c__4638__auto___10492 = cljs.core.chunk_first(seq__10445_10491__$1);
var G__10493 = cljs.core.chunk_rest(seq__10445_10491__$1);
var G__10494 = c__4638__auto___10492;
var G__10495 = cljs.core.count(c__4638__auto___10492);
var G__10496 = (0);
seq__10445_10467 = G__10493;
chunk__10446_10468 = G__10494;
count__10447_10469 = G__10495;
i__10448_10470 = G__10496;
continue;
} else {
var n_10497 = cljs.core.first(seq__10445_10491__$1);
var temp__5753__auto___10498__$1 = (orig[(function (){var G__10452 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_10497) : id.call(null,n_10497));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__10452) : orig_map.call(null,G__10452));
})()]);
if(cljs.core.truth_(temp__5753__auto___10498__$1)){
var old_10499 = temp__5753__auto___10498__$1;
var temp__5753__auto___10500__$2 = old_10499.x;
if(cljs.core.truth_(temp__5753__auto___10500__$2)){
var x_10501 = temp__5753__auto___10500__$2;
(n_10497.x = x_10501);
} else {
}

var temp__5753__auto___10502__$2 = old_10499.y;
if(cljs.core.truth_(temp__5753__auto___10502__$2)){
var y_10503 = temp__5753__auto___10502__$2;
(n_10497.y = y_10503);
} else {
}

var temp__5753__auto___10504__$2 = old_10499.vx;
if(cljs.core.truth_(temp__5753__auto___10504__$2)){
var vx_10505 = temp__5753__auto___10504__$2;
(n_10497.vx = vx_10505);
} else {
}

var temp__5753__auto___10506__$2 = old_10499.vy;
if(cljs.core.truth_(temp__5753__auto___10506__$2)){
var vy_10507 = temp__5753__auto___10506__$2;
(n_10497.vy = vy_10507);
} else {
}

var temp__5753__auto___10508__$2 = old_10499.fx;
if(cljs.core.truth_(temp__5753__auto___10508__$2)){
var fx_10509 = temp__5753__auto___10508__$2;
(n_10497.fx = fx_10509);
} else {
}

var temp__5753__auto___10510__$2 = old_10499.fy;
if(cljs.core.truth_(temp__5753__auto___10510__$2)){
var fy_10511 = temp__5753__auto___10510__$2;
(n_10497.fy = fy_10511);
} else {
}
} else {
}


var G__10512 = cljs.core.next(seq__10445_10491__$1);
var G__10513 = null;
var G__10514 = (0);
var G__10515 = (0);
seq__10445_10467 = G__10512;
chunk__10446_10468 = G__10513;
count__10447_10469 = G__10514;
i__10448_10470 = G__10515;
continue;
}
} else {
}
}
break;
}

return new$;
});
reddit_tree.graph.update_sim_BANG_ = (function reddit_tree$graph$update_sim_BANG_(sim,alpha_target,p__10454){
var map__10455 = p__10454;
var map__10455__$1 = cljs.core.__destructure_map(map__10455);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10455__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = reddit_tree.graph.merge_nodes(old_nodes,nodes,(function (p1__10453_SHARP_){
return p1__10453_SHARP_.name;
}));
var G__10456 = sim;
G__10456.nodes(new_nodes);

G__10456.force("link").links(links);

G__10456.alpha(alpha_target);

G__10456.restart();

return G__10456;
});
reddit_tree.graph.viz = (function reddit_tree$graph$viz(ratom){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = reddit_tree.graph.create_sim(viz_state);
var drag = reddit_tree.graph.create_drag(sim);
var color = d3.scaleOrdinal(d3.schemeSet1);
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rid3-force-demo",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__10463_10516 = cljs.core.deref(viz_state);
var map__10463_10517__$1 = cljs.core.__destructure_map(map__10463_10516);
var width_10518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10463_10517__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_10519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10463_10517__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_10518,new cljs.core.Keyword(null,"height","height",1025178622),height_10519,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_10518,height_10519]], null));

return reddit_tree.graph.update_sim_BANG_(sim,(1),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return reddit_tree.graph.update_sim_BANG_(sim,0.3,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__10457_SHARP_){
return Math.sqrt(p1__10457_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"circle",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"r","r",-471384190),(function (p1__10458_SHARP_){
return p1__10458_SHARP_.size;
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__10459_SHARP_){
var G__10464 = p1__10459_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__10464) : color.call(null,G__10464));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__10460_SHARP_){
return p1__10460_SHARP_.opacity;
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

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(-100),new cljs.core.Keyword(null,"cy","cy",755331060),(-100),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__10461_SHARP_){
return ["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10461_SHARP_.id)].join('');
})], null)).html((function (p1__10462_SHARP_){
return reddit_tree.graph.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text-div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p1__10462_SHARP_.name], null)], null));
}));
})], null)], null)], null)], null);
});
});
reddit_tree.graph.prechew = (function reddit_tree$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=reddit_tree.graph.js.map
