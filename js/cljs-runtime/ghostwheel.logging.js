goog.provide('ghostwheel.logging');
ghostwheel.logging._STAR_nesting = cljs.core.atom.cljs$core$IFn$_invoke$arity$1("");
ghostwheel.logging._STAR_report_output_STAR_ = new cljs.core.Keyword(null,"js-console","js-console",1240105791);
ghostwheel.logging.ghostwheel_colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"base1","base1",-1379049855),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"purple1","purple1",1665392325),new cljs.core.Keyword(null,"base3","base3",-1172895995),new cljs.core.Keyword(null,"purple0","purple0",-1668477083),new cljs.core.Keyword(null,"orange0","orange0",1459969095),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"base2","base2",1736987560),new cljs.core.Keyword(null,"green0","green0",935416937),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"green1","green1",1162170698),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"purple2","purple2",-1568108659),new cljs.core.Keyword(null,"base0","base0",128742798),new cljs.core.Keyword(null,"orange1","orange1",1540366992),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"base00","base00",-1549387019),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"base01","base01",277019065),new cljs.core.Keyword(null,"base03","base03",269270489),new cljs.core.Keyword(null,"base02","base02",-1734030562),new cljs.core.Keyword(null,"black","black",1294279647)],["#93a1a1","#cb4b16","#b87a93","#fdf6e3","#967a93","#fe8709","#b58900","#eee8d5","#82da38","#859900","#54a627","#2aa198","#6c71c4","#7d9cf8","#839496","#f17d3e","#dc322f","#268bd2","#657b83","#d33682","#586e75","#002b36","#073642","#002b36"]);
ghostwheel.logging.ops_with_bindings = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),null,new cljs.core.Symbol(null,"defmethod","defmethod",-579171823,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-protocol","ghostwheel.tracer/extend-protocol",-1387613853,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,new cljs.core.Symbol("ghostwheel.tracer","defmethod","ghostwheel.tracer/defmethod",41043138,null),null,new cljs.core.Symbol(null,"extend-protocol","extend-protocol",306378578,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn-","ghostwheel.tracer/defn-",410431175,null),null,new cljs.core.Symbol("ghostwheel.tracer","let","ghostwheel.tracer/let",-1135560835,null),null,new cljs.core.Symbol("ghostwheel.tracer","defn","ghostwheel.tracer/defn",-1888156609,null),null,new cljs.core.Symbol(null,"extend-type","extend-type",1123355921,null),null,new cljs.core.Symbol("ghostwheel.tracer","reify","ghostwheel.tracer/reify",-914829536,null),null,new cljs.core.Symbol("ghostwheel.tracer","fn","ghostwheel.tracer/fn",-1296883590,null),null,new cljs.core.Symbol(null,"reify","reify",1885539699,null),null,new cljs.core.Symbol(null,"let","let",358118826,null),null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null),null,new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),null,new cljs.core.Symbol("ghostwheel.tracer","deftype","ghostwheel.tracer/deftype",-1592147015,null),null,new cljs.core.Symbol("ghostwheel.tracer","defrecord","ghostwheel.tracer/defrecord",-917570066,null),null,new cljs.core.Symbol("ghostwheel.tracer","extend-type","ghostwheel.tracer/extend-type",704466912,null),null], null), null);
ghostwheel.logging.wrap_line = (function ghostwheel$logging$wrap_line(size,text){
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,["~{~<~%~1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),":;~A~> ~}"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/ /)], 0));
});
ghostwheel.logging.wrap = (function ghostwheel$logging$wrap(line){
return ghostwheel.logging.wrap_line((80),line);
});
ghostwheel.logging.truncate_string = (function ghostwheel$logging$truncate_string(long_string,limit){
if((cljs.core.count(long_string) > limit)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(long_string,(0),limit),"..."].join('');
} else {
return long_string;
}
});
ghostwheel.logging.get_styled_label = (function ghostwheel$logging$get_styled_label(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46348 = arguments.length;
var i__4865__auto___46349 = (0);
while(true){
if((i__4865__auto___46349 < len__4864__auto___46348)){
args__4870__auto__.push((arguments[i__4865__auto___46349]));

var G__46356 = (i__4865__auto___46349 + (1));
i__4865__auto___46349 = G__46356;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__46203,output,p__46204){
var map__46205 = p__46203;
var map__46205__$1 = cljs.core.__destructure_map(map__46205);
var style = map__46205__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46205__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__46206 = p__46204;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46206,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__46212 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46212)].join('');
} else {
return G__46212;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
}));

(ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq46191){
var G__46192 = cljs.core.first(seq46191);
var seq46191__$1 = cljs.core.next(seq46191);
var G__46193 = cljs.core.first(seq46191__$1);
var seq46191__$2 = cljs.core.next(seq46191__$1);
var G__46194 = cljs.core.first(seq46191__$2);
var seq46191__$3 = cljs.core.next(seq46191__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46192,G__46193,G__46194,seq46191__$3);
}));

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46219_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46219_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46224_46365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46225_46366 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46226_46367 = true;
var _STAR_print_fn_STAR__temp_val__46227_46368 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46226_46367);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46227_46368);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46225_46366);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46224_46365);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__46233 = arguments.length;
switch (G__46233) {
case 0:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2("",null);
}));

(ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1 = (function (msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,null);
}));

(ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2 = (function (msg,style){
var styled_msg = ghostwheel.logging.get_styled_label(msg,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__46238 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46238__$1 = (((G__46238 instanceof cljs.core.Keyword))?G__46238.fqn:null);
switch (G__46238__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46238__$1)].join('')));

}
}));

(ghostwheel.logging.log.cljs$lang$maxFixedArity = 2);

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__46249 = arguments.length;
switch (G__46249) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___46376 = arguments.length;
var i__4865__auto___46377 = (0);
while(true){
if((i__4865__auto___46377 < len__4864__auto___46376)){
args_arr__4885__auto__.push((arguments[i__4865__auto___46377]));

var G__46379 = (i__4865__auto___46377 + (1));
i__4865__auto___46377 = G__46379;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((0)),(0),null));
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic(argseq__4886__auto__);

}
});

(ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0 = (function (){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("#> MARK");
}));

(ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$variadic = (function (msgs){
var seq__46252_46381 = cljs.core.seq(msgs);
var chunk__46253_46382 = null;
var count__46254_46383 = (0);
var i__46255_46384 = (0);
while(true){
if((i__46255_46384 < count__46254_46383)){
var msg_46385 = chunk__46253_46382.cljs$core$IIndexed$_nth$arity$2(null,i__46255_46384);
if((msg_46385 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_46385);
}


var G__46387 = seq__46252_46381;
var G__46388 = chunk__46253_46382;
var G__46389 = count__46254_46383;
var G__46390 = (i__46255_46384 + (1));
seq__46252_46381 = G__46387;
chunk__46253_46382 = G__46388;
count__46254_46383 = G__46389;
i__46255_46384 = G__46390;
continue;
} else {
var temp__5753__auto___46391 = cljs.core.seq(seq__46252_46381);
if(temp__5753__auto___46391){
var seq__46252_46392__$1 = temp__5753__auto___46391;
if(cljs.core.chunked_seq_QMARK_(seq__46252_46392__$1)){
var c__4679__auto___46393 = cljs.core.chunk_first(seq__46252_46392__$1);
var G__46394 = cljs.core.chunk_rest(seq__46252_46392__$1);
var G__46395 = c__4679__auto___46393;
var G__46396 = cljs.core.count(c__4679__auto___46393);
var G__46397 = (0);
seq__46252_46381 = G__46394;
chunk__46253_46382 = G__46395;
count__46254_46383 = G__46396;
i__46255_46384 = G__46397;
continue;
} else {
var msg_46398 = cljs.core.first(seq__46252_46392__$1);
if((msg_46398 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_46398);
}


var G__46399 = cljs.core.next(seq__46252_46392__$1);
var G__46400 = null;
var G__46401 = (0);
var G__46402 = (0);
seq__46252_46381 = G__46399;
chunk__46253_46382 = G__46400;
count__46254_46383 = G__46401;
i__46255_46384 = G__46402;
continue;
}
} else {
}
}
break;
}

return cljs.core.last(msgs);
}));

/** @this {Function} */
(ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq46248){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46248));
}));

(ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0));

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46403 = arguments.length;
var i__4865__auto___46404 = (0);
while(true){
if((i__4865__auto___46404 < len__4864__auto___46403)){
args__4870__auto__.push((arguments[i__4865__auto___46404]));

var G__46405 = (i__4865__auto___46404 + (1));
i__4865__auto___46404 = G__46405;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__46274 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46274__$1 = (((G__46274 instanceof cljs.core.Keyword))?G__46274.fqn:null);
switch (G__46274__$1) {
case "repl":
var seq__46277 = cljs.core.seq(objs);
var chunk__46278 = null;
var count__46279 = (0);
var i__46280 = (0);
while(true){
if((i__46280 < count__46279)){
var obj = chunk__46278.cljs$core$IIndexed$_nth$arity$2(null,i__46280);
ghostwheel.logging.plain_log(obj);


var G__46407 = seq__46277;
var G__46408 = chunk__46278;
var G__46409 = count__46279;
var G__46410 = (i__46280 + (1));
seq__46277 = G__46407;
chunk__46278 = G__46408;
count__46279 = G__46409;
i__46280 = G__46410;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46277);
if(temp__5753__auto__){
var seq__46277__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46277__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46277__$1);
var G__46411 = cljs.core.chunk_rest(seq__46277__$1);
var G__46412 = c__4679__auto__;
var G__46413 = cljs.core.count(c__4679__auto__);
var G__46414 = (0);
seq__46277 = G__46411;
chunk__46278 = G__46412;
count__46279 = G__46413;
i__46280 = G__46414;
continue;
} else {
var obj = cljs.core.first(seq__46277__$1);
ghostwheel.logging.plain_log(obj);


var G__46415 = cljs.core.next(seq__46277__$1);
var G__46416 = null;
var G__46417 = (0);
var G__46418 = (0);
seq__46277 = G__46415;
chunk__46278 = G__46416;
count__46279 = G__46417;
i__46280 = G__46418;
continue;
}
} else {
return null;
}
}
break;
}

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(format_strings,objs)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46274__$1)].join('')));

}
}));

(ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq46264){
var G__46265 = cljs.core.first(seq46264);
var seq46264__$1 = cljs.core.next(seq46264);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46265,seq46264__$1);
}));

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__46296 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46296__$1 = (((G__46296 instanceof cljs.core.Keyword))?G__46296.fqn:null);
switch (G__46296__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46296__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__46300_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46300_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__46308 = arguments.length;
switch (G__46308) {
case 2:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (open_QMARK_,label){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(open_QMARK_,label,null);
}));

(ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (open_QMARK_,label,style){
var styled_label = ghostwheel.logging.get_styled_label(label,style,ghostwheel.logging._STAR_report_output_STAR_);
var G__46309 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46309__$1 = (((G__46309 instanceof cljs.core.Keyword))?G__46309.fqn:null);
switch (G__46309__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46309__$1)].join('')));

}
}));

(ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3);

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__46311 = arguments.length;
switch (G__46311) {
case 1:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(true,label,style);
}));

(ghostwheel.logging.group.cljs$lang$maxFixedArity = 2);

ghostwheel.logging.group_collapsed = (function ghostwheel$logging$group_collapsed(var_args){
var G__46316 = arguments.length;
switch (G__46316) {
case 1:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,null);
}));

(ghostwheel.logging.group_collapsed.cljs$core$IFn$_invoke$arity$2 = (function (label,style){
return ghostwheel.logging.group_STAR_.cljs$core$IFn$_invoke$arity$3(false,label,style);
}));

(ghostwheel.logging.group_collapsed.cljs$lang$maxFixedArity = 2);

var plain_group_end_46428 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__46321_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__46321_SHARP_,(0),(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.count(p1__46321_SHARP_) - (2));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
}));
});
ghostwheel.logging.group_end = (function ghostwheel$logging$group_end(){
var G__46322 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46322__$1 = (((G__46322 instanceof cljs.core.Keyword))?G__46322.fqn:null);
switch (G__46322__$1) {
case "repl":
return plain_group_end_46428();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46322__$1)].join('')));

}
});
ghostwheel.logging.log_bold = (function ghostwheel$logging$log_bold(msg){
return ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216),"bold"], null));
});
ghostwheel.logging.clog = (function ghostwheel$logging$clog(data){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

return data;
});
/**
 * Pretty console log
 */
ghostwheel.logging.pr_clog = (function ghostwheel$logging$pr_clog(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46433 = arguments.length;
var i__4865__auto___46434 = (0);
while(true){
if((i__4865__auto___46434 < len__4864__auto___46433)){
args__4870__auto__.push((arguments[i__4865__auto___46434]));

var G__46435 = (i__4865__auto___46434 + (1));
i__4865__auto___46434 = G__46435;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__46335){
var vec__46336 = p__46335;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46336,(0),null);
if(cljs.core.truth_(data)){
ghostwheel.logging.group.cljs$core$IFn$_invoke$arity$2(label,style);

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(data);

ghostwheel.logging.group_end();
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$2(label,style);
}

return data;
}));

(ghostwheel.logging.pr_clog.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq46328){
var G__46329 = cljs.core.first(seq46328);
var seq46328__$1 = cljs.core.next(seq46328);
var G__46330 = cljs.core.first(seq46328__$1);
var seq46328__$2 = cljs.core.next(seq46328__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46329,G__46330,seq46328__$2);
}));


//# sourceMappingURL=ghostwheel.logging.js.map
