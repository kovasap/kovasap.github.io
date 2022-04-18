goog.provide('app.ui');
app.ui.px_per_character = (13);
/**
 * Gives a rough estimate for the pixel width of a string.
 */
app.ui.get_rough_px_width = (function app$ui$get_rough_px_width(string){
return (app.ui.px_per_character * cljs.core.count(string));
});
/**
 * Generates a react-data-grid column 
 *   https://github.com/adazzle/react-data-grid/blob/929911c506919e96bd12e48ea5de68ec9511ca10/src/types.ts#L7
 *   
 *   '--' substrings in the input key are converted to newlines.
 */
app.ui.make_datagrid_column = (function app$ui$make_datagrid_column(k){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/\-\-/);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"name","name",1843675177),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"20px"], null)], null)], null),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)))))),new cljs.core.Keyword(null,"sortable","sortable",2109633621),true,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.get_rough_px_width,lines))], null);
});
app.ui.maps_to_datagrid = (function app$ui$maps_to_datagrid(var_args){
var args__4870__auto__ = [];
var len__4864__auto___65672 = arguments.length;
var i__4865__auto___65673 = (0);
while(true){
if((i__4865__auto___65673 < len__4864__auto___65672)){
args__4870__auto__.push((arguments[i__4865__auto___65673]));

var G__65676 = (i__4865__auto___65673 + (1));
i__4865__auto___65673 = G__65676;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic = (function (maps,p__65526){
var map__65527 = p__65526;
var map__65527__$1 = cljs.core.__destructure_map(map__65527);
var custom_make_datagrid_column = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65527__$1,new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
var sorted_rows = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(maps);
var sort_columns = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columnKey","columnKey",-249078693),"input",new cljs.core.Keyword(null,"direction","direction",-633359395),"ASC"], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_grid.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65487_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.ui.make_datagrid_column(p1__65487_SHARP_),(custom_make_datagrid_column.cljs$core$IFn$_invoke$arity$1 ? custom_make_datagrid_column.cljs$core$IFn$_invoke$arity$1(p1__65487_SHARP_) : custom_make_datagrid_column.call(null,p1__65487_SHARP_))], 0));
}),cljs.core.keys(cljs.core.first(maps)))),new cljs.core.Keyword(null,"headerRowHeight","headerRowHeight",1743681247),(60),new cljs.core.Keyword(null,"defaultColumnOptions","defaultColumnOptions",1242354158),({"sortable": true, "resizable": true}),new cljs.core.Keyword(null,"sortColumns","sortColumns",627094962),cljs.core.clj__GT_js(cljs.core.deref(sort_columns)),new cljs.core.Keyword(null,"onSortColumnsChange","onSortColumnsChange",-430127280),(function (newSortColumns){
var map__65535 = cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(newSortColumns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var map__65535__$1 = cljs.core.__destructure_map(map__65535);
var columnKey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"columnKey","columnKey",-249078693));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65535__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sorted_rows,(function (p1__65500_SHARP_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (m1,m2){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columnKey,m1);
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columnKey,m2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"ASC")){
return (v1 < v2);
} else {
return (v1 > v2);
}
}),p1__65500_SHARP_);
}));
}),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.clj__GT_js(cljs.core.deref(sorted_rows))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.csv.download_as_csv(maps,"data.csv");
})], null),"Download as CSV"], null)], null);
}));

(app.ui.maps_to_datagrid.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.ui.maps_to_datagrid.cljs$lang$applyTo = (function (seq65506){
var G__65508 = cljs.core.first(seq65506);
var seq65506__$1 = cljs.core.next(seq65506);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65508,seq65506__$1);
}));

app.ui.maps_to_datagrid(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test","test",577538877),"v1",new cljs.core.Keyword(null,"test2","test2",1460100180),"v2"], null)], null));
/**
 * Converts a given value into something displayable by an html tabl.
 */
app.ui.value_to_str = (function app$ui$value_to_str(value){
if(cljs.core.map_QMARK_(value)){
return "{...}";
} else {
return value;

}
});
app.ui.map_to_sorted_pairs = (function app$ui$map_to_sorted_pairs(m){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (pair){
var k = cljs.core.first(pair);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"input","input",556931961))){
return "AAAAA";
} else {
return cljs.core.name(k);
}
}),cljs.core.seq(m));
});
/**
 * Converts collection of maps like
 *   [{:col1 val1 :col2 val2} {:col1 val3 :col2 val4}]
 *   to an HTML table.
 *   
 *   See https://stackoverflow.com/a/33458370 for ^{:key} map explanation.
 *   
 */
app.ui.maps_to_html = (function app$ui$maps_to_html(maps){
var sorted_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.map_to_sorted_pairs,maps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__65576(s__65577){
return (new cljs.core.LazySeq(null,(function (){
var s__65577__$1 = s__65577;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65577__$1);
if(temp__5753__auto__){
var s__65577__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65577__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65577__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65579 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65578 = (0);
while(true){
if((i__65578 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__65578);
cljs.core.chunk_append(b__65579,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null));

var G__65689 = (i__65578 + (1));
i__65578 = G__65689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65579),app$ui$maps_to_html_$_iter__65576(cljs.core.chunk_rest(s__65577__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65579),null);
}
} else {
var k = cljs.core.first(s__65577__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null),app$ui$maps_to_html_$_iter__65576(cljs.core.rest(s__65577__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.first(sorted_pairs)));
})())], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__65600(s__65601){
return (new cljs.core.LazySeq(null,(function (){
var s__65601__$1 = s__65601;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65601__$1);
if(temp__5753__auto__){
var s__65601__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65601__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65601__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65603 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65602 = (0);
while(true){
if((i__65602 < size__4651__auto__)){
var pairs = cljs.core._nth(c__4650__auto__,i__65602);
cljs.core.chunk_append(b__65603,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (i__65602,pairs,c__4650__auto__,size__4651__auto__,b__65603,s__65601__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__65600_$_iter__65627(s__65628){
return (new cljs.core.LazySeq(null,((function (i__65602,pairs,c__4650__auto__,size__4651__auto__,b__65603,s__65601__$2,temp__5753__auto__,sorted_pairs){
return (function (){
var s__65628__$1 = s__65628;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__65628__$1);
if(temp__5753__auto____$1){
var s__65628__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65628__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__65628__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__65630 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__65629 = (0);
while(true){
if((i__65629 < size__4651__auto____$1)){
var r = cljs.core._nth(c__4650__auto____$1,i__65629);
cljs.core.chunk_append(b__65630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__65696 = (i__65629 + (1));
i__65629 = G__65696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65630),app$ui$maps_to_html_$_iter__65600_$_iter__65627(cljs.core.chunk_rest(s__65628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65630),null);
}
} else {
var r = cljs.core.first(s__65628__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__65600_$_iter__65627(cljs.core.rest(s__65628__$2)));
}
} else {
return null;
}
break;
}
});})(i__65602,pairs,c__4650__auto__,size__4651__auto__,b__65603,s__65601__$2,temp__5753__auto__,sorted_pairs))
,null,null));
});})(i__65602,pairs,c__4650__auto__,size__4651__auto__,b__65603,s__65601__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()));

var G__65697 = (i__65602 + (1));
i__65602 = G__65697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65603),app$ui$maps_to_html_$_iter__65600(cljs.core.chunk_rest(s__65601__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65603),null);
}
} else {
var pairs = cljs.core.first(s__65601__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (pairs,s__65601__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__65600_$_iter__65637(s__65638){
return (new cljs.core.LazySeq(null,(function (){
var s__65638__$1 = s__65638;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__65638__$1);
if(temp__5753__auto____$1){
var s__65638__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__65638__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__65638__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__65640 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__65639 = (0);
while(true){
if((i__65639 < size__4651__auto__)){
var r = cljs.core._nth(c__4650__auto__,i__65639);
cljs.core.chunk_append(b__65640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__65703 = (i__65639 + (1));
i__65639 = G__65703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65640),app$ui$maps_to_html_$_iter__65600_$_iter__65637(cljs.core.chunk_rest(s__65638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65640),null);
}
} else {
var r = cljs.core.first(s__65638__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__65600_$_iter__65637(cljs.core.rest(s__65638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pairs,s__65601__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()),app$ui$maps_to_html_$_iter__65600(cljs.core.rest(s__65601__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sorted_pairs);
})())], null);
});
/**
 * Adds a clickable hide button to the component.
 * 
 *   I would use a details/summary html element, but they don't seem to play
 *   nicely with react/reagent :(.
 *   
 *   Can be used like this:
 *   [hidable component-to-hide]
 */
app.ui.hideable = (function app$ui$hideable(_){
var hidden = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(hidden,cljs.core.not(cljs.core.deref(hidden)));
})], null),"Click to hide/show"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref(hidden))?"none":"block")], null)], null),component], null)], null);
});
});
/**
 * Wraps a component in a function that only shows and renders it when an
 *   element is hovered.
 * 
 *   Original inspiration:
 *   https://www.reddit.com/r/Clojure/comments/sihk4b/comment/hv8xrh6/
 *   
 */
app.ui.hover_to_render = (function app$ui$hover_to_render(_){
var hidden = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (hoverable,hidable){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (){
return cljs.core.reset_BANG_(hidden,false);
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (){
return cljs.core.reset_BANG_(hidden,true);
})], null),hoverable], null),(cljs.core.truth_(cljs.core.deref(hidden))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100)], null)], null),hidable], null))], null);
});
});

//# sourceMappingURL=app.ui.js.map
