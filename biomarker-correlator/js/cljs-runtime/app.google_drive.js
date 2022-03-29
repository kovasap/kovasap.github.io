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
var c__36136__auto___53681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_53448){
var state_val_53449 = (state_53448[(1)]);
if((state_val_53449 === (1))){
var state_53448__$1 = state_53448;
var statearr_53458_53682 = state_53448__$1;
(statearr_53458_53682[(2)] = null);

(statearr_53458_53682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53449 === (2))){
var state_53448__$1 = state_53448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53448__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_53449 === (3))){
var inst_53445 = (state_53448[(2)]);
var state_53448__$1 = state_53448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53448__$1,inst_53445);
} else {
if((state_val_53449 === (4))){
var inst_53424 = (state_53448[(2)]);
var inst_53426 = app.google_drive.get_gapi();
var state_53448__$1 = (function (){var statearr_53461 = state_53448;
(statearr_53461[(7)] = inst_53424);

return statearr_53461;
})();
if(cljs.core.truth_(inst_53426)){
var statearr_53463_53683 = state_53448__$1;
(statearr_53463_53683[(1)] = (5));

} else {
var statearr_53464_53684 = state_53448__$1;
(statearr_53464_53684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53449 === (5))){
var inst_53424 = (state_53448[(7)]);
var inst_53428 = app.google_drive.get_gapi();
var inst_53429 = inst_53428.client;
var inst_53430 = inst_53429.drive;
var inst_53431 = inst_53430.files;
var inst_53432 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_53433 = [(100),"nextPageToken, files(id, name)"];
var inst_53434 = cljs.core.PersistentHashMap.fromArrays(inst_53432,inst_53433);
var inst_53435 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_53434,inst_53424], 0));
var inst_53436 = cljs.core.clj__GT_js(inst_53435);
var inst_53437 = inst_53431.list(inst_53436);
var inst_53438 = (function (){var request = inst_53424;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_53439 = inst_53437.then(inst_53438);
var state_53448__$1 = state_53448;
var statearr_53471_53688 = state_53448__$1;
(statearr_53471_53688[(2)] = inst_53439);

(statearr_53471_53688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53449 === (6))){
var state_53448__$1 = state_53448;
var statearr_53473_53689 = state_53448__$1;
(statearr_53473_53689[(2)] = null);

(statearr_53473_53689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53449 === (7))){
var inst_53442 = (state_53448[(2)]);
var state_53448__$1 = (function (){var statearr_53478 = state_53448;
(statearr_53478[(8)] = inst_53442);

return statearr_53478;
})();
var statearr_53481_53690 = state_53448__$1;
(statearr_53481_53690[(2)] = null);

(statearr_53481_53690[(1)] = (2));


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
var statearr_53483 = [null,null,null,null,null,null,null,null,null];
(statearr_53483[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_53483[(1)] = (1));

return statearr_53483;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_53448){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_53448);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e53486){var ex__36070__auto__ = e53486;
var statearr_53487_53691 = state_53448;
(statearr_53487_53691[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_53448[(4)]))){
var statearr_53491_53692 = state_53448;
(statearr_53491_53692[(1)] = cljs.core.first((state_53448[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53693 = state_53448;
state_53448 = G__53693;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_53448){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_53448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_53495 = f__36137__auto__();
(statearr_53495[(6)] = c__36136__auto___53681);

return statearr_53495;
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
var c__36136__auto___53694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_53601){
var state_val_53602 = (state_53601[(1)]);
if((state_val_53602 === (1))){
var state_53601__$1 = state_53601;
var statearr_53619_53695 = state_53601__$1;
(statearr_53619_53695[(2)] = null);

(statearr_53619_53695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53602 === (2))){
var state_53601__$1 = state_53601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53601__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_53602 === (3))){
var inst_53599 = (state_53601[(2)]);
var state_53601__$1 = state_53601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53601__$1,inst_53599);
} else {
if((state_val_53602 === (4))){
var inst_53580 = (state_53601[(2)]);
var inst_53581 = app.google_drive.get_gapi();
var state_53601__$1 = (function (){var statearr_53620 = state_53601;
(statearr_53620[(7)] = inst_53580);

return statearr_53620;
})();
if(cljs.core.truth_(inst_53581)){
var statearr_53621_53696 = state_53601__$1;
(statearr_53621_53696[(1)] = (5));

} else {
var statearr_53622_53697 = state_53601__$1;
(statearr_53622_53697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53602 === (5))){
var inst_53580 = (state_53601[(7)]);
var inst_53583 = app.google_drive.get_gapi();
var inst_53584 = inst_53583.client;
var inst_53585 = inst_53584.drive;
var inst_53586 = inst_53585.files;
var inst_53587 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_53588 = [inst_53580,"media"];
var inst_53589 = cljs.core.PersistentHashMap.fromArrays(inst_53587,inst_53588);
var inst_53590 = cljs.core.clj__GT_js(inst_53589);
var inst_53591 = inst_53586.get(inst_53590);
var inst_53592 = (function (){var file_id = inst_53580;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_53593 = inst_53591.then(inst_53592);
var state_53601__$1 = state_53601;
var statearr_53623_53698 = state_53601__$1;
(statearr_53623_53698[(2)] = inst_53593);

(statearr_53623_53698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53602 === (6))){
var state_53601__$1 = state_53601;
var statearr_53624_53699 = state_53601__$1;
(statearr_53624_53699[(2)] = null);

(statearr_53624_53699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53602 === (7))){
var inst_53596 = (state_53601[(2)]);
var state_53601__$1 = (function (){var statearr_53625 = state_53601;
(statearr_53625[(8)] = inst_53596);

return statearr_53625;
})();
var statearr_53626_53700 = state_53601__$1;
(statearr_53626_53700[(2)] = null);

(statearr_53626_53700[(1)] = (2));


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
var statearr_53627 = [null,null,null,null,null,null,null,null,null];
(statearr_53627[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_53627[(1)] = (1));

return statearr_53627;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_53601){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_53601);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e53628){var ex__36070__auto__ = e53628;
var statearr_53629_53710 = state_53601;
(statearr_53629_53710[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_53601[(4)]))){
var statearr_53630_53711 = state_53601;
(statearr_53630_53711[(1)] = cljs.core.first((state_53601[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53712 = state_53601;
state_53601 = G__53712;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_53601){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_53601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_53635 = f__36137__auto__();
(statearr_53635[(6)] = c__36136__auto___53694);

return statearr_53635;
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
var seq__53637 = cljs.core.seq(files);
var chunk__53638 = null;
var count__53639 = (0);
var i__53640 = (0);
while(true){
if((i__53640 < count__53639)){
var file = chunk__53638.cljs$core$IIndexed$_nth$arity$2(null,i__53640);
var data_key_53713 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_53713)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_53713);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__53714 = seq__53637;
var G__53715 = chunk__53638;
var G__53716 = count__53639;
var G__53717 = (i__53640 + (1));
seq__53637 = G__53714;
chunk__53638 = G__53715;
count__53639 = G__53716;
i__53640 = G__53717;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53637);
if(temp__5753__auto__){
var seq__53637__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53637__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53637__$1);
var G__53718 = cljs.core.chunk_rest(seq__53637__$1);
var G__53719 = c__4679__auto__;
var G__53720 = cljs.core.count(c__4679__auto__);
var G__53721 = (0);
seq__53637 = G__53718;
chunk__53638 = G__53719;
count__53639 = G__53720;
i__53640 = G__53721;
continue;
} else {
var file = cljs.core.first(seq__53637__$1);
var data_key_53722 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_53722)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_53722);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__53723 = cljs.core.next(seq__53637__$1);
var G__53724 = null;
var G__53725 = (0);
var G__53726 = (0);
seq__53637 = G__53723;
chunk__53638 = G__53724;
count__53639 = G__53725;
i__53640 = G__53726;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__53662_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__53662_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
