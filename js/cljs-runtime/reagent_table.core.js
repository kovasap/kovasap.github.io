goog.provide('reagent_table.core');
reagent_table.core.drag_move_fn = (function reagent_table$core$drag_move_fn(on_drag){
return (function (evt){
evt.preventDefault();

var G__55947 = evt.clientX;
var G__55948 = evt.clientY;
return (on_drag.cljs$core$IFn$_invoke$arity$2 ? on_drag.cljs$core$IFn$_invoke$arity$2(G__55947,G__55948) : on_drag.call(null,G__55947,G__55948));
});
});
reagent_table.core.drag_end_fn = (function reagent_table$core$drag_end_fn(drag_move,drag_end){
return (function (evt){
goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,drag_move);

return goog.events.unlisten(window,goog.events.EventType.MOUSEUP,cljs.core.deref(drag_end));
});
});
reagent_table.core.dragging = (function reagent_table$core$dragging(on_drag){
var drag_move = reagent_table.core.drag_move_fn(on_drag);
var drag_end_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var drag_end = reagent_table.core.drag_end_fn(drag_move,drag_end_atom);
cljs.core.reset_BANG_(drag_end_atom,drag_end);

goog.events.listen(window,goog.events.EventType.MOUSEMOVE,drag_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,drag_end);
});
/**
 * Handler for scrolling events from the table's containing div.
 *   Keep the position of the headers apparently fixed while the div
 *   is scrolled. Moves <thead>. May be needs to move all <th> for IE...
 */
reagent_table.core.table_scroll = (function reagent_table$core$table_scroll(e){
var scroller = e.target;
var translate = ["translate(0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((scroller.scrollTop - (1))),"px)"].join('');
var all_th = scroller.querySelectorAll("th");
var thead = scroller.querySelector("thead");
return (thead.style.transform = translate);
});
reagent_table.core.scroll_to = (function reagent_table$core$scroll_to(event,direction,page){
var scroller = event.currentTarget;
var cur = scroller.scrollTop;
var view_height = scroller.clientHeight;
var cell = scroller.querySelector("td");
var scroll_dist = (cljs.core.truth_(page)?view_height:(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = cell;
if(cljs.core.truth_(and__4251__auto__)){
return cell.clientHeight;
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());
event.preventDefault();

return (scroller.scrollTop = (cur + (scroll_dist * direction)));
});
reagent_table.core.wheel_scroll = (function reagent_table$core$wheel_scroll(e){
return reagent_table.core.scroll_to(e,(((e.deltaY > (0)))?(1):(-1)),false);
});
reagent_table.core.key_scroll = (function reagent_table$core$key_scroll(e){
var G__55968 = e.key;
switch (G__55968) {
case "ArrowUp":
return reagent_table.core.scroll_to(e,(-1),false);

break;
case "ArrowDown":
return reagent_table.core.scroll_to(e,(1),false);

break;
case "PageDown":
return reagent_table.core.scroll_to(e,(1),true);

break;
case "PageUp":
return reagent_table.core.scroll_to(e,(-1),true);

break;
case " ":
return reagent_table.core.scroll_to(e,(1),false);

break;
default:
return "default";

}
});
reagent_table.core.init_scrolling = (function reagent_table$core$init_scrolling(scroller){
var container = reagent.dom.dom_node(scroller);
container.addEventListener("scroll",reagent_table.core.table_scroll,false);

container.addEventListener("wheel",reagent_table.core.wheel_scroll,false);

return container.addEventListener("keydown",reagent_table.core.key_scroll,false);
});
/**
 * Recursively merge hash maps.
 */
reagent_table.core.recursive_merge = (function reagent_table$core$recursive_merge(a,b){
if(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(reagent_table.core.recursive_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
} else {
return b;
}
});
/**
 * Convert the given column in view coordinates to
 *   model coordinates.
 */
reagent_table.core.column_index_to_model = (function reagent_table$core$column_index_to_model(state_atom,view_col){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"col-index-to-model","col-index-to-model",-671105736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom)),view_col);
});
/**
 * Maintain the column-index-to-model mapping after
 *   view reordering. The arguments are the drag and drop
 *   columns, in view coordinates.
 */
reagent_table.core.reorder_column_index_to_model_BANG_ = (function reagent_table$core$reorder_column_index_to_model_BANG_(drag_col,drop_col,state_atom){
var cur = new cljs.core.Keyword(null,"col-index-to-model","col-index-to-model",-671105736).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var lower_bound = (function (){var x__4339__auto__ = drag_col;
var y__4340__auto__ = drop_col;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})();
var upper_bound = (function (){var x__4336__auto__ = drag_col;
var y__4337__auto__ = drop_col;
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})();
var direction = (((drag_col < drop_col))?new cljs.core.Keyword(null,"right","right",-452581833):new cljs.core.Keyword(null,"left","left",-399115937));
var moving_model = reagent_table.core.column_index_to_model(state_atom,drag_col);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"col-index-to-model","col-index-to-model",-671105736),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (view_col,model_col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_col,drop_col)){
return (cur.cljs$core$IFn$_invoke$arity$1 ? cur.cljs$core$IFn$_invoke$arity$1(drag_col) : cur.call(null,drag_col));
} else {
if((((view_col < lower_bound)) || ((view_col > upper_bound)))){
return (cur.cljs$core$IFn$_invoke$arity$1 ? cur.cljs$core$IFn$_invoke$arity$1(view_col) : cur.call(null,view_col));
} else {
if((((view_col >= lower_bound)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"right","right",-452581833))))){
var G__55981 = (view_col + (1));
return (cur.cljs$core$IFn$_invoke$arity$1 ? cur.cljs$core$IFn$_invoke$arity$1(G__55981) : cur.call(null,G__55981));
} else {
if((((view_col <= upper_bound)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"left","left",-399115937))))){
var G__55982 = (view_col - (1));
return (cur.cljs$core$IFn$_invoke$arity$1 ? cur.cljs$core$IFn$_invoke$arity$1(G__55982) : cur.call(null,G__55982));
} else {
return null;
}
}
}
}
}),cur)));
});
reagent_table.core.default_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),null], null)], null)], null);
reagent_table.core.resize_widget = (function reagent_table$core$resize_widget(cell_container){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"8px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"ew-resize",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__55983_SHARP_){
return p1__55983_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__55984_SHARP_){
var cell_node = reagent.dom.dom_node(cell_container);
var init_x = p1__55984_SHARP_.clientX;
var init_width = cell_node.clientWidth;
reagent_table.core.dragging((function (x,_){
return (cell_node["width"] = (init_width - (init_x - x)));
}));

return p1__55984_SHARP_.preventDefault();
})], null)], null);
});
/**
 * Maintain multiple sort columns each with individual directions. The
 *   column numbers are in model coordinates.
 * 
 *   A column is initially set to ascending order and toggled thereafter.
 *   If a column is not present in list it is appended or becomes the only
 *   element when 'append' is false.
 */
reagent_table.core.update_sort_columns_BANG_ = (function reagent_table$core$update_sort_columns_BANG_(model_col,state_atom,append){
var sorting = new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"sorting","sorting",622249690),((cljs.core.not(append))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [model_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sorting),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [model_col,new cljs.core.Keyword(null,"asc","asc",356854569)], null)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569))], null)], null):(function (){var sorting__$1 = sorting;
var found = false;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
var column = cljs.core.first(sorting__$1);
var this_col = cljs.core.first(column);
var this_dir = cljs.core.second(column);
if(cljs.core.truth_(column)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(model_col,this_col)){
var G__56090 = cljs.core.rest(sorting__$1);
var G__56091 = true;
var G__56092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [model_col,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_dir,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569))], null));
sorting__$1 = G__56090;
found = G__56091;
result = G__56092;
continue;
} else {
var G__56093 = cljs.core.rest(sorting__$1);
var G__56094 = found;
var G__56095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,column);
sorting__$1 = G__56093;
found = G__56094;
result = G__56095;
continue;
}
} else {
if(cljs.core.truth_(found)){
return result;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [model_col,new cljs.core.Keyword(null,"asc","asc",356854569)], null));
}
}
break;
}
})()));
});
/**
 * Return the sort direction for the specified column number, nil
 *   if the column is not currently sorted, or :none if the column is not
 *   sortable at all. Column number must be in model coordinates.
 */
reagent_table.core.is_sorting = (function reagent_table$core$is_sorting(sorting,render_info,model_col){
if(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(render_info) === false){
return new cljs.core.Keyword(null,"none","none",1333468478);
} else {
return cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55997_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__55997_SHARP_),model_col);
}),sorting)));
}
});
reagent_table.core.header_cell_fn = (function reagent_table$core$header_cell_fn(render_info,view_col,model_col,config,state_atom,data_atom){
var state = cljs.core.deref(state_atom);
var col_hidden = new cljs.core.Keyword(null,"col-hidden","col-hidden",1576736424).cljs$core$IFn$_invoke$arity$1(state);
var map__56009 = state;
var map__56009__$1 = cljs.core.__destructure_map(map__56009);
var draggable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56009__$1,new cljs.core.Keyword(null,"draggable","draggable",1676206163));
var sort_fn = new cljs.core.Keyword(null,"sort","sort",953465918).cljs$core$IFn$_invoke$arity$1(config);
var column_model = new cljs.core.Keyword(null,"column-model","column-model",1553156630).cljs$core$IFn$_invoke$arity$1(config);
var sortable = (!(new cljs.core.Keyword(null,"sortable","sortable",2109633621).cljs$core$IFn$_invoke$arity$1(render_info) === false));
var sort_click_fn = (function (append){
if(cljs.core.truth_(sort_fn)){
return cljs.core.reset_BANG_(data_atom,(function (){var G__56016 = cljs.core.deref(data_atom);
var G__56017 = column_model;
var G__56018 = new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(reagent_table.core.update_sort_columns_BANG_(model_col,state_atom,append));
return (sort_fn.cljs$core$IFn$_invoke$arity$3 ? sort_fn.cljs$core$IFn$_invoke$arity$3(G__56016,G__56017,G__56018) : sort_fn.call(null,G__56016,G__56017,G__56018));
})());
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),reagent_table.core.recursive_merge(new cljs.core.Keyword(null,"th","th",-545608566).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"draggable","draggable",1676206163),draggable,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__56001_SHARP_){
var G__56021_56103 = p1__56001_SHARP_.dataTransfer;
G__56021_56103.setData("text/plain","");


return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"col-reordering","col-reordering",-165014502),true);
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"col-hover","col-hover",-1561137880),view_col);
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (){
var col_hover = new cljs.core.Keyword(null,"col-hover","col-hover",-1561137880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom));
var col_sorting = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),new cljs.core.Keyword(null,"sorting","sorting",622249690)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_col,col_hover)){
} else {
reagent_table.core.reorder_column_index_to_model_BANG_(view_col,col_hover,state_atom);
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"col-hover","col-hover",-1561137880),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"col-reordering","col-reordering",-165014502),null], 0));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"style","style",-496642736)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(draggable)?"move":null),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_hidden,model_col))?"none":null)], null),(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"col-reordering","col-reordering",-165014502).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_col,new cljs.core.Keyword(null,"col-hover","col-hover",-1561137880).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),"6px solid #3366CC"], null):null)], 0))], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(50)], null)], null),new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(render_info)], null),(cljs.core.truth_((function (){var and__4251__auto__ = sort_fn;
if(cljs.core.truth_(and__4251__auto__)){
return sortable;
} else {
return and__4251__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"height","height",1025178622),"1.5em",new cljs.core.Keyword(null,"width","width",-384071477),"1.5em",new cljs.core.Keyword(null,"right","right",-452581833),"15px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__56003_SHARP_){
return sort_click_fn(p1__56003_SHARP_.ctrlKey);
})], null),(function (){var pred__56025 = cljs.core._EQ_;
var expr__56026 = reagent_table.core.is_sorting(new cljs.core.Keyword(null,"sorting","sorting",622249690).cljs$core$IFn$_invoke$arity$1(state),render_info,model_col);
if(cljs.core.truth_((pred__56025.cljs$core$IFn$_invoke$arity$2 ? pred__56025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asc","asc",356854569),expr__56026) : pred__56025.call(null,new cljs.core.Keyword(null,"asc","asc",356854569),expr__56026)))){
return " \u25B2";
} else {
if(cljs.core.truth_((pred__56025.cljs$core$IFn$_invoke$arity$2 ? pred__56025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),expr__56026) : pred__56025.call(null,new cljs.core.Keyword(null,"desc","desc",2093485764),expr__56026)))){
return " \u25BC";
} else {
if(cljs.core.truth_((pred__56025.cljs$core$IFn$_invoke$arity$2 ? pred__56025.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),expr__56026) : pred__56025.call(null,new cljs.core.Keyword(null,"none","none",1333468478),expr__56026)))){
return null;
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),"0.3"], null)], null)," \u25BC"], null);
}
}
}
})()], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_table.core.resize_widget,reagent.core.current_component()], null)], null);
});
reagent_table.core.header_row_fn = (function reagent_table$core$header_row_fn(column_model,config,data_atom,state_atom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (view_col,_){
var model_col = reagent_table.core.column_index_to_model(state_atom,view_col);
var render_info = (column_model.cljs$core$IFn$_invoke$arity$1 ? column_model.cljs$core$IFn$_invoke$arity$1(model_col) : column_model.call(null,model_col));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_table.core.header_cell_fn,render_info,view_col,model_col,config,state_atom,data_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(render_info);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return model_col;
}
})()], null));
}),column_model))], null);
});
reagent_table.core.row_fn = (function reagent_table$core$row_fn(row,row_num,row_key_fn,state_atom,config){
var state = cljs.core.deref(state_atom);
var col_hidden = new cljs.core.Keyword(null,"col-hidden","col-hidden",1576736424).cljs$core$IFn$_invoke$arity$1(state);
var col_key_fn = new cljs.core.Keyword(null,"col-key","col-key",-2009675766).cljs$core$IFn$_invoke$arity$2(config,(function (row__$1,row_num__$1,col_num){
return col_num;
}));
var col_model = new cljs.core.Keyword(null,"column-model","column-model",1553156630).cljs$core$IFn$_invoke$arity$1(config);
var cell_fn = new cljs.core.Keyword(null,"render-cell","render-cell",-515359581).cljs$core$IFn$_invoke$arity$1(config);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (view_col,_){
var model_col = reagent_table.core.column_index_to_model(state_atom,view_col);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),(cljs.core.truth_((function (){var and__4251__auto__ = new cljs.core.Keyword(null,"col-reordering","col-reordering",-165014502).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(view_col,new cljs.core.Keyword(null,"col-hover","col-hover",-1561137880).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__4251__auto__;
}
})())?"2px solid #3366CC":null),new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(col_hidden,model_col))?"none":null)], null)], null),(function (){var G__56045 = (col_model.cljs$core$IFn$_invoke$arity$1 ? col_model.cljs$core$IFn$_invoke$arity$1(model_col) : col_model.call(null,model_col));
var G__56046 = row;
var G__56047 = row_num;
var G__56048 = model_col;
return (cell_fn.cljs$core$IFn$_invoke$arity$4 ? cell_fn.cljs$core$IFn$_invoke$arity$4(G__56045,G__56046,G__56047,G__56048) : cell_fn.call(null,G__56045,G__56046,G__56047,G__56048));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(col_key_fn.cljs$core$IFn$_invoke$arity$3 ? col_key_fn.cljs$core$IFn$_invoke$arity$3(row,row_num,model_col) : col_key_fn.call(null,row,row_num,model_col))], null));
}),(function (){var or__4253__auto__ = col_model;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return row;
}
})()))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(row_key_fn.cljs$core$IFn$_invoke$arity$2 ? row_key_fn.cljs$core$IFn$_invoke$arity$2(row,row_num) : row_key_fn.call(null,row,row_num))], null));
});
reagent_table.core.rows_fn = (function reagent_table$core$rows_fn(rows,state_atom,config){
var row_key_fn = new cljs.core.Keyword(null,"row-key","row-key",-1189010712).cljs$core$IFn$_invoke$arity$2(config,(function (row,row_num){
return row_num;
}));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_num,row){
return reagent_table.core.row_fn(row,row_num,row_key_fn,state_atom,config);
}),rows));
});
reagent_table.core.column_selector = (function reagent_table$core$column_selector(state_atom,selector_config,column_model){
var hidden_cols = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"col-hidden","col-hidden",1576736424)], null));
var li_config = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(selector_config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"li","li",723558921)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (view_col,_){
var model_col = reagent_table.core.column_index_to_model(state_atom,view_col);
var render_info = (column_model.cljs$core$IFn$_invoke$arity$1 ? column_model.cljs$core$IFn$_invoke$arity$1(model_col) : column_model.call(null,model_col));
var hidden_a = reagent.core.cursor(hidden_cols,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [model_col], null));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),reagent_table.core.recursive_merge(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(8),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(hidden_a,cljs.core.not);

return null;
})], null),li_config),new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(render_info)," ",(cljs.core.truth_(cljs.core.deref(hidden_a))?"\u2610":"\u2611")], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(render_info);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return model_col;
}
})()], null));
}),column_model))], null);
});
/**
 * Set up in the initial column-index-to-model numbers
 */
reagent_table.core.init_column_index = (function reagent_table$core$init_column_index(headers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,_){
return idx;
}),headers));
});
reagent_table.core.the_table = (function reagent_table$core$the_table(config,column_model,data_atom,state_atom){
var scroll_height = new cljs.core.Keyword(null,"scroll-height","scroll-height",882644149).cljs$core$IFn$_invoke$arity$1(config);
var table_container = new cljs.core.Keyword(null,"table-container","table-container",556012210).cljs$core$IFn$_invoke$arity$1(config);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent_table.core.init_scrolling(this$);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-table-container","div.reagent-table-container",-636409288),(cljs.core.truth_(scroll_height)?reagent_table.core.recursive_merge(table_container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),scroll_height,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null)):table_container),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.reagent-table","table.reagent-table",1375392730),new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(config),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"caption","caption",-855383902).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5753__auto__)){
var caption = temp__5753__auto__;
return caption;
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"thead","thead",-291875296).cljs$core$IFn$_invoke$arity$1(config),reagent_table.core.header_row_fn(column_model,config,data_atom,state_atom)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"tbody","tbody",-80678300).cljs$core$IFn$_invoke$arity$1(config),reagent_table.core.rows_fn(cljs.core.deref(data_atom),state_atom,config)], null)], null)], null);
})], null));
});
/**
 * Create a table, rendering the vector held in data-atom and
 *   configured using the map config. The minimum requirements of
 *   config are :render-cell and :column-model.
 * 
 *   There is a distinction between view and model coordinates for
 *   column numbers. A column's view position may change if it is
 *   reordered, whereas its model position will be that of its index
 *   into :column-model
 * 
 *   :column-model is a vector of so-called render-info maps containing
 * - :header A string for the header cell text
 * - :key The reagent key for the column position in any rows. If
 *   absent defaults to the model index
 * - :sortable false When :sort is present (see below) by default all
 *   columns are sortable. Otherwise any column can be excluded and no
 *   glyph will appear in its header.
 *   Other entries are as required by the client. The map is passed to
 *   the :render-cell function when cells are rendered.
 * 
 *   :render-cell a function that returns the hiccup for a table cell
 *  (fn [render-info row row-num col-num] (...))
 *   where render-info is the column entry, row is the vector child from
 *   data-atom, row-num is the row number and col-num is the column number
 *   in model coordiates.
 * 
 *   :table-state an atom used to hold table internal state. If supplied by
 *   the client then a way to see table state at the repl, and to allow the
 *   client to modify column order and sorting state.
 * 
 *   :row-key a function that returns a value to be used as the regaent key
 *   for rows
 *  (fn [row row-num] (...))
 *   where row is the vector child from data-atom, row-num is the row number.
 * 
 *   :sort a function to sort data-atom when a header cell sort arrow is clicked.
 *   Returns the newly sorted vector. If absent, the table is not sortable and no
 *   glyphs appear in the header.
 *  (fn [rows column-model sorting] (...))
 *   where rows is the vector to sort, column-model is the :column-model and sorting
 *   is a vector of vectors of the form [column-model-index :asc|:desc]. If the
 *   column-model entry includes :sortable false the individual column is excluded
 *   from sorting. Select multiple columns for sorting by using ctrl-click. Repeat
 *   to toggle the sort direction.
 * 
 *   :table the attributes applied to the [:table ... ] element. Defaults
 *   to {:style {:width nil}}}
 * 
 *   :thead the attributes applied to [:thead ...]
 * 
 *   :tbody the attributes applied to [:tbody ...]
 * 
 *   :caption an optional hiccup form for a caption
 * 
 *   :column-selection optional attributes to display visibly column toggles
 *   for example {:ul {:li {:class "btn"}}}
 *   
 */
reagent_table.core.reagent_table = (function reagent_table$core$reagent_table(data_atom,config){
var config__$1 = reagent_table.core.recursive_merge(reagent_table.core.default_config,config);
var state_atom = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"table-state","table-state",-1662785974).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var map__56065 = config__$1;
var map__56065__$1 = cljs.core.__destructure_map(map__56065);
var render_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56065__$1,new cljs.core.Keyword(null,"render-cell","render-cell",-515359581));
var column_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56065__$1,new cljs.core.Keyword(null,"column-model","column-model",1553156630));
if(cljs.core.truth_((function (){var and__4251__auto__ = render_cell;
if(cljs.core.truth_(and__4251__auto__)){
return column_model;
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Must provide :column-model and :render-cell in table config","\n","(and render-cell column-model)"].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"col-index-to-model","col-index-to-model",-671105736),reagent_table.core.init_column_index(column_model));

return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),[".reagent-table * table {table-layout:fixed;}",".reagent-table * td { max-width: 3px;","overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}"].join('')], null),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"column-selection","column-selection",-282189655).cljs$core$IFn$_invoke$arity$1(config__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var selector_config = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_table.core.column_selector,state_atom,selector_config,column_model], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_table.core.the_table,config__$1,column_model,data_atom,state_atom], null)], null);
});
});

//# sourceMappingURL=reagent_table.core.js.map
