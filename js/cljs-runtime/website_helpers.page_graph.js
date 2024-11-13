goog.provide('website_helpers.page_graph');
website_helpers.page_graph.PageTree = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),website_helpers.page_graph.PageTree], null)], null);
website_helpers.page_graph.example_page_tree = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"manifesto.md",new cljs.core.Keyword(null,"size","size",1098693007),(10074)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"climbing",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"media.md",new cljs.core.Keyword(null,"size","size",1098693007),(592)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safety-checklist.md",new cljs.core.Keyword(null,"size","size",1098693007),(3276)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"event-reports",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2019-10-7-namaste-wall-zion.md",new cljs.core.Keyword(null,"size","size",1098693007),(1899)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-10-lake-erie.md",new cljs.core.Keyword(null,"size","size",1098693007),(1225)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-12-mile-high-club.md",new cljs.core.Keyword(null,"size","size",1098693007),(10662)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"first-512.md",new cljs.core.Keyword(null,"size","size",1098693007),(214)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"mcmahon-hall.md",new cljs.core.Keyword(null,"size","size",1098693007),(928)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"datavis",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"reddit-tree.md",new cljs.core.Keyword(null,"size","size",1098693007),(551)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seattle-rain.md",new cljs.core.Keyword(null,"size","size",1098693007),(2105)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"common-patterns.md",new cljs.core.Keyword(null,"size","size",1098693007),(2276)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev-context.md",new cljs.core.Keyword(null,"size","size",1098693007),(246)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-projects.md",new cljs.core.Keyword(null,"size","size",1098693007),(1131)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"game-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"farming-video-game.md",new cljs.core.Keyword(null,"size","size",1098693007),(786)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"roguelike-base-builder.md",new cljs.core.Keyword(null,"size","size",1098693007),(2019)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safe-building-designer.md",new cljs.core.Keyword(null,"size","size",1098693007),(507)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"mechanic-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"character-alignment.md",new cljs.core.Keyword(null,"size","size",1098693007),(436)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"low-friction-turn-based-tactics.md",new cljs.core.Keyword(null,"size","size",1098693007),(3187)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gaming",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"buying-games.md",new cljs.core.Keyword(null,"size","size",1098693007),(912)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chess.md",new cljs.core.Keyword(null,"size","size",1098693007),(297)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fps-principles.md",new cljs.core.Keyword(null,"size","size",1098693007),(6329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"oxygen-not-included.md",new cljs.core.Keyword(null,"size","size",1098693007),(472)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"recommendations.md",new cljs.core.Keyword(null,"size","size",1098693007),(326)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"health-and-longevity",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"aging-science.md",new cljs.core.Keyword(null,"size","size",1098693007),(94)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"avoiding-accidents.md",new cljs.core.Keyword(null,"size","size",1098693007),(244)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"biomarker-correlator.md",new cljs.core.Keyword(null,"size","size",1098693007),(188)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"causes-of-death.md",new cljs.core.Keyword(null,"size","size",1098693007),(703)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chronic-stress.md",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"circadian-rhythm.md",new cljs.core.Keyword(null,"size","size",1098693007),(72)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"continuous-glucose-monitoring.md",new cljs.core.Keyword(null,"size","size",1098693007),(1384)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cooking.md",new cljs.core.Keyword(null,"size","size",1098693007),(9101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dental-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(135)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dna-testing.md",new cljs.core.Keyword(null,"size","size",1098693007),(670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"exercise.md",new cljs.core.Keyword(null,"size","size",1098693007),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fasting.md",new cljs.core.Keyword(null,"size","size",1098693007),(4493)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"finding-care.md",new cljs.core.Keyword(null,"size","size",1098693007),(275)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"food.md",new cljs.core.Keyword(null,"size","size",1098693007),(16612)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(8329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"misc-research.md",new cljs.core.Keyword(null,"size","size",1098693007),(409)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-physiological-states.md",new cljs.core.Keyword(null,"size","size",1098693007),(636)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sleep.md",new cljs.core.Keyword(null,"size","size",1098693007),(4462)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tracking-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(4196)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hydroponics",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"journal.md",new cljs.core.Keyword(null,"size","size",1098693007),(1525)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-setup.md",new cljs.core.Keyword(null,"size","size",1098693007),(4052)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"investing-and-finances",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensive-housing-return-estimator.md",new cljs.core.Keyword(null,"size","size",1098693007),(11714)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"financial-independence.md",new cljs.core.Keyword(null,"size","size",1098693007),(745)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"housing.md",new cljs.core.Keyword(null,"size","size",1098693007),(1515)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(1368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"monthly-costs-of-car-ownership.md",new cljs.core.Keyword(null,"size","size",1098693007),(475)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"strategies.md",new cljs.core.Keyword(null,"size","size",1098693007),(1243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"taxes.md",new cljs.core.Keyword(null,"size","size",1098693007),(2727)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"lifelogging",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"camera.md",new cljs.core.Keyword(null,"size","size",1098693007),(869)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(250)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"what-and-why.md",new cljs.core.Keyword(null,"size","size",1098693007),(8752)], null)], null)], null)], null);
website_helpers.page_graph.get_links = (function website_helpers$page_graph$get_links(all_subtrees){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$get_links_$_iter__27170(s__27171){
return (new cljs.core.LazySeq(null,(function (){
var s__27171__$1 = s__27171;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27171__$1);
if(temp__5804__auto__){
var s__27171__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27171__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27171__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27173 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27172 = (0);
while(true){
if((i__27172 < size__5522__auto__)){
var subtree = cljs.core._nth(c__5521__auto__,i__27172);
cljs.core.chunk_append(b__27173,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__27172,subtree,c__5521__auto__,size__5522__auto__,b__27173,s__27171__$2,temp__5804__auto__){
return (function website_helpers$page_graph$get_links_$_iter__27170_$_iter__27174(s__27175){
return (new cljs.core.LazySeq(null,((function (i__27172,subtree,c__5521__auto__,size__5522__auto__,b__27173,s__27171__$2,temp__5804__auto__){
return (function (){
var s__27175__$1 = s__27175;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27175__$1);
if(temp__5804__auto____$1){
var s__27175__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27175__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27175__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27177 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27176 = (0);
while(true){
if((i__27176 < size__5522__auto____$1)){
var child = cljs.core._nth(c__5521__auto____$1,i__27176);
cljs.core.chunk_append(b__27177,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__27359 = (i__27176 + (1));
i__27176 = G__27359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27177),website_helpers$page_graph$get_links_$_iter__27170_$_iter__27174(cljs.core.chunk_rest(s__27175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27177),null);
}
} else {
var child = cljs.core.first(s__27175__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_links_$_iter__27170_$_iter__27174(cljs.core.rest(s__27175__$2)));
}
} else {
return null;
}
break;
}
});})(i__27172,subtree,c__5521__auto__,size__5522__auto__,b__27173,s__27171__$2,temp__5804__auto__))
,null,null));
});})(i__27172,subtree,c__5521__auto__,size__5522__auto__,b__27173,s__27171__$2,temp__5804__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()));

var G__27360 = (i__27172 + (1));
i__27172 = G__27360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27173),website_helpers$page_graph$get_links_$_iter__27170(cljs.core.chunk_rest(s__27171__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27173),null);
}
} else {
var subtree = cljs.core.first(s__27171__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (subtree,s__27171__$2,temp__5804__auto__){
return (function website_helpers$page_graph$get_links_$_iter__27170_$_iter__27178(s__27179){
return (new cljs.core.LazySeq(null,(function (){
var s__27179__$1 = s__27179;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27179__$1);
if(temp__5804__auto____$1){
var s__27179__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27179__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27179__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27181 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27180 = (0);
while(true){
if((i__27180 < size__5522__auto__)){
var child = cljs.core._nth(c__5521__auto__,i__27180);
cljs.core.chunk_append(b__27181,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__27361 = (i__27180 + (1));
i__27180 = G__27361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27181),website_helpers$page_graph$get_links_$_iter__27170_$_iter__27178(cljs.core.chunk_rest(s__27179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27181),null);
}
} else {
var child = cljs.core.first(s__27179__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_links_$_iter__27170_$_iter__27178(cljs.core.rest(s__27179__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(subtree,s__27171__$2,temp__5804__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()),website_helpers$page_graph$get_links_$_iter__27170(cljs.core.rest(s__27171__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(all_subtrees);
})());
});
website_helpers.page_graph.get_category_links = (function website_helpers$page_graph$get_category_links(nodes,categories_to_idx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$get_category_links_$_iter__27192(s__27193){
return (new cljs.core.LazySeq(null,(function (){
var s__27193__$1 = s__27193;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27193__$1);
if(temp__5804__auto__){
var s__27193__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27193__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27193__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27195 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27194 = (0);
while(true){
if((i__27194 < size__5522__auto__)){
var node = cljs.core._nth(c__5521__auto__,i__27194);
cljs.core.chunk_append(b__27195,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (i__27194,node,c__5521__auto__,size__5522__auto__,b__27195,s__27193__$2,temp__5804__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27201(s__27202){
return (new cljs.core.LazySeq(null,((function (i__27194,node,c__5521__auto__,size__5522__auto__,b__27195,s__27193__$2,temp__5804__auto__){
return (function (){
var s__27202__$1 = s__27202;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27202__$1);
if(temp__5804__auto____$1){
var s__27202__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27202__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27202__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27204 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27203 = (0);
while(true){
if((i__27203 < size__5522__auto____$1)){
var category = cljs.core._nth(c__5521__auto____$1,i__27203);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__27204,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__27362 = (i__27203 + (1));
i__27203 = G__27362;
continue;
} else {
var G__27363 = (i__27203 + (1));
i__27203 = G__27363;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27204),website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27201(cljs.core.chunk_rest(s__27202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27204),null);
}
} else {
var category = cljs.core.first(s__27202__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27201(cljs.core.rest(s__27202__$2)));
} else {
var G__27364 = cljs.core.rest(s__27202__$2);
s__27202__$1 = G__27364;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__27194,node,c__5521__auto__,size__5522__auto__,b__27195,s__27193__$2,temp__5804__auto__))
,null,null));
});})(i__27194,node,c__5521__auto__,size__5522__auto__,b__27195,s__27193__$2,temp__5804__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node));
})()));

var G__27365 = (i__27194 + (1));
i__27194 = G__27365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27195),website_helpers$page_graph$get_category_links_$_iter__27192(cljs.core.chunk_rest(s__27193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27195),null);
}
} else {
var node = cljs.core.first(s__27193__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = ((function (node,s__27193__$2,temp__5804__auto__){
return (function website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27221(s__27223){
return (new cljs.core.LazySeq(null,(function (){
var s__27223__$1 = s__27223;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27223__$1);
if(temp__5804__auto____$1){
var s__27223__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27223__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27223__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27225 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27224 = (0);
while(true){
if((i__27224 < size__5522__auto__)){
var category = cljs.core._nth(c__5521__auto__,i__27224);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
cljs.core.chunk_append(b__27225,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__27366 = (i__27224 + (1));
i__27224 = G__27366;
continue;
} else {
var G__27367 = (i__27224 + (1));
i__27224 = G__27367;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27225),website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27221(cljs.core.chunk_rest(s__27223__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27225),null);
}
} else {
var category = cljs.core.first(s__27223__$2);
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,category);
if(cljs.core.truth_(idx)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"target","target",253001721),idx,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$get_category_links_$_iter__27192_$_iter__27221(cljs.core.rest(s__27223__$2)));
} else {
var G__27368 = cljs.core.rest(s__27223__$2);
s__27223__$1 = G__27368;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(node,s__27193__$2,temp__5804__auto__))
;
return iter__5523__auto__(new cljs.core.Keyword(null,"categories","categories",178386610).cljs$core$IFn$_invoke$arity$1(node));
})()),website_helpers$page_graph$get_category_links_$_iter__27192(cljs.core.rest(s__27193__$2)));
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
var len__5769__auto___27369 = arguments.length;
var i__5770__auto___27370 = (0);
while(true){
if((i__5770__auto___27370 < len__5769__auto___27369)){
args__5775__auto__.push((arguments[i__5770__auto___27370]));

var G__27371 = (i__5770__auto___27370 + (1));
i__5770__auto___27370 = G__27371;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,update_fns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function website_helpers$page_graph$iter__27280(s__27281){
return (new cljs.core.LazySeq(null,(function (){
var s__27281__$1 = s__27281;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27281__$1);
if(temp__5804__auto__){
var s__27281__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27281__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27281__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27283 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27282 = (0);
while(true){
if((i__27282 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__27282);
cljs.core.chunk_append(b__27283,(function (){var fexpr__27293 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__27293.cljs$core$IFn$_invoke$arity$1 ? fexpr__27293.cljs$core$IFn$_invoke$arity$1(n) : fexpr__27293.call(null,n));
})());

var G__27372 = (i__27282 + (1));
i__27282 = G__27372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27283),website_helpers$page_graph$iter__27280(cljs.core.chunk_rest(s__27281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27283),null);
}
} else {
var n = cljs.core.first(s__27281__$2);
return cljs.core.cons((function (){var fexpr__27301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__27301.cljs$core$IFn$_invoke$arity$1 ? fexpr__27301.cljs$core$IFn$_invoke$arity$1(n) : fexpr__27301.call(null,n));
})(),website_helpers$page_graph$iter__27280(cljs.core.rest(s__27281__$2)));
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
(website_helpers.page_graph.update_nodes.cljs$lang$applyTo = (function (seq27243){
var G__27244 = cljs.core.first(seq27243);
var seq27243__$1 = cljs.core.next(seq27243);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27244,seq27243__$1);
}));

website_helpers.page_graph.scale_size = (function website_helpers$page_graph$scale_size(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"size","size",1098693007),(function (p1__27307_SHARP_){
if((p1__27307_SHARP_ == null)){
return (20);
} else {
return Math.sqrt((p1__27307_SHARP_ / (10)));
}
}));
});
website_helpers.page_graph.assign_group = (function website_helpers$page_graph$assign_group(node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"group","group",582596132),(((new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node) == null))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(2):((((0) <= cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(3):null))));
});
website_helpers.page_graph.strip_extension = (function website_helpers$page_graph$strip_extension(node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node)))){
return node;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__27308_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27308_SHARP_,/\./));
})),new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__27309_SHARP_){
return clojure.string.replace(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27309_SHARP_,/\./)),/content\//,"");
})),new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__27310_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__27310_SHARP_,/\./));
}));
}
});
website_helpers.page_graph.fix_path = (function website_helpers$page_graph$fix_path(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"tree-path","tree-path",683503647),(function (p1__27311_SHARP_){
return clojure.string.replace(p1__27311_SHARP_,/\/home/,"docs/");
}));
});
/**
 * Capitalize every word in a string
 */
website_helpers.page_graph.capitalize_words = (function website_helpers$page_graph$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
website_helpers.page_graph.prettify_name = (function website_helpers$page_graph$prettify_name(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__27314_SHARP_){
return website_helpers.page_graph.capitalize_words(clojure.string.replace(p1__27314_SHARP_,/-/," "));
}));
});
website_helpers.page_graph.page_tree_to_graph = (function website_helpers$page_graph$page_tree_to_graph(page_tree){
var all_subtrees = cljs.core.tree_seq(cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"children","children",-940561982),page_tree,new cljs.core.Keyword(null,"idx","idx",1053688473),(0)], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic(all_subtrees,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.page_graph.prettify_name,website_helpers.page_graph.fix_path,website_helpers.page_graph.strip_extension,website_helpers.page_graph.scale_size,website_helpers.page_graph.assign_group], 0)),new cljs.core.Keyword(null,"links","links",-654507394),website_helpers.page_graph.get_links(all_subtrees)], null);
});
cljs.core.tree_seq(cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var categories = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["c",null,"a 1",null], null), null);
var notes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),((1) + i));
}),website_helpers.notes.example_notes);
return website_helpers.notes.notes_by_category_to_children_tree(website_helpers.notes.organize_notes_by_category(notes,categories),website_helpers.notes.index_categories(categories,cljs.core.count(notes)));
})()], null));
website_helpers.page_graph.page_graph_data_simple = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Home"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mind",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Mind"], null)], null),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),(1),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null)], null));
website_helpers.page_graph.example_page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.page_tree_to_graph(website_helpers.page_graph.example_page_tree));
website_helpers.page_graph.page_graph = (function website_helpers$page_graph$page_graph(var_args){
var G__27341 = arguments.length;
switch (G__27341) {
case 1:
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.page_graph.page_graph', website_helpers.page_graph.page_graph);

(website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$1 = (function (page_tree){
return website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2(page_tree,({}));
}));

(website_helpers.page_graph.page_graph.cljs$core$IFn$_invoke$arity$2 = (function (page_tree,options){
var page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.page_tree_to_graph(page_tree));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_graph_data], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
}));

(website_helpers.page_graph.page_graph.cljs$lang$maxFixedArity = 2);

website_helpers.page_graph.notes_to_graph = (function website_helpers$page_graph$notes_to_graph(notes,selected_categories,all_categories){
var categories_to_show = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected_categories)))?cljs.core.set(cljs.core.keys(all_categories)):selected_categories);
var idxed_notes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),((1) + i));
}),website_helpers.notes.get_notes_for_categories(notes,selected_categories));
var categories_to_idx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(website_helpers.notes.index_categories(categories_to_show,((1) + cljs.core.count(idxed_notes))),"Home",(0));
var category_to_node = (function (c){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(categories_to_idx,c),new cljs.core.Keyword(null,"path","path",-188191168),["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"=true"].join(''),new cljs.core.Keyword(null,"tree-path","tree-path",683503647),"",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),website_helpers.page_graph.update_nodes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null)], null),idxed_notes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(category_to_node,categories_to_show)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.page_graph.prettify_name,website_helpers.page_graph.fix_path,website_helpers.page_graph.strip_extension,website_helpers.page_graph.scale_size,website_helpers.page_graph.assign_group], 0)),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(website_helpers.page_graph.get_category_links(idxed_notes,categories_to_idx),(function (){var iter__5523__auto__ = (function website_helpers$page_graph$notes_to_graph_$_iter__27347(s__27348){
return (new cljs.core.LazySeq(null,(function (){
var s__27348__$1 = s__27348;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27348__$1);
if(temp__5804__auto__){
var s__27348__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27348__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27348__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27350 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27349 = (0);
while(true){
if((i__27349 < size__5522__auto__)){
var vec__27351 = cljs.core._nth(c__5521__auto__,i__27349);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27351,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27351,(1),null);
cljs.core.chunk_append(b__27350,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null));

var G__27374 = (i__27349 + (1));
i__27349 = G__27374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27350),website_helpers$page_graph$notes_to_graph_$_iter__27347(cljs.core.chunk_rest(s__27348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27350),null);
}
} else {
var vec__27354 = cljs.core.first(s__27348__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27354,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27354,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),i,new cljs.core.Keyword(null,"value","value",305978217),(3)], null),website_helpers$page_graph$notes_to_graph_$_iter__27347(cljs.core.rest(s__27348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(categories_to_idx);
})())], null);
});
website_helpers.page_graph.page_graph_from_notes = (function website_helpers$page_graph$page_graph_from_notes(var_args){
var G__27358 = arguments.length;
switch (G__27358) {
case 1:
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('website_helpers.page_graph.page_graph_from_notes', website_helpers.page_graph.page_graph_from_notes);

(website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$1 = (function (notes){
return website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2(notes,({}));
}));

(website_helpers.page_graph.page_graph_from_notes.cljs$core$IFn$_invoke$arity$2 = (function (notes,options){
return (function (){
var all_categories = website_helpers.utils.get_url_param_selections(cljs.core.set(cljs.core.keys(website_helpers.notes.filter_category_selections(notes))),website_helpers.global.url_params);
var page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.page_graph.notes_to_graph(notes,website_helpers.utils.get_selected_vars(all_categories),all_categories));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_graph_data], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
}));

(website_helpers.page_graph.page_graph_from_notes.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=website_helpers.page_graph.js.map
