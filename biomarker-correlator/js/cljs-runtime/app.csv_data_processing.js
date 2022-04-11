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
var len__4864__auto___60244 = arguments.length;
var i__4865__auto___60250 = (0);
while(true){
if((i__4865__auto___60250 < len__4864__auto___60244)){
args__4870__auto__.push((arguments[i__4865__auto___60250]));

var G__60251 = (i__4865__auto___60250 + (1));
i__4865__auto___60250 = G__60251;
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
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq60108){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60108));
}));

app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60114_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60114_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__60114_SHARP_)));
}),data);
});
app.csv_data_processing.not_NaN = (function app$csv_data_processing$not_NaN(v){
return (!((((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)))));
});
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
var iter__4652__auto__ = (function app$csv_data_processing$floatify_data_$_iter__60115(s__60116){
return (new cljs.core.LazySeq(null,(function (){
var s__60116__$1 = s__60116;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60116__$1);
if(temp__5753__auto__){
var s__60116__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60116__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60116__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60118 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60117 = (0);
while(true){
if((i__60117 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__60117);
cljs.core.chunk_append(b__60118,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__60117,row,c__4650__auto__,size__4651__auto__,b__60118,s__60116__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60119(s__60120){
return (new cljs.core.LazySeq(null,((function (i__60117,row,c__4650__auto__,size__4651__auto__,b__60118,s__60116__$2,temp__5753__auto__){
return (function (){
var s__60120__$1 = s__60120;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60120__$1);
if(temp__5753__auto____$1){
var s__60120__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60120__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__60120__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__60122 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__60121 = (0);
while(true){
if((i__60121 < size__4651__auto____$1)){
var vec__60123 = cljs.core._nth(c__4650__auto____$1,i__60121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60123,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__60122,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__60257 = (i__60121 + (1));
i__60121 = G__60257;
continue;
} else {
var G__60258 = (i__60121 + (1));
i__60121 = G__60258;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60122),app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60119(cljs.core.chunk_rest(s__60120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60122),null);
}
} else {
var vec__60126 = cljs.core.first(s__60120__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60126,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60119(cljs.core.rest(s__60120__$2)));
} else {
var G__60265 = cljs.core.rest(s__60120__$2);
s__60120__$1 = G__60265;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__60117,row,c__4650__auto__,size__4651__auto__,b__60118,s__60116__$2,temp__5753__auto__))
,null,null));
});})(i__60117,row,c__4650__auto__,size__4651__auto__,b__60118,s__60116__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()));

var G__60266 = (i__60117 + (1));
i__60117 = G__60266;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60118),app$csv_data_processing$floatify_data_$_iter__60115(cljs.core.chunk_rest(s__60116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60118),null);
}
} else {
var row = cljs.core.first(s__60116__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (row,s__60116__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60133(s__60134){
return (new cljs.core.LazySeq(null,(function (){
var s__60134__$1 = s__60134;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__60134__$1);
if(temp__5753__auto____$1){
var s__60134__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60134__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60134__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60136 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60135 = (0);
while(true){
if((i__60135 < size__4651__auto__)){
var vec__60141 = cljs.core._nth(c__4650__auto__,i__60135);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60141,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__60136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__60267 = (i__60135 + (1));
i__60135 = G__60267;
continue;
} else {
var G__60268 = (i__60135 + (1));
i__60135 = G__60268;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60136),app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60133(cljs.core.chunk_rest(s__60134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60136),null);
}
} else {
var vec__60144 = cljs.core.first(s__60134__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60144,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60144,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__60115_$_iter__60133(cljs.core.rest(s__60134__$2)));
} else {
var G__60269 = cljs.core.rest(s__60134__$2);
s__60134__$1 = G__60269;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__60116__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()),app$csv_data_processing$floatify_data_$_iter__60115(cljs.core.rest(s__60116__$2)));
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
var len__4864__auto___60273 = arguments.length;
var i__4865__auto___60274 = (0);
while(true){
if((i__4865__auto___60274 < len__4864__auto___60273)){
args__4870__auto__.push((arguments[i__4865__auto___60274]));

var G__60275 = (i__4865__auto___60274 + (1));
i__4865__auto___60274 = G__60275;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(app.csv_data_processing.get_all_data_validation_string.cljs$core$IFn$_invoke$arity$variadic = (function (sets_of_rows){
var headers = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60147_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),p1__60147_SHARP_);
}),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60148_SHARP_){
return cljs.core.keys(cljs.core.first(p1__60148_SHARP_));
}),sets_of_rows)));
var duplicate_headers = (function (){var iter__4652__auto__ = (function app$csv_data_processing$iter__60150(s__60151){
return (new cljs.core.LazySeq(null,(function (){
var s__60151__$1 = s__60151;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60151__$1);
if(temp__5753__auto__){
var s__60151__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60151__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60151__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60153 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60152 = (0);
while(true){
if((i__60152 < size__4651__auto__)){
var vec__60157 = cljs.core._nth(c__4650__auto__,i__60152);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60157,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60157,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__60153,id);

var G__60282 = (i__60152 + (1));
i__60152 = G__60282;
continue;
} else {
var G__60283 = (i__60152 + (1));
i__60152 = G__60283;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60153),app$csv_data_processing$iter__60150(cljs.core.chunk_rest(s__60151__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60153),null);
}
} else {
var vec__60163 = cljs.core.first(s__60151__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60163,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60163,(1),null);
if((freq > (1))){
return cljs.core.cons(id,app$csv_data_processing$iter__60150(cljs.core.rest(s__60151__$2)));
} else {
var G__60284 = cljs.core.rest(s__60151__$2);
s__60151__$1 = G__60284;
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
(app.csv_data_processing.get_all_data_validation_string.cljs$lang$applyTo = (function (seq60149){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60149));
}));

app.csv_data_processing.dups = (function app$csv_data_processing$dups(sequence){
var iter__4652__auto__ = (function app$csv_data_processing$dups_$_iter__60173(s__60174){
return (new cljs.core.LazySeq(null,(function (){
var s__60174__$1 = s__60174;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60174__$1);
if(temp__5753__auto__){
var s__60174__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60174__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60174__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60176 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60175 = (0);
while(true){
if((i__60175 < size__4651__auto__)){
var vec__60180 = cljs.core._nth(c__4650__auto__,i__60175);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60180,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__60176,element);

var G__60292 = (i__60175 + (1));
i__60175 = G__60292;
continue;
} else {
var G__60293 = (i__60175 + (1));
i__60175 = G__60293;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60176),app$csv_data_processing$dups_$_iter__60173(cljs.core.chunk_rest(s__60174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60176),null);
}
} else {
var vec__60185 = cljs.core.first(s__60174__$2);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60185,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60185,(1),null);
if((freq > (1))){
return cljs.core.cons(element,app$csv_data_processing$dups_$_iter__60173(cljs.core.rest(s__60174__$2)));
} else {
var G__60296 = cljs.core.rest(s__60174__$2);
s__60174__$1 = G__60296;
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
var len__4864__auto___60303 = arguments.length;
var i__4865__auto___60304 = (0);
while(true){
if((i__4865__auto___60304 < len__4864__auto___60303)){
args__4870__auto__.push((arguments[i__4865__auto___60304]));

var G__60305 = (i__4865__auto___60304 + (1));
i__4865__auto___60304 = G__60305;
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
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq60188){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60188));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"100",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null)], 0));
app.csv_data_processing.combine_rows = (function app$csv_data_processing$combine_rows(aggregation_fn,rows){
var earliest_row = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),rows));
var unique_keys = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,(function (){var iter__4652__auto__ = (function app$csv_data_processing$combine_rows_$_iter__60198(s__60199){
return (new cljs.core.LazySeq(null,(function (){
var s__60199__$1 = s__60199;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60199__$1);
if(temp__5753__auto__){
var s__60199__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60199__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60199__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60201 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60200 = (0);
while(true){
if((i__60200 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__60200);
cljs.core.chunk_append(b__60201,cljs.core.set(cljs.core.keys(row)));

var G__60309 = (i__60200 + (1));
i__60200 = G__60309;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60201),app$csv_data_processing$combine_rows_$_iter__60198(cljs.core.chunk_rest(s__60199__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60201),null);
}
} else {
var row = cljs.core.first(s__60199__$2);
return cljs.core.cons(cljs.core.set(cljs.core.keys(row)),app$csv_data_processing$combine_rows_$_iter__60198(cljs.core.rest(s__60199__$2)));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$csv_data_processing$combine_rows_$_iter__60205(s__60206){
return (new cljs.core.LazySeq(null,(function (){
var s__60206__$1 = s__60206;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60206__$1);
if(temp__5753__auto__){
var s__60206__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60206__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60206__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60208 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60207 = (0);
while(true){
if((i__60207 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__60207);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k)))){
cljs.core.chunk_append(b__60208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__60213 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__60207,s__60206__$1,k,c__4650__auto__,size__4651__auto__,b__60208,s__60206__$2,temp__5753__auto__,earliest_row,unique_keys){
return (function (p1__60194_SHARP_){
return (!((p1__60194_SHARP_ == null)));
});})(i__60207,s__60206__$1,k,c__4650__auto__,size__4651__auto__,b__60208,s__60206__$2,temp__5753__auto__,earliest_row,unique_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(k,rows));
return (aggregation_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation_fn.cljs$core$IFn$_invoke$arity$1(G__60213) : aggregation_fn.call(null,G__60213));
})()], null));

var G__60315 = (i__60207 + (1));
i__60207 = G__60315;
continue;
} else {
var G__60316 = (i__60207 + (1));
i__60207 = G__60316;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60208),app$csv_data_processing$combine_rows_$_iter__60205(cljs.core.chunk_rest(s__60206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60208),null);
}
} else {
var k = cljs.core.first(s__60206__$2);
if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),null], null), null),k)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__60220 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s__60206__$1,k,s__60206__$2,temp__5753__auto__,earliest_row,unique_keys){
return (function (p1__60194_SHARP_){
return (!((p1__60194_SHARP_ == null)));
});})(s__60206__$1,k,s__60206__$2,temp__5753__auto__,earliest_row,unique_keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(k,rows));
return (aggregation_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation_fn.cljs$core$IFn$_invoke$arity$1(G__60220) : aggregation_fn.call(null,G__60220));
})()], null),app$csv_data_processing$combine_rows_$_iter__60205(cljs.core.rest(s__60206__$2)));
} else {
var G__60318 = cljs.core.rest(s__60206__$2);
s__60206__$1 = G__60318;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$csv_data_processing$aggregate_data_$_iter__60222(s__60223){
return (new cljs.core.LazySeq(null,(function (){
var s__60223__$1 = s__60223;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__60223__$1);
if(temp__5753__auto__){
var s__60223__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60223__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__60223__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__60225 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__60224 = (0);
while(true){
if((i__60224 < size__4651__auto__)){
var vec__60226 = cljs.core._nth(c__4650__auto__,i__60224);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(0),null);
var grouped_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60226,(1),null);
cljs.core.chunk_append(b__60225,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,app.csv_data_processing.combine_rows(aggregation_fn,grouped_rows)], null));

var G__60319 = (i__60224 + (1));
i__60224 = G__60319;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60225),app$csv_data_processing$aggregate_data_$_iter__60222(cljs.core.chunk_rest(s__60223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60225),null);
}
} else {
var vec__60230 = cljs.core.first(s__60223__$2);
var period = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60230,(0),null);
var grouped_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60230,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,app.csv_data_processing.combine_rows(aggregation_fn,grouped_rows)], null),app$csv_data_processing$aggregate_data_$_iter__60222(cljs.core.rest(s__60223__$2)));
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
