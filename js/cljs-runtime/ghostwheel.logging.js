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
var len__4864__auto___44418 = arguments.length;
var i__4865__auto___44419 = (0);
while(true){
if((i__4865__auto___44419 < len__4864__auto___44418)){
args__4870__auto__.push((arguments[i__4865__auto___44419]));

var G__44422 = (i__4865__auto___44419 + (1));
i__4865__auto___44419 = G__44422;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__44238,output,p__44239){
var map__44241 = p__44238;
var map__44241__$1 = cljs.core.__destructure_map(map__44241);
var style = map__44241__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44241__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__44242 = p__44239;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44242,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__44248 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44248)].join('');
} else {
return G__44248;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
}));

(ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq44231){
var G__44232 = cljs.core.first(seq44231);
var seq44231__$1 = cljs.core.next(seq44231);
var G__44233 = cljs.core.first(seq44231__$1);
var seq44231__$2 = cljs.core.next(seq44231__$1);
var G__44234 = cljs.core.first(seq44231__$2);
var seq44231__$3 = cljs.core.next(seq44231__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44232,G__44233,G__44234,seq44231__$3);
}));

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44253_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44253_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44254_44431 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44255_44432 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44256_44433 = true;
var _STAR_print_fn_STAR__temp_val__44257_44434 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44256_44433);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44257_44434);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44255_44432);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44254_44431);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__44261 = arguments.length;
switch (G__44261) {
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
var G__44268 = ghostwheel.logging._STAR_report_output_STAR_;
var G__44268__$1 = (((G__44268 instanceof cljs.core.Keyword))?G__44268.fqn:null);
switch (G__44268__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44268__$1)].join('')));

}
}));

(ghostwheel.logging.log.cljs$lang$maxFixedArity = 2);

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__44273 = arguments.length;
switch (G__44273) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___44444 = arguments.length;
var i__4865__auto___44446 = (0);
while(true){
if((i__4865__auto___44446 < len__4864__auto___44444)){
args_arr__4885__auto__.push((arguments[i__4865__auto___44446]));

var G__44447 = (i__4865__auto___44446 + (1));
i__4865__auto___44446 = G__44447;
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
var seq__44274_44449 = cljs.core.seq(msgs);
var chunk__44275_44450 = null;
var count__44276_44451 = (0);
var i__44277_44452 = (0);
while(true){
if((i__44277_44452 < count__44276_44451)){
var msg_44454 = chunk__44275_44450.cljs$core$IIndexed$_nth$arity$2(null,i__44277_44452);
if((msg_44454 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_44454);
}


var G__44457 = seq__44274_44449;
var G__44458 = chunk__44275_44450;
var G__44459 = count__44276_44451;
var G__44460 = (i__44277_44452 + (1));
seq__44274_44449 = G__44457;
chunk__44275_44450 = G__44458;
count__44276_44451 = G__44459;
i__44277_44452 = G__44460;
continue;
} else {
var temp__5753__auto___44461 = cljs.core.seq(seq__44274_44449);
if(temp__5753__auto___44461){
var seq__44274_44465__$1 = temp__5753__auto___44461;
if(cljs.core.chunked_seq_QMARK_(seq__44274_44465__$1)){
var c__4679__auto___44466 = cljs.core.chunk_first(seq__44274_44465__$1);
var G__44468 = cljs.core.chunk_rest(seq__44274_44465__$1);
var G__44469 = c__4679__auto___44466;
var G__44470 = cljs.core.count(c__4679__auto___44466);
var G__44471 = (0);
seq__44274_44449 = G__44468;
chunk__44275_44450 = G__44469;
count__44276_44451 = G__44470;
i__44277_44452 = G__44471;
continue;
} else {
var msg_44472 = cljs.core.first(seq__44274_44465__$1);
if((msg_44472 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_44472);
}


var G__44474 = cljs.core.next(seq__44274_44465__$1);
var G__44475 = null;
var G__44476 = (0);
var G__44477 = (0);
seq__44274_44449 = G__44474;
chunk__44275_44450 = G__44475;
count__44276_44451 = G__44476;
i__44277_44452 = G__44477;
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
(ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq44272){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44272));
}));

(ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0));

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44482 = arguments.length;
var i__4865__auto___44483 = (0);
while(true){
if((i__4865__auto___44483 < len__4864__auto___44482)){
args__4870__auto__.push((arguments[i__4865__auto___44483]));

var G__44484 = (i__4865__auto___44483 + (1));
i__4865__auto___44483 = G__44484;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__44293 = ghostwheel.logging._STAR_report_output_STAR_;
var G__44293__$1 = (((G__44293 instanceof cljs.core.Keyword))?G__44293.fqn:null);
switch (G__44293__$1) {
case "repl":
var seq__44296 = cljs.core.seq(objs);
var chunk__44297 = null;
var count__44298 = (0);
var i__44299 = (0);
while(true){
if((i__44299 < count__44298)){
var obj = chunk__44297.cljs$core$IIndexed$_nth$arity$2(null,i__44299);
ghostwheel.logging.plain_log(obj);


var G__44490 = seq__44296;
var G__44491 = chunk__44297;
var G__44492 = count__44298;
var G__44493 = (i__44299 + (1));
seq__44296 = G__44490;
chunk__44297 = G__44491;
count__44298 = G__44492;
i__44299 = G__44493;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44296);
if(temp__5753__auto__){
var seq__44296__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44296__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44296__$1);
var G__44495 = cljs.core.chunk_rest(seq__44296__$1);
var G__44496 = c__4679__auto__;
var G__44497 = cljs.core.count(c__4679__auto__);
var G__44498 = (0);
seq__44296 = G__44495;
chunk__44297 = G__44496;
count__44298 = G__44497;
i__44299 = G__44498;
continue;
} else {
var obj = cljs.core.first(seq__44296__$1);
ghostwheel.logging.plain_log(obj);


var G__44499 = cljs.core.next(seq__44296__$1);
var G__44500 = null;
var G__44501 = (0);
var G__44502 = (0);
seq__44296 = G__44499;
chunk__44297 = G__44500;
count__44298 = G__44501;
i__44299 = G__44502;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44293__$1)].join('')));

}
}));

(ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq44285){
var G__44286 = cljs.core.first(seq44285);
var seq44285__$1 = cljs.core.next(seq44285);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44286,seq44285__$1);
}));

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__44321 = ghostwheel.logging._STAR_report_output_STAR_;
var G__44321__$1 = (((G__44321 instanceof cljs.core.Keyword))?G__44321.fqn:null);
switch (G__44321__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44321__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__44322_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44322_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__44333 = arguments.length;
switch (G__44333) {
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
var G__44339 = ghostwheel.logging._STAR_report_output_STAR_;
var G__44339__$1 = (((G__44339 instanceof cljs.core.Keyword))?G__44339.fqn:null);
switch (G__44339__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44339__$1)].join('')));

}
}));

(ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3);

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__44351 = arguments.length;
switch (G__44351) {
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
var G__44359 = arguments.length;
switch (G__44359) {
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

var plain_group_end_44522 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__44366_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__44366_SHARP_,(0),(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.count(p1__44366_SHARP_) - (2));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
}));
});
ghostwheel.logging.group_end = (function ghostwheel$logging$group_end(){
var G__44373 = ghostwheel.logging._STAR_report_output_STAR_;
var G__44373__$1 = (((G__44373 instanceof cljs.core.Keyword))?G__44373.fqn:null);
switch (G__44373__$1) {
case "repl":
return plain_group_end_44522();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44373__$1)].join('')));

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
var len__4864__auto___44537 = arguments.length;
var i__4865__auto___44538 = (0);
while(true){
if((i__4865__auto___44538 < len__4864__auto___44537)){
args__4870__auto__.push((arguments[i__4865__auto___44538]));

var G__44539 = (i__4865__auto___44538 + (1));
i__4865__auto___44538 = G__44539;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__44389){
var vec__44390 = p__44389;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(0),null);
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
(ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq44376){
var G__44377 = cljs.core.first(seq44376);
var seq44376__$1 = cljs.core.next(seq44376);
var G__44378 = cljs.core.first(seq44376__$1);
var seq44376__$2 = cljs.core.next(seq44376__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44377,G__44378,seq44376__$2);
}));


//# sourceMappingURL=ghostwheel.logging.js.map
