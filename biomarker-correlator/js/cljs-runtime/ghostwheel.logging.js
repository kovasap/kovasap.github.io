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
var len__4864__auto___51882 = arguments.length;
var i__4865__auto___51883 = (0);
while(true){
if((i__4865__auto___51883 < len__4864__auto___51882)){
args__4870__auto__.push((arguments[i__4865__auto___51883]));

var G__51884 = (i__4865__auto___51883 + (1));
i__4865__auto___51883 = G__51884;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(ghostwheel.logging.get_styled_label.cljs$core$IFn$_invoke$arity$variadic = (function (label,p__51682,output,p__51683){
var map__51684 = p__51682;
var map__51684__$1 = cljs.core.__destructure_map(map__51684);
var style = map__51684__$1;
var foreground = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51684__$1,new cljs.core.Keyword("ghostwheel.logging","foreground","ghostwheel.logging/foreground",-473507023));
var background = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51684__$1,new cljs.core.Keyword("ghostwheel.logging","background","ghostwheel.logging/background",41589606));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51684__$1,new cljs.core.Keyword("ghostwheel.logging","weight","ghostwheel.logging/weight",-88030216));
var vec__51685 = p__51683;
var length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51685,(0),null);
if(cljs.core.not(style)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label], null);
} else {
var label__$1 = (function (){var G__51690 = (cljs.core.truth_(length)?ghostwheel.logging.truncate_string(label,length):label);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791))){
return ["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51690)].join('');
} else {
return G__51690;
}
})();
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(output,new cljs.core.Keyword(null,"js-console","js-console",1240105791)))?["color: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(foreground)?foreground:(cljs.core.truth_(background)?"white":new cljs.core.Keyword(null,"black","black",1294279647).cljs$core$IFn$_invoke$arity$1(ghostwheel.logging.ghostwheel_colors)
))),";","background: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(background)?background:"white")),";","font-weight: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(weight)?weight:"500")),";",(cljs.core.truth_(background)?"text-shadow: 0.5px 0.5px black;":null),(cljs.core.truth_(background)?"padding: 2px 6px; border-radius: 2px;":null)].join(''):null);
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label__$1,style__$1], null)));
}
}));

(ghostwheel.logging.get_styled_label.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ghostwheel.logging.get_styled_label.cljs$lang$applyTo = (function (seq51666){
var G__51667 = cljs.core.first(seq51666);
var seq51666__$1 = cljs.core.next(seq51666);
var G__51668 = cljs.core.first(seq51666__$1);
var seq51666__$2 = cljs.core.next(seq51666__$1);
var G__51669 = cljs.core.first(seq51666__$2);
var seq51666__$3 = cljs.core.next(seq51666__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51667,G__51668,G__51669,seq51666__$3);
}));

ghostwheel.logging.plain_log = (function ghostwheel$logging$plain_log(msg){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51693_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ghostwheel.logging._STAR_nesting)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51693_SHARP_)].join('');
}),clojure.string.split_lines(((typeof msg === 'string')?msg:(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51694_51893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51695_51894 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51696_51895 = true;
var _STAR_print_fn_STAR__temp_val__51697_51896 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51696_51895);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51697_51896);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51695_51894);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51694_51893);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()))))], 0));
});
ghostwheel.logging.log = (function ghostwheel$logging$log(var_args){
var G__51704 = arguments.length;
switch (G__51704) {
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
var G__51715 = ghostwheel.logging._STAR_report_output_STAR_;
var G__51715__$1 = (((G__51715 instanceof cljs.core.Keyword))?G__51715.fqn:null);
switch (G__51715__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_log,styled_msg);

break;
case "js-console":
return console.log.apply(console,cljs.core.to_array(styled_msg));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51715__$1)].join('')));

}
}));

(ghostwheel.logging.log.cljs$lang$maxFixedArity = 2);

ghostwheel.logging.DBG = (function ghostwheel$logging$DBG(var_args){
var G__51719 = arguments.length;
switch (G__51719) {
case 0:
return ghostwheel.logging.DBG.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___51915 = arguments.length;
var i__4865__auto___51916 = (0);
while(true){
if((i__4865__auto___51916 < len__4864__auto___51915)){
args_arr__4885__auto__.push((arguments[i__4865__auto___51916]));

var G__51918 = (i__4865__auto___51916 + (1));
i__4865__auto___51916 = G__51918;
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
var seq__51724_51919 = cljs.core.seq(msgs);
var chunk__51725_51920 = null;
var count__51726_51921 = (0);
var i__51727_51922 = (0);
while(true){
if((i__51727_51922 < count__51726_51921)){
var msg_51923 = chunk__51725_51920.cljs$core$IIndexed$_nth$arity$2(null,i__51727_51922);
if((msg_51923 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_51923);
}


var G__51934 = seq__51724_51919;
var G__51935 = chunk__51725_51920;
var G__51936 = count__51726_51921;
var G__51937 = (i__51727_51922 + (1));
seq__51724_51919 = G__51934;
chunk__51725_51920 = G__51935;
count__51726_51921 = G__51936;
i__51727_51922 = G__51937;
continue;
} else {
var temp__5753__auto___51939 = cljs.core.seq(seq__51724_51919);
if(temp__5753__auto___51939){
var seq__51724_51940__$1 = temp__5753__auto___51939;
if(cljs.core.chunked_seq_QMARK_(seq__51724_51940__$1)){
var c__4679__auto___51942 = cljs.core.chunk_first(seq__51724_51940__$1);
var G__51943 = cljs.core.chunk_rest(seq__51724_51940__$1);
var G__51944 = c__4679__auto___51942;
var G__51945 = cljs.core.count(c__4679__auto___51942);
var G__51946 = (0);
seq__51724_51919 = G__51943;
chunk__51725_51920 = G__51944;
count__51726_51921 = G__51945;
i__51727_51922 = G__51946;
continue;
} else {
var msg_51947 = cljs.core.first(seq__51724_51940__$1);
if((msg_51947 == null)){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1("nil");
} else {
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(msg_51947);
}


var G__51948 = cljs.core.next(seq__51724_51940__$1);
var G__51949 = null;
var G__51950 = (0);
var G__51951 = (0);
seq__51724_51919 = G__51948;
chunk__51725_51920 = G__51949;
count__51726_51921 = G__51950;
i__51727_51922 = G__51951;
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
(ghostwheel.logging.DBG.cljs$lang$applyTo = (function (seq51718){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51718));
}));

(ghostwheel.logging.DBG.cljs$lang$maxFixedArity = (0));

ghostwheel.logging.log_raw = (function ghostwheel$logging$log_raw(var_args){
var args__4870__auto__ = [];
var len__4864__auto___51955 = arguments.length;
var i__4865__auto___51956 = (0);
while(true){
if((i__4865__auto___51956 < len__4864__auto___51955)){
args__4870__auto__.push((arguments[i__4865__auto___51956]));

var G__51957 = (i__4865__auto___51956 + (1));
i__4865__auto___51956 = G__51957;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(ghostwheel.logging.log_raw.cljs$core$IFn$_invoke$arity$variadic = (function (format_strings,objs){
var G__51750 = ghostwheel.logging._STAR_report_output_STAR_;
var G__51750__$1 = (((G__51750 instanceof cljs.core.Keyword))?G__51750.fqn:null);
switch (G__51750__$1) {
case "repl":
var seq__51751 = cljs.core.seq(objs);
var chunk__51752 = null;
var count__51753 = (0);
var i__51754 = (0);
while(true){
if((i__51754 < count__51753)){
var obj = chunk__51752.cljs$core$IIndexed$_nth$arity$2(null,i__51754);
ghostwheel.logging.plain_log(obj);


var G__51962 = seq__51751;
var G__51963 = chunk__51752;
var G__51964 = count__51753;
var G__51965 = (i__51754 + (1));
seq__51751 = G__51962;
chunk__51752 = G__51963;
count__51753 = G__51964;
i__51754 = G__51965;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51751);
if(temp__5753__auto__){
var seq__51751__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51751__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__51751__$1);
var G__51966 = cljs.core.chunk_rest(seq__51751__$1);
var G__51967 = c__4679__auto__;
var G__51968 = cljs.core.count(c__4679__auto__);
var G__51969 = (0);
seq__51751 = G__51966;
chunk__51752 = G__51967;
count__51753 = G__51968;
i__51754 = G__51969;
continue;
} else {
var obj = cljs.core.first(seq__51751__$1);
ghostwheel.logging.plain_log(obj);


var G__51971 = cljs.core.next(seq__51751__$1);
var G__51972 = null;
var G__51973 = (0);
var G__51974 = (0);
seq__51751 = G__51971;
chunk__51752 = G__51972;
count__51753 = G__51973;
i__51754 = G__51974;
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51750__$1)].join('')));

}
}));

(ghostwheel.logging.log_raw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(ghostwheel.logging.log_raw.cljs$lang$applyTo = (function (seq51746){
var G__51747 = cljs.core.first(seq51746);
var seq51746__$1 = cljs.core.next(seq51746);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51747,seq51746__$1);
}));

ghostwheel.logging.error = (function ghostwheel$logging$error(msg){
var G__51778 = ghostwheel.logging._STAR_report_output_STAR_;
var G__51778__$1 = (((G__51778 instanceof cljs.core.Keyword))?G__51778.fqn:null);
switch (G__51778__$1) {
case "repl":
ghostwheel.logging.plain_log("ERROR:");

return ghostwheel.logging.plain_log(msg);

break;
case "js-console":
return console.error(msg);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51778__$1)].join('')));

}
});
ghostwheel.logging.plain_group = (function ghostwheel$logging$plain_group(label){
ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$0();

ghostwheel.logging.log.cljs$core$IFn$_invoke$arity$1(["|> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__51782_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51782_SHARP_),"| "].join('');
}));
});
ghostwheel.logging.group_STAR_ = (function ghostwheel$logging$group_STAR_(var_args){
var G__51789 = arguments.length;
switch (G__51789) {
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
var G__51791 = ghostwheel.logging._STAR_report_output_STAR_;
var G__51791__$1 = (((G__51791 instanceof cljs.core.Keyword))?G__51791.fqn:null);
switch (G__51791__$1) {
case "repl":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging.plain_group,styled_label);

break;
case "js-console":
return (cljs.core.truth_(open_QMARK_)?console.group:console.groupCollapsed).apply(console,cljs.core.to_array(styled_label));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51791__$1)].join('')));

}
}));

(ghostwheel.logging.group_STAR_.cljs$lang$maxFixedArity = 3);

ghostwheel.logging.group = (function ghostwheel$logging$group(var_args){
var G__51797 = arguments.length;
switch (G__51797) {
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
var G__51803 = arguments.length;
switch (G__51803) {
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

var plain_group_end_51994 = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ghostwheel.logging._STAR_nesting,(function (p1__51809_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__51809_SHARP_,(0),(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (cljs.core.count(p1__51809_SHARP_) - (2));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})());
}));
});
ghostwheel.logging.group_end = (function ghostwheel$logging$group_end(){
var G__51818 = ghostwheel.logging._STAR_report_output_STAR_;
var G__51818__$1 = (((G__51818 instanceof cljs.core.Keyword))?G__51818.fqn:null);
switch (G__51818__$1) {
case "repl":
return plain_group_end_51994();

break;
case "js-console":
return console.groupEnd();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51818__$1)].join('')));

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
var len__4864__auto___52009 = arguments.length;
var i__4865__auto___52010 = (0);
while(true){
if((i__4865__auto___52010 < len__4864__auto___52009)){
args__4870__auto__.push((arguments[i__4865__auto___52010]));

var G__52011 = (i__4865__auto___52010 + (1));
i__4865__auto___52010 = G__52011;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(ghostwheel.logging.pr_clog.cljs$core$IFn$_invoke$arity$variadic = (function (label,data,p__51835){
var vec__51836 = p__51835;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51836,(0),null);
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
(ghostwheel.logging.pr_clog.cljs$lang$applyTo = (function (seq51828){
var G__51829 = cljs.core.first(seq51828);
var seq51828__$1 = cljs.core.next(seq51828);
var G__51830 = cljs.core.first(seq51828__$1);
var seq51828__$2 = cljs.core.next(seq51828__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51829,G__51830,seq51828__$2);
}));


//# sourceMappingURL=ghostwheel.logging.js.map
