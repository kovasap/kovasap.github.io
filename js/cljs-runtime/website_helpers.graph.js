goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__30141 = cljs.core.deref(viz_state);
var map__30141__$1 = cljs.core.__destructure_map(map__30141);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30141__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__30142 = d3.forceSimulation();
G__30142.stop();

G__30142.force("link",d3.forceLink().strength(link_strength).id((function (p1__30133_SHARP_){
return p1__30133_SHARP_.index;
})));

G__30142.force("charge",d3.forceManyBody().strength(charge_strength));

G__30142.force("center",d3.forceCenter(center_x,center_y));

G__30142.force("collide",d3.forceCollide(collide_size));

G__30142.on("tick",(function (){
var temp__5804__auto___30212 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5804__auto___30212)){
var s_30213 = temp__5804__auto___30212;
rid3.attrs.attrs(s_30213,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__30134_SHARP_){
return p1__30134_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__30135_SHARP_){
return p1__30135_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__30136_SHARP_){
return p1__30136_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__30137_SHARP_){
return p1__30137_SHARP_.target.y;
})], null));
} else {
}

var temp__5804__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__30138_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30138_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30138_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__30139_SHARP_){
return p1__30139_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__30140_SHARP_){
return p1__30140_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__30142;
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
var seq__30155_30218 = cljs.core.seq(new$);
var chunk__30156_30219 = null;
var count__30157_30220 = (0);
var i__30158_30221 = (0);
while(true){
if((i__30158_30221 < count__30157_30220)){
var n_30222 = chunk__30156_30219.cljs$core$IIndexed$_nth$arity$2(null,i__30158_30221);
var temp__5804__auto___30223 = (orig[(function (){var G__30175 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_30222) : id.call(null,n_30222));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__30175) : orig_map.call(null,G__30175));
})()]);
if(cljs.core.truth_(temp__5804__auto___30223)){
var old_30224 = temp__5804__auto___30223;
var temp__5804__auto___30225__$1 = old_30224.x;
if(cljs.core.truth_(temp__5804__auto___30225__$1)){
var x_30226 = temp__5804__auto___30225__$1;
(n_30222.x = x_30226);
} else {
}

var temp__5804__auto___30227__$1 = old_30224.y;
if(cljs.core.truth_(temp__5804__auto___30227__$1)){
var y_30228 = temp__5804__auto___30227__$1;
(n_30222.y = y_30228);
} else {
}

var temp__5804__auto___30229__$1 = old_30224.vx;
if(cljs.core.truth_(temp__5804__auto___30229__$1)){
var vx_30230 = temp__5804__auto___30229__$1;
(n_30222.vx = vx_30230);
} else {
}

var temp__5804__auto___30231__$1 = old_30224.vy;
if(cljs.core.truth_(temp__5804__auto___30231__$1)){
var vy_30232 = temp__5804__auto___30231__$1;
(n_30222.vy = vy_30232);
} else {
}

var temp__5804__auto___30233__$1 = old_30224.fx;
if(cljs.core.truth_(temp__5804__auto___30233__$1)){
var fx_30234 = temp__5804__auto___30233__$1;
(n_30222.fx = fx_30234);
} else {
}

var temp__5804__auto___30235__$1 = old_30224.fy;
if(cljs.core.truth_(temp__5804__auto___30235__$1)){
var fy_30236 = temp__5804__auto___30235__$1;
(n_30222.fy = fy_30236);
} else {
}
} else {
}


var G__30237 = seq__30155_30218;
var G__30238 = chunk__30156_30219;
var G__30239 = count__30157_30220;
var G__30240 = (i__30158_30221 + (1));
seq__30155_30218 = G__30237;
chunk__30156_30219 = G__30238;
count__30157_30220 = G__30239;
i__30158_30221 = G__30240;
continue;
} else {
var temp__5804__auto___30241 = cljs.core.seq(seq__30155_30218);
if(temp__5804__auto___30241){
var seq__30155_30242__$1 = temp__5804__auto___30241;
if(cljs.core.chunked_seq_QMARK_(seq__30155_30242__$1)){
var c__5568__auto___30243 = cljs.core.chunk_first(seq__30155_30242__$1);
var G__30244 = cljs.core.chunk_rest(seq__30155_30242__$1);
var G__30245 = c__5568__auto___30243;
var G__30246 = cljs.core.count(c__5568__auto___30243);
var G__30247 = (0);
seq__30155_30218 = G__30244;
chunk__30156_30219 = G__30245;
count__30157_30220 = G__30246;
i__30158_30221 = G__30247;
continue;
} else {
var n_30248 = cljs.core.first(seq__30155_30242__$1);
var temp__5804__auto___30249__$1 = (orig[(function (){var G__30184 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_30248) : id.call(null,n_30248));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__30184) : orig_map.call(null,G__30184));
})()]);
if(cljs.core.truth_(temp__5804__auto___30249__$1)){
var old_30250 = temp__5804__auto___30249__$1;
var temp__5804__auto___30251__$2 = old_30250.x;
if(cljs.core.truth_(temp__5804__auto___30251__$2)){
var x_30252 = temp__5804__auto___30251__$2;
(n_30248.x = x_30252);
} else {
}

var temp__5804__auto___30253__$2 = old_30250.y;
if(cljs.core.truth_(temp__5804__auto___30253__$2)){
var y_30254 = temp__5804__auto___30253__$2;
(n_30248.y = y_30254);
} else {
}

var temp__5804__auto___30255__$2 = old_30250.vx;
if(cljs.core.truth_(temp__5804__auto___30255__$2)){
var vx_30256 = temp__5804__auto___30255__$2;
(n_30248.vx = vx_30256);
} else {
}

var temp__5804__auto___30257__$2 = old_30250.vy;
if(cljs.core.truth_(temp__5804__auto___30257__$2)){
var vy_30258 = temp__5804__auto___30257__$2;
(n_30248.vy = vy_30258);
} else {
}

var temp__5804__auto___30259__$2 = old_30250.fx;
if(cljs.core.truth_(temp__5804__auto___30259__$2)){
var fx_30260 = temp__5804__auto___30259__$2;
(n_30248.fx = fx_30260);
} else {
}

var temp__5804__auto___30262__$2 = old_30250.fy;
if(cljs.core.truth_(temp__5804__auto___30262__$2)){
var fy_30263 = temp__5804__auto___30262__$2;
(n_30248.fy = fy_30263);
} else {
}
} else {
}


var G__30264 = cljs.core.next(seq__30155_30242__$1);
var G__30265 = null;
var G__30266 = (0);
var G__30267 = (0);
seq__30155_30218 = G__30264;
chunk__30156_30219 = G__30265;
count__30157_30220 = G__30266;
i__30158_30221 = G__30267;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__30186){
var map__30187 = p__30186;
var map__30187__$1 = cljs.core.__destructure_map(map__30187);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30187__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30187__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__30185_SHARP_){
return p1__30185_SHARP_.name;
}));
var G__30188 = sim;
G__30188.nodes(new_nodes);

G__30188.force("link").links(links);

G__30188.alpha(alpha_target);

G__30188.restart();

return G__30188;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256),new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(4),(-50),0.08,(750),null,null,(2000),(1000),(30),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__30189_SHARP_){
return ((3) * cljs.core.count(p1__30189_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__30190_SHARP_){
return ((function (){var x__5130__auto__ = (25);
var y__5131__auto__ = p1__30190_SHARP_.size;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})() / (2));
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__30191_SHARP_){
var G__30196 = p1__30191_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__30196) : color.call(null,G__30196));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"x-small",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__30192_SHARP_){
return p1__30192_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__30200 = cljs.core.deref(viz_state);
var map__30200__$1 = cljs.core.__destructure_map(map__30200);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30200__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30200__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var initial_alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30200__$1,new cljs.core.Keyword(null,"initial-alpha","initial-alpha",-515968256));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width,height]], null));

return website_helpers.graph.update_sim_BANG_(sim,initial_alpha,cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__30193_SHARP_){
return (Math.sqrt(p1__30193_SHARP_.value) / (2));
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
