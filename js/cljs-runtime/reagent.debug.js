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
var G__37899__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37900__i = 0, G__37900__a = new Array(arguments.length -  0);
while (G__37900__i < G__37900__a.length) {G__37900__a[G__37900__i] = arguments[G__37900__i + 0]; ++G__37900__i;}
  args = new cljs.core.IndexedSeq(G__37900__a,0,null);
} 
return G__37899__delegate.call(this,args);};
G__37899.cljs$lang$maxFixedArity = 0;
G__37899.cljs$lang$applyTo = (function (arglist__37901){
var args = cljs.core.seq(arglist__37901);
return G__37899__delegate(args);
});
G__37899.cljs$core$IFn$_invoke$arity$variadic = G__37899__delegate;
return G__37899;
})()
);

(o.error = (function() { 
var G__37902__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37903__i = 0, G__37903__a = new Array(arguments.length -  0);
while (G__37903__i < G__37903__a.length) {G__37903__a[G__37903__i] = arguments[G__37903__i + 0]; ++G__37903__i;}
  args = new cljs.core.IndexedSeq(G__37903__a,0,null);
} 
return G__37902__delegate.call(this,args);};
G__37902.cljs$lang$maxFixedArity = 0;
G__37902.cljs$lang$applyTo = (function (arglist__37904){
var args = cljs.core.seq(arglist__37904);
return G__37902__delegate(args);
});
G__37902.cljs$core$IFn$_invoke$arity$variadic = G__37902__delegate;
return G__37902;
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
