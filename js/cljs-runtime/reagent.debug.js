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
var G__41269__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41270__i = 0, G__41270__a = new Array(arguments.length -  0);
while (G__41270__i < G__41270__a.length) {G__41270__a[G__41270__i] = arguments[G__41270__i + 0]; ++G__41270__i;}
  args = new cljs.core.IndexedSeq(G__41270__a,0,null);
} 
return G__41269__delegate.call(this,args);};
G__41269.cljs$lang$maxFixedArity = 0;
G__41269.cljs$lang$applyTo = (function (arglist__41271){
var args = cljs.core.seq(arglist__41271);
return G__41269__delegate(args);
});
G__41269.cljs$core$IFn$_invoke$arity$variadic = G__41269__delegate;
return G__41269;
})()
);

(o.error = (function() { 
var G__41272__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41273__i = 0, G__41273__a = new Array(arguments.length -  0);
while (G__41273__i < G__41273__a.length) {G__41273__a[G__41273__i] = arguments[G__41273__i + 0]; ++G__41273__i;}
  args = new cljs.core.IndexedSeq(G__41273__a,0,null);
} 
return G__41272__delegate.call(this,args);};
G__41272.cljs$lang$maxFixedArity = 0;
G__41272.cljs$lang$applyTo = (function (arglist__41274){
var args = cljs.core.seq(arglist__41274);
return G__41272__delegate(args);
});
G__41272.cljs$core$IFn$_invoke$arity$variadic = G__41272__delegate;
return G__41272;
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
