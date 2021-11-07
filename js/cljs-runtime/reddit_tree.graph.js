goog.provide('reddit_tree.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
reddit_tree.graph.html = (function reddit_tree$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
reddit_tree.graph.create_sim = (function reddit_tree$graph$create_sim(viz_state){
var map__30162 = cljs.core.deref(viz_state);
var map__30162__$1 = cljs.core.__destructure_map(map__30162);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30162__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30162__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var G__30163 = d3.forceSimulation();
G__30163.stop();

G__30163.force("link",d3.forceLink().strength(1.2).id((function (p1__30155_SHARP_){
return p1__30155_SHARP_.index;
})));

G__30163.force("charge",d3.forceManyBody());

G__30163.force("center",d3.forceCenter((width / (2)),(height / (2))));

G__30163.on("tick",(function (){
var temp__5753__auto___30184 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___30184)){
var s_30185 = temp__5753__auto___30184;
rid3.attrs.attrs(s_30185,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__30156_SHARP_){
return p1__30156_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__30157_SHARP_){
return p1__30157_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__30158_SHARP_){
return p1__30158_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__30159_SHARP_){
return p1__30159_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cx","cx",1272694324),(function (p1__30160_SHARP_){
return p1__30160_SHARP_.x;
})], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cy","cy",755331060),(function (p1__30161_SHARP_){
return p1__30161_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__30163;
});
reddit_tree.graph.create_drag = (function reddit_tree$graph$create_drag(sim){
return d3.drag().on("start",(function reddit_tree$graph$create_drag_$_started(event,d,_){
if((event.active === (0))){
sim.alphaTarget(0.3).restart();
} else {
}

(d.fx = d.x);

return (d.fy = d.y);
})).on("drag",(function reddit_tree$graph$create_drag_$_dragged(event,d,_){
(d.fx = event.x);

return (d.fy = event.y);
})).on("end",(function reddit_tree$graph$create_drag_$_ended(event,d,_){
if((event.active === (0))){
sim.alphaTarget((0));
} else {
}

(d.fx = null);

return (d.fy = null);
}));
});
reddit_tree.graph.merge_nodes = (function reddit_tree$graph$merge_nodes(orig,new$,id){
var orig_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n) : id.call(null,n)),i], null);
}),orig));
var seq__30164_30189 = cljs.core.seq(new$);
var chunk__30165_30190 = null;
var count__30166_30191 = (0);
var i__30167_30192 = (0);
while(true){
if((i__30167_30192 < count__30166_30191)){
var n_30193 = chunk__30165_30190.cljs$core$IIndexed$_nth$arity$2(null,i__30167_30192);
var temp__5753__auto___30194 = (orig[(function (){var G__30170 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_30193) : id.call(null,n_30193));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__30170) : orig_map.call(null,G__30170));
})()]);
if(cljs.core.truth_(temp__5753__auto___30194)){
var old_30195 = temp__5753__auto___30194;
var temp__5753__auto___30196__$1 = old_30195.x;
if(cljs.core.truth_(temp__5753__auto___30196__$1)){
var x_30197 = temp__5753__auto___30196__$1;
(n_30193.x = x_30197);
} else {
}

var temp__5753__auto___30198__$1 = old_30195.y;
if(cljs.core.truth_(temp__5753__auto___30198__$1)){
var y_30199 = temp__5753__auto___30198__$1;
(n_30193.y = y_30199);
} else {
}

var temp__5753__auto___30200__$1 = old_30195.vx;
if(cljs.core.truth_(temp__5753__auto___30200__$1)){
var vx_30201 = temp__5753__auto___30200__$1;
(n_30193.vx = vx_30201);
} else {
}

var temp__5753__auto___30202__$1 = old_30195.vy;
if(cljs.core.truth_(temp__5753__auto___30202__$1)){
var vy_30203 = temp__5753__auto___30202__$1;
(n_30193.vy = vy_30203);
} else {
}

var temp__5753__auto___30204__$1 = old_30195.fx;
if(cljs.core.truth_(temp__5753__auto___30204__$1)){
var fx_30205 = temp__5753__auto___30204__$1;
(n_30193.fx = fx_30205);
} else {
}

var temp__5753__auto___30206__$1 = old_30195.fy;
if(cljs.core.truth_(temp__5753__auto___30206__$1)){
var fy_30207 = temp__5753__auto___30206__$1;
(n_30193.fy = fy_30207);
} else {
}
} else {
}


var G__30208 = seq__30164_30189;
var G__30209 = chunk__30165_30190;
var G__30210 = count__30166_30191;
var G__30211 = (i__30167_30192 + (1));
seq__30164_30189 = G__30208;
chunk__30165_30190 = G__30209;
count__30166_30191 = G__30210;
i__30167_30192 = G__30211;
continue;
} else {
var temp__5753__auto___30212 = cljs.core.seq(seq__30164_30189);
if(temp__5753__auto___30212){
var seq__30164_30213__$1 = temp__5753__auto___30212;
if(cljs.core.chunked_seq_QMARK_(seq__30164_30213__$1)){
var c__4638__auto___30214 = cljs.core.chunk_first(seq__30164_30213__$1);
var G__30215 = cljs.core.chunk_rest(seq__30164_30213__$1);
var G__30216 = c__4638__auto___30214;
var G__30217 = cljs.core.count(c__4638__auto___30214);
var G__30218 = (0);
seq__30164_30189 = G__30215;
chunk__30165_30190 = G__30216;
count__30166_30191 = G__30217;
i__30167_30192 = G__30218;
continue;
} else {
var n_30219 = cljs.core.first(seq__30164_30213__$1);
var temp__5753__auto___30220__$1 = (orig[(function (){var G__30171 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_30219) : id.call(null,n_30219));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__30171) : orig_map.call(null,G__30171));
})()]);
if(cljs.core.truth_(temp__5753__auto___30220__$1)){
var old_30221 = temp__5753__auto___30220__$1;
var temp__5753__auto___30222__$2 = old_30221.x;
if(cljs.core.truth_(temp__5753__auto___30222__$2)){
var x_30223 = temp__5753__auto___30222__$2;
(n_30219.x = x_30223);
} else {
}

var temp__5753__auto___30224__$2 = old_30221.y;
if(cljs.core.truth_(temp__5753__auto___30224__$2)){
var y_30225 = temp__5753__auto___30224__$2;
(n_30219.y = y_30225);
} else {
}

var temp__5753__auto___30226__$2 = old_30221.vx;
if(cljs.core.truth_(temp__5753__auto___30226__$2)){
var vx_30227 = temp__5753__auto___30226__$2;
(n_30219.vx = vx_30227);
} else {
}

var temp__5753__auto___30228__$2 = old_30221.vy;
if(cljs.core.truth_(temp__5753__auto___30228__$2)){
var vy_30229 = temp__5753__auto___30228__$2;
(n_30219.vy = vy_30229);
} else {
}

var temp__5753__auto___30230__$2 = old_30221.fx;
if(cljs.core.truth_(temp__5753__auto___30230__$2)){
var fx_30231 = temp__5753__auto___30230__$2;
(n_30219.fx = fx_30231);
} else {
}

var temp__5753__auto___30232__$2 = old_30221.fy;
if(cljs.core.truth_(temp__5753__auto___30232__$2)){
var fy_30233 = temp__5753__auto___30232__$2;
(n_30219.fy = fy_30233);
} else {
}
} else {
}


var G__30234 = cljs.core.next(seq__30164_30213__$1);
var G__30235 = null;
var G__30236 = (0);
var G__30237 = (0);
seq__30164_30189 = G__30234;
chunk__30165_30190 = G__30235;
count__30166_30191 = G__30236;
i__30167_30192 = G__30237;
continue;
}
} else {
}
}
break;
}

return new$;
});
reddit_tree.graph.update_sim_BANG_ = (function reddit_tree$graph$update_sim_BANG_(sim,alpha_target,p__30173){
var map__30174 = p__30173;
var map__30174__$1 = cljs.core.__destructure_map(map__30174);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30174__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = reddit_tree.graph.merge_nodes(old_nodes,nodes,(function (p1__30172_SHARP_){
return p1__30172_SHARP_.name;
}));
var G__30175 = sim;
G__30175.nodes(new_nodes);

G__30175.force("link").links(links);

G__30175.alpha(alpha_target);

G__30175.restart();

return G__30175;
});
reddit_tree.graph.viz = (function reddit_tree$graph$viz(ratom){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),null,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),null,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),null], null));
var sim = reddit_tree.graph.create_sim(viz_state);
var drag = reddit_tree.graph.create_drag(sim);
var color = d3.scaleOrdinal(d3.schemeSet1);
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"rid3-force-demo",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__30182_30238 = cljs.core.deref(viz_state);
var map__30182_30239__$1 = cljs.core.__destructure_map(map__30182_30238);
var width_30240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30182_30239__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_30241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30182_30239__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_30240,new cljs.core.Keyword(null,"height","height",1025178622),height_30241,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_30240,height_30241]], null));

return reddit_tree.graph.update_sim_BANG_(sim,(1),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return reddit_tree.graph.update_sim_BANG_(sim,0.3,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__30176_SHARP_){
return Math.sqrt(p1__30176_SHARP_.value);
})], null));
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"nodes",new cljs.core.Keyword(null,"tag","tag",-1290361223),"circle",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"r","r",-471384190),(function (p1__30177_SHARP_){
return p1__30177_SHARP_.size;
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__30178_SHARP_){
var G__30183 = p1__30178_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__30183) : color.call(null,G__30183));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(function (p1__30179_SHARP_){
return p1__30179_SHARP_.opacity;
})], null)).on("mouseover",(function (_event,node){
return d3.selectAll(goog.string.format(".c%s",node.id)).attr("pointer-events","all").attr("x",(node.x - (150))).attr("y",(node.y + (10))).classed("hovered",true).classed("fade-out-active",false);
})).on("mouseout",(function (_event,node){
return d3.selectAll(goog.string.format(".c%s",node.id)).attr("pointer-events","none").classed("fade-out-active",true);
})).on("dblclick",(function (_event,node){
return window.open(["https://www.reddit.com",cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.link)].join(''));
})).call(drag);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text",new cljs.core.Keyword(null,"tag","tag",-1290361223),"foreignObject",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(-100),new cljs.core.Keyword(null,"cy","cy",755331060),(-100),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"class","class",-2030961996),(function (p1__30180_SHARP_){
return ["c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30180_SHARP_.id)].join('');
})], null)).html((function (p1__30181_SHARP_){
return reddit_tree.graph.html(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-text-div"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),p1__30181_SHARP_.name], null)], null));
}));
})], null)], null)], null)], null);
});
});
reddit_tree.graph.prechew = (function reddit_tree$graph$prechew(app_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app_state),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});

//# sourceMappingURL=reddit_tree.graph.js.map
