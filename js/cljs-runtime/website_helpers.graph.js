goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__60345 = cljs.core.deref(viz_state);
var map__60345__$1 = cljs.core.__destructure_map(map__60345);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60345__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__60346 = d3.forceSimulation();
G__60346.stop();

G__60346.force("link",d3.forceLink().strength(link_strength).id((function (p1__60337_SHARP_){
return p1__60337_SHARP_.index;
})));

G__60346.force("charge",d3.forceManyBody().strength(charge_strength));

G__60346.force("center",d3.forceCenter(center_x,center_y));

G__60346.force("collide",d3.forceCollide(collide_size));

G__60346.on("tick",(function (){
var temp__5823__auto___60368 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto___60368)){
var s_60369 = temp__5823__auto___60368;
rid3.attrs.attrs(s_60369,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__60338_SHARP_){
return p1__60338_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__60339_SHARP_){
return p1__60339_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__60340_SHARP_){
return p1__60340_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__60341_SHARP_){
return p1__60341_SHARP_.target.y;
})], null));
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__60342_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60342_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__60342_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__60343_SHARP_){
return p1__60343_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__60344_SHARP_){
return p1__60344_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__60346;
});
website_helpers.graph.create_drag = (function website_helpers$graph$create_drag(sim){
return d3.drag().on("start",(function website_helpers$graph$create_drag_$_started(event,d,_){
if((event.active === (0))){
sim.alphaTarget(0.3).restart();
} else {
}

(d.fx = d.x);

return (d.fy = d.y);
})).on("drag",(function website_helpers$graph$create_drag_$_dragged(event,d,_){
(d.fx = event.x);

return (d.fy = event.y);
})).on("end",(function website_helpers$graph$create_drag_$_ended(event,d,_){
if((event.active === (0))){
sim.alphaTarget((0));
} else {
}

(d.fx = null);

return (d.fy = null);
}));
});
website_helpers.graph.merge_nodes = (function website_helpers$graph$merge_nodes(orig,new$,id){
var orig_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n) : id.call(null,n)),i], null);
}),orig));
var seq__60347_60370 = cljs.core.seq(new$);
var chunk__60348_60371 = null;
var count__60349_60372 = (0);
var i__60350_60373 = (0);
while(true){
if((i__60350_60373 < count__60349_60372)){
var n_60374 = chunk__60348_60371.cljs$core$IIndexed$_nth$arity$2(null,i__60350_60373);
var temp__5823__auto___60375 = (orig[(function (){var G__60353 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_60374) : id.call(null,n_60374));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__60353) : orig_map.call(null,G__60353));
})()]);
if(cljs.core.truth_(temp__5823__auto___60375)){
var old_60376 = temp__5823__auto___60375;
var temp__5823__auto___60377__$1 = old_60376.x;
if(cljs.core.truth_(temp__5823__auto___60377__$1)){
var x_60378 = temp__5823__auto___60377__$1;
(n_60374.x = x_60378);
} else {
}

var temp__5823__auto___60379__$1 = old_60376.y;
if(cljs.core.truth_(temp__5823__auto___60379__$1)){
var y_60380 = temp__5823__auto___60379__$1;
(n_60374.y = y_60380);
} else {
}

var temp__5823__auto___60381__$1 = old_60376.vx;
if(cljs.core.truth_(temp__5823__auto___60381__$1)){
var vx_60382 = temp__5823__auto___60381__$1;
(n_60374.vx = vx_60382);
} else {
}

var temp__5823__auto___60383__$1 = old_60376.vy;
if(cljs.core.truth_(temp__5823__auto___60383__$1)){
var vy_60384 = temp__5823__auto___60383__$1;
(n_60374.vy = vy_60384);
} else {
}

var temp__5823__auto___60385__$1 = old_60376.fx;
if(cljs.core.truth_(temp__5823__auto___60385__$1)){
var fx_60386 = temp__5823__auto___60385__$1;
(n_60374.fx = fx_60386);
} else {
}

var temp__5823__auto___60387__$1 = old_60376.fy;
if(cljs.core.truth_(temp__5823__auto___60387__$1)){
var fy_60388 = temp__5823__auto___60387__$1;
(n_60374.fy = fy_60388);
} else {
}
} else {
}


var G__60389 = seq__60347_60370;
var G__60390 = chunk__60348_60371;
var G__60391 = count__60349_60372;
var G__60392 = (i__60350_60373 + (1));
seq__60347_60370 = G__60389;
chunk__60348_60371 = G__60390;
count__60349_60372 = G__60391;
i__60350_60373 = G__60392;
continue;
} else {
var temp__5823__auto___60393 = cljs.core.seq(seq__60347_60370);
if(temp__5823__auto___60393){
var seq__60347_60394__$1 = temp__5823__auto___60393;
if(cljs.core.chunked_seq_QMARK_(seq__60347_60394__$1)){
var c__5568__auto___60395 = cljs.core.chunk_first(seq__60347_60394__$1);
var G__60396 = cljs.core.chunk_rest(seq__60347_60394__$1);
var G__60397 = c__5568__auto___60395;
var G__60398 = cljs.core.count(c__5568__auto___60395);
var G__60399 = (0);
seq__60347_60370 = G__60396;
chunk__60348_60371 = G__60397;
count__60349_60372 = G__60398;
i__60350_60373 = G__60399;
continue;
} else {
var n_60400 = cljs.core.first(seq__60347_60394__$1);
var temp__5823__auto___60401__$1 = (orig[(function (){var G__60354 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_60400) : id.call(null,n_60400));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__60354) : orig_map.call(null,G__60354));
})()]);
if(cljs.core.truth_(temp__5823__auto___60401__$1)){
var old_60402 = temp__5823__auto___60401__$1;
var temp__5823__auto___60403__$2 = old_60402.x;
if(cljs.core.truth_(temp__5823__auto___60403__$2)){
var x_60404 = temp__5823__auto___60403__$2;
(n_60400.x = x_60404);
} else {
}

var temp__5823__auto___60405__$2 = old_60402.y;
if(cljs.core.truth_(temp__5823__auto___60405__$2)){
var y_60406 = temp__5823__auto___60405__$2;
(n_60400.y = y_60406);
} else {
}

var temp__5823__auto___60407__$2 = old_60402.vx;
if(cljs.core.truth_(temp__5823__auto___60407__$2)){
var vx_60408 = temp__5823__auto___60407__$2;
(n_60400.vx = vx_60408);
} else {
}

var temp__5823__auto___60409__$2 = old_60402.vy;
if(cljs.core.truth_(temp__5823__auto___60409__$2)){
var vy_60410 = temp__5823__auto___60409__$2;
(n_60400.vy = vy_60410);
} else {
}

var temp__5823__auto___60411__$2 = old_60402.fx;
if(cljs.core.truth_(temp__5823__auto___60411__$2)){
var fx_60412 = temp__5823__auto___60411__$2;
(n_60400.fx = fx_60412);
} else {
}

var temp__5823__auto___60413__$2 = old_60402.fy;
if(cljs.core.truth_(temp__5823__auto___60413__$2)){
var fy_60414 = temp__5823__auto___60413__$2;
(n_60400.fy = fy_60414);
} else {
}
} else {
}


var G__60415 = cljs.core.next(seq__60347_60394__$1);
var G__60416 = null;
var G__60417 = (0);
var G__60418 = (0);
seq__60347_60370 = G__60415;
chunk__60348_60371 = G__60416;
count__60349_60372 = G__60417;
i__60350_60373 = G__60418;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__60356){
var map__60357 = p__60356;
var map__60357__$1 = cljs.core.__destructure_map(map__60357);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60357__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__60355_SHARP_){
return p1__60355_SHARP_.name;
}));
var G__60358 = sim;
G__60358.nodes(new_nodes);

G__60358.force("link").links(links);

G__60358.alpha(alpha_target);

G__60358.restart();

return G__60358;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__60359_SHARP_){
return (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),p1__60359_SHARP_.group))?(3):4.5) * cljs.core.count(p1__60359_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__60360_SHARP_){
return ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__60360_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__60361_SHARP_){
var G__60366 = p1__60361_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__60366) : color.call(null,G__60366));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__60362_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),p1__60362_SHARP_.group)){
return "small";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__60362_SHARP_.group)){
return "small";
} else {
return "x-small";

}
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__60363_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__60363_SHARP_.group)){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__60364_SHARP_){
return p1__60364_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__60367 = cljs.core.deref(viz_state);
var map__60367__$1 = cljs.core.__destructure_map(map__60367);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60367__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__60365_SHARP_){
return (Math.sqrt(p1__60365_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})], null)], null)], null)], null);
});
});
website_helpers.graph.prechew = (function website_helpers$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=website_helpers.graph.js.map
