goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__84645 = cljs.core.deref(viz_state);
var map__84645__$1 = cljs.core.__destructure_map(map__84645);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84645__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__84646 = d3.forceSimulation();
G__84646.stop();

G__84646.force("link",d3.forceLink().strength(link_strength).id((function (p1__84637_SHARP_){
return p1__84637_SHARP_.index;
})));

G__84646.force("charge",d3.forceManyBody().strength(charge_strength));

G__84646.force("center",d3.forceCenter(center_x,center_y));

G__84646.force("collide",d3.forceCollide(collide_size));

G__84646.on("tick",(function (){
var temp__5753__auto___84666 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___84666)){
var s_84667 = temp__5753__auto___84666;
rid3.attrs.attrs(s_84667,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__84638_SHARP_){
return p1__84638_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__84639_SHARP_){
return p1__84639_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__84640_SHARP_){
return p1__84640_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__84641_SHARP_){
return p1__84641_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__84642_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84642_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84642_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__84643_SHARP_){
return p1__84643_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__84644_SHARP_){
return p1__84644_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__84646;
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
var seq__84647_84668 = cljs.core.seq(new$);
var chunk__84648_84669 = null;
var count__84649_84670 = (0);
var i__84650_84671 = (0);
while(true){
if((i__84650_84671 < count__84649_84670)){
var n_84676 = chunk__84648_84669.cljs$core$IIndexed$_nth$arity$2(null,i__84650_84671);
var temp__5753__auto___84677 = (orig[(function (){var G__84653 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_84676) : id.call(null,n_84676));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__84653) : orig_map.call(null,G__84653));
})()]);
if(cljs.core.truth_(temp__5753__auto___84677)){
var old_84678 = temp__5753__auto___84677;
var temp__5753__auto___84679__$1 = old_84678.x;
if(cljs.core.truth_(temp__5753__auto___84679__$1)){
var x_84680 = temp__5753__auto___84679__$1;
(n_84676.x = x_84680);
} else {
}

var temp__5753__auto___84681__$1 = old_84678.y;
if(cljs.core.truth_(temp__5753__auto___84681__$1)){
var y_84682 = temp__5753__auto___84681__$1;
(n_84676.y = y_84682);
} else {
}

var temp__5753__auto___84683__$1 = old_84678.vx;
if(cljs.core.truth_(temp__5753__auto___84683__$1)){
var vx_84684 = temp__5753__auto___84683__$1;
(n_84676.vx = vx_84684);
} else {
}

var temp__5753__auto___84685__$1 = old_84678.vy;
if(cljs.core.truth_(temp__5753__auto___84685__$1)){
var vy_84686 = temp__5753__auto___84685__$1;
(n_84676.vy = vy_84686);
} else {
}

var temp__5753__auto___84687__$1 = old_84678.fx;
if(cljs.core.truth_(temp__5753__auto___84687__$1)){
var fx_84688 = temp__5753__auto___84687__$1;
(n_84676.fx = fx_84688);
} else {
}

var temp__5753__auto___84689__$1 = old_84678.fy;
if(cljs.core.truth_(temp__5753__auto___84689__$1)){
var fy_84690 = temp__5753__auto___84689__$1;
(n_84676.fy = fy_84690);
} else {
}
} else {
}


var G__84691 = seq__84647_84668;
var G__84692 = chunk__84648_84669;
var G__84693 = count__84649_84670;
var G__84694 = (i__84650_84671 + (1));
seq__84647_84668 = G__84691;
chunk__84648_84669 = G__84692;
count__84649_84670 = G__84693;
i__84650_84671 = G__84694;
continue;
} else {
var temp__5753__auto___84695 = cljs.core.seq(seq__84647_84668);
if(temp__5753__auto___84695){
var seq__84647_84696__$1 = temp__5753__auto___84695;
if(cljs.core.chunked_seq_QMARK_(seq__84647_84696__$1)){
var c__4679__auto___84701 = cljs.core.chunk_first(seq__84647_84696__$1);
var G__84702 = cljs.core.chunk_rest(seq__84647_84696__$1);
var G__84703 = c__4679__auto___84701;
var G__84704 = cljs.core.count(c__4679__auto___84701);
var G__84705 = (0);
seq__84647_84668 = G__84702;
chunk__84648_84669 = G__84703;
count__84649_84670 = G__84704;
i__84650_84671 = G__84705;
continue;
} else {
var n_84706 = cljs.core.first(seq__84647_84696__$1);
var temp__5753__auto___84707__$1 = (orig[(function (){var G__84654 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_84706) : id.call(null,n_84706));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__84654) : orig_map.call(null,G__84654));
})()]);
if(cljs.core.truth_(temp__5753__auto___84707__$1)){
var old_84708 = temp__5753__auto___84707__$1;
var temp__5753__auto___84709__$2 = old_84708.x;
if(cljs.core.truth_(temp__5753__auto___84709__$2)){
var x_84710 = temp__5753__auto___84709__$2;
(n_84706.x = x_84710);
} else {
}

var temp__5753__auto___84711__$2 = old_84708.y;
if(cljs.core.truth_(temp__5753__auto___84711__$2)){
var y_84712 = temp__5753__auto___84711__$2;
(n_84706.y = y_84712);
} else {
}

var temp__5753__auto___84713__$2 = old_84708.vx;
if(cljs.core.truth_(temp__5753__auto___84713__$2)){
var vx_84714 = temp__5753__auto___84713__$2;
(n_84706.vx = vx_84714);
} else {
}

var temp__5753__auto___84715__$2 = old_84708.vy;
if(cljs.core.truth_(temp__5753__auto___84715__$2)){
var vy_84716 = temp__5753__auto___84715__$2;
(n_84706.vy = vy_84716);
} else {
}

var temp__5753__auto___84717__$2 = old_84708.fx;
if(cljs.core.truth_(temp__5753__auto___84717__$2)){
var fx_84718 = temp__5753__auto___84717__$2;
(n_84706.fx = fx_84718);
} else {
}

var temp__5753__auto___84719__$2 = old_84708.fy;
if(cljs.core.truth_(temp__5753__auto___84719__$2)){
var fy_84720 = temp__5753__auto___84719__$2;
(n_84706.fy = fy_84720);
} else {
}
} else {
}


var G__84721 = cljs.core.next(seq__84647_84696__$1);
var G__84722 = null;
var G__84723 = (0);
var G__84724 = (0);
seq__84647_84668 = G__84721;
chunk__84648_84669 = G__84722;
count__84649_84670 = G__84723;
i__84650_84671 = G__84724;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__84656){
var map__84657 = p__84656;
var map__84657__$1 = cljs.core.__destructure_map(map__84657);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84657__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84657__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__84655_SHARP_){
return p1__84655_SHARP_.name;
}));
var G__84658 = sim;
G__84658.nodes(new_nodes);

G__84658.force("link").links(links);

G__84658.alpha(alpha_target);

G__84658.restart();

return G__84658;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__84659_SHARP_){
return ((3) * cljs.core.count(p1__84659_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__84660_SHARP_){
return ((function (){var x__4336__auto__ = (25);
var y__4337__auto__ = p1__84660_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})() / (2));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__84661_SHARP_){
var G__84664 = p1__84661_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__84664) : color.call(null,G__84664));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"x-small",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__84662_SHARP_){
return p1__84662_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__84665 = cljs.core.deref(viz_state);
var map__84665__$1 = cljs.core.__destructure_map(map__84665);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84665__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84665__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84665__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__84663_SHARP_){
return (Math.sqrt(p1__84663_SHARP_.value) / (2));
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
