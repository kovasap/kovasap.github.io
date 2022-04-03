goog.provide('malli.dev.pretty');
malli.dev.pretty._printer = (function malli$dev$pretty$_printer(var_args){
var G__85073 = arguments.length;
switch (G__85073) {
case 0:
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$1 = (function (options){
return malli.dev.virhe._printer.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Schema Error",new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"colors","colors",1157174732),malli.dev.virhe._dark_colors,new cljs.core.Keyword(null,"unknown","unknown",-935977881),(function (x){
if(malli.core.schema_QMARK_(x)){
return malli.core.form.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}),new cljs.core.Keyword(null,"throwing-fn-top-level-ns-names","throwing-fn-top-level-ns-names",1959105244),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["malli","clojure"], null)], null),options], 0)));
}));

(malli.dev.pretty._printer.cljs$lang$maxFixedArity = 1);

malli.dev.pretty._errors = (function malli$dev$pretty$_errors(explanation,printer){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"break","break",126570225),(function (){var iter__4652__auto__ = (function malli$dev$pretty$_errors_$_iter__85074(s__85075){
return (new cljs.core.LazySeq(null,(function (){
var s__85075__$1 = s__85075;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__85075__$1);
if(temp__5753__auto__){
var s__85075__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__85075__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__85075__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__85077 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__85076 = (0);
while(true){
if((i__85076 < size__4651__auto__)){
var error = cljs.core._nth(c__4650__auto__,i__85076);
cljs.core.chunk_append(b__85077,malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer));

var G__85114 = (i__85076 + (1));
i__85076 = G__85114;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__85077),malli$dev$pretty$_errors_$_iter__85074(cljs.core.chunk_rest(s__85075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__85077),null);
}
} else {
var error = cljs.core.first(s__85075__$2);
return cljs.core.cons(malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer),malli$dev$pretty$_errors_$_iter__85074(cljs.core.rest(s__85075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1(explanation)));
})());
});
malli.dev.pretty._explain = (function malli$dev$pretty$_explain(schema,value,printer){
return malli.dev.pretty._errors(malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,value),printer);
});
malli.dev.pretty._block = (function malli$dev$pretty$_block(text,body,printer){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.virhe._text(text,printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),body], null)], null);
});
malli.dev.pretty._link = (function malli$dev$pretty$_link(link,printer){
return malli.dev.virhe._color(new cljs.core.Keyword(null,"link","link",-1769163468),link,printer);
});
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","explain","malli.core/explain",36932858),(function (_,___$1,explanation,printer){
var map__85080 = explanation;
var map__85080__$1 = cljs.core.__destructure_map(map__85080);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85080__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85080__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Value:",malli.dev.virhe._visit(value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.virhe._visit(malli.error.humanize.cljs$core$IFn$_invoke$arity$1(explanation),printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-input","malli.core/invalid-input",2010057279),(function (_,___$1,p__85081,printer){
var map__85082 = p__85081;
var map__85082__$1 = cljs.core.__destructure_map(map__85082);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85082__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85082__$1,new cljs.core.Keyword(null,"input","input",556931961));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85082__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function arguments:",malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Input Schema:",malli.dev.virhe._visit(input,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(input,args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-output","malli.core/invalid-output",-147363519),(function (_,___$1,p__85083,printer){
var map__85084 = p__85083;
var map__85084__$1 = cljs.core.__destructure_map(map__85084);
var args = map__85084__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85084__$1,new cljs.core.Keyword(null,"value","value",305978217));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85084__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85084__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function return value:",malli.dev.virhe._visit(value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Output Schema:",malli.dev.virhe._visit(output,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(output,value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-arity","malli.core/invalid-arity",577014581),(function (_,___$1,p__85092,printer){
var map__85093 = p__85092;
var map__85093__$1 = cljs.core.__destructure_map(map__85093);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85093__$1,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block(["Invalid function arity (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),"):"].join(''),malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Var:",malli.dev.virhe._visit(fn_name,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.pretty.reporter = (function malli$dev$pretty$reporter(var_args){
var G__85096 = arguments.length;
switch (G__85096) {
case 0:
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0());
}));

(malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1 = (function (printer){
return (function (type,data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__85098_85123 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__85099_85124 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__85100_85125 = true;
var _STAR_print_fn_STAR__temp_val__85101_85126 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__85100_85125);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__85101_85126);

try{malli.dev.virhe._print_doc(malli.dev.virhe._exception_doc(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)),printer),printer);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__85099_85124);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__85098_85123);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], 0));
});
}));

(malli.dev.pretty.reporter.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.thrower = (function malli$dev$pretty$thrower(var_args){
var G__85103 = arguments.length;
switch (G__85103) {
case 0:
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0());
}));

(malli.dev.pretty.thrower.cljs$core$IFn$_invoke$arity$1 = (function (printer){
var report = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1(printer);
return (function (type,data){
var message = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__85104_85130 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__85105_85131 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__85106_85132 = true;
var _STAR_print_fn_STAR__temp_val__85107_85133 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__85106_85132);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__85107_85133);

try{report(type,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__85105_85131);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__85104_85130);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
}));

(malli.dev.pretty.thrower.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.prettifier = (function malli$dev$pretty$prettifier(type,title,f,options){
var printer = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4253__auto__ = new cljs.core.Keyword("malli.dev.pretty","printer","malli.dev.pretty/printer",-1293932392).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"width","width",-384071477),(60));
}
})(),new cljs.core.Keyword(null,"title","title",636505583),title);
var actor = new cljs.core.Keyword("malli.dev.pretty","actor","malli.dev.pretty/actor",-1785917433).cljs$core$IFn$_invoke$arity$2(options,malli.dev.pretty.reporter);
return (function() { 
var G__85136__delegate = function (args){
var temp__5753__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(cljs.core.truth_(temp__5753__auto__)){
var res = temp__5753__auto__;
var fexpr__85108_85137 = (actor.cljs$core$IFn$_invoke$arity$1 ? actor.cljs$core$IFn$_invoke$arity$1(printer) : actor.call(null,printer));
(fexpr__85108_85137.cljs$core$IFn$_invoke$arity$2 ? fexpr__85108_85137.cljs$core$IFn$_invoke$arity$2(type,res) : fexpr__85108_85137.call(null,type,res));

return res;
} else {
return null;
}
};
var G__85136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__85139__i = 0, G__85139__a = new Array(arguments.length -  0);
while (G__85139__i < G__85139__a.length) {G__85139__a[G__85139__i] = arguments[G__85139__i + 0]; ++G__85139__i;}
  args = new cljs.core.IndexedSeq(G__85139__a,0,null);
} 
return G__85136__delegate.call(this,args);};
G__85136.cljs$lang$maxFixedArity = 0;
G__85136.cljs$lang$applyTo = (function (arglist__85140){
var args = cljs.core.seq(arglist__85140);
return G__85136__delegate(args);
});
G__85136.cljs$core$IFn$_invoke$arity$variadic = G__85136__delegate;
return G__85136;
})()
;
});
malli.dev.pretty.explain = (function malli$dev$pretty$explain(var_args){
var G__85110 = arguments.length;
switch (G__85110) {
case 2:
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,value){
return malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,null);
}));

(malli.dev.pretty.explain.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema,value,options){
var explain = (function (){
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,value,options));
});
return malli.dev.pretty.prettifier(new cljs.core.Keyword("malli.core","explain","malli.core/explain",36932858),"Validation Error",explain,options)();
}));

(malli.dev.pretty.explain.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=malli.dev.pretty.js.map
