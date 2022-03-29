goog.provide('app.google_drive');
/**
 * Returns nil if getting the gapi failed for some reason and js/gapi is
 *   undefined as a result.
 */
app.google_drive.get_gapi = (function app$google_drive$get_gapi(){
if((gapi.client == null)){
return null;
} else {
return gapi;
}
});
app.google_drive.found_files = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.google_drive.get_biomarker_correlator_folder_request = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(100),new cljs.core.Keyword(null,"q","q",689001697),"mimeType='application/vnd.google-apps.folder'\n       and name='biomarker-correlator'",new cljs.core.Keyword(null,"fields","fields",-1932066230),"nextPageToken, files(id, name)"], null);
app.google_drive.list_files_requests = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.google_drive.listed_files = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__36136__auto___47681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_47584){
var state_val_47585 = (state_47584[(1)]);
if((state_val_47585 === (1))){
var state_47584__$1 = state_47584;
var statearr_47586_47682 = state_47584__$1;
(statearr_47586_47682[(2)] = null);

(statearr_47586_47682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47585 === (2))){
var state_47584__$1 = state_47584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47584__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_47585 === (3))){
var inst_47582 = (state_47584[(2)]);
var state_47584__$1 = state_47584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47584__$1,inst_47582);
} else {
if((state_val_47585 === (4))){
var inst_47562 = (state_47584[(2)]);
var inst_47563 = app.google_drive.get_gapi();
var state_47584__$1 = (function (){var statearr_47587 = state_47584;
(statearr_47587[(7)] = inst_47562);

return statearr_47587;
})();
if(cljs.core.truth_(inst_47563)){
var statearr_47588_47683 = state_47584__$1;
(statearr_47588_47683[(1)] = (5));

} else {
var statearr_47589_47684 = state_47584__$1;
(statearr_47589_47684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47585 === (5))){
var inst_47562 = (state_47584[(7)]);
var inst_47565 = app.google_drive.get_gapi();
var inst_47566 = inst_47565.client;
var inst_47567 = inst_47566.drive;
var inst_47568 = inst_47567.files;
var inst_47569 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_47570 = [(100),"nextPageToken, files(id, name)"];
var inst_47571 = cljs.core.PersistentHashMap.fromArrays(inst_47569,inst_47570);
var inst_47572 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_47571,inst_47562], 0));
var inst_47573 = cljs.core.clj__GT_js(inst_47572);
var inst_47574 = inst_47568.list(inst_47573);
var inst_47575 = (function (){var request = inst_47562;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_47576 = inst_47574.then(inst_47575);
var state_47584__$1 = state_47584;
var statearr_47590_47708 = state_47584__$1;
(statearr_47590_47708[(2)] = inst_47576);

(statearr_47590_47708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47585 === (6))){
var state_47584__$1 = state_47584;
var statearr_47591_47711 = state_47584__$1;
(statearr_47591_47711[(2)] = null);

(statearr_47591_47711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47585 === (7))){
var inst_47579 = (state_47584[(2)]);
var state_47584__$1 = (function (){var statearr_47592 = state_47584;
(statearr_47592[(8)] = inst_47579);

return statearr_47592;
})();
var statearr_47593_47712 = state_47584__$1;
(statearr_47593_47712[(2)] = null);

(statearr_47593_47712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var app$google_drive$state_machine__36067__auto__ = null;
var app$google_drive$state_machine__36067__auto____0 = (function (){
var statearr_47594 = [null,null,null,null,null,null,null,null,null];
(statearr_47594[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_47594[(1)] = (1));

return statearr_47594;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_47584){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_47584);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e47595){var ex__36070__auto__ = e47595;
var statearr_47596_47714 = state_47584;
(statearr_47596_47714[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_47584[(4)]))){
var statearr_47597_47715 = state_47584;
(statearr_47597_47715[(1)] = cljs.core.first((state_47584[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47716 = state_47584;
state_47584 = G__47716;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_47584){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_47584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_47598 = f__36137__auto__();
(statearr_47598[(6)] = c__36136__auto___47681);

return statearr_47598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

/**
 * Gets the single file id in a list-files response.
 */
app.google_drive.get_single_file_id = (function app$google_drive$get_single_file_id(list_files_response){
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(list_files_response));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(files))){
} else {
throw (new Error("Assert failed: (= 1 (count files))"));
}

return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(files));
});
app.google_drive.get_file_ids = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.google_drive.file_datas = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__36136__auto___47721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_47622){
var state_val_47623 = (state_47622[(1)]);
if((state_val_47623 === (1))){
var state_47622__$1 = state_47622;
var statearr_47624_47723 = state_47622__$1;
(statearr_47624_47723[(2)] = null);

(statearr_47624_47723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47623 === (2))){
var state_47622__$1 = state_47622;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47622__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_47623 === (3))){
var inst_47620 = (state_47622[(2)]);
var state_47622__$1 = state_47622;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47622__$1,inst_47620);
} else {
if((state_val_47623 === (4))){
var inst_47601 = (state_47622[(2)]);
var inst_47602 = app.google_drive.get_gapi();
var state_47622__$1 = (function (){var statearr_47625 = state_47622;
(statearr_47625[(7)] = inst_47601);

return statearr_47625;
})();
if(cljs.core.truth_(inst_47602)){
var statearr_47626_47724 = state_47622__$1;
(statearr_47626_47724[(1)] = (5));

} else {
var statearr_47627_47725 = state_47622__$1;
(statearr_47627_47725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47623 === (5))){
var inst_47601 = (state_47622[(7)]);
var inst_47604 = app.google_drive.get_gapi();
var inst_47605 = inst_47604.client;
var inst_47606 = inst_47605.drive;
var inst_47607 = inst_47606.files;
var inst_47608 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_47609 = [inst_47601,"media"];
var inst_47610 = cljs.core.PersistentHashMap.fromArrays(inst_47608,inst_47609);
var inst_47611 = cljs.core.clj__GT_js(inst_47610);
var inst_47612 = inst_47607.get(inst_47611);
var inst_47613 = (function (){var file_id = inst_47601;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_47614 = inst_47612.then(inst_47613);
var state_47622__$1 = state_47622;
var statearr_47628_47727 = state_47622__$1;
(statearr_47628_47727[(2)] = inst_47614);

(statearr_47628_47727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47623 === (6))){
var state_47622__$1 = state_47622;
var statearr_47629_47728 = state_47622__$1;
(statearr_47629_47728[(2)] = null);

(statearr_47629_47728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47623 === (7))){
var inst_47617 = (state_47622[(2)]);
var state_47622__$1 = (function (){var statearr_47630 = state_47622;
(statearr_47630[(8)] = inst_47617);

return statearr_47630;
})();
var statearr_47631_47730 = state_47622__$1;
(statearr_47631_47730[(2)] = null);

(statearr_47631_47730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var app$google_drive$state_machine__36067__auto__ = null;
var app$google_drive$state_machine__36067__auto____0 = (function (){
var statearr_47632 = [null,null,null,null,null,null,null,null,null];
(statearr_47632[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_47632[(1)] = (1));

return statearr_47632;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_47622){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_47622);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e47633){var ex__36070__auto__ = e47633;
var statearr_47634_47733 = state_47622;
(statearr_47634_47733[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_47622[(4)]))){
var statearr_47635_47734 = state_47622;
(statearr_47635_47734[(1)] = cljs.core.first((state_47622[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47735 = state_47622;
state_47622 = G__47735;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_47622){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_47622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_47636 = f__36137__auto__();
(statearr_47636[(6)] = c__36136__auto___47721);

return statearr_47636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36138__auto__);
}));

app.google_drive.get_file_data = (function app$google_drive$get_file_data(file_id,data_key){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.get_file_ids,file_id);

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,(function (response){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,data_key,app.csv.my_parse_csv(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)));
}));
});
/**
 * Returns the key under which to add the data to the csv-data atom. Returns
 *   nil if the file in question should not be parsed (it is not a csv file, or
 *   otherwise isn't parsable)
 */
app.google_drive.get_data_key = (function app$google_drive$get_data_key(file_name){
if((!(clojure.string.ends_with_QMARK_(file_name,".csv")))){
return null;
} else {
if(clojure.string.includes_QMARK_(file_name,"biomarker")){
return new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135);
} else {
if(clojure.string.includes_QMARK_(file_name,"input")){
return new cljs.core.Keyword(null,"input-data","input-data",2052925403);
} else {
return null;

}
}
}
});
/**
 * Gets data for all files in the folder with the given id.
 */
app.google_drive.get_folder_file_data = (function app$google_drive$get_folder_file_data(folder_id){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.list_files_requests,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(folder_id),"' in parents"].join('')], null));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (response){
var files = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(response));
var seq__47663 = cljs.core.seq(files);
var chunk__47664 = null;
var count__47665 = (0);
var i__47666 = (0);
while(true){
if((i__47666 < count__47665)){
var file = chunk__47664.cljs$core$IIndexed$_nth$arity$2(null,i__47666);
var data_key_47741 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_47741)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_47741);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__47742 = seq__47663;
var G__47743 = chunk__47664;
var G__47744 = count__47665;
var G__47745 = (i__47666 + (1));
seq__47663 = G__47742;
chunk__47664 = G__47743;
count__47665 = G__47744;
i__47666 = G__47745;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47663);
if(temp__5753__auto__){
var seq__47663__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47663__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47663__$1);
var G__47746 = cljs.core.chunk_rest(seq__47663__$1);
var G__47747 = c__4679__auto__;
var G__47748 = cljs.core.count(c__4679__auto__);
var G__47749 = (0);
seq__47663 = G__47746;
chunk__47664 = G__47747;
count__47665 = G__47748;
i__47666 = G__47749;
continue;
} else {
var file = cljs.core.first(seq__47663__$1);
var data_key_47750 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_47750)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_47750);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__47751 = cljs.core.next(seq__47663__$1);
var G__47752 = null;
var G__47753 = (0);
var G__47754 = (0);
seq__47663 = G__47751;
chunk__47664 = G__47752;
count__47665 = G__47753;
i__47666 = G__47754;
continue;
}
} else {
return null;
}
}
break;
}
}));
});
/**
 * Populates the data atom with a map from filenames to csv data for all
 * datafiles in the 'biomarker-correlator' Google Drive folder.
 */
app.google_drive.populate_data_BANG_ = (function app$google_drive$populate_data_BANG_(){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.list_files_requests,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"q","q",689001697),"mimeType='application/vnd.google-apps.folder'\n                               and name='biomarker-correlator'"], null));

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__47676_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__47676_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
