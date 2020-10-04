// Compiled by ClojureScript 1.10.339 {}
goog.provide('sketches.double_helix');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('sketches.common');
goog.require('quil.core');
goog.require('quil.middleware');
sketches.double_helix.w = (1080);
sketches.double_helix.h = (1080);
/**
 * Creates a particle map.
 */
sketches.double_helix.particle = (function sketches$double_helix$particle(x,y){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"ix","ix",-268822678),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"vx","vx",-1685168462),new cljs.core.Keyword(null,"vy","vy",-2018509997),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"iy","iy",959467482),new cljs.core.Keyword(null,"direction","direction",-633359395)],[y,cljs.core.rand_nth.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purple-haze","purple-haze",122440217).cljs$core$IFn$_invoke$arity$1(sketches.common.palettes))),x,(10),(1),(1),x,y,(0)]);
});
sketches.double_helix.helix_length = (800);
sketches.double_helix.helix_step = (30);
sketches.double_helix.gen_helix = (function sketches$double_helix$gen_helix(x,y,vertical_QMARK_){
if(cljs.core.truth_(vertical_QMARK_)){
return cljs.core.map.call(null,sketches.double_helix.particle,cljs.core.repeat.call(null,x),cljs.core.range.call(null,y,(y + sketches.double_helix.helix_length),sketches.double_helix.helix_step));
} else {
return cljs.core.map.call(null,sketches.double_helix.particle,cljs.core.range.call(null,x,(x + sketches.double_helix.helix_length),sketches.double_helix.helix_step),cljs.core.repeat.call(null,y));

}
});
/**
 * Returns the initial state to use for the update-render loop.
 */
sketches.double_helix.sketch_setup = (function sketches$double_helix$sketch_setup(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"helix-1","helix-1",-597851102),sketches.double_helix.gen_helix.call(null,(sketches.double_helix.w / (2)),((sketches.double_helix.h / (2)) - (sketches.double_helix.helix_length / (2))),true),new cljs.core.Keyword(null,"helix-2","helix-2",57670549),sketches.double_helix.gen_helix.call(null,((sketches.double_helix.w / (2)) - (sketches.double_helix.helix_length / (2))),(sketches.double_helix.h / (2)),false),new cljs.core.Keyword(null,"step","step",1288888124),(0)], null);
});
sketches.double_helix.amp = (100);
sketches.double_helix.freq = 0.05;
sketches.double_helix.calc_position = (function sketches$double_helix$calc_position(ipos,step,freq_mod){
return (ipos + (sketches.double_helix.amp * Math.sin(((step * sketches.double_helix.freq) * freq_mod))));
});
/**
 * Receives the current state. Returns the next state to render.
 */
sketches.double_helix.sketch_update = (function sketches$double_helix$sketch_update(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"helix-1","helix-1",-597851102),cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"x","x",2099068185),sketches.double_helix.calc_position.call(null,new cljs.core.Keyword(null,"ix","ix",-268822678).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(state),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p) / sketches.double_helix.h)));
}),new cljs.core.Keyword(null,"helix-1","helix-1",-597851102).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"helix-2","helix-2",57670549),cljs.core.map.call(null,(function (p){
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"y","y",-1757859776),sketches.double_helix.calc_position.call(null,new cljs.core.Keyword(null,"iy","iy",959467482).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(state),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p) / sketches.double_helix.w)));
}),new cljs.core.Keyword(null,"helix-2","helix-2",57670549).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"step","step",1288888124),(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(state) + (1))], null);
});
/**
 * Draws the current state to the canvas. Called on each iteration after
 *   sketch-update.
 */
sketches.double_helix.sketch_draw = (function sketches$double_helix$sketch_draw(state){
cljs.core.apply.call(null,quil.core.background,new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purple-haze","purple-haze",122440217).cljs$core$IFn$_invoke$arity$1(sketches.common.palettes)));

quil.core.no_stroke.call(null);

return sketches.common.draw_circles.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"helix-1","helix-1",-597851102).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"helix-2","helix-2",57670549).cljs$core$IFn$_invoke$arity$1(state)));
});
sketches.double_helix.create = (function sketches$double_helix$create(canvas){
return quil.core.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),canvas,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sketches.double_helix.w,sketches.double_helix.h], null),new cljs.core.Keyword(null,"draw","draw",1358331674),new cljs.core.Var(function(){return sketches.double_helix.sketch_draw;},new cljs.core.Symbol("sketches.double-helix","sketch-draw","sketches.double-helix/sketch-draw",-2001781761,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.double-helix","sketches.double-helix",-1734961898,null),new cljs.core.Symbol(null,"sketch-draw","sketch-draw",1130795881,null),"src/sketches/double_helix.cljs",18,1,69,69,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Draws the current state to the canvas. Called on each iteration after\n  sketch-update.",(cljs.core.truth_(sketches.double_helix.sketch_draw)?sketches.double_helix.sketch_draw.cljs$lang$test:null)])),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Var(function(){return sketches.double_helix.sketch_setup;},new cljs.core.Symbol("sketches.double-helix","sketch-setup","sketches.double-helix/sketch-setup",426111193,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.double-helix","sketches.double-helix",-1734961898,null),new cljs.core.Symbol(null,"sketch-setup","sketch-setup",-1605195929,null),"src/sketches/double_helix.cljs",19,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),"Returns the initial state to use for the update-render loop.",(cljs.core.truth_(sketches.double_helix.sketch_setup)?sketches.double_helix.sketch_setup.cljs$lang$test:null)])),new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Var(function(){return sketches.double_helix.sketch_update;},new cljs.core.Symbol("sketches.double-helix","sketch-update","sketches.double-helix/sketch-update",-9085581,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sketches.double-helix","sketches.double-helix",-1734961898,null),new cljs.core.Symbol(null,"sketch-update","sketch-update",877495773,null),"src/sketches/double_helix.cljs",20,1,53,53,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null)),"Receives the current state. Returns the next state to render.",(cljs.core.truth_(sketches.double_helix.sketch_update)?sketches.double_helix.sketch_update.cljs$lang$test:null)])),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
quil.core.random_seed.call(null,(666));

return quil.core.noise_seed.call(null,(666));
}));
});
if((typeof sketches !== 'undefined') && (typeof sketches.double_helix !== 'undefined') && (typeof sketches.double_helix.sketch !== 'undefined')){
} else {
sketches.double_helix.sketch = sketches.double_helix.create.call(null,"sketch");
}

//# sourceMappingURL=double_helix.js.map
