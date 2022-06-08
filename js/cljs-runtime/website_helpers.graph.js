goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__82595 = cljs.core.deref(viz_state);
var map__82595__$1 = cljs.core.__destructure_map(map__82595);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82595__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__82596 = d3.forceSimulation();
G__82596.stop();

G__82596.force("link",d3.forceLink().strength(link_strength).id((function (p1__82587_SHARP_){
return p1__82587_SHARP_.index;
})));

G__82596.force("charge",d3.forceManyBody().strength(charge_strength));

G__82596.force("center",d3.forceCenter(center_x,center_y));

G__82596.force("collide",d3.forceCollide(collide_size));

G__82596.on("tick",(function (){
var temp__5753__auto___82616 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___82616)){
var s_82617 = temp__5753__auto___82616;
rid3.attrs.attrs(s_82617,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__82588_SHARP_){
return p1__82588_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__82589_SHARP_){
return p1__82589_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__82590_SHARP_){
return p1__82590_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__82591_SHARP_){
return p1__82591_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__82592_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82592_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__82592_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__82593_SHARP_){
return p1__82593_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__82594_SHARP_){
return p1__82594_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__82596;
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
var seq__82597_82618 = cljs.core.seq(new$);
var chunk__82598_82619 = null;
var count__82599_82620 = (0);
var i__82600_82621 = (0);
while(true){
if((i__82600_82621 < count__82599_82620)){
var n_82622 = chunk__82598_82619.cljs$core$IIndexed$_nth$arity$2(null,i__82600_82621);
var temp__5753__auto___82623 = (orig[(function (){var G__82603 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_82622) : id.call(null,n_82622));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__82603) : orig_map.call(null,G__82603));
})()]);
if(cljs.core.truth_(temp__5753__auto___82623)){
var old_82624 = temp__5753__auto___82623;
var temp__5753__auto___82625__$1 = old_82624.x;
if(cljs.core.truth_(temp__5753__auto___82625__$1)){
var x_82626 = temp__5753__auto___82625__$1;
(n_82622.x = x_82626);
} else {
}

var temp__5753__auto___82627__$1 = old_82624.y;
if(cljs.core.truth_(temp__5753__auto___82627__$1)){
var y_82628 = temp__5753__auto___82627__$1;
(n_82622.y = y_82628);
} else {
}

var temp__5753__auto___82629__$1 = old_82624.vx;
if(cljs.core.truth_(temp__5753__auto___82629__$1)){
var vx_82630 = temp__5753__auto___82629__$1;
(n_82622.vx = vx_82630);
} else {
}

var temp__5753__auto___82631__$1 = old_82624.vy;
if(cljs.core.truth_(temp__5753__auto___82631__$1)){
var vy_82632 = temp__5753__auto___82631__$1;
(n_82622.vy = vy_82632);
} else {
}

var temp__5753__auto___82633__$1 = old_82624.fx;
if(cljs.core.truth_(temp__5753__auto___82633__$1)){
var fx_82634 = temp__5753__auto___82633__$1;
(n_82622.fx = fx_82634);
} else {
}

var temp__5753__auto___82635__$1 = old_82624.fy;
if(cljs.core.truth_(temp__5753__auto___82635__$1)){
var fy_82636 = temp__5753__auto___82635__$1;
(n_82622.fy = fy_82636);
} else {
}
} else {
}


var G__82637 = seq__82597_82618;
var G__82638 = chunk__82598_82619;
var G__82639 = count__82599_82620;
var G__82640 = (i__82600_82621 + (1));
seq__82597_82618 = G__82637;
chunk__82598_82619 = G__82638;
count__82599_82620 = G__82639;
i__82600_82621 = G__82640;
continue;
} else {
var temp__5753__auto___82641 = cljs.core.seq(seq__82597_82618);
if(temp__5753__auto___82641){
var seq__82597_82642__$1 = temp__5753__auto___82641;
if(cljs.core.chunked_seq_QMARK_(seq__82597_82642__$1)){
var c__4679__auto___82643 = cljs.core.chunk_first(seq__82597_82642__$1);
var G__82644 = cljs.core.chunk_rest(seq__82597_82642__$1);
var G__82645 = c__4679__auto___82643;
var G__82646 = cljs.core.count(c__4679__auto___82643);
var G__82647 = (0);
seq__82597_82618 = G__82644;
chunk__82598_82619 = G__82645;
count__82599_82620 = G__82646;
i__82600_82621 = G__82647;
continue;
} else {
var n_82648 = cljs.core.first(seq__82597_82642__$1);
var temp__5753__auto___82649__$1 = (orig[(function (){var G__82604 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_82648) : id.call(null,n_82648));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__82604) : orig_map.call(null,G__82604));
})()]);
if(cljs.core.truth_(temp__5753__auto___82649__$1)){
var old_82650 = temp__5753__auto___82649__$1;
var temp__5753__auto___82651__$2 = old_82650.x;
if(cljs.core.truth_(temp__5753__auto___82651__$2)){
var x_82652 = temp__5753__auto___82651__$2;
(n_82648.x = x_82652);
} else {
}

var temp__5753__auto___82653__$2 = old_82650.y;
if(cljs.core.truth_(temp__5753__auto___82653__$2)){
var y_82654 = temp__5753__auto___82653__$2;
(n_82648.y = y_82654);
} else {
}

var temp__5753__auto___82655__$2 = old_82650.vx;
if(cljs.core.truth_(temp__5753__auto___82655__$2)){
var vx_82660 = temp__5753__auto___82655__$2;
(n_82648.vx = vx_82660);
} else {
}

var temp__5753__auto___82661__$2 = old_82650.vy;
if(cljs.core.truth_(temp__5753__auto___82661__$2)){
var vy_82662 = temp__5753__auto___82661__$2;
(n_82648.vy = vy_82662);
} else {
}

var temp__5753__auto___82663__$2 = old_82650.fx;
if(cljs.core.truth_(temp__5753__auto___82663__$2)){
var fx_82664 = temp__5753__auto___82663__$2;
(n_82648.fx = fx_82664);
} else {
}

var temp__5753__auto___82665__$2 = old_82650.fy;
if(cljs.core.truth_(temp__5753__auto___82665__$2)){
var fy_82666 = temp__5753__auto___82665__$2;
(n_82648.fy = fy_82666);
} else {
}
} else {
}


var G__82667 = cljs.core.next(seq__82597_82642__$1);
var G__82668 = null;
var G__82669 = (0);
var G__82670 = (0);
seq__82597_82618 = G__82667;
chunk__82598_82619 = G__82668;
count__82599_82620 = G__82669;
i__82600_82621 = G__82670;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__82606){
var map__82607 = p__82606;
var map__82607__$1 = cljs.core.__destructure_map(map__82607);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82607__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82607__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__82605_SHARP_){
return p1__82605_SHARP_.name;
}));
var G__82608 = sim;
G__82608.nodes(new_nodes);

G__82608.force("link").links(links);

G__82608.alpha(alpha_target);

G__82608.restart();

return G__82608;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__82609_SHARP_){
return ((3) * cljs.core.count(p1__82609_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__82610_SHARP_){
return ((function (){var x__4336__auto__ = (25);
var y__4337__auto__ = p1__82610_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() / (2));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__82611_SHARP_){
var G__82614 = p1__82611_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__82614) : color.call(null,G__82614));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"x-small",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__82612_SHARP_){
return p1__82612_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__82615 = cljs.core.deref(viz_state);
var map__82615__$1 = cljs.core.__destructure_map(map__82615);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82615__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82615__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82615__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__82613_SHARP_){
return (Math.sqrt(p1__82613_SHARP_.value) / (2));
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
