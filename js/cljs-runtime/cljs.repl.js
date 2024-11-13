goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36129){
var map__36130 = p__36129;
var map__36130__$1 = cljs.core.__destructure_map(map__36130);
var m = map__36130__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
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
var seq__36133_36495 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36134_36496 = null;
var count__36135_36497 = (0);
var i__36136_36498 = (0);
while(true){
if((i__36136_36498 < count__36135_36497)){
var f_36507 = chunk__36134_36496.cljs$core$IIndexed$_nth$arity$2(null,i__36136_36498);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36507], 0));


var G__36508 = seq__36133_36495;
var G__36509 = chunk__36134_36496;
var G__36510 = count__36135_36497;
var G__36511 = (i__36136_36498 + (1));
seq__36133_36495 = G__36508;
chunk__36134_36496 = G__36509;
count__36135_36497 = G__36510;
i__36136_36498 = G__36511;
continue;
} else {
var temp__5804__auto___36512 = cljs.core.seq(seq__36133_36495);
if(temp__5804__auto___36512){
var seq__36133_36514__$1 = temp__5804__auto___36512;
if(cljs.core.chunked_seq_QMARK_(seq__36133_36514__$1)){
var c__5568__auto___36515 = cljs.core.chunk_first(seq__36133_36514__$1);
var G__36516 = cljs.core.chunk_rest(seq__36133_36514__$1);
var G__36517 = c__5568__auto___36515;
var G__36518 = cljs.core.count(c__5568__auto___36515);
var G__36519 = (0);
seq__36133_36495 = G__36516;
chunk__36134_36496 = G__36517;
count__36135_36497 = G__36518;
i__36136_36498 = G__36519;
continue;
} else {
var f_36520 = cljs.core.first(seq__36133_36514__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36520], 0));


var G__36521 = cljs.core.next(seq__36133_36514__$1);
var G__36522 = null;
var G__36523 = (0);
var G__36524 = (0);
seq__36133_36495 = G__36521;
chunk__36134_36496 = G__36522;
count__36135_36497 = G__36523;
i__36136_36498 = G__36524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36525 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36525], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36525)))?cljs.core.second(arglists_36525):arglists_36525)], 0));
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
var seq__36155_36531 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36156_36532 = null;
var count__36157_36533 = (0);
var i__36158_36534 = (0);
while(true){
if((i__36158_36534 < count__36157_36533)){
var vec__36182_36535 = chunk__36156_36532.cljs$core$IIndexed$_nth$arity$2(null,i__36158_36534);
var name_36536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182_36535,(0),null);
var map__36185_36537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36182_36535,(1),null);
var map__36185_36538__$1 = cljs.core.__destructure_map(map__36185_36537);
var doc_36539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36185_36538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36185_36538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36540], 0));

if(cljs.core.truth_(doc_36539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36539], 0));
} else {
}


var G__36546 = seq__36155_36531;
var G__36547 = chunk__36156_36532;
var G__36548 = count__36157_36533;
var G__36549 = (i__36158_36534 + (1));
seq__36155_36531 = G__36546;
chunk__36156_36532 = G__36547;
count__36157_36533 = G__36548;
i__36158_36534 = G__36549;
continue;
} else {
var temp__5804__auto___36553 = cljs.core.seq(seq__36155_36531);
if(temp__5804__auto___36553){
var seq__36155_36558__$1 = temp__5804__auto___36553;
if(cljs.core.chunked_seq_QMARK_(seq__36155_36558__$1)){
var c__5568__auto___36559 = cljs.core.chunk_first(seq__36155_36558__$1);
var G__36560 = cljs.core.chunk_rest(seq__36155_36558__$1);
var G__36561 = c__5568__auto___36559;
var G__36562 = cljs.core.count(c__5568__auto___36559);
var G__36563 = (0);
seq__36155_36531 = G__36560;
chunk__36156_36532 = G__36561;
count__36157_36533 = G__36562;
i__36158_36534 = G__36563;
continue;
} else {
var vec__36190_36564 = cljs.core.first(seq__36155_36558__$1);
var name_36565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36190_36564,(0),null);
var map__36193_36566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36190_36564,(1),null);
var map__36193_36567__$1 = cljs.core.__destructure_map(map__36193_36566);
var doc_36568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193_36567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193_36567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36565], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36569], 0));

if(cljs.core.truth_(doc_36568)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36568], 0));
} else {
}


var G__36574 = cljs.core.next(seq__36155_36558__$1);
var G__36575 = null;
var G__36576 = (0);
var G__36577 = (0);
seq__36155_36531 = G__36574;
chunk__36156_36532 = G__36575;
count__36157_36533 = G__36576;
i__36158_36534 = G__36577;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36198 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36199 = null;
var count__36200 = (0);
var i__36201 = (0);
while(true){
if((i__36201 < count__36200)){
var role = chunk__36199.cljs$core$IIndexed$_nth$arity$2(null,i__36201);
var temp__5804__auto___36588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36588__$1)){
var spec_36591 = temp__5804__auto___36588__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36591)], 0));
} else {
}


var G__36593 = seq__36198;
var G__36594 = chunk__36199;
var G__36595 = count__36200;
var G__36596 = (i__36201 + (1));
seq__36198 = G__36593;
chunk__36199 = G__36594;
count__36200 = G__36595;
i__36201 = G__36596;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36198);
if(temp__5804__auto____$1){
var seq__36198__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36198__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36198__$1);
var G__36598 = cljs.core.chunk_rest(seq__36198__$1);
var G__36599 = c__5568__auto__;
var G__36600 = cljs.core.count(c__5568__auto__);
var G__36601 = (0);
seq__36198 = G__36598;
chunk__36199 = G__36599;
count__36200 = G__36600;
i__36201 = G__36601;
continue;
} else {
var role = cljs.core.first(seq__36198__$1);
var temp__5804__auto___36603__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36603__$2)){
var spec_36605 = temp__5804__auto___36603__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36605)], 0));
} else {
}


var G__36609 = cljs.core.next(seq__36198__$1);
var G__36610 = null;
var G__36611 = (0);
var G__36612 = (0);
seq__36198 = G__36609;
chunk__36199 = G__36610;
count__36200 = G__36611;
i__36201 = G__36612;
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
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
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
var G__36616 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36617 = cljs.core.ex_cause(t);
via = G__36616;
t = G__36617;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
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
var map__36278 = datafied_throwable;
var map__36278__$1 = cljs.core.__destructure_map(map__36278);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36278__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36279 = cljs.core.last(via);
var map__36279__$1 = cljs.core.__destructure_map(map__36279);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36279__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36280 = data;
var map__36280__$1 = cljs.core.__destructure_map(map__36280);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36281 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36281__$1 = cljs.core.__destructure_map(map__36281);
var top_data = map__36281__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36281__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36293 = phase;
var G__36293__$1 = (((G__36293 instanceof cljs.core.Keyword))?G__36293.fqn:null);
switch (G__36293__$1) {
case "read-source":
var map__36298 = data;
var map__36298__$1 = cljs.core.__destructure_map(map__36298);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36298__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36298__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36299 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36299,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36299);
var G__36299__$2 = (cljs.core.truth_((function (){var fexpr__36300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36300.cljs$core$IFn$_invoke$arity$1 ? fexpr__36300.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36300.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36299__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36299__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36299__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36316 = top_data;
var G__36316__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36316,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36316);
var G__36316__$2 = (cljs.core.truth_((function (){var fexpr__36320 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36320.cljs$core$IFn$_invoke$arity$1 ? fexpr__36320.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36320.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36316__$1);
var G__36316__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36316__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36316__$2);
var G__36316__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36316__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36316__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36316__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36316__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36331 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36331,(3),null);
var G__36349 = top_data;
var G__36349__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36349,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36349);
var G__36349__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36349__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36349__$1);
var G__36349__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36349__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36349__$2);
var G__36349__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36349__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36349__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36349__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36349__$4;
}

break;
case "execution":
var vec__36358 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36358,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36358,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36358,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36358,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36256_SHARP_){
var or__5045__auto__ = (p1__36256_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36361 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36361.cljs$core$IFn$_invoke$arity$1 ? fexpr__36361.cljs$core$IFn$_invoke$arity$1(p1__36256_SHARP_) : fexpr__36361.call(null,p1__36256_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36369 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36369__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36369,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36369);
var G__36369__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36369__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36369__$1);
var G__36369__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36369__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36369__$2);
var G__36369__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36369__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36369__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36369__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36369__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36293__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36401){
var map__36403 = p__36401;
var map__36403__$1 = cljs.core.__destructure_map(map__36403);
var triage_data = map__36403__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36409 = phase;
var G__36409__$1 = (((G__36409 instanceof cljs.core.Keyword))?G__36409.fqn:null);
switch (G__36409__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36412 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36413 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36414 = loc;
var G__36415 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36418_36654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36419_36655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36420_36656 = true;
var _STAR_print_fn_STAR__temp_val__36421_36657 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36420_36656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36421_36657);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36396_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36396_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36419_36655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36418_36654);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36412,G__36413,G__36414,G__36415) : format.call(null,G__36412,G__36413,G__36414,G__36415));

break;
case "macroexpansion":
var G__36431 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36432 = cause_type;
var G__36433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36434 = loc;
var G__36435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36431,G__36432,G__36433,G__36434,G__36435) : format.call(null,G__36431,G__36432,G__36433,G__36434,G__36435));

break;
case "compile-syntax-check":
var G__36439 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36440 = cause_type;
var G__36441 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36442 = loc;
var G__36443 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36439,G__36440,G__36441,G__36442,G__36443) : format.call(null,G__36439,G__36440,G__36441,G__36442,G__36443));

break;
case "compilation":
var G__36444 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36445 = cause_type;
var G__36446 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36447 = loc;
var G__36448 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36444,G__36445,G__36446,G__36447,G__36448) : format.call(null,G__36444,G__36445,G__36446,G__36447,G__36448));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36451 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36452 = symbol;
var G__36453 = loc;
var G__36454 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36457_36664 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36458_36665 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36459_36666 = true;
var _STAR_print_fn_STAR__temp_val__36460_36667 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36459_36666);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36460_36667);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36399_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36399_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36458_36665);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36457_36664);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36451,G__36452,G__36453,G__36454) : format.call(null,G__36451,G__36452,G__36453,G__36454));
} else {
var G__36464 = "Execution error%s at %s(%s).\n%s\n";
var G__36465 = cause_type;
var G__36466 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36467 = loc;
var G__36468 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36464,G__36465,G__36466,G__36467,G__36468) : format.call(null,G__36464,G__36465,G__36466,G__36467,G__36468));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36409__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
