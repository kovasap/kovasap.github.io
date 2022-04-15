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
var len__4864__auto___48993 = arguments.length;
var i__4865__auto___48994 = (0);
while(true){
if((i__4865__auto___48994 < len__4864__auto___48993)){
args__4870__auto__.push((arguments[i__4865__auto___48994]));

var G__48995 = (i__4865__auto___48994 + (1));
i__4865__auto___48994 = G__48995;
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
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq48865){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48865));
}));

app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48873_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48873_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__48873_SHARP_)));
}),data);
});
app.csv_data_processing.not_NaN = (function app$csv_data_processing$not_NaN(v){
return (!((((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)))));
});
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
var iter__4652__auto__ = (function app$csv_data_processing$floatify_data_$_iter__48876(s__48877){
return (new cljs.core.LazySeq(null,(function (){
var s__48877__$1 = s__48877;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48877__$1);
if(temp__5753__auto__){
var s__48877__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48877__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48877__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48879 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48878 = (0);
while(true){
if((i__48878 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__48878);
cljs.core.chunk_append(b__48879,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__48878,row,c__4650__auto__,size__4651__auto__,b__48879,s__48877__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48880(s__48881){
return (new cljs.core.LazySeq(null,((function (i__48878,row,c__4650__auto__,size__4651__auto__,b__48879,s__48877__$2,temp__5753__auto__){
return (function (){
var s__48881__$1 = s__48881;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48881__$1);
if(temp__5753__auto____$1){
var s__48881__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48881__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__48881__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__48883 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__48882 = (0);
while(true){
if((i__48882 < size__4651__auto____$1)){
var vec__48885 = cljs.core._nth(c__4650__auto____$1,i__48882);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__48883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__49008 = (i__48882 + (1));
i__48882 = G__49008;
continue;
} else {
var G__49009 = (i__48882 + (1));
i__48882 = G__49009;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48883),app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48880(cljs.core.chunk_rest(s__48881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48883),null);
}
} else {
var vec__48889 = cljs.core.first(s__48881__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48889,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48880(cljs.core.rest(s__48881__$2)));
} else {
var G__49010 = cljs.core.rest(s__48881__$2);
s__48881__$1 = G__49010;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__48878,row,c__4650__auto__,size__4651__auto__,b__48879,s__48877__$2,temp__5753__auto__))
,null,null));
});})(i__48878,row,c__4650__auto__,size__4651__auto__,b__48879,s__48877__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()));

var G__49011 = (i__48878 + (1));
i__48878 = G__49011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48879),app$csv_data_processing$floatify_data_$_iter__48876(cljs.core.chunk_rest(s__48877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48879),null);
}
} else {
var row = cljs.core.first(s__48877__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (row,s__48877__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48892(s__48893){
return (new cljs.core.LazySeq(null,(function (){
var s__48893__$1 = s__48893;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48893__$1);
if(temp__5753__auto____$1){
var s__48893__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48893__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48893__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48895 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48894 = (0);
while(true){
if((i__48894 < size__4651__auto__)){
var vec__48896 = cljs.core._nth(c__4650__auto__,i__48894);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48896,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48896,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__48895,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__49013 = (i__48894 + (1));
i__48894 = G__49013;
continue;
} else {
var G__49014 = (i__48894 + (1));
i__48894 = G__49014;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48895),app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48892(cljs.core.chunk_rest(s__48893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48895),null);
}
} else {
var vec__48899 = cljs.core.first(s__48893__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48899,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48899,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__48876_$_iter__48892(cljs.core.rest(s__48893__$2)));
} else {
var G__49019 = cljs.core.rest(s__48893__$2);
s__48893__$1 = G__49019;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__48877__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()),app$csv_data_processing$floatify_data_$_iter__48876(cljs.core.rest(s__48877__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(data);
});
app.csv_data_processing.floatify_data(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null)], null));
app.csv_data_processing.get_all_data_validation_string = (function app$csv_data_processing$get_all_data_validation_string(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49020 = arguments.length;
var i__4865__auto___49021 = (0);
while(true){
if((i__4865__auto___49021 < len__4864__auto___49020)){
args__4870__auto__.push((arguments[i__4865__auto___49021]));

var G__49022 = (i__4865__auto___49021 + (1));
i__4865__auto___49021 = G__49022;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
var headers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__48903_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),p1__48903_SHARP_);
}),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48904_SHARP_){
return cljs.core.keys(cljs.core.first(p1__48904_SHARP_));
}),sets_of_rows)));
var duplicate_headers = (function (){var iter__4652__auto__ = (function app$csv_data_processing$iter__48907(s__48908){
return (new cljs.core.LazySeq(null,(function (){
var s__48908__$1 = s__48908;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48908__$1);
if(temp__5753__auto__){
var s__48908__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48908__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48908__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48910 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48909 = (0);
while(true){
if((i__48909 < size__4651__auto__)){
var vec__48915 = cljs.core._nth(c__4650__auto__,i__48909);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48915,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48915,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__48910,id);

var G__49025 = (i__48909 + (1));
i__48909 = G__49025;
continue;
} else {
var G__49026 = (i__48909 + (1));
i__48909 = G__49026;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48910),app$csv_data_processing$iter__48907(cljs.core.chunk_rest(s__48908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48910),null);
}
} else {
var vec__48918 = cljs.core.first(s__48908__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48918,(1),null);
if((freq > (1))){
return cljs.core.cons(id,app$csv_data_processing$iter__48907(cljs.core.rest(s__48908__$2)));
} else {
var G__49027 = cljs.core.rest(s__48908__$2);
s__48908__$1 = G__49027;
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
(app.csv_data_processing.get_all_data_validation_string.cljs$lang$applyTo = (function (seq48905){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48905));
}));

app.csv_data_processing.dups = (function app$csv_data_processing$dups(sequence){
var iter__4652__auto__ = (function app$csv_data_processing$dups_$_iter__48928(s__48929){
return (new cljs.core.LazySeq(null,(function (){
var s__48929__$1 = s__48929;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48929__$1);
if(temp__5753__auto__){
var s__48929__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48929__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48929__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48931 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48930 = (0);
while(true){
if((i__48930 < size__4651__auto__)){
var vec__48935 = cljs.core._nth(c__4650__auto__,i__48930);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48935,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48935,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__48931,element);

var G__49033 = (i__48930 + (1));
i__48930 = G__49033;
continue;
} else {
var G__49034 = (i__48930 + (1));
i__48930 = G__49034;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48931),app$csv_data_processing$dups_$_iter__48928(cljs.core.chunk_rest(s__48929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48931),null);
}
} else {
var vec__48938 = cljs.core.first(s__48929__$2);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48938,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48938,(1),null);
if((freq > (1))){
return cljs.core.cons(element,app$csv_data_processing$dups_$_iter__48928(cljs.core.rest(s__48929__$2)));
} else {
var G__49036 = cljs.core.rest(s__48929__$2);
s__48929__$1 = G__49036;
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
var len__4864__auto___49037 = arguments.length;
var i__4865__auto___49038 = (0);
while(true){
if((i__4865__auto___49038 < len__4864__auto___49037)){
args__4870__auto__.push((arguments[i__4865__auto___49038]));

var G__49039 = (i__4865__auto___49038 + (1));
i__4865__auto___49038 = G__49039;
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
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq48951){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48951));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"100",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null)], 0));
app.csv_data_processing.combine_rows = (function app$csv_data_processing$combine_rows(aggregation_fn,rows){
var earliest_row = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),rows));
var unique_keys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,(function (){var iter__4652__auto__ = (function app$csv_data_processing$combine_rows_$_iter__48953(s__48954){
return (new cljs.core.LazySeq(null,(function (){
var s__48954__$1 = s__48954;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48954__$1);
if(temp__5753__auto__){
var s__48954__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48954__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48954__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48956 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48955 = (0);
while(true){
if((i__48955 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__48955);
cljs.core.chunk_append(b__48956,cljs.core.set(cljs.core.keys(row)));

var G__49044 = (i__48955 + (1));
i__48955 = G__49044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48956),app$csv_data_processing$combine_rows_$_iter__48953(cljs.core.chunk_rest(s__48954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48956),null);
}
} else {
var row = cljs.core.first(s__48954__$2);
return cljs.core.cons(cljs.core.set(cljs.core.keys(row)),app$csv_data_processing$combine_rows_$_iter__48953(cljs.core.rest(s__48954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(rows);
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$csv_data_processing$combine_rows_$_iter__48957(s__48958){
return (new cljs.core.LazySeq(null,(function (){
var s__48958__$1 = s__48958;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48958__$1);
if(temp__5753__auto__){
var s__48958__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48958__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48958__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48960 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48959 = (0);
while(true){
if((i__48959 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__48959);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k)))){
cljs.core.chunk_append(b__48960,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__48964 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__48959,s__48958__$1,k,c__4650__auto__,size__4651__auto__,b__48960,s__48958__$2,temp__5753__auto__,earliest_row,unique_keys){
return (function (p1__48952_SHARP_){
return (!((p1__48952_SHARP_ == null)));
});})(i__48959,s__48958__$1,k,c__4650__auto__,size__4651__auto__,b__48960,s__48958__$2,temp__5753__auto__,earliest_row,unique_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(k,rows));
return (aggregation_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation_fn.cljs$core$IFn$_invoke$arity$1(G__48964) : aggregation_fn.call(null,G__48964));
})()], null));

var G__49047 = (i__48959 + (1));
i__48959 = G__49047;
continue;
} else {
var G__49048 = (i__48959 + (1));
i__48959 = G__49048;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48960),app$csv_data_processing$combine_rows_$_iter__48957(cljs.core.chunk_rest(s__48958__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48960),null);
}
} else {
var k = cljs.core.first(s__48958__$2);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__48965 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__48958__$1,k,s__48958__$2,temp__5753__auto__,earliest_row,unique_keys){
return (function (p1__48952_SHARP_){
return (!((p1__48952_SHARP_ == null)));
});})(s__48958__$1,k,s__48958__$2,temp__5753__auto__,earliest_row,unique_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(k,rows));
return (aggregation_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation_fn.cljs$core$IFn$_invoke$arity$1(G__48965) : aggregation_fn.call(null,G__48965));
})()], null),app$csv_data_processing$combine_rows_$_iter__48957(cljs.core.rest(s__48958__$2)));
} else {
var G__49049 = cljs.core.rest(s__48958__$2);
s__48958__$1 = G__49049;
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
return iter__4652__auto__(unique_keys);
})()),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(earliest_row)),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(earliest_row));
});
app.csv_data_processing.combine_rows(app.math.average,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(20),new cljs.core.Keyword(null,"b","b",1482224470),(40)], null)], null));
/**
 * Merges data points in the input together if they fall inside the same time
 *   window. The merged data point will use the earliest timestamp from all the points
 *   in the same window.
 */
app.csv_data_processing.aggregate_data = (function app$csv_data_processing$aggregate_data(rows,period_type,aggregation_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$csv_data_processing$aggregate_data_$_iter__48973(s__48974){
return (new cljs.core.LazySeq(null,(function (){
var s__48974__$1 = s__48974;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48974__$1);
if(temp__5753__auto__){
var s__48974__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48974__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48974__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48976 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48975 = (0);
while(true){
if((i__48975 < size__4651__auto__)){
var vec__48980 = cljs.core._nth(c__4650__auto__,i__48975);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(0),null);
var grouped_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48980,(1),null);
cljs.core.chunk_append(b__48976,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,app.csv_data_processing.combine_rows(aggregation_fn,grouped_rows)], null));

var G__49062 = (i__48975 + (1));
i__48975 = G__49062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48976),app$csv_data_processing$aggregate_data_$_iter__48973(cljs.core.chunk_rest(s__48974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48976),null);
}
} else {
var vec__48983 = cljs.core.first(s__48974__$2);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(0),null);
var grouped_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,app.csv_data_processing.combine_rows(aggregation_fn,grouped_rows)], null),app$csv_data_processing$aggregate_data_$_iter__48973(cljs.core.rest(s__48974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(app.time.group_by_period(rows,period_type));
})());
});

//# sourceMappingURL=app.csv_data_processing.js.map
