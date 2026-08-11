goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__38271__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38271 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38272__i = 0, G__38272__a = new Array(arguments.length -  0);
while (G__38272__i < G__38272__a.length) {G__38272__a[G__38272__i] = arguments[G__38272__i + 0]; ++G__38272__i;}
  args = new cljs.core.IndexedSeq(G__38272__a,0,null);
} 
return G__38271__delegate.call(this,args);};
G__38271.cljs$lang$maxFixedArity = 0;
G__38271.cljs$lang$applyTo = (function (arglist__38274){
var args = cljs.core.seq(arglist__38274);
return G__38271__delegate(args);
});
G__38271.cljs$core$IFn$_invoke$arity$variadic = G__38271__delegate;
return G__38271;
})()
);

(o.error = (function() { 
var G__38275__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38276__i = 0, G__38276__a = new Array(arguments.length -  0);
while (G__38276__i < G__38276__a.length) {G__38276__a[G__38276__i] = arguments[G__38276__i + 0]; ++G__38276__i;}
  args = new cljs.core.IndexedSeq(G__38276__a,0,null);
} 
return G__38275__delegate.call(this,args);};
G__38275.cljs$lang$maxFixedArity = 0;
G__38275.cljs$lang$applyTo = (function (arglist__38277){
var args = cljs.core.seq(arglist__38277);
return G__38275__delegate(args);
});
G__38275.cljs$core$IFn$_invoke$arity$variadic = G__38275__delegate;
return G__38275;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
