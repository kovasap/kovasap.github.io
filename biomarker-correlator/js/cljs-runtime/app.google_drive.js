goog.provide('app.google_drive');
app.google_drive.found_files = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.google_drive.get_biomarker_correlator_folder_request = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(100),new cljs.core.Keyword(null,"q","q",689001697),"mimeType='application/vnd.google-apps.folder'\n       and name='biomarker-correlator'",new cljs.core.Keyword(null,"fields","fields",-1932066230),"nextPageToken, files(id, name)"], null);
app.google_drive.list_files_requests = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.google_drive.listed_files = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__36136__auto___55851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_55746){
var state_val_55747 = (state_55746[(1)]);
if((state_val_55747 === (1))){
var state_55746__$1 = state_55746;
var statearr_55748_55852 = state_55746__$1;
(statearr_55748_55852[(2)] = null);

(statearr_55748_55852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55747 === (2))){
var inst_55729 = gapi.client;
var inst_55730 = inst_55729.drive;
var inst_55731 = inst_55730.files;
var inst_55732 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_55733 = [(100),"nextPageToken, files(id, name)"];
var inst_55734 = cljs.core.PersistentHashMap.fromArrays(inst_55732,inst_55733);
var state_55746__$1 = (function (){var statearr_55749 = state_55746;
(statearr_55749[(7)] = inst_55734);

(statearr_55749[(8)] = inst_55731);

return statearr_55749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55746__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_55747 === (3))){
var inst_55744 = (state_55746[(2)]);
var state_55746__$1 = state_55746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55746__$1,inst_55744);
} else {
if((state_val_55747 === (4))){
var inst_55734 = (state_55746[(7)]);
var inst_55731 = (state_55746[(8)]);
var inst_55736 = (state_55746[(2)]);
var inst_55737 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55734,inst_55736], 0));
var inst_55738 = cljs.core.clj__GT_js(inst_55737);
var inst_55739 = inst_55731.list(inst_55738);
var inst_55740 = (function (){return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_55741 = inst_55739.then(inst_55740);
var state_55746__$1 = (function (){var statearr_55750 = state_55746;
(statearr_55750[(9)] = inst_55741);

return statearr_55750;
})();
var statearr_55751_55853 = state_55746__$1;
(statearr_55751_55853[(2)] = null);

(statearr_55751_55853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$google_drive$state_machine__36067__auto__ = null;
var app$google_drive$state_machine__36067__auto____0 = (function (){
var statearr_55752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55752[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_55752[(1)] = (1));

return statearr_55752;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_55746){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_55746);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e55753){var ex__36070__auto__ = e55753;
var statearr_55754_55854 = state_55746;
(statearr_55754_55854[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_55746[(4)]))){
var statearr_55755_55855 = state_55746;
(statearr_55755_55855[(1)] = cljs.core.first((state_55746[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55856 = state_55746;
state_55746 = G__55856;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_55746){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_55746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_55756 = f__36137__auto__();
(statearr_55756[(6)] = c__36136__auto___55851);

return statearr_55756;
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
var c__36136__auto___55857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_55796){
var state_val_55797 = (state_55796[(1)]);
if((state_val_55797 === (1))){
var state_55796__$1 = state_55796;
var statearr_55798_55858 = state_55796__$1;
(statearr_55798_55858[(2)] = null);

(statearr_55798_55858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55797 === (2))){
var inst_55780 = gapi.client;
var inst_55781 = inst_55780.drive;
var inst_55782 = inst_55781.files;
var inst_55783 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var state_55796__$1 = (function (){var statearr_55806 = state_55796;
(statearr_55806[(7)] = inst_55783);

(statearr_55806[(8)] = inst_55782);

return statearr_55806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55796__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_55797 === (3))){
var inst_55794 = (state_55796[(2)]);
var state_55796__$1 = state_55796;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55796__$1,inst_55794);
} else {
if((state_val_55797 === (4))){
var inst_55783 = (state_55796[(7)]);
var inst_55782 = (state_55796[(8)]);
var inst_55785 = (state_55796[(2)]);
var inst_55786 = [inst_55785,"media"];
var inst_55787 = cljs.core.PersistentHashMap.fromArrays(inst_55783,inst_55786);
var inst_55788 = cljs.core.clj__GT_js(inst_55787);
var inst_55789 = inst_55782.get(inst_55788);
var inst_55790 = (function (){return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_55791 = inst_55789.then(inst_55790);
var state_55796__$1 = (function (){var statearr_55812 = state_55796;
(statearr_55812[(9)] = inst_55791);

return statearr_55812;
})();
var statearr_55813_55862 = state_55796__$1;
(statearr_55813_55862[(2)] = null);

(statearr_55813_55862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$google_drive$state_machine__36067__auto__ = null;
var app$google_drive$state_machine__36067__auto____0 = (function (){
var statearr_55814 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55814[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_55814[(1)] = (1));

return statearr_55814;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_55796){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_55796);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e55815){var ex__36070__auto__ = e55815;
var statearr_55816_55863 = state_55796;
(statearr_55816_55863[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_55796[(4)]))){
var statearr_55823_55864 = state_55796;
(statearr_55823_55864[(1)] = cljs.core.first((state_55796[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55865 = state_55796;
state_55796 = G__55865;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_55796){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_55796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_55832 = f__36137__auto__();
(statearr_55832[(6)] = c__36136__auto___55857);

return statearr_55832;
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
var seq__55837 = cljs.core.seq(files);
var chunk__55838 = null;
var count__55839 = (0);
var i__55840 = (0);
while(true){
if((i__55840 < count__55839)){
var file = chunk__55838.cljs$core$IIndexed$_nth$arity$2(null,i__55840);
var data_key_55868 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_55868)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_55868);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__55869 = seq__55837;
var G__55870 = chunk__55838;
var G__55871 = count__55839;
var G__55872 = (i__55840 + (1));
seq__55837 = G__55869;
chunk__55838 = G__55870;
count__55839 = G__55871;
i__55840 = G__55872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__55837);
if(temp__5753__auto__){
var seq__55837__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55837__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__55837__$1);
var G__55873 = cljs.core.chunk_rest(seq__55837__$1);
var G__55874 = c__4679__auto__;
var G__55875 = cljs.core.count(c__4679__auto__);
var G__55876 = (0);
seq__55837 = G__55873;
chunk__55838 = G__55874;
count__55839 = G__55875;
i__55840 = G__55876;
continue;
} else {
var file = cljs.core.first(seq__55837__$1);
var data_key_55877 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_55877)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_55877);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__55879 = cljs.core.next(seq__55837__$1);
var G__55880 = null;
var G__55881 = (0);
var G__55882 = (0);
seq__55837 = G__55879;
chunk__55838 = G__55880;
count__55839 = G__55881;
i__55840 = G__55882;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__55846_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__55846_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
