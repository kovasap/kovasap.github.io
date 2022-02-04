goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39927){
var map__39928 = p__39927;
var map__39928__$1 = cljs.core.__destructure_map(map__39928);
var m = map__39928__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
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
var seq__39935_40426 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39936_40427 = null;
var count__39937_40428 = (0);
var i__39938_40429 = (0);
while(true){
if((i__39938_40429 < count__39937_40428)){
var f_40430 = chunk__39936_40427.cljs$core$IIndexed$_nth$arity$2(null,i__39938_40429);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40430], 0));


var G__40431 = seq__39935_40426;
var G__40432 = chunk__39936_40427;
var G__40433 = count__39937_40428;
var G__40434 = (i__39938_40429 + (1));
seq__39935_40426 = G__40431;
chunk__39936_40427 = G__40432;
count__39937_40428 = G__40433;
i__39938_40429 = G__40434;
continue;
} else {
var temp__5753__auto___40436 = cljs.core.seq(seq__39935_40426);
if(temp__5753__auto___40436){
var seq__39935_40437__$1 = temp__5753__auto___40436;
if(cljs.core.chunked_seq_QMARK_(seq__39935_40437__$1)){
var c__4679__auto___40438 = cljs.core.chunk_first(seq__39935_40437__$1);
var G__40439 = cljs.core.chunk_rest(seq__39935_40437__$1);
var G__40440 = c__4679__auto___40438;
var G__40441 = cljs.core.count(c__4679__auto___40438);
var G__40442 = (0);
seq__39935_40426 = G__40439;
chunk__39936_40427 = G__40440;
count__39937_40428 = G__40441;
i__39938_40429 = G__40442;
continue;
} else {
var f_40443 = cljs.core.first(seq__39935_40437__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40443], 0));


var G__40444 = cljs.core.next(seq__39935_40437__$1);
var G__40445 = null;
var G__40446 = (0);
var G__40447 = (0);
seq__39935_40426 = G__40444;
chunk__39936_40427 = G__40445;
count__39937_40428 = G__40446;
i__39938_40429 = G__40447;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40448 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40448], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40448)))?cljs.core.second(arglists_40448):arglists_40448)], 0));
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
var seq__39958_40456 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39959_40457 = null;
var count__39960_40458 = (0);
var i__39961_40459 = (0);
while(true){
if((i__39961_40459 < count__39960_40458)){
var vec__39975_40460 = chunk__39959_40457.cljs$core$IIndexed$_nth$arity$2(null,i__39961_40459);
var name_40461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39975_40460,(0),null);
var map__39978_40462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39975_40460,(1),null);
var map__39978_40463__$1 = cljs.core.__destructure_map(map__39978_40462);
var doc_40464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39978_40463__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39978_40463__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40461], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40465], 0));

if(cljs.core.truth_(doc_40464)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40464], 0));
} else {
}


var G__40467 = seq__39958_40456;
var G__40468 = chunk__39959_40457;
var G__40469 = count__39960_40458;
var G__40470 = (i__39961_40459 + (1));
seq__39958_40456 = G__40467;
chunk__39959_40457 = G__40468;
count__39960_40458 = G__40469;
i__39961_40459 = G__40470;
continue;
} else {
var temp__5753__auto___40475 = cljs.core.seq(seq__39958_40456);
if(temp__5753__auto___40475){
var seq__39958_40476__$1 = temp__5753__auto___40475;
if(cljs.core.chunked_seq_QMARK_(seq__39958_40476__$1)){
var c__4679__auto___40477 = cljs.core.chunk_first(seq__39958_40476__$1);
var G__40478 = cljs.core.chunk_rest(seq__39958_40476__$1);
var G__40479 = c__4679__auto___40477;
var G__40480 = cljs.core.count(c__4679__auto___40477);
var G__40481 = (0);
seq__39958_40456 = G__40478;
chunk__39959_40457 = G__40479;
count__39960_40458 = G__40480;
i__39961_40459 = G__40481;
continue;
} else {
var vec__40014_40484 = cljs.core.first(seq__39958_40476__$1);
var name_40485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40014_40484,(0),null);
var map__40017_40486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40014_40484,(1),null);
var map__40017_40487__$1 = cljs.core.__destructure_map(map__40017_40486);
var doc_40488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40017_40487__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40017_40487__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40485], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40489], 0));

if(cljs.core.truth_(doc_40488)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40488], 0));
} else {
}


var G__40495 = cljs.core.next(seq__39958_40476__$1);
var G__40496 = null;
var G__40497 = (0);
var G__40498 = (0);
seq__39958_40456 = G__40495;
chunk__39959_40457 = G__40496;
count__39960_40458 = G__40497;
i__39961_40459 = G__40498;
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

var seq__40061 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40062 = null;
var count__40063 = (0);
var i__40064 = (0);
while(true){
if((i__40064 < count__40063)){
var role = chunk__40062.cljs$core$IIndexed$_nth$arity$2(null,i__40064);
var temp__5753__auto___40503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40503__$1)){
var spec_40504 = temp__5753__auto___40503__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40504)], 0));
} else {
}


var G__40505 = seq__40061;
var G__40506 = chunk__40062;
var G__40507 = count__40063;
var G__40508 = (i__40064 + (1));
seq__40061 = G__40505;
chunk__40062 = G__40506;
count__40063 = G__40507;
i__40064 = G__40508;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__40061);
if(temp__5753__auto____$1){
var seq__40061__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40061__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__40061__$1);
var G__40509 = cljs.core.chunk_rest(seq__40061__$1);
var G__40510 = c__4679__auto__;
var G__40511 = cljs.core.count(c__4679__auto__);
var G__40512 = (0);
seq__40061 = G__40509;
chunk__40062 = G__40510;
count__40063 = G__40511;
i__40064 = G__40512;
continue;
} else {
var role = cljs.core.first(seq__40061__$1);
var temp__5753__auto___40517__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40517__$2)){
var spec_40518 = temp__5753__auto___40517__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40518)], 0));
} else {
}


var G__40522 = cljs.core.next(seq__40061__$1);
var G__40523 = null;
var G__40524 = (0);
var G__40525 = (0);
seq__40061 = G__40522;
chunk__40062 = G__40523;
count__40063 = G__40524;
i__40064 = G__40525;
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
var G__40543 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40544 = cljs.core.ex_cause(t);
via = G__40543;
t = G__40544;
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
var map__40153 = datafied_throwable;
var map__40153__$1 = cljs.core.__destructure_map(map__40153);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40153__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40153__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40154 = cljs.core.last(via);
var map__40154__$1 = cljs.core.__destructure_map(map__40154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40154__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40154__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40155 = data;
var map__40155__$1 = cljs.core.__destructure_map(map__40155);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40156 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40156__$1 = cljs.core.__destructure_map(map__40156);
var top_data = map__40156__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40171 = phase;
var G__40171__$1 = (((G__40171 instanceof cljs.core.Keyword))?G__40171.fqn:null);
switch (G__40171__$1) {
case "read-source":
var map__40172 = data;
var map__40172__$1 = cljs.core.__destructure_map(map__40172);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40172__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40173 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40173__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40173,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40173);
var G__40173__$2 = (cljs.core.truth_((function (){var fexpr__40178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40178.cljs$core$IFn$_invoke$arity$1 ? fexpr__40178.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40178.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40173__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40173__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40173__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40173__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40179 = top_data;
var G__40179__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40179);
var G__40179__$2 = (cljs.core.truth_((function (){var fexpr__40180 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40180.cljs$core$IFn$_invoke$arity$1 ? fexpr__40180.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40180.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40179__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40179__$1);
var G__40179__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40179__$2);
var G__40179__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40179__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40179__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40179__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40181 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40181,(3),null);
var G__40185 = top_data;
var G__40185__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40185,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40185);
var G__40185__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40185__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40185__$1);
var G__40185__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40185__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40185__$2);
var G__40185__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40185__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40185__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40185__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40185__$4;
}

break;
case "execution":
var vec__40263 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40263,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40148_SHARP_){
var or__4253__auto__ = (p1__40148_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__40269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40269.cljs$core$IFn$_invoke$arity$1 ? fexpr__40269.cljs$core$IFn$_invoke$arity$1(p1__40148_SHARP_) : fexpr__40269.call(null,p1__40148_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__40278 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40278__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40278);
var G__40278__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40278__$1);
var G__40278__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40278__$2);
var G__40278__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40278__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40278__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40278__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40171__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40293){
var map__40294 = p__40293;
var map__40294__$1 = cljs.core.__destructure_map(map__40294);
var triage_data = map__40294__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40312 = phase;
var G__40312__$1 = (((G__40312 instanceof cljs.core.Keyword))?G__40312.fqn:null);
switch (G__40312__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40315 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40317 = loc;
var G__40318 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40319_40665 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40320_40666 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40321_40667 = true;
var _STAR_print_fn_STAR__temp_val__40322_40668 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40321_40667);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40322_40668);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40286_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40286_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40320_40666);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40319_40665);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40315,G__40316,G__40317,G__40318) : format.call(null,G__40315,G__40316,G__40317,G__40318));

break;
case "macroexpansion":
var G__40323 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40324 = cause_type;
var G__40325 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40326 = loc;
var G__40327 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40323,G__40324,G__40325,G__40326,G__40327) : format.call(null,G__40323,G__40324,G__40325,G__40326,G__40327));

break;
case "compile-syntax-check":
var G__40328 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40329 = cause_type;
var G__40330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40331 = loc;
var G__40332 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40328,G__40329,G__40330,G__40331,G__40332) : format.call(null,G__40328,G__40329,G__40330,G__40331,G__40332));

break;
case "compilation":
var G__40373 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40374 = cause_type;
var G__40375 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40376 = loc;
var G__40377 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40373,G__40374,G__40375,G__40376,G__40377) : format.call(null,G__40373,G__40374,G__40375,G__40376,G__40377));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40402 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40403 = symbol;
var G__40404 = loc;
var G__40405 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40407_40677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40408_40678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40409_40679 = true;
var _STAR_print_fn_STAR__temp_val__40410_40680 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40409_40679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40410_40680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40291_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40291_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40408_40678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40407_40677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40402,G__40403,G__40404,G__40405) : format.call(null,G__40402,G__40403,G__40404,G__40405));
} else {
var G__40412 = "Execution error%s at %s(%s).\n%s\n";
var G__40413 = cause_type;
var G__40414 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40415 = loc;
var G__40416 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40412,G__40413,G__40414,G__40415,G__40416) : format.call(null,G__40412,G__40413,G__40414,G__40415,G__40416));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40312__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
