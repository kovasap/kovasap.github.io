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
var G__37152__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37153__i = 0, G__37153__a = new Array(arguments.length -  0);
while (G__37153__i < G__37153__a.length) {G__37153__a[G__37153__i] = arguments[G__37153__i + 0]; ++G__37153__i;}
  args = new cljs.core.IndexedSeq(G__37153__a,0,null);
} 
return G__37152__delegate.call(this,args);};
G__37152.cljs$lang$maxFixedArity = 0;
G__37152.cljs$lang$applyTo = (function (arglist__37154){
var args = cljs.core.seq(arglist__37154);
return G__37152__delegate(args);
});
G__37152.cljs$core$IFn$_invoke$arity$variadic = G__37152__delegate;
return G__37152;
})()
);

(o.error = (function() { 
var G__37155__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37156__i = 0, G__37156__a = new Array(arguments.length -  0);
while (G__37156__i < G__37156__a.length) {G__37156__a[G__37156__i] = arguments[G__37156__i + 0]; ++G__37156__i;}
  args = new cljs.core.IndexedSeq(G__37156__a,0,null);
} 
return G__37155__delegate.call(this,args);};
G__37155.cljs$lang$maxFixedArity = 0;
G__37155.cljs$lang$applyTo = (function (arglist__37157){
var args = cljs.core.seq(arglist__37157);
return G__37155__delegate(args);
});
G__37155.cljs$core$IFn$_invoke$arity$variadic = G__37155__delegate;
return G__37155;
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
