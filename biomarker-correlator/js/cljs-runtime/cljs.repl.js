goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__77961){
var map__77962 = p__77961;
var map__77962__$1 = cljs.core.__destructure_map(map__77962);
var m = map__77962__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77962__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77962__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__77964_78245 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__77965_78246 = null;
var count__77966_78247 = (0);
var i__77967_78248 = (0);
while(true){
if((i__77967_78248 < count__77966_78247)){
var f_78251 = chunk__77965_78246.cljs$core$IIndexed$_nth$arity$2(null,i__77967_78248);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_78251], 0));


var G__78252 = seq__77964_78245;
var G__78253 = chunk__77965_78246;
var G__78254 = count__77966_78247;
var G__78255 = (i__77967_78248 + (1));
seq__77964_78245 = G__78252;
chunk__77965_78246 = G__78253;
count__77966_78247 = G__78254;
i__77967_78248 = G__78255;
continue;
} else {
var temp__5753__auto___78256 = cljs.core.seq(seq__77964_78245);
if(temp__5753__auto___78256){
var seq__77964_78257__$1 = temp__5753__auto___78256;
if(cljs.core.chunked_seq_QMARK_(seq__77964_78257__$1)){
var c__4679__auto___78258 = cljs.core.chunk_first(seq__77964_78257__$1);
var G__78260 = cljs.core.chunk_rest(seq__77964_78257__$1);
var G__78261 = c__4679__auto___78258;
var G__78262 = cljs.core.count(c__4679__auto___78258);
var G__78263 = (0);
seq__77964_78245 = G__78260;
chunk__77965_78246 = G__78261;
count__77966_78247 = G__78262;
i__77967_78248 = G__78263;
continue;
} else {
var f_78264 = cljs.core.first(seq__77964_78257__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_78264], 0));


var G__78267 = cljs.core.next(seq__77964_78257__$1);
var G__78268 = null;
var G__78269 = (0);
var G__78270 = (0);
seq__77964_78245 = G__78267;
chunk__77965_78246 = G__78268;
count__77966_78247 = G__78269;
i__77967_78248 = G__78270;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_78272 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_78272], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_78272)))?cljs.core.second(arglists_78272):arglists_78272)], 0));
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
var seq__77971_78296 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__77972_78297 = null;
var count__77973_78298 = (0);
var i__77974_78299 = (0);
while(true){
if((i__77974_78299 < count__77973_78298)){
var vec__77995_78300 = chunk__77972_78297.cljs$core$IIndexed$_nth$arity$2(null,i__77974_78299);
var name_78301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77995_78300,(0),null);
var map__77998_78302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77995_78300,(1),null);
var map__77998_78303__$1 = cljs.core.__destructure_map(map__77998_78302);
var doc_78304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77998_78303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_78305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77998_78303__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_78301], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_78305], 0));

if(cljs.core.truth_(doc_78304)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_78304], 0));
} else {
}


var G__78306 = seq__77971_78296;
var G__78307 = chunk__77972_78297;
var G__78308 = count__77973_78298;
var G__78309 = (i__77974_78299 + (1));
seq__77971_78296 = G__78306;
chunk__77972_78297 = G__78307;
count__77973_78298 = G__78308;
i__77974_78299 = G__78309;
continue;
} else {
var temp__5753__auto___78310 = cljs.core.seq(seq__77971_78296);
if(temp__5753__auto___78310){
var seq__77971_78311__$1 = temp__5753__auto___78310;
if(cljs.core.chunked_seq_QMARK_(seq__77971_78311__$1)){
var c__4679__auto___78312 = cljs.core.chunk_first(seq__77971_78311__$1);
var G__78313 = cljs.core.chunk_rest(seq__77971_78311__$1);
var G__78314 = c__4679__auto___78312;
var G__78315 = cljs.core.count(c__4679__auto___78312);
var G__78316 = (0);
seq__77971_78296 = G__78313;
chunk__77972_78297 = G__78314;
count__77973_78298 = G__78315;
i__77974_78299 = G__78316;
continue;
} else {
var vec__78019_78317 = cljs.core.first(seq__77971_78311__$1);
var name_78318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78019_78317,(0),null);
var map__78022_78319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78019_78317,(1),null);
var map__78022_78320__$1 = cljs.core.__destructure_map(map__78022_78319);
var doc_78321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78022_78320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_78322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78022_78320__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_78318], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_78322], 0));

if(cljs.core.truth_(doc_78321)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_78321], 0));
} else {
}


var G__78327 = cljs.core.next(seq__77971_78311__$1);
var G__78328 = null;
var G__78329 = (0);
var G__78330 = (0);
seq__77971_78296 = G__78327;
chunk__77972_78297 = G__78328;
count__77973_78298 = G__78329;
i__77974_78299 = G__78330;
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

var seq__78033 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__78034 = null;
var count__78035 = (0);
var i__78036 = (0);
while(true){
if((i__78036 < count__78035)){
var role = chunk__78034.cljs$core$IIndexed$_nth$arity$2(null,i__78036);
var temp__5753__auto___78340__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___78340__$1)){
var spec_78341 = temp__5753__auto___78340__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_78341)], 0));
} else {
}


var G__78342 = seq__78033;
var G__78343 = chunk__78034;
var G__78344 = count__78035;
var G__78345 = (i__78036 + (1));
seq__78033 = G__78342;
chunk__78034 = G__78343;
count__78035 = G__78344;
i__78036 = G__78345;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__78033);
if(temp__5753__auto____$1){
var seq__78033__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__78033__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__78033__$1);
var G__78346 = cljs.core.chunk_rest(seq__78033__$1);
var G__78347 = c__4679__auto__;
var G__78348 = cljs.core.count(c__4679__auto__);
var G__78349 = (0);
seq__78033 = G__78346;
chunk__78034 = G__78347;
count__78035 = G__78348;
i__78036 = G__78349;
continue;
} else {
var role = cljs.core.first(seq__78033__$1);
var temp__5753__auto___78350__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___78350__$2)){
var spec_78351 = temp__5753__auto___78350__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_78351)], 0));
} else {
}


var G__78356 = cljs.core.next(seq__78033__$1);
var G__78357 = null;
var G__78358 = (0);
var G__78359 = (0);
seq__78033 = G__78356;
chunk__78034 = G__78357;
count__78035 = G__78358;
i__78036 = G__78359;
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
var G__78375 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__78376 = cljs.core.ex_cause(t);
via = G__78375;
t = G__78376;
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
var map__78146 = datafied_throwable;
var map__78146__$1 = cljs.core.__destructure_map(map__78146);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78146__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78146__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78146__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__78147 = cljs.core.last(via);
var map__78147__$1 = cljs.core.__destructure_map(map__78147);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78147__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78147__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__78148 = data;
var map__78148__$1 = cljs.core.__destructure_map(map__78148);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78148__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78148__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78148__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__78149 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__78149__$1 = cljs.core.__destructure_map(map__78149);
var top_data = map__78149__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78149__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__78150 = phase;
var G__78150__$1 = (((G__78150 instanceof cljs.core.Keyword))?G__78150.fqn:null);
switch (G__78150__$1) {
case "read-source":
var map__78152 = data;
var map__78152__$1 = cljs.core.__destructure_map(map__78152);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78152__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78152__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__78153 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__78153__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78153,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__78153);
var G__78153__$2 = (cljs.core.truth_((function (){var fexpr__78154 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__78154.cljs$core$IFn$_invoke$arity$1 ? fexpr__78154.cljs$core$IFn$_invoke$arity$1(source) : fexpr__78154.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78153__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__78153__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78153__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__78153__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__78155 = top_data;
var G__78155__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78155,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__78155);
var G__78155__$2 = (cljs.core.truth_((function (){var fexpr__78156 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__78156.cljs$core$IFn$_invoke$arity$1 ? fexpr__78156.cljs$core$IFn$_invoke$arity$1(source) : fexpr__78156.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__78155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__78155__$1);
var G__78155__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78155__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__78155__$2);
var G__78155__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78155__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__78155__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78155__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__78155__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__78163 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78163,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78163,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78163,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78163,(3),null);
var G__78166 = top_data;
var G__78166__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78166,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__78166);
var G__78166__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78166__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__78166__$1);
var G__78166__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78166__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__78166__$2);
var G__78166__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78166__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__78166__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78166__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__78166__$4;
}

break;
case "execution":
var vec__78171 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78171,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78171,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78171,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78171,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__78138_SHARP_){
var or__4253__auto__ = (p1__78138_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__78178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__78178.cljs$core$IFn$_invoke$arity$1 ? fexpr__78178.cljs$core$IFn$_invoke$arity$1(p1__78138_SHARP_) : fexpr__78178.call(null,p1__78138_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__78179 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__78179__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__78179);
var G__78179__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78179__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__78179__$1);
var G__78179__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__78179__$2);
var G__78179__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78179__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__78179__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78179__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__78179__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78150__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__78185){
var map__78187 = p__78185;
var map__78187__$1 = cljs.core.__destructure_map(map__78187);
var triage_data = map__78187__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78187__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__78189 = phase;
var G__78189__$1 = (((G__78189 instanceof cljs.core.Keyword))?G__78189.fqn:null);
switch (G__78189__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__78190 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__78191 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__78192 = loc;
var G__78193 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__78196_78540 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__78197_78541 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__78198_78542 = true;
var _STAR_print_fn_STAR__temp_val__78199_78543 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78198_78542);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78199_78543);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78182_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__78182_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78197_78541);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78196_78540);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__78190,G__78191,G__78192,G__78193) : format.call(null,G__78190,G__78191,G__78192,G__78193));

break;
case "macroexpansion":
var G__78205 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__78206 = cause_type;
var G__78207 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__78208 = loc;
var G__78209 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__78205,G__78206,G__78207,G__78208,G__78209) : format.call(null,G__78205,G__78206,G__78207,G__78208,G__78209));

break;
case "compile-syntax-check":
var G__78210 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__78211 = cause_type;
var G__78212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__78213 = loc;
var G__78214 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__78210,G__78211,G__78212,G__78213,G__78214) : format.call(null,G__78210,G__78211,G__78212,G__78213,G__78214));

break;
case "compilation":
var G__78216 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__78217 = cause_type;
var G__78218 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__78219 = loc;
var G__78220 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__78216,G__78217,G__78218,G__78219,G__78220) : format.call(null,G__78216,G__78217,G__78218,G__78219,G__78220));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__78224 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__78225 = symbol;
var G__78226 = loc;
var G__78227 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__78229_78545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__78230_78546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__78231_78547 = true;
var _STAR_print_fn_STAR__temp_val__78232_78548 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__78231_78547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__78232_78548);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78183_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__78183_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__78230_78546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__78229_78545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__78224,G__78225,G__78226,G__78227) : format.call(null,G__78224,G__78225,G__78226,G__78227));
} else {
var G__78234 = "Execution error%s at %s(%s).\n%s\n";
var G__78235 = cause_type;
var G__78236 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__78237 = loc;
var G__78238 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__78234,G__78235,G__78236,G__78237,G__78238) : format.call(null,G__78234,G__78235,G__78236,G__78237,G__78238));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78189__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
