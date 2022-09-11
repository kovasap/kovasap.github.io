goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36131){
var map__36132 = p__36131;
var map__36132__$1 = cljs.core.__destructure_map(map__36132);
var m = map__36132__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36143_36519 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36144_36520 = null;
var count__36145_36521 = (0);
var i__36146_36522 = (0);
while(true){
if((i__36146_36522 < count__36145_36521)){
var f_36523 = chunk__36144_36520.cljs$core$IIndexed$_nth$arity$2(null,i__36146_36522);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36523], 0));


var G__36525 = seq__36143_36519;
var G__36526 = chunk__36144_36520;
var G__36527 = count__36145_36521;
var G__36528 = (i__36146_36522 + (1));
seq__36143_36519 = G__36525;
chunk__36144_36520 = G__36526;
count__36145_36521 = G__36527;
i__36146_36522 = G__36528;
continue;
} else {
var temp__5804__auto___36529 = cljs.core.seq(seq__36143_36519);
if(temp__5804__auto___36529){
var seq__36143_36531__$1 = temp__5804__auto___36529;
if(cljs.core.chunked_seq_QMARK_(seq__36143_36531__$1)){
var c__5568__auto___36532 = cljs.core.chunk_first(seq__36143_36531__$1);
var G__36533 = cljs.core.chunk_rest(seq__36143_36531__$1);
var G__36534 = c__5568__auto___36532;
var G__36535 = cljs.core.count(c__5568__auto___36532);
var G__36536 = (0);
seq__36143_36519 = G__36533;
chunk__36144_36520 = G__36534;
count__36145_36521 = G__36535;
i__36146_36522 = G__36536;
continue;
} else {
var f_36542 = cljs.core.first(seq__36143_36531__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36542], 0));


var G__36543 = cljs.core.next(seq__36143_36531__$1);
var G__36544 = null;
var G__36545 = (0);
var G__36546 = (0);
seq__36143_36519 = G__36543;
chunk__36144_36520 = G__36544;
count__36145_36521 = G__36545;
i__36146_36522 = G__36546;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36548 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36548], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36548)))?cljs.core.second(arglists_36548):arglists_36548)], 0));
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
var seq__36169_36551 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36170_36552 = null;
var count__36171_36553 = (0);
var i__36172_36554 = (0);
while(true){
if((i__36172_36554 < count__36171_36553)){
var vec__36196_36556 = chunk__36170_36552.cljs$core$IIndexed$_nth$arity$2(null,i__36172_36554);
var name_36557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196_36556,(0),null);
var map__36199_36558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36196_36556,(1),null);
var map__36199_36559__$1 = cljs.core.__destructure_map(map__36199_36558);
var doc_36560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199_36559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36199_36559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36557], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36561], 0));

if(cljs.core.truth_(doc_36560)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36560], 0));
} else {
}


var G__36565 = seq__36169_36551;
var G__36566 = chunk__36170_36552;
var G__36567 = count__36171_36553;
var G__36568 = (i__36172_36554 + (1));
seq__36169_36551 = G__36565;
chunk__36170_36552 = G__36566;
count__36171_36553 = G__36567;
i__36172_36554 = G__36568;
continue;
} else {
var temp__5804__auto___36570 = cljs.core.seq(seq__36169_36551);
if(temp__5804__auto___36570){
var seq__36169_36571__$1 = temp__5804__auto___36570;
if(cljs.core.chunked_seq_QMARK_(seq__36169_36571__$1)){
var c__5568__auto___36573 = cljs.core.chunk_first(seq__36169_36571__$1);
var G__36574 = cljs.core.chunk_rest(seq__36169_36571__$1);
var G__36575 = c__5568__auto___36573;
var G__36576 = cljs.core.count(c__5568__auto___36573);
var G__36577 = (0);
seq__36169_36551 = G__36574;
chunk__36170_36552 = G__36575;
count__36171_36553 = G__36576;
i__36172_36554 = G__36577;
continue;
} else {
var vec__36205_36578 = cljs.core.first(seq__36169_36571__$1);
var name_36579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205_36578,(0),null);
var map__36208_36580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205_36578,(1),null);
var map__36208_36581__$1 = cljs.core.__destructure_map(map__36208_36580);
var doc_36582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208_36581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36208_36581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36579], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36583], 0));

if(cljs.core.truth_(doc_36582)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36582], 0));
} else {
}


var G__36586 = cljs.core.next(seq__36169_36571__$1);
var G__36587 = null;
var G__36588 = (0);
var G__36589 = (0);
seq__36169_36551 = G__36586;
chunk__36170_36552 = G__36587;
count__36171_36553 = G__36588;
i__36172_36554 = G__36589;
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

var seq__36211 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36212 = null;
var count__36213 = (0);
var i__36214 = (0);
while(true){
if((i__36214 < count__36213)){
var role = chunk__36212.cljs$core$IIndexed$_nth$arity$2(null,i__36214);
var temp__5804__auto___36592__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36592__$1)){
var spec_36593 = temp__5804__auto___36592__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36593)], 0));
} else {
}


var G__36594 = seq__36211;
var G__36595 = chunk__36212;
var G__36596 = count__36213;
var G__36597 = (i__36214 + (1));
seq__36211 = G__36594;
chunk__36212 = G__36595;
count__36213 = G__36596;
i__36214 = G__36597;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36211);
if(temp__5804__auto____$1){
var seq__36211__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36211__$1);
var G__36603 = cljs.core.chunk_rest(seq__36211__$1);
var G__36604 = c__5568__auto__;
var G__36605 = cljs.core.count(c__5568__auto__);
var G__36606 = (0);
seq__36211 = G__36603;
chunk__36212 = G__36604;
count__36213 = G__36605;
i__36214 = G__36606;
continue;
} else {
var role = cljs.core.first(seq__36211__$1);
var temp__5804__auto___36608__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36608__$2)){
var spec_36610 = temp__5804__auto___36608__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36610)], 0));
} else {
}


var G__36612 = cljs.core.next(seq__36211__$1);
var G__36613 = null;
var G__36614 = (0);
var G__36615 = (0);
seq__36211 = G__36612;
chunk__36212 = G__36613;
count__36213 = G__36614;
i__36214 = G__36615;
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
var G__36620 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36621 = cljs.core.ex_cause(t);
via = G__36620;
t = G__36621;
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
var map__36374 = datafied_throwable;
var map__36374__$1 = cljs.core.__destructure_map(map__36374);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36374__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36374__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36374__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36375 = cljs.core.last(via);
var map__36375__$1 = cljs.core.__destructure_map(map__36375);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36375__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36375__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36375__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36376 = data;
var map__36376__$1 = cljs.core.__destructure_map(map__36376);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36376__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36377 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36377__$1 = cljs.core.__destructure_map(map__36377);
var top_data = map__36377__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36382 = phase;
var G__36382__$1 = (((G__36382 instanceof cljs.core.Keyword))?G__36382.fqn:null);
switch (G__36382__$1) {
case "read-source":
var map__36384 = data;
var map__36384__$1 = cljs.core.__destructure_map(map__36384);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36384__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36384__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36386 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36386__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36386,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36386);
var G__36386__$2 = (cljs.core.truth_((function (){var fexpr__36394 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36394.cljs$core$IFn$_invoke$arity$1 ? fexpr__36394.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36394.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36386__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36386__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36386__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36397 = top_data;
var G__36397__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36397,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36397);
var G__36397__$2 = (cljs.core.truth_((function (){var fexpr__36399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36399.cljs$core$IFn$_invoke$arity$1 ? fexpr__36399.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36399.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36397__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36397__$1);
var G__36397__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36397__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36397__$2);
var G__36397__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36397__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36397__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36397__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36397__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36406,(3),null);
var G__36410 = top_data;
var G__36410__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36410,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36410);
var G__36410__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36410__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36410__$1);
var G__36410__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36410__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36410__$2);
var G__36410__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36410__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36410__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36410__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36410__$4;
}

break;
case "execution":
var vec__36417 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36417,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36372_SHARP_){
var or__5045__auto__ = (p1__36372_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36423.cljs$core$IFn$_invoke$arity$1 ? fexpr__36423.cljs$core$IFn$_invoke$arity$1(p1__36372_SHARP_) : fexpr__36423.call(null,p1__36372_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36430 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36430__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36430,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36430);
var G__36430__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36430__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36430__$1);
var G__36430__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36430__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36430__$2);
var G__36430__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36430__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36430__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36430__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36430__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36382__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36445){
var map__36447 = p__36445;
var map__36447__$1 = cljs.core.__destructure_map(map__36447);
var triage_data = map__36447__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36454 = phase;
var G__36454__$1 = (((G__36454 instanceof cljs.core.Keyword))?G__36454.fqn:null);
switch (G__36454__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36455 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36456 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36457 = loc;
var G__36458 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36460_36663 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36461_36664 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36462_36665 = true;
var _STAR_print_fn_STAR__temp_val__36463_36666 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36462_36665);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36463_36666);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36438_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36438_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36461_36664);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36460_36663);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36455,G__36456,G__36457,G__36458) : format.call(null,G__36455,G__36456,G__36457,G__36458));

break;
case "macroexpansion":
var G__36469 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36470 = cause_type;
var G__36471 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36472 = loc;
var G__36473 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36469,G__36470,G__36471,G__36472,G__36473) : format.call(null,G__36469,G__36470,G__36471,G__36472,G__36473));

break;
case "compile-syntax-check":
var G__36476 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36477 = cause_type;
var G__36478 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36479 = loc;
var G__36480 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36476,G__36477,G__36478,G__36479,G__36480) : format.call(null,G__36476,G__36477,G__36478,G__36479,G__36480));

break;
case "compilation":
var G__36481 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36482 = cause_type;
var G__36483 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36484 = loc;
var G__36485 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36481,G__36482,G__36483,G__36484,G__36485) : format.call(null,G__36481,G__36482,G__36483,G__36484,G__36485));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36488 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36489 = symbol;
var G__36490 = loc;
var G__36491 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36494_36671 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36495_36672 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36496_36673 = true;
var _STAR_print_fn_STAR__temp_val__36497_36674 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36496_36673);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36497_36674);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36495_36672);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36494_36671);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36488,G__36489,G__36490,G__36491) : format.call(null,G__36488,G__36489,G__36490,G__36491));
} else {
var G__36501 = "Execution error%s at %s(%s).\n%s\n";
var G__36502 = cause_type;
var G__36503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36504 = loc;
var G__36505 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36501,G__36502,G__36503,G__36504,G__36505) : format.call(null,G__36501,G__36502,G__36503,G__36504,G__36505));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36454__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
