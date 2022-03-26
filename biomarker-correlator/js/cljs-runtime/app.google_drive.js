goog.provide('app.google_drive');
app.google_drive.found_files = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
app.google_drive.get_biomarker_correlator_folder_request = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),(100),new cljs.core.Keyword(null,"q","q",689001697),"mimeType='application/vnd.google-apps.folder'\n       and name='biomarker-correlator'",new cljs.core.Keyword(null,"fields","fields",-1932066230),"nextPageToken, files(id, name)"], null);
app.google_drive.list_files_requests = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.google_drive.listed_files = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__36136__auto___58218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_58057){
var state_val_58058 = (state_58057[(1)]);
if((state_val_58058 === (1))){
var state_58057__$1 = state_58057;
var statearr_58067_58219 = state_58057__$1;
(statearr_58067_58219[(2)] = null);

(statearr_58067_58219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58058 === (2))){
var inst_58032 = gapi.client;
var inst_58033 = inst_58032.drive;
var inst_58034 = inst_58033.files;
var inst_58035 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_58037 = [(100),"nextPageToken, files(id, name)"];
var inst_58038 = cljs.core.PersistentHashMap.fromArrays(inst_58035,inst_58037);
var state_58057__$1 = (function (){var statearr_58069 = state_58057;
(statearr_58069[(7)] = inst_58034);

(statearr_58069[(8)] = inst_58038);

return statearr_58069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58057__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_58058 === (3))){
var inst_58050 = (state_58057[(2)]);
var state_58057__$1 = state_58057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58057__$1,inst_58050);
} else {
if((state_val_58058 === (4))){
var inst_58034 = (state_58057[(7)]);
var inst_58038 = (state_58057[(8)]);
var inst_58040 = (state_58057[(2)]);
var inst_58041 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_58038,inst_58040], 0));
var inst_58042 = cljs.core.clj__GT_js(inst_58041);
var inst_58043 = inst_58034.list(inst_58042);
var inst_58044 = (function (){return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_58045 = inst_58043.then(inst_58044);
var state_58057__$1 = (function (){var statearr_58071 = state_58057;
(statearr_58071[(9)] = inst_58045);

return statearr_58071;
})();
var statearr_58075_58222 = state_58057__$1;
(statearr_58075_58222[(2)] = null);

(statearr_58075_58222[(1)] = (2));


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
var statearr_58077 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58077[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_58077[(1)] = (1));

return statearr_58077;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_58057){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_58057);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e58080){var ex__36070__auto__ = e58080;
var statearr_58082_58223 = state_58057;
(statearr_58082_58223[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_58057[(4)]))){
var statearr_58085_58225 = state_58057;
(statearr_58085_58225[(1)] = cljs.core.first((state_58057[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58226 = state_58057;
state_58057 = G__58226;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_58057){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_58057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_58088 = f__36137__auto__();
(statearr_58088[(6)] = c__36136__auto___58218);

return statearr_58088;
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
var c__36136__auto___58230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_58131){
var state_val_58132 = (state_58131[(1)]);
if((state_val_58132 === (1))){
var state_58131__$1 = state_58131;
var statearr_58137_58231 = state_58131__$1;
(statearr_58137_58231[(2)] = null);

(statearr_58137_58231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58132 === (2))){
var inst_58113 = gapi.client;
var inst_58114 = inst_58113.drive;
var inst_58115 = inst_58114.files;
var inst_58118 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var state_58131__$1 = (function (){var statearr_58138 = state_58131;
(statearr_58138[(7)] = inst_58118);

(statearr_58138[(8)] = inst_58115);

return statearr_58138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58131__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_58132 === (3))){
var inst_58129 = (state_58131[(2)]);
var state_58131__$1 = state_58131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58131__$1,inst_58129);
} else {
if((state_val_58132 === (4))){
var inst_58118 = (state_58131[(7)]);
var inst_58115 = (state_58131[(8)]);
var inst_58120 = (state_58131[(2)]);
var inst_58121 = [inst_58120,"media"];
var inst_58122 = cljs.core.PersistentHashMap.fromArrays(inst_58118,inst_58121);
var inst_58123 = cljs.core.clj__GT_js(inst_58122);
var inst_58124 = inst_58115.get(inst_58123);
var inst_58125 = (function (){return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_58126 = inst_58124.then(inst_58125);
var state_58131__$1 = (function (){var statearr_58145 = state_58131;
(statearr_58145[(9)] = inst_58126);

return statearr_58145;
})();
var statearr_58148_58238 = state_58131__$1;
(statearr_58148_58238[(2)] = null);

(statearr_58148_58238[(1)] = (2));


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
var statearr_58153 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58153[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_58153[(1)] = (1));

return statearr_58153;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_58131){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_58131);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e58155){var ex__36070__auto__ = e58155;
var statearr_58156_58244 = state_58131;
(statearr_58156_58244[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_58131[(4)]))){
var statearr_58159_58245 = state_58131;
(statearr_58159_58245[(1)] = cljs.core.first((state_58131[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58246 = state_58131;
state_58131 = G__58246;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_58131){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_58131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_58160 = f__36137__auto__();
(statearr_58160[(6)] = c__36136__auto___58230);

return statearr_58160;
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
var seq__58182 = cljs.core.seq(files);
var chunk__58183 = null;
var count__58184 = (0);
var i__58185 = (0);
while(true){
if((i__58185 < count__58184)){
var file = chunk__58183.cljs$core$IIndexed$_nth$arity$2(null,i__58185);
var data_key_58251 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_58251)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_58251);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__58256 = seq__58182;
var G__58257 = chunk__58183;
var G__58258 = count__58184;
var G__58259 = (i__58185 + (1));
seq__58182 = G__58256;
chunk__58183 = G__58257;
count__58184 = G__58258;
i__58185 = G__58259;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__58182);
if(temp__5753__auto__){
var seq__58182__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58182__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__58182__$1);
var G__58265 = cljs.core.chunk_rest(seq__58182__$1);
var G__58266 = c__4679__auto__;
var G__58267 = cljs.core.count(c__4679__auto__);
var G__58268 = (0);
seq__58182 = G__58265;
chunk__58183 = G__58266;
count__58184 = G__58267;
i__58185 = G__58268;
continue;
} else {
var file = cljs.core.first(seq__58182__$1);
var data_key_58269 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_58269)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_58269);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__58278 = cljs.core.next(seq__58182__$1);
var G__58279 = null;
var G__58280 = (0);
var G__58281 = (0);
seq__58182 = G__58278;
chunk__58183 = G__58279;
count__58184 = G__58280;
i__58185 = G__58281;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__58216_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__58216_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
