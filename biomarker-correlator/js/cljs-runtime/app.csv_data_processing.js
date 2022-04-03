goog.provide('app.csv_data_processing');
app.csv_data_processing.DatedRow = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),app.time.Date], null)], null);
app.csv_data_processing.ProcessedRow = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),app.time.Date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.Timestamp], null)], null);
app.csv_data_processing.get_rows_by_dates = (function app$csv_data_processing$get_rows_by_dates(rows){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(row),row], null);
}),rows));
});
/**
 * Merges N sequences of row maps (e.g. from different spreadsheets) using
 *   the :date field as the joining attribute.
 */
app.csv_data_processing.merge_rows_using_dates = (function app$csv_data_processing$merge_rows_using_dates(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81793 = arguments.length;
var i__4865__auto___81794 = (0);
while(true){
if((i__4865__auto___81794 < len__4864__auto___81793)){
args__4870__auto__.push((arguments[i__4865__auto___81794]));

var G__81795 = (i__4865__auto___81794 + (1));
i__4865__auto___81794 = G__81795;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.merge_rows_using_dates.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.merge_rows_using_dates.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
return cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (row1,row2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([row1,row2], 0));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.csv_data_processing.get_rows_by_dates,sets_of_rows)));
}));

(app.csv_data_processing.merge_rows_using_dates.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq81665){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81665));
}));

app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81682_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__81682_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.map_to_timestamp(app.time.parse_date_range(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__81682_SHARP_))));
}),data);
});
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81683_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81690){
var vec__81691 = p__81690;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81691,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null);
}),p1__81683_SHARP_));
}),data);
});
app.csv_data_processing.floatify_data(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null)], null));
app.csv_data_processing.get_all_data_validation_string = (function app$csv_data_processing$get_all_data_validation_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81800 = arguments.length;
var i__4865__auto___81801 = (0);
while(true){
if((i__4865__auto___81801 < len__4864__auto___81800)){
args__4870__auto__.push((arguments[i__4865__auto___81801]));

var G__81802 = (i__4865__auto___81801 + (1));
i__4865__auto___81801 = G__81802;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
var headers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),p1__81697_SHARP_);
}),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81698_SHARP_){
return cljs.core.keys(cljs.core.first(p1__81698_SHARP_));
}),sets_of_rows)));
var duplicate_headers = (function (){var iter__4652__auto__ = (function app$csv_data_processing$iter__81703(s__81704){
return (new cljs.core.LazySeq(null,(function (){
var s__81704__$1 = s__81704;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81704__$1);
if(temp__5753__auto__){
var s__81704__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81704__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81704__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81706 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81705 = (0);
while(true){
if((i__81705 < size__4651__auto__)){
var vec__81710 = cljs.core._nth(c__4650__auto__,i__81705);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81710,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81710,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__81706,id);

var G__81804 = (i__81705 + (1));
i__81705 = G__81804;
continue;
} else {
var G__81805 = (i__81705 + (1));
i__81705 = G__81805;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81706),app$csv_data_processing$iter__81703(cljs.core.chunk_rest(s__81704__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81706),null);
}
} else {
var vec__81717 = cljs.core.first(s__81704__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81717,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81717,(1),null);
if((freq > (1))){
return cljs.core.cons(id,app$csv_data_processing$iter__81703(cljs.core.rest(s__81704__$2)));
} else {
var G__81806 = cljs.core.rest(s__81704__$2);
s__81704__$1 = G__81806;
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
return iter__4652__auto__(cljs.core.frequencies(headers));
})();
if(cljs.core.seq(duplicate_headers)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Some inputs headers were duplicated: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",duplicate_headers)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"Data validated successfully"], null);
}
}));

(app.csv_data_processing.get_all_data_validation_string.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.get_all_data_validation_string.cljs$lang$applyTo = (function (seq81702){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81702));
}));

app.csv_data_processing.dups = (function app$csv_data_processing$dups(sequence){
var iter__4652__auto__ = (function app$csv_data_processing$dups_$_iter__81733(s__81734){
return (new cljs.core.LazySeq(null,(function (){
var s__81734__$1 = s__81734;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81734__$1);
if(temp__5753__auto__){
var s__81734__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__81734__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__81734__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__81736 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__81735 = (0);
while(true){
if((i__81735 < size__4651__auto__)){
var vec__81753 = cljs.core._nth(c__4650__auto__,i__81735);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81753,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81753,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__81736,element);

var G__81809 = (i__81735 + (1));
i__81735 = G__81809;
continue;
} else {
var G__81810 = (i__81735 + (1));
i__81735 = G__81810;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81736),app$csv_data_processing$dups_$_iter__81733(cljs.core.chunk_rest(s__81734__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81736),null);
}
} else {
var vec__81760 = cljs.core.first(s__81734__$2);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81760,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81760,(1),null);
if((freq > (1))){
return cljs.core.cons(element,app$csv_data_processing$dups_$_iter__81733(cljs.core.rest(s__81734__$2)));
} else {
var G__81811 = cljs.core.rest(s__81734__$2);
s__81734__$1 = G__81811;
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
return iter__4652__auto__(cljs.core.frequencies(sequence));
});
app.csv_data_processing.get_validation_string = (function app$csv_data_processing$get_validation_string(rows){
var duplicate_dates = app.csv_data_processing.dups(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),rows));
if((cljs.core.count(duplicate_dates) > (0))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"Repeated dates found in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duplicate_dates),"!"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"Data validated successfully"], null);
}
});
app.csv_data_processing.process_csv_data = (function app$csv_data_processing$process_csv_data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___81816 = arguments.length;
var i__4865__auto___81817 = (0);
while(true){
if((i__4865__auto___81817 < len__4864__auto___81816)){
args__4870__auto__.push((arguments[i__4865__auto___81817]));

var G__81818 = (i__4865__auto___81817 + (1));
i__4865__auto___81817 = G__81818;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
return app.csv_data_processing.floatify_data(app.csv_data_processing.add_timestamps(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(app.csv_data_processing.merge_rows_using_dates,sets_of_rows)));
}));

(app.csv_data_processing.process_csv_data.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq81788){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq81788));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null)], 0));

//# sourceMappingURL=app.csv_data_processing.js.map
