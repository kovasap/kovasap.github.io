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
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__48728(s__48729){
return (new cljs.core.LazySeq(null,(function (){
var s__48729__$1 = s__48729;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48729__$1);
if(temp__5753__auto__){
var s__48729__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48729__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48729__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48731 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48730 = (0);
while(true){
if((i__48730 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__48730);
cljs.core.chunk_append(b__48731,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48730,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__48739 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48739,sym__28441__auto__);
} else {
return G__48739;
}
});})(i__48730,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__))
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
var vec__48734 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48734,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48734,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__48750 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__48750.cljs$core$IFn$_invoke$arity$3 ? fexpr__48750.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__48750.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__48752 = s__28449__auto__;
var G__48753 = spec__28451__auto__;
var G__48754 = tcret__28459__auto__;
var G__48755 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__48751 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__48751.cljs$core$IFn$_invoke$arity$4 ? fexpr__48751.cljs$core$IFn$_invoke$arity$4(G__48752,G__48753,G__48754,G__48755) : fexpr__48751.call(null,G__48752,G__48753,G__48754,G__48755));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts48742_49504 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48730,opts48742_49504,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48734,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__48743){
var vec__48744 = p__48743;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48744,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48744,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__48747 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48747,sym__28430__auto__);
} else {
return G__48747;
}
});})(i__48730,opts48742_49504,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48734,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__48730,opts48742_49504,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48734,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__48749 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__48748 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts48742_49504);
return (fexpr__48748.cljs$core$IFn$_invoke$arity$1 ? fexpr__48748.cljs$core$IFn$_invoke$arity$1(G__48749) : fexpr__48748.call(null,G__48749));
});})(i__48730,opts48742_49504,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48734,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48731,s__48729__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49505 = (i__48730 + (1));
i__48730 = G__49505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48731),app$core$iter__48728(cljs.core.chunk_rest(s__48729__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48731),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__48729__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__48768 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48768,sym__28441__auto__);
} else {
return G__48768;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__))
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
var vec__48756 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48756,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48756,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__48798 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__48798.cljs$core$IFn$_invoke$arity$3 ? fexpr__48798.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__48798.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__48803 = s__28449__auto__;
var G__48804 = spec__28451__auto__;
var G__48805 = tcret__28459__auto__;
var G__48806 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__48802 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__48802.cljs$core$IFn$_invoke$arity$4 ? fexpr__48802.cljs$core$IFn$_invoke$arity$4(G__48803,G__48804,G__48805,G__48806) : fexpr__48802.call(null,G__48803,G__48804,G__48805,G__48806));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts48782_49508 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts48782_49508,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48756,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__48785){
var vec__48786 = p__48785;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48786,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48786,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__48789 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48789,sym__28430__auto__);
} else {
return G__48789;
}
});})(opts48782_49508,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48756,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts48782_49508,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48756,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__48797 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__48796 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts48782_49508);
return (fexpr__48796.cljs$core$IFn$_invoke$arity$1 ? fexpr__48796.cljs$core$IFn$_invoke$arity$1(G__48797) : fexpr__48796.call(null,G__48797));
});})(opts48782_49508,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48756,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48729__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__48728(cljs.core.rest(s__48729__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e48813){var t__9191__auto__ = e48813;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48821_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__48821_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","compute-correlations","app.core/compute-correlations",1462200350,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null,null));

/**
 * @type {function(*, *): *}
 */
app.core.compute_correlations = (function app$core$compute_correlations(input_data,biomarker_data){
var merged_data = app.core.merge_rows_using_dates(input_data,biomarker_data);
var iter__4652__auto__ = (function app$core$compute_correlations_$_iter__48830(s__48831){
return (new cljs.core.LazySeq(null,(function (){
var s__48831__$1 = s__48831;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48831__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var input = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__48831__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function app$core$compute_correlations_$_iter__48830_$_iter__48832(s__48833){
return (new cljs.core.LazySeq(null,((function (s__48831__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function (){
var s__48833__$1 = s__48833;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48833__$1);
if(temp__5753__auto____$1){
var s__48833__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48833__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48833__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48835 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48834 = (0);
while(true){
if((i__48834 < size__4651__auto__)){
var biomarker = cljs.core._nth(c__4650__auto__,i__48834);
cljs.core.chunk_append(b__48835,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null));

var G__49510 = (i__48834 + (1));
i__48834 = G__49510;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48835),app$core$compute_correlations_$_iter__48830_$_iter__48832(cljs.core.chunk_rest(s__48833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48835),null);
}
} else {
var biomarker = cljs.core.first(s__48833__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null),app$core$compute_correlations_$_iter__48830_$_iter__48832(cljs.core.rest(s__48833__$2)));
}
} else {
return null;
}
break;
}
});})(s__48831__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
,null,null));
});})(s__48831__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(app.core.get_vars(biomarker_data)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,app$core$compute_correlations_$_iter__48830(cljs.core.rest(s__48831__$1)));
} else {
var G__49512 = cljs.core.rest(s__48831__$1);
s__48831__$1 = G__49512;
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
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__48838(s__48839){
return (new cljs.core.LazySeq(null,(function (){
var s__48839__$1 = s__48839;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48839__$1);
if(temp__5753__auto__){
var s__48839__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48839__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48839__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48841 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48840 = (0);
while(true){
if((i__48840 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__48840);
cljs.core.chunk_append(b__48841,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48840,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__48853 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48853,sym__28441__auto__);
} else {
return G__48853;
}
});})(i__48840,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__))
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
var vec__48848 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48848,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48848,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__48873 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__48873.cljs$core$IFn$_invoke$arity$3 ? fexpr__48873.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__48873.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__48876 = s__28449__auto__;
var G__48877 = spec__28451__auto__;
var G__48878 = tcret__28459__auto__;
var G__48879 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__48875 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__48875.cljs$core$IFn$_invoke$arity$4 ? fexpr__48875.cljs$core$IFn$_invoke$arity$4(G__48876,G__48877,G__48878,G__48879) : fexpr__48875.call(null,G__48876,G__48877,G__48878,G__48879));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts48856_49515 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48840,opts48856_49515,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48848,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__48861){
var vec__48862 = p__48861;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48862,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48862,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__48865 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48865,sym__28430__auto__);
} else {
return G__48865;
}
});})(i__48840,opts48856_49515,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48848,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__48840,opts48856_49515,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48848,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__48867 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__48866 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts48856_49515);
return (fexpr__48866.cljs$core$IFn$_invoke$arity$1 ? fexpr__48866.cljs$core$IFn$_invoke$arity$1(G__48867) : fexpr__48866.call(null,G__48867));
});})(i__48840,opts48856_49515,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48848,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48841,s__48839__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49516 = (i__48840 + (1));
i__48840 = G__49516;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48841),app$core$iter__48838(cljs.core.chunk_rest(s__48839__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48841),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__48839__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__48895 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48895,sym__28441__auto__);
} else {
return G__48895;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__))
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
var vec__48887 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48887,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__48918 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__48918.cljs$core$IFn$_invoke$arity$3 ? fexpr__48918.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__48918.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__48920 = s__28449__auto__;
var G__48921 = spec__28451__auto__;
var G__48922 = tcret__28459__auto__;
var G__48923 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__48919 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__48919.cljs$core$IFn$_invoke$arity$4 ? fexpr__48919.cljs$core$IFn$_invoke$arity$4(G__48920,G__48921,G__48922,G__48923) : fexpr__48919.call(null,G__48920,G__48921,G__48922,G__48923));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts48904_49518 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts48904_49518,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48887,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__48905){
var vec__48906 = p__48905;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48906,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__48909 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48909,sym__28430__auto__);
} else {
return G__48909;
}
});})(opts48904_49518,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48887,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts48904_49518,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48887,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__48916 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__48915 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts48904_49518);
return (fexpr__48915.cljs$core$IFn$_invoke$arity$1 ? fexpr__48915.cljs$core$IFn$_invoke$arity$1(G__48916) : fexpr__48915.call(null,G__48916));
});})(opts48904_49518,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48887,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48839__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__48838(cljs.core.rest(s__48839__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e48934){var t__9191__auto__ = e48934;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.compute_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Filter row maps from the input that show statistically insignificant
 *   correlations
 */
app.core.filter_insignificant = (function app$core$filter_insignificant(rows){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48941_SHARP_){
return (new cljs.core.Keyword(null,"correlation-p-value","correlation-p-value",147752757).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__48941_SHARP_)) < 0.05);
}),rows);
});
/**
 * Creates a list of maps showing statistically significant results only with
 *   keys like:
 *   {:input keyword?
 * :biomarker-correlations}
 *   Food | Significant biomarker correlation 1 | ... | +1/-1 Correlation Sum |
 *   Another Aggregation
 *   
 */
app.core.make_significant_table = (function app$core$make_significant_table(rows){
return null;
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","calc-counted-score","app.core/calc-counted-score",924659970,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,null,null));

/**
 * Sums up all postive correlations and all negatives correlations, then takes
 *   the difference.
 * @type {function(*): !number}
 */
app.core.calc_counted_score = (function app$core$calc_counted_score(correlations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48942_SHARP_){
if((new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__48942_SHARP_)) < (0))){
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
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__48948(s__48949){
return (new cljs.core.LazySeq(null,(function (){
var s__48949__$1 = s__48949;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48949__$1);
if(temp__5753__auto__){
var s__48949__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48949__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48949__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48951 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48950 = (0);
while(true){
if((i__48950 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__48950);
cljs.core.chunk_append(b__48951,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48950,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__48957 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48957,sym__28441__auto__);
} else {
return G__48957;
}
});})(i__48950,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__))
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
var vec__48952 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48952,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48952,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__48978 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__48978.cljs$core$IFn$_invoke$arity$3 ? fexpr__48978.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__48978.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__48983 = s__28449__auto__;
var G__48984 = spec__28451__auto__;
var G__48985 = tcret__28459__auto__;
var G__48986 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__48982 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__48982.cljs$core$IFn$_invoke$arity$4 ? fexpr__48982.cljs$core$IFn$_invoke$arity$4(G__48983,G__48984,G__48985,G__48986) : fexpr__48982.call(null,G__48983,G__48984,G__48985,G__48986));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts48967_49523 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__48950,opts48967_49523,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48952,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__48970){
var vec__48971 = p__48970;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48971,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__48975 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48975,sym__28430__auto__);
} else {
return G__48975;
}
});})(i__48950,opts48967_49523,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48952,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__48950,opts48967_49523,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48952,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__48977 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__48976 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts48967_49523);
return (fexpr__48976.cljs$core$IFn$_invoke$arity$1 ? fexpr__48976.cljs$core$IFn$_invoke$arity$1(G__48977) : fexpr__48976.call(null,G__48977));
});})(i__48950,opts48967_49523,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48952,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__48951,s__48949__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49524 = (i__48950 + (1));
i__48950 = G__49524;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48951),app$core$iter__48948(cljs.core.chunk_rest(s__48949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48951),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__48949__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49000 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49000,sym__28441__auto__);
} else {
return G__49000;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__))
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
var vec__48994 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48994,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49024 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49024.cljs$core$IFn$_invoke$arity$3 ? fexpr__49024.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49024.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49031 = s__28449__auto__;
var G__49032 = spec__28451__auto__;
var G__49033 = tcret__28459__auto__;
var G__49034 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49030 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49030.cljs$core$IFn$_invoke$arity$4 ? fexpr__49030.cljs$core$IFn$_invoke$arity$4(G__49031,G__49032,G__49033,G__49034) : fexpr__49030.call(null,G__49031,G__49032,G__49033,G__49034));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49011_49526 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts49011_49526,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48994,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49014){
var vec__49015 = p__49014;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49015,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49015,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49019 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49019,sym__28430__auto__);
} else {
return G__49019;
}
});})(opts49011_49526,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48994,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts49011_49526,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48994,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49021 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49020 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49011_49526);
return (fexpr__49020.cljs$core$IFn$_invoke$arity$1 ? fexpr__49020.cljs$core$IFn$_invoke$arity$1(G__49021) : fexpr__49020.call(null,G__49021));
});})(opts49011_49526,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__48994,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__48949__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__48948(cljs.core.rest(s__48949__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e49044){var t__9191__auto__ = e49044;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.calc_counted_score__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","get-significant-correlations","app.core/get-significant-correlations",-1512914656,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__49050){
var map__49051 = p__49050;
var map__49051__$1 = cljs.core.__destructure_map(map__49051);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null));

/**
 * @type {function(*, !cljs.core.Keyword, !cljs.core.Keyword, !cljs.core.Keyword): *}
 */
app.core.get_significant_correlations = (function app$core$get_significant_correlations(data,one_var,one_var_value,many_var){
var one_var_significant_correlations = (function (){var G__49057 = cljs.core.group_by(one_var,app.core.filter_insignificant(data));
return (one_var_value.cljs$core$IFn$_invoke$arity$1 ? one_var_value.cljs$core$IFn$_invoke$arity$1(G__49057) : one_var_value.call(null,G__49057));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"one-var","one-var",65273568),one_var_value,new cljs.core.Keyword(null,"score","score",-1963588780),app.core.calc_counted_score(one_var_significant_correlations),new cljs.core.Keyword(null,"average","average",-492356168),0.0,new cljs.core.Keyword(null,"correlations","correlations",517036229),(function (){var iter__4652__auto__ = (function app$core$get_significant_correlations_$_iter__49058(s__49059){
return (new cljs.core.LazySeq(null,(function (){
var s__49059__$1 = s__49059;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49059__$1);
if(temp__5753__auto__){
var s__49059__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49059__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49059__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49061 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49060 = (0);
while(true){
if((i__49060 < size__4651__auto__)){
var correlation = cljs.core._nth(c__4650__auto__,i__49060);
cljs.core.chunk_append(b__49061,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null));

var G__49531 = (i__49060 + (1));
i__49060 = G__49531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49061),app$core$get_significant_correlations_$_iter__49058(cljs.core.chunk_rest(s__49059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49061),null);
}
} else {
var correlation = cljs.core.first(s__49059__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null),app$core$get_significant_correlations_$_iter__49058(cljs.core.rest(s__49059__$2)));
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
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__49071(s__49072){
return (new cljs.core.LazySeq(null,(function (){
var s__49072__$1 = s__49072;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49072__$1);
if(temp__5753__auto__){
var s__49072__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49072__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49072__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49074 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49073 = (0);
while(true){
if((i__49073 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__49073);
cljs.core.chunk_append(b__49074,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49073,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49089 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49089,sym__28441__auto__);
} else {
return G__49089;
}
});})(i__49073,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__))
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
var vec__49076 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49076,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49113 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49113.cljs$core$IFn$_invoke$arity$3 ? fexpr__49113.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49113.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49116 = s__28449__auto__;
var G__49117 = spec__28451__auto__;
var G__49118 = tcret__28459__auto__;
var G__49119 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49115 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49115.cljs$core$IFn$_invoke$arity$4 ? fexpr__49115.cljs$core$IFn$_invoke$arity$4(G__49116,G__49117,G__49118,G__49119) : fexpr__49115.call(null,G__49116,G__49117,G__49118,G__49119));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49095_49534 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49073,opts49095_49534,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49076,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49101){
var vec__49102 = p__49101;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49105 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49105,sym__28430__auto__);
} else {
return G__49105;
}
});})(i__49073,opts49095_49534,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49076,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49073,opts49095_49534,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49076,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49107 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49106 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49095_49534);
return (fexpr__49106.cljs$core$IFn$_invoke$arity$1 ? fexpr__49106.cljs$core$IFn$_invoke$arity$1(G__49107) : fexpr__49106.call(null,G__49107));
});})(i__49073,opts49095_49534,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49076,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49074,s__49072__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49535 = (i__49073 + (1));
i__49073 = G__49535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49074),app$core$iter__49071(cljs.core.chunk_rest(s__49072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49074),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__49072__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49135 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49135,sym__28441__auto__);
} else {
return G__49135;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__))
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
var vec__49127 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49127,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49152 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49152.cljs$core$IFn$_invoke$arity$3 ? fexpr__49152.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49152.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49154 = s__28449__auto__;
var G__49155 = spec__28451__auto__;
var G__49156 = tcret__28459__auto__;
var G__49157 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49153 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49153.cljs$core$IFn$_invoke$arity$4 ? fexpr__49153.cljs$core$IFn$_invoke$arity$4(G__49154,G__49155,G__49156,G__49157) : fexpr__49153.call(null,G__49154,G__49155,G__49156,G__49157));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49144_49537 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts49144_49537,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49127,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49145){
var vec__49146 = p__49145;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49146,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49146,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49149 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49149,sym__28430__auto__);
} else {
return G__49149;
}
});})(opts49144_49537,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49127,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts49144_49537,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49127,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49151 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49150 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49144_49537);
return (fexpr__49150.cljs$core$IFn$_invoke$arity$1 ? fexpr__49150.cljs$core$IFn$_invoke$arity$1(G__49151) : fexpr__49150.call(null,G__49151));
});})(opts49144_49537,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49127,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49072__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__49071(cljs.core.rest(s__49072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__49163){
var map__49164 = p__49163;
var map__49164__$1 = cljs.core.__destructure_map(map__49164);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49164__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49164__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49164__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49164__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null)], null));
})();
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e49165){var t__9191__auto__ = e49165;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.get_significant_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),82,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),", Counted score of ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(data),", Average value ",new cljs.core.Keyword(null,"average","average",-492356168).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Correlate"], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__49186(s__49187){
return (new cljs.core.LazySeq(null,(function (){
var s__49187__$1 = s__49187;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49187__$1);
if(temp__5753__auto__){
var s__49187__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49187__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49187__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49189 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49188 = (0);
while(true){
if((i__49188 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__49188);
cljs.core.chunk_append(b__49189,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null));

var G__49546 = (i__49188 + (1));
i__49188 = G__49546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49189),app$core$make_significant_correlations_html_$_iter__49186(cljs.core.chunk_rest(s__49187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49189),null);
}
} else {
var k = cljs.core.first(s__49187__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null),app$core$make_significant_correlations_html_$_iter__49186(cljs.core.rest(s__49187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys((function (p1__49166_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__49166_SHARP_,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
})(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data))))));
})()], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__49197(s__49198){
return (new cljs.core.LazySeq(null,(function (){
var s__49198__$1 = s__49198;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49198__$1);
if(temp__5753__auto__){
var s__49198__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49198__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49198__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49200 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49199 = (0);
while(true){
if((i__49199 < size__4651__auto__)){
var correlations = cljs.core._nth(c__4650__auto__,i__49199);
cljs.core.chunk_append(b__49200,(function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (i__49199,mvar,correlations,c__4650__auto__,size__4651__auto__,b__49200,s__49198__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__49197_$_iter__49204(s__49206){
return (new cljs.core.LazySeq(null,((function (i__49199,mvar,correlations,c__4650__auto__,size__4651__auto__,b__49200,s__49198__$2,temp__5753__auto__){
return (function (){
var s__49206__$1 = s__49206;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49206__$1);
if(temp__5753__auto____$1){
var s__49206__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49206__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__49206__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__49210 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__49209 = (0);
while(true){
if((i__49209 < size__4651__auto____$1)){
var vec__49212 = cljs.core._nth(c__4650__auto____$1,i__49209);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49212,(1),null);
cljs.core.chunk_append(b__49210,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__49547 = (i__49209 + (1));
i__49209 = G__49547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49210),app$core$make_significant_correlations_html_$_iter__49197_$_iter__49204(cljs.core.chunk_rest(s__49206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49210),null);
}
} else {
var vec__49220 = cljs.core.first(s__49206__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49220,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__49197_$_iter__49204(cljs.core.rest(s__49206__$2)));
}
} else {
return null;
}
break;
}
});})(i__49199,mvar,correlations,c__4650__auto__,size__4651__auto__,b__49200,s__49198__$2,temp__5753__auto__))
,null,null));
});})(i__49199,mvar,correlations,c__4650__auto__,size__4651__auto__,b__49200,s__49198__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})());

var G__49548 = (i__49199 + (1));
i__49199 = G__49548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),app$core$make_significant_correlations_html_$_iter__49197(cljs.core.chunk_rest(s__49198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49200),null);
}
} else {
var correlations = cljs.core.first(s__49198__$2);
return cljs.core.cons((function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (mvar,correlations,s__49198__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__49197_$_iter__49224(s__49225){
return (new cljs.core.LazySeq(null,(function (){
var s__49225__$1 = s__49225;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__49225__$1);
if(temp__5753__auto____$1){
var s__49225__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49225__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49225__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49227 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49226 = (0);
while(true){
if((i__49226 < size__4651__auto__)){
var vec__49235 = cljs.core._nth(c__4650__auto__,i__49226);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49235,(1),null);
cljs.core.chunk_append(b__49227,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__49549 = (i__49226 + (1));
i__49226 = G__49549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49227),app$core$make_significant_correlations_html_$_iter__49197_$_iter__49224(cljs.core.chunk_rest(s__49225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49227),null);
}
} else {
var vec__49241 = cljs.core.first(s__49225__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49241,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__49197_$_iter__49224(cljs.core.rest(s__49225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(mvar,correlations,s__49198__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})(),app$core$make_significant_correlations_html_$_iter__49197(cljs.core.rest(s__49198__$2)));
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
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__49250(s__49251){
return (new cljs.core.LazySeq(null,(function (){
var s__49251__$1 = s__49251;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49251__$1);
if(temp__5753__auto__){
var s__49251__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49251__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49251__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49253 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49252 = (0);
while(true){
if((i__49252 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__49252);
cljs.core.chunk_append(b__49253,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49252,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49265 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49265,sym__28441__auto__);
} else {
return G__49265;
}
});})(i__49252,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__))
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
var vec__49259 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49259,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49292 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49292.cljs$core$IFn$_invoke$arity$3 ? fexpr__49292.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49292.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49294 = s__28449__auto__;
var G__49295 = spec__28451__auto__;
var G__49296 = tcret__28459__auto__;
var G__49297 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49293 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49293.cljs$core$IFn$_invoke$arity$4 ? fexpr__49293.cljs$core$IFn$_invoke$arity$4(G__49294,G__49295,G__49296,G__49297) : fexpr__49293.call(null,G__49294,G__49295,G__49296,G__49297));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49278_49550 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49252,opts49278_49550,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49259,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49279){
var vec__49280 = p__49279;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49280,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49280,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49284 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49284,sym__28430__auto__);
} else {
return G__49284;
}
});})(i__49252,opts49278_49550,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49259,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49252,opts49278_49550,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49259,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49286 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49285 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49278_49550);
return (fexpr__49285.cljs$core$IFn$_invoke$arity$1 ? fexpr__49285.cljs$core$IFn$_invoke$arity$1(G__49286) : fexpr__49285.call(null,G__49286));
});})(i__49252,opts49278_49550,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49259,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49253,s__49251__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49551 = (i__49252 + (1));
i__49252 = G__49551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49253),app$core$iter__49250(cljs.core.chunk_rest(s__49251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49253),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__49251__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49304 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49304,sym__28441__auto__);
} else {
return G__49304;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__))
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
var vec__49299 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49318 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49318.cljs$core$IFn$_invoke$arity$3 ? fexpr__49318.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49318.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49320 = s__28449__auto__;
var G__49321 = spec__28451__auto__;
var G__49322 = tcret__28459__auto__;
var G__49323 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49319 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49319.cljs$core$IFn$_invoke$arity$4 ? fexpr__49319.cljs$core$IFn$_invoke$arity$4(G__49320,G__49321,G__49322,G__49323) : fexpr__49319.call(null,G__49320,G__49321,G__49322,G__49323));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49310_49552 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts49310_49552,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49299,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49311){
var vec__49312 = p__49311;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49312,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49312,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49315 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49315,sym__28430__auto__);
} else {
return G__49315;
}
});})(opts49310_49552,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49299,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts49310_49552,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49299,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49317 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49316 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49310_49552);
return (fexpr__49316.cljs$core$IFn$_invoke$arity$1 ? fexpr__49316.cljs$core$IFn$_invoke$arity$1(G__49317) : fexpr__49316.call(null,G__49317));
});})(opts49310_49552,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49299,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49251__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__49250(cljs.core.rest(s__49251__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e49324){var t__9191__auto__ = e49324;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html","app.core/make-pairwise-significant-correlations-html",1590638061,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.make_pairwise_significant_correlations_html = (function app$core$make_pairwise_significant_correlations_html(correlations){
var unique_inputs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49329_SHARP_){
return new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(p1__49329_SHARP_);
}),correlations));
var unique_biomarkers = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49330_SHARP_){
return new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(p1__49330_SHARP_);
}),correlations));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$make_pairwise_significant_correlations_html_$_iter__49349(s__49350){
return (new cljs.core.LazySeq(null,(function (){
var s__49350__$1 = s__49350;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49350__$1);
if(temp__5753__auto__){
var s__49350__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49350__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49350__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49352 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49351 = (0);
while(true){
if((i__49351 < size__4651__auto__)){
var input = cljs.core._nth(c__4650__auto__,i__49351);
cljs.core.chunk_append(b__49352,app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))));

var G__49553 = (i__49351 + (1));
i__49351 = G__49553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49352),app$core$make_pairwise_significant_correlations_html_$_iter__49349(cljs.core.chunk_rest(s__49350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49352),null);
}
} else {
var input = cljs.core.first(s__49350__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))),app$core$make_pairwise_significant_correlations_html_$_iter__49349(cljs.core.rest(s__49350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_inputs);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$make_pairwise_significant_correlations_html_$_iter__49361(s__49362){
return (new cljs.core.LazySeq(null,(function (){
var s__49362__$1 = s__49362;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49362__$1);
if(temp__5753__auto__){
var s__49362__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49362__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49362__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49364 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49363 = (0);
while(true){
if((i__49363 < size__4651__auto__)){
var biomarker = cljs.core._nth(c__4650__auto__,i__49363);
cljs.core.chunk_append(b__49364,app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"input","input",556931961))));

var G__49554 = (i__49363 + (1));
i__49363 = G__49554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49364),app$core$make_pairwise_significant_correlations_html_$_iter__49361(cljs.core.chunk_rest(s__49362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49364),null);
}
} else {
var biomarker = cljs.core.first(s__49362__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"input","input",556931961))),app$core$make_pairwise_significant_correlations_html_$_iter__49361(cljs.core.rest(s__49362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_biomarkers);
})())], null);
});

app.core.make_pairwise_significant_correlations_html__ghostwheel_test = (function app$core$make_pairwise_significant_correlations_html__ghostwheel_test(){
return cljs.test.test_var(app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$var);
});
app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30093__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__49376(s__49377){
return (new cljs.core.LazySeq(null,(function (){
var s__49377__$1 = s__49377;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49377__$1);
if(temp__5753__auto__){
var s__49377__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49377__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49377__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49379 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49378 = (0);
while(true){
if((i__49378 < size__4651__auto__)){
var spec__30091__auto__ = cljs.core._nth(c__4650__auto__,i__49378);
cljs.core.chunk_append(b__49379,(function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49378,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49395 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49395,sym__28441__auto__);
} else {
return G__49395;
}
});})(i__49378,and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.make_pairwise_significant_correlations_html;
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
var vec__49384 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49384,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49413 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49413.cljs$core$IFn$_invoke$arity$3 ? fexpr__49413.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49413.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49415 = s__28449__auto__;
var G__49416 = spec__28451__auto__;
var G__49417 = tcret__28459__auto__;
var G__49418 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49414 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49414.cljs$core$IFn$_invoke$arity$4 ? fexpr__49414.cljs$core$IFn$_invoke$arity$4(G__49415,G__49416,G__49417,G__49418) : fexpr__49414.call(null,G__49415,G__49416,G__49417,G__49418));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49404_49555 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__49378,opts49404_49555,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49384,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49405){
var vec__49406 = p__49405;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49406,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49406,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49409 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49409,sym__28430__auto__);
} else {
return G__49409;
}
});})(i__49378,opts49404_49555,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49384,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49378,opts49404_49555,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49384,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49411 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49410 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49404_49555);
return (fexpr__49410.cljs$core$IFn$_invoke$arity$1 ? fexpr__49410.cljs$core$IFn$_invoke$arity$1(G__49411) : fexpr__49410.call(null,G__49411));
});})(i__49378,opts49404_49555,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49384,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,c__4650__auto__,size__4651__auto__,b__49379,s__49377__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__49556 = (i__49378 + (1));
i__49378 = G__49556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49379),app$core$iter__49376(cljs.core.chunk_rest(s__49377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49379),null);
}
} else {
var spec__30091__auto__ = cljs.core.first(s__49377__$2);
return cljs.core.cons((function (){var opts__28470__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28470__auto__);

var s__28449__auto__ = null;
var v__28450__auto__ = null;
var spec__28451__auto__ = (function (){var or__4253__auto__ = spec__30091__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28452__auto__ = (function (){var and__4251__auto__ = v__28450__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__){
return (function (ret__28439__auto__,f__28440__auto__){
var sym__28441__auto__ = (f__28440__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28440__auto__.cljs$core$IFn$_invoke$arity$0() : f__28440__auto__.call(null));
var G__49427 = ret__28439__auto__;
if(cljs.core.truth_(sym__28441__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49427,sym__28441__auto__);
} else {
return G__49427;
}
});})(and__4251__auto__,s__28449__auto__,v__28450__auto__,spec__28451__auto__,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28453__auto__ = (function (){var or__4253__auto__ = app.core.make_pairwise_significant_correlations_html;
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
var vec__49421 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28454__auto__,old_tc_opts_key__28456__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28458__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28455__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28454__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28458__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28454__auto__], null);
}
})();
var tc_ns__28457__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49421,(0),null);
var opts__28454__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49421,(1),null);
try{if((f__28453__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28451__auto__))){
var tcret__28459__auto__ = (function (){var fexpr__49452 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__49452.cljs$core$IFn$_invoke$arity$3 ? fexpr__49452.cljs$core$IFn$_invoke$arity$3(f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1) : fexpr__49452.call(null,f__28453__auto__,spec__28451__auto__,opts__28454__auto____$1));
})();
var G__49454 = s__28449__auto__;
var G__49455 = spec__28451__auto__;
var G__49456 = tcret__28459__auto__;
var G__49457 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28457__auto__,"ret");
var fexpr__49453 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__49453.cljs$core$IFn$_invoke$arity$4 ? fexpr__49453.cljs$core$IFn$_invoke$arity$4(G__49454,G__49455,G__49456,G__49457) : fexpr__49453.call(null,G__49454,G__49455,G__49456,G__49457));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28449__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28451__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28452__auto__)){
var opts49434_49557 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts49434_49557,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49421,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__){
return (function (ret__28427__auto__,p__49439){
var vec__49440 = p__49439;
var ___28428__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49440,(0),null);
var f__28429__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49440,(1),null);
var sym__28430__auto__ = (f__28429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28429__auto__.cljs$core$IFn$_invoke$arity$0() : f__28429__auto__.call(null));
var G__49443 = ret__28427__auto__;
if(cljs.core.truth_(sym__28430__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__49443,sym__28430__auto__);
} else {
return G__49443;
}
});})(opts49434_49557,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49421,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts49434_49557,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49421,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__){
return (function (p1__28426__28431__auto__){
var G__49448 = cljs.core.first(p1__28426__28431__auto__);
var fexpr__49447 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts49434_49557);
return (fexpr__49447.cljs$core$IFn$_invoke$arity$1 ? fexpr__49447.cljs$core$IFn$_invoke$arity$1(G__49448) : fexpr__49447.call(null,G__49448));
});})(opts49434_49557,s__28449__auto__,v__28450__auto__,spec__28451__auto__,re_inst_QMARK___28452__auto__,f__28453__auto__,opts__28454__auto__,old_tc_ns__28455__auto__,old_tc_opts_key__28456__auto__,vec__49421,tc_ns__28457__auto__,opts__28454__auto____$1,opts__28470__auto__,spec__30091__auto__,s__49377__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__49376(cljs.core.rest(s__49377__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null)], null));
})();
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30092__30094__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30092__30094__auto__));
}),spec_checks__30093__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e49460){var t__9191__auto__ = e49460;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30092__30094__auto__","p1__30092__30094__auto__",571276615,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30093__auto__","spec-checks__30093__auto__",31947050,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30093__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.make_pairwise_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html__ghostwheel-test","app.core/make-pairwise-significant-correlations-html__ghostwheel-test",-1816150006,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),134,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html__ghostwheel-test","make-pairwise-significant-correlations-html__ghostwheel-test",1432201182,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_pairwise_significant_correlations_html__ghostwheel_test)?app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__49469_SHARP_){
return ((cljs.core.vector_QMARK_(p1__49469_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__49469_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :results-slope 50}
 *   
 *   Taken from https://stackoverflow.com/a/17902228
 */
app.core.flatten_map_concat_keys = (function app$core$flatten_map_concat_keys(var_args){
var G__49471 = arguments.length;
switch (G__49471) {
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__49472){
var vec__49473 = p__49472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(1),null);
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
 *   {:input :i :b-slope 5.0}
 *   
 */
app.core.get_biomarker_regression_result_keys = (function app$core$get_biomarker_regression_result_keys(m){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$core$get_biomarker_regression_result_keys_$_iter__49476(s__49477){
return (new cljs.core.LazySeq(null,(function (){
var s__49477__$1 = s__49477;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__49477__$1);
if(temp__5753__auto__){
var s__49477__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49477__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__49477__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__49479 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__49478 = (0);
while(true){
if((i__49478 < size__4651__auto__)){
var vec__49480 = cljs.core._nth(c__4650__auto__,i__49478);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49480,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49480,(1),null);
cljs.core.chunk_append(b__49479,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null)),v], null));

var G__49559 = (i__49478 + (1));
i__49478 = G__49559;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49479),app$core$get_biomarker_regression_result_keys_$_iter__49476(cljs.core.chunk_rest(s__49477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49479),null);
}
} else {
var vec__49484 = cljs.core.first(s__49477__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49484,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null)),v], null),app$core$get_biomarker_regression_result_keys_$_iter__49476(cljs.core.rest(s__49477__$2)));
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
/**
 * Collection of maps with keys like:
 *   {:input 
 * :biomarker1-slope
 * :biomarker1-rsq
 * :biomarker1-datapoints}
 *   
 */
app.core.make_per_input_correlation_results = (function app$core$make_per_input_correlation_results(results){
var rows_by_input = cljs.core.group_by(new cljs.core.Keyword(null,"input","input",556931961),results);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.get_per_input_row,cljs.core.vals(rows_by_input));
});
app.core.home_page = (function app$core$home_page(){
var map__49490 = cljs.core.deref(app.csv.csv_data);
var map__49490__$1 = cljs.core.__destructure_map(map__49490);
var state = map__49490__$1;
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49490__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
var results = app.core.compute_correlations(input_data,biomarker_data);
var results_without_plots = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49489_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__49489_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
}),results);
var flat_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.flatten_map,results_without_plots);
var flat_results_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flat_results);
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n      biomarkers in an attempt to identify statistically significant\n      correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n      behind this app that data is sent to for analysis; everything is done\n      client side in the browser. Therefore, the page can be saved and run\n      offline as needed."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_html(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.reagent_table(flat_results_atom)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),(((results == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null):app.core.make_pairwise_significant_correlations_html(results))], null);
});
if(cljs.core.truth_(ghostwheel.core._STAR_global_check_allowed_QMARK__STAR_)){
var _STAR_global_trace_allowed_QMARK__STAR__orig_val__49491_49560 = ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_;
var _STAR_report_output_STAR__orig_val__49492_49561 = ghostwheel.logging._STAR_report_output_STAR_;
var _STAR_global_trace_allowed_QMARK__STAR__temp_val__49493_49562 = false;
var _STAR_report_output_STAR__temp_val__49494_49563 = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__temp_val__49493_49562);

(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__temp_val__49494_49563);

try{var report_orig_val__49495_49564 = cljs.test.report;
var report_temp_val__49496_49565 = ghostwheel.reporting.report;
(cljs.test.report = report_temp_val__49496_49565);

try{cljs.test.run_block((function (){var env49497 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary49498 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env49497);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__9224__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9224__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),28,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),42,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),72,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),82,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),96,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.make_pairwise_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html__ghostwheel-test","app.core/make-pairwise-significant-correlations-html__ghostwheel-test",-1816150006,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),134,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html__ghostwheel-test","make-pairwise-significant-correlations-html__ghostwheel-test",1432201182,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_pairwise_significant_correlations_html__ghostwheel_test)?app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9224__auto__ == null)){
return cljs.test.clear_env_BANG_();
} else {
return null;
}
})], null)], 0));
})());
}),(function (){
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return summary49498.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary49498.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env49497);

cljs.test.do_report(cljs.core.deref(summary49498));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary49498),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_();
})], null));
})());
}finally {(cljs.test.report = report_orig_val__49495_49564);
}


}finally {(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__orig_val__49492_49561);

(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__orig_val__49491_49560);
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
