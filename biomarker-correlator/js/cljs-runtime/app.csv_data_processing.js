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
var len__4864__auto___63729 = arguments.length;
var i__4865__auto___63730 = (0);
while(true){
if((i__4865__auto___63730 < len__4864__auto___63729)){
args__4870__auto__.push((arguments[i__4865__auto___63730]));

var G__63731 = (i__4865__auto___63730 + (1));
i__4865__auto___63730 = G__63731;
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
(app.csv_data_processing.merge_rows_using_dates.cljs$lang$applyTo = (function (seq63702){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63702));
}));

app.csv_data_processing.add_timestamps = (function app$csv_data_processing$add_timestamps(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63703_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),app.time.date_to_timestamp(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__63703_SHARP_)));
}),data);
});
app.csv_data_processing.not_NaN = (function app$csv_data_processing$not_NaN(v){
return (!((((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)))));
});
app.csv_data_processing.floatify_data = (function app$csv_data_processing$floatify_data(data){
var iter__4652__auto__ = (function app$csv_data_processing$floatify_data_$_iter__63704(s__63705){
return (new cljs.core.LazySeq(null,(function (){
var s__63705__$1 = s__63705;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63705__$1);
if(temp__5753__auto__){
var s__63705__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__63705__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__63705__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__63707 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__63706 = (0);
while(true){
if((i__63706 < size__4651__auto__)){
var row = cljs.core._nth(c__4650__auto__,i__63706);
cljs.core.chunk_append(b__63707,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__63706,row,c__4650__auto__,size__4651__auto__,b__63707,s__63705__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63708(s__63709){
return (new cljs.core.LazySeq(null,((function (i__63706,row,c__4650__auto__,size__4651__auto__,b__63707,s__63705__$2,temp__5753__auto__){
return (function (){
var s__63709__$1 = s__63709;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63709__$1);
if(temp__5753__auto____$1){
var s__63709__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63709__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__63709__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__63711 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__63710 = (0);
while(true){
if((i__63710 < size__4651__auto____$1)){
var vec__63712 = cljs.core._nth(c__4650__auto____$1,i__63710);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63712,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63712,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__63711,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__63732 = (i__63710 + (1));
i__63710 = G__63732;
continue;
} else {
var G__63733 = (i__63710 + (1));
i__63710 = G__63733;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63711),app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63708(cljs.core.chunk_rest(s__63709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63711),null);
}
} else {
var vec__63715 = cljs.core.first(s__63709__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63715,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63715,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63708(cljs.core.rest(s__63709__$2)));
} else {
var G__63734 = cljs.core.rest(s__63709__$2);
s__63709__$1 = G__63734;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__63706,row,c__4650__auto__,size__4651__auto__,b__63707,s__63705__$2,temp__5753__auto__))
,null,null));
});})(i__63706,row,c__4650__auto__,size__4651__auto__,b__63707,s__63705__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()));

var G__63735 = (i__63706 + (1));
i__63706 = G__63735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63707),app$csv_data_processing$floatify_data_$_iter__63704(cljs.core.chunk_rest(s__63705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63707),null);
}
} else {
var row = cljs.core.first(s__63705__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (row,s__63705__$2,temp__5753__auto__){
return (function app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63718(s__63719){
return (new cljs.core.LazySeq(null,(function (){
var s__63719__$1 = s__63719;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63719__$1);
if(temp__5753__auto____$1){
var s__63719__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63719__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__63719__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__63721 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__63720 = (0);
while(true){
if((i__63720 < size__4651__auto__)){
var vec__63722 = cljs.core._nth(c__4650__auto__,i__63720);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63722,(1),null);
if(app.csv_data_processing.not_NaN(v)){
cljs.core.chunk_append(b__63721,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null));

var G__63740 = (i__63720 + (1));
i__63720 = G__63740;
continue;
} else {
var G__63741 = (i__63720 + (1));
i__63720 = G__63741;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63721),app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63718(cljs.core.chunk_rest(s__63719__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63721),null);
}
} else {
var vec__63725 = cljs.core.first(s__63719__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63725,(1),null);
if(app.csv_data_processing.not_NaN(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"date","date",-1463434462)))?v:parseFloat(v))], null),app$csv_data_processing$floatify_data_$_iter__63704_$_iter__63718(cljs.core.rest(s__63719__$2)));
} else {
var G__63742 = cljs.core.rest(s__63719__$2);
s__63719__$1 = G__63742;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(row,s__63705__$2,temp__5753__auto__))
;
return iter__4652__auto__(row);
})()),app$csv_data_processing$floatify_data_$_iter__63704(cljs.core.rest(s__63705__$2)));
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
var len__4864__auto___63747 = arguments.length;
var i__4865__auto___63748 = (0);
while(true){
if((i__4865__auto___63748 < len__4864__auto___63747)){
args__4870__auto__.push((arguments[i__4865__auto___63748]));

var G__63750 = (i__4865__auto___63748 + (1));
i__4865__auto___63748 = G__63750;
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
(app.csv_data_processing.process_csv_data.cljs$lang$applyTo = (function (seq63728){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq63728));
}));

app.csv_data_processing.process_csv_data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/2/00"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),"100",new cljs.core.Keyword(null,"b","b",1482224470),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"100",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"c","c",-1763192079),"",new cljs.core.Keyword(null,"d","d",1972142424),"20",new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/10"], null)], null)], 0));

//# sourceMappingURL=app.csv_data_processing.js.map
