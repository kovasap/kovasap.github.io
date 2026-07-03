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
var map__50376 = cljs.core.deref(viz_state);
var map__50376__$1 = cljs.core.__destructure_map(map__50376);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var legend_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"legend-x","legend-x",-1640214744));
var legend_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"legend-y","legend-y",-1159784392));
var legend_title_offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"legend-title-offset-x","legend-title-offset-x",1475074958));
var legend_title_offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50376__$1,new cljs.core.Keyword(null,"legend-title-offset-y","legend-title-offset-y",200845880));
var G__50377 = d3.forceSimulation();
G__50377.stop();

G__50377.force("link",d3.forceLink().strength(0.07).id((function (p1__50361_SHARP_){
return p1__50361_SHARP_.index;
})));

G__50377.force("charge",d3.forceManyBody().distanceMax((800)).strength((-80)));

G__50377.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__50377.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__50362_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__50362_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50362_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__50377.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__50363_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__50363_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50363_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__50377.force("collide",d3.forceCollide((function (p1__50364_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__50364_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50364_SHARP_))?(50):(35)));
})).strength(1.1));

G__50377.force("legendx",d3.forceX(legend_x).strength((function (p1__50365_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50365_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__50377.force("legendy",d3.forceY(legend_y).strength((function (p1__50366_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__50366_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__50377.force("legendnodex",d3.forceX((legend_title_offset_x + legend_x)).strength((function (p1__50367_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__50367_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__50377.force("legendnodey",d3.forceY((legend_title_offset_y + legend_y)).strength((function (p1__50368_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__50368_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__50377.on("tick",(function (){
var temp__5825__auto___50402 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___50402)){
var s_50403 = temp__5825__auto___50402;
rid3.attrs.attrs(s_50403,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__50369_SHARP_){
return p1__50369_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__50370_SHARP_){
return p1__50370_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__50371_SHARP_){
return p1__50371_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__50372_SHARP_){
return p1__50372_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__50373_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50373_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50373_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__50374_SHARP_){
return p1__50374_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__50375_SHARP_){
return p1__50375_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__50377;
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
var seq__50378_50404 = cljs.core.seq(new$);
var chunk__50379_50405 = null;
var count__50380_50406 = (0);
var i__50381_50407 = (0);
while(true){
if((i__50381_50407 < count__50380_50406)){
var n_50408 = chunk__50379_50405.cljs$core$IIndexed$_nth$arity$2(null,i__50381_50407);
var temp__5825__auto___50409 = (orig[(function (){var G__50384 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_50408) : id.call(null,n_50408));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__50384) : orig_map.call(null,G__50384));
})()]);
if(cljs.core.truth_(temp__5825__auto___50409)){
var old_50410 = temp__5825__auto___50409;
var temp__5825__auto___50411__$1 = old_50410.x;
if(cljs.core.truth_(temp__5825__auto___50411__$1)){
var x_50412 = temp__5825__auto___50411__$1;
(n_50408.x = x_50412);
} else {
}

var temp__5825__auto___50413__$1 = old_50410.y;
if(cljs.core.truth_(temp__5825__auto___50413__$1)){
var y_50414 = temp__5825__auto___50413__$1;
(n_50408.y = y_50414);
} else {
}

var temp__5825__auto___50415__$1 = old_50410.vx;
if(cljs.core.truth_(temp__5825__auto___50415__$1)){
var vx_50416 = temp__5825__auto___50415__$1;
(n_50408.vx = vx_50416);
} else {
}

var temp__5825__auto___50417__$1 = old_50410.vy;
if(cljs.core.truth_(temp__5825__auto___50417__$1)){
var vy_50418 = temp__5825__auto___50417__$1;
(n_50408.vy = vy_50418);
} else {
}

var temp__5825__auto___50419__$1 = old_50410.fx;
if(cljs.core.truth_(temp__5825__auto___50419__$1)){
var fx_50420 = temp__5825__auto___50419__$1;
(n_50408.fx = fx_50420);
} else {
}

var temp__5825__auto___50421__$1 = old_50410.fy;
if(cljs.core.truth_(temp__5825__auto___50421__$1)){
var fy_50422 = temp__5825__auto___50421__$1;
(n_50408.fy = fy_50422);
} else {
}
} else {
}


var G__50423 = seq__50378_50404;
var G__50424 = chunk__50379_50405;
var G__50425 = count__50380_50406;
var G__50426 = (i__50381_50407 + (1));
seq__50378_50404 = G__50423;
chunk__50379_50405 = G__50424;
count__50380_50406 = G__50425;
i__50381_50407 = G__50426;
continue;
} else {
var temp__5825__auto___50427 = cljs.core.seq(seq__50378_50404);
if(temp__5825__auto___50427){
var seq__50378_50428__$1 = temp__5825__auto___50427;
if(cljs.core.chunked_seq_QMARK_(seq__50378_50428__$1)){
var c__5568__auto___50429 = cljs.core.chunk_first(seq__50378_50428__$1);
var G__50430 = cljs.core.chunk_rest(seq__50378_50428__$1);
var G__50431 = c__5568__auto___50429;
var G__50432 = cljs.core.count(c__5568__auto___50429);
var G__50433 = (0);
seq__50378_50404 = G__50430;
chunk__50379_50405 = G__50431;
count__50380_50406 = G__50432;
i__50381_50407 = G__50433;
continue;
} else {
var n_50434 = cljs.core.first(seq__50378_50428__$1);
var temp__5825__auto___50435__$1 = (orig[(function (){var G__50385 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_50434) : id.call(null,n_50434));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__50385) : orig_map.call(null,G__50385));
})()]);
if(cljs.core.truth_(temp__5825__auto___50435__$1)){
var old_50436 = temp__5825__auto___50435__$1;
var temp__5825__auto___50437__$2 = old_50436.x;
if(cljs.core.truth_(temp__5825__auto___50437__$2)){
var x_50438 = temp__5825__auto___50437__$2;
(n_50434.x = x_50438);
} else {
}

var temp__5825__auto___50439__$2 = old_50436.y;
if(cljs.core.truth_(temp__5825__auto___50439__$2)){
var y_50440 = temp__5825__auto___50439__$2;
(n_50434.y = y_50440);
} else {
}

var temp__5825__auto___50441__$2 = old_50436.vx;
if(cljs.core.truth_(temp__5825__auto___50441__$2)){
var vx_50442 = temp__5825__auto___50441__$2;
(n_50434.vx = vx_50442);
} else {
}

var temp__5825__auto___50443__$2 = old_50436.vy;
if(cljs.core.truth_(temp__5825__auto___50443__$2)){
var vy_50444 = temp__5825__auto___50443__$2;
(n_50434.vy = vy_50444);
} else {
}

var temp__5825__auto___50445__$2 = old_50436.fx;
if(cljs.core.truth_(temp__5825__auto___50445__$2)){
var fx_50446 = temp__5825__auto___50445__$2;
(n_50434.fx = fx_50446);
} else {
}

var temp__5825__auto___50447__$2 = old_50436.fy;
if(cljs.core.truth_(temp__5825__auto___50447__$2)){
var fy_50448 = temp__5825__auto___50447__$2;
(n_50434.fy = fy_50448);
} else {
}
} else {
}


var G__50449 = cljs.core.next(seq__50378_50428__$1);
var G__50450 = null;
var G__50451 = (0);
var G__50452 = (0);
seq__50378_50404 = G__50449;
chunk__50379_50405 = G__50450;
count__50380_50406 = G__50451;
i__50381_50407 = G__50452;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__50387){
var map__50388 = p__50387;
var map__50388__$1 = cljs.core.__destructure_map(map__50388);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50388__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50388__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__50386_SHARP_){
return p1__50386_SHARP_.name;
}));
var G__50389 = sim;
G__50389.nodes(new_nodes);

G__50389.force("link").links(links);

G__50389.alpha(alpha_target);

G__50389.restart();

return G__50389;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"legend-x","legend-x",-1640214744),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"legend-title-offset-x","legend-title-offset-x",1475074958),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"legend-y","legend-y",-1159784392),new cljs.core.Keyword(null,"legend-title-offset-y","legend-title-offset-y",200845880),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(750),null,null,(500),(2000),(50),(1000),(350),(50),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ffffff","#377eb8","#4daf4a","#ffff00","#ff7f00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circles = (function (sel){
return sel.append("ellipse");
});
var update_circles = (function (sel){
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__50390_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50390_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__50391_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__50391_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50391_SHARP_))?((15) + ((2) * cljs.core.count(p1__50391_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__50391_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__50392_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__50392_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__50392_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__50392_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__50392_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__50393_SHARP_){
var G__50400 = p1__50393_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__50400) : group_color.call(null,G__50400));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__50394_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50394_SHARP_)));
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

return text_sel.filter((function (p1__50395_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__50395_SHARP_)));
})).text((function (p1__50396_SHARP_){
return p1__50396_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__50397_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__50397_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__50398_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__50398_SHARP_)){
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
var map__50401 = cljs.core.deref(viz_state);
var map__50401__$1 = cljs.core.__destructure_map(map__50401);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50401__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__50399_SHARP_){
return (Math.sqrt(p1__50399_SHARP_.value) / (2));
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
