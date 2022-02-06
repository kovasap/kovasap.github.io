goog.provide('app.ui');
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
cljs.spec.alpha.def_impl(new cljs.core.Symbol("app.ui","maps-to-html","app.ui/maps-to-html",-1954232442,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257)),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maps","maps",-1711561134)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),cljs.core.map_QMARK_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__62269){
return cljs.core.coll_QMARK_(G__62269);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null),null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"maps","maps",-1711561134),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null),new cljs.core.Keyword("app.specs","hiccup","app.specs/hiccup",787155257),null,null,null));

/**
 * Converts collection of maps like
 *   [{:col1 val1 :col2 val2} {:col1 val3 :col2 val4}]
 *   to an HTML table.
 *   
 *   See https://stackoverflow.com/a/33458370 for ^{:key} map explanation.
 *   
 * @type {function(!cljs.core.ICollection): *}
 */
app.ui.maps_to_html = (function app$ui$maps_to_html(maps){
var sorted_pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.ui.map_to_sorted_pairs,maps);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__62270(s__62271){
return (new cljs.core.LazySeq(null,(function (){
var s__62271__$1 = s__62271;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62271__$1);
if(temp__5753__auto__){
var s__62271__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62271__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62271__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62273 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62272 = (0);
while(true){
if((i__62272 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__62272);
cljs.core.chunk_append(b__62273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null));

var G__62338 = (i__62272 + (1));
i__62272 = G__62338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62273),app$ui$maps_to_html_$_iter__62270(cljs.core.chunk_rest(s__62271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62273),null);
}
} else {
var k = cljs.core.first(s__62271__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),k], null),app$ui$maps_to_html_$_iter__62270(cljs.core.rest(s__62271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.first(sorted_pairs)));
})())], null),(function (){var iter__4652__auto__ = (function app$ui$maps_to_html_$_iter__62275(s__62276){
return (new cljs.core.LazySeq(null,(function (){
var s__62276__$1 = s__62276;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62276__$1);
if(temp__5753__auto__){
var s__62276__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62276__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62276__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62278 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62277 = (0);
while(true){
if((i__62277 < size__4651__auto__)){
var pairs = cljs.core._nth(c__4650__auto__,i__62277);
cljs.core.chunk_append(b__62278,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (i__62277,pairs,c__4650__auto__,size__4651__auto__,b__62278,s__62276__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__62275_$_iter__62282(s__62283){
return (new cljs.core.LazySeq(null,((function (i__62277,pairs,c__4650__auto__,size__4651__auto__,b__62278,s__62276__$2,temp__5753__auto__,sorted_pairs){
return (function (){
var s__62283__$1 = s__62283;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__62283__$1);
if(temp__5753__auto____$1){
var s__62283__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62283__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__62283__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__62285 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__62284 = (0);
while(true){
if((i__62284 < size__4651__auto____$1)){
var r = cljs.core._nth(c__4650__auto____$1,i__62284);
cljs.core.chunk_append(b__62285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__62354 = (i__62284 + (1));
i__62284 = G__62354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62285),app$ui$maps_to_html_$_iter__62275_$_iter__62282(cljs.core.chunk_rest(s__62283__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62285),null);
}
} else {
var r = cljs.core.first(s__62283__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__62275_$_iter__62282(cljs.core.rest(s__62283__$2)));
}
} else {
return null;
}
break;
}
});})(i__62277,pairs,c__4650__auto__,size__4651__auto__,b__62278,s__62276__$2,temp__5753__auto__,sorted_pairs))
,null,null));
});})(i__62277,pairs,c__4650__auto__,size__4651__auto__,b__62278,s__62276__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()));

var G__62355 = (i__62277 + (1));
i__62277 = G__62355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62278),app$ui$maps_to_html_$_iter__62275(cljs.core.chunk_rest(s__62276__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62278),null);
}
} else {
var pairs = cljs.core.first(s__62276__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__4652__auto__ = ((function (pairs,s__62276__$2,temp__5753__auto__,sorted_pairs){
return (function app$ui$maps_to_html_$_iter__62275_$_iter__62293(s__62294){
return (new cljs.core.LazySeq(null,(function (){
var s__62294__$1 = s__62294;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__62294__$1);
if(temp__5753__auto____$1){
var s__62294__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62294__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62294__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62296 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62295 = (0);
while(true){
if((i__62295 < size__4651__auto__)){
var r = cljs.core._nth(c__4650__auto__,i__62295);
cljs.core.chunk_append(b__62296,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null));

var G__62359 = (i__62295 + (1));
i__62295 = G__62359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62296),app$ui$maps_to_html_$_iter__62275_$_iter__62293(cljs.core.chunk_rest(s__62294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62296),null);
}
} else {
var r = cljs.core.first(s__62294__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),app.ui.value_to_str(r)], null),app$ui$maps_to_html_$_iter__62275_$_iter__62293(cljs.core.rest(s__62294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(pairs,s__62276__$2,temp__5753__auto__,sorted_pairs))
;
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.peek,pairs));
})()),app$ui$maps_to_html_$_iter__62275(cljs.core.rest(s__62276__$2)));
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
var map__62301 = cell;
var map__62301__$1 = cljs.core.__destructure_map(map__62301);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62301__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
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
var map__62307 = render_info;
var map__62307__$1 = cljs.core.__destructure_map(map__62307);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62307__$1,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.identity);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__62307__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (_){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__62309_SHARP_,p2__62308_SHARP_){
var r = cljs.core.compare(cljs.core.first(p2__62308_SHARP_),cljs.core.second(p2__62308_SHARP_));
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
var column = (function (){var G__62321 = cljs.core.first(sort);
return (column_model.cljs$core$IFn$_invoke$arity$1 ? column_model.cljs$core$IFn$_invoke$arity$1(G__62321) : column_model.call(null,G__62321));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function app$ui$get_column_model_$_iter__62322(s__62323){
return (new cljs.core.LazySeq(null,(function (){
var s__62323__$1 = s__62323;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__62323__$1);
if(temp__5753__auto__){
var s__62323__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__62323__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__62323__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__62325 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__62324 = (0);
while(true){
if((i__62324 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__62324);
cljs.core.chunk_append(b__62325,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"header","header",119441134),cljs.core.name(k),new cljs.core.Keyword(null,"key","key",-1516042587),k], null));

var G__62403 = (i__62324 + (1));
i__62324 = G__62403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62325),app$ui$get_column_model_$_iter__62322(cljs.core.chunk_rest(s__62323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62325),null);
}
} else {
var k = cljs.core.first(s__62323__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),new cljs.core.Keyword(null,"header","header",119441134),cljs.core.name(k),new cljs.core.Keyword(null,"key","key",-1516042587),k], null),app$ui$get_column_model_$_iter__62322(cljs.core.rest(s__62323__$2)));
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
