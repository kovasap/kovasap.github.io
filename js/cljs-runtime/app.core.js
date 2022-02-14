goog.provide('app.core');
app.core.get_rows_by_dates = (function app$core$get_rows_by_dates(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(row),row], null);
}),rows));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","merge-rows-using-dates","app.core/merge-rows-using-dates",1546436745,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"rows2","rows2",-1469862357),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"rows2","rows2",-1469862357),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword(null,"rows2","rows2",-1469862357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"rows2","rows2",-1469862357),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null));

/**
 * Merges two sequences of row maps (e.g. from different spreadsheets) using
 *   the :date field as the joining attribute.
 * @type {function(*, *): *}
 */
app.core.merge_rows_using_dates = (function app$core$merge_rows_using_dates(rows1,rows2){
return cljs.core.vals(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic((function (row1,row2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row1,row2], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.core.get_rows_by_dates(rows1),app.core.get_rows_by_dates(rows2)], 0)));
});

app.core.merge_rows_using_dates__ghostwheel_test = (function app$core$merge_rows_using_dates__ghostwheel_test(){
return cljs.test.test_var(app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$var);
});
app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__138875(s__138876){
return (new cljs.core.LazySeq(null,(function (){
var s__138876__$1 = s__138876;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__138876__$1);
if(temp__5753__auto__){
var s__138876__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__138876__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__138876__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__138878 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__138877 = (0);
while(true){
if((i__138877 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__138877);
cljs.core.chunk_append(b__138878,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__138877,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__138884 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138884,sym__28441__auto__);
} else {
return G__138884;
}
});})(i__138877,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.merge_rows_using_dates;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__138879 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138879,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138879,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__138895 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__138895.cljs$core$IFn$_invoke$arity$3 ? fexpr__138895.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__138895.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__138897 = s__28449__auto__;
var G__138898 = spec__28451__auto__;
var G__138899 = tcret__28459__auto__;
var G__138900 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__138896 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__138896.cljs$core$IFn$_invoke$arity$4 ? fexpr__138896.cljs$core$IFn$_invoke$arity$4(G__138897,G__138898,G__138899,G__138900) : fexpr__138896.call(null,G__138897,G__138898,G__138899,G__138900));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts138887_139875 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__138877,opts138887_139875,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138879,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__138888){
var vec__138889 = p__138888;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138889,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138889,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__138892 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138892,sym__28430__auto__);
} else {
return G__138892;
}
});})(i__138877,opts138887_139875,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138879,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__138877,opts138887_139875,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138879,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__138894 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__138893 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts138887_139875);
return (fexpr__138893.cljs$core$IFn$_invoke$arity$1 ? fexpr__138893.cljs$core$IFn$_invoke$arity$1(G__138894) : fexpr__138893.call(null,G__138894));
});})(i__138877,opts138887_139875,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138879,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138878,s__138876__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139877 = (i__138877 + (1));
i__138877 = G__139877;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__138878),app$core$iter__138875(cljs.core.chunk_rest(s__138876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__138878),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__138876__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__138906 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138906,sym__28441__auto__);
} else {
return G__138906;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.merge_rows_using_dates;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__138901 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138901,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138901,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__138918 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__138918.cljs$core$IFn$_invoke$arity$3 ? fexpr__138918.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__138918.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__138920 = s__28449__auto__;
var G__138921 = spec__28451__auto__;
var G__138922 = tcret__28459__auto__;
var G__138923 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__138919 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__138919.cljs$core$IFn$_invoke$arity$4 ? fexpr__138919.cljs$core$IFn$_invoke$arity$4(G__138920,G__138921,G__138922,G__138923) : fexpr__138919.call(null,G__138920,G__138921,G__138922,G__138923));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts138909_139879 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts138909_139879,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138901,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__138910){
var vec__138911 = p__138910;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138911,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138911,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__138914 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138914,sym__28430__auto__);
} else {
return G__138914;
}
});})(opts138909_139879,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138901,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts138909_139879,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138901,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__138917 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__138916 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts138909_139879);
return (fexpr__138916.cljs$core$IFn$_invoke$arity$1 ? fexpr__138916.cljs$core$IFn$_invoke$arity$1(G__138917) : fexpr__138916.call(null,G__138917));
});})(opts138909_139879,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138901,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138876__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__138875(cljs.core.rest(s__138876__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"rows2","rows2",-1469862357),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword(null,"rows2","rows2",-1469862357)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"rows1","rows1",1200306272),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"rows2","rows2",-1469862357),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e138924){var t__9195__auto__ = e138924;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__138934_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__138934_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","add-timestamps","app.core/add-timestamps",-2043976272,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.add_timestamps = (function app$core$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__138936_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__138936_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.utils.map_to_timestamp(app.utils.parse_date_range(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__138936_SHARP_))));
}),data);
});

app.core.add_timestamps__ghostwheel_test = (function app$core$add_timestamps__ghostwheel_test(){
return cljs.test.test_var(app.core.add_timestamps__ghostwheel_test.cljs$lang$var);
});
app.core.add_timestamps__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__138960(s__138961){
return (new cljs.core.LazySeq(null,(function (){
var s__138961__$1 = s__138961;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__138961__$1);
if(temp__5753__auto__){
var s__138961__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__138961__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__138961__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__138963 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__138962 = (0);
while(true){
if((i__138962 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__138962);
cljs.core.chunk_append(b__138963,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__138962,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__138985 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138985,sym__28441__auto__);
} else {
return G__138985;
}
});})(i__138962,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.add_timestamps;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__138972 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138972,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138972,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139000 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139000.cljs$core$IFn$_invoke$arity$3 ? fexpr__139000.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139000.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139002 = s__28449__auto__;
var G__139003 = spec__28451__auto__;
var G__139004 = tcret__28459__auto__;
var G__139005 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139001 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139001.cljs$core$IFn$_invoke$arity$4 ? fexpr__139001.cljs$core$IFn$_invoke$arity$4(G__139002,G__139003,G__139004,G__139005) : fexpr__139001.call(null,G__139002,G__139003,G__139004,G__139005));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts138989_139883 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__138962,opts138989_139883,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138972,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__138990){
var vec__138991 = p__138990;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138991,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__138991,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__138994 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__138994,sym__28430__auto__);
} else {
return G__138994;
}
});})(i__138962,opts138989_139883,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138972,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__138962,opts138989_139883,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138972,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__138997 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__138996 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts138989_139883);
return (fexpr__138996.cljs$core$IFn$_invoke$arity$1 ? fexpr__138996.cljs$core$IFn$_invoke$arity$1(G__138997) : fexpr__138996.call(null,G__138997));
});})(i__138962,opts138989_139883,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__138972,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__138963,s__138961__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139884 = (i__138962 + (1));
i__138962 = G__139884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__138963),app$core$iter__138960(cljs.core.chunk_rest(s__138961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__138963),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__138961__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139011 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139011,sym__28441__auto__);
} else {
return G__139011;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.add_timestamps;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139006 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139006,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139006,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139040 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139040.cljs$core$IFn$_invoke$arity$3 ? fexpr__139040.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139040.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139044 = s__28449__auto__;
var G__139045 = spec__28451__auto__;
var G__139046 = tcret__28459__auto__;
var G__139047 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139043 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139043.cljs$core$IFn$_invoke$arity$4 ? fexpr__139043.cljs$core$IFn$_invoke$arity$4(G__139044,G__139045,G__139046,G__139047) : fexpr__139043.call(null,G__139044,G__139045,G__139046,G__139047));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139023_139886 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139023_139886,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139006,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139024){
var vec__139026 = p__139024;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139026,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139026,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139029 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139029,sym__28430__auto__);
} else {
return G__139029;
}
});})(opts139023_139886,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139006,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139023_139886,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139006,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139031 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139030 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139023_139886);
return (fexpr__139030.cljs$core$IFn$_invoke$arity$1 ? fexpr__139030.cljs$core$IFn$_invoke$arity$1(G__139031) : fexpr__139030.call(null,G__139031));
});})(opts139023_139886,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139006,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__138961__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__138960(cljs.core.rest(s__138961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139057){var t__9195__auto__ = e139057;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.add_timestamps__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.add_timestamps__ghostwheel_test;},new cljs.core.Symbol("app.core","add-timestamps__ghostwheel-test","app.core/add-timestamps__ghostwheel-test",1015592430,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-timestamps__ghostwheel-test","add-timestamps__ghostwheel-test",-5350750,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.add_timestamps__ghostwheel_test)?app.core.add_timestamps__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","floatify-data","app.core/floatify-data",-1652332335,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.floatify_data = (function app$core$floatify_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139063_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__139081){
var vec__139083 = p__139081;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139083,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,parseFloat(v)], null);
}),p1__139063_SHARP_));
}),data);
});

app.core.floatify_data__ghostwheel_test = (function app$core$floatify_data__ghostwheel_test(){
return cljs.test.test_var(app.core.floatify_data__ghostwheel_test.cljs$lang$var);
});
app.core.floatify_data__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139086(s__139087){
return (new cljs.core.LazySeq(null,(function (){
var s__139087__$1 = s__139087;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139087__$1);
if(temp__5753__auto__){
var s__139087__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139087__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139087__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139089 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139088 = (0);
while(true){
if((i__139088 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139088);
cljs.core.chunk_append(b__139089,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139088,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139099 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139099,sym__28441__auto__);
} else {
return G__139099;
}
});})(i__139088,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.floatify_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139090 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139090,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139090,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139122 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139122.cljs$core$IFn$_invoke$arity$3 ? fexpr__139122.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139122.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139126 = s__28449__auto__;
var G__139127 = spec__28451__auto__;
var G__139128 = tcret__28459__auto__;
var G__139129 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139125 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139125.cljs$core$IFn$_invoke$arity$4 ? fexpr__139125.cljs$core$IFn$_invoke$arity$4(G__139126,G__139127,G__139128,G__139129) : fexpr__139125.call(null,G__139126,G__139127,G__139128,G__139129));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139106_139889 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139088,opts139106_139889,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139090,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139110){
var vec__139112 = p__139110;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139112,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139112,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139116 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139116,sym__28430__auto__);
} else {
return G__139116;
}
});})(i__139088,opts139106_139889,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139090,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139088,opts139106_139889,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139090,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139119 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139118 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139106_139889);
return (fexpr__139118.cljs$core$IFn$_invoke$arity$1 ? fexpr__139118.cljs$core$IFn$_invoke$arity$1(G__139119) : fexpr__139118.call(null,G__139119));
});})(i__139088,opts139106_139889,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139090,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139089,s__139087__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139890 = (i__139088 + (1));
i__139088 = G__139890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139089),app$core$iter__139086(cljs.core.chunk_rest(s__139087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139089),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139087__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139147 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139147,sym__28441__auto__);
} else {
return G__139147;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.floatify_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139137 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139137,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139137,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139175 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139175.cljs$core$IFn$_invoke$arity$3 ? fexpr__139175.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139175.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139182 = s__28449__auto__;
var G__139183 = spec__28451__auto__;
var G__139184 = tcret__28459__auto__;
var G__139185 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139181 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139181.cljs$core$IFn$_invoke$arity$4 ? fexpr__139181.cljs$core$IFn$_invoke$arity$4(G__139182,G__139183,G__139184,G__139185) : fexpr__139181.call(null,G__139182,G__139183,G__139184,G__139185));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139156_139891 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139156_139891,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139137,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139159){
var vec__139161 = p__139159;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139161,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139161,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139165 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139165,sym__28430__auto__);
} else {
return G__139165;
}
});})(opts139156_139891,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139137,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139156_139891,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139137,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139171 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139170 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139156_139891);
return (fexpr__139170.cljs$core$IFn$_invoke$arity$1 ? fexpr__139170.cljs$core$IFn$_invoke$arity$1(G__139171) : fexpr__139170.call(null,G__139171));
});})(opts139156_139891,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139137,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139087__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139086(cljs.core.rest(s__139087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139187){var t__9195__auto__ = e139187;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.floatify_data__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.floatify_data__ghostwheel_test;},new cljs.core.Symbol("app.core","floatify-data__ghostwheel-test","app.core/floatify-data__ghostwheel-test",-272694748,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floatify-data__ghostwheel-test","floatify-data__ghostwheel-test",547200744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.floatify_data__ghostwheel_test)?app.core.floatify_data__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
app.core.floatify_data(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20"], null)], null));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","compute-correlations","app.core/compute-correlations",1462200350,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null,null));

/**
 * @type {function(*, *): *}
 */
app.core.compute_correlations = (function app$core$compute_correlations(input_data,biomarker_data){
var merged_data = app.core.floatify_data(app.core.add_timestamps(app.core.merge_rows_using_dates(input_data,biomarker_data)));
var iter__4652__auto__ = (function app$core$compute_correlations_$_iter__139196(s__139197){
return (new cljs.core.LazySeq(null,(function (){
var s__139197__$1 = s__139197;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139197__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var input = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__139197__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function app$core$compute_correlations_$_iter__139196_$_iter__139198(s__139199){
return (new cljs.core.LazySeq(null,((function (s__139197__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function (){
var s__139199__$1 = s__139199;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__139199__$1);
if(temp__5753__auto____$1){
var s__139199__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__139199__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139199__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139201 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139200 = (0);
while(true){
if((i__139200 < size__4651__auto__)){
var biomarker = cljs.core._nth(c__4650__auto__,i__139200);
cljs.core.chunk_append(b__139201,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null));

var G__139894 = (i__139200 + (1));
i__139200 = G__139894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139201),app$core$compute_correlations_$_iter__139196_$_iter__139198(cljs.core.chunk_rest(s__139199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139201),null);
}
} else {
var biomarker = cljs.core.first(s__139199__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null),app$core$compute_correlations_$_iter__139196_$_iter__139198(cljs.core.rest(s__139199__$2)));
}
} else {
return null;
}
break;
}
});})(s__139197__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
,null,null));
});})(s__139197__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(app.core.get_vars(biomarker_data)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,app$core$compute_correlations_$_iter__139196(cljs.core.rest(s__139197__$1)));
} else {
var G__139896 = cljs.core.rest(s__139197__$1);
s__139197__$1 = G__139896;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(app.core.get_vars(input_data));
});

app.core.compute_correlations__ghostwheel_test = (function app$core$compute_correlations__ghostwheel_test(){
return cljs.test.test_var(app.core.compute_correlations__ghostwheel_test.cljs$lang$var);
});
app.core.compute_correlations__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139212(s__139213){
return (new cljs.core.LazySeq(null,(function (){
var s__139213__$1 = s__139213;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139213__$1);
if(temp__5753__auto__){
var s__139213__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139213__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139213__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139215 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139214 = (0);
while(true){
if((i__139214 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139214);
cljs.core.chunk_append(b__139215,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139214,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139232 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139232,sym__28441__auto__);
} else {
return G__139232;
}
});})(i__139214,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.compute_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139226 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139226,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139226,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139257 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139257.cljs$core$IFn$_invoke$arity$3 ? fexpr__139257.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139257.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139264 = s__28449__auto__;
var G__139265 = spec__28451__auto__;
var G__139266 = tcret__28459__auto__;
var G__139267 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139263 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139263.cljs$core$IFn$_invoke$arity$4 ? fexpr__139263.cljs$core$IFn$_invoke$arity$4(G__139264,G__139265,G__139266,G__139267) : fexpr__139263.call(null,G__139264,G__139265,G__139266,G__139267));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139243_139897 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139214,opts139243_139897,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139226,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139246){
var vec__139247 = p__139246;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139247,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139247,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139251 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139251,sym__28430__auto__);
} else {
return G__139251;
}
});})(i__139214,opts139243_139897,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139226,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139214,opts139243_139897,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139226,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139253 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139252 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139243_139897);
return (fexpr__139252.cljs$core$IFn$_invoke$arity$1 ? fexpr__139252.cljs$core$IFn$_invoke$arity$1(G__139253) : fexpr__139252.call(null,G__139253));
});})(i__139214,opts139243_139897,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139226,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139215,s__139213__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139898 = (i__139214 + (1));
i__139214 = G__139898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139215),app$core$iter__139212(cljs.core.chunk_rest(s__139213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139215),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139213__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139281 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139281,sym__28441__auto__);
} else {
return G__139281;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.compute_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139276 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139276,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139276,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139296 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139296.cljs$core$IFn$_invoke$arity$3 ? fexpr__139296.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139296.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139298 = s__28449__auto__;
var G__139299 = spec__28451__auto__;
var G__139300 = tcret__28459__auto__;
var G__139301 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139297 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139297.cljs$core$IFn$_invoke$arity$4 ? fexpr__139297.cljs$core$IFn$_invoke$arity$4(G__139298,G__139299,G__139300,G__139301) : fexpr__139297.call(null,G__139298,G__139299,G__139300,G__139301));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139286_139900 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139286_139900,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139276,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139287){
var vec__139289 = p__139287;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139289,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139289,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139292 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139292,sym__28430__auto__);
} else {
return G__139292;
}
});})(opts139286_139900,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139276,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139286_139900,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139276,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139295 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139294 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139286_139900);
return (fexpr__139294.cljs$core$IFn$_invoke$arity$1 ? fexpr__139294.cljs$core$IFn$_invoke$arity$1(G__139295) : fexpr__139294.call(null,G__139295));
});})(opts139286_139900,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139276,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139213__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139212(cljs.core.rest(s__139213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139306){var t__9195__auto__ = e139306;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.compute_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Filter row maps from the input that show statistically insignificant
 *   correlations
 */
app.core.filter_insignificant = (function app$core$filter_insignificant(rows){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__139312_SHARP_){
return (new cljs.core.Keyword(null,"p-value","p-value",1434023819).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__139312_SHARP_)) < app.stats.p_value_cutoff);
}),rows);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","calc-counted-score","app.core/calc-counted-score",924659970,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,null,null));

/**
 * Sums up all postive correlations and all negatives correlations, then takes
 *   the difference.
 * @type {function(*): !number}
 */
app.core.calc_counted_score = (function app$core$calc_counted_score(correlations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139313_SHARP_){
if((new cljs.core.Keyword(null,"correlation","correlation",-975773207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__139313_SHARP_)) < (0))){
return (-1);
} else {
return (1);
}
}),correlations));
});

app.core.calc_counted_score__ghostwheel_test = (function app$core$calc_counted_score__ghostwheel_test(){
return cljs.test.test_var(app.core.calc_counted_score__ghostwheel_test.cljs$lang$var);
});
app.core.calc_counted_score__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139332(s__139333){
return (new cljs.core.LazySeq(null,(function (){
var s__139333__$1 = s__139333;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139333__$1);
if(temp__5753__auto__){
var s__139333__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139333__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139333__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139335 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139334 = (0);
while(true){
if((i__139334 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139334);
cljs.core.chunk_append(b__139335,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139334,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139349 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139349,sym__28441__auto__);
} else {
return G__139349;
}
});})(i__139334,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.calc_counted_score;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139341 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139341,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139341,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139374 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139374.cljs$core$IFn$_invoke$arity$3 ? fexpr__139374.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139374.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139377 = s__28449__auto__;
var G__139378 = spec__28451__auto__;
var G__139379 = tcret__28459__auto__;
var G__139380 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139376 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139376.cljs$core$IFn$_invoke$arity$4 ? fexpr__139376.cljs$core$IFn$_invoke$arity$4(G__139377,G__139378,G__139379,G__139380) : fexpr__139376.call(null,G__139377,G__139378,G__139379,G__139380));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139366_139903 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139334,opts139366_139903,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139341,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139367){
var vec__139368 = p__139367;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139368,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139368,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139371 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139371,sym__28430__auto__);
} else {
return G__139371;
}
});})(i__139334,opts139366_139903,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139341,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139334,opts139366_139903,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139341,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139373 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139372 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139366_139903);
return (fexpr__139372.cljs$core$IFn$_invoke$arity$1 ? fexpr__139372.cljs$core$IFn$_invoke$arity$1(G__139373) : fexpr__139372.call(null,G__139373));
});})(i__139334,opts139366_139903,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139341,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139335,s__139333__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139905 = (i__139334 + (1));
i__139334 = G__139905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139335),app$core$iter__139332(cljs.core.chunk_rest(s__139333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139335),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139333__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139387 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139387,sym__28441__auto__);
} else {
return G__139387;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.calc_counted_score;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139381 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139381,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139381,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139398 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139398.cljs$core$IFn$_invoke$arity$3 ? fexpr__139398.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139398.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139400 = s__28449__auto__;
var G__139401 = spec__28451__auto__;
var G__139402 = tcret__28459__auto__;
var G__139403 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139399 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139399.cljs$core$IFn$_invoke$arity$4 ? fexpr__139399.cljs$core$IFn$_invoke$arity$4(G__139400,G__139401,G__139402,G__139403) : fexpr__139399.call(null,G__139400,G__139401,G__139402,G__139403));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139390_139906 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139390_139906,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139381,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139391){
var vec__139392 = p__139391;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139392,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139392,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139395 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139395,sym__28430__auto__);
} else {
return G__139395;
}
});})(opts139390_139906,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139381,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139390_139906,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139381,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139397 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139396 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139390_139906);
return (fexpr__139396.cljs$core$IFn$_invoke$arity$1 ? fexpr__139396.cljs$core$IFn$_invoke$arity$1(G__139397) : fexpr__139396.call(null,G__139397));
});})(opts139390_139906,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139381,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139333__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139332(cljs.core.rest(s__139333__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139404){var t__9195__auto__ = e139404;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.calc_counted_score__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),76,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","get-significant-correlations","app.core/get-significant-correlations",-1512914656,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__139455){
var map__139456 = p__139455;
var map__139456__$1 = cljs.core.__destructure_map(map__139456);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139456__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139456__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139456__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139456__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null));

/**
 * @type {function(*, !cljs.core.Keyword, !cljs.core.Keyword, !cljs.core.Keyword): *}
 */
app.core.get_significant_correlations = (function app$core$get_significant_correlations(data,one_var,one_var_value,many_var){
var one_var_significant_correlations = (function (){var G__139463 = cljs.core.group_by(one_var,app.core.filter_insignificant(data));
return (one_var_value.cljs$core$IFn$_invoke$arity$1 ? one_var_value.cljs$core$IFn$_invoke$arity$1(G__139463) : one_var_value.call(null,G__139463));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"one-var","one-var",65273568),one_var_value,new cljs.core.Keyword(null,"score","score",-1963588780),app.core.calc_counted_score(one_var_significant_correlations),new cljs.core.Keyword(null,"average","average",-492356168),0.0,new cljs.core.Keyword(null,"correlations","correlations",517036229),(function (){var iter__4652__auto__ = (function app$core$get_significant_correlations_$_iter__139464(s__139465){
return (new cljs.core.LazySeq(null,(function (){
var s__139465__$1 = s__139465;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139465__$1);
if(temp__5753__auto__){
var s__139465__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139465__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139465__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139467 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139466 = (0);
while(true){
if((i__139466 < size__4651__auto__)){
var correlation = cljs.core._nth(c__4650__auto__,i__139466);
cljs.core.chunk_append(b__139467,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null));

var G__139908 = (i__139466 + (1));
i__139466 = G__139908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139467),app$core$get_significant_correlations_$_iter__139464(cljs.core.chunk_rest(s__139465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139467),null);
}
} else {
var correlation = cljs.core.first(s__139465__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null),app$core$get_significant_correlations_$_iter__139464(cljs.core.rest(s__139465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(one_var_significant_correlations);
})()], null);
});

app.core.get_significant_correlations__ghostwheel_test = (function app$core$get_significant_correlations__ghostwheel_test(){
return cljs.test.test_var(app.core.get_significant_correlations__ghostwheel_test.cljs$lang$var);
});
app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139468(s__139469){
return (new cljs.core.LazySeq(null,(function (){
var s__139469__$1 = s__139469;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139469__$1);
if(temp__5753__auto__){
var s__139469__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139469__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139469__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139471 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139470 = (0);
while(true){
if((i__139470 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139470);
cljs.core.chunk_append(b__139471,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139470,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139477 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139477,sym__28441__auto__);
} else {
return G__139477;
}
});})(i__139470,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.get_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139472 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139472,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139472,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139491 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139491.cljs$core$IFn$_invoke$arity$3 ? fexpr__139491.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139491.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139494 = s__28449__auto__;
var G__139495 = spec__28451__auto__;
var G__139496 = tcret__28459__auto__;
var G__139497 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139493 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139493.cljs$core$IFn$_invoke$arity$4 ? fexpr__139493.cljs$core$IFn$_invoke$arity$4(G__139494,G__139495,G__139496,G__139497) : fexpr__139493.call(null,G__139494,G__139495,G__139496,G__139497));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139480_139911 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139470,opts139480_139911,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139472,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139483){
var vec__139484 = p__139483;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139484,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139484,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139487 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139487,sym__28430__auto__);
} else {
return G__139487;
}
});})(i__139470,opts139480_139911,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139472,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139470,opts139480_139911,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139472,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139489 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139488 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139480_139911);
return (fexpr__139488.cljs$core$IFn$_invoke$arity$1 ? fexpr__139488.cljs$core$IFn$_invoke$arity$1(G__139489) : fexpr__139488.call(null,G__139489));
});})(i__139470,opts139480_139911,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139472,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139471,s__139469__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139912 = (i__139470 + (1));
i__139470 = G__139912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139471),app$core$iter__139468(cljs.core.chunk_rest(s__139469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139471),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139469__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139504 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139504,sym__28441__auto__);
} else {
return G__139504;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.get_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139499 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139499,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139499,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139519 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139519.cljs$core$IFn$_invoke$arity$3 ? fexpr__139519.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139519.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139521 = s__28449__auto__;
var G__139522 = spec__28451__auto__;
var G__139523 = tcret__28459__auto__;
var G__139524 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139520 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139520.cljs$core$IFn$_invoke$arity$4 ? fexpr__139520.cljs$core$IFn$_invoke$arity$4(G__139521,G__139522,G__139523,G__139524) : fexpr__139520.call(null,G__139521,G__139522,G__139523,G__139524));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139507_139914 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139507_139914,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139499,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139508){
var vec__139509 = p__139508;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139509,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139509,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139516 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139516,sym__28430__auto__);
} else {
return G__139516;
}
});})(opts139507_139914,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139499,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139507_139914,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139499,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139518 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139517 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139507_139914);
return (fexpr__139517.cljs$core$IFn$_invoke$arity$1 ? fexpr__139517.cljs$core$IFn$_invoke$arity$1(G__139518) : fexpr__139517.call(null,G__139518));
});})(opts139507_139914,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139499,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139469__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139468(cljs.core.rest(s__139469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__139567){
var map__139568 = p__139567;
var map__139568__$1 = cljs.core.__destructure_map(map__139568);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139568__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139568__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139568__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139568__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139575){var t__9195__auto__ = e139575;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.get_significant_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),86,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","get-all-significant-correlations","app.core/get-all-significant-correlations",-321152810,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),null,null,null));

/**
 * @type {function(*, !cljs.core.Keyword, !cljs.core.Keyword): *}
 */
app.core.get_all_significant_correlations = (function app$core$get_all_significant_correlations(correlations,one_var,many_var){
var unique_values = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139576_SHARP_){
return (one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(p1__139576_SHARP_) : one_var.call(null,p1__139576_SHARP_));
}),correlations));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$core$get_all_significant_correlations_$_iter__139581(s__139582){
return (new cljs.core.LazySeq(null,(function (){
var s__139582__$1 = s__139582;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139582__$1);
if(temp__5753__auto__){
var s__139582__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139582__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139582__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139584 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139583 = (0);
while(true){
if((i__139583 < size__4651__auto__)){
var value = cljs.core._nth(c__4650__auto__,i__139583);
cljs.core.chunk_append(b__139584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,app.core.get_significant_correlations(correlations,one_var,value,many_var)], null));

var G__139916 = (i__139583 + (1));
i__139583 = G__139916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139584),app$core$get_all_significant_correlations_$_iter__139581(cljs.core.chunk_rest(s__139582__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139584),null);
}
} else {
var value = cljs.core.first(s__139582__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,app.core.get_significant_correlations(correlations,one_var,value,many_var)], null),app$core$get_all_significant_correlations_$_iter__139581(cljs.core.rest(s__139582__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_values);
})());
});

app.core.get_all_significant_correlations__ghostwheel_test = (function app$core$get_all_significant_correlations__ghostwheel_test(){
return cljs.test.test_var(app.core.get_all_significant_correlations__ghostwheel_test.cljs$lang$var);
});
app.core.get_all_significant_correlations__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139585(s__139586){
return (new cljs.core.LazySeq(null,(function (){
var s__139586__$1 = s__139586;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139586__$1);
if(temp__5753__auto__){
var s__139586__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139586__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139586__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139588 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139587 = (0);
while(true){
if((i__139587 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139587);
cljs.core.chunk_append(b__139588,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139587,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139602 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139602,sym__28441__auto__);
} else {
return G__139602;
}
});})(i__139587,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.get_all_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139593 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139593,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139593,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139617 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139617.cljs$core$IFn$_invoke$arity$3 ? fexpr__139617.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139617.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139619 = s__28449__auto__;
var G__139620 = spec__28451__auto__;
var G__139621 = tcret__28459__auto__;
var G__139622 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139618 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139618.cljs$core$IFn$_invoke$arity$4 ? fexpr__139618.cljs$core$IFn$_invoke$arity$4(G__139619,G__139620,G__139621,G__139622) : fexpr__139618.call(null,G__139619,G__139620,G__139621,G__139622));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139605_139920 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139587,opts139605_139920,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139593,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139606){
var vec__139607 = p__139606;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139607,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139607,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139610 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139610,sym__28430__auto__);
} else {
return G__139610;
}
});})(i__139587,opts139605_139920,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139593,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139587,opts139605_139920,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139593,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139616 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139615 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139605_139920);
return (fexpr__139615.cljs$core$IFn$_invoke$arity$1 ? fexpr__139615.cljs$core$IFn$_invoke$arity$1(G__139616) : fexpr__139615.call(null,G__139616));
});})(i__139587,opts139605_139920,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139593,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139588,s__139586__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139921 = (i__139587 + (1));
i__139587 = G__139921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139588),app$core$iter__139585(cljs.core.chunk_rest(s__139586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139588),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139586__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139634 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139634,sym__28441__auto__);
} else {
return G__139634;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.get_all_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139629 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139629,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139629,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139649 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139649.cljs$core$IFn$_invoke$arity$3 ? fexpr__139649.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139649.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139654 = s__28449__auto__;
var G__139655 = spec__28451__auto__;
var G__139656 = tcret__28459__auto__;
var G__139657 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139653 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139653.cljs$core$IFn$_invoke$arity$4 ? fexpr__139653.cljs$core$IFn$_invoke$arity$4(G__139654,G__139655,G__139656,G__139657) : fexpr__139653.call(null,G__139654,G__139655,G__139656,G__139657));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139641_139922 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139641_139922,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139629,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139642){
var vec__139643 = p__139642;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139643,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139643,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139646 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139646,sym__28430__auto__);
} else {
return G__139646;
}
});})(opts139641_139922,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139629,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139641_139922,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139629,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139648 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139647 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139641_139922);
return (fexpr__139647.cljs$core$IFn$_invoke$arity$1 ? fexpr__139647.cljs$core$IFn$_invoke$arity$1(G__139648) : fexpr__139647.call(null,G__139648));
});})(opts139641_139922,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139629,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139586__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139585(cljs.core.rest(s__139586__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlations","app.specs/one-to-many-correlations",-719884522),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-all-significant-correlations","get-all-significant-correlations",-1309051878,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-all-significant-correlations","get-all-significant-correlations",-1309051878,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139665){var t__9195__auto__ = e139665;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-all-significant-correlations","get-all-significant-correlations",-1309051878,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.get_all_significant_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.get_all_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-all-significant-correlations__ghostwheel-test","app.core/get-all-significant-correlations__ghostwheel-test",-639998373,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),100,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-all-significant-correlations__ghostwheel-test","get-all-significant-correlations__ghostwheel-test",-1661418833,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_all_significant_correlations__ghostwheel_test)?app.core.get_all_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","make-significant-correlations-html","app.core/make-significant-correlations-html",796697584,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null));

/**
 * Creates a table like this:
 *         Input
 *      Aggregate 1
 *      Aggregate 2
 *   Biomarker | r | p | n
 *   data      | 0 | 0 | 0
 *   ...
 *   
 * @type {function(*): *}
 */
app.core.make_significant_correlations_html = (function app$core$make_significant_correlations_html(data){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),", Counted score of ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(data),", Average value ",new cljs.core.Keyword(null,"average","average",-492356168).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Correlate"], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__139690(s__139691){
return (new cljs.core.LazySeq(null,(function (){
var s__139691__$1 = s__139691;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139691__$1);
if(temp__5753__auto__){
var s__139691__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139691__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139691__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139693 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139692 = (0);
while(true){
if((i__139692 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__139692);
cljs.core.chunk_append(b__139693,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null));

var G__139926 = (i__139692 + (1));
i__139692 = G__139926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139693),app$core$make_significant_correlations_html_$_iter__139690(cljs.core.chunk_rest(s__139691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139693),null);
}
} else {
var k = cljs.core.first(s__139691__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null),app$core$make_significant_correlations_html_$_iter__139690(cljs.core.rest(s__139691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys((function (p1__139672_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__139672_SHARP_,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
})(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data))))));
})()], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__139702(s__139703){
return (new cljs.core.LazySeq(null,(function (){
var s__139703__$1 = s__139703;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139703__$1);
if(temp__5753__auto__){
var s__139703__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139703__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139703__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139705 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139704 = (0);
while(true){
if((i__139704 < size__4651__auto__)){
var correlations = cljs.core._nth(c__4650__auto__,i__139704);
cljs.core.chunk_append(b__139705,(function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null)], null),(function (){var iter__4652__auto__ = ((function (i__139704,mvar,correlations,c__4650__auto__,size__4651__auto__,b__139705,s__139703__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__139702_$_iter__139706(s__139707){
return (new cljs.core.LazySeq(null,((function (i__139704,mvar,correlations,c__4650__auto__,size__4651__auto__,b__139705,s__139703__$2,temp__5753__auto__){
return (function (){
var s__139707__$1 = s__139707;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__139707__$1);
if(temp__5753__auto____$1){
var s__139707__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__139707__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__139707__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__139709 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__139708 = (0);
while(true){
if((i__139708 < size__4651__auto____$1)){
var vec__139710 = cljs.core._nth(c__4650__auto____$1,i__139708);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139710,(1),null);
cljs.core.chunk_append(b__139709,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__139927 = (i__139708 + (1));
i__139708 = G__139927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139709),app$core$make_significant_correlations_html_$_iter__139702_$_iter__139706(cljs.core.chunk_rest(s__139707__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139709),null);
}
} else {
var vec__139727 = cljs.core.first(s__139707__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139727,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__139702_$_iter__139706(cljs.core.rest(s__139707__$2)));
}
} else {
return null;
}
break;
}
});})(i__139704,mvar,correlations,c__4650__auto__,size__4651__auto__,b__139705,s__139703__$2,temp__5753__auto__))
,null,null));
});})(i__139704,mvar,correlations,c__4650__auto__,size__4651__auto__,b__139705,s__139703__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})());

var G__139928 = (i__139704 + (1));
i__139704 = G__139928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139705),app$core$make_significant_correlations_html_$_iter__139702(cljs.core.chunk_rest(s__139703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139705),null);
}
} else {
var correlations = cljs.core.first(s__139703__$2);
return cljs.core.cons((function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null)], null),(function (){var iter__4652__auto__ = ((function (mvar,correlations,s__139703__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__139702_$_iter__139732(s__139733){
return (new cljs.core.LazySeq(null,(function (){
var s__139733__$1 = s__139733;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__139733__$1);
if(temp__5753__auto____$1){
var s__139733__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__139733__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139733__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139735 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139734 = (0);
while(true){
if((i__139734 < size__4651__auto__)){
var vec__139736 = cljs.core._nth(c__4650__auto__,i__139734);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139736,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139736,(1),null);
cljs.core.chunk_append(b__139735,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__139929 = (i__139734 + (1));
i__139734 = G__139929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139735),app$core$make_significant_correlations_html_$_iter__139702_$_iter__139732(cljs.core.chunk_rest(s__139733__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139735),null);
}
} else {
var vec__139739 = cljs.core.first(s__139733__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139739,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__139702_$_iter__139732(cljs.core.rest(s__139733__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(mvar,correlations,s__139703__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})(),app$core$make_significant_correlations_html_$_iter__139702(cljs.core.rest(s__139703__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data));
})()], null)], null)], null);
});

app.core.make_significant_correlations_html__ghostwheel_test = (function app$core$make_significant_correlations_html__ghostwheel_test(){
return cljs.test.test_var(app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$var);
});
app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30114__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__139744(s__139745){
return (new cljs.core.LazySeq(null,(function (){
var s__139745__$1 = s__139745;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139745__$1);
if(temp__5753__auto__){
var s__139745__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139745__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139745__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139747 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139746 = (0);
while(true){
if((i__139746 < size__4651__auto__)){
var spec__30112__auto__ = cljs.core._nth(c__4650__auto__,i__139746);
cljs.core.chunk_append(b__139747,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139746,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139753 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139753,sym__28441__auto__);
} else {
return G__139753;
}
});})(i__139746,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.make_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139748 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139748,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139748,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139778 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139778.cljs$core$IFn$_invoke$arity$3 ? fexpr__139778.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139778.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139780 = s__28449__auto__;
var G__139781 = spec__28451__auto__;
var G__139782 = tcret__28459__auto__;
var G__139783 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139779 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139779.cljs$core$IFn$_invoke$arity$4 ? fexpr__139779.cljs$core$IFn$_invoke$arity$4(G__139780,G__139781,G__139782,G__139783) : fexpr__139779.call(null,G__139780,G__139781,G__139782,G__139783));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139760_139932 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__139746,opts139760_139932,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139748,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139765){
var vec__139766 = p__139765;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139766,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139766,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139769 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139769,sym__28430__auto__);
} else {
return G__139769;
}
});})(i__139746,opts139760_139932,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139748,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__139746,opts139760_139932,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139748,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139774 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139773 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139760_139932);
return (fexpr__139773.cljs$core$IFn$_invoke$arity$1 ? fexpr__139773.cljs$core$IFn$_invoke$arity$1(G__139774) : fexpr__139773.call(null,G__139774));
});})(i__139746,opts139760_139932,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139748,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,c__4650__auto__,size__4651__auto__,b__139747,s__139745__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__139933 = (i__139746 + (1));
i__139746 = G__139933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139747),app$core$iter__139744(cljs.core.chunk_rest(s__139745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139747),null);
}
} else {
var spec__30112__auto__ = cljs.core.first(s__139745__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30112__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__139792 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139792,sym__28441__auto__);
} else {
return G__139792;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.make_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28450__auto__)){
return cljs.core.deref(v__28450__auto__);
} else {
return null;
}
}
})();
var opts__28454__auto__ = opts__28470__auto__;
var old_tc_ns__28455__auto__ = "clojure.test.check";
var old_tc_opts_key__28456__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28455__auto__,"opts");
var vec__139785 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139785,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139785,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__139813 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__139813.cljs$core$IFn$_invoke$arity$3 ? fexpr__139813.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__139813.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__139815 = s__28449__auto__;
var G__139816 = spec__28451__auto__;
var G__139817 = tcret__28459__auto__;
var G__139818 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__139814 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__139814.cljs$core$IFn$_invoke$arity$4 ? fexpr__139814.cljs$core$IFn$_invoke$arity$4(G__139815,G__139816,G__139817,G__139818) : fexpr__139814.call(null,G__139815,G__139816,G__139817,G__139818));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts139797_139935 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts139797_139935,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139785,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__139798){
var vec__139799 = p__139798;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139799,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139799,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__139806 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__139806,sym__28430__auto__);
} else {
return G__139806;
}
});})(opts139797_139935,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139785,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts139797_139935,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139785,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__139808 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__139807 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts139797_139935);
return (fexpr__139807.cljs$core$IFn$_invoke$arity$1 ? fexpr__139807.cljs$core$IFn$_invoke$arity$1(G__139808) : fexpr__139807.call(null,G__139808));
});})(opts139797_139935,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__139785,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30112__auto__,s__139745__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__139744(cljs.core.rest(s__139745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null)], null));
})();
try{var value__9162__auto__ = ((cljs.core.every_QMARK_((function (p1__30113__30115__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30113__30115__auto__));
}),spec_checks__30114__auto__)) && (((true) && (true))));
if(value__9162__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,value__9162__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9162__auto__;
}catch (e139827){var t__9195__auto__ = e139827;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30113__30115__auto__","p1__30113__30115__auto__",1596049651,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30114__auto__","spec-checks__30114__auto__",-802488127,null)),true,true),null,t__9195__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30114__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),110,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._LT_),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__139828_SHARP_){
return ((cljs.core.vector_QMARK_(p1__139828_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__139828_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :results-slope 50}
 *   
 *   Taken from https://stackoverflow.com/a/17902228
 */
app.core.flatten_map_concat_keys = (function app$core$flatten_map_concat_keys(var_args){
var G__139830 = arguments.length;
switch (G__139830) {
case 2:
return app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$2 = (function (form,separator){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3(form,separator,null));
}));

(app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3 = (function (form,separator,pre){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__139831){
var vec__139832 = p__139831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139832,(1),null);
var prefix = (cljs.core.truth_(pre)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator),cljs.core.name(k)].join(''):cljs.core.name(k));
if(cljs.core.map_QMARK_(v)){
return app.core.flatten_map_concat_keys.cljs$core$IFn$_invoke$arity$3(v,separator,prefix);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(prefix),v], null)], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
}));

(app.core.flatten_map_concat_keys.cljs$lang$maxFixedArity = 3);

/**
 * Converts {:input :i :biomarker :b :results {:slope 5.0}} to
 *   {:input :i :b--slope 5.0}
 *   
 */
app.core.get_biomarker_regression_result_keys = (function app$core$get_biomarker_regression_result_keys(m){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$core$get_biomarker_regression_result_keys_$_iter__139835(s__139836){
return (new cljs.core.LazySeq(null,(function (){
var s__139836__$1 = s__139836;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139836__$1);
if(temp__5753__auto__){
var s__139836__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139836__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139836__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139838 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139837 = (0);
while(true){
if((i__139837 < size__4651__auto__)){
var vec__139840 = cljs.core._nth(c__4650__auto__,i__139837);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139840,(1),null);
cljs.core.chunk_append(b__139838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("--",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null))),v], null));

var G__139944 = (i__139837 + (1));
i__139837 = G__139944;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139838),app$core$get_biomarker_regression_result_keys_$_iter__139835(cljs.core.chunk_rest(s__139836__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139838),null);
}
} else {
var vec__139843 = cljs.core.first(s__139836__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__139843,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("--",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null))),v], null),app$core$get_biomarker_regression_result_keys_$_iter__139835(cljs.core.rest(s__139836__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(m));
})()));
});
app.core.get_per_input_row = (function app$core$get_per_input_row(same_input_results){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.get_biomarker_regression_result_keys,same_input_results));
});
app.core.add_aggregates = (function app$core$add_aggregates(input_significant_correlations,flat_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flat_map,new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__139847 = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(flat_map);
return (fexpr__139847.cljs$core$IFn$_invoke$arity$1 ? fexpr__139847.cljs$core$IFn$_invoke$arity$1(input_significant_correlations) : fexpr__139847.call(null,input_significant_correlations));
})()));
});
app.core.make_per_input_correlation_results = (function app$core$make_per_input_correlation_results(results,input_significant_correlations){
var rows_by_input = cljs.core.group_by(new cljs.core.Keyword(null,"input","input",556931961),results);
var per_input_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139848_SHARP_){
return app.core.add_aggregates(input_significant_correlations,app.core.get_per_input_row(p1__139848_SHARP_));
}),cljs.core.vals(rows_by_input));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([per_input_results], 0));

return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139849_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (a,b){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),a)){
return (-1);
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),b)){
return (-1);
} else {
return cljs.core.compare(a,b);

}
}
})),p1__139849_SHARP_);
}),per_input_results);
});
app.core.home_page = (function app$core$home_page(){
var map__139854 = cljs.core.deref(app.csv.csv_data);
var map__139854__$1 = cljs.core.__destructure_map(map__139854);
var state = map__139854__$1;
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139854__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139854__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139854__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__139854__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
var results = app.core.compute_correlations(input_data,biomarker_data);
var input_significant_correlations = app.core.get_all_significant_correlations(results,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816));
var biomarker_significant_correlations = app.core.get_all_significant_correlations(results,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),new cljs.core.Keyword(null,"input","input",556931961));
var results_without_plots = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__139853_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__139853_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
}),results);
var flat_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.flatten_map,results_without_plots);
var flat_results_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flat_results);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n      biomarkers in an attempt to identify statistically significant\n      correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n      behind this app that data is sent to for analysis; everything is done\n      client side in the browser. Therefore, the page can be saved and run\n      offline as needed."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Not statistically significant results are displayed with greyed-out\n      text.  The score for each input is calculated as the number of\n      statistically significant correlations that are positive, minus the number\n      that are negative.  We need a spreadsheet (or something built in to the\n      app) that determines for each biomarker whether up is good or bad with\n      respect to calculating the score."], null),app.ui.maps_to_datagrid(app.core.make_per_input_correlation_results(results_without_plots,input_significant_correlations)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_datagrid(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__139856(s__139857){
return (new cljs.core.LazySeq(null,(function (){
var s__139857__$1 = s__139857;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139857__$1);
if(temp__5753__auto__){
var s__139857__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139857__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139857__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139859 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139858 = (0);
while(true){
if((i__139858 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__139858);
cljs.core.chunk_append(b__139859,app.core.make_significant_correlations_html(sig_correlations));

var G__139945 = (i__139858 + (1));
i__139858 = G__139945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139859),app$core$home_page_$_iter__139856(cljs.core.chunk_rest(s__139857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139859),null);
}
} else {
var sig_correlations = cljs.core.first(s__139857__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(sig_correlations),app$core$home_page_$_iter__139856(cljs.core.rest(s__139857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(input_significant_correlations));
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$home_page_$_iter__139860(s__139861){
return (new cljs.core.LazySeq(null,(function (){
var s__139861__$1 = s__139861;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__139861__$1);
if(temp__5753__auto__){
var s__139861__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__139861__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__139861__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__139863 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__139862 = (0);
while(true){
if((i__139862 < size__4651__auto__)){
var sig_correlations = cljs.core._nth(c__4650__auto__,i__139862);
cljs.core.chunk_append(b__139863,app.core.make_significant_correlations_html(sig_correlations));

var G__139946 = (i__139862 + (1));
i__139862 = G__139946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__139863),app$core$home_page_$_iter__139860(cljs.core.chunk_rest(s__139861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__139863),null);
}
} else {
var sig_correlations = cljs.core.first(s__139861__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(sig_correlations),app$core$home_page_$_iter__139860(cljs.core.rest(s__139861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.vals(biomarker_significant_correlations));
})())], null)], null);
});
if(cljs.core.truth_(ghostwheel.core._STAR_global_check_allowed_QMARK__STAR_)){
var _STAR_global_trace_allowed_QMARK__STAR__orig_val__139864_139947 = ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_;
var _STAR_report_output_STAR__orig_val__139865_139948 = ghostwheel.logging._STAR_report_output_STAR_;
var _STAR_global_trace_allowed_QMARK__STAR__temp_val__139866_139949 = false;
var _STAR_report_output_STAR__temp_val__139867_139950 = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__temp_val__139866_139949);

(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__temp_val__139867_139950);

try{var report_orig_val__139868_139951 = cljs.test.report;
var report_temp_val__139869_139952 = ghostwheel.reporting.report;
(cljs.test.report = report_temp_val__139869_139952);

try{cljs.test.run_block((function (){var env139870 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary139871 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env139870);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__9228__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9228__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.add_timestamps__ghostwheel_test;},new cljs.core.Symbol("app.core","add-timestamps__ghostwheel-test","app.core/add-timestamps__ghostwheel-test",1015592430,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-timestamps__ghostwheel-test","add-timestamps__ghostwheel-test",-5350750,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.add_timestamps__ghostwheel_test)?app.core.add_timestamps__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.floatify_data__ghostwheel_test;},new cljs.core.Symbol("app.core","floatify-data__ghostwheel-test","app.core/floatify-data__ghostwheel-test",-272694748,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floatify-data__ghostwheel-test","floatify-data__ghostwheel-test",547200744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.floatify_data__ghostwheel_test)?app.core.floatify_data__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),76,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),86,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.get_all_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-all-significant-correlations__ghostwheel-test","app.core/get-all-significant-correlations__ghostwheel-test",-639998373,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),100,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-all-significant-correlations__ghostwheel-test","get-all-significant-correlations__ghostwheel-test",-1661418833,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_all_significant_correlations__ghostwheel_test)?app.core.get_all_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),110,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9228__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
})], null)], 0));
})());
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return summary139871.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary139871.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env139870);

cljs.test.do_report(cljs.core.deref(summary139871));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary139871),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_();
})], null));
})());
}finally {(cljs.test.report = report_orig_val__139868_139951);
}


}finally {(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__orig_val__139865_139948);

(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__orig_val__139864_139947);
}} else {
}
app.core.mount_root = (function app$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.home_page], null),document.getElementById("app"));
});
app.core.init_BANG_ = (function app$core$init_BANG_(){
return app.core.mount_root();
});
goog.exportSymbol('app.core.init_BANG_', app.core.init_BANG_);

//# sourceMappingURL=app.core.js.map
