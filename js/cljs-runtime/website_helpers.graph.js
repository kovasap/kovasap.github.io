goog.provide('website_helpers.graph');
/**
 * Turns hiccup like syntax into an HTML string.
 */
website_helpers.graph.html = (function website_helpers$graph$html(hiccup){
return sablono.server.render_static(sablono.interpreter.interpret(hiccup));
});
website_helpers.graph.create_sim = (function website_helpers$graph$create_sim(viz_state){
var map__84184 = cljs.core.deref(viz_state);
var map__84184__$1 = cljs.core.__destructure_map(map__84184);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var link_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116));
var charge_strength = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883));
var center_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"center-x","center-x",2109659472));
var center_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"center-y","center-y",-233780987));
var collide_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84184__$1,new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356));
var G__84185 = d3.forceSimulation();
G__84185.stop();

G__84185.force("link",d3.forceLink().strength(link_strength).id((function (p1__84176_SHARP_){
return p1__84176_SHARP_.index;
})));

G__84185.force("charge",d3.forceManyBody().strength(charge_strength));

G__84185.force("center",d3.forceCenter(center_x,center_y));

G__84185.force("collide",d3.forceCollide(collide_size));

G__84185.on("tick",(function (){
var temp__5753__auto___84205 = new cljs.core.Keyword(null,"links-sel","links-sel",1725983752).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto___84205)){
var s_84206 = temp__5753__auto___84205;
rid3.attrs.attrs(s_84206,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__84177_SHARP_){
return p1__84177_SHARP_.source.x;
}),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__84178_SHARP_){
return p1__84178_SHARP_.source.y;
}),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__84179_SHARP_){
return p1__84179_SHARP_.target.x;
}),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__84180_SHARP_){
return p1__84180_SHARP_.target.y;
})], null));
} else {
}

var temp__5753__auto__ = new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(viz_state));
if(cljs.core.truth_(temp__5753__auto__)){
var s = temp__5753__auto__;
return rid3.attrs.attrs(s,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__84181_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84181_SHARP_.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84181_SHARP_.y),")"].join('');
}),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__84182_SHARP_){
return p1__84182_SHARP_.x;
}),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__84183_SHARP_){
return p1__84183_SHARP_.y;
})], null));
} else {
return null;
}
}));

return G__84185;
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
var seq__84186_84207 = cljs.core.seq(new$);
var chunk__84187_84208 = null;
var count__84188_84209 = (0);
var i__84189_84210 = (0);
while(true){
if((i__84189_84210 < count__84188_84209)){
var n_84211 = chunk__84187_84208.cljs$core$IIndexed$_nth$arity$2(null,i__84189_84210);
var temp__5753__auto___84212 = (orig[(function (){var G__84192 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_84211) : id.call(null,n_84211));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__84192) : orig_map.call(null,G__84192));
})()]);
if(cljs.core.truth_(temp__5753__auto___84212)){
var old_84213 = temp__5753__auto___84212;
var temp__5753__auto___84214__$1 = old_84213.x;
if(cljs.core.truth_(temp__5753__auto___84214__$1)){
var x_84215 = temp__5753__auto___84214__$1;
(n_84211.x = x_84215);
} else {
}

var temp__5753__auto___84216__$1 = old_84213.y;
if(cljs.core.truth_(temp__5753__auto___84216__$1)){
var y_84217 = temp__5753__auto___84216__$1;
(n_84211.y = y_84217);
} else {
}

var temp__5753__auto___84218__$1 = old_84213.vx;
if(cljs.core.truth_(temp__5753__auto___84218__$1)){
var vx_84219 = temp__5753__auto___84218__$1;
(n_84211.vx = vx_84219);
} else {
}

var temp__5753__auto___84220__$1 = old_84213.vy;
if(cljs.core.truth_(temp__5753__auto___84220__$1)){
var vy_84221 = temp__5753__auto___84220__$1;
(n_84211.vy = vy_84221);
} else {
}

var temp__5753__auto___84222__$1 = old_84213.fx;
if(cljs.core.truth_(temp__5753__auto___84222__$1)){
var fx_84223 = temp__5753__auto___84222__$1;
(n_84211.fx = fx_84223);
} else {
}

var temp__5753__auto___84224__$1 = old_84213.fy;
if(cljs.core.truth_(temp__5753__auto___84224__$1)){
var fy_84225 = temp__5753__auto___84224__$1;
(n_84211.fy = fy_84225);
} else {
}
} else {
}


var G__84226 = seq__84186_84207;
var G__84227 = chunk__84187_84208;
var G__84228 = count__84188_84209;
var G__84229 = (i__84189_84210 + (1));
seq__84186_84207 = G__84226;
chunk__84187_84208 = G__84227;
count__84188_84209 = G__84228;
i__84189_84210 = G__84229;
continue;
} else {
var temp__5753__auto___84230 = cljs.core.seq(seq__84186_84207);
if(temp__5753__auto___84230){
var seq__84186_84231__$1 = temp__5753__auto___84230;
if(cljs.core.chunked_seq_QMARK_(seq__84186_84231__$1)){
var c__4679__auto___84232 = cljs.core.chunk_first(seq__84186_84231__$1);
var G__84233 = cljs.core.chunk_rest(seq__84186_84231__$1);
var G__84234 = c__4679__auto___84232;
var G__84235 = cljs.core.count(c__4679__auto___84232);
var G__84236 = (0);
seq__84186_84207 = G__84233;
chunk__84187_84208 = G__84234;
count__84188_84209 = G__84235;
i__84189_84210 = G__84236;
continue;
} else {
var n_84237 = cljs.core.first(seq__84186_84231__$1);
var temp__5753__auto___84238__$1 = (orig[(function (){var G__84193 = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(n_84237) : id.call(null,n_84237));
return (orig_map.cljs$core$IFn$_invoke$arity$1 ? orig_map.cljs$core$IFn$_invoke$arity$1(G__84193) : orig_map.call(null,G__84193));
})()]);
if(cljs.core.truth_(temp__5753__auto___84238__$1)){
var old_84239 = temp__5753__auto___84238__$1;
var temp__5753__auto___84240__$2 = old_84239.x;
if(cljs.core.truth_(temp__5753__auto___84240__$2)){
var x_84241 = temp__5753__auto___84240__$2;
(n_84237.x = x_84241);
} else {
}

var temp__5753__auto___84242__$2 = old_84239.y;
if(cljs.core.truth_(temp__5753__auto___84242__$2)){
var y_84243 = temp__5753__auto___84242__$2;
(n_84237.y = y_84243);
} else {
}

var temp__5753__auto___84244__$2 = old_84239.vx;
if(cljs.core.truth_(temp__5753__auto___84244__$2)){
var vx_84245 = temp__5753__auto___84244__$2;
(n_84237.vx = vx_84245);
} else {
}

var temp__5753__auto___84246__$2 = old_84239.vy;
if(cljs.core.truth_(temp__5753__auto___84246__$2)){
var vy_84248 = temp__5753__auto___84246__$2;
(n_84237.vy = vy_84248);
} else {
}

var temp__5753__auto___84249__$2 = old_84239.fx;
if(cljs.core.truth_(temp__5753__auto___84249__$2)){
var fx_84250 = temp__5753__auto___84249__$2;
(n_84237.fx = fx_84250);
} else {
}

var temp__5753__auto___84251__$2 = old_84239.fy;
if(cljs.core.truth_(temp__5753__auto___84251__$2)){
var fy_84252 = temp__5753__auto___84251__$2;
(n_84237.fy = fy_84252);
} else {
}
} else {
}


var G__84253 = cljs.core.next(seq__84186_84231__$1);
var G__84254 = null;
var G__84255 = (0);
var G__84256 = (0);
seq__84186_84207 = G__84253;
chunk__84187_84208 = G__84254;
count__84188_84209 = G__84255;
i__84189_84210 = G__84256;
continue;
}
} else {
}
}
break;
}

return new$;
});
website_helpers.graph.update_sim_BANG_ = (function website_helpers$graph$update_sim_BANG_(sim,alpha_target,p__84195){
var map__84196 = p__84195;
var map__84196__$1 = cljs.core.__destructure_map(map__84196);
var links = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84196__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84196__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var old_nodes = sim.nodes();
var new_nodes = website_helpers.graph.merge_nodes(old_nodes,nodes,(function (p1__84194_SHARP_){
return p1__84194_SHARP_.name;
}));
var G__84197 = sim;
G__84197.nodes(new_nodes);

G__84197.force("link").links(links);

G__84197.alpha(alpha_target);

G__84197.restart();

return G__84197;
});
website_helpers.graph.viz = (function website_helpers$graph$viz(ratom,base_link,state_override_map){
var viz_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"charge-strength","charge-strength",1642158883),new cljs.core.Keyword(null,"link-strength","link-strength",-2036677116),new cljs.core.Keyword(null,"center-y","center-y",-233780987),new cljs.core.Keyword(null,"hover-text-sel","hover-text-sel",-1797118521),new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"center-x","center-x",2109659472),new cljs.core.Keyword(null,"collide-size","collide-size",-1869929356),new cljs.core.Keyword(null,"nodes-sel","nodes-sel",1504179930),new cljs.core.Keyword(null,"height","height",1025178622)],[(-100),0.08,(750),null,null,(2000),(1000),(50),null,(1500)]),state_override_map], 0)));
var sim = website_helpers.graph.create_sim(viz_state);
var drag = website_helpers.graph.create_drag(sim);
var color = d3.scaleOrdinal(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#377eb8","#4daf4a","#984ea3","#ff7f00"], null));
var add_circle = (function (sel){
return rid3.attrs.attrs(sel.append("ellipse"),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#fff",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),1.5,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__84198_SHARP_){
return ((5) * cljs.core.count(p1__84198_SHARP_.name));
}),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__84199_SHARP_){
var x__4336__auto__ = (25);
var y__4337__auto__ = p1__84199_SHARP_.size;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
}),new cljs.core.Keyword(null,"fill","fill",883462889),(function (p1__84200_SHARP_){
var G__84203 = p1__84200_SHARP_.group;
return (color.cljs$core$IFn$_invoke$arity$1 ? color.cljs$core$IFn$_invoke$arity$1(G__84203) : color.call(null,G__84203));
}),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.7], null));
});
var add_text = (function (sel){
return rid3.attrs.attrs(sel.append("text"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"y","y",-1757859776),(5)], null)).text((function (p1__84201_SHARP_){
return p1__84201_SHARP_.name;
}));
});
return (function (ratom__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rid3.core.viz,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"force-graph",new cljs.core.Keyword(null,"ratom","ratom",-126521267),ratom__$1,new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (svg,ratom__$2){
var map__84204_84257 = cljs.core.deref(viz_state);
var map__84204_84258__$1 = cljs.core.__destructure_map(map__84204_84257);
var width_84259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84204_84258__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_84260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84204_84258__$1,new cljs.core.Keyword(null,"height","height",1025178622));
rid3.attrs.attrs(svg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width_84259,new cljs.core.Keyword(null,"height","height",1025178622),height_84260,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[(0),(0),width_84259,height_84260]], null));

return website_helpers.graph.update_sim_BANG_(sim,(4),cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (svg,ratom__$2){
return website_helpers.graph.update_sim_BANG_(sim,0.5,cljs.core.deref(ratom__$2));
})], null),new cljs.core.Keyword(null,"pieces","pieces",-1436634023),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"elem-with-data","elem-with-data",-1845237220),new cljs.core.Keyword(null,"class","class",-2030961996),"links",new cljs.core.Keyword(null,"tag","tag",-1290361223),"line",new cljs.core.Keyword(null,"prepare-dataset","prepare-dataset",1819340010),(function (ratom__$2){
return new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ratom__$2));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (sel,_ratom){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(viz_state,cljs.core.assoc,new cljs.core.Keyword(null,"links-sel","links-sel",1725983752),sel);

return rid3.attrs.attrs(sel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#999",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),0.6,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(function (p1__84202_SHARP_){
return Math.sqrt(p1__84202_SHARP_.value);
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
