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
var len__4864__auto___53808 = arguments.length;
var i__4865__auto___53809 = (0);
while(true){
if((i__4865__auto___53809 < len__4864__auto___53808)){
args__4870__auto__.push((arguments[i__4865__auto___53809]));

var G__53810 = (i__4865__auto___53809 + (1));
i__4865__auto___53809 = G__53810;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(app.ui.maps_to_datagrid.cljs$core$IFn$_invoke$arity$variadic = (function (maps,p__53474){
var map__53476 = p__53474;
var map__53476__$1 = cljs.core.__destructure_map(map__53476);
var custom_make_datagrid_column = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53476__$1,new cljs.core.Keyword(null,"custom-make-datagrid-column","custom-make-datagrid-column",1791443794),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
var sorted_rows = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(maps);
var sort_columns = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"columnKey","columnKey",-249078693),"input",new cljs.core.Keyword(null,"direction","direction",-633359395),"ASC"], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_data_grid.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.clj__GT_js(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53462_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.ui.make_datagrid_column(p1__53462_SHARP_),(custom_make_datagrid_column.cljs$core$IFn$_invoke$arity$1 ? custom_make_datagrid_column.cljs$core$IFn$_invoke$arity$1(p1__53462_SHARP_) : custom_make_datagrid_column.call(null,p1__53462_SHARP_))], 0));
}),cljs.core.keys(cljs.core.first(maps)))),new cljs.core.Keyword(null,"headerRowHeight","headerRowHeight",1743681247),(60),new cljs.core.Keyword(null,"defaultColumnOptions","defaultColumnOptions",1242354158),({"sortable": true, "resizable": true}),new cljs.core.Keyword(null,"sortColumns","sortColumns",627094962),cljs.core.clj__GT_js(cljs.core.deref(sort_columns)),new cljs.core.Keyword(null,"onSortColumnsChange","onSortColumnsChange",-430127280),(function (newSortColumns){
var map__53559 = cljs.core.first(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(newSortColumns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var map__53559__$1 = cljs.core.__destructure_map(map__53559);
var columnKey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"columnKey","columnKey",-249078693));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53559__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sorted_rows,(function (p1__53466_SHARP_){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (m1,m2){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columnKey,m1);
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columnKey,m2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"ASC")){
return (v1 < v2);
} else {
return (v1 > v2);
}
}),p1__53466_SHARP_);
}));
}),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.clj__GT_js(cljs.core.deref(sorted_rows))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.csv.download_as_csv(maps,"data.csv");
})], null),"Download as CSV"], null)], null);
}));

(app.ui.maps_to_datagrid.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.ui.maps_to_datagrid.cljs$lang$applyTo = (function (seq53467){
var G__53468 = cljs.core.first(seq53467);
var seq53467__$1 = cljs.core.next(seq53467);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53468,seq53467__$1);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__53641(s__53642){
return (new cljs.core.LazySeq(null,(function (){
var s__53642__$1 = s__53642;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53642__$1);
if(temp__5753__auto__){
var s__53642__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53642__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53642__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53644 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53643 = (0);
while(true){
if((i__53643 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__53643);
cljs.core.chunk_append(b__53644,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null));

var G__53813 = (i__53643 + (1));
i__53643 = G__53813;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53644),app$ui$maps_to_html_$_iter__53641(cljs.core.chunk_rest(s__53642__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53644),null);
}
} else {
var k = cljs.core.first(s__53642__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null),app$ui$maps_to_html_$_iter__53641(cljs.core.rest(s__53642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.first(sorted_pairs)));
})())], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__53645(s__53646){
return (new cljs.core.LazySeq(null,(function (){
var s__53646__$1 = s__53646;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53646__$1);
if(temp__5753__auto__){
var s__53646__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53646__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53646__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53648 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53647 = (0);
while(true){
if((i__53647 < size__4651__auto__)){
var pairs = cljs.core._nth(c__4650__auto__,i__53647);
cljs.core.chunk_append(b__53648,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (i__53647,pairs,c__4650__auto__,size__4651__auto__,b__53648,s__53646__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__53645_$_iter__53649(s__53650){
return (new cljs.core.LazySeq(null,((function (i__53647,pairs,c__4650__auto__,size__4651__auto__,b__53648,s__53646__$2,temp__5753__auto__,sorted_pairs){
return (function (){
var s__53650__$1 = s__53650;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53650__$1);
if(temp__5753__auto____$1){
var s__53650__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53650__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__53650__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__53652 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__53651 = (0);
while(true){
if((i__53651 < size__4651__auto____$1)){
var r = cljs.core._nth(c__4650__auto____$1,i__53651);
cljs.core.chunk_append(b__53652,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__53817 = (i__53651 + (1));
i__53651 = G__53817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53652),app$ui$maps_to_html_$_iter__53645_$_iter__53649(cljs.core.chunk_rest(s__53650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53652),null);
}
} else {
var r = cljs.core.first(s__53650__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__53645_$_iter__53649(cljs.core.rest(s__53650__$2)));
}
} else {
return null;
}
break;
}
});})(i__53647,pairs,c__4650__auto__,size__4651__auto__,b__53648,s__53646__$2,temp__5753__auto__,sorted_pairs))
,null,null));
});})(i__53647,pairs,c__4650__auto__,size__4651__auto__,b__53648,s__53646__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()));

var G__53818 = (i__53647 + (1));
i__53647 = G__53818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53648),app$ui$maps_to_html_$_iter__53645(cljs.core.chunk_rest(s__53646__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53648),null);
}
} else {
var pairs = cljs.core.first(s__53646__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (pairs,s__53646__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__53645_$_iter__53734(s__53735){
return (new cljs.core.LazySeq(null,(function (){
var s__53735__$1 = s__53735;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53735__$1);
if(temp__5753__auto____$1){
var s__53735__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53735__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53735__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53737 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53736 = (0);
while(true){
if((i__53736 < size__4651__auto__)){
var r = cljs.core._nth(c__4650__auto__,i__53736);
cljs.core.chunk_append(b__53737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__53823 = (i__53736 + (1));
i__53736 = G__53823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53737),app$ui$maps_to_html_$_iter__53645_$_iter__53734(cljs.core.chunk_rest(s__53735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53737),null);
}
} else {
var r = cljs.core.first(s__53735__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__53645_$_iter__53734(cljs.core.rest(s__53735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pairs,s__53646__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()),app$ui$maps_to_html_$_iter__53645(cljs.core.rest(s__53646__$2)));
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
/**
 * Resolve the data within a row for a specific column
 */
app.ui.cell_data = (function app$ui$cell_data(row,cell){
var map__53746 = cell;
var map__53746__$1 = cljs.core.__destructure_map(map__53746);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53746__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53746__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var or__4253__auto__ = (function (){var and__4251__auto__ = path;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,path);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = expr;
if(cljs.core.truth_(and__4251__auto__)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(row) : expr.call(null,row));
} else {
return and__4251__auto__;
}
}
});
/**
 * Return the cell hiccup form for rendering.
 * - render-info the specific column from :column-model
 * - row the current row
 * - row-num the row number
 * - col-num the column number in model coordinates
 */
app.ui.cell_fn = (function app$ui$cell_fn(render_info,row,row_num,col_num){
var map__53747 = render_info;
var map__53747__$1 = cljs.core.__destructure_map(map__53747);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53747__$1,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.identity);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
var data = app.ui.cell_data(row,render_info);
var content = (format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(data) : format.call(null,data));
var attrs__$1 = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(data) : attrs.call(null,data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),attrs__$1,content], null);
});
/**
 * A comparator that works for the various types found in table structures.
 *   This is a limited implementation that expects the arguments to be of
 *   the same type. The :else case is to call compare, which will throw
 *   if the arguments are not comparable to each other or give undefined
 *   results otherwise.
 *   Both arguments can be a vector, in which case they must be of equal
 *   length and each element is compared in turn.
 */
app.ui.compare_vals = (function app$ui$compare_vals(x,y){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.vector_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53767_SHARP_,p2__53766_SHARP_){
var r = cljs.core.compare(cljs.core.first(p2__53766_SHARP_),cljs.core.second(p2__53766_SHARP_));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r,(0))){
return cljs.core.reduced(r);
} else {
return r;
}
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,x,y));
} else {
if(((((typeof x === 'number') && (typeof y === 'number'))) || (((((typeof x === 'string') && (typeof y === 'string'))) || (((cljs.core.boolean_QMARK_(x)) && (cljs.core.boolean_QMARK_(y)))))))){
return cljs.core.compare(x,y);
} else {
return cljs.core.compare(x,y);

}
}
});
/**
 * Generic sort function for tabular data. Sort rows using data resolved from
 *   the specified columns in the column model.
 */
app.ui.sort_fn = (function app$ui$sort_fn(rows,column_model,sorting){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (row_x,row_y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,sort){
var column = (function (){var G__53788 = cljs.core.first(sort);
return (column_model.cljs$core$IFn$_invoke$arity$1 ? column_model.cljs$core$IFn$_invoke$arity$1(G__53788) : column_model.call(null,G__53788));
})();
var direction = cljs.core.second(sort);
var cell_x = app.ui.cell_data(row_x,column);
var cell_y = app.ui.cell_data(row_y,column);
var compared = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?app.ui.compare_vals(cell_x,cell_y):app.ui.compare_vals(cell_y,cell_x));
if((compared === (0))){
return null;
} else {
return cljs.core.reduced(compared);
}
}),(0),sorting);
}),rows);
});
app.ui.get_column_model = (function app$ui$get_column_model(flattened_data){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function app$ui$get_column_model_$_iter__53792(s__53793){
return (new cljs.core.LazySeq(null,(function (){
var s__53793__$1 = s__53793;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53793__$1);
if(temp__5753__auto__){
var s__53793__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53793__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53793__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53795 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53794 = (0);
while(true){
if((i__53794 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__53794);
cljs.core.chunk_append(b__53795,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"header","header",119441134),cljs.core.name(k),new cljs.core.Keyword(null,"key","key",-1516042587),k], null));

var G__53824 = (i__53794 + (1));
i__53794 = G__53824;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53795),app$ui$get_column_model_$_iter__53792(cljs.core.chunk_rest(s__53793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53795),null);
}
} else {
var k = cljs.core.first(s__53793__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"header","header",119441134),cljs.core.name(k),new cljs.core.Keyword(null,"key","key",-1516042587),k], null),app$ui$get_column_model_$_iter__53792(cljs.core.rest(s__53793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.keys(cljs.core.first(flattened_data)));
})());
});
app.ui.reagent_table = (function app$ui$reagent_table(data_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_table.core.reagent_table,data_atom,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-model","column-model",1553156630),app.ui.get_column_model(cljs.core.deref(data_atom)),new cljs.core.Keyword(null,"render-cell","render-cell",-515359581),app.ui.cell_fn,new cljs.core.Keyword(null,"sort","sort",953465918),app.ui.sort_fn], null)], null);
});

//# sourceMappingURL=app.ui.js.map
