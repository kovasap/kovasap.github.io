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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45175(s__45176){
return (new cljs.core.LazySeq(null,(function (){
var s__45176__$1 = s__45176;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45176__$1);
if(temp__5753__auto__){
var s__45176__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45176__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45176__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45178 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45177 = (0);
while(true){
if((i__45177 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45177);
cljs.core.chunk_append(b__45178,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45177,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45184 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45184,sym__28576__auto__);
} else {
return G__45184;
}
});})(i__45177,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.merge_rows_using_dates;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45179 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45179,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45199 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45199.cljs$core$IFn$_invoke$arity$3 ? fexpr__45199.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45199.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45206 = s__28591__auto__;
var G__45207 = spec__28593__auto__;
var G__45208 = tcret__28601__auto__;
var G__45209 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45205 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45205.cljs$core$IFn$_invoke$arity$4 ? fexpr__45205.cljs$core$IFn$_invoke$arity$4(G__45206,G__45207,G__45208,G__45209) : fexpr__45205.call(null,G__45206,G__45207,G__45208,G__45209));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45187_46143 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45177,opts45187_46143,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45179,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45188){
var vec__45189 = p__45188;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45189,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45196 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45196,sym__28559__auto__);
} else {
return G__45196;
}
});})(i__45177,opts45187_46143,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45179,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45177,opts45187_46143,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45179,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45198 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45197 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45187_46143);
return (fexpr__45197.cljs$core$IFn$_invoke$arity$1 ? fexpr__45197.cljs$core$IFn$_invoke$arity$1(G__45198) : fexpr__45197.call(null,G__45198));
});})(i__45177,opts45187_46143,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45179,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45178,s__45176__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46145 = (i__45177 + (1));
i__45177 = G__46145;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45178),app$core$iter__45175(cljs.core.chunk_rest(s__45176__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45178),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45176__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45219 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45219,sym__28576__auto__);
} else {
return G__45219;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.merge_rows_using_dates;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45213 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45213,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45230 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45230.cljs$core$IFn$_invoke$arity$3 ? fexpr__45230.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45230.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45236 = s__28591__auto__;
var G__45237 = spec__28593__auto__;
var G__45238 = tcret__28601__auto__;
var G__45239 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45235 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45235.cljs$core$IFn$_invoke$arity$4 ? fexpr__45235.cljs$core$IFn$_invoke$arity$4(G__45236,G__45237,G__45238,G__45239) : fexpr__45235.call(null,G__45236,G__45237,G__45238,G__45239));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45222_46153 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45222_46153,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45213,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45223){
var vec__45224 = p__45223;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45224,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45224,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45227 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45227,sym__28559__auto__);
} else {
return G__45227;
}
});})(opts45222_46153,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45213,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45222_46153,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45213,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45229 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45228 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45222_46153);
return (fexpr__45228.cljs$core$IFn$_invoke$arity$1 ? fexpr__45228.cljs$core$IFn$_invoke$arity$1(G__45229) : fexpr__45228.call(null,G__45229));
});})(opts45222_46153,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45213,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45176__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45175(cljs.core.rest(s__45176__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45258){var t__9191__auto__ = e45258;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"merge-rows-using-dates","merge-rows-using-dates",554591301,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Gets all variables (csv columns) from parsed csv maps besides the date.
 */
app.core.get_vars = (function app$core$get_vars(data){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45259_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__45259_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462));
}),cljs.core.keys(cljs.core.first(data)));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","add-timestamps","app.core/add-timestamps",-2043976272,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.add_timestamps = (function app$core$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45260_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45260_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.utils.map_to_timestamp(app.utils.parse_date_range(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__45260_SHARP_))));
}),data);
});

app.core.add_timestamps__ghostwheel_test = (function app$core$add_timestamps__ghostwheel_test(){
return cljs.test.test_var(app.core.add_timestamps__ghostwheel_test.cljs$lang$var);
});
app.core.add_timestamps__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45277(s__45278){
return (new cljs.core.LazySeq(null,(function (){
var s__45278__$1 = s__45278;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45278__$1);
if(temp__5753__auto__){
var s__45278__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45278__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45278__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45280 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45279 = (0);
while(true){
if((i__45279 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45279);
cljs.core.chunk_append(b__45280,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45279,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45288 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45288,sym__28576__auto__);
} else {
return G__45288;
}
});})(i__45279,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.add_timestamps;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45283 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45283,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45303 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45303.cljs$core$IFn$_invoke$arity$3 ? fexpr__45303.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45303.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45305 = s__28591__auto__;
var G__45306 = spec__28593__auto__;
var G__45307 = tcret__28601__auto__;
var G__45308 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45304 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45304.cljs$core$IFn$_invoke$arity$4 ? fexpr__45304.cljs$core$IFn$_invoke$arity$4(G__45305,G__45306,G__45307,G__45308) : fexpr__45304.call(null,G__45305,G__45306,G__45307,G__45308));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45291_46156 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45279,opts45291_46156,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45283,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45292){
var vec__45293 = p__45292;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45293,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45296 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45296,sym__28559__auto__);
} else {
return G__45296;
}
});})(i__45279,opts45291_46156,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45283,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45279,opts45291_46156,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45283,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45298 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45297 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45291_46156);
return (fexpr__45297.cljs$core$IFn$_invoke$arity$1 ? fexpr__45297.cljs$core$IFn$_invoke$arity$1(G__45298) : fexpr__45297.call(null,G__45298));
});})(i__45279,opts45291_46156,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45283,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45280,s__45278__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46157 = (i__45279 + (1));
i__45279 = G__46157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45280),app$core$iter__45277(cljs.core.chunk_rest(s__45278__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45280),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45278__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45320 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45320,sym__28576__auto__);
} else {
return G__45320;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.add_timestamps;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45314 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45314,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45342 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45342.cljs$core$IFn$_invoke$arity$3 ? fexpr__45342.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45342.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45345 = s__28591__auto__;
var G__45347 = spec__28593__auto__;
var G__45349 = tcret__28601__auto__;
var G__45351 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45343 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45343.cljs$core$IFn$_invoke$arity$4 ? fexpr__45343.cljs$core$IFn$_invoke$arity$4(G__45345,G__45347,G__45349,G__45351) : fexpr__45343.call(null,G__45345,G__45347,G__45349,G__45351));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45327_46159 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45327_46159,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45314,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45331){
var vec__45333 = p__45331;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45333,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45333,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45336 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45336,sym__28559__auto__);
} else {
return G__45336;
}
});})(opts45327_46159,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45314,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45327_46159,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45314,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45340 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45339 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45327_46159);
return (fexpr__45339.cljs$core$IFn$_invoke$arity$1 ? fexpr__45339.cljs$core$IFn$_invoke$arity$1(G__45340) : fexpr__45339.call(null,G__45340));
});})(opts45327_46159,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45314,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45278__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45277(cljs.core.rest(s__45278__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45359){var t__9191__auto__ = e45359;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"add-timestamps","add-timestamps",1127532804,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.add_timestamps__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.add_timestamps__ghostwheel_test;},new cljs.core.Symbol("app.core","add-timestamps__ghostwheel-test","app.core/add-timestamps__ghostwheel-test",1015592430,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-timestamps__ghostwheel-test","add-timestamps__ghostwheel-test",-5350750,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.add_timestamps__ghostwheel_test)?app.core.add_timestamps__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","floatify-data","app.core/floatify-data",-1652332335,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.floatify_data = (function app$core$floatify_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45368_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45379){
var vec__45381 = p__45379;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45381,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,parseFloat(v)], null);
}),p1__45368_SHARP_));
}),data);
});

app.core.floatify_data__ghostwheel_test = (function app$core$floatify_data__ghostwheel_test(){
return cljs.test.test_var(app.core.floatify_data__ghostwheel_test.cljs$lang$var);
});
app.core.floatify_data__ghostwheel_test.cljs$lang$test = (function (){
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45385(s__45386){
return (new cljs.core.LazySeq(null,(function (){
var s__45386__$1 = s__45386;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45386__$1);
if(temp__5753__auto__){
var s__45386__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45386__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45386__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45388 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45387 = (0);
while(true){
if((i__45387 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45387);
cljs.core.chunk_append(b__45388,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45387,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45394 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45394,sym__28576__auto__);
} else {
return G__45394;
}
});})(i__45387,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.floatify_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45389 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45389,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45413 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45413.cljs$core$IFn$_invoke$arity$3 ? fexpr__45413.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45413.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45415 = s__28591__auto__;
var G__45416 = spec__28593__auto__;
var G__45417 = tcret__28601__auto__;
var G__45418 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45414 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45414.cljs$core$IFn$_invoke$arity$4 ? fexpr__45414.cljs$core$IFn$_invoke$arity$4(G__45415,G__45416,G__45417,G__45418) : fexpr__45414.call(null,G__45415,G__45416,G__45417,G__45418));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45397_46162 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45387,opts45397_46162,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45389,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45399){
var vec__45403 = p__45399;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45403,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45403,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45406 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45406,sym__28559__auto__);
} else {
return G__45406;
}
});})(i__45387,opts45397_46162,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45389,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45387,opts45397_46162,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45389,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45408 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45407 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45397_46162);
return (fexpr__45407.cljs$core$IFn$_invoke$arity$1 ? fexpr__45407.cljs$core$IFn$_invoke$arity$1(G__45408) : fexpr__45407.call(null,G__45408));
});})(i__45387,opts45397_46162,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45389,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45388,s__45386__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46163 = (i__45387 + (1));
i__45387 = G__46163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45388),app$core$iter__45385(cljs.core.chunk_rest(s__45386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45388),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45386__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45430 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45430,sym__28576__auto__);
} else {
return G__45430;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.floatify_data;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45424 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45424,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45424,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45452 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45452.cljs$core$IFn$_invoke$arity$3 ? fexpr__45452.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45452.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45454 = s__28591__auto__;
var G__45456 = spec__28593__auto__;
var G__45457 = tcret__28601__auto__;
var G__45458 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45453 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45453.cljs$core$IFn$_invoke$arity$4 ? fexpr__45453.cljs$core$IFn$_invoke$arity$4(G__45454,G__45456,G__45457,G__45458) : fexpr__45453.call(null,G__45454,G__45456,G__45457,G__45458));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45436_46164 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45436_46164,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45424,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45441){
var vec__45442 = p__45441;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45442,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45442,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45446 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45446,sym__28559__auto__);
} else {
return G__45446;
}
});})(opts45436_46164,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45424,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45436_46164,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45424,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45450 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45449 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45436_46164);
return (fexpr__45449.cljs$core$IFn$_invoke$arity$1 ? fexpr__45449.cljs$core$IFn$_invoke$arity$1(G__45450) : fexpr__45449.call(null,G__45450));
});})(opts45436_46164,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45424,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45386__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45385(cljs.core.rest(s__45386__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45469){var t__9191__auto__ = e45469;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"floatify-data","floatify-data",1587671821,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.floatify_data__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.floatify_data__ghostwheel_test;},new cljs.core.Symbol("app.core","floatify-data__ghostwheel-test","app.core/floatify-data__ghostwheel-test",-272694748,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floatify-data__ghostwheel-test","floatify-data__ghostwheel-test",547200744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.floatify_data__ghostwheel_test)?app.core.floatify_data__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
app.core.floatify_data(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20"], null)], null));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","compute-correlations","app.core/compute-correlations",1462200350,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.Keyword("app.specs","dated-rows","app.specs/dated-rows",158947585)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),null,null,null));

/**
 * @type {function(*, *): *}
 */
app.core.compute_correlations = (function app$core$compute_correlations(input_data,biomarker_data){
var merged_data = app.core.floatify_data(app.core.add_timestamps(app.core.merge_rows_using_dates(input_data,biomarker_data)));
var iter__4652__auto__ = (function app$core$compute_correlations_$_iter__45487(s__45488){
return (new cljs.core.LazySeq(null,(function (){
var s__45488__$1 = s__45488;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45488__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var input = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__45488__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function app$core$compute_correlations_$_iter__45487_$_iter__45489(s__45490){
return (new cljs.core.LazySeq(null,((function (s__45488__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data){
return (function (){
var s__45490__$1 = s__45490;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45490__$1);
if(temp__5753__auto____$1){
var s__45490__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45490__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45490__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45492 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45491 = (0);
while(true){
if((i__45491 < size__4651__auto__)){
var biomarker = cljs.core._nth(c__4650__auto__,i__45491);
cljs.core.chunk_append(b__45492,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null));

var G__46168 = (i__45491 + (1));
i__45491 = G__46168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45492),app$core$compute_correlations_$_iter__45487_$_iter__45489(cljs.core.chunk_rest(s__45490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45492),null);
}
} else {
var biomarker = cljs.core.first(s__45490__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.calc_correlation(input,biomarker,merged_data)], null),app$core$compute_correlations_$_iter__45487_$_iter__45489(cljs.core.rest(s__45490__$2)));
}
} else {
return null;
}
break;
}
});})(s__45488__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
,null,null));
});})(s__45488__$1,input,xs__6308__auto__,temp__5753__auto__,merged_data))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(app.core.get_vars(biomarker_data)));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,app$core$compute_correlations_$_iter__45487(cljs.core.rest(s__45488__$1)));
} else {
var G__46169 = cljs.core.rest(s__45488__$1);
s__45488__$1 = G__46169;
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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45495(s__45496){
return (new cljs.core.LazySeq(null,(function (){
var s__45496__$1 = s__45496;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45496__$1);
if(temp__5753__auto__){
var s__45496__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45496__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45496__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45498 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45497 = (0);
while(true){
if((i__45497 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45497);
cljs.core.chunk_append(b__45498,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45497,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45504 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45504,sym__28576__auto__);
} else {
return G__45504;
}
});})(i__45497,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.compute_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45499 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45499,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45499,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45525 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45525.cljs$core$IFn$_invoke$arity$3 ? fexpr__45525.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45525.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45527 = s__28591__auto__;
var G__45528 = spec__28593__auto__;
var G__45529 = tcret__28601__auto__;
var G__45530 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45526 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45526.cljs$core$IFn$_invoke$arity$4 ? fexpr__45526.cljs$core$IFn$_invoke$arity$4(G__45527,G__45528,G__45529,G__45530) : fexpr__45526.call(null,G__45527,G__45528,G__45529,G__45530));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45513_46170 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45497,opts45513_46170,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45499,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45514){
var vec__45515 = p__45514;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45515,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45518 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45518,sym__28559__auto__);
} else {
return G__45518;
}
});})(i__45497,opts45513_46170,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45499,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45497,opts45513_46170,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45499,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45520 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45519 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45513_46170);
return (fexpr__45519.cljs$core$IFn$_invoke$arity$1 ? fexpr__45519.cljs$core$IFn$_invoke$arity$1(G__45520) : fexpr__45519.call(null,G__45520));
});})(i__45497,opts45513_46170,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45499,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45498,s__45496__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46171 = (i__45497 + (1));
i__45497 = G__46171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45498),app$core$iter__45495(cljs.core.chunk_rest(s__45496__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45498),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45496__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45545 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45545,sym__28576__auto__);
} else {
return G__45545;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.compute_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45537 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45537,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45569 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45569.cljs$core$IFn$_invoke$arity$3 ? fexpr__45569.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45569.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45571 = s__28591__auto__;
var G__45572 = spec__28593__auto__;
var G__45573 = tcret__28601__auto__;
var G__45574 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45570 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45570.cljs$core$IFn$_invoke$arity$4 ? fexpr__45570.cljs$core$IFn$_invoke$arity$4(G__45571,G__45572,G__45573,G__45574) : fexpr__45570.call(null,G__45571,G__45572,G__45573,G__45574));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45555_46173 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45555_46173,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45537,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45556){
var vec__45558 = p__45556;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45558,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45558,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45561 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45561,sym__28559__auto__);
} else {
return G__45561;
}
});})(opts45555_46173,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45537,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45555_46173,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45537,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45568 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45567 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45555_46173);
return (fexpr__45567.cljs$core$IFn$_invoke$arity$1 ? fexpr__45567.cljs$core$IFn$_invoke$arity$1(G__45568) : fexpr__45567.call(null,G__45568));
});})(opts45555_46173,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45537,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45496__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45495(cljs.core.rest(s__45496__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45584){var t__9191__auto__ = e45584;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"compute-correlations","compute-correlations",-1811559254,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.compute_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Filter row maps from the input that show statistically insignificant
 *   correlations
 */
app.core.filter_insignificant = (function app$core$filter_insignificant(rows){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__45592_SHARP_){
return (new cljs.core.Keyword(null,"correlation-p-value","correlation-p-value",147752757).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__45592_SHARP_)) < 0.05);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45599_SHARP_){
if((new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__45599_SHARP_)) < (0))){
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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45605(s__45606){
return (new cljs.core.LazySeq(null,(function (){
var s__45606__$1 = s__45606;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45606__$1);
if(temp__5753__auto__){
var s__45606__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45606__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45606__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45608 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45607 = (0);
while(true){
if((i__45607 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45607);
cljs.core.chunk_append(b__45608,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45607,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45614 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45614,sym__28576__auto__);
} else {
return G__45614;
}
});})(i__45607,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.calc_counted_score;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45609 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45629 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45629.cljs$core$IFn$_invoke$arity$3 ? fexpr__45629.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45629.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45636 = s__28591__auto__;
var G__45637 = spec__28593__auto__;
var G__45638 = tcret__28601__auto__;
var G__45639 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45635 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45635.cljs$core$IFn$_invoke$arity$4 ? fexpr__45635.cljs$core$IFn$_invoke$arity$4(G__45636,G__45637,G__45638,G__45639) : fexpr__45635.call(null,G__45636,G__45637,G__45638,G__45639));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45617_46176 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45607,opts45617_46176,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45609,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45618){
var vec__45619 = p__45618;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45619,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45619,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45626 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45626,sym__28559__auto__);
} else {
return G__45626;
}
});})(i__45607,opts45617_46176,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45609,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45607,opts45617_46176,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45609,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45628 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45627 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45617_46176);
return (fexpr__45627.cljs$core$IFn$_invoke$arity$1 ? fexpr__45627.cljs$core$IFn$_invoke$arity$1(G__45628) : fexpr__45627.call(null,G__45628));
});})(i__45607,opts45617_46176,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45609,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45608,s__45606__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46179 = (i__45607 + (1));
i__45607 = G__46179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45608),app$core$iter__45605(cljs.core.chunk_rest(s__45606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45608),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45606__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45649 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45649,sym__28576__auto__);
} else {
return G__45649;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.calc_counted_score;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45641 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45641,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45673 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45673.cljs$core$IFn$_invoke$arity$3 ? fexpr__45673.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45673.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45675 = s__28591__auto__;
var G__45676 = spec__28593__auto__;
var G__45677 = tcret__28601__auto__;
var G__45678 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45674 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45674.cljs$core$IFn$_invoke$arity$4 ? fexpr__45674.cljs$core$IFn$_invoke$arity$4(G__45675,G__45676,G__45677,G__45678) : fexpr__45674.call(null,G__45675,G__45676,G__45677,G__45678));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45659_46180 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45659_46180,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45641,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45660){
var vec__45662 = p__45660;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45662,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45662,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45665 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45665,sym__28559__auto__);
} else {
return G__45665;
}
});})(opts45659_46180,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45641,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45659_46180,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45641,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45672 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45671 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45659_46180);
return (fexpr__45671.cljs$core$IFn$_invoke$arity$1 ? fexpr__45671.cljs$core$IFn$_invoke$arity$1(G__45672) : fexpr__45671.call(null,G__45672));
});})(opts45659_46180,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45641,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45606__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45605(cljs.core.rest(s__45606__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45684){var t__9191__auto__ = e45684;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"calc-counted-score","calc-counted-score",1920949326,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.calc_counted_score__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),84,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","get-significant-correlations","app.core/get-significant-correlations",-1512914656,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__45705){
var map__45706 = p__45705;
var map__45706__$1 = cljs.core.__destructure_map(map__45706);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45706__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45706__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45706__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45706__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null));

/**
 * @type {function(*, !cljs.core.Keyword, !cljs.core.Keyword, !cljs.core.Keyword): *}
 */
app.core.get_significant_correlations = (function app$core$get_significant_correlations(data,one_var,one_var_value,many_var){
var one_var_significant_correlations = (function (){var G__45707 = cljs.core.group_by(one_var,app.core.filter_insignificant(data));
return (one_var_value.cljs$core$IFn$_invoke$arity$1 ? one_var_value.cljs$core$IFn$_invoke$arity$1(G__45707) : one_var_value.call(null,G__45707));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"one-var","one-var",65273568),one_var_value,new cljs.core.Keyword(null,"score","score",-1963588780),app.core.calc_counted_score(one_var_significant_correlations),new cljs.core.Keyword(null,"average","average",-492356168),0.0,new cljs.core.Keyword(null,"correlations","correlations",517036229),(function (){var iter__4652__auto__ = (function app$core$get_significant_correlations_$_iter__45708(s__45709){
return (new cljs.core.LazySeq(null,(function (){
var s__45709__$1 = s__45709;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45709__$1);
if(temp__5753__auto__){
var s__45709__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45709__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45709__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45711 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45710 = (0);
while(true){
if((i__45710 < size__4651__auto__)){
var correlation = cljs.core._nth(c__4650__auto__,i__45710);
cljs.core.chunk_append(b__45711,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null));

var G__46184 = (i__45710 + (1));
i__45710 = G__46184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45711),app$core$get_significant_correlations_$_iter__45708(cljs.core.chunk_rest(s__45709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45711),null);
}
} else {
var correlation = cljs.core.first(s__45709__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var.cljs$core$IFn$_invoke$arity$1 ? many_var.cljs$core$IFn$_invoke$arity$1(correlation) : many_var.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null),app$core$get_significant_correlations_$_iter__45708(cljs.core.rest(s__45709__$2)));
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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45712(s__45713){
return (new cljs.core.LazySeq(null,(function (){
var s__45713__$1 = s__45713;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45713__$1);
if(temp__5753__auto__){
var s__45713__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45713__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45713__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45715 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45714 = (0);
while(true){
if((i__45714 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45714);
cljs.core.chunk_append(b__45715,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45714,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45721 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45721,sym__28576__auto__);
} else {
return G__45721;
}
});})(i__45714,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.get_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45716 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45716,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45716,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45732 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45732.cljs$core$IFn$_invoke$arity$3 ? fexpr__45732.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45732.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45734 = s__28591__auto__;
var G__45735 = spec__28593__auto__;
var G__45736 = tcret__28601__auto__;
var G__45737 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45733 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45733.cljs$core$IFn$_invoke$arity$4 ? fexpr__45733.cljs$core$IFn$_invoke$arity$4(G__45734,G__45735,G__45736,G__45737) : fexpr__45733.call(null,G__45734,G__45735,G__45736,G__45737));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45724_46185 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45714,opts45724_46185,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45716,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45725){
var vec__45726 = p__45725;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45726,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45726,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45729 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45729,sym__28559__auto__);
} else {
return G__45729;
}
});})(i__45714,opts45724_46185,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45716,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45714,opts45724_46185,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45716,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45731 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45730 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45724_46185);
return (fexpr__45730.cljs$core$IFn$_invoke$arity$1 ? fexpr__45730.cljs$core$IFn$_invoke$arity$1(G__45731) : fexpr__45730.call(null,G__45731));
});})(i__45714,opts45724_46185,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45716,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45715,s__45713__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46186 = (i__45714 + (1));
i__45714 = G__46186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45715),app$core$iter__45712(cljs.core.chunk_rest(s__45713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45715),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45713__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45743 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45743,sym__28576__auto__);
} else {
return G__45743;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.get_significant_correlations;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45738 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45756 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45756.cljs$core$IFn$_invoke$arity$3 ? fexpr__45756.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45756.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45759 = s__28591__auto__;
var G__45760 = spec__28593__auto__;
var G__45761 = tcret__28601__auto__;
var G__45762 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45758 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45758.cljs$core$IFn$_invoke$arity$4 ? fexpr__45758.cljs$core$IFn$_invoke$arity$4(G__45759,G__45760,G__45761,G__45762) : fexpr__45758.call(null,G__45759,G__45760,G__45761,G__45762));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45746_46189 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45746_46189,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45738,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45747){
var vec__45748 = p__45747;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45748,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45748,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45752 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45752,sym__28559__auto__);
} else {
return G__45752;
}
});})(opts45746_46189,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45738,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45746_46189,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45738,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45755 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45754 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45746_46189);
return (fexpr__45754.cljs$core$IFn$_invoke$arity$1 ? fexpr__45754.cljs$core$IFn$_invoke$arity$1(G__45755) : fexpr__45754.call(null,G__45755));
});})(opts45746_46189,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45738,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45713__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45712(cljs.core.rest(s__45713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Keyword(null,"many-var","many-var",1186068059)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_,cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)], null)),(function (p__45810){
var map__45811 = p__45810;
var map__45811__$1 = cljs.core.__destructure_map(map__45811);
var many_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45811__$1,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
var one_var_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45811__$1,new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45811__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var one_var = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45811__$1,new cljs.core.Keyword(null,"one-var","one-var",65273568));
return cljs.core.every_QMARK_((function (d){
return cljs.core.contains_QMARK_(d,one_var);
}),data);
})], null),null),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928),new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"one-var-value","one-var-value",-1983768674),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null),new cljs.core.Symbol(null,"one-var-value","one-var-value",-343237147,null),new cljs.core.Symbol(null,"many-var","many-var",-1468367710,null)], null)], null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","every?","cljs.core/every?",1416822717,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d","d",-682293345,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"d","d",-682293345,null),new cljs.core.Symbol(null,"one-var","one-var",1705805095,null))),new cljs.core.Symbol(null,"data","data",1407862150,null)))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null),new cljs.core.Keyword("app.specs","one-to-many-correlation","app.specs/one-to-many-correlation",-892957838),null,null,null)], null));
})();
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45817){var t__9191__auto__ = e45817;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"get-significant-correlations","get-significant-correlations",-525312292,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.get_significant_correlations__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),94,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null),", Counted score of ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(data),", Average value ",new cljs.core.Keyword(null,"average","average",-492356168).cljs$core$IFn$_invoke$arity$1(data)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Correlate"], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__45820(s__45821){
return (new cljs.core.LazySeq(null,(function (){
var s__45821__$1 = s__45821;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45821__$1);
if(temp__5753__auto__){
var s__45821__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45821__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45821__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45823 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45822 = (0);
while(true){
if((i__45822 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__45822);
cljs.core.chunk_append(b__45823,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null));

var G__46191 = (i__45822 + (1));
i__45822 = G__46191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45823),app$core$make_significant_correlations_html_$_iter__45820(cljs.core.chunk_rest(s__45821__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45823),null);
}
} else {
var k = cljs.core.first(s__45821__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null),app$core$make_significant_correlations_html_$_iter__45820(cljs.core.rest(s__45821__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys((function (p1__45818_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45818_SHARP_,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
})(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data))))));
})()], null),(function (){var iter__4652__auto__ = (function app$core$make_significant_correlations_html_$_iter__45824(s__45825){
return (new cljs.core.LazySeq(null,(function (){
var s__45825__$1 = s__45825;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45825__$1);
if(temp__5753__auto__){
var s__45825__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45825__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45825__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45827 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45826 = (0);
while(true){
if((i__45826 < size__4651__auto__)){
var correlations = cljs.core._nth(c__4650__auto__,i__45826);
cljs.core.chunk_append(b__45827,(function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (i__45826,mvar,correlations,c__4650__auto__,size__4651__auto__,b__45827,s__45825__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__45824_$_iter__45828(s__45829){
return (new cljs.core.LazySeq(null,((function (i__45826,mvar,correlations,c__4650__auto__,size__4651__auto__,b__45827,s__45825__$2,temp__5753__auto__){
return (function (){
var s__45829__$1 = s__45829;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45829__$1);
if(temp__5753__auto____$1){
var s__45829__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45829__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__45829__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__45831 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__45830 = (0);
while(true){
if((i__45830 < size__4651__auto____$1)){
var vec__45832 = cljs.core._nth(c__4650__auto____$1,i__45830);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45832,(1),null);
cljs.core.chunk_append(b__45831,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__46193 = (i__45830 + (1));
i__45830 = G__46193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45831),app$core$make_significant_correlations_html_$_iter__45824_$_iter__45828(cljs.core.chunk_rest(s__45829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45831),null);
}
} else {
var vec__45835 = cljs.core.first(s__45829__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45835,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__45824_$_iter__45828(cljs.core.rest(s__45829__$2)));
}
} else {
return null;
}
break;
}
});})(i__45826,mvar,correlations,c__4650__auto__,size__4651__auto__,b__45827,s__45825__$2,temp__5753__auto__))
,null,null));
});})(i__45826,mvar,correlations,c__4650__auto__,size__4651__auto__,b__45827,s__45825__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})());

var G__46194 = (i__45826 + (1));
i__45826 = G__46194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45827),app$core$make_significant_correlations_html_$_iter__45824(cljs.core.chunk_rest(s__45825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45827),null);
}
} else {
var correlations = cljs.core.first(s__45825__$2);
return cljs.core.cons((function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (mvar,correlations,s__45825__$2,temp__5753__auto__){
return (function app$core$make_significant_correlations_html_$_iter__45824_$_iter__45840(s__45841){
return (new cljs.core.LazySeq(null,(function (){
var s__45841__$1 = s__45841;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__45841__$1);
if(temp__5753__auto____$1){
var s__45841__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45841__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45841__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45843 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45842 = (0);
while(true){
if((i__45842 < size__4651__auto__)){
var vec__45845 = cljs.core._nth(c__4650__auto__,i__45842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45845,(1),null);
cljs.core.chunk_append(b__45843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__46195 = (i__45842 + (1));
i__45842 = G__46195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45843),app$core$make_significant_correlations_html_$_iter__45824_$_iter__45840(cljs.core.chunk_rest(s__45841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45843),null);
}
} else {
var vec__45848 = cljs.core.first(s__45841__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45848,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$core$make_significant_correlations_html_$_iter__45824_$_iter__45840(cljs.core.rest(s__45841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(mvar,correlations,s__45825__$2,temp__5753__auto__))
;
return iter__4652__auto__(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060)));
})()], null);
})(),app$core$make_significant_correlations_html_$_iter__45824(cljs.core.rest(s__45825__$2)));
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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45853(s__45854){
return (new cljs.core.LazySeq(null,(function (){
var s__45854__$1 = s__45854;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45854__$1);
if(temp__5753__auto__){
var s__45854__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45854__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45854__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45856 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45855 = (0);
while(true){
if((i__45855 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45855);
cljs.core.chunk_append(b__45856,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45855,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45862 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45862,sym__28576__auto__);
} else {
return G__45862;
}
});})(i__45855,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.make_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45857 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45857,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45857,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45877 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45877.cljs$core$IFn$_invoke$arity$3 ? fexpr__45877.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45877.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45879 = s__28591__auto__;
var G__45880 = spec__28593__auto__;
var G__45881 = tcret__28601__auto__;
var G__45882 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45878 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45878.cljs$core$IFn$_invoke$arity$4 ? fexpr__45878.cljs$core$IFn$_invoke$arity$4(G__45879,G__45880,G__45881,G__45882) : fexpr__45878.call(null,G__45879,G__45880,G__45881,G__45882));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45865_46198 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45855,opts45865_46198,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45857,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45866){
var vec__45867 = p__45866;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45867,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45870 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45870,sym__28559__auto__);
} else {
return G__45870;
}
});})(i__45855,opts45865_46198,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45857,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45855,opts45865_46198,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45857,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45876 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45875 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45865_46198);
return (fexpr__45875.cljs$core$IFn$_invoke$arity$1 ? fexpr__45875.cljs$core$IFn$_invoke$arity$1(G__45876) : fexpr__45875.call(null,G__45876));
});})(i__45855,opts45865_46198,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45857,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45856,s__45854__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46199 = (i__45855 + (1));
i__45855 = G__46199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45856),app$core$iter__45853(cljs.core.chunk_rest(s__45854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45856),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45854__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45896 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45896,sym__28576__auto__);
} else {
return G__45896;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.make_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45887 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45887,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45887,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__45917 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__45917.cljs$core$IFn$_invoke$arity$3 ? fexpr__45917.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__45917.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__45922 = s__28591__auto__;
var G__45923 = spec__28593__auto__;
var G__45924 = tcret__28601__auto__;
var G__45925 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__45921 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__45921.cljs$core$IFn$_invoke$arity$4 ? fexpr__45921.cljs$core$IFn$_invoke$arity$4(G__45922,G__45923,G__45924,G__45925) : fexpr__45921.call(null,G__45922,G__45923,G__45924,G__45925));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts45905_46201 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts45905_46201,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45887,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__45906){
var vec__45907 = p__45906;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45907,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__45910 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45910,sym__28559__auto__);
} else {
return G__45910;
}
});})(opts45905_46201,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45887,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts45905_46201,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45887,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__45912 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__45911 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts45905_46201);
return (fexpr__45911.cljs$core$IFn$_invoke$arity$1 ? fexpr__45911.cljs$core$IFn$_invoke$arity$1(G__45912) : fexpr__45911.call(null,G__45912));
});})(opts45905_46201,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45887,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45854__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45853(cljs.core.rest(s__45854__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e45933){var t__9191__auto__ = e45933;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-significant-correlations-html","make-significant-correlations-html",-362886012,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),108,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html","app.core/make-pairwise-significant-correlations-html",1590638061,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.specs","pairwise-correlations","app.specs/pairwise-correlations",242931928)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null));

/**
 * @type {function(*): *}
 */
app.core.make_pairwise_significant_correlations_html = (function app$core$make_pairwise_significant_correlations_html(correlations){
var unique_inputs = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45940_SHARP_){
return new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(p1__45940_SHARP_);
}),correlations));
var unique_biomarkers = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45941_SHARP_){
return new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(p1__45941_SHARP_);
}),correlations));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Input Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$make_pairwise_significant_correlations_html_$_iter__45965(s__45966){
return (new cljs.core.LazySeq(null,(function (){
var s__45966__$1 = s__45966;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45966__$1);
if(temp__5753__auto__){
var s__45966__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45966__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45966__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45968 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45967 = (0);
while(true){
if((i__45967 < size__4651__auto__)){
var input = cljs.core._nth(c__4650__auto__,i__45967);
cljs.core.chunk_append(b__45968,app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))));

var G__46203 = (i__45967 + (1));
i__45967 = G__46203;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45968),app$core$make_pairwise_significant_correlations_html_$_iter__45965(cljs.core.chunk_rest(s__45966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45968),null);
}
} else {
var input = cljs.core.first(s__45966__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816))),app$core$make_pairwise_significant_correlations_html_$_iter__45965(cljs.core.rest(s__45966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_inputs);
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Biomarker Correlations"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__4652__auto__ = (function app$core$make_pairwise_significant_correlations_html_$_iter__45977(s__45978){
return (new cljs.core.LazySeq(null,(function (){
var s__45978__$1 = s__45978;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45978__$1);
if(temp__5753__auto__){
var s__45978__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45978__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45978__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45980 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45979 = (0);
while(true){
if((i__45979 < size__4651__auto__)){
var biomarker = cljs.core._nth(c__4650__auto__,i__45979);
cljs.core.chunk_append(b__45980,app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"input","input",556931961))));

var G__46204 = (i__45979 + (1));
i__45979 = G__46204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45980),app$core$make_pairwise_significant_correlations_html_$_iter__45977(cljs.core.chunk_rest(s__45978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45980),null);
}
} else {
var biomarker = cljs.core.first(s__45978__$2);
return cljs.core.cons(app.core.make_significant_correlations_html(app.core.get_significant_correlations(correlations,new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816),biomarker,new cljs.core.Keyword(null,"input","input",556931961))),app$core$make_pairwise_significant_correlations_html_$_iter__45977(cljs.core.rest(s__45978__$2)));
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
var spec_checks__30662__auto__ = (function (){var iter__4652__auto__ = (function app$core$iter__45989(s__45990){
return (new cljs.core.LazySeq(null,(function (){
var s__45990__$1 = s__45990;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__45990__$1);
if(temp__5753__auto__){
var s__45990__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45990__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__45990__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__45992 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__45991 = (0);
while(true){
if((i__45991 < size__4651__auto__)){
var spec__30660__auto__ = cljs.core._nth(c__4650__auto__,i__45991);
cljs.core.chunk_append(b__45992,(function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45991,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__45999 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45999,sym__28576__auto__);
} else {
return G__45999;
}
});})(i__45991,and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.make_pairwise_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__45993 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45993,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45993,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__46013 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__46013.cljs$core$IFn$_invoke$arity$3 ? fexpr__46013.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__46013.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__46015 = s__28591__auto__;
var G__46016 = spec__28593__auto__;
var G__46017 = tcret__28601__auto__;
var G__46018 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__46014 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__46014.cljs$core$IFn$_invoke$arity$4 ? fexpr__46014.cljs$core$IFn$_invoke$arity$4(G__46015,G__46016,G__46017,G__46018) : fexpr__46014.call(null,G__46015,G__46016,G__46017,G__46018));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts46005_46208 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__45991,opts46005_46208,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45993,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__46006){
var vec__46007 = p__46006;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46007,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46007,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__46010 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__46010,sym__28559__auto__);
} else {
return G__46010;
}
});})(i__45991,opts46005_46208,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45993,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__45991,opts46005_46208,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45993,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__46012 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__46011 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts46005_46208);
return (fexpr__46011.cljs$core$IFn$_invoke$arity$1 ? fexpr__46011.cljs$core$IFn$_invoke$arity$1(G__46012) : fexpr__46011.call(null,G__46012));
});})(i__45991,opts46005_46208,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__45993,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,c__4650__auto__,size__4651__auto__,b__45992,s__45990__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})());

var G__46209 = (i__45991 + (1));
i__45991 = G__46209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45992),app$core$iter__45989(cljs.core.chunk_rest(s__45990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45992),null);
}
} else {
var spec__30660__auto__ = cljs.core.first(s__45990__$2);
return cljs.core.cons((function (){var opts__28617__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.test.check","opts","clojure.test.check/opts",-1773872533),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-tests","num-tests",2050041354),(10)], null)], null);
cljs.spec.test.alpha.validate_check_opts(opts__28617__auto__);

var s__28591__auto__ = null;
var v__28592__auto__ = null;
var spec__28593__auto__ = (function (){var or__4253__auto__ = spec__30660__auto__;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return null;
}
})();
var re_inst_QMARK___28594__auto__ = (function (){var and__4251__auto__ = v__28592__auto__;
if(cljs.core.truth_(and__4251__auto__)){
return ((cljs.core.seq(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__){
return (function (ret__28574__auto__,f__28575__auto__){
var sym__28576__auto__ = (f__28575__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28575__auto__.cljs$core$IFn$_invoke$arity$0() : f__28575__auto__.call(null));
var G__46024 = ret__28574__auto__;
if(cljs.core.truth_(sym__28576__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__46024,sym__28576__auto__);
} else {
return G__46024;
}
});})(and__4251__auto__,s__28591__auto__,v__28592__auto__,spec__28593__auto__,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))) && (true));
} else {
return and__4251__auto__;
}
})();
var f__28595__auto__ = (function (){var or__4253__auto__ = app.core.make_pairwise_significant_correlations_html;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.truth_(v__28592__auto__)){
return cljs.core.deref(v__28592__auto__);
} else {
return null;
}
}
})();
var opts__28596__auto__ = opts__28617__auto__;
var old_tc_ns__28597__auto__ = "clojure.test.check";
var old_tc_opts_key__28598__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(old_tc_ns__28597__auto__,"opts");
var vec__46019 = (function (){var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(opts__28596__auto__,old_tc_opts_key__28598__auto__);
if(cljs.core.truth_(temp__5751__auto__)){
var old_tc_opts__28600__auto__ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_tc_ns__28597__auto__,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__28596__auto__,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),old_tc_opts__28600__auto__)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clojure.spec.test.check",opts__28596__auto__], null);
}
})();
var tc_ns__28599__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46019,(0),null);
var opts__28596__auto____$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46019,(1),null);
try{if((f__28595__auto__ == null)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No fn to spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-fn","no-fn",-353517111)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(spec__28593__auto__))){
var tcret__28601__auto__ = (function (){var fexpr__46039 = new cljs.core.Var(function(){return cljs.spec.test.alpha.quick_check;},new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"quick-check","quick-check",1555674831,null),"cljs/spec/test/alpha.cljs",(19),(1),(228),(228),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"gen","gen",1783106829,null),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908)], null)], null)),null,(cljs.core.truth_(cljs.spec.test.alpha.quick_check)?cljs.spec.test.alpha.quick_check.cljs$lang$test:null)]));
return (fexpr__46039.cljs$core$IFn$_invoke$arity$3 ? fexpr__46039.cljs$core$IFn$_invoke$arity$3(f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1) : fexpr__46039.call(null,f__28595__auto__,spec__28593__auto__,opts__28596__auto____$1));
})();
var G__46045 = s__28591__auto__;
var G__46046 = spec__28593__auto__;
var G__46047 = tcret__28601__auto__;
var G__46048 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(tc_ns__28599__auto__,"ret");
var fexpr__46044 = new cljs.core.Var(function(){return cljs.spec.test.alpha.make_check_result;},new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.test.alpha","cljs.spec.test.alpha",-1221684901,null),new cljs.core.Symbol(null,"make-check-result","make-check-result",1237455097,null),"cljs/spec/test/alpha.cljs",(25),(1),(237),(237),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check-sym","check-sym",-1945701567,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"test-check-ret","test-check-ret",-1478657888,null),new cljs.core.Symbol(null,"tc-ret-key","tc-ret-key",216076388,null)], null)),"Builds spec result map.",(cljs.core.truth_(cljs.spec.test.alpha.make_check_result)?cljs.spec.test.alpha.make_check_result.cljs$lang$test:null)]));
return (fexpr__46044.cljs$core$IFn$_invoke$arity$4 ? fexpr__46044.cljs$core$IFn$_invoke$arity$4(G__46045,G__46046,G__46047,G__46048) : fexpr__46044.call(null,G__46045,G__46046,G__46047,G__46048));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"failure","failure",720415879),cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No :args spec",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786)], null)),new cljs.core.Keyword(null,"sym","sym",-1444860305),s__28591__auto__,new cljs.core.Keyword(null,"spec","spec",347520401),spec__28593__auto__], null);

}
}
}finally {if(cljs.core.truth_(re_inst_QMARK___28594__auto__)){
var opts46031_46212 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts46031_46212,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__46019,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__){
return (function (ret__28556__auto__,p__46032){
var vec__46033 = p__46032;
var ___28557__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46033,(0),null);
var f__28558__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46033,(1),null);
var sym__28559__auto__ = (f__28558__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28558__auto__.cljs$core$IFn$_invoke$arity$0() : f__28558__auto__.call(null));
var G__46036 = ret__28556__auto__;
if(cljs.core.truth_(sym__28559__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__46036,sym__28559__auto__);
} else {
return G__46036;
}
});})(opts46031_46212,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__46019,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts46031_46212,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__46019,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__){
return (function (p1__28555__28560__auto__){
var G__46038 = cljs.core.first(p1__28555__28560__auto__);
var fexpr__46037 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts46031_46212);
return (fexpr__46037.cljs$core$IFn$_invoke$arity$1 ? fexpr__46037.cljs$core$IFn$_invoke$arity$1(G__46038) : fexpr__46037.call(null,G__46038));
});})(opts46031_46212,s__28591__auto__,v__28592__auto__,spec__28593__auto__,re_inst_QMARK___28594__auto__,f__28595__auto__,opts__28596__auto__,old_tc_ns__28597__auto__,old_tc_opts_key__28598__auto__,vec__46019,tc_ns__28599__auto__,opts__28596__auto____$1,opts__28617__auto__,spec__30660__auto__,s__45990__$2,temp__5753__auto__))
,cljs.core.zipmap(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY))));
} else {
}
}})(),app$core$iter__45989(cljs.core.rest(s__45990__$2)));
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
try{var value__9158__auto__ = ((cljs.core.every_QMARK_((function (p1__30661__30663__auto__){
return new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960).cljs$core$IFn$_invoke$arity$1(p1__30661__30663__auto__));
}),spec_checks__30662__auto__)) && (((true) && (true))));
if(value__9158__auto__){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,value__9158__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}

return value__9158__auto__;
}catch (e46053){var t__9191__auto__ = e46053;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"p1__30661__30663__auto__","p1__30661__30663__auto__",-1777326236,null),new cljs.core.Keyword("clojure.test.check","ret","clojure.test.check/ret",1393978960),new cljs.core.Keyword(null,"pass?","pass?",-424635753))),new cljs.core.Symbol(null,"spec-checks__30662__auto__","spec-checks__30662__auto__",-1595677082,null)),true,true),null,t__9191__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("ghostwheel.reporting","fn-name","ghostwheel.reporting/fn-name",466254528),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html","make-pairwise-significant-correlations-html",-1712484191,null),new cljs.core.Keyword("ghostwheel.reporting","fspec","ghostwheel.reporting/fspec",-1190332275),true,new cljs.core.Keyword("ghostwheel.reporting","spec-checks","ghostwheel.reporting/spec-checks",-803336688),spec_checks__30662__auto__,new cljs.core.Keyword("ghostwheel.reporting","found-fx","ghostwheel.reporting/found-fx",-263226799),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("ghostwheel.reporting","failure","ghostwheel.reporting/failure",-713780845),new cljs.core.Keyword("ghostwheel.reporting","spec-failure","ghostwheel.reporting/spec-failure",511958367),new cljs.core.Keyword("ghostwheel.reporting","marked-unsafe","ghostwheel.reporting/marked-unsafe",-275678850),false,new cljs.core.Keyword("ghostwheel.reporting","check-coverage","ghostwheel.reporting/check-coverage",-1277601858),false], null)]));
}});

(app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$var = new cljs.core.Var(function(){return app.core.make_pairwise_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html__ghostwheel-test","app.core/make-pairwise-significant-correlations-html__ghostwheel-test",-1816150006,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),146,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html__ghostwheel-test","make-pairwise-significant-correlations-html__ghostwheel-test",1432201182,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_pairwise_significant_correlations_html__ghostwheel_test)?app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)));
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :slope 50}
 */
app.core.flatten_map = (function app$core$flatten_map(data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__46059_SHARP_){
return ((cljs.core.vector_QMARK_(p1__46059_SHARP_)) && ((!(cljs.core.map_QMARK_(cljs.core.last(p1__46059_SHARP_))))));
}),cljs.core.tree_seq(cljs.core.associative_QMARK_,cljs.core.seq,data)));
});
/**
 * Converts map like {:input :hi :results {:slope 50}} to
 *   {:input :hi :results-slope 50}
 *   
 *   Taken from https://stackoverflow.com/a/17902228
 */
app.core.flatten_map_concat_keys = (function app$core$flatten_map_concat_keys(var_args){
var G__46064 = arguments.length;
switch (G__46064) {
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__46073){
var vec__46074 = p__46073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46074,(1),null);
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(m)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$core$get_biomarker_regression_result_keys_$_iter__46083(s__46084){
return (new cljs.core.LazySeq(null,(function (){
var s__46084__$1 = s__46084;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46084__$1);
if(temp__5753__auto__){
var s__46084__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46084__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__46084__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__46086 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__46085 = (0);
while(true){
if((i__46085 < size__4651__auto__)){
var vec__46092 = cljs.core._nth(c__4650__auto__,i__46085);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46092,(1),null);
cljs.core.chunk_append(b__46086,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null)),v], null));

var G__46215 = (i__46085 + (1));
i__46085 = G__46215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46086),app$core$get_biomarker_regression_result_keys_$_iter__46083(cljs.core.chunk_rest(s__46084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46086),null);
}
} else {
var vec__46096 = cljs.core.first(s__46084__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(new cljs.core.Keyword(null,"biomarker","biomarker",-1934144816).cljs$core$IFn$_invoke$arity$1(m)),cljs.core.name(k)], null)),v], null),app$core$get_biomarker_regression_result_keys_$_iter__46083(cljs.core.rest(s__46084__$2)));
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
var map__46110 = cljs.core.deref(app.csv.csv_data);
var map__46110__$1 = cljs.core.__destructure_map(map__46110);
var state = map__46110__$1;
var input_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46110__$1,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211));
var biomarker_file_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46110__$1,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478));
var input_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46110__$1,new cljs.core.Keyword(null,"input-data","input-data",2052925403));
var biomarker_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46110__$1,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135));
var results = app.core.compute_correlations(input_data,biomarker_data);
var results_without_plots = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46107_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__46107_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"vega-scatterplot","vega-scatterplot",-654239060));
}),results);
var flat_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.core.flatten_map,results_without_plots);
var flat_results_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(flat_results);
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app.content","div.app.content",2048228731),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Biomarker Correlator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This application calculates cross correlations between inputs and\n      biomarkers in an attempt to identify statistically significant\n      correlations. "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Despite presenting like a website, there is no server\n      behind this app that data is sent to for analysis; everything is done\n      client side in the browser. Therefore, the page can be saved and run\n      offline as needed."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" input data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,input_file_name,app.csv.input_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.topbar.hidden-print","div.topbar.hidden-print",-603265413),"\"Upload\" biomarker data",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.csv.upload_btn,biomarker_file_name,app.csv.biomarker_upload_reqs], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Pairwise Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_html(flat_results)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.reagent_table(flat_results_atom)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Per-Input Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hideable,app.ui.maps_to_html(app.core.make_per_input_correlation_results(results_without_plots))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Significant Correlations"], null),app.core.make_pairwise_significant_correlations_html(results)], null);
});
if(cljs.core.truth_(ghostwheel.core._STAR_global_check_allowed_QMARK__STAR_)){
var _STAR_global_trace_allowed_QMARK__STAR__orig_val__46117_46218 = ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_;
var _STAR_report_output_STAR__orig_val__46118_46219 = ghostwheel.logging._STAR_report_output_STAR_;
var _STAR_global_trace_allowed_QMARK__STAR__temp_val__46119_46220 = false;
var _STAR_report_output_STAR__temp_val__46120_46221 = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__temp_val__46119_46220);

(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__temp_val__46120_46221);

try{var report_orig_val__46121_46222 = cljs.test.report;
var report_temp_val__46122_46223 = ghostwheel.reporting.report;
(cljs.test.report = report_temp_val__46122_46223);

try{cljs.test.run_block((function (){var env46123 = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
var summary46124 = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env46123);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ghostwheel.core","check","ghostwheel.core/check",-379901241),true,new cljs.core.Keyword("ghostwheel.core","num-tests","ghostwheel.core/num-tests",-646548501),(10)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block((function (){var env__9224__auto__ = cljs.test.get_current_env();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__9224__auto__ == null)){
cljs.test.set_env_BANG_(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
} else {
}


return null;
})], null),cljs.test.test_vars_block(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core.merge_rows_using_dates__ghostwheel_test;},new cljs.core.Symbol("app.core","merge-rows-using-dates__ghostwheel-test","app.core/merge-rows-using-dates__ghostwheel-test",-1843885456,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"merge-rows-using-dates__ghostwheel-test","merge-rows-using-dates__ghostwheel-test",1375348484,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.merge_rows_using_dates__ghostwheel_test)?app.core.merge_rows_using_dates__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.add_timestamps__ghostwheel_test;},new cljs.core.Symbol("app.core","add-timestamps__ghostwheel-test","app.core/add-timestamps__ghostwheel-test",1015592430,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),37,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"add-timestamps__ghostwheel-test","add-timestamps__ghostwheel-test",-5350750,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.add_timestamps__ghostwheel_test)?app.core.add_timestamps__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.floatify_data__ghostwheel_test;},new cljs.core.Symbol("app.core","floatify-data__ghostwheel-test","app.core/floatify-data__ghostwheel-test",-272694748,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),45,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"floatify-data__ghostwheel-test","floatify-data__ghostwheel-test",547200744,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.floatify_data__ghostwheel_test)?app.core.floatify_data__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.compute_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","compute-correlations__ghostwheel-test","app.core/compute-correlations__ghostwheel-test",510813054,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),52,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"compute-correlations__ghostwheel-test","compute-correlations__ghostwheel-test",-577763830,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.compute_correlations__ghostwheel_test)?app.core.compute_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.calc_counted_score__ghostwheel_test;},new cljs.core.Symbol("app.core","calc-counted-score__ghostwheel-test","app.core/calc-counted-score__ghostwheel-test",1890893103,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),84,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"calc-counted-score__ghostwheel-test","calc-counted-score__ghostwheel-test",-1243994413,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.calc_counted_score__ghostwheel_test)?app.core.calc_counted_score__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.get_significant_correlations__ghostwheel_test;},new cljs.core.Symbol("app.core","get-significant-correlations__ghostwheel-test","app.core/get-significant-correlations__ghostwheel-test",-231274045,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),94,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"get-significant-correlations__ghostwheel-test","get-significant-correlations__ghostwheel-test",827421207,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.get_significant_correlations__ghostwheel_test)?app.core.get_significant_correlations__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.make_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-significant-correlations-html__ghostwheel-test","app.core/make-significant-correlations-html__ghostwheel-test",188655763,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),108,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-significant-correlations-html__ghostwheel-test","make-significant-correlations-html__ghostwheel-test",1239371751,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_significant_correlations_html__ghostwheel_test)?app.core.make_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),new cljs.core.Var(function(){return app.core.make_pairwise_significant_correlations_html__ghostwheel_test;},new cljs.core.Symbol("app.core","make-pairwise-significant-correlations-html__ghostwheel-test","app.core/make-pairwise-significant-correlations-html__ghostwheel-test",-1816150006,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"app/core.cljs",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),146,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"make-pairwise-significant-correlations-html__ghostwheel-test","make-pairwise-significant-correlations-html__ghostwheel-test",1432201182,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(app.core.make_pairwise_significant_correlations_html__ghostwheel_test)?app.core.make_pairwise_significant_correlations_html__ghostwheel_test.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
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
return summary46124.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core._PLUS_)(summary46124.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_())));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(env46123);

cljs.test.do_report(cljs.core.deref(summary46124));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(summary46124),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_();
})], null));
})());
}finally {(cljs.test.report = report_orig_val__46121_46222);
}


}finally {(ghostwheel.logging._STAR_report_output_STAR_ = _STAR_report_output_STAR__orig_val__46118_46219);

(ghostwheel.core._STAR_global_trace_allowed_QMARK__STAR_ = _STAR_global_trace_allowed_QMARK__STAR__orig_val__46117_46218);
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
