goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__80223 = cljs.core.deref(viz_state);
var map__80223__$1 = cljs.core.__destructure_map(map__80223);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80223__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80223__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__80224 = d3.forceSimulation();
G__80224.stop();

G__80224.force("link",d3.forceLink().strength(0.08).id((function (p1__80215_SHARP_){
return p1__80215_SHARP_.index;
})));

G__80224.force("charge",d3.forceManyBody().strength((-100)));

G__80224.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__80224.force("collide",d3.forceCollide((50)));

G__80224.on("tick",(function (){
var temp__5753__auto___80244 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___80244)){
var s_80245 = temp__5753__auto___80244;
rid3.attrs.attrs(s_80245,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__80216_SHARP_){
return p1__80216_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__80217_SHARP_){
return p1__80217_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__80218_SHARP_){
return p1__80218_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__80219_SHARP_){
return p1__80219_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__80220_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__80220_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__80220_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__80221_SHARP_){
return p1__80221_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__80222_SHARP_){
return p1__80222_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__80224;
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
var seq__80225_80246 = cljs.core.seq(new$);
var chunk__80226_80247 = null;
var count__80227_80248 = (0);
var i__80228_80249 = (0);
while(true){
if((i__80228_80249 < count__80227_80248)){
var n_80250 = chunk__80226_80247.cljs$core$IIndexed$_nth$arity$2(null,i__80228_80249);
var temp__5753__auto___80251 = (orig[(function (){var G__80231 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_80250) : id.call(null,n_80250));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__80231) : orig_map.call(null,G__80231));
})()]);
if(cljs.core.truth_(temp__5753__auto___80251)){
var old_80252 = temp__5753__auto___80251;
var temp__5753__auto___80253__$1 = old_80252.x;
if(cljs.core.truth_(temp__5753__auto___80253__$1)){
var x_80254 = temp__5753__auto___80253__$1;
(n_80250.x = x_80254);
} else {
}

var temp__5753__auto___80255__$1 = old_80252.y;
if(cljs.core.truth_(temp__5753__auto___80255__$1)){
var y_80256 = temp__5753__auto___80255__$1;
(n_80250.y = y_80256);
} else {
}

var temp__5753__auto___80257__$1 = old_80252.vx;
if(cljs.core.truth_(temp__5753__auto___80257__$1)){
var vx_80258 = temp__5753__auto___80257__$1;
(n_80250.vx = vx_80258);
} else {
}

var temp__5753__auto___80259__$1 = old_80252.vy;
if(cljs.core.truth_(temp__5753__auto___80259__$1)){
var vy_80260 = temp__5753__auto___80259__$1;
(n_80250.vy = vy_80260);
} else {
}

var temp__5753__auto___80261__$1 = old_80252.fx;
if(cljs.core.truth_(temp__5753__auto___80261__$1)){
var fx_80262 = temp__5753__auto___80261__$1;
(n_80250.fx = fx_80262);
} else {
}

var temp__5753__auto___80263__$1 = old_80252.fy;
if(cljs.core.truth_(temp__5753__auto___80263__$1)){
var fy_80264 = temp__5753__auto___80263__$1;
(n_80250.fy = fy_80264);
} else {
}
} else {
}


var G__80265 = seq__80225_80246;
var G__80266 = chunk__80226_80247;
var G__80267 = count__80227_80248;
var G__80268 = (i__80228_80249 + (1));
seq__80225_80246 = G__80265;
chunk__80226_80247 = G__80266;
count__80227_80248 = G__80267;
i__80228_80249 = G__80268;
continue;
} else {
var temp__5753__auto___80269 = cljs.core.seq(seq__80225_80246);
if(temp__5753__auto___80269){
var seq__80225_80270__$1 = temp__5753__auto___80269;
if(cljs.core.chunked_seq_QMARK_(seq__80225_80270__$1)){
var c__4679__auto___80271 = cljs.core.chunk_first(seq__80225_80270__$1);
var G__80272 = cljs.core.chunk_rest(seq__80225_80270__$1);
var G__80273 = c__4679__auto___80271;
var G__80274 = cljs.core.count(c__4679__auto___80271);
var G__80275 = (0);
seq__80225_80246 = G__80272;
chunk__80226_80247 = G__80273;
count__80227_80248 = G__80274;
i__80228_80249 = G__80275;
continue;
} else {
var n_80276 = cljs.core.first(seq__80225_80270__$1);
var temp__5753__auto___80277__$1 = (orig[(function (){var G__80232 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_80276) : id.call(null,n_80276));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__80232) : orig_map.call(null,G__80232));
})()]);
if(cljs.core.truth_(temp__5753__auto___80277__$1)){
var old_80278 = temp__5753__auto___80277__$1;
var temp__5753__auto___80279__$2 = old_80278.x;
if(cljs.core.truth_(temp__5753__auto___80279__$2)){
var x_80280 = temp__5753__auto___80279__$2;
(n_80276.x = x_80280);
} else {
}

var temp__5753__auto___80281__$2 = old_80278.y;
if(cljs.core.truth_(temp__5753__auto___80281__$2)){
var y_80282 = temp__5753__auto___80281__$2;
(n_80276.y = y_80282);
} else {
}

var temp__5753__auto___80283__$2 = old_80278.vx;
if(cljs.core.truth_(temp__5753__auto___80283__$2)){
var vx_80284 = temp__5753__auto___80283__$2;
(n_80276.vx = vx_80284);
} else {
}

var temp__5753__auto___80285__$2 = old_80278.vy;
if(cljs.core.truth_(temp__5753__auto___80285__$2)){
var vy_80286 = temp__5753__auto___80285__$2;
(n_80276.vy = vy_80286);
} else {
}

var temp__5753__auto___80287__$2 = old_80278.fx;
if(cljs.core.truth_(temp__5753__auto___80287__$2)){
var fx_80288 = temp__5753__auto___80287__$2;
(n_80276.fx = fx_80288);
} else {
}

var temp__5753__auto___80289__$2 = old_80278.fy;
if(cljs.core.truth_(temp__5753__auto___80289__$2)){
var fy_80290 = temp__5753__auto___80289__$2;
(n_80276.fy = fy_80290);
} else {
}
} else {
}


var G__80291 = cljs.core.next(seq__80225_80270__$1);
var G__80292 = null;
var G__80293 = (0);
var G__80294 = (0);
seq__80225_80246 = G__80291;
chunk__80226_80247 = G__80292;
count__80227_80248 = G__80293;
i__80228_80249 = G__80294;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__80234){
var map__80235 = p__80234;
var map__80235__$1 = cljs.core.__destructure_map(map__80235);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80235__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__80233_SHARP_){
return p1__80233_SHARP_.name;
}));
var G__80236 = sim;
G__80236.nodes(new_nodes);

G__80236.force("link").links(links);

G__80236.alpha(alpha_target);

G__80236.restart();

return G__80236;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1200),new cljs.core.Keyword(null,"height","height",1025178622),(1500),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__80237_SHARP_){
return ((5) * cljs.core.count(p1__80237_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__80238_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__80238_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__80239_SHARP_){
var G__80242 = p1__80239_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__80242) : color.call(null,G__80242));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle"], null)).text((function (p1__80240_SHARP_){
return p1__80240_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__80243_80295 = cljs.core.deref(viz_state);
var map__80243_80296__$1 = cljs.core.__destructure_map(map__80243_80295);
var width_80297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80243_80296__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_80298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80243_80296__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_80297,new cljs.core.Keyword(null,"height","height",1025178622),height_80298,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_80297,height_80298]], null));

return website_helpers.graph.update_sim_BANG_(sim,(4),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__80241_SHARP_){
return Math.sqrt(p1__80241_SHARP_.value);
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
