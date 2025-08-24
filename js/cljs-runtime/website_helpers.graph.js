goog.provide('website_helpers.graph');
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),node.group)))));
});
website_helpers.graph.node_name_length_to_multiline = (30);
website_helpers.graph.should_multiline_node_QMARK_ = (function website_helpers$graph$should_multiline_node_QMARK_(node){
return (website_helpers.graph.node_name_length_to_multiline < cljs.core.count(node.name));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__57488 = cljs.core.deref(viz_state);
var map__57488__$1 = cljs.core.__destructure_map(map__57488);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57488__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57488__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57488__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57488__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__57490 = d3.forceSimulation();
G__57490.stop();

G__57490.force("link",d3.forceLink().strength(0.07).id((function (p1__57471_SHARP_){
return p1__57471_SHARP_.index;
})));

G__57490.force("charge",d3.forceManyBody().distanceMax((800)).strength((-80)));

G__57490.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__57490.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__57472_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__57472_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57472_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__57490.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__57473_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__57473_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57473_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__57490.force("collide",d3.forceCollide((function (p1__57474_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__57474_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__57474_SHARP_))?(50):(35)));
})).strength(1.1));

G__57490.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__57475_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57475_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__57490.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__57476_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57476_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__57490.force("legendnodex",d3.forceX((0)).strength((function (p1__57477_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__57477_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__57490.on("tick",(function (){
var temp__5825__auto___57644 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___57644)){
var s_57646 = temp__5825__auto___57644;
rid3.attrs.attrs(s_57646,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__57478_SHARP_){
return p1__57478_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__57479_SHARP_){
return p1__57479_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__57480_SHARP_){
return p1__57480_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__57481_SHARP_){
return p1__57481_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__57482_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57482_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57482_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__57483_SHARP_){
return p1__57483_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__57484_SHARP_){
return p1__57484_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__57490;
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
var seq__57500_57657 = cljs.core.seq(new$);
var chunk__57501_57658 = null;
var count__57502_57659 = (0);
var i__57503_57660 = (0);
while(true){
if((i__57503_57660 < count__57502_57659)){
var n_57662 = chunk__57501_57658.cljs$core$IIndexed$_nth$arity$2(null,i__57503_57660);
var temp__5825__auto___57663 = (orig[(function (){var G__57526 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_57662) : id.call(null,n_57662));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__57526) : orig_map.call(null,G__57526));
})()]);
if(cljs.core.truth_(temp__5825__auto___57663)){
var old_57664 = temp__5825__auto___57663;
var temp__5825__auto___57665__$1 = old_57664.x;
if(cljs.core.truth_(temp__5825__auto___57665__$1)){
var x_57666 = temp__5825__auto___57665__$1;
(n_57662.x = x_57666);
} else {
}

var temp__5825__auto___57667__$1 = old_57664.y;
if(cljs.core.truth_(temp__5825__auto___57667__$1)){
var y_57668 = temp__5825__auto___57667__$1;
(n_57662.y = y_57668);
} else {
}

var temp__5825__auto___57669__$1 = old_57664.vx;
if(cljs.core.truth_(temp__5825__auto___57669__$1)){
var vx_57670 = temp__5825__auto___57669__$1;
(n_57662.vx = vx_57670);
} else {
}

var temp__5825__auto___57671__$1 = old_57664.vy;
if(cljs.core.truth_(temp__5825__auto___57671__$1)){
var vy_57675 = temp__5825__auto___57671__$1;
(n_57662.vy = vy_57675);
} else {
}

var temp__5825__auto___57676__$1 = old_57664.fx;
if(cljs.core.truth_(temp__5825__auto___57676__$1)){
var fx_57677 = temp__5825__auto___57676__$1;
(n_57662.fx = fx_57677);
} else {
}

var temp__5825__auto___57678__$1 = old_57664.fy;
if(cljs.core.truth_(temp__5825__auto___57678__$1)){
var fy_57679 = temp__5825__auto___57678__$1;
(n_57662.fy = fy_57679);
} else {
}
} else {
}


var G__57684 = seq__57500_57657;
var G__57685 = chunk__57501_57658;
var G__57686 = count__57502_57659;
var G__57687 = (i__57503_57660 + (1));
seq__57500_57657 = G__57684;
chunk__57501_57658 = G__57685;
count__57502_57659 = G__57686;
i__57503_57660 = G__57687;
continue;
} else {
var temp__5825__auto___57688 = cljs.core.seq(seq__57500_57657);
if(temp__5825__auto___57688){
var seq__57500_57689__$1 = temp__5825__auto___57688;
if(cljs.core.chunked_seq_QMARK_(seq__57500_57689__$1)){
var c__5568__auto___57690 = cljs.core.chunk_first(seq__57500_57689__$1);
var G__57691 = cljs.core.chunk_rest(seq__57500_57689__$1);
var G__57692 = c__5568__auto___57690;
var G__57693 = cljs.core.count(c__5568__auto___57690);
var G__57694 = (0);
seq__57500_57657 = G__57691;
chunk__57501_57658 = G__57692;
count__57502_57659 = G__57693;
i__57503_57660 = G__57694;
continue;
} else {
var n_57695 = cljs.core.first(seq__57500_57689__$1);
var temp__5825__auto___57696__$1 = (orig[(function (){var G__57543 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_57695) : id.call(null,n_57695));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__57543) : orig_map.call(null,G__57543));
})()]);
if(cljs.core.truth_(temp__5825__auto___57696__$1)){
var old_57698 = temp__5825__auto___57696__$1;
var temp__5825__auto___57699__$2 = old_57698.x;
if(cljs.core.truth_(temp__5825__auto___57699__$2)){
var x_57700 = temp__5825__auto___57699__$2;
(n_57695.x = x_57700);
} else {
}

var temp__5825__auto___57701__$2 = old_57698.y;
if(cljs.core.truth_(temp__5825__auto___57701__$2)){
var y_57702 = temp__5825__auto___57701__$2;
(n_57695.y = y_57702);
} else {
}

var temp__5825__auto___57703__$2 = old_57698.vx;
if(cljs.core.truth_(temp__5825__auto___57703__$2)){
var vx_57704 = temp__5825__auto___57703__$2;
(n_57695.vx = vx_57704);
} else {
}

var temp__5825__auto___57708__$2 = old_57698.vy;
if(cljs.core.truth_(temp__5825__auto___57708__$2)){
var vy_57709 = temp__5825__auto___57708__$2;
(n_57695.vy = vy_57709);
} else {
}

var temp__5825__auto___57710__$2 = old_57698.fx;
if(cljs.core.truth_(temp__5825__auto___57710__$2)){
var fx_57711 = temp__5825__auto___57710__$2;
(n_57695.fx = fx_57711);
} else {
}

var temp__5825__auto___57712__$2 = old_57698.fy;
if(cljs.core.truth_(temp__5825__auto___57712__$2)){
var fy_57713 = temp__5825__auto___57712__$2;
(n_57695.fy = fy_57713);
} else {
}
} else {
}


var G__57714 = cljs.core.next(seq__57500_57689__$1);
var G__57715 = null;
var G__57716 = (0);
var G__57717 = (0);
seq__57500_57657 = G__57714;
chunk__57501_57658 = G__57715;
count__57502_57659 = G__57716;
i__57503_57660 = G__57717;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__57558){
var map__57559 = p__57558;
var map__57559__$1 = cljs.core.__destructure_map(map__57559);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57559__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57559__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__57554_SHARP_){
return p1__57554_SHARP_.name;
}));
var G__57569 = sim;
G__57569.nodes(new_nodes);

G__57569.force("link").links(links);

G__57569.alpha(alpha_target);

G__57569.restart();

return G__57569;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(2000),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(1000),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(750),new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),(4),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#377eb8","#4daf4a","#ffff00","#ff7f00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circles = (function (sel){
return sel.append("ellipse");
});
var update_circles = (function (sel){
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__57571_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__57571_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__57572_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__57572_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__57572_SHARP_))?((15) + ((2) * cljs.core.count(p1__57572_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__57572_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__57573_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__57573_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__57573_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__57573_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__57573_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__57574_SHARP_){
var G__57596 = p1__57574_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__57596) : group_color.call(null,G__57596));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__57575_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__57575_SHARP_)));
})], null));
});
var remove_circles = (function (sel){
return sel.selectAll("ellipse").remove();
});
var add_text = (function (sel){
var text_sel = sel.append("text");
rid3.attrs.attrs(text_sel.filter(website_helpers.graph.should_multiline_node_QMARK_).append("tspan"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"dy","dy",1719547243),"-0.7em"], null)).text((function (node){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(node.name,/\s/);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(words) / (2)),words));
}));

rid3.attrs.attrs(text_sel.filter(website_helpers.graph.should_multiline_node_QMARK_).append("tspan"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"dy","dy",1719547243),"1.4em"], null)).text((function (node){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(node.name,/\s/);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(words) / (2)),words));
}));

return text_sel.filter((function (p1__57577_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__57577_SHARP_)));
})).text((function (p1__57578_SHARP_){
return p1__57578_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__57579_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__57579_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__57580_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__57580_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null));
});
var remove_text = (function (sel){
return sel.selectAll("text").remove();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),graph_data,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom){
var map__57615 = cljs.core.deref(viz_state);
var map__57615__$1 = cljs.core.__destructure_map(map__57615);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57615__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__57581_SHARP_){
return (Math.sqrt(p1__57581_SHARP_.value) / (2));
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"g",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

remove_text(sel);

remove_circles(sel);

add_circles(sel);

add_text(sel);

update_circles(sel);

update_text(sel);

return sel.on("dblclick",(function (_event,node){
return window.open([cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),clojure.string.replace(node.path,/ /,"+")].join(''));
})).call(drag);
})], null)], null)], null)], null);
});

//# sourceMappingURL=website_helpers.graph.js.map
