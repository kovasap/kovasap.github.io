goog.provide('app.single_var_table');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","one-var","app.single-var-table/one-var",255437168),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","score","app.single-var-table/score",-1771772252),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","average","app.single-var-table/average",-801834968),new cljs.core.Symbol("cljs.core","float?","cljs.core/float?",-941017745,null),cljs.core.float_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","aggregates","app.single-var-table/aggregates",-1624386113),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","score","app.single-var-table/score",-1771772252),new cljs.core.Keyword("app.single-var-table","average","app.single-var-table/average",-801834968)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","score","app.single-var-table/score",-1771772252),new cljs.core.Keyword("app.single-var-table","average","app.single-var-table/average",-801834968)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__59147){
return cljs.core.map_QMARK_(G__59147);
}),(function (G__59147){
return cljs.core.contains_QMARK_(G__59147,new cljs.core.Keyword(null,"score","score",-1963588780));
}),(function (G__59147){
return cljs.core.contains_QMARK_(G__59147,new cljs.core.Keyword(null,"average","average",-492356168));
})], null),(function (G__59147){
return ((cljs.core.map_QMARK_(G__59147)) && (((cljs.core.contains_QMARK_(G__59147,new cljs.core.Keyword(null,"score","score",-1963588780))) && (cljs.core.contains_QMARK_(G__59147,new cljs.core.Keyword(null,"average","average",-492356168))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","score","app.single-var-table/score",-1771772252),new cljs.core.Keyword("app.single-var-table","average","app.single-var-table/average",-801834968)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"average","average",-492356168)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"score","score",-1963588780))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"average","average",-492356168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","correlations","app.single-var-table/correlations",1382134613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null))),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("s","keys","s/keys",-1586011188,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__59149){
return cljs.core.map_QMARK_(G__59149);
}),(function (G__59149){
return cljs.core.contains_QMARK_(G__59149,new cljs.core.Keyword(null,"many-var","many-var",1186068059));
}),(function (G__59149){
return cljs.core.contains_QMARK_(G__59149,new cljs.core.Keyword(null,"regression-results","regression-results",224318376));
})], null),(function (G__59149){
return ((cljs.core.map_QMARK_(G__59149)) && (((cljs.core.contains_QMARK_(G__59149,new cljs.core.Keyword(null,"many-var","many-var",1186068059))) && (cljs.core.contains_QMARK_(G__59149,new cljs.core.Keyword(null,"regression-results","regression-results",224318376))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Keyword(null,"regression-results","regression-results",224318376)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"many-var","many-var",1186068059))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"regression-results","regression-results",224318376)))], null),null])),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__59148){
return cljs.core.coll_QMARK_(G__59148);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","many-var","app.single-var-table/many-var",1377845227),new cljs.core.Keyword("app.stats","regression-results","app.stats/regression-results",-475462570)], null)))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-var","app.single-var-table/one-var",255437168),new cljs.core.Keyword("app.single-var-table","aggregates","app.single-var-table/aggregates",-1624386113),new cljs.core.Keyword("app.single-var-table","correlations","app.single-var-table/correlations",1382134613)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-var","app.single-var-table/one-var",255437168),new cljs.core.Keyword("app.single-var-table","aggregates","app.single-var-table/aggregates",-1624386113),new cljs.core.Keyword("app.single-var-table","correlations","app.single-var-table/correlations",1382134613)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__59151){
return cljs.core.map_QMARK_(G__59151);
}),(function (G__59151){
return cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"one-var","one-var",65273568));
}),(function (G__59151){
return cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289));
}),(function (G__59151){
return cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"correlations","correlations",517036229));
})], null),(function (G__59151){
return ((cljs.core.map_QMARK_(G__59151)) && (((cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"one-var","one-var",65273568))) && (((cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289))) && (cljs.core.contains_QMARK_(G__59151,new cljs.core.Keyword(null,"correlations","correlations",517036229))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-var","app.single-var-table/one-var",255437168),new cljs.core.Keyword("app.single-var-table","aggregates","app.single-var-table/aggregates",-1624386113),new cljs.core.Keyword("app.single-var-table","correlations","app.single-var-table/correlations",1382134613)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289),new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"one-var","one-var",65273568))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"correlations","correlations",517036229)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.single-var-table","one-to-many-correlations","app.single-var-table/one-to-many-correlations",2054560857),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword_QMARK_,new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__59154){
return cljs.core.map_QMARK_(G__59154);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__9377__auto__,v__9378__auto__){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__9378__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195))], null),null));
app.single_var_table.OneToManyCorrelation = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one-var","one-var",65273568),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"average","average",-492356168),new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acm-score","acm-score",-1488232861),new cljs.core.Keyword(null,"number","number",1570378438)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regression-results","regression-results",224318376),app.stats.CorrelationResults], null)], null)], null)], null);
app.single_var_table.aggregate_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acm-score","acm-score",-1488232861),null,new cljs.core.Keyword(null,"score","score",-1963588780),null,new cljs.core.Keyword(null,"average","average",-492356168),null], null), null);
/**
 * Filter row maps from the input that show statistically insignificant
 *   correlations
 */
app.single_var_table.filter_insignificant = (function app$single_var_table$filter_insignificant(rows){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__59155_SHARP_){
return (new cljs.core.Keyword(null,"p-value","p-value",1434023819).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__59155_SHARP_)) < app.stats.p_value_cutoff);
}),rows);
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.single-var-table","calc-counted-score","app.single-var-table/calc-counted-score",-2049772802,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.single-var-table","pairwise-correlations","app.single-var-table/pairwise-correlations",1280960539)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.single-var-table","pairwise-correlations","app.single-var-table/pairwise-correlations",1280960539)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlations","correlations",517036229)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","pairwise-correlations","app.single-var-table/pairwise-correlations",1280960539)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","pairwise-correlations","app.single-var-table/pairwise-correlations",1280960539)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"correlations","correlations",517036229),new cljs.core.Keyword("app.single-var-table","pairwise-correlations","app.single-var-table/pairwise-correlations",1280960539)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),cljs.core.int_QMARK_,null,null),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,null,null));

/**
 * Sums up all postive correlations and all negatives correlations, then takes
 *   the difference.
 * @type {function(*): !number}
 */
app.single_var_table.calc_counted_score = (function app$single_var_table$calc_counted_score(correlations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59156_SHARP_){
if((new cljs.core.Keyword(null,"correlation","correlation",-975773207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__59156_SHARP_)) < (0))){
return (-1);
} else {
return (1);
}
}),correlations));
});
app.single_var_table.get_significant_correlations = (function app$single_var_table$get_significant_correlations(data,one_var_type,one_var,many_var_type,one_var_raw_data){
var one_var_significant_correlations = (function (){var G__59159 = cljs.core.group_by(one_var_type,app.single_var_table.filter_insignificant(data));
return (one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(G__59159) : one_var.call(null,G__59159));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"one-var","one-var",65273568),one_var,new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"score","score",-1963588780),app.single_var_table.calc_counted_score(one_var_significant_correlations),new cljs.core.Keyword(null,"average","average",-492356168),app.stats.round((cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,one_var_raw_data) / cljs.core.count(one_var_raw_data)))], null),new cljs.core.Keyword(null,"correlations","correlations",517036229),(function (){var iter__4652__auto__ = (function app$single_var_table$get_significant_correlations_$_iter__59160(s__59161){
return (new cljs.core.LazySeq(null,(function (){
var s__59161__$1 = s__59161;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59161__$1);
if(temp__5753__auto__){
var s__59161__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59161__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59161__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59163 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59162 = (0);
while(true){
if((i__59162 < size__4651__auto__)){
var correlation = cljs.core._nth(c__4650__auto__,i__59162);
cljs.core.chunk_append(b__59163,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var_type.cljs$core$IFn$_invoke$arity$1 ? many_var_type.cljs$core$IFn$_invoke$arity$1(correlation) : many_var_type.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null));

var G__59264 = (i__59162 + (1));
i__59162 = G__59264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59163),app$single_var_table$get_significant_correlations_$_iter__59160(cljs.core.chunk_rest(s__59161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59163),null);
}
} else {
var correlation = cljs.core.first(s__59161__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"many-var","many-var",1186068059),(many_var_type.cljs$core$IFn$_invoke$arity$1 ? many_var_type.cljs$core$IFn$_invoke$arity$1(correlation) : many_var_type.call(null,correlation)),new cljs.core.Keyword(null,"regression-results","regression-results",224318376),new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlation)], null),app$single_var_table$get_significant_correlations_$_iter__59160(cljs.core.rest(s__59161__$2)));
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
/**
 * Filters NaNs while getting the data.
 */
app.single_var_table.get_csv_values = (function app$single_var_table$get_csv_values(csv_data,column_name){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function app$single_var_table$get_csv_values_$_iter__59164(s__59165){
return (new cljs.core.LazySeq(null,(function (){
var s__59165__$1 = s__59165;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59165__$1);
if(temp__5753__auto__){
var s__59165__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59165__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59165__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59167 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59166 = (0);
while(true){
if((i__59166 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__59166);
var value = (column_name.cljs$core$IFn$_invoke$arity$1 ? column_name.cljs$core$IFn$_invoke$arity$1(row) : column_name.call(null,row));
if(cljs.core.not(isNaN(value))){
cljs.core.chunk_append(b__59167,value);

var G__59268 = (i__59166 + (1));
i__59166 = G__59268;
continue;
} else {
var G__59269 = (i__59166 + (1));
i__59166 = G__59269;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59167),app$single_var_table$get_csv_values_$_iter__59164(cljs.core.chunk_rest(s__59165__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59167),null);
}
} else {
var row = cljs.core.first(s__59165__$2);
var value = (column_name.cljs$core$IFn$_invoke$arity$1 ? column_name.cljs$core$IFn$_invoke$arity$1(row) : column_name.call(null,row));
if(cljs.core.not(isNaN(value))){
return cljs.core.cons(value,app$single_var_table$get_csv_values_$_iter__59164(cljs.core.rest(s__59165__$2)));
} else {
var G__59270 = cljs.core.rest(s__59165__$2);
s__59165__$1 = G__59270;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(csv_data);
})());
});
app.single_var_table.make_all_correlations = (function app$single_var_table$make_all_correlations(correlations,csv_data,one_var_type,many_var_type){
var unique_one_vars = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59170_SHARP_){
return (one_var_type.cljs$core$IFn$_invoke$arity$1 ? one_var_type.cljs$core$IFn$_invoke$arity$1(p1__59170_SHARP_) : one_var_type.call(null,p1__59170_SHARP_));
}),correlations));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$single_var_table$make_all_correlations_$_iter__59173(s__59174){
return (new cljs.core.LazySeq(null,(function (){
var s__59174__$1 = s__59174;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59174__$1);
if(temp__5753__auto__){
var s__59174__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59174__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59174__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59176 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59175 = (0);
while(true){
if((i__59175 < size__4651__auto__)){
var one_var = cljs.core._nth(c__4650__auto__,i__59175);
cljs.core.chunk_append(b__59176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [one_var,app.single_var_table.get_significant_correlations(correlations,one_var_type,one_var,many_var_type,app.single_var_table.get_csv_values(csv_data,one_var))], null));

var G__59272 = (i__59175 + (1));
i__59175 = G__59272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59176),app$single_var_table$make_all_correlations_$_iter__59173(cljs.core.chunk_rest(s__59174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59176),null);
}
} else {
var one_var = cljs.core.first(s__59174__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [one_var,app.single_var_table.get_significant_correlations(correlations,one_var_type,one_var,many_var_type,app.single_var_table.get_csv_values(csv_data,one_var))], null),app$single_var_table$make_all_correlations_$_iter__59173(cljs.core.rest(s__59174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(unique_one_vars);
})());
});
app.single_var_table.table_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correlation","correlation",-975773207),new cljs.core.Keyword(null,"rounded-p-value","rounded-p-value",1372746415),new cljs.core.Keyword(null,"datapoints","datapoints",-1250577876)], null);
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.single-var-table","get-one-var-timeseries-data","app.single-var-table/get-one-var-timeseries-data",-1891160745,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.biomarker-data","timeseries-data","app.biomarker-data/timeseries-data",-222962694)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.biomarker-data","timeseries-data","app.biomarker-data/timeseries-data",-222962694),new cljs.core.Keyword("app.biomarker-data","timeseries-data","app.biomarker-data/timeseries-data",-222962694),null,null),new cljs.core.Keyword("app.biomarker-data","timeseries-data","app.biomarker-data/timeseries-data",-222962694),null,null,null));

/**
 * @type {function(*): *}
 */
app.single_var_table.get_one_var_timeseries_data = (function app$single_var_table$get_one_var_timeseries_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__59178_SHARP_){
return cljs.core.select_keys(p1__59178_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data)], null));
}),new cljs.core.Keyword(null,"raw-data","raw-data",617791828).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data)))));
});
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.single-var-table","make-hiccup","app.single-var-table/make-hiccup",-1819067316,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword("app.single-var-table","one-to-many-correlation","app.single-var-table/one-to-many-correlation",342121195)),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null));

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
app.single_var_table.make_hiccup = (function app$single_var_table$make_hiccup(data){
var one_var = new cljs.core.Keyword(null,"one-var","one-var",65273568).cljs$core$IFn$_invoke$arity$1(data);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),one_var], null),one_var], null),", Counted score of ",new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289).cljs$core$IFn$_invoke$arity$1(data)),", Average value ",new cljs.core.Keyword(null,"average","average",-492356168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregates","aggregates",-1684250289).cljs$core$IFn$_invoke$arity$1(data))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(4)], null),((cljs.core.contains_QMARK_(app.biomarker_data.data,one_var))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),app.biomarker_data.make_acm_plot(app.single_var_table.get_one_var_timeseries_data(data),(one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"notes","notes",-1039600523).cljs$core$IFn$_invoke$arity$1((one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Source: ",new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1((one_var.cljs$core$IFn$_invoke$arity$1 ? one_var.cljs$core$IFn$_invoke$arity$1(app.biomarker_data.data) : one_var.call(null,app.biomarker_data.data)))], null)], null):"No data found for this metric.")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Correlate"], null),(function (){var iter__4652__auto__ = (function app$single_var_table$make_hiccup_$_iter__59196(s__59197){
return (new cljs.core.LazySeq(null,(function (){
var s__59197__$1 = s__59197;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59197__$1);
if(temp__5753__auto__){
var s__59197__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59197__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59197__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59199 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59198 = (0);
while(true){
if((i__59198 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__59198);
cljs.core.chunk_append(b__59199,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null));

var G__59284 = (i__59198 + (1));
i__59198 = G__59284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59199),app$single_var_table$make_hiccup_$_iter__59196(cljs.core.chunk_rest(s__59197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59199),null);
}
} else {
var k = cljs.core.first(s__59197__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-head"].join('')], null),k], null),app$single_var_table$make_hiccup_$_iter__59196(cljs.core.rest(s__59197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys((function (p1__59188_SHARP_){
return cljs.core.select_keys(p1__59188_SHARP_,app.single_var_table.table_keys);
})(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data))))));
})()], null),(function (){var iter__4652__auto__ = (function app$single_var_table$make_hiccup_$_iter__59200(s__59201){
return (new cljs.core.LazySeq(null,(function (){
var s__59201__$1 = s__59201;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__59201__$1);
if(temp__5753__auto__){
var s__59201__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59201__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59201__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59203 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59202 = (0);
while(true){
if((i__59202 < size__4651__auto__)){
var correlations = cljs.core._nth(c__4650__auto__,i__59202);
cljs.core.chunk_append(b__59203,(function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"scatterplot","scatterplot",2135008985).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (i__59202,mvar,correlations,c__4650__auto__,size__4651__auto__,b__59203,s__59201__$2,temp__5753__auto__,one_var){
return (function app$single_var_table$make_hiccup_$_iter__59200_$_iter__59206(s__59207){
return (new cljs.core.LazySeq(null,((function (i__59202,mvar,correlations,c__4650__auto__,size__4651__auto__,b__59203,s__59201__$2,temp__5753__auto__,one_var){
return (function (){
var s__59207__$1 = s__59207;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59207__$1);
if(temp__5753__auto____$1){
var s__59207__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59207__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__59207__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__59209 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__59208 = (0);
while(true){
if((i__59208 < size__4651__auto____$1)){
var vec__59211 = cljs.core._nth(c__4650__auto____$1,i__59208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59211,(1),null);
cljs.core.chunk_append(b__59209,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__59290 = (i__59208 + (1));
i__59208 = G__59290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59209),app$single_var_table$make_hiccup_$_iter__59200_$_iter__59206(cljs.core.chunk_rest(s__59207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59209),null);
}
} else {
var vec__59216 = cljs.core.first(s__59207__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59216,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$single_var_table$make_hiccup_$_iter__59200_$_iter__59206(cljs.core.rest(s__59207__$2)));
}
} else {
return null;
}
break;
}
});})(i__59202,mvar,correlations,c__4650__auto__,size__4651__auto__,b__59203,s__59201__$2,temp__5753__auto__,one_var))
,null,null));
});})(i__59202,mvar,correlations,c__4650__auto__,size__4651__auto__,b__59203,s__59201__$2,temp__5753__auto__,one_var))
;
return iter__4652__auto__(cljs.core.select_keys(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),app.single_var_table.table_keys));
})()], null);
})());

var G__59291 = (i__59202 + (1));
i__59202 = G__59291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59203),app$single_var_table$make_hiccup_$_iter__59200(cljs.core.chunk_rest(s__59201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59203),null);
}
} else {
var correlations = cljs.core.first(s__59201__$2);
return cljs.core.cons((function (){var mvar = cljs.core.name(new cljs.core.Keyword(null,"many-var","many-var",1186068059).cljs$core$IFn$_invoke$arity$1(correlations));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-row"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.ui.hover_to_render,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["#",mvar].join('')], null),mvar], null),new cljs.core.Keyword(null,"scatterplot","scatterplot",2135008985).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations))], null)], null),(function (){var iter__4652__auto__ = ((function (mvar,correlations,s__59201__$2,temp__5753__auto__,one_var){
return (function app$single_var_table$make_hiccup_$_iter__59200_$_iter__59219(s__59220){
return (new cljs.core.LazySeq(null,(function (){
var s__59220__$1 = s__59220;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__59220__$1);
if(temp__5753__auto____$1){
var s__59220__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59220__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__59220__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__59222 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__59221 = (0);
while(true){
if((i__59221 < size__4651__auto__)){
var vec__59227 = cljs.core._nth(c__4650__auto__,i__59221);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59227,(1),null);
cljs.core.chunk_append(b__59222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null));

var G__59299 = (i__59221 + (1));
i__59221 = G__59299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59222),app$single_var_table$make_hiccup_$_iter__59200_$_iter__59219(cljs.core.chunk_rest(s__59220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59222),null);
}
} else {
var vec__59230 = cljs.core.first(s__59220__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59230,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[mvar,"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),v], null),app$single_var_table$make_hiccup_$_iter__59200_$_iter__59219(cljs.core.rest(s__59220__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(mvar,correlations,s__59201__$2,temp__5753__auto__,one_var))
;
return iter__4652__auto__(cljs.core.select_keys(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(correlations),app.single_var_table.table_keys));
})()], null);
})(),app$single_var_table$make_hiccup_$_iter__59200(cljs.core.rest(s__59201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__59189_SHARP_){
return new cljs.core.Keyword(null,"correlation","correlation",-975773207).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"regression-results","regression-results",224318376).cljs$core$IFn$_invoke$arity$1(p1__59189_SHARP_));
}),new cljs.core.Keyword(null,"correlations","correlations",517036229).cljs$core$IFn$_invoke$arity$1(data)));
})()], null)], null)], null);
});

//# sourceMappingURL=app.single_var_table.js.map
