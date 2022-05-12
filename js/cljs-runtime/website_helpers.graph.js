goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__29011 = cljs.core.deref(viz_state);
var map__29011__$1 = cljs.core.__destructure_map(map__29011);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29011__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__29012 = d3.forceSimulation();
G__29012.stop();

G__29012.force("link",d3.forceLink().strength(link_strength).id((function (p1__29003_SHARP_){
return p1__29003_SHARP_.index;
})));

G__29012.force("charge",d3.forceManyBody().strength(charge_strength));

G__29012.force("center",d3.forceCenter(center_x,center_y));

G__29012.force("collide",d3.forceCollide(collide_size));

G__29012.on("tick",(function (){
var temp__5753__auto___29032 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___29032)){
var s_29033 = temp__5753__auto___29032;
rid3.attrs.attrs(s_29033,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__29004_SHARP_){
return p1__29004_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__29005_SHARP_){
return p1__29005_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__29006_SHARP_){
return p1__29006_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__29007_SHARP_){
return p1__29007_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__29008_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29008_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29008_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__29009_SHARP_){
return p1__29009_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__29010_SHARP_){
return p1__29010_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__29012;
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
var seq__29013_29034 = cljs.core.seq(new$);
var chunk__29014_29035 = null;
var count__29015_29036 = (0);
var i__29016_29037 = (0);
while(true){
if((i__29016_29037 < count__29015_29036)){
var n_29038 = chunk__29014_29035.cljs$core$IIndexed$_nth$arity$2(null,i__29016_29037);
var temp__5753__auto___29039 = (orig[(function (){var G__29019 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_29038) : id.call(null,n_29038));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__29019) : orig_map.call(null,G__29019));
})()]);
if(cljs.core.truth_(temp__5753__auto___29039)){
var old_29040 = temp__5753__auto___29039;
var temp__5753__auto___29041__$1 = old_29040.x;
if(cljs.core.truth_(temp__5753__auto___29041__$1)){
var x_29042 = temp__5753__auto___29041__$1;
(n_29038.x = x_29042);
} else {
}

var temp__5753__auto___29043__$1 = old_29040.y;
if(cljs.core.truth_(temp__5753__auto___29043__$1)){
var y_29044 = temp__5753__auto___29043__$1;
(n_29038.y = y_29044);
} else {
}

var temp__5753__auto___29045__$1 = old_29040.vx;
if(cljs.core.truth_(temp__5753__auto___29045__$1)){
var vx_29046 = temp__5753__auto___29045__$1;
(n_29038.vx = vx_29046);
} else {
}

var temp__5753__auto___29047__$1 = old_29040.vy;
if(cljs.core.truth_(temp__5753__auto___29047__$1)){
var vy_29048 = temp__5753__auto___29047__$1;
(n_29038.vy = vy_29048);
} else {
}

var temp__5753__auto___29049__$1 = old_29040.fx;
if(cljs.core.truth_(temp__5753__auto___29049__$1)){
var fx_29050 = temp__5753__auto___29049__$1;
(n_29038.fx = fx_29050);
} else {
}

var temp__5753__auto___29051__$1 = old_29040.fy;
if(cljs.core.truth_(temp__5753__auto___29051__$1)){
var fy_29052 = temp__5753__auto___29051__$1;
(n_29038.fy = fy_29052);
} else {
}
} else {
}


var G__29053 = seq__29013_29034;
var G__29054 = chunk__29014_29035;
var G__29055 = count__29015_29036;
var G__29056 = (i__29016_29037 + (1));
seq__29013_29034 = G__29053;
chunk__29014_29035 = G__29054;
count__29015_29036 = G__29055;
i__29016_29037 = G__29056;
continue;
} else {
var temp__5753__auto___29057 = cljs.core.seq(seq__29013_29034);
if(temp__5753__auto___29057){
var seq__29013_29058__$1 = temp__5753__auto___29057;
if(cljs.core.chunked_seq_QMARK_(seq__29013_29058__$1)){
var c__4679__auto___29059 = cljs.core.chunk_first(seq__29013_29058__$1);
var G__29060 = cljs.core.chunk_rest(seq__29013_29058__$1);
var G__29061 = c__4679__auto___29059;
var G__29062 = cljs.core.count(c__4679__auto___29059);
var G__29063 = (0);
seq__29013_29034 = G__29060;
chunk__29014_29035 = G__29061;
count__29015_29036 = G__29062;
i__29016_29037 = G__29063;
continue;
} else {
var n_29064 = cljs.core.first(seq__29013_29058__$1);
var temp__5753__auto___29065__$1 = (orig[(function (){var G__29020 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_29064) : id.call(null,n_29064));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__29020) : orig_map.call(null,G__29020));
})()]);
if(cljs.core.truth_(temp__5753__auto___29065__$1)){
var old_29066 = temp__5753__auto___29065__$1;
var temp__5753__auto___29067__$2 = old_29066.x;
if(cljs.core.truth_(temp__5753__auto___29067__$2)){
var x_29068 = temp__5753__auto___29067__$2;
(n_29064.x = x_29068);
} else {
}

var temp__5753__auto___29069__$2 = old_29066.y;
if(cljs.core.truth_(temp__5753__auto___29069__$2)){
var y_29070 = temp__5753__auto___29069__$2;
(n_29064.y = y_29070);
} else {
}

var temp__5753__auto___29071__$2 = old_29066.vx;
if(cljs.core.truth_(temp__5753__auto___29071__$2)){
var vx_29072 = temp__5753__auto___29071__$2;
(n_29064.vx = vx_29072);
} else {
}

var temp__5753__auto___29073__$2 = old_29066.vy;
if(cljs.core.truth_(temp__5753__auto___29073__$2)){
var vy_29074 = temp__5753__auto___29073__$2;
(n_29064.vy = vy_29074);
} else {
}

var temp__5753__auto___29075__$2 = old_29066.fx;
if(cljs.core.truth_(temp__5753__auto___29075__$2)){
var fx_29076 = temp__5753__auto___29075__$2;
(n_29064.fx = fx_29076);
} else {
}

var temp__5753__auto___29077__$2 = old_29066.fy;
if(cljs.core.truth_(temp__5753__auto___29077__$2)){
var fy_29078 = temp__5753__auto___29077__$2;
(n_29064.fy = fy_29078);
} else {
}
} else {
}


var G__29079 = cljs.core.next(seq__29013_29058__$1);
var G__29080 = null;
var G__29081 = (0);
var G__29082 = (0);
seq__29013_29034 = G__29079;
chunk__29014_29035 = G__29080;
count__29015_29036 = G__29081;
i__29016_29037 = G__29082;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__29022){
var map__29023 = p__29022;
var map__29023__$1 = cljs.core.__destructure_map(map__29023);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29023__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29023__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__29021_SHARP_){
return p1__29021_SHARP_.name;
}));
var G__29024 = sim;
G__29024.nodes(new_nodes);

G__29024.force("link").links(links);

G__29024.alpha(alpha_target);

G__29024.restart();

return G__29024;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-100),0.08,(750),null,null,(2000),(1000),(50),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__29025_SHARP_){
return ((5) * cljs.core.count(p1__29025_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__29026_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__29026_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__29027_SHARP_){
var G__29030 = p1__29027_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__29030) : color.call(null,G__29030));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__29028_SHARP_){
return p1__29028_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__29031 = cljs.core.deref(viz_state);
var map__29031__$1 = cljs.core.__destructure_map(map__29031);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29031__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__29029_SHARP_){
return Math.sqrt(p1__29029_SHARP_.value);
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
