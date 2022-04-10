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
var c__36136__auto___48700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_48549){
var state_val_48550 = (state_48549[(1)]);
if((state_val_48550 === (1))){
var state_48549__$1 = state_48549;
var statearr_48552_48702 = state_48549__$1;
(statearr_48552_48702[(2)] = null);

(statearr_48552_48702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48550 === (2))){
var state_48549__$1 = state_48549;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48549__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_48550 === (3))){
var inst_48547 = (state_48549[(2)]);
var state_48549__$1 = state_48549;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48549__$1,inst_48547);
} else {
if((state_val_48550 === (4))){
var inst_48526 = (state_48549[(2)]);
var inst_48528 = app.google_drive.get_gapi();
var state_48549__$1 = (function (){var statearr_48558 = state_48549;
(statearr_48558[(7)] = inst_48526);

return statearr_48558;
})();
if(cljs.core.truth_(inst_48528)){
var statearr_48561_48704 = state_48549__$1;
(statearr_48561_48704[(1)] = (5));

} else {
var statearr_48564_48705 = state_48549__$1;
(statearr_48564_48705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48550 === (5))){
var inst_48526 = (state_48549[(7)]);
var inst_48530 = app.google_drive.get_gapi();
var inst_48531 = inst_48530.client;
var inst_48532 = inst_48531.drive;
var inst_48533 = inst_48532.files;
var inst_48534 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_48535 = [(100),"nextPageToken, files(id, name)"];
var inst_48536 = cljs.core.PersistentHashMap.fromArrays(inst_48534,inst_48535);
var inst_48537 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48536,inst_48526], 0));
var inst_48538 = cljs.core.clj__GT_js(inst_48537);
var inst_48539 = inst_48533.list(inst_48538);
var inst_48540 = (function (){var request = inst_48526;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_48541 = inst_48539.then(inst_48540);
var state_48549__$1 = state_48549;
var statearr_48566_48722 = state_48549__$1;
(statearr_48566_48722[(2)] = inst_48541);

(statearr_48566_48722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48550 === (6))){
var state_48549__$1 = state_48549;
var statearr_48567_48723 = state_48549__$1;
(statearr_48567_48723[(2)] = null);

(statearr_48567_48723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48550 === (7))){
var inst_48544 = (state_48549[(2)]);
var state_48549__$1 = (function (){var statearr_48568 = state_48549;
(statearr_48568[(8)] = inst_48544);

return statearr_48568;
})();
var statearr_48569_48724 = state_48549__$1;
(statearr_48569_48724[(2)] = null);

(statearr_48569_48724[(1)] = (2));


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
var statearr_48573 = [null,null,null,null,null,null,null,null,null];
(statearr_48573[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_48573[(1)] = (1));

return statearr_48573;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_48549){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_48549);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e48574){var ex__36070__auto__ = e48574;
var statearr_48575_48727 = state_48549;
(statearr_48575_48727[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_48549[(4)]))){
var statearr_48576_48729 = state_48549;
(statearr_48576_48729[(1)] = cljs.core.first((state_48549[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48739 = state_48549;
state_48549 = G__48739;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_48549){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_48549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_48579 = f__36137__auto__();
(statearr_48579[(6)] = c__36136__auto___48700);

return statearr_48579;
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
var c__36136__auto___48757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_48611){
var state_val_48612 = (state_48611[(1)]);
if((state_val_48612 === (1))){
var state_48611__$1 = state_48611;
var statearr_48616_48762 = state_48611__$1;
(statearr_48616_48762[(2)] = null);

(statearr_48616_48762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (2))){
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48611__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_48612 === (3))){
var inst_48609 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48611__$1,inst_48609);
} else {
if((state_val_48612 === (4))){
var inst_48588 = (state_48611[(2)]);
var inst_48589 = app.google_drive.get_gapi();
var state_48611__$1 = (function (){var statearr_48620 = state_48611;
(statearr_48620[(7)] = inst_48588);

return statearr_48620;
})();
if(cljs.core.truth_(inst_48589)){
var statearr_48621_48765 = state_48611__$1;
(statearr_48621_48765[(1)] = (5));

} else {
var statearr_48623_48766 = state_48611__$1;
(statearr_48623_48766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (5))){
var inst_48588 = (state_48611[(7)]);
var inst_48592 = app.google_drive.get_gapi();
var inst_48593 = inst_48592.client;
var inst_48594 = inst_48593.drive;
var inst_48595 = inst_48594.files;
var inst_48596 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_48597 = [inst_48588,"media"];
var inst_48598 = cljs.core.PersistentHashMap.fromArrays(inst_48596,inst_48597);
var inst_48599 = cljs.core.clj__GT_js(inst_48598);
var inst_48601 = inst_48595.get(inst_48599);
var inst_48602 = (function (){var file_id = inst_48588;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_48603 = inst_48601.then(inst_48602);
var state_48611__$1 = state_48611;
var statearr_48661_48771 = state_48611__$1;
(statearr_48661_48771[(2)] = inst_48603);

(statearr_48661_48771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (6))){
var state_48611__$1 = state_48611;
var statearr_48662_48772 = state_48611__$1;
(statearr_48662_48772[(2)] = null);

(statearr_48662_48772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (7))){
var inst_48606 = (state_48611[(2)]);
var state_48611__$1 = (function (){var statearr_48665 = state_48611;
(statearr_48665[(8)] = inst_48606);

return statearr_48665;
})();
var statearr_48666_48773 = state_48611__$1;
(statearr_48666_48773[(2)] = null);

(statearr_48666_48773[(1)] = (2));


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
var statearr_48668 = [null,null,null,null,null,null,null,null,null];
(statearr_48668[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_48668[(1)] = (1));

return statearr_48668;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_48611){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_48611);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e48670){var ex__36070__auto__ = e48670;
var statearr_48671_48774 = state_48611;
(statearr_48671_48774[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_48611[(4)]))){
var statearr_48673_48775 = state_48611;
(statearr_48673_48775[(1)] = cljs.core.first((state_48611[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48776 = state_48611;
state_48611 = G__48776;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_48611){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_48611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_48674 = f__36137__auto__();
(statearr_48674[(6)] = c__36136__auto___48757);

return statearr_48674;
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
var seq__48680 = cljs.core.seq(files);
var chunk__48681 = null;
var count__48682 = (0);
var i__48683 = (0);
while(true){
if((i__48683 < count__48682)){
var file = chunk__48681.cljs$core$IIndexed$_nth$arity$2(null,i__48683);
var data_key_48778 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_48778)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_48778);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__48779 = seq__48680;
var G__48780 = chunk__48681;
var G__48781 = count__48682;
var G__48782 = (i__48683 + (1));
seq__48680 = G__48779;
chunk__48681 = G__48780;
count__48682 = G__48781;
i__48683 = G__48782;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48680);
if(temp__5753__auto__){
var seq__48680__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48680__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__48680__$1);
var G__48784 = cljs.core.chunk_rest(seq__48680__$1);
var G__48785 = c__4679__auto__;
var G__48786 = cljs.core.count(c__4679__auto__);
var G__48787 = (0);
seq__48680 = G__48784;
chunk__48681 = G__48785;
count__48682 = G__48786;
i__48683 = G__48787;
continue;
} else {
var file = cljs.core.first(seq__48680__$1);
var data_key_48788 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_48788)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_48788);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__48789 = cljs.core.next(seq__48680__$1);
var G__48790 = null;
var G__48791 = (0);
var G__48792 = (0);
seq__48680 = G__48789;
chunk__48681 = G__48790;
count__48682 = G__48791;
i__48683 = G__48792;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__48692_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__48692_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
