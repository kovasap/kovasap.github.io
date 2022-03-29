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
var len__4864__auto___46465 = arguments.length;
var i__4865__auto___46466 = (0);
while(true){
if((i__4865__auto___46466 < len__4864__auto___46465)){
args__4870__auto__.push((arguments[i__4865__auto___46466]));

var G__46470 = (i__4865__auto___46466 + (1));
i__4865__auto___46466 = G__46470;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__46299,output,p__46300){
var map__46301 = p__46299;
var map__46301__$1 = cljs.core.__destructure_map(map__46301);
var style = map__46301__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46301__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__46302 = p__46300;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__46306 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46306)].join('');
} else {
return G__46306;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
}));

(ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq46295){
var G__46296 = cljs.core.first(seq46295);
var seq46295__$1 = cljs.core.next(seq46295);
var G__46297 = cljs.core.first(seq46295__$1);
var seq46295__$2 = cljs.core.next(seq46295__$1);
var G__46298 = cljs.core.first(seq46295__$2);
var seq46295__$3 = cljs.core.next(seq46295__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46296,G__46297,G__46298,seq46295__$3);
}));

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46309_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46309_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46313_46483 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46314_46484 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46315_46485 = true;
var _STAR_print_fn_STAR__temp_val__46316_46487 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46315_46485);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46316_46487);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46314_46484);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46313_46483);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__46319 = arguments.length;
switch (G__46319) {
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
var G__46326 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46326__$1 = (((G__46326 instanceof cljs.core.Keyword))?G__46326.fqn:null);
switch (G__46326__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46326__$1)].join('')));

}
}));

(ghostwheel.logging.log.cljs$lang$maxFixedArity = 2);

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__46335 = arguments.length;
switch (G__46335) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___46499 = arguments.length;
var i__4865__auto___46500 = (0);
while(true){
if((i__4865__auto___46500 < len__4864__auto___46499)){
args_arr__4885__auto__.push((arguments[i__4865__auto___46500]));

var G__46501 = (i__4865__auto___46500 + (1));
i__4865__auto___46500 = G__46501;
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
var seq__46340_46506 = cljs.core.seq(msgs);
var chunk__46341_46507 = null;
var count__46342_46508 = (0);
var i__46343_46509 = (0);
while(true){
if((i__46343_46509 < count__46342_46508)){
var msg_46510 = chunk__46341_46507.cljs$core$IIndexed$_nth$arity$2(null,i__46343_46509);
if((msg_46510 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_46510);
}


var G__46511 = seq__46340_46506;
var G__46512 = chunk__46341_46507;
var G__46513 = count__46342_46508;
var G__46514 = (i__46343_46509 + (1));
seq__46340_46506 = G__46511;
chunk__46341_46507 = G__46512;
count__46342_46508 = G__46513;
i__46343_46509 = G__46514;
continue;
} else {
var temp__5753__auto___46516 = cljs.core.seq(seq__46340_46506);
if(temp__5753__auto___46516){
var seq__46340_46517__$1 = temp__5753__auto___46516;
if(cljs.core.chunked_seq_QMARK_(seq__46340_46517__$1)){
var c__4679__auto___46518 = cljs.core.chunk_first(seq__46340_46517__$1);
var G__46519 = cljs.core.chunk_rest(seq__46340_46517__$1);
var G__46520 = c__4679__auto___46518;
var G__46521 = cljs.core.count(c__4679__auto___46518);
var G__46522 = (0);
seq__46340_46506 = G__46519;
chunk__46341_46507 = G__46520;
count__46342_46508 = G__46521;
i__46343_46509 = G__46522;
continue;
} else {
var msg_46523 = cljs.core.first(seq__46340_46517__$1);
if((msg_46523 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_46523);
}


var G__46526 = cljs.core.next(seq__46340_46517__$1);
var G__46527 = null;
var G__46528 = (0);
var G__46529 = (0);
seq__46340_46506 = G__46526;
chunk__46341_46507 = G__46527;
count__46342_46508 = G__46528;
i__46343_46509 = G__46529;
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
(ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq46332){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46332));
}));

(ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0));

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46531 = arguments.length;
var i__4865__auto___46532 = (0);
while(true){
if((i__4865__auto___46532 < len__4864__auto___46531)){
args__4870__auto__.push((arguments[i__4865__auto___46532]));

var G__46534 = (i__4865__auto___46532 + (1));
i__4865__auto___46532 = G__46534;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__46357 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46357__$1 = (((G__46357 instanceof cljs.core.Keyword))?G__46357.fqn:null);
switch (G__46357__$1) {
case "repl":
var seq__46358 = cljs.core.seq(objs);
var chunk__46359 = null;
var count__46360 = (0);
var i__46361 = (0);
while(true){
if((i__46361 < count__46360)){
var obj = chunk__46359.cljs$core$IIndexed$_nth$arity$2(null,i__46361);
ghostwheel.logging.plain_log(obj);


var G__46539 = seq__46358;
var G__46540 = chunk__46359;
var G__46541 = count__46360;
var G__46542 = (i__46361 + (1));
seq__46358 = G__46539;
chunk__46359 = G__46540;
count__46360 = G__46541;
i__46361 = G__46542;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46358);
if(temp__5753__auto__){
var seq__46358__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46358__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46358__$1);
var G__46543 = cljs.core.chunk_rest(seq__46358__$1);
var G__46544 = c__4679__auto__;
var G__46545 = cljs.core.count(c__4679__auto__);
var G__46546 = (0);
seq__46358 = G__46543;
chunk__46359 = G__46544;
count__46360 = G__46545;
i__46361 = G__46546;
continue;
} else {
var obj = cljs.core.first(seq__46358__$1);
ghostwheel.logging.plain_log(obj);


var G__46548 = cljs.core.next(seq__46358__$1);
var G__46549 = null;
var G__46550 = (0);
var G__46551 = (0);
seq__46358 = G__46548;
chunk__46359 = G__46549;
count__46360 = G__46550;
i__46361 = G__46551;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46357__$1)].join('')));

}
}));

(ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq46354){
var G__46355 = cljs.core.first(seq46354);
var seq46354__$1 = cljs.core.next(seq46354);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46355,seq46354__$1);
}));

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__46379 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46379__$1 = (((G__46379 instanceof cljs.core.Keyword))?G__46379.fqn:null);
switch (G__46379__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46379__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__46382_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46382_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__46388 = arguments.length;
switch (G__46388) {
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
var G__46394 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46394__$1 = (((G__46394 instanceof cljs.core.Keyword))?G__46394.fqn:null);
switch (G__46394__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46394__$1)].join('')));

}
}));

(ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3);

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__46401 = arguments.length;
switch (G__46401) {
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
var G__46411 = arguments.length;
switch (G__46411) {
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

var plain_group_end_46571 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__46418_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__46418_SHARP_,(0),(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.count(p1__46418_SHARP_) - (2));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
}));
});
ghostwheel.logging.group_end = (function ghostwheel$logging$group_end(){
var G__46423 = ghostwheel.logging._STAR_report_output_STAR_;
var G__46423__$1 = (((G__46423 instanceof cljs.core.Keyword))?G__46423.fqn:null);
switch (G__46423__$1) {
case "repl":
return plain_group_end_46571();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46423__$1)].join('')));

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
var len__4864__auto___46577 = arguments.length;
var i__4865__auto___46578 = (0);
while(true){
if((i__4865__auto___46578 < len__4864__auto___46577)){
args__4870__auto__.push((arguments[i__4865__auto___46578]));

var G__46581 = (i__4865__auto___46578 + (1));
i__4865__auto___46578 = G__46581;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__46440){
var vec__46441 = p__46440;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46441,(0),null);
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
(ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq46432){
var G__46433 = cljs.core.first(seq46432);
var seq46432__$1 = cljs.core.next(seq46432);
var G__46434 = cljs.core.first(seq46432__$1);
var seq46432__$2 = cljs.core.next(seq46432__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46433,G__46434,seq46432__$2);
}));


//# sourceMappingURL=ghostwheel.logging.js.map
