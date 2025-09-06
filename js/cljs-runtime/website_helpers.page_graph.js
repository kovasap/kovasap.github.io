goog.provide('website_helpers.page_graph');
website_helpers.page_graph.PageTree = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),website_helpers.page_graph.PageTree], null)], null);
website_helpers.page_graph.example_page_tree = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"manifesto.md",new cljs.core.Keyword(null,"size","size",1098693007),(10074)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"climbing",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"media.md",new cljs.core.Keyword(null,"size","size",1098693007),(592)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safety-checklist.md",new cljs.core.Keyword(null,"size","size",1098693007),(3276)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"event-reports",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2019-10-7-namaste-wall-zion.md",new cljs.core.Keyword(null,"size","size",1098693007),(1899)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-10-lake-erie.md",new cljs.core.Keyword(null,"size","size",1098693007),(1225)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-12-mile-high-club.md",new cljs.core.Keyword(null,"size","size",1098693007),(10662)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"first-512.md",new cljs.core.Keyword(null,"size","size",1098693007),(214)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"mcmahon-hall.md",new cljs.core.Keyword(null,"size","size",1098693007),(928)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"datavis",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"reddit-tree.md",new cljs.core.Keyword(null,"size","size",1098693007),(551)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seattle-rain.md",new cljs.core.Keyword(null,"size","size",1098693007),(2105)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"common-patterns.md",new cljs.core.Keyword(null,"size","size",1098693007),(2276)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev-context.md",new cljs.core.Keyword(null,"size","size",1098693007),(246)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-projects.md",new cljs.core.Keyword(null,"size","size",1098693007),(1131)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"game-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"farming-video-game.md",new cljs.core.Keyword(null,"size","size",1098693007),(786)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"roguelike-base-builder.md",new cljs.core.Keyword(null,"size","size",1098693007),(2019)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safe-building-designer.md",new cljs.core.Keyword(null,"size","size",1098693007),(507)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"mechanic-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"character-alignment.md",new cljs.core.Keyword(null,"size","size",1098693007),(436)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"low-friction-turn-based-tactics.md",new cljs.core.Keyword(null,"size","size",1098693007),(3187)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gaming",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"buying-games.md",new cljs.core.Keyword(null,"size","size",1098693007),(912)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chess.md",new cljs.core.Keyword(null,"size","size",1098693007),(297)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fps-principles.md",new cljs.core.Keyword(null,"size","size",1098693007),(6329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"oxygen-not-included.md",new cljs.core.Keyword(null,"size","size",1098693007),(472)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"recommendations.md",new cljs.core.Keyword(null,"size","size",1098693007),(326)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"health-and-longevity",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"aging-science.md",new cljs.core.Keyword(null,"size","size",1098693007),(94)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"avoiding-accidents.md",new cljs.core.Keyword(null,"size","size",1098693007),(244)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"biomarker-correlator.md",new cljs.core.Keyword(null,"size","size",1098693007),(188)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"causes-of-death.md",new cljs.core.Keyword(null,"size","size",1098693007),(703)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chronic-stress.md",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"circadian-rhythm.md",new cljs.core.Keyword(null,"size","size",1098693007),(72)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"continuous-glucose-monitoring.md",new cljs.core.Keyword(null,"size","size",1098693007),(1384)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cooking.md",new cljs.core.Keyword(null,"size","size",1098693007),(9101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dental-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(135)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dna-testing.md",new cljs.core.Keyword(null,"size","size",1098693007),(670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"exercise.md",new cljs.core.Keyword(null,"size","size",1098693007),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fasting.md",new cljs.core.Keyword(null,"size","size",1098693007),(4493)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"finding-care.md",new cljs.core.Keyword(null,"size","size",1098693007),(275)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"food.md",new cljs.core.Keyword(null,"size","size",1098693007),(16612)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(8329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"misc-research.md",new cljs.core.Keyword(null,"size","size",1098693007),(409)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-physiological-states.md",new cljs.core.Keyword(null,"size","size",1098693007),(636)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sleep.md",new cljs.core.Keyword(null,"size","size",1098693007),(4462)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tracking-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(4196)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hydroponics",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"journal.md",new cljs.core.Keyword(null,"size","size",1098693007),(1525)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-setup.md",new cljs.core.Keyword(null,"size","size",1098693007),(4052)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"investing-and-finances",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensive-housing-return-estimator.md",new cljs.core.Keyword(null,"size","size",1098693007),(11714)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"financial-independence.md",new cljs.core.Keyword(null,"size","size",1098693007),(745)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"housing.md",new cljs.core.Keyword(null,"size","size",1098693007),(1515)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(1368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"monthly-costs-of-car-ownership.md",new cljs.core.Keyword(null,"size","size",1098693007),(475)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"strategies.md",new cljs.core.Keyword(null,"size","size",1098693007),(1243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"taxes.md",new cljs.core.Keyword(null,"size","size",1098693007),(2727)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"lifelogging",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"camera.md",new cljs.core.Keyword(null,"size","size",1098693007),(869)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(250)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"what-and-why.md",new cljs.core.Keyword(null,"size","size",1098693007),(8752)], null)], null)], null)], null);
website_helpers.page_graph.get_category_links = (function website_helpers$page_graph$get_category_links(nodes,categories_to_idx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$get_category_links_$_iter__47467(s__47468){
return (new cljs.core.LazySeq(null,(function (){
var s__47468__$1 = s__47468;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47468__$1);
if(temp__5825__auto__){
var s__47468__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47468__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47468__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47470 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47469 = (0);
while(true){
if((i__47469 < size__5522__auto__)){
var node = cljs.core._nth(c__5521__auto__,i__47469);
cljs.core.chunk_append(b__47470,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__47469,node,c__5521__auto__,size__5522__auto__,b__47470,s__47468__$2,temp__5825__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47471(s__47472){
return (new cljs.core.LazySeq(null,((function (i__47469,node,c__5521__auto__,size__5522__auto__,b__47470,s__47468__$2,temp__5825__auto__){
return (function (){
var s__47472__$1 = s__47472;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__47472__$1);
if(temp__5825__auto____$1){
var s__47472__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47472__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__47472__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__47474 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__47473 = (0);
while(true){
if((i__47473 < size__5522__auto____$1)){
var category = cljs.core._nth(c__5521__auto____$1,i__47473);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__47474,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__47520 = (i__47473 + (1));
i__47473 = G__47520;
continue;
} else {
var G__47521 = (i__47473 + (1));
i__47473 = G__47521;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47474),website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47471(cljs.core.chunk_rest(s__47472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47474),null);
}
} else {
var category = cljs.core.first(s__47472__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47471(cljs.core.rest(s__47472__$2)));
} else {
var G__47522 = cljs.core.rest(s__47472__$2);
s__47472__$1 = G__47522;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__47469,node,c__5521__auto__,size__5522__auto__,b__47470,s__47468__$2,temp__5825__auto__))
,null,null));
});})(i__47469,node,c__5521__auto__,size__5522__auto__,b__47470,s__47468__$2,temp__5825__auto__))
;
return iter__5523__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(node)))], null));
})()));

var G__47523 = (i__47469 + (1));
i__47469 = G__47523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47470),website_helpers$page_graph$get_category_links_$_iter__47467(cljs.core.chunk_rest(s__47468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47470),null);
}
} else {
var node = cljs.core.first(s__47468__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (node,s__47468__$2,temp__5825__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47475(s__47476){
return (new cljs.core.LazySeq(null,(function (){
var s__47476__$1 = s__47476;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__47476__$1);
if(temp__5825__auto____$1){
var s__47476__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47476__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47476__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47478 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47477 = (0);
while(true){
if((i__47477 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__47477);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__47478,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__47524 = (i__47477 + (1));
i__47477 = G__47524;
continue;
} else {
var G__47525 = (i__47477 + (1));
i__47477 = G__47525;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47478),website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47475(cljs.core.chunk_rest(s__47476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47478),null);
}
} else {
var category = cljs.core.first(s__47476__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__47467_$_iter__47475(cljs.core.rest(s__47476__$2)));
} else {
var G__47526 = cljs.core.rest(s__47476__$2);
s__47476__$1 = G__47526;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(node,s__47468__$2,temp__5825__auto__))
;
return iter__5523__auto__(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-categories","path-categories",1155646784).cljs$core$IFn$_invoke$arity$1(node)))], null));
})()),website_helpers$page_graph$get_category_links_$_iter__47467(cljs.core.rest(s__47468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nodes);
})());
});
website_helpers.page_graph.update_nodes = (function website_helpers$page_graph$update_nodes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47527 = arguments.length;
var i__5770__auto___47528 = (0);
while(true){
if((i__5770__auto___47528 < len__5769__auto___47527)){
args__5775__auto__.push((arguments[i__5770__auto___47528]));

var G__47529 = (i__5770__auto___47528 + (1));
i__5770__auto___47528 = G__47529;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,update_fns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$iter__47481(s__47482){
return (new cljs.core.LazySeq(null,(function (){
var s__47482__$1 = s__47482;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47482__$1);
if(temp__5825__auto__){
var s__47482__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47482__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47482__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47484 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47483 = (0);
while(true){
if((i__47483 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__47483);
cljs.core.chunk_append(b__47484,(function (){var fexpr__47485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__47485.cljs$core$IFn$_invoke$arity$1 ? fexpr__47485.cljs$core$IFn$_invoke$arity$1(n) : fexpr__47485.call(null,n));
})());

var G__47530 = (i__47483 + (1));
i__47483 = G__47530;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47484),website_helpers$page_graph$iter__47481(cljs.core.chunk_rest(s__47482__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47484),null);
}
} else {
var n = cljs.core.first(s__47482__$2);
return cljs.core.cons((function (){var fexpr__47486 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__47486.cljs$core$IFn$_invoke$arity$1 ? fexpr__47486.cljs$core$IFn$_invoke$arity$1(n) : fexpr__47486.call(null,n));
})(),website_helpers$page_graph$iter__47481(cljs.core.rest(s__47482__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(nodes);
})());
}));

(website_helpers.page_graph.update_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website_helpers.page_graph.update_nodes.cljs$lang$applyTo = (function (seq47479){
var G__47480 = cljs.core.first(seq47479);
var seq47479__$1 = cljs.core.next(seq47479);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47480,seq47479__$1);
}));

website_helpers.page_graph.scale_size = (function website_helpers$page_graph$scale_size(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"size","size",1098693007),(function (p1__47487_SHARP_){
if((p1__47487_SHARP_ == null)){
return (20);
} else {
return Math.sqrt((p1__47487_SHARP_ / (10)));
}
}));
});
website_helpers.page_graph.opacity_mod_min = 0.5;
website_helpers.page_graph.opacity_mod_max = 1.0;
website_helpers.page_graph.assign_opacity_mod = (function website_helpers$page_graph$assign_opacity_mod(node,earliest_mod_time,latest_mod_time,categories){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(function (){var node_mod_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node)))){
return (website_helpers.page_graph.opacity_mod_min - 0.3);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = new cljs.core.Keyword(null,"is-category-node","is-category-node",2078890032).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.contains_QMARK_(categories,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node))));
} else {
return and__5043__auto__;
}
})())){
return (website_helpers.page_graph.opacity_mod_min - 0.3);
} else {
if((node_mod_time == null)){
return website_helpers.page_graph.opacity_mod_max;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(earliest_mod_time,latest_mod_time)){
return website_helpers.page_graph.opacity_mod_max;
} else {
return (website_helpers.page_graph.opacity_mod_min + ((website_helpers.page_graph.opacity_mod_max - website_helpers.page_graph.opacity_mod_min) * ((node_mod_time - earliest_mod_time) / (latest_mod_time - earliest_mod_time))));

}
}
}
}
})());
});
website_helpers.page_graph.stroke_opacity_mod_min = 0.0;
website_helpers.page_graph.stroke_opacity_mod_max = 1.0;
website_helpers.page_graph.assign_stroke_opacity_mod = (function website_helpers$page_graph$assign_stroke_opacity_mod(node,least_mod_num,most_mod_num,categories){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),(function (){var node_mod_num = cljs.core.count(new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(categories,new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node)))){
return website_helpers.page_graph.stroke_opacity_mod_min;
} else {
if((node_mod_num == null)){
return website_helpers.page_graph.stroke_opacity_mod_min;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(least_mod_num,most_mod_num)){
return website_helpers.page_graph.stroke_opacity_mod_min;
} else {
return (website_helpers.page_graph.stroke_opacity_mod_min + ((website_helpers.page_graph.stroke_opacity_mod_max - website_helpers.page_graph.stroke_opacity_mod_min) * ((node_mod_num - least_mod_num) / (most_mod_num - least_mod_num))));

}
}
}
})());
});
website_helpers.page_graph.assign_group = (function website_helpers$page_graph$assign_group(node,most_recently_modified_paths,most_recently_created_paths){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"group","group",582596132),((cljs.core.contains_QMARK_(most_recently_modified_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node)))?(5):((cljs.core.contains_QMARK_(most_recently_created_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node)))?(4):((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node),"Important"))?(5):(((((new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))))?(3):((((0) <= cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(2):null))))));
});
website_helpers.page_graph.strip_extension = (function website_helpers$page_graph$strip_extension(node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)))){
return node;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__47488_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47488_SHARP_,/\./));
})),new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__47489_SHARP_){
return clojure.string.replace(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47489_SHARP_,/\./)),/content\//,"");
})),new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__47490_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__47490_SHARP_,/\./));
}));
}
});
website_helpers.page_graph.fix_path = (function website_helpers$page_graph$fix_path(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__47491_SHARP_){
return clojure.string.replace(p1__47491_SHARP_,/\/home/,"docs/");
}));
});
/**
 * Capitalize every word in a string
 */
website_helpers.page_graph.capitalize_words = (function website_helpers$page_graph$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
website_helpers.page_graph.prettify_name = (function website_helpers$page_graph$prettify_name(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__47492_SHARP_){
return website_helpers.page_graph.capitalize_words(clojure.string.replace(p1__47492_SHARP_,/-/," "));
}));
});
website_helpers.page_graph.index_categories = (function website_helpers$page_graph$index_categories(categories,num_notes){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$index_categories_$_iter__47493(s__47494){
return (new cljs.core.LazySeq(null,(function (){
var s__47494__$1 = s__47494;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47494__$1);
if(temp__5825__auto__){
var s__47494__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47494__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47494__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47496 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47495 = (0);
while(true){
if((i__47495 < size__5522__auto__)){
var vec__47497 = cljs.core._nth(c__5521__auto__,i__47495);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47497,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47497,(1),null);
cljs.core.chunk_append(b__47496,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null));

var G__47531 = (i__47495 + (1));
i__47495 = G__47531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47496),website_helpers$page_graph$index_categories_$_iter__47493(cljs.core.chunk_rest(s__47494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47496),null);
}
} else {
var vec__47500 = cljs.core.first(s__47494__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47500,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47500,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(num_notes + i)], null),website_helpers$page_graph$index_categories_$_iter__47493(cljs.core.rest(s__47494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,categories));
})());
});
website_helpers.page_graph.notes_to_graph = (function website_helpers$page_graph$notes_to_graph(show_unselected_nodes_QMARK_,include_home_node_QMARK_,notes,selected_categories,all_categories,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
var starting_idx = (9);
var categories = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories)))?all_categories:selected_categories);
var notes__$1 = (cljs.core.truth_(show_unselected_nodes_QMARK_)?notes:website_helpers.notes.get_notes_for_categories(notes,selected_categories));
var most_mod_num = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47503_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(p1__47503_SHARP_));
}),notes__$1));
var least_mod_num = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__47504_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816).cljs$core$IFn$_invoke$arity$1(p1__47504_SHARP_));
}),notes__$1));
var earliest_mod_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816),notes__$1))));
var latest_mod_time = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modification-unix-timestamps","modification-unix-timestamps",653432816),notes__$1))));
var most_recently_modified_paths = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),website_helpers.notes.get_recently_modified_notes(notes__$1,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight)));
var most_recently_created_paths = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),website_helpers.notes.get_recently_created_notes(notes__$1,num_recently_created_notes_to_highlight)));
var idxed_notes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),(starting_idx + i));
}),notes__$1);
var categories_to_idx = (cljs.core.truth_(show_unselected_nodes_QMARK_)?all_categories:categories);
var idxed_categories = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(website_helpers.page_graph.index_categories(categories_to_idx,(starting_idx + cljs.core.count(idxed_notes))),"HOME",(0));
var category_to_node = (function (c){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxed_categories,c),new cljs.core.Keyword(null,"path","path",-188191168),["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"=true"].join(''),new cljs.core.Keyword(null,"is-category-node","is-category-node",2078890032),true,new cljs.core.Keyword(null,"tree-path","tree-path",683503647),"",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"group","group",582596132),(1),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"home",new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Legend",new cljs.core.Keyword(null,"idx","idx",1053688473),(1),new cljs.core.Keyword(null,"group","group",582596132),(1),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Category (double-click to filter graph)",new cljs.core.Keyword(null,"idx","idx",1053688473),(2),new cljs.core.Keyword(null,"group","group",582596132),(2),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Lighter nodes were edited longer ago",new cljs.core.Keyword(null,"idx","idx",1053688473),(3),new cljs.core.Keyword(null,"group","group",582596132),(3),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),0.5], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Nodes with darker outlines have been edited more times.",new cljs.core.Keyword(null,"idx","idx",1053688473),(4),new cljs.core.Keyword(null,"group","group",582596132),(3),new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),1.0,new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Page (double-click to view)",new cljs.core.Keyword(null,"idx","idx",1053688473),(5),new cljs.core.Keyword(null,"group","group",582596132),(3),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Recently Added Page (double-click to view)",new cljs.core.Keyword(null,"idx","idx",1053688473),(6),new cljs.core.Keyword(null,"group","group",582596132),(4),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Recently Modified Page (double-click to view)",new cljs.core.Keyword(null,"idx","idx",1053688473),(7),new cljs.core.Keyword(null,"group","group",582596132),(5),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"label","label",1718410804),"legend",new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"Important Page (double-click to view)",new cljs.core.Keyword(null,"idx","idx",1053688473),(8),new cljs.core.Keyword(null,"group","group",582596132),(6),new cljs.core.Keyword(null,"size","size",1098693007),(20),new cljs.core.Keyword(null,"stroke-opacity-mod","stroke-opacity-mod",1678567237),0.5,new cljs.core.Keyword(null,"opacity-mod","opacity-mod",1105734118),(1),new cljs.core.Keyword(null,"label","label",1718410804),"legend"], null)], null),website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(idxed_notes,cljs.core.map.cljs$core$IFn$_invoke$arity$2(category_to_node,categories_to_idx)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.page_graph.prettify_name,website_helpers.page_graph.fix_path,website_helpers.page_graph.strip_extension,website_helpers.page_graph.scale_size,(function (p1__47505_SHARP_){
return website_helpers.page_graph.assign_group(p1__47505_SHARP_,most_recently_modified_paths,most_recently_created_paths);
}),(function (p1__47506_SHARP_){
return website_helpers.page_graph.assign_opacity_mod(p1__47506_SHARP_,earliest_mod_time,latest_mod_time,categories);
}),(function (p1__47507_SHARP_){
return website_helpers.page_graph.assign_stroke_opacity_mod(p1__47507_SHARP_,least_mod_num,most_mod_num,categories);
}),(function (p1__47508_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47508_SHARP_,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.first(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(p1__47508_SHARP_)));
}),(function (p1__47509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47509_SHARP_,new cljs.core.Keyword(null,"markdown","markdown",1227225089));
})], 0))),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(website_helpers.page_graph.get_category_links(idxed_notes,idxed_categories),(cljs.core.truth_(include_home_node_QMARK_)?(function (){var iter__5523__auto__ = (function website_helpers$page_graph$notes_to_graph_$_iter__47510(s__47511){
return (new cljs.core.LazySeq(null,(function (){
var s__47511__$1 = s__47511;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__47511__$1);
if(temp__5825__auto__){
var s__47511__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47511__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47511__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47513 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47512 = (0);
while(true){
if((i__47512 < size__5522__auto__)){
var vec__47514 = cljs.core._nth(c__5521__auto__,i__47512);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47514,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47514,(1),null);
cljs.core.chunk_append(b__47513,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__47532 = (i__47512 + (1));
i__47512 = G__47532;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47513),website_helpers$page_graph$notes_to_graph_$_iter__47510(cljs.core.chunk_rest(s__47511__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47513),null);
}
} else {
var vec__47517 = cljs.core.first(s__47511__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47517,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47517,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$notes_to_graph_$_iter__47510(cljs.core.rest(s__47511__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(idxed_categories);
})():cljs.core.PersistentVector.EMPTY),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(1),new cljs.core.Keyword(null,"target","target",253001721),(2),new cljs.core.Keyword(null,"value","value",305978217),(11)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(2),new cljs.core.Keyword(null,"target","target",253001721),(3),new cljs.core.Keyword(null,"value","value",305978217),(11)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(2),new cljs.core.Keyword(null,"target","target",253001721),(4),new cljs.core.Keyword(null,"value","value",305978217),(11)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(2),new cljs.core.Keyword(null,"target","target",253001721),(5),new cljs.core.Keyword(null,"value","value",305978217),(11)], null)], null)], 0))], null);
});
website_helpers.page_graph.build_graph_data = (function website_helpers$page_graph$build_graph_data(show_unselected_nodes_QMARK_,include_home_node_QMARK_,notes_atom,category_selections_atom,num_recently_modified_notes_to_highlight,num_recently_created_notes_to_highlight){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(website_helpers.page_graph.notes_to_graph(cljs.core.deref(show_unselected_nodes_QMARK_),cljs.core.deref(include_home_node_QMARK_),cljs.core.deref(notes_atom),website_helpers.utils.get_selected_vars(cljs.core.deref(category_selections_atom)),cljs.core.set(cljs.core.keys(cljs.core.deref(category_selections_atom))),cljs.core.deref(num_recently_modified_notes_to_highlight),cljs.core.deref(num_recently_created_notes_to_highlight)),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.clj__GT_js),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.clj__GT_js);
});
website_helpers.page_graph.page_graph_from_notes = (function website_helpers$page_graph$page_graph_from_notes(options){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rerender ",cljs.core.deref(website_helpers.global.graph_update_num)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.page_graph.build_graph_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.global.show_unselected_nodes_in_graph_QMARK_,website_helpers.global.include_home_node_in_graph_QMARK_,website_helpers.global.notes,website_helpers.global.category_selections,website_helpers.global.num_recently_modified_notes_to_highlight,website_helpers.global.num_recently_created_notes_to_highlight], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
});
goog.exportSymbol('website_helpers.page_graph.page_graph_from_notes', website_helpers.page_graph.page_graph_from_notes);

//# sourceMappingURL=website_helpers.page_graph.js.map
