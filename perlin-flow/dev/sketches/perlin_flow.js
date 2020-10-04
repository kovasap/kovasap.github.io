// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.perlin_flow');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.perlin_flow.w = (1080);
sketches.perlin_flow.h = (480);
sketches.perlin_flow.palette = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"purple haze",new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10),(10),(20)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(0),(40)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(82),(15),(125)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),(53),(126)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(120),(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(10),(150)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(132),(26),(200)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(32),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(196),(106),(251)], null)], null)], null);
/**
 * Creates a particle map.
 */
sketches.perlin_flow.particle = (function sketches$perlin_flow$particle(id){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"vx","vx",-1685168462),(1),new cljs.core.Keyword(null,"vy","vy",-2018509997),(1),new cljs.core.Keyword(null,"size","size",1098693007),(3),new cljs.core.Keyword(null,"direction","direction",-633359395),(0),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.random.call(null,sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.random.call(null,sketches.perlin_flow.h),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette))], null);
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.perlin_flow.sketch_setup = (function sketches$perlin_flow$sketch_setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.map.call(null,sketches.perlin_flow.particle,cljs.core.range.call(null,(0),(2000)))], null);
});
sketches.perlin_flow.noise_zoom = 0.005;
/**
 * Calculates the next direction between [0, 2pi] based on the perlin noise
 *   at the position (x, y) and an id.
 */
sketches.perlin_flow.direction = (function sketches$perlin_flow$direction(x,y,id){
return (((2) * Math.PI) * (quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom)) + (0.2 * quil.core.noise.call(null,(x * sketches.perlin_flow.noise_zoom),(y * sketches.perlin_flow.noise_zoom),(id * sketches.perlin_flow.noise_zoom)))));
});
/**
 * Calculates the next position based on the current, the speed and a max.
 */
sketches.perlin_flow.position = (function sketches$perlin_flow$position(current,delta,max){
return cljs.core.mod.call(null,(current + delta),max);
});
/**
 * Calculates the next velocity by averaging the current velocity and the added
 *   delta.
 */
sketches.perlin_flow.velocity = (function sketches$perlin_flow$velocity(current,delta){
return ((current + delta) / (2));
});
/**
 * Receives the current state. Returns the next state to render.
 */
sketches.perlin_flow.sketch_update = (function sketches$perlin_flow$sketch_update(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.w),new cljs.core.Keyword(null,"y","y",-1757859776),sketches.perlin_flow.position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),sketches.perlin_flow.h),new cljs.core.Keyword(null,"direction","direction",-633359395),sketches.perlin_flow.direction.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p)),new cljs.core.Keyword(null,"vx","vx",-1685168462),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p),Math.cos(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"vy","vy",-2018509997),sketches.perlin_flow.velocity.call(null,new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p),Math.sin(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(p))));
}),new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(state))], null);
});
sketches.perlin_flow.click_radius = (100);
sketches.perlin_flow.click_push_strength = (1);
/**
 * Checks if the point map with coordinates stored as :x and :y is in the
 *   circle with radius r and center (xc, yc)
 */
sketches.perlin_flow.in_circle_QMARK_ = (function sketches$perlin_flow$in_circle_QMARK_(xc,yc,r,pt_map){
return (Math.sqrt((Math.pow((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt_map) - xc),(2)) + Math.pow((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt_map) - yc),(2)))) < r);
});
/**
 * Modifies the current state based on a mouse click.
 */
sketches.perlin_flow.sketch_mouse_clicked = (function sketches$perlin_flow$sketch_mouse_clicked(state,event){
sketches.perlin_flow.affected_particles = cljs.core.filter.call(null,cljs.core.partial.call(null,sketches.perlin_flow.in_circle_QMARK_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event),sketches.perlin_flow.click_radius),new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(state));

cljs.pprint.pprint.call(null,"Affected Particles:");

cljs.pprint.pprint.call(null,cljs.core.count.call(null,sketches.perlin_flow.affected_particles));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"particles","particles",801881788),cljs.core.map.call(null,(function (p){
if(cljs.core.truth_(sketches.perlin_flow.in_circle_QMARK_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event),sketches.perlin_flow.click_radius,p))){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"vx","vx",-1685168462),(new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(p) + (sketches.perlin_flow.click_push_strength * (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(event)))),new cljs.core.Keyword(null,"vy","vy",-2018509997),(new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(p) + (sketches.perlin_flow.click_push_strength * (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(event)))));
} else {
return p;

}
}),new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(state))], null);
});
/**
 * Draws the current state to the canvas. Called on each iteration after
 *   sketch-update.
 */
sketches.perlin_flow.sketch_draw = (function sketches$perlin_flow$sketch_draw(state){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(sketches.perlin_flow.palette));

quil.core.no_stroke.call(null);

var seq__8605 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"particles","particles",801881788).cljs$core$IFn$_invoke$arity$1(state));
var chunk__8606 = null;
var count__8607 = (0);
var i__8608 = (0);
while(true){
if((i__8608 < count__8607)){
var p = cljs.core._nth.call(null,chunk__8606,i__8608);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(50)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8609 = seq__8605;
var G__8610 = chunk__8606;
var G__8611 = count__8607;
var G__8612 = (i__8608 + (1));
seq__8605 = G__8609;
chunk__8606 = G__8610;
count__8607 = G__8611;
i__8608 = G__8612;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__8605);
if(temp__5720__auto__){
var seq__8605__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8605__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__8605__$1);
var G__8613 = cljs.core.chunk_rest.call(null,seq__8605__$1);
var G__8614 = c__4351__auto__;
var G__8615 = cljs.core.count.call(null,c__4351__auto__);
var G__8616 = (0);
seq__8605 = G__8613;
chunk__8606 = G__8614;
count__8607 = G__8615;
i__8608 = G__8616;
continue;
} else {
var p = cljs.core.first.call(null,seq__8605__$1);
cljs.core.apply.call(null,quil.core.fill,cljs.core.conj.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(p),(50)));

quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p));


var G__8617 = cljs.core.next.call(null,seq__8605__$1);
var G__8618 = null;
var G__8619 = (0);
var G__8620 = (0);
seq__8605 = G__8617;
chunk__8606 = G__8618;
count__8607 = G__8619;
i__8608 = G__8620;
continue;
}
} else {
return null;
}
}
break;
}
});
sketches.perlin_flow.create = (function sketches$perlin_flow$create(canvas){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.perlin_flow.w,sketches.perlin_flow.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_draw;},new cljs.core.Symbol("sketches.perlin-flow","sketch-draw","sketches.perlin-flow/sketch-draw",-1861499172,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src/sketches/perlin_flow.cljs",18,1,117,117,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Draws the current state to the canvas. Called on each iteration after\n  sketch-update.",(cljs.core.truth_(sketches.perlin_flow.sketch_draw)?sketches.perlin_flow.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_setup;},new cljs.core.Symbol("sketches.perlin-flow","sketch-setup","sketches.perlin-flow/sketch-setup",314602490,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src/sketches/perlin_flow.cljs",19,1,38,38,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.perlin_flow.sketch_setup)?sketches.perlin_flow.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_update;},new cljs.core.Symbol("sketches.perlin-flow","sketch-update","sketches.perlin-flow/sketch-update",-421996464,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src/sketches/perlin_flow.cljs",20,1,66,66,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Receives the current state. Returns the next state to render.",(cljs.core.truth_(sketches.perlin_flow.sketch_update)?sketches.perlin_flow.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Var(function(){return sketches.perlin_flow.sketch_mouse_clicked;},new cljs.core.Symbol("sketches.perlin-flow","sketch-mouse-clicked","sketches.perlin-flow/sketch-mouse-clicked",-58498497,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.perlin-flow","sketches.perlin-flow",-1548302130,null),new cljs.core.Symbol(null,"sketch-mouse-clicked","sketch-mouse-clicked",859605408,null),"src/sketches/perlin_flow.cljs",27,1,95,95,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),"Modifies the current state based on a mouse click.",(cljs.core.truth_(sketches.perlin_flow.sketch_mouse_clicked)?sketches.perlin_flow.sketch_mouse_clicked.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(666));

return quil.core.noise_seed.call(null,(666));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.perlin_flow !== 'undefined') && (typeof sketches.perlin_flow.sketch !== 'undefined')){
} else {
sketches.perlin_flow.sketch = sketches.perlin_flow.create.call(null,"sketch");
}

//# sourceMappingURL=perlin_flow.js.map
