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
var G__79009__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__79009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79010__i = 0, G__79010__a = new Array(arguments.length -  0);
while (G__79010__i < G__79010__a.length) {G__79010__a[G__79010__i] = arguments[G__79010__i + 0]; ++G__79010__i;}
  args = new cljs.core.IndexedSeq(G__79010__a,0,null);
} 
return G__79009__delegate.call(this,args);};
G__79009.cljs$lang$maxFixedArity = 0;
G__79009.cljs$lang$applyTo = (function (arglist__79011){
var args = cljs.core.seq(arglist__79011);
return G__79009__delegate(args);
});
G__79009.cljs$core$IFn$_invoke$arity$variadic = G__79009__delegate;
return G__79009;
})()
);

(o.error = (function() { 
var G__79012__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__79012 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79014__i = 0, G__79014__a = new Array(arguments.length -  0);
while (G__79014__i < G__79014__a.length) {G__79014__a[G__79014__i] = arguments[G__79014__i + 0]; ++G__79014__i;}
  args = new cljs.core.IndexedSeq(G__79014__a,0,null);
} 
return G__79012__delegate.call(this,args);};
G__79012.cljs$lang$maxFixedArity = 0;
G__79012.cljs$lang$applyTo = (function (arglist__79015){
var args = cljs.core.seq(arglist__79015);
return G__79012__delegate(args);
});
G__79012.cljs$core$IFn$_invoke$arity$variadic = G__79012__delegate;
return G__79012;
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
