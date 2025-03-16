goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35970){
var map__35971 = p__35970;
var map__35971__$1 = cljs.core.__destructure_map(map__35971);
var m = map__35971__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35977_36332 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35978_36333 = null;
var count__35979_36334 = (0);
var i__35980_36335 = (0);
while(true){
if((i__35980_36335 < count__35979_36334)){
var f_36336 = chunk__35978_36333.cljs$core$IIndexed$_nth$arity$2(null,i__35980_36335);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36336], 0));


var G__36337 = seq__35977_36332;
var G__36338 = chunk__35978_36333;
var G__36339 = count__35979_36334;
var G__36340 = (i__35980_36335 + (1));
seq__35977_36332 = G__36337;
chunk__35978_36333 = G__36338;
count__35979_36334 = G__36339;
i__35980_36335 = G__36340;
continue;
} else {
var temp__5823__auto___36341 = cljs.core.seq(seq__35977_36332);
if(temp__5823__auto___36341){
var seq__35977_36342__$1 = temp__5823__auto___36341;
if(cljs.core.chunked_seq_QMARK_(seq__35977_36342__$1)){
var c__5568__auto___36343 = cljs.core.chunk_first(seq__35977_36342__$1);
var G__36344 = cljs.core.chunk_rest(seq__35977_36342__$1);
var G__36345 = c__5568__auto___36343;
var G__36346 = cljs.core.count(c__5568__auto___36343);
var G__36347 = (0);
seq__35977_36332 = G__36344;
chunk__35978_36333 = G__36345;
count__35979_36334 = G__36346;
i__35980_36335 = G__36347;
continue;
} else {
var f_36348 = cljs.core.first(seq__35977_36342__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36348], 0));


var G__36350 = cljs.core.next(seq__35977_36342__$1);
var G__36351 = null;
var G__36352 = (0);
var G__36353 = (0);
seq__35977_36332 = G__36350;
chunk__35978_36333 = G__36351;
count__35979_36334 = G__36352;
i__35980_36335 = G__36353;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36354], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36354)))?cljs.core.second(arglists_36354):arglists_36354)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35999_36360 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36000_36361 = null;
var count__36001_36362 = (0);
var i__36002_36363 = (0);
while(true){
if((i__36002_36363 < count__36001_36362)){
var vec__36015_36365 = chunk__36000_36361.cljs$core$IIndexed$_nth$arity$2(null,i__36002_36363);
var name_36366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015_36365,(0),null);
var map__36018_36367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015_36365,(1),null);
var map__36018_36368__$1 = cljs.core.__destructure_map(map__36018_36367);
var doc_36369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018_36368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36018_36368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36366], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36370], 0));

if(cljs.core.truth_(doc_36369)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36369], 0));
} else {
}


var G__36371 = seq__35999_36360;
var G__36372 = chunk__36000_36361;
var G__36373 = count__36001_36362;
var G__36374 = (i__36002_36363 + (1));
seq__35999_36360 = G__36371;
chunk__36000_36361 = G__36372;
count__36001_36362 = G__36373;
i__36002_36363 = G__36374;
continue;
} else {
var temp__5823__auto___36376 = cljs.core.seq(seq__35999_36360);
if(temp__5823__auto___36376){
var seq__35999_36377__$1 = temp__5823__auto___36376;
if(cljs.core.chunked_seq_QMARK_(seq__35999_36377__$1)){
var c__5568__auto___36378 = cljs.core.chunk_first(seq__35999_36377__$1);
var G__36379 = cljs.core.chunk_rest(seq__35999_36377__$1);
var G__36380 = c__5568__auto___36378;
var G__36381 = cljs.core.count(c__5568__auto___36378);
var G__36382 = (0);
seq__35999_36360 = G__36379;
chunk__36000_36361 = G__36380;
count__36001_36362 = G__36381;
i__36002_36363 = G__36382;
continue;
} else {
var vec__36025_36383 = cljs.core.first(seq__35999_36377__$1);
var name_36384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025_36383,(0),null);
var map__36028_36385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36025_36383,(1),null);
var map__36028_36386__$1 = cljs.core.__destructure_map(map__36028_36385);
var doc_36387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028_36386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36028_36386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36384], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36388], 0));

if(cljs.core.truth_(doc_36387)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36387], 0));
} else {
}


var G__36391 = cljs.core.next(seq__35999_36377__$1);
var G__36392 = null;
var G__36393 = (0);
var G__36394 = (0);
seq__35999_36360 = G__36391;
chunk__36000_36361 = G__36392;
count__36001_36362 = G__36393;
i__36002_36363 = G__36394;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36033 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36034 = null;
var count__36035 = (0);
var i__36036 = (0);
while(true){
if((i__36036 < count__36035)){
var role = chunk__36034.cljs$core$IIndexed$_nth$arity$2(null,i__36036);
var temp__5823__auto___36398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36398__$1)){
var spec_36399 = temp__5823__auto___36398__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36399)], 0));
} else {
}


var G__36400 = seq__36033;
var G__36401 = chunk__36034;
var G__36402 = count__36035;
var G__36403 = (i__36036 + (1));
seq__36033 = G__36400;
chunk__36034 = G__36401;
count__36035 = G__36402;
i__36036 = G__36403;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__36033);
if(temp__5823__auto____$1){
var seq__36033__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36033__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36033__$1);
var G__36406 = cljs.core.chunk_rest(seq__36033__$1);
var G__36407 = c__5568__auto__;
var G__36408 = cljs.core.count(c__5568__auto__);
var G__36409 = (0);
seq__36033 = G__36406;
chunk__36034 = G__36407;
count__36035 = G__36408;
i__36036 = G__36409;
continue;
} else {
var role = cljs.core.first(seq__36033__$1);
var temp__5823__auto___36410__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___36410__$2)){
var spec_36412 = temp__5823__auto___36410__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36412)], 0));
} else {
}


var G__36413 = cljs.core.next(seq__36033__$1);
var G__36414 = null;
var G__36415 = (0);
var G__36416 = (0);
seq__36033 = G__36413;
chunk__36034 = G__36414;
count__36035 = G__36415;
i__36036 = G__36416;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5823__auto__)){
var msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5823__auto__)){
var ed = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36422 = cljs.core.ex_cause(t);
via = G__36421;
t = G__36422;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5823__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5823__auto__)){
var root_msg = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5823__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5823__auto__)){
var phase = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36124 = datafied_throwable;
var map__36124__$1 = cljs.core.__destructure_map(map__36124);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36124__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36125 = cljs.core.last(via);
var map__36125__$1 = cljs.core.__destructure_map(map__36125);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36126 = data;
var map__36126__$1 = cljs.core.__destructure_map(map__36126);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36127 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36127__$1 = cljs.core.__destructure_map(map__36127);
var top_data = map__36127__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36127__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36139 = phase;
var G__36139__$1 = (((G__36139 instanceof cljs.core.Keyword))?G__36139.fqn:null);
switch (G__36139__$1) {
case "read-source":
var map__36151 = data;
var map__36151__$1 = cljs.core.__destructure_map(map__36151);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36155 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36155);
var G__36155__$2 = (cljs.core.truth_((function (){var fexpr__36164 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36164.cljs$core$IFn$_invoke$arity$1 ? fexpr__36164.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36164.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36155__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36155__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36155__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36165 = top_data;
var G__36165__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36165,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36165);
var G__36165__$2 = (cljs.core.truth_((function (){var fexpr__36171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36171.cljs$core$IFn$_invoke$arity$1 ? fexpr__36171.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36171.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36165__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36165__$1);
var G__36165__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36165__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36165__$2);
var G__36165__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36165__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36165__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36165__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36165__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36175 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36175,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36175,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36175,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36175,(3),null);
var G__36181 = top_data;
var G__36181__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36181,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36181);
var G__36181__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36181__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36181__$1);
var G__36181__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36181__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36181__$2);
var G__36181__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36181__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36181__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36181__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36181__$4;
}

break;
case "execution":
var vec__36191 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36191,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36107_SHARP_){
var or__5045__auto__ = (p1__36107_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36197 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36197.cljs$core$IFn$_invoke$arity$1 ? fexpr__36197.cljs$core$IFn$_invoke$arity$1(p1__36107_SHARP_) : fexpr__36197.call(null,p1__36107_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36202 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36202__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36202,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36202);
var G__36202__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36202__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36202__$1);
var G__36202__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36202__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36202__$2);
var G__36202__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36202__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36202__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36202__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36202__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36139__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36243){
var map__36245 = p__36243;
var map__36245__$1 = cljs.core.__destructure_map(map__36245);
var triage_data = map__36245__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36245__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36254 = phase;
var G__36254__$1 = (((G__36254 instanceof cljs.core.Keyword))?G__36254.fqn:null);
switch (G__36254__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36257 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36258 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36259 = loc;
var G__36260 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36262_36482 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36263_36483 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36264_36484 = true;
var _STAR_print_fn_STAR__temp_val__36265_36485 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36264_36484);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36265_36485);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36211_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36211_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36263_36483);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36262_36482);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36257,G__36258,G__36259,G__36260) : format.call(null,G__36257,G__36258,G__36259,G__36260));

break;
case "macroexpansion":
var G__36274 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36275 = cause_type;
var G__36276 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36277 = loc;
var G__36278 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36274,G__36275,G__36276,G__36277,G__36278) : format.call(null,G__36274,G__36275,G__36276,G__36277,G__36278));

break;
case "compile-syntax-check":
var G__36283 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36284 = cause_type;
var G__36285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36286 = loc;
var G__36287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36283,G__36284,G__36285,G__36286,G__36287) : format.call(null,G__36283,G__36284,G__36285,G__36286,G__36287));

break;
case "compilation":
var G__36289 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36290 = cause_type;
var G__36291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36292 = loc;
var G__36293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36289,G__36290,G__36291,G__36292,G__36293) : format.call(null,G__36289,G__36290,G__36291,G__36292,G__36293));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36295 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36296 = symbol;
var G__36297 = loc;
var G__36298 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36305_36504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36306_36505 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36307_36506 = true;
var _STAR_print_fn_STAR__temp_val__36308_36510 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36307_36506);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36308_36510);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36241_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36241_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36306_36505);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36305_36504);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36295,G__36296,G__36297,G__36298) : format.call(null,G__36295,G__36296,G__36297,G__36298));
} else {
var G__36316 = "Execution error%s at %s(%s).\n%s\n";
var G__36317 = cause_type;
var G__36318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36319 = loc;
var G__36320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36316,G__36317,G__36318,G__36319,G__36320) : format.call(null,G__36316,G__36317,G__36318,G__36319,G__36320));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36254__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
