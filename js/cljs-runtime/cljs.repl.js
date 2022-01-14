goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35403){
var map__35405 = p__35403;
var map__35405__$1 = cljs.core.__destructure_map(map__35405);
var m = map__35405__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35405__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35407_35775 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35408_35776 = null;
var count__35409_35777 = (0);
var i__35410_35778 = (0);
while(true){
if((i__35410_35778 < count__35409_35777)){
var f_35779 = chunk__35408_35776.cljs$core$IIndexed$_nth$arity$2(null,i__35410_35778);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35779], 0));


var G__35780 = seq__35407_35775;
var G__35781 = chunk__35408_35776;
var G__35782 = count__35409_35777;
var G__35783 = (i__35410_35778 + (1));
seq__35407_35775 = G__35780;
chunk__35408_35776 = G__35781;
count__35409_35777 = G__35782;
i__35410_35778 = G__35783;
continue;
} else {
var temp__5753__auto___35784 = cljs.core.seq(seq__35407_35775);
if(temp__5753__auto___35784){
var seq__35407_35785__$1 = temp__5753__auto___35784;
if(cljs.core.chunked_seq_QMARK_(seq__35407_35785__$1)){
var c__4638__auto___35787 = cljs.core.chunk_first(seq__35407_35785__$1);
var G__35788 = cljs.core.chunk_rest(seq__35407_35785__$1);
var G__35789 = c__4638__auto___35787;
var G__35790 = cljs.core.count(c__4638__auto___35787);
var G__35791 = (0);
seq__35407_35775 = G__35788;
chunk__35408_35776 = G__35789;
count__35409_35777 = G__35790;
i__35410_35778 = G__35791;
continue;
} else {
var f_35792 = cljs.core.first(seq__35407_35785__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35792], 0));


var G__35793 = cljs.core.next(seq__35407_35785__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35407_35775 = G__35793;
chunk__35408_35776 = G__35794;
count__35409_35777 = G__35795;
i__35410_35778 = G__35796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35797 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35797], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35797)))?cljs.core.second(arglists_35797):arglists_35797)], 0));
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
var seq__35420_35804 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35421_35805 = null;
var count__35423_35806 = (0);
var i__35424_35807 = (0);
while(true){
if((i__35424_35807 < count__35423_35806)){
var vec__35446_35808 = chunk__35421_35805.cljs$core$IIndexed$_nth$arity$2(null,i__35424_35807);
var name_35809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446_35808,(0),null);
var map__35449_35810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446_35808,(1),null);
var map__35449_35811__$1 = cljs.core.__destructure_map(map__35449_35810);
var doc_35812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449_35811__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35449_35811__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35809], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35813], 0));

if(cljs.core.truth_(doc_35812)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35812], 0));
} else {
}


var G__35814 = seq__35420_35804;
var G__35815 = chunk__35421_35805;
var G__35816 = count__35423_35806;
var G__35817 = (i__35424_35807 + (1));
seq__35420_35804 = G__35814;
chunk__35421_35805 = G__35815;
count__35423_35806 = G__35816;
i__35424_35807 = G__35817;
continue;
} else {
var temp__5753__auto___35818 = cljs.core.seq(seq__35420_35804);
if(temp__5753__auto___35818){
var seq__35420_35819__$1 = temp__5753__auto___35818;
if(cljs.core.chunked_seq_QMARK_(seq__35420_35819__$1)){
var c__4638__auto___35820 = cljs.core.chunk_first(seq__35420_35819__$1);
var G__35821 = cljs.core.chunk_rest(seq__35420_35819__$1);
var G__35822 = c__4638__auto___35820;
var G__35823 = cljs.core.count(c__4638__auto___35820);
var G__35824 = (0);
seq__35420_35804 = G__35821;
chunk__35421_35805 = G__35822;
count__35423_35806 = G__35823;
i__35424_35807 = G__35824;
continue;
} else {
var vec__35456_35825 = cljs.core.first(seq__35420_35819__$1);
var name_35826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456_35825,(0),null);
var map__35459_35827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35456_35825,(1),null);
var map__35459_35828__$1 = cljs.core.__destructure_map(map__35459_35827);
var doc_35829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35459_35828__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35459_35828__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35826], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35830], 0));

if(cljs.core.truth_(doc_35829)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35829], 0));
} else {
}


var G__35831 = cljs.core.next(seq__35420_35819__$1);
var G__35832 = null;
var G__35833 = (0);
var G__35834 = (0);
seq__35420_35804 = G__35831;
chunk__35421_35805 = G__35832;
count__35423_35806 = G__35833;
i__35424_35807 = G__35834;
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

var seq__35472 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35473 = null;
var count__35474 = (0);
var i__35475 = (0);
while(true){
if((i__35475 < count__35474)){
var role = chunk__35473.cljs$core$IIndexed$_nth$arity$2(null,i__35475);
var temp__5753__auto___35835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35835__$1)){
var spec_35836 = temp__5753__auto___35835__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35836)], 0));
} else {
}


var G__35838 = seq__35472;
var G__35839 = chunk__35473;
var G__35840 = count__35474;
var G__35841 = (i__35475 + (1));
seq__35472 = G__35838;
chunk__35473 = G__35839;
count__35474 = G__35840;
i__35475 = G__35841;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35472);
if(temp__5753__auto____$1){
var seq__35472__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35472__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35472__$1);
var G__35846 = cljs.core.chunk_rest(seq__35472__$1);
var G__35847 = c__4638__auto__;
var G__35848 = cljs.core.count(c__4638__auto__);
var G__35849 = (0);
seq__35472 = G__35846;
chunk__35473 = G__35847;
count__35474 = G__35848;
i__35475 = G__35849;
continue;
} else {
var role = cljs.core.first(seq__35472__$1);
var temp__5753__auto___35850__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35850__$2)){
var spec_35851 = temp__5753__auto___35850__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35851)], 0));
} else {
}


var G__35853 = cljs.core.next(seq__35472__$1);
var G__35854 = null;
var G__35855 = (0);
var G__35856 = (0);
seq__35472 = G__35853;
chunk__35473 = G__35854;
count__35474 = G__35855;
i__35475 = G__35856;
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
var G__35857 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35858 = cljs.core.ex_cause(t);
via = G__35857;
t = G__35858;
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
var map__35590 = datafied_throwable;
var map__35590__$1 = cljs.core.__destructure_map(map__35590);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35590__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35590__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35590__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35592 = cljs.core.last(via);
var map__35592__$1 = cljs.core.__destructure_map(map__35592);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35592__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35595 = data;
var map__35595__$1 = cljs.core.__destructure_map(map__35595);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35595__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35595__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35595__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35596 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35596__$1 = cljs.core.__destructure_map(map__35596);
var top_data = map__35596__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35596__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35609 = phase;
var G__35609__$1 = (((G__35609 instanceof cljs.core.Keyword))?G__35609.fqn:null);
switch (G__35609__$1) {
case "read-source":
var map__35617 = data;
var map__35617__$1 = cljs.core.__destructure_map(map__35617);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35620 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35620__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35620,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35620);
var G__35620__$2 = (cljs.core.truth_((function (){var fexpr__35626 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35626.cljs$core$IFn$_invoke$arity$1 ? fexpr__35626.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35626.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35620__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35620__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35620__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35631 = top_data;
var G__35631__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35631,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35631);
var G__35631__$2 = (cljs.core.truth_((function (){var fexpr__35634 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35634.cljs$core$IFn$_invoke$arity$1 ? fexpr__35634.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35634.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35631__$1);
var G__35631__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35631__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35631__$2);
var G__35631__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35631__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35631__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35631__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35631__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35638 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(3),null);
var G__35646 = top_data;
var G__35646__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35646,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35646);
var G__35646__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35646__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35646__$1);
var G__35646__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35646__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35646__$2);
var G__35646__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35646__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35646__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35646__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35646__$4;
}

break;
case "execution":
var vec__35654 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35654,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35577_SHARP_){
var or__4212__auto__ = (p1__35577_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35659 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35659.cljs$core$IFn$_invoke$arity$1 ? fexpr__35659.cljs$core$IFn$_invoke$arity$1(p1__35577_SHARP_) : fexpr__35659.call(null,p1__35577_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35665__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35665);
var G__35665__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35665__$1);
var G__35665__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35665__$2);
var G__35665__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35665__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35665__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35665__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35609__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35682){
var map__35684 = p__35682;
var map__35684__$1 = cljs.core.__destructure_map(map__35684);
var triage_data = map__35684__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35684__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35705 = phase;
var G__35705__$1 = (((G__35705 instanceof cljs.core.Keyword))?G__35705.fqn:null);
switch (G__35705__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35706 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35707 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35708 = loc;
var G__35709 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35711_35892 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35712_35893 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35713_35894 = true;
var _STAR_print_fn_STAR__temp_val__35714_35895 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35713_35894);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35714_35895);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35675_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35675_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35712_35893);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35711_35892);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35706,G__35707,G__35708,G__35709) : format.call(null,G__35706,G__35707,G__35708,G__35709));

break;
case "macroexpansion":
var G__35718 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35720 = cause_type;
var G__35721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35722 = loc;
var G__35723 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35718,G__35720,G__35721,G__35722,G__35723) : format.call(null,G__35718,G__35720,G__35721,G__35722,G__35723));

break;
case "compile-syntax-check":
var G__35727 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35728 = cause_type;
var G__35729 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35730 = loc;
var G__35731 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35727,G__35728,G__35729,G__35730,G__35731) : format.call(null,G__35727,G__35728,G__35729,G__35730,G__35731));

break;
case "compilation":
var G__35737 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35738 = cause_type;
var G__35739 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35740 = loc;
var G__35741 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35737,G__35738,G__35739,G__35740,G__35741) : format.call(null,G__35737,G__35738,G__35739,G__35740,G__35741));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35743 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35744 = symbol;
var G__35745 = loc;
var G__35746 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35753_35939 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35754_35940 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35755_35941 = true;
var _STAR_print_fn_STAR__temp_val__35756_35942 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35755_35941);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35756_35942);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35677_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35677_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35754_35940);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35753_35939);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35743,G__35744,G__35745,G__35746) : format.call(null,G__35743,G__35744,G__35745,G__35746));
} else {
var G__35764 = "Execution error%s at %s(%s).\n%s\n";
var G__35765 = cause_type;
var G__35766 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35767 = loc;
var G__35768 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35764,G__35765,G__35766,G__35767,G__35768) : format.call(null,G__35764,G__35765,G__35766,G__35767,G__35768));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35705__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
