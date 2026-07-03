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
var map__40563 = cljs.core.deref(viz_state);
var map__40563__$1 = cljs.core.__destructure_map(map__40563);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40563__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40563__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40563__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40563__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__40565 = d3.forceSimulation();
G__40565.stop();

G__40565.force("link",d3.forceLink().strength(0.07).id((function (p1__40546_SHARP_){
return p1__40546_SHARP_.index;
})));

G__40565.force("charge",d3.forceManyBody().distanceMax((800)).strength((-80)));

G__40565.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__40565.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__40547_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__40547_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40547_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__40565.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__40548_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__40548_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40548_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__40565.force("collide",d3.forceCollide((function (p1__40549_SHARP_){
return (((website_helpers.graph.is_distinguished_node_QMARK_(p1__40549_SHARP_))?1.2:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__40549_SHARP_))?(50):(35)));
})).strength(1.1));

G__40565.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__40550_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40550_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__40565.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__40551_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__40551_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__40565.force("legendnodex",d3.forceX((0)).strength((function (p1__40552_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__40552_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__40565.on("tick",(function (){
var temp__5825__auto___40762 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___40762)){
var s_40763 = temp__5825__auto___40762;
rid3.attrs.attrs(s_40763,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__40553_SHARP_){
return p1__40553_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__40554_SHARP_){
return p1__40554_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__40555_SHARP_){
return p1__40555_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__40556_SHARP_){
return p1__40556_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__40557_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40557_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40557_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__40558_SHARP_){
return p1__40558_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__40559_SHARP_){
return p1__40559_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__40565;
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
var seq__40591_40769 = cljs.core.seq(new$);
var chunk__40592_40770 = null;
var count__40593_40771 = (0);
var i__40594_40772 = (0);
while(true){
if((i__40594_40772 < count__40593_40771)){
var n_40773 = chunk__40592_40770.cljs$core$IIndexed$_nth$arity$2(null,i__40594_40772);
var temp__5825__auto___40774 = (orig[(function (){var G__40633 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40773) : id.call(null,n_40773));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40633) : orig_map.call(null,G__40633));
})()]);
if(cljs.core.truth_(temp__5825__auto___40774)){
var old_40775 = temp__5825__auto___40774;
var temp__5825__auto___40776__$1 = old_40775.x;
if(cljs.core.truth_(temp__5825__auto___40776__$1)){
var x_40777 = temp__5825__auto___40776__$1;
(n_40773.x = x_40777);
} else {
}

var temp__5825__auto___40778__$1 = old_40775.y;
if(cljs.core.truth_(temp__5825__auto___40778__$1)){
var y_40779 = temp__5825__auto___40778__$1;
(n_40773.y = y_40779);
} else {
}

var temp__5825__auto___40780__$1 = old_40775.vx;
if(cljs.core.truth_(temp__5825__auto___40780__$1)){
var vx_40781 = temp__5825__auto___40780__$1;
(n_40773.vx = vx_40781);
} else {
}

var temp__5825__auto___40782__$1 = old_40775.vy;
if(cljs.core.truth_(temp__5825__auto___40782__$1)){
var vy_40783 = temp__5825__auto___40782__$1;
(n_40773.vy = vy_40783);
} else {
}

var temp__5825__auto___40784__$1 = old_40775.fx;
if(cljs.core.truth_(temp__5825__auto___40784__$1)){
var fx_40785 = temp__5825__auto___40784__$1;
(n_40773.fx = fx_40785);
} else {
}

var temp__5825__auto___40786__$1 = old_40775.fy;
if(cljs.core.truth_(temp__5825__auto___40786__$1)){
var fy_40787 = temp__5825__auto___40786__$1;
(n_40773.fy = fy_40787);
} else {
}
} else {
}


var G__40788 = seq__40591_40769;
var G__40789 = chunk__40592_40770;
var G__40790 = count__40593_40771;
var G__40791 = (i__40594_40772 + (1));
seq__40591_40769 = G__40788;
chunk__40592_40770 = G__40789;
count__40593_40771 = G__40790;
i__40594_40772 = G__40791;
continue;
} else {
var temp__5825__auto___40793 = cljs.core.seq(seq__40591_40769);
if(temp__5825__auto___40793){
var seq__40591_40794__$1 = temp__5825__auto___40793;
if(cljs.core.chunked_seq_QMARK_(seq__40591_40794__$1)){
var c__5568__auto___40795 = cljs.core.chunk_first(seq__40591_40794__$1);
var G__40796 = cljs.core.chunk_rest(seq__40591_40794__$1);
var G__40797 = c__5568__auto___40795;
var G__40798 = cljs.core.count(c__5568__auto___40795);
var G__40799 = (0);
seq__40591_40769 = G__40796;
chunk__40592_40770 = G__40797;
count__40593_40771 = G__40798;
i__40594_40772 = G__40799;
continue;
} else {
var n_40800 = cljs.core.first(seq__40591_40794__$1);
var temp__5825__auto___40801__$1 = (orig[(function (){var G__40645 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_40800) : id.call(null,n_40800));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__40645) : orig_map.call(null,G__40645));
})()]);
if(cljs.core.truth_(temp__5825__auto___40801__$1)){
var old_40802 = temp__5825__auto___40801__$1;
var temp__5825__auto___40803__$2 = old_40802.x;
if(cljs.core.truth_(temp__5825__auto___40803__$2)){
var x_40804 = temp__5825__auto___40803__$2;
(n_40800.x = x_40804);
} else {
}

var temp__5825__auto___40805__$2 = old_40802.y;
if(cljs.core.truth_(temp__5825__auto___40805__$2)){
var y_40806 = temp__5825__auto___40805__$2;
(n_40800.y = y_40806);
} else {
}

var temp__5825__auto___40807__$2 = old_40802.vx;
if(cljs.core.truth_(temp__5825__auto___40807__$2)){
var vx_40809 = temp__5825__auto___40807__$2;
(n_40800.vx = vx_40809);
} else {
}

var temp__5825__auto___40810__$2 = old_40802.vy;
if(cljs.core.truth_(temp__5825__auto___40810__$2)){
var vy_40811 = temp__5825__auto___40810__$2;
(n_40800.vy = vy_40811);
} else {
}

var temp__5825__auto___40813__$2 = old_40802.fx;
if(cljs.core.truth_(temp__5825__auto___40813__$2)){
var fx_40814 = temp__5825__auto___40813__$2;
(n_40800.fx = fx_40814);
} else {
}

var temp__5825__auto___40815__$2 = old_40802.fy;
if(cljs.core.truth_(temp__5825__auto___40815__$2)){
var fy_40816 = temp__5825__auto___40815__$2;
(n_40800.fy = fy_40816);
} else {
}
} else {
}


var G__40817 = cljs.core.next(seq__40591_40794__$1);
var G__40818 = null;
var G__40819 = (0);
var G__40820 = (0);
seq__40591_40769 = G__40817;
chunk__40592_40770 = G__40818;
count__40593_40771 = G__40819;
i__40594_40772 = G__40820;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__40665){
var map__40666 = p__40665;
var map__40666__$1 = cljs.core.__destructure_map(map__40666);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40666__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40666__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__40656_SHARP_){
return p1__40656_SHARP_.name;
}));
var G__40670 = sim;
G__40670.nodes(new_nodes);

G__40670.force("link").links(links);

G__40670.alpha(alpha_target);

G__40670.restart();

return G__40670;
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
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__40687_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40687_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__40688_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__40688_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__40688_SHARP_))?((15) + ((2) * cljs.core.count(p1__40688_SHARP_.name))):((15) + ((3) * cljs.core.count(p1__40688_SHARP_.name)))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__40692_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__40692_SHARP_))?1.3:(1)) * ((website_helpers.graph.should_multiline_node_QMARK_(p1__40692_SHARP_))?(function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__40692_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__40692_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8)));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__40693_SHARP_){
var G__40726 = p1__40693_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__40726) : group_color.call(null,G__40726));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__40694_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40694_SHARP_)));
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

return text_sel.filter((function (p1__40699_SHARP_){
return (!(website_helpers.graph.should_multiline_node_QMARK_(p1__40699_SHARP_)));
})).text((function (p1__40700_SHARP_){
return p1__40700_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__40702_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__40702_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__40706_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__40706_SHARP_)){
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
var map__40751 = cljs.core.deref(viz_state);
var map__40751__$1 = cljs.core.__destructure_map(map__40751);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__40711_SHARP_){
return (Math.sqrt(p1__40711_SHARP_.value) / (2));
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
