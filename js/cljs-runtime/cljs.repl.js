goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35727){
var map__35728 = p__35727;
var map__35728__$1 = cljs.core.__destructure_map(map__35728);
var m = map__35728__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35734_36107 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35735_36108 = null;
var count__35736_36109 = (0);
var i__35737_36110 = (0);
while(true){
if((i__35737_36110 < count__35736_36109)){
var f_36111 = chunk__35735_36108.cljs$core$IIndexed$_nth$arity$2(null,i__35737_36110);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36111], 0));


var G__36112 = seq__35734_36107;
var G__36113 = chunk__35735_36108;
var G__36114 = count__35736_36109;
var G__36115 = (i__35737_36110 + (1));
seq__35734_36107 = G__36112;
chunk__35735_36108 = G__36113;
count__35736_36109 = G__36114;
i__35737_36110 = G__36115;
continue;
} else {
var temp__5753__auto___36116 = cljs.core.seq(seq__35734_36107);
if(temp__5753__auto___36116){
var seq__35734_36117__$1 = temp__5753__auto___36116;
if(cljs.core.chunked_seq_QMARK_(seq__35734_36117__$1)){
var c__4679__auto___36118 = cljs.core.chunk_first(seq__35734_36117__$1);
var G__36119 = cljs.core.chunk_rest(seq__35734_36117__$1);
var G__36120 = c__4679__auto___36118;
var G__36121 = cljs.core.count(c__4679__auto___36118);
var G__36122 = (0);
seq__35734_36107 = G__36119;
chunk__35735_36108 = G__36120;
count__35736_36109 = G__36121;
i__35737_36110 = G__36122;
continue;
} else {
var f_36123 = cljs.core.first(seq__35734_36117__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36123], 0));


var G__36124 = cljs.core.next(seq__35734_36117__$1);
var G__36125 = null;
var G__36126 = (0);
var G__36127 = (0);
seq__35734_36107 = G__36124;
chunk__35735_36108 = G__36125;
count__35736_36109 = G__36126;
i__35737_36110 = G__36127;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36128 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36128], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36128)))?cljs.core.second(arglists_36128):arglists_36128)], 0));
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
var seq__35758_36130 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35759_36131 = null;
var count__35760_36132 = (0);
var i__35761_36133 = (0);
while(true){
if((i__35761_36133 < count__35760_36132)){
var vec__35780_36134 = chunk__35759_36131.cljs$core$IIndexed$_nth$arity$2(null,i__35761_36133);
var name_36135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780_36134,(0),null);
var map__35783_36136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35780_36134,(1),null);
var map__35783_36137__$1 = cljs.core.__destructure_map(map__35783_36136);
var doc_36138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35783_36137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35783_36137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36135], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36139], 0));

if(cljs.core.truth_(doc_36138)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36138], 0));
} else {
}


var G__36141 = seq__35758_36130;
var G__36142 = chunk__35759_36131;
var G__36143 = count__35760_36132;
var G__36144 = (i__35761_36133 + (1));
seq__35758_36130 = G__36141;
chunk__35759_36131 = G__36142;
count__35760_36132 = G__36143;
i__35761_36133 = G__36144;
continue;
} else {
var temp__5753__auto___36148 = cljs.core.seq(seq__35758_36130);
if(temp__5753__auto___36148){
var seq__35758_36149__$1 = temp__5753__auto___36148;
if(cljs.core.chunked_seq_QMARK_(seq__35758_36149__$1)){
var c__4679__auto___36150 = cljs.core.chunk_first(seq__35758_36149__$1);
var G__36151 = cljs.core.chunk_rest(seq__35758_36149__$1);
var G__36152 = c__4679__auto___36150;
var G__36153 = cljs.core.count(c__4679__auto___36150);
var G__36154 = (0);
seq__35758_36130 = G__36151;
chunk__35759_36131 = G__36152;
count__35760_36132 = G__36153;
i__35761_36133 = G__36154;
continue;
} else {
var vec__35785_36155 = cljs.core.first(seq__35758_36149__$1);
var name_36156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35785_36155,(0),null);
var map__35788_36157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35785_36155,(1),null);
var map__35788_36158__$1 = cljs.core.__destructure_map(map__35788_36157);
var doc_36159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788_36158__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788_36158__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36156], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36160], 0));

if(cljs.core.truth_(doc_36159)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36159], 0));
} else {
}


var G__36161 = cljs.core.next(seq__35758_36149__$1);
var G__36162 = null;
var G__36163 = (0);
var G__36164 = (0);
seq__35758_36130 = G__36161;
chunk__35759_36131 = G__36162;
count__35760_36132 = G__36163;
i__35761_36133 = G__36164;
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

var seq__35792 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35793 = null;
var count__35794 = (0);
var i__35795 = (0);
while(true){
if((i__35795 < count__35794)){
var role = chunk__35793.cljs$core$IIndexed$_nth$arity$2(null,i__35795);
var temp__5753__auto___36165__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36165__$1)){
var spec_36166 = temp__5753__auto___36165__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36166)], 0));
} else {
}


var G__36167 = seq__35792;
var G__36168 = chunk__35793;
var G__36169 = count__35794;
var G__36170 = (i__35795 + (1));
seq__35792 = G__36167;
chunk__35793 = G__36168;
count__35794 = G__36169;
i__35795 = G__36170;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35792);
if(temp__5753__auto____$1){
var seq__35792__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35792__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35792__$1);
var G__36171 = cljs.core.chunk_rest(seq__35792__$1);
var G__36172 = c__4679__auto__;
var G__36173 = cljs.core.count(c__4679__auto__);
var G__36174 = (0);
seq__35792 = G__36171;
chunk__35793 = G__36172;
count__35794 = G__36173;
i__35795 = G__36174;
continue;
} else {
var role = cljs.core.first(seq__35792__$1);
var temp__5753__auto___36176__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36176__$2)){
var spec_36177 = temp__5753__auto___36176__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36177)], 0));
} else {
}


var G__36178 = cljs.core.next(seq__35792__$1);
var G__36179 = null;
var G__36180 = (0);
var G__36181 = (0);
seq__35792 = G__36178;
chunk__35793 = G__36179;
count__35794 = G__36180;
i__35795 = G__36181;
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
var G__36182 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36183 = cljs.core.ex_cause(t);
via = G__36182;
t = G__36183;
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
var map__35911 = datafied_throwable;
var map__35911__$1 = cljs.core.__destructure_map(map__35911);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35911__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35911__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35912 = cljs.core.last(via);
var map__35912__$1 = cljs.core.__destructure_map(map__35912);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35912__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35915 = data;
var map__35915__$1 = cljs.core.__destructure_map(map__35915);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35915__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35916 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35916__$1 = cljs.core.__destructure_map(map__35916);
var top_data = map__35916__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35916__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35938 = phase;
var G__35938__$1 = (((G__35938 instanceof cljs.core.Keyword))?G__35938.fqn:null);
switch (G__35938__$1) {
case "read-source":
var map__35941 = data;
var map__35941__$1 = cljs.core.__destructure_map(map__35941);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35941__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35941__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35947 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35947__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35947);
var G__35947__$2 = (cljs.core.truth_((function (){var fexpr__35950 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35950.cljs$core$IFn$_invoke$arity$1 ? fexpr__35950.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35950.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35947__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35947__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35947__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35947__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35952 = top_data;
var G__35952__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35952,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35952);
var G__35952__$2 = (cljs.core.truth_((function (){var fexpr__35954 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35954.cljs$core$IFn$_invoke$arity$1 ? fexpr__35954.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35954.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35952__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35952__$1);
var G__35952__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35952__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35952__$2);
var G__35952__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35952__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35952__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35952__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35952__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35964 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35964,(3),null);
var G__35969 = top_data;
var G__35969__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35969,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35969);
var G__35969__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35969__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35969__$1);
var G__35969__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35969__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35969__$2);
var G__35969__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35969__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35969__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35969__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35969__$4;
}

break;
case "execution":
var vec__35982 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35982,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35901_SHARP_){
var or__4253__auto__ = (p1__35901_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35988 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35988.cljs$core$IFn$_invoke$arity$1 ? fexpr__35988.cljs$core$IFn$_invoke$arity$1(p1__35901_SHARP_) : fexpr__35988.call(null,p1__35901_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35993 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35993__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35993,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35993);
var G__35993__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35993__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35993__$1);
var G__35993__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35993__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35993__$2);
var G__35993__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35993__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35993__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35993__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35993__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35938__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36016){
var map__36017 = p__36016;
var map__36017__$1 = cljs.core.__destructure_map(map__36017);
var triage_data = map__36017__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36029 = phase;
var G__36029__$1 = (((G__36029 instanceof cljs.core.Keyword))?G__36029.fqn:null);
switch (G__36029__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36031 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36032 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36033 = loc;
var G__36034 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36037_36202 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36038_36203 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36039_36204 = true;
var _STAR_print_fn_STAR__temp_val__36040_36205 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36039_36204);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36040_36205);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36010_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36010_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36038_36203);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36037_36202);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36031,G__36032,G__36033,G__36034) : format.call(null,G__36031,G__36032,G__36033,G__36034));

break;
case "macroexpansion":
var G__36047 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36048 = cause_type;
var G__36049 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36050 = loc;
var G__36051 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36047,G__36048,G__36049,G__36050,G__36051) : format.call(null,G__36047,G__36048,G__36049,G__36050,G__36051));

break;
case "compile-syntax-check":
var G__36054 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36055 = cause_type;
var G__36056 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36057 = loc;
var G__36058 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36054,G__36055,G__36056,G__36057,G__36058) : format.call(null,G__36054,G__36055,G__36056,G__36057,G__36058));

break;
case "compilation":
var G__36059 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36060 = cause_type;
var G__36061 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36062 = loc;
var G__36063 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36059,G__36060,G__36061,G__36062,G__36063) : format.call(null,G__36059,G__36060,G__36061,G__36062,G__36063));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36065 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36066 = symbol;
var G__36067 = loc;
var G__36068 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36070_36213 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36071_36214 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36072_36215 = true;
var _STAR_print_fn_STAR__temp_val__36073_36216 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36072_36215);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36073_36216);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36013_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36013_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36071_36214);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36070_36213);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36065,G__36066,G__36067,G__36068) : format.call(null,G__36065,G__36066,G__36067,G__36068));
} else {
var G__36085 = "Execution error%s at %s(%s).\n%s\n";
var G__36086 = cause_type;
var G__36087 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36088 = loc;
var G__36089 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36085,G__36086,G__36087,G__36088,G__36089) : format.call(null,G__36085,G__36086,G__36087,G__36088,G__36089));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36029__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
