goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__27264 = cljs.core.deref(viz_state);
var map__27264__$1 = cljs.core.__destructure_map(map__27264);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27264__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__27265 = d3.forceSimulation();
G__27265.stop();

G__27265.force("link",d3.forceLink().strength(link_strength).id((function (p1__27256_SHARP_){
return p1__27256_SHARP_.index;
})));

G__27265.force("charge",d3.forceManyBody().strength(charge_strength));

G__27265.force("center",d3.forceCenter(center_x,center_y));

G__27265.force("collide",d3.forceCollide(collide_size));

G__27265.on("tick",(function (){
var temp__5804__auto___27387 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5804__auto___27387)){
var s_27388 = temp__5804__auto___27387;
rid3.attrs.attrs(s_27388,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__27257_SHARP_){
return p1__27257_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__27258_SHARP_){
return p1__27258_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__27259_SHARP_){
return p1__27259_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__27260_SHARP_){
return p1__27260_SHARP_.target.y;
})], null));
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__27261_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27261_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27261_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__27262_SHARP_){
return p1__27262_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__27263_SHARP_){
return p1__27263_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__27265;
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
var seq__27266_27394 = cljs.core.seq(new$);
var chunk__27267_27395 = null;
var count__27268_27396 = (0);
var i__27269_27397 = (0);
while(true){
if((i__27269_27397 < count__27268_27396)){
var n_27398 = chunk__27267_27395.cljs$core$IIndexed$_nth$arity$2(null,i__27269_27397);
var temp__5804__auto___27399 = (orig[(function (){var G__27284 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_27398) : id.call(null,n_27398));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__27284) : orig_map.call(null,G__27284));
})()]);
if(cljs.core.truth_(temp__5804__auto___27399)){
var old_27400 = temp__5804__auto___27399;
var temp__5804__auto___27401__$1 = old_27400.x;
if(cljs.core.truth_(temp__5804__auto___27401__$1)){
var x_27402 = temp__5804__auto___27401__$1;
(n_27398.x = x_27402);
} else {
}

var temp__5804__auto___27403__$1 = old_27400.y;
if(cljs.core.truth_(temp__5804__auto___27403__$1)){
var y_27404 = temp__5804__auto___27403__$1;
(n_27398.y = y_27404);
} else {
}

var temp__5804__auto___27405__$1 = old_27400.vx;
if(cljs.core.truth_(temp__5804__auto___27405__$1)){
var vx_27406 = temp__5804__auto___27405__$1;
(n_27398.vx = vx_27406);
} else {
}

var temp__5804__auto___27407__$1 = old_27400.vy;
if(cljs.core.truth_(temp__5804__auto___27407__$1)){
var vy_27408 = temp__5804__auto___27407__$1;
(n_27398.vy = vy_27408);
} else {
}

var temp__5804__auto___27409__$1 = old_27400.fx;
if(cljs.core.truth_(temp__5804__auto___27409__$1)){
var fx_27410 = temp__5804__auto___27409__$1;
(n_27398.fx = fx_27410);
} else {
}

var temp__5804__auto___27411__$1 = old_27400.fy;
if(cljs.core.truth_(temp__5804__auto___27411__$1)){
var fy_27412 = temp__5804__auto___27411__$1;
(n_27398.fy = fy_27412);
} else {
}
} else {
}


var G__27413 = seq__27266_27394;
var G__27414 = chunk__27267_27395;
var G__27415 = count__27268_27396;
var G__27416 = (i__27269_27397 + (1));
seq__27266_27394 = G__27413;
chunk__27267_27395 = G__27414;
count__27268_27396 = G__27415;
i__27269_27397 = G__27416;
continue;
} else {
var temp__5804__auto___27417 = cljs.core.seq(seq__27266_27394);
if(temp__5804__auto___27417){
var seq__27266_27418__$1 = temp__5804__auto___27417;
if(cljs.core.chunked_seq_QMARK_(seq__27266_27418__$1)){
var c__5568__auto___27419 = cljs.core.chunk_first(seq__27266_27418__$1);
var G__27420 = cljs.core.chunk_rest(seq__27266_27418__$1);
var G__27421 = c__5568__auto___27419;
var G__27422 = cljs.core.count(c__5568__auto___27419);
var G__27423 = (0);
seq__27266_27394 = G__27420;
chunk__27267_27395 = G__27421;
count__27268_27396 = G__27422;
i__27269_27397 = G__27423;
continue;
} else {
var n_27424 = cljs.core.first(seq__27266_27418__$1);
var temp__5804__auto___27425__$1 = (orig[(function (){var G__27289 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_27424) : id.call(null,n_27424));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__27289) : orig_map.call(null,G__27289));
})()]);
if(cljs.core.truth_(temp__5804__auto___27425__$1)){
var old_27426 = temp__5804__auto___27425__$1;
var temp__5804__auto___27427__$2 = old_27426.x;
if(cljs.core.truth_(temp__5804__auto___27427__$2)){
var x_27428 = temp__5804__auto___27427__$2;
(n_27424.x = x_27428);
} else {
}

var temp__5804__auto___27429__$2 = old_27426.y;
if(cljs.core.truth_(temp__5804__auto___27429__$2)){
var y_27430 = temp__5804__auto___27429__$2;
(n_27424.y = y_27430);
} else {
}

var temp__5804__auto___27431__$2 = old_27426.vx;
if(cljs.core.truth_(temp__5804__auto___27431__$2)){
var vx_27432 = temp__5804__auto___27431__$2;
(n_27424.vx = vx_27432);
} else {
}

var temp__5804__auto___27433__$2 = old_27426.vy;
if(cljs.core.truth_(temp__5804__auto___27433__$2)){
var vy_27434 = temp__5804__auto___27433__$2;
(n_27424.vy = vy_27434);
} else {
}

var temp__5804__auto___27435__$2 = old_27426.fx;
if(cljs.core.truth_(temp__5804__auto___27435__$2)){
var fx_27436 = temp__5804__auto___27435__$2;
(n_27424.fx = fx_27436);
} else {
}

var temp__5804__auto___27437__$2 = old_27426.fy;
if(cljs.core.truth_(temp__5804__auto___27437__$2)){
var fy_27438 = temp__5804__auto___27437__$2;
(n_27424.fy = fy_27438);
} else {
}
} else {
}


var G__27439 = cljs.core.next(seq__27266_27418__$1);
var G__27440 = null;
var G__27441 = (0);
var G__27442 = (0);
seq__27266_27394 = G__27439;
chunk__27267_27395 = G__27440;
count__27268_27396 = G__27441;
i__27269_27397 = G__27442;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__27314){
var map__27315 = p__27314;
var map__27315__$1 = cljs.core.__destructure_map(map__27315);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27315__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27315__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__27309_SHARP_){
return p1__27309_SHARP_.name;
}));
var G__27317 = sim;
G__27317.nodes(new_nodes);

G__27317.force("link").links(links);

G__27317.alpha(alpha_target);

G__27317.restart();

return G__27317;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var group_color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#ff7f00","#377eb8","#4daf4a","#984ea3"], null));
var category_color = d3.scaleOrdinal(d3.schemeCategory10);
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__27320_SHARP_){
return ((15) + ((3) * cljs.core.count(p1__27320_SHARP_.name)));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__27321_SHARP_){
return ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__27321_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / 1.8);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__27322_SHARP_){
var G__27345 = p1__27322_SHARP_.group;
return (group_color.cljs$core$IFn$_invoke$arity$1 ? group_color.cljs$core$IFn$_invoke$arity$1(G__27345) : group_color.call(null,G__27345));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.6], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(function (p1__27323_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),p1__27323_SHARP_.group)){
return "small";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__27323_SHARP_.group)){
return "small";
} else {
return "x-small";

}
}
}),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(function (p1__27324_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),p1__27324_SHARP_.group)){
return "bold";
} else {
return "normal";
}
}),new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__27325_SHARP_){
return p1__27325_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__27347 = cljs.core.deref(viz_state);
var map__27347__$1 = cljs.core.__destructure_map(map__27347);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27347__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__27326_SHARP_){
return (Math.sqrt(p1__27326_SHARP_.value) / (2));
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
