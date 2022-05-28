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
var len__4864__auto___48357 = arguments.length;
var i__4865__auto___48358 = (0);
while(true){
if((i__4865__auto___48358 < len__4864__auto___48357)){
args__4870__auto__.push((arguments[i__4865__auto___48358]));

var G__48359 = (i__4865__auto___48358 + (1));
i__4865__auto___48358 = G__48359;
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
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq48330){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48330));
}));

app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48331_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48331_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__48331_SHARP_)));
}),data);
});
app.csv_data_processing.not_NaN = (function app$csv_data_processing$not_NaN(v){
return (!((((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)))));
});
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
var iter__4652__auto__ = (function app$csv_data_processing$floatify_data_$_iter__48332(s__48333){
return (new cljs.core.LazySeq(null,(function (){
var s__48333__$1 = s__48333;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__48333__$1);
if(temp__5753__auto__){
var s__48333__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48333__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48333__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48335 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48334 = (0);
while(true){
if((i__48334 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__48334);
cljs.core.chunk_append(b__48335,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__48334,row,c__4650__auto__,size__4651__auto__,b__48335,s__48333__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48336(s__48337){
return (new cljs.core.LazySeq(null,((function (i__48334,row,c__4650__auto__,size__4651__auto__,b__48335,s__48333__$2,temp__5753__auto__){
return (function (){
var s__48337__$1 = s__48337;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48337__$1);
if(temp__5753__auto____$1){
var s__48337__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48337__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__48337__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__48339 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__48338 = (0);
while(true){
if((i__48338 < size__4651__auto____$1)){
var vec__48340 = cljs.core._nth(c__4650__auto____$1,i__48338);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48340,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__48339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__48361 = (i__48338 + (1));
i__48338 = G__48361;
continue;
} else {
var G__48362 = (i__48338 + (1));
i__48338 = G__48362;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48339),app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48336(cljs.core.chunk_rest(s__48337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48339),null);
}
} else {
var vec__48343 = cljs.core.first(s__48337__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48343,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48336(cljs.core.rest(s__48337__$2)));
} else {
var G__48363 = cljs.core.rest(s__48337__$2);
s__48337__$1 = G__48363;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__48334,row,c__4650__auto__,size__4651__auto__,b__48335,s__48333__$2,temp__5753__auto__))
,null,null));
});})(i__48334,row,c__4650__auto__,size__4651__auto__,b__48335,s__48333__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()));

var G__48368 = (i__48334 + (1));
i__48334 = G__48368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48335),app$csv_data_processing$floatify_data_$_iter__48332(cljs.core.chunk_rest(s__48333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48335),null);
}
} else {
var row = cljs.core.first(s__48333__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (row,s__48333__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48346(s__48347){
return (new cljs.core.LazySeq(null,(function (){
var s__48347__$1 = s__48347;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__48347__$1);
if(temp__5753__auto____$1){
var s__48347__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48347__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48347__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48349 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48348 = (0);
while(true){
if((i__48348 < size__4651__auto__)){
var vec__48350 = cljs.core._nth(c__4650__auto__,i__48348);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48350,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__48349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__48380 = (i__48348 + (1));
i__48348 = G__48380;
continue;
} else {
var G__48381 = (i__48348 + (1));
i__48348 = G__48381;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48349),app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48346(cljs.core.chunk_rest(s__48347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48349),null);
}
} else {
var vec__48353 = cljs.core.first(s__48347__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48353,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__48332_$_iter__48346(cljs.core.rest(s__48347__$2)));
} else {
var G__48382 = cljs.core.rest(s__48347__$2);
s__48347__$1 = G__48382;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__48333__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()),app$csv_data_processing$floatify_data_$_iter__48332(cljs.core.rest(s__48333__$2)));
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
app.csv_data_processing.process_csv_data = (function app$csv_data_processing$process_csv_data(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48389 = arguments.length;
var i__4865__auto___48390 = (0);
while(true){
if((i__4865__auto___48390 < len__4864__auto___48389)){
args__4870__auto__.push((arguments[i__4865__auto___48390]));

var G__48391 = (i__4865__auto___48390 + (1));
i__4865__auto___48390 = G__48391;
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
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq48356){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48356));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"100",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null)], 0));

//# sourceMappingURL=app.csv_data_processing.js.map
