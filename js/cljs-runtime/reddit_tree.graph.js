goog.provide('reddit_tree.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
reddit_tree.graph.html = (function reddit_tree$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
reddit_tree.graph.create_sim = (function reddit_tree$graph$create_sim(viz_state){
var map__32306 = cljs.core.deref(viz_state);
var map__32306__$1 = cljs.core.__destructure_map(map__32306);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32306__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32306__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__32307 = d3.forceSimulation();
G__32307.stop();

G__32307.force("link",d3.forceLink().strength(1.2).id((function (p1__32299_SHARP_){
return p1__32299_SHARP_.index;
})));

G__32307.force("charge",d3.forceManyBody());

G__32307.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__32307.on("tick",(function (){
var temp__5753__auto___32328 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___32328)){
var s_32329 = temp__5753__auto___32328;
rid3.attrs.attrs(s_32329,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__32300_SHARP_){
return p1__32300_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__32301_SHARP_){
return p1__32301_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__32302_SHARP_){
return p1__32302_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__32303_SHARP_){
return p1__32303_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cx","cx",1272694324),(function (p1__32304_SHARP_){
return p1__32304_SHARP_.x;
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cy","cy",755331060),(function (p1__32305_SHARP_){
return p1__32305_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__32307;
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
var seq__32308_32330 = cljs.core.seq(new$);
var chunk__32309_32331 = null;
var count__32310_32332 = (0);
var i__32311_32333 = (0);
while(true){
if((i__32311_32333 < count__32310_32332)){
var n_32334 = chunk__32309_32331.cljs$core$IIndexed$_nth$arity$2(null,i__32311_32333);
var temp__5753__auto___32335 = (orig[(function (){var G__32314 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_32334) : id.call(null,n_32334));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__32314) : orig_map.call(null,G__32314));
})()]);
if(cljs.core.truth_(temp__5753__auto___32335)){
var old_32336 = temp__5753__auto___32335;
var temp__5753__auto___32337__$1 = old_32336.x;
if(cljs.core.truth_(temp__5753__auto___32337__$1)){
var x_32338 = temp__5753__auto___32337__$1;
(n_32334.x = x_32338);
} else {
}

var temp__5753__auto___32340__$1 = old_32336.y;
if(cljs.core.truth_(temp__5753__auto___32340__$1)){
var y_32341 = temp__5753__auto___32340__$1;
(n_32334.y = y_32341);
} else {
}

var temp__5753__auto___32342__$1 = old_32336.vx;
if(cljs.core.truth_(temp__5753__auto___32342__$1)){
var vx_32343 = temp__5753__auto___32342__$1;
(n_32334.vx = vx_32343);
} else {
}

var temp__5753__auto___32344__$1 = old_32336.vy;
if(cljs.core.truth_(temp__5753__auto___32344__$1)){
var vy_32345 = temp__5753__auto___32344__$1;
(n_32334.vy = vy_32345);
} else {
}

var temp__5753__auto___32346__$1 = old_32336.fx;
if(cljs.core.truth_(temp__5753__auto___32346__$1)){
var fx_32347 = temp__5753__auto___32346__$1;
(n_32334.fx = fx_32347);
} else {
}

var temp__5753__auto___32348__$1 = old_32336.fy;
if(cljs.core.truth_(temp__5753__auto___32348__$1)){
var fy_32349 = temp__5753__auto___32348__$1;
(n_32334.fy = fy_32349);
} else {
}
} else {
}


var G__32350 = seq__32308_32330;
var G__32351 = chunk__32309_32331;
var G__32352 = count__32310_32332;
var G__32353 = (i__32311_32333 + (1));
seq__32308_32330 = G__32350;
chunk__32309_32331 = G__32351;
count__32310_32332 = G__32352;
i__32311_32333 = G__32353;
continue;
} else {
var temp__5753__auto___32354 = cljs.core.seq(seq__32308_32330);
if(temp__5753__auto___32354){
var seq__32308_32356__$1 = temp__5753__auto___32354;
if(cljs.core.chunked_seq_QMARK_(seq__32308_32356__$1)){
var c__4638__auto___32358 = cljs.core.chunk_first(seq__32308_32356__$1);
var G__32359 = cljs.core.chunk_rest(seq__32308_32356__$1);
var G__32360 = c__4638__auto___32358;
var G__32361 = cljs.core.count(c__4638__auto___32358);
var G__32362 = (0);
seq__32308_32330 = G__32359;
chunk__32309_32331 = G__32360;
count__32310_32332 = G__32361;
i__32311_32333 = G__32362;
continue;
} else {
var n_32363 = cljs.core.first(seq__32308_32356__$1);
var temp__5753__auto___32364__$1 = (orig[(function (){var G__32315 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_32363) : id.call(null,n_32363));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__32315) : orig_map.call(null,G__32315));
})()]);
if(cljs.core.truth_(temp__5753__auto___32364__$1)){
var old_32365 = temp__5753__auto___32364__$1;
var temp__5753__auto___32366__$2 = old_32365.x;
if(cljs.core.truth_(temp__5753__auto___32366__$2)){
var x_32367 = temp__5753__auto___32366__$2;
(n_32363.x = x_32367);
} else {
}

var temp__5753__auto___32368__$2 = old_32365.y;
if(cljs.core.truth_(temp__5753__auto___32368__$2)){
var y_32369 = temp__5753__auto___32368__$2;
(n_32363.y = y_32369);
} else {
}

var temp__5753__auto___32370__$2 = old_32365.vx;
if(cljs.core.truth_(temp__5753__auto___32370__$2)){
var vx_32371 = temp__5753__auto___32370__$2;
(n_32363.vx = vx_32371);
} else {
}

var temp__5753__auto___32372__$2 = old_32365.vy;
if(cljs.core.truth_(temp__5753__auto___32372__$2)){
var vy_32373 = temp__5753__auto___32372__$2;
(n_32363.vy = vy_32373);
} else {
}

var temp__5753__auto___32374__$2 = old_32365.fx;
if(cljs.core.truth_(temp__5753__auto___32374__$2)){
var fx_32375 = temp__5753__auto___32374__$2;
(n_32363.fx = fx_32375);
} else {
}

var temp__5753__auto___32376__$2 = old_32365.fy;
if(cljs.core.truth_(temp__5753__auto___32376__$2)){
var fy_32377 = temp__5753__auto___32376__$2;
(n_32363.fy = fy_32377);
} else {
}
} else {
}


var G__32378 = cljs.core.next(seq__32308_32356__$1);
var G__32379 = null;
var G__32380 = (0);
var G__32381 = (0);
seq__32308_32330 = G__32378;
chunk__32309_32331 = G__32379;
count__32310_32332 = G__32380;
i__32311_32333 = G__32381;
continue;
}
} else {
}
}
break;
}

return new$;
});
reddit_tree.graph.update_sim_BANG_ = (function reddit_tree$graph$update_sim_BANG_(sim,alpha_target,p__32317){
var map__32318 = p__32317;
var map__32318__$1 = cljs.core.__destructure_map(map__32318);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32318__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = reddit_tree.graph.merge_nodes(old_nodes,nodes,(function (p1__32316_SHARP_){
return p1__32316_SHARP_.name;
}));
var G__32319 = sim;
G__32319.nodes(new_nodes);

G__32319.force("link").links(links);

G__32319.alpha(alpha_target);

G__32319.restart();

return G__32319;
});
reddit_tree.graph.viz = (function reddit_tree$graph$viz(ratom){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = reddit_tree.graph.create_sim(viz_state);
var drag = reddit_tree.graph.create_drag(sim);
var color = d3.scaleOrdinal(d3.schemeSet1);
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rid3-force-demo",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__32326_32382 = cljs.core.deref(viz_state);
var map__32326_32383__$1 = cljs.core.__destructure_map(map__32326_32382);
var width_32384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32326_32383__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_32385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32326_32383__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_32384,new cljs.core.Keyword(null,"height","height",1025178622),height_32385,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_32384,height_32385]], null));

return reddit_tree.graph.update_sim_BANG_(sim,(1),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return reddit_tree.graph.update_sim_BANG_(sim,0.3,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__32320_SHARP_){
return Math.sqrt(p1__32320_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"circle",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"r","r",-471384190),(function (p1__32321_SHARP_){
return p1__32321_SHARP_.size;
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__32322_SHARP_){
var G__32327 = p1__32322_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__32327) : color.call(null,G__32327));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__32323_SHARP_){
return p1__32323_SHARP_.opacity;
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

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(-100),new cljs.core.Keyword(null,"cy","cy",755331060),(-100),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__32324_SHARP_){
return ["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32324_SHARP_.id)].join('');
})], null)).html((function (p1__32325_SHARP_){
return reddit_tree.graph.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text-div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p1__32325_SHARP_.name], null)], null));
}));
})], null)], null)], null)], null);
});
});
reddit_tree.graph.prechew = (function reddit_tree$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=reddit_tree.graph.js.map
