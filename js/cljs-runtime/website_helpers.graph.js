goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__48037 = cljs.core.deref(viz_state);
var map__48037__$1 = cljs.core.__destructure_map(map__48037);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48037__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__48060 = d3.forceSimulation();
G__48060.stop();

G__48060.force("link",d3.forceLink().strength(link_strength).id((function (p1__48019_SHARP_){
return p1__48019_SHARP_.index;
})));

G__48060.force("charge",d3.forceManyBody().strength(charge_strength));

G__48060.force("center",d3.forceCenter(center_x,center_y));

G__48060.force("collide",d3.forceCollide(collide_size));

G__48060.on("tick",(function (){
var temp__5753__auto___48495 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___48495)){
var s_48498 = temp__5753__auto___48495;
rid3.attrs.attrs(s_48498,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__48023_SHARP_){
return p1__48023_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__48024_SHARP_){
return p1__48024_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__48026_SHARP_){
return p1__48026_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__48027_SHARP_){
return p1__48027_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__48028_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48028_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48028_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__48029_SHARP_){
return p1__48029_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__48030_SHARP_){
return p1__48030_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__48060;
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
var seq__48162_48513 = cljs.core.seq(new$);
var chunk__48163_48514 = null;
var count__48164_48515 = (0);
var i__48165_48516 = (0);
while(true){
if((i__48165_48516 < count__48164_48515)){
var n_48521 = chunk__48163_48514.cljs$core$IIndexed$_nth$arity$2(null,i__48165_48516);
var temp__5753__auto___48522 = (orig[(function (){var G__48274 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_48521) : id.call(null,n_48521));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__48274) : orig_map.call(null,G__48274));
})()]);
if(cljs.core.truth_(temp__5753__auto___48522)){
var old_48528 = temp__5753__auto___48522;
var temp__5753__auto___48529__$1 = old_48528.x;
if(cljs.core.truth_(temp__5753__auto___48529__$1)){
var x_48530 = temp__5753__auto___48529__$1;
(n_48521.x = x_48530);
} else {
}

var temp__5753__auto___48532__$1 = old_48528.y;
if(cljs.core.truth_(temp__5753__auto___48532__$1)){
var y_48534 = temp__5753__auto___48532__$1;
(n_48521.y = y_48534);
} else {
}

var temp__5753__auto___48537__$1 = old_48528.vx;
if(cljs.core.truth_(temp__5753__auto___48537__$1)){
var vx_48538 = temp__5753__auto___48537__$1;
(n_48521.vx = vx_48538);
} else {
}

var temp__5753__auto___48539__$1 = old_48528.vy;
if(cljs.core.truth_(temp__5753__auto___48539__$1)){
var vy_48541 = temp__5753__auto___48539__$1;
(n_48521.vy = vy_48541);
} else {
}

var temp__5753__auto___48545__$1 = old_48528.fx;
if(cljs.core.truth_(temp__5753__auto___48545__$1)){
var fx_48548 = temp__5753__auto___48545__$1;
(n_48521.fx = fx_48548);
} else {
}

var temp__5753__auto___48551__$1 = old_48528.fy;
if(cljs.core.truth_(temp__5753__auto___48551__$1)){
var fy_48553 = temp__5753__auto___48551__$1;
(n_48521.fy = fy_48553);
} else {
}
} else {
}


var G__48557 = seq__48162_48513;
var G__48558 = chunk__48163_48514;
var G__48559 = count__48164_48515;
var G__48560 = (i__48165_48516 + (1));
seq__48162_48513 = G__48557;
chunk__48163_48514 = G__48558;
count__48164_48515 = G__48559;
i__48165_48516 = G__48560;
continue;
} else {
var temp__5753__auto___48564 = cljs.core.seq(seq__48162_48513);
if(temp__5753__auto___48564){
var seq__48162_48565__$1 = temp__5753__auto___48564;
if(cljs.core.chunked_seq_QMARK_(seq__48162_48565__$1)){
var c__4679__auto___48566 = cljs.core.chunk_first(seq__48162_48565__$1);
var G__48567 = cljs.core.chunk_rest(seq__48162_48565__$1);
var G__48568 = c__4679__auto___48566;
var G__48569 = cljs.core.count(c__4679__auto___48566);
var G__48570 = (0);
seq__48162_48513 = G__48567;
chunk__48163_48514 = G__48568;
count__48164_48515 = G__48569;
i__48165_48516 = G__48570;
continue;
} else {
var n_48571 = cljs.core.first(seq__48162_48565__$1);
var temp__5753__auto___48574__$1 = (orig[(function (){var G__48343 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_48571) : id.call(null,n_48571));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__48343) : orig_map.call(null,G__48343));
})()]);
if(cljs.core.truth_(temp__5753__auto___48574__$1)){
var old_48577 = temp__5753__auto___48574__$1;
var temp__5753__auto___48578__$2 = old_48577.x;
if(cljs.core.truth_(temp__5753__auto___48578__$2)){
var x_48581 = temp__5753__auto___48578__$2;
(n_48571.x = x_48581);
} else {
}

var temp__5753__auto___48584__$2 = old_48577.y;
if(cljs.core.truth_(temp__5753__auto___48584__$2)){
var y_48586 = temp__5753__auto___48584__$2;
(n_48571.y = y_48586);
} else {
}

var temp__5753__auto___48587__$2 = old_48577.vx;
if(cljs.core.truth_(temp__5753__auto___48587__$2)){
var vx_48588 = temp__5753__auto___48587__$2;
(n_48571.vx = vx_48588);
} else {
}

var temp__5753__auto___48590__$2 = old_48577.vy;
if(cljs.core.truth_(temp__5753__auto___48590__$2)){
var vy_48592 = temp__5753__auto___48590__$2;
(n_48571.vy = vy_48592);
} else {
}

var temp__5753__auto___48593__$2 = old_48577.fx;
if(cljs.core.truth_(temp__5753__auto___48593__$2)){
var fx_48596 = temp__5753__auto___48593__$2;
(n_48571.fx = fx_48596);
} else {
}

var temp__5753__auto___48597__$2 = old_48577.fy;
if(cljs.core.truth_(temp__5753__auto___48597__$2)){
var fy_48598 = temp__5753__auto___48597__$2;
(n_48571.fy = fy_48598);
} else {
}
} else {
}


var G__48600 = cljs.core.next(seq__48162_48565__$1);
var G__48601 = null;
var G__48602 = (0);
var G__48603 = (0);
seq__48162_48513 = G__48600;
chunk__48163_48514 = G__48601;
count__48164_48515 = G__48602;
i__48165_48516 = G__48603;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__48395){
var map__48399 = p__48395;
var map__48399__$1 = cljs.core.__destructure_map(map__48399);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48399__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__48389_SHARP_){
return p1__48389_SHARP_.name;
}));
var G__48413 = sim;
G__48413.nodes(new_nodes);

G__48413.force("link").links(links);

G__48413.alpha(alpha_target);

G__48413.restart();

return G__48413;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-100),0.08,(750),null,null,(2000),(1000),(50),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__48433_SHARP_){
return ((5) * cljs.core.count(p1__48433_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__48435_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__48435_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__48438_SHARP_){
var G__48461 = p1__48438_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__48461) : color.call(null,G__48461));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__48440_SHARP_){
return p1__48440_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__48466 = cljs.core.deref(viz_state);
var map__48466__$1 = cljs.core.__destructure_map(map__48466);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48466__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48466__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48466__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__48447_SHARP_){
return Math.sqrt(p1__48447_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

add_circle(sel);

add_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.path)].join(''));
})).call(drag);
})], null)], null)], null)], null);
});
});
website_helpers.graph.prechew = (function website_helpers$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=website_helpers.graph.js.map
