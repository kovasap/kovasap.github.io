goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37953){
var map__37957 = p__37953;
var map__37957__$1 = cljs.core.__destructure_map(map__37957);
var m = map__37957__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__37976_38414 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37977_38415 = null;
var count__37978_38416 = (0);
var i__37979_38417 = (0);
while(true){
if((i__37979_38417 < count__37978_38416)){
var f_38419 = chunk__37977_38415.cljs$core$IIndexed$_nth$arity$2(null,i__37979_38417);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38419], 0));


var G__38420 = seq__37976_38414;
var G__38421 = chunk__37977_38415;
var G__38422 = count__37978_38416;
var G__38423 = (i__37979_38417 + (1));
seq__37976_38414 = G__38420;
chunk__37977_38415 = G__38421;
count__37978_38416 = G__38422;
i__37979_38417 = G__38423;
continue;
} else {
var temp__5753__auto___38424 = cljs.core.seq(seq__37976_38414);
if(temp__5753__auto___38424){
var seq__37976_38425__$1 = temp__5753__auto___38424;
if(cljs.core.chunked_seq_QMARK_(seq__37976_38425__$1)){
var c__4638__auto___38426 = cljs.core.chunk_first(seq__37976_38425__$1);
var G__38428 = cljs.core.chunk_rest(seq__37976_38425__$1);
var G__38429 = c__4638__auto___38426;
var G__38430 = cljs.core.count(c__4638__auto___38426);
var G__38431 = (0);
seq__37976_38414 = G__38428;
chunk__37977_38415 = G__38429;
count__37978_38416 = G__38430;
i__37979_38417 = G__38431;
continue;
} else {
var f_38432 = cljs.core.first(seq__37976_38425__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38432], 0));


var G__38433 = cljs.core.next(seq__37976_38425__$1);
var G__38434 = null;
var G__38435 = (0);
var G__38436 = (0);
seq__37976_38414 = G__38433;
chunk__37977_38415 = G__38434;
count__37978_38416 = G__38435;
i__37979_38417 = G__38436;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38438 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38438], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38438)))?cljs.core.second(arglists_38438):arglists_38438)], 0));
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
var seq__38018_38442 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38019_38443 = null;
var count__38020_38444 = (0);
var i__38021_38445 = (0);
while(true){
if((i__38021_38445 < count__38020_38444)){
var vec__38067_38446 = chunk__38019_38443.cljs$core$IIndexed$_nth$arity$2(null,i__38021_38445);
var name_38447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38067_38446,(0),null);
var map__38070_38448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38067_38446,(1),null);
var map__38070_38449__$1 = cljs.core.__destructure_map(map__38070_38448);
var doc_38450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070_38449__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38070_38449__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38447], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38451], 0));

if(cljs.core.truth_(doc_38450)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38450], 0));
} else {
}


var G__38456 = seq__38018_38442;
var G__38457 = chunk__38019_38443;
var G__38458 = count__38020_38444;
var G__38459 = (i__38021_38445 + (1));
seq__38018_38442 = G__38456;
chunk__38019_38443 = G__38457;
count__38020_38444 = G__38458;
i__38021_38445 = G__38459;
continue;
} else {
var temp__5753__auto___38460 = cljs.core.seq(seq__38018_38442);
if(temp__5753__auto___38460){
var seq__38018_38462__$1 = temp__5753__auto___38460;
if(cljs.core.chunked_seq_QMARK_(seq__38018_38462__$1)){
var c__4638__auto___38466 = cljs.core.chunk_first(seq__38018_38462__$1);
var G__38467 = cljs.core.chunk_rest(seq__38018_38462__$1);
var G__38468 = c__4638__auto___38466;
var G__38469 = cljs.core.count(c__4638__auto___38466);
var G__38470 = (0);
seq__38018_38442 = G__38467;
chunk__38019_38443 = G__38468;
count__38020_38444 = G__38469;
i__38021_38445 = G__38470;
continue;
} else {
var vec__38086_38471 = cljs.core.first(seq__38018_38462__$1);
var name_38472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086_38471,(0),null);
var map__38089_38473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38086_38471,(1),null);
var map__38089_38474__$1 = cljs.core.__destructure_map(map__38089_38473);
var doc_38475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089_38474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38089_38474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38472], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38476], 0));

if(cljs.core.truth_(doc_38475)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38475], 0));
} else {
}


var G__38483 = cljs.core.next(seq__38018_38462__$1);
var G__38484 = null;
var G__38485 = (0);
var G__38486 = (0);
seq__38018_38442 = G__38483;
chunk__38019_38443 = G__38484;
count__38020_38444 = G__38485;
i__38021_38445 = G__38486;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38110 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38111 = null;
var count__38112 = (0);
var i__38113 = (0);
while(true){
if((i__38113 < count__38112)){
var role = chunk__38111.cljs$core$IIndexed$_nth$arity$2(null,i__38113);
var temp__5753__auto___38488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___38488__$1)){
var spec_38489 = temp__5753__auto___38488__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38489)], 0));
} else {
}


var G__38490 = seq__38110;
var G__38491 = chunk__38111;
var G__38492 = count__38112;
var G__38493 = (i__38113 + (1));
seq__38110 = G__38490;
chunk__38111 = G__38491;
count__38112 = G__38492;
i__38113 = G__38493;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__38110);
if(temp__5753__auto____$1){
var seq__38110__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38110__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__38110__$1);
var G__38494 = cljs.core.chunk_rest(seq__38110__$1);
var G__38495 = c__4638__auto__;
var G__38496 = cljs.core.count(c__4638__auto__);
var G__38497 = (0);
seq__38110 = G__38494;
chunk__38111 = G__38495;
count__38112 = G__38496;
i__38113 = G__38497;
continue;
} else {
var role = cljs.core.first(seq__38110__$1);
var temp__5753__auto___38499__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___38499__$2)){
var spec_38500 = temp__5753__auto___38499__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38500)], 0));
} else {
}


var G__38505 = cljs.core.next(seq__38110__$1);
var G__38506 = null;
var G__38507 = (0);
var G__38508 = (0);
seq__38110 = G__38505;
chunk__38111 = G__38506;
count__38112 = G__38507;
i__38113 = G__38508;
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
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__38511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38512 = cljs.core.ex_cause(t);
via = G__38511;
t = G__38512;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__38279 = datafied_throwable;
var map__38279__$1 = cljs.core.__destructure_map(map__38279);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38279__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38279__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38280 = cljs.core.last(via);
var map__38280__$1 = cljs.core.__destructure_map(map__38280);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38281 = data;
var map__38281__$1 = cljs.core.__destructure_map(map__38281);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38281__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38281__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38281__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38282 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38282__$1 = cljs.core.__destructure_map(map__38282);
var top_data = map__38282__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38282__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38285 = phase;
var G__38285__$1 = (((G__38285 instanceof cljs.core.Keyword))?G__38285.fqn:null);
switch (G__38285__$1) {
case "read-source":
var map__38288 = data;
var map__38288__$1 = cljs.core.__destructure_map(map__38288);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38288__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38290);
var G__38290__$2 = (cljs.core.truth_((function (){var fexpr__38291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38291.cljs$core$IFn$_invoke$arity$1 ? fexpr__38291.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38291.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38290__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38290__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38290__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38293 = top_data;
var G__38293__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38293,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38293);
var G__38293__$2 = (cljs.core.truth_((function (){var fexpr__38296 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38296.cljs$core$IFn$_invoke$arity$1 ? fexpr__38296.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38296.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38293__$1);
var G__38293__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38293__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38293__$2);
var G__38293__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38293__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38293__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38293__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38293__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38300 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38300,(3),null);
var G__38304 = top_data;
var G__38304__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38304,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38304);
var G__38304__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38304__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38304__$1);
var G__38304__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38304__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38304__$2);
var G__38304__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38304__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38304__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38304__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38304__$4;
}

break;
case "execution":
var vec__38313 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38313,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38266_SHARP_){
var or__4212__auto__ = (p1__38266_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__38319 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38319.cljs$core$IFn$_invoke$arity$1 ? fexpr__38319.cljs$core$IFn$_invoke$arity$1(p1__38266_SHARP_) : fexpr__38319.call(null,p1__38266_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__38320 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38320__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38320);
var G__38320__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38320__$1);
var G__38320__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38320__$2);
var G__38320__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38320__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38320__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38320__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38285__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38341){
var map__38342 = p__38341;
var map__38342__$1 = cljs.core.__destructure_map(map__38342);
var triage_data = map__38342__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38342__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38354 = phase;
var G__38354__$1 = (((G__38354 instanceof cljs.core.Keyword))?G__38354.fqn:null);
switch (G__38354__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38357 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38358 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38359 = loc;
var G__38360 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38361_38557 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38362_38558 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38363_38559 = true;
var _STAR_print_fn_STAR__temp_val__38364_38560 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38363_38559);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38364_38560);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38332_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38332_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38362_38558);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38361_38557);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38357,G__38358,G__38359,G__38360) : format.call(null,G__38357,G__38358,G__38359,G__38360));

break;
case "macroexpansion":
var G__38369 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38370 = cause_type;
var G__38371 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38372 = loc;
var G__38373 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38369,G__38370,G__38371,G__38372,G__38373) : format.call(null,G__38369,G__38370,G__38371,G__38372,G__38373));

break;
case "compile-syntax-check":
var G__38375 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38376 = cause_type;
var G__38377 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38378 = loc;
var G__38379 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38375,G__38376,G__38377,G__38378,G__38379) : format.call(null,G__38375,G__38376,G__38377,G__38378,G__38379));

break;
case "compilation":
var G__38382 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38384 = cause_type;
var G__38385 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38386 = loc;
var G__38387 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38382,G__38384,G__38385,G__38386,G__38387) : format.call(null,G__38382,G__38384,G__38385,G__38386,G__38387));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38389 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38390 = symbol;
var G__38391 = loc;
var G__38392 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38395_38565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38396_38566 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38397_38567 = true;
var _STAR_print_fn_STAR__temp_val__38398_38568 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38397_38567);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38398_38568);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38334_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38334_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38396_38566);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38395_38565);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38389,G__38390,G__38391,G__38392) : format.call(null,G__38389,G__38390,G__38391,G__38392));
} else {
var G__38401 = "Execution error%s at %s(%s).\n%s\n";
var G__38402 = cause_type;
var G__38403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38404 = loc;
var G__38405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38401,G__38402,G__38403,G__38404,G__38405) : format.call(null,G__38401,G__38402,G__38403,G__38404,G__38405));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38354__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
