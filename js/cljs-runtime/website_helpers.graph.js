goog.provide('website_helpers.graph');
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__54990 = cljs.core.deref(viz_state);
var map__54990__$1 = cljs.core.__destructure_map(map__54990);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54990__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__54991 = d3.forceSimulation();
G__54991.stop();

G__54991.force("link",d3.forceLink().strength(0.08).id((function (p1__54976_SHARP_){
return p1__54976_SHARP_.index;
})));

G__54991.force("charge",d3.forceManyBody().strength((-70)));

G__54991.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__54991.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__54977_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__54977_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54977_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__54991.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__54978_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__54978_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54978_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__54991.force("collide",d3.forceCollide((function (p1__54979_SHARP_){
if(website_helpers.graph.is_distinguished_node_QMARK_(p1__54979_SHARP_)){
return (70);
} else {
return (35);
}
})).strength(1.1));

G__54991.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__54980_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54980_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__54991.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__54981_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__54981_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__54991.force("legendnodex",d3.forceX((0)).strength((function (p1__54982_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__54982_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__54991.on("tick",(function (){
var temp__5825__auto___55017 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto___55017)){
var s_55018 = temp__5825__auto___55017;
rid3.attrs.attrs(s_55018,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__54983_SHARP_){
return p1__54983_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__54984_SHARP_){
return p1__54984_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__54985_SHARP_){
return p1__54985_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__54986_SHARP_){
return p1__54986_SHARP_.target.y;
})], null));
} else {
}

var temp__5825__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5825__auto__)){
var s = temp__5825__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__54987_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54987_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54987_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__54988_SHARP_){
return p1__54988_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__54989_SHARP_){
return p1__54989_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__54991;
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
var seq__54992_55019 = cljs.core.seq(new$);
var chunk__54993_55020 = null;
var count__54994_55021 = (0);
var i__54995_55022 = (0);
while(true){
if((i__54995_55022 < count__54994_55021)){
var n_55023 = chunk__54993_55020.cljs$core$IIndexed$_nth$arity$2(null,i__54995_55022);
var temp__5825__auto___55024 = (orig[(function (){var G__54998 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_55023) : id.call(null,n_55023));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54998) : orig_map.call(null,G__54998));
})()]);
if(cljs.core.truth_(temp__5825__auto___55024)){
var old_55025 = temp__5825__auto___55024;
var temp__5825__auto___55026__$1 = old_55025.x;
if(cljs.core.truth_(temp__5825__auto___55026__$1)){
var x_55027 = temp__5825__auto___55026__$1;
(n_55023.x = x_55027);
} else {
}

var temp__5825__auto___55028__$1 = old_55025.y;
if(cljs.core.truth_(temp__5825__auto___55028__$1)){
var y_55029 = temp__5825__auto___55028__$1;
(n_55023.y = y_55029);
} else {
}

var temp__5825__auto___55030__$1 = old_55025.vx;
if(cljs.core.truth_(temp__5825__auto___55030__$1)){
var vx_55031 = temp__5825__auto___55030__$1;
(n_55023.vx = vx_55031);
} else {
}

var temp__5825__auto___55032__$1 = old_55025.vy;
if(cljs.core.truth_(temp__5825__auto___55032__$1)){
var vy_55033 = temp__5825__auto___55032__$1;
(n_55023.vy = vy_55033);
} else {
}

var temp__5825__auto___55034__$1 = old_55025.fx;
if(cljs.core.truth_(temp__5825__auto___55034__$1)){
var fx_55035 = temp__5825__auto___55034__$1;
(n_55023.fx = fx_55035);
} else {
}

var temp__5825__auto___55036__$1 = old_55025.fy;
if(cljs.core.truth_(temp__5825__auto___55036__$1)){
var fy_55037 = temp__5825__auto___55036__$1;
(n_55023.fy = fy_55037);
} else {
}
} else {
}


var G__55038 = seq__54992_55019;
var G__55039 = chunk__54993_55020;
var G__55040 = count__54994_55021;
var G__55041 = (i__54995_55022 + (1));
seq__54992_55019 = G__55038;
chunk__54993_55020 = G__55039;
count__54994_55021 = G__55040;
i__54995_55022 = G__55041;
continue;
} else {
var temp__5825__auto___55042 = cljs.core.seq(seq__54992_55019);
if(temp__5825__auto___55042){
var seq__54992_55043__$1 = temp__5825__auto___55042;
if(cljs.core.chunked_seq_QMARK_(seq__54992_55043__$1)){
var c__5568__auto___55044 = cljs.core.chunk_first(seq__54992_55043__$1);
var G__55045 = cljs.core.chunk_rest(seq__54992_55043__$1);
var G__55046 = c__5568__auto___55044;
var G__55047 = cljs.core.count(c__5568__auto___55044);
var G__55048 = (0);
seq__54992_55019 = G__55045;
chunk__54993_55020 = G__55046;
count__54994_55021 = G__55047;
i__54995_55022 = G__55048;
continue;
} else {
var n_55049 = cljs.core.first(seq__54992_55043__$1);
var temp__5825__auto___55050__$1 = (orig[(function (){var G__54999 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_55049) : id.call(null,n_55049));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__54999) : orig_map.call(null,G__54999));
})()]);
if(cljs.core.truth_(temp__5825__auto___55050__$1)){
var old_55051 = temp__5825__auto___55050__$1;
var temp__5825__auto___55052__$2 = old_55051.x;
if(cljs.core.truth_(temp__5825__auto___55052__$2)){
var x_55053 = temp__5825__auto___55052__$2;
(n_55049.x = x_55053);
} else {
}

var temp__5825__auto___55054__$2 = old_55051.y;
if(cljs.core.truth_(temp__5825__auto___55054__$2)){
var y_55055 = temp__5825__auto___55054__$2;
(n_55049.y = y_55055);
} else {
}

var temp__5825__auto___55056__$2 = old_55051.vx;
if(cljs.core.truth_(temp__5825__auto___55056__$2)){
var vx_55057 = temp__5825__auto___55056__$2;
(n_55049.vx = vx_55057);
} else {
}

var temp__5825__auto___55058__$2 = old_55051.vy;
if(cljs.core.truth_(temp__5825__auto___55058__$2)){
var vy_55059 = temp__5825__auto___55058__$2;
(n_55049.vy = vy_55059);
} else {
}

var temp__5825__auto___55060__$2 = old_55051.fx;
if(cljs.core.truth_(temp__5825__auto___55060__$2)){
var fx_55061 = temp__5825__auto___55060__$2;
(n_55049.fx = fx_55061);
} else {
}

var temp__5825__auto___55062__$2 = old_55051.fy;
if(cljs.core.truth_(temp__5825__auto___55062__$2)){
var fy_55063 = temp__5825__auto___55062__$2;
(n_55049.fy = fy_55063);
} else {
}
} else {
}


var G__55064 = cljs.core.next(seq__54992_55043__$1);
var G__55065 = null;
var G__55066 = (0);
var G__55067 = (0);
seq__54992_55019 = G__55064;
chunk__54993_55020 = G__55065;
count__54994_55021 = G__55066;
i__54995_55022 = G__55067;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__55001){
var map__55002 = p__55001;
var map__55002__$1 = cljs.core.__destructure_map(map__55002);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55002__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55002__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__55000_SHARP_){
return p1__55000_SHARP_.name;
}));
var G__55003 = sim;
G__55003.nodes(new_nodes);

G__55003.force("link").links(links);

G__55003.alpha(alpha_target);

G__55003.restart();

return G__55003;
});
website_helpers.graph.get_clj = (function website_helpers$graph$get_clj(node){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
website_helpers.graph.viz = (function website_helpers$graph$viz(graph_data,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(2000),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(1000),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(750),new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),(4),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff7f00","#377eb8","#4daf4a","#ffff00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circles = (function (sel){
return sel.append("ellipse");
});
var update_circles = (function (sel){
return rid3.attrs.attrs(sel.selectAll("ellipse"),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#000",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(function (p1__55004_SHARP_){
return new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__55004_SHARP_));
}),new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__55005_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__55005_SHARP_))?1.3:(1)) * ((15) + ((3) * cljs.core.count(p1__55005_SHARP_.name))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__55006_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__55006_SHARP_))?1.3:(1)) * ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__55006_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__55007_SHARP_){
var G__55015 = p1__55007_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__55015) : group_color.call(null,G__55015));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__55008_SHARP_){
return (0.6 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__55008_SHARP_)));
})], null));
});
var remove_circles = (function (sel){
return sel.selectAll("ellipse").remove();
});
var add_text = (function (sel){
return sel.append("text").text((function (p1__55009_SHARP_){
return p1__55009_SHARP_.name;
}));
});
var update_text = (function (sel){
return rid3.attrs.attrs(sel.selectAll("text"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (p1__55010_SHARP_){
return (1.0 * new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118).cljs$core$IFn$_invoke$arity$1(website_helpers.graph.get_clj(p1__55010_SHARP_)));
}),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__55011_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__55011_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__55012_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__55012_SHARP_.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),p1__55012_SHARP_.group)))){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__55013_SHARP_){
return p1__55013_SHARP_.name;
}));
});
var remove_text = (function (sel){
return sel.selectAll("text").remove();
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),graph_data,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom){
var map__55016 = cljs.core.deref(viz_state);
var map__55016__$1 = cljs.core.__destructure_map(map__55016);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55016__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55016__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55016__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__55014_SHARP_){
return (Math.sqrt(p1__55014_SHARP_.value) / (2));
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
