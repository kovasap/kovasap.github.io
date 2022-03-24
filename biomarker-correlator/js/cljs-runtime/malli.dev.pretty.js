goog.provide('malli.dev.pretty');
malli.dev.pretty._printer = (function malli$dev$pretty$_printer(var_args){
var G__50470 = arguments.length;
switch (G__50470) {
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
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"break","break",126570225),(function (){var iter__4652__auto__ = (function malli$dev$pretty$_errors_$_iter__50473(s__50474){
return (new cljs.core.LazySeq(null,(function (){
var s__50474__$1 = s__50474;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50474__$1);
if(temp__5753__auto__){
var s__50474__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50474__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50474__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50476 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50475 = (0);
while(true){
if((i__50475 < size__4651__auto__)){
var error = cljs.core._nth(c__4650__auto__,i__50475);
cljs.core.chunk_append(b__50476,malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer));

var G__50562 = (i__50475 + (1));
i__50475 = G__50562;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50476),malli$dev$pretty$_errors_$_iter__50473(cljs.core.chunk_rest(s__50474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50476),null);
}
} else {
var error = cljs.core.first(s__50474__$2);
return cljs.core.cons(malli.dev.virhe._visit(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,error),printer),malli$dev$pretty$_errors_$_iter__50473(cljs.core.rest(s__50474__$2)));
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
var map__50496 = explanation;
var map__50496__$1 = cljs.core.__destructure_map(map__50496);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50496__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Value:",malli.dev.virhe._visit(value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.virhe._visit(malli.error.humanize.cljs$core$IFn$_invoke$arity$1(explanation),printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-input","malli.core/invalid-input",2010057279),(function (_,___$1,p__50502,printer){
var map__50503 = p__50502;
var map__50503__$1 = cljs.core.__destructure_map(map__50503);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50503__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50503__$1,new cljs.core.Keyword(null,"input","input",556931961));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function arguments:",malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Input Schema:",malli.dev.virhe._visit(input,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(input,args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-output","malli.core/invalid-output",-147363519),(function (_,___$1,p__50506,printer){
var map__50507 = p__50506;
var map__50507__$1 = cljs.core.__destructure_map(map__50507);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"value","value",305978217));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50507__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block("Invalid function return value:",malli.dev.virhe._visit(value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Output Schema:",malli.dev.virhe._visit(output,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Errors:",malli.dev.pretty._explain(output,value,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.virhe._format.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","invalid-arity","malli.core/invalid-arity",577014581),(function (_,___$1,p__50513,printer){
var map__50514 = p__50513;
var map__50514__$1 = cljs.core.__destructure_map(map__50514);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50514__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50514__$1,new cljs.core.Keyword(null,"arity","arity",-1808556135));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50514__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),malli.dev.pretty._block(["Invalid function arity (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity),"):"].join(''),malli.dev.virhe._visit(args,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("Function Schema:",malli.dev.virhe._visit(schema,printer),printer),new cljs.core.Keyword(null,"break","break",126570225),new cljs.core.Keyword(null,"break","break",126570225),malli.dev.pretty._block("More information:",malli.dev.pretty._link("https://cljdoc.org/d/metosin/malli/CURRENT/doc/function-schemas",printer),printer)], null)], null);
}));
malli.dev.pretty.reporter = (function malli$dev$pretty$reporter(var_args){
var G__50520 = arguments.length;
switch (G__50520) {
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
return malli.dev.virhe._print_doc(malli.dev.virhe._exception_doc(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null)),printer),printer);
});
}));

(malli.dev.pretty.reporter.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.thrower = (function malli$dev$pretty$thrower(var_args){
var G__50538 = arguments.length;
switch (G__50538) {
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
var _STAR_print_newline_STAR__orig_val__50545_50571 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50546_50572 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50547_50573 = true;
var _STAR_print_fn_STAR__temp_val__50548_50574 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50547_50573);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50548_50574);

try{report(type,data);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50546_50572);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50545_50571);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
}));

(malli.dev.pretty.thrower.cljs$lang$maxFixedArity = 1);

malli.dev.pretty.explain = (function malli$dev$pretty$explain(var_args){
var G__50550 = arguments.length;
switch (G__50550) {
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
var printer = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__4253__auto__ = new cljs.core.Keyword("malli.dev.pretty","printer","malli.dev.pretty/printer",-1293932392).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.dev.pretty._printer.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"width","width",-384071477),(60));
}
})(),new cljs.core.Keyword(null,"title","title",636505583),"Validation Error");
var temp__5753__auto__ = malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1(malli.core.explain.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,value));
if(cljs.core.truth_(temp__5753__auto__)){
var e = temp__5753__auto__;
malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$1(printer)(new cljs.core.Keyword("malli.core","explain","malli.core/explain",36932858),e);

return e;
} else {
return null;
}
}));

(malli.dev.pretty.explain.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=malli.dev.pretty.js.map
