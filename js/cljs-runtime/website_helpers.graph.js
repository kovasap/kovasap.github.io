goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.is_branch_node_QMARK_ = (function website_helpers$graph$is_branch_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),node.group)));
});
website_helpers.graph.is_distinguished_node_QMARK_ = (function website_helpers$graph$is_distinguished_node_QMARK_(node){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),node.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),node.group)));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__57992 = cljs.core.deref(viz_state);
var map__57992__$1 = cljs.core.__destructure_map(map__57992);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57992__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57992__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57992__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57992__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var G__57993 = d3.forceSimulation();
G__57993.stop();

G__57993.force("link",d3.forceLink().strength(0.08).id((function (p1__57978_SHARP_){
return p1__57978_SHARP_.index;
})));

G__57993.force("charge",d3.forceManyBody().strength((-70)));

G__57993.force("center",d3.forceCenter(center_x,center_y).strength(1.1));

G__57993.force("radial-categories",d3.forceRadial((150),center_x,center_y).strength((function (p1__57979_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__57979_SHARP_.group)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57979_SHARP_.label)))))){
return 0.03;
} else {
return (0);
}
})));

G__57993.force("radial-leaves",d3.forceRadial((500),center_x,center_y).strength((function (p1__57980_SHARP_){
if((((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__57980_SHARP_.group)))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57980_SHARP_.label)))))){
return 0.02;
} else {
return (0);
}
})));

G__57993.force("collide",d3.forceCollide((function (p1__57981_SHARP_){
if(website_helpers.graph.is_distinguished_node_QMARK_(p1__57981_SHARP_)){
return (70);
} else {
return (35);
}
})).strength(1.1));

G__57993.force("legendx",d3.forceX((0.5 * center_x)).strength((function (p1__57982_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57982_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__57993.force("legendy",d3.forceY((0.5 * center_y)).strength((function (p1__57983_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("legend",p1__57983_SHARP_.label)){
return 0.2;
} else {
return (0);
}
})));

G__57993.force("legendnodex",d3.forceX((0)).strength((function (p1__57984_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Legend",p1__57984_SHARP_.name)){
return 0.3;
} else {
return (0);
}
})));

G__57993.on("tick",(function (){
var temp__5823__auto___58015 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto___58015)){
var s_58016 = temp__5823__auto___58015;
rid3.attrs.attrs(s_58016,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__57985_SHARP_){
return p1__57985_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__57986_SHARP_){
return p1__57986_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__57987_SHARP_){
return p1__57987_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__57988_SHARP_){
return p1__57988_SHARP_.target.y;
})], null));
} else {
}

var temp__5823__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5823__auto__)){
var s = temp__5823__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__57989_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57989_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57989_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__57990_SHARP_){
return p1__57990_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__57991_SHARP_){
return p1__57991_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__57993;
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
var seq__57994_58021 = cljs.core.seq(new$);
var chunk__57995_58022 = null;
var count__57996_58023 = (0);
var i__57997_58024 = (0);
while(true){
if((i__57997_58024 < count__57996_58023)){
var n_58025 = chunk__57995_58022.cljs$core$IIndexed$_nth$arity$2(null,i__57997_58024);
var temp__5823__auto___58026 = (orig[(function (){var G__58000 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_58025) : id.call(null,n_58025));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__58000) : orig_map.call(null,G__58000));
})()]);
if(cljs.core.truth_(temp__5823__auto___58026)){
var old_58027 = temp__5823__auto___58026;
var temp__5823__auto___58028__$1 = old_58027.x;
if(cljs.core.truth_(temp__5823__auto___58028__$1)){
var x_58029 = temp__5823__auto___58028__$1;
(n_58025.x = x_58029);
} else {
}

var temp__5823__auto___58030__$1 = old_58027.y;
if(cljs.core.truth_(temp__5823__auto___58030__$1)){
var y_58031 = temp__5823__auto___58030__$1;
(n_58025.y = y_58031);
} else {
}

var temp__5823__auto___58032__$1 = old_58027.vx;
if(cljs.core.truth_(temp__5823__auto___58032__$1)){
var vx_58033 = temp__5823__auto___58032__$1;
(n_58025.vx = vx_58033);
} else {
}

var temp__5823__auto___58034__$1 = old_58027.vy;
if(cljs.core.truth_(temp__5823__auto___58034__$1)){
var vy_58035 = temp__5823__auto___58034__$1;
(n_58025.vy = vy_58035);
} else {
}

var temp__5823__auto___58036__$1 = old_58027.fx;
if(cljs.core.truth_(temp__5823__auto___58036__$1)){
var fx_58037 = temp__5823__auto___58036__$1;
(n_58025.fx = fx_58037);
} else {
}

var temp__5823__auto___58042__$1 = old_58027.fy;
if(cljs.core.truth_(temp__5823__auto___58042__$1)){
var fy_58043 = temp__5823__auto___58042__$1;
(n_58025.fy = fy_58043);
} else {
}
} else {
}


var G__58044 = seq__57994_58021;
var G__58045 = chunk__57995_58022;
var G__58046 = count__57996_58023;
var G__58047 = (i__57997_58024 + (1));
seq__57994_58021 = G__58044;
chunk__57995_58022 = G__58045;
count__57996_58023 = G__58046;
i__57997_58024 = G__58047;
continue;
} else {
var temp__5823__auto___58048 = cljs.core.seq(seq__57994_58021);
if(temp__5823__auto___58048){
var seq__57994_58049__$1 = temp__5823__auto___58048;
if(cljs.core.chunked_seq_QMARK_(seq__57994_58049__$1)){
var c__5568__auto___58050 = cljs.core.chunk_first(seq__57994_58049__$1);
var G__58051 = cljs.core.chunk_rest(seq__57994_58049__$1);
var G__58052 = c__5568__auto___58050;
var G__58053 = cljs.core.count(c__5568__auto___58050);
var G__58054 = (0);
seq__57994_58021 = G__58051;
chunk__57995_58022 = G__58052;
count__57996_58023 = G__58053;
i__57997_58024 = G__58054;
continue;
} else {
var n_58055 = cljs.core.first(seq__57994_58049__$1);
var temp__5823__auto___58056__$1 = (orig[(function (){var G__58001 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_58055) : id.call(null,n_58055));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__58001) : orig_map.call(null,G__58001));
})()]);
if(cljs.core.truth_(temp__5823__auto___58056__$1)){
var old_58057 = temp__5823__auto___58056__$1;
var temp__5823__auto___58058__$2 = old_58057.x;
if(cljs.core.truth_(temp__5823__auto___58058__$2)){
var x_58059 = temp__5823__auto___58058__$2;
(n_58055.x = x_58059);
} else {
}

var temp__5823__auto___58060__$2 = old_58057.y;
if(cljs.core.truth_(temp__5823__auto___58060__$2)){
var y_58061 = temp__5823__auto___58060__$2;
(n_58055.y = y_58061);
} else {
}

var temp__5823__auto___58062__$2 = old_58057.vx;
if(cljs.core.truth_(temp__5823__auto___58062__$2)){
var vx_58063 = temp__5823__auto___58062__$2;
(n_58055.vx = vx_58063);
} else {
}

var temp__5823__auto___58064__$2 = old_58057.vy;
if(cljs.core.truth_(temp__5823__auto___58064__$2)){
var vy_58065 = temp__5823__auto___58064__$2;
(n_58055.vy = vy_58065);
} else {
}

var temp__5823__auto___58066__$2 = old_58057.fx;
if(cljs.core.truth_(temp__5823__auto___58066__$2)){
var fx_58067 = temp__5823__auto___58066__$2;
(n_58055.fx = fx_58067);
} else {
}

var temp__5823__auto___58068__$2 = old_58057.fy;
if(cljs.core.truth_(temp__5823__auto___58068__$2)){
var fy_58069 = temp__5823__auto___58068__$2;
(n_58055.fy = fy_58069);
} else {
}
} else {
}


var G__58070 = cljs.core.next(seq__57994_58049__$1);
var G__58071 = null;
var G__58072 = (0);
var G__58073 = (0);
seq__57994_58021 = G__58070;
chunk__57995_58022 = G__58071;
count__57996_58023 = G__58072;
i__57997_58024 = G__58073;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__58003){
var map__58004 = p__58003;
var map__58004__$1 = cljs.core.__destructure_map(map__58004);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58004__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58004__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__58002_SHARP_){
return p1__58002_SHARP_.name;
}));
var G__58005 = sim;
G__58005.nodes(new_nodes);

G__58005.force("link").links(links);

G__58005.alpha(alpha_target);

G__58005.restart();

return G__58005;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),(2000),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"center-x","center-x",2109659472),(1000),new cljs.core.Keyword(null,"center-y","center-y",-233780987),(750),new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),(4),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff7f00","#377eb8","#4daf4a","#ffff00","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__58006_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__58006_SHARP_))?1.3:(1)) * ((15) + ((3) * cljs.core.count(p1__58006_SHARP_.name))));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__58007_SHARP_){
return (((website_helpers.graph.is_branch_node_QMARK_(p1__58007_SHARP_))?1.3:(1)) * ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__58007_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__58008_SHARP_){
var G__58013 = p1__58008_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__58013) : group_color.call(null,G__58013));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.6], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__58009_SHARP_){
if(website_helpers.graph.is_branch_node_QMARK_(p1__58009_SHARP_)){
return "med";
} else {
return "small";
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__58010_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__58010_SHARP_.group)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),p1__58010_SHARP_.group)))){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__58011_SHARP_){
return p1__58011_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__58014 = cljs.core.deref(viz_state);
var map__58014__$1 = cljs.core.__destructure_map(map__58014);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58014__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58014__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58014__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__58012_SHARP_){
return (Math.sqrt(p1__58012_SHARP_.value) / (2));
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
