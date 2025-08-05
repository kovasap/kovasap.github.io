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
var c__35952__auto___49291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35953__auto__ = (function (){var switch__35882__auto__ = (function (state_49182){
var state_val_49183 = (state_49182[(1)]);
if((state_val_49183 === (1))){
var state_49182__$1 = state_49182;
var statearr_49184_49292 = state_49182__$1;
(statearr_49184_49292[(2)] = null);

(statearr_49184_49292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (2))){
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49182__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_49183 === (3))){
var inst_49180 = (state_49182[(2)]);
var state_49182__$1 = state_49182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49182__$1,inst_49180);
} else {
if((state_val_49183 === (4))){
var inst_49155 = (state_49182[(2)]);
var inst_49157 = app.google_drive.get_gapi();
var state_49182__$1 = (function (){var statearr_49187 = state_49182;
(statearr_49187[(7)] = inst_49155);

return statearr_49187;
})();
if(cljs.core.truth_(inst_49157)){
var statearr_49188_49293 = state_49182__$1;
(statearr_49188_49293[(1)] = (5));

} else {
var statearr_49190_49294 = state_49182__$1;
(statearr_49190_49294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (5))){
var inst_49155 = (state_49182[(7)]);
var inst_49161 = app.google_drive.get_gapi();
var inst_49162 = inst_49161.client;
var inst_49163 = inst_49162.drive;
var inst_49164 = inst_49163.files;
var inst_49165 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_49166 = [(100),"nextPageToken, files(id, name)"];
var inst_49167 = cljs.core.PersistentHashMap.fromArrays(inst_49165,inst_49166);
var inst_49168 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49167,inst_49155], 0));
var inst_49169 = cljs.core.clj__GT_js(inst_49168);
var inst_49170 = inst_49164.list(inst_49169);
var inst_49172 = (function (){var request = inst_49155;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_49173 = inst_49170.then(inst_49172);
var state_49182__$1 = state_49182;
var statearr_49192_49295 = state_49182__$1;
(statearr_49192_49295[(2)] = inst_49173);

(statearr_49192_49295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (6))){
var state_49182__$1 = state_49182;
var statearr_49195_49296 = state_49182__$1;
(statearr_49195_49296[(2)] = null);

(statearr_49195_49296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49183 === (7))){
var inst_49177 = (state_49182[(2)]);
var state_49182__$1 = (function (){var statearr_49196 = state_49182;
(statearr_49196[(8)] = inst_49177);

return statearr_49196;
})();
var statearr_49197_49297 = state_49182__$1;
(statearr_49197_49297[(2)] = null);

(statearr_49197_49297[(1)] = (2));


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
var app$google_drive$state_machine__35883__auto__ = null;
var app$google_drive$state_machine__35883__auto____0 = (function (){
var statearr_49199 = [null,null,null,null,null,null,null,null,null];
(statearr_49199[(0)] = app$google_drive$state_machine__35883__auto__);

(statearr_49199[(1)] = (1));

return statearr_49199;
});
var app$google_drive$state_machine__35883__auto____1 = (function (state_49182){
while(true){
var ret_value__35884__auto__ = (function (){try{while(true){
var result__35885__auto__ = switch__35882__auto__(state_49182);
if(cljs.core.keyword_identical_QMARK_(result__35885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35885__auto__;
}
break;
}
}catch (e49204){var ex__35886__auto__ = e49204;
var statearr_49205_49298 = state_49182;
(statearr_49205_49298[(2)] = ex__35886__auto__);


if(cljs.core.seq((state_49182[(4)]))){
var statearr_49206_49299 = state_49182;
(statearr_49206_49299[(1)] = cljs.core.first((state_49182[(4)])));

} else {
throw ex__35886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49301 = state_49182;
state_49182 = G__49301;
continue;
} else {
return ret_value__35884__auto__;
}
break;
}
});
app$google_drive$state_machine__35883__auto__ = function(state_49182){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__35883__auto____0.call(this);
case 1:
return app$google_drive$state_machine__35883__auto____1.call(this,state_49182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__35883__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__35883__auto____0;
app$google_drive$state_machine__35883__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__35883__auto____1;
return app$google_drive$state_machine__35883__auto__;
})()
})();
var state__35954__auto__ = (function (){var statearr_49207 = f__35953__auto__();
(statearr_49207[(6)] = c__35952__auto___49291);

return statearr_49207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35954__auto__);
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
var c__35952__auto___49302 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__35953__auto__ = (function (){var switch__35882__auto__ = (function (state_49244){
var state_val_49245 = (state_49244[(1)]);
if((state_val_49245 === (1))){
var state_49244__$1 = state_49244;
var statearr_49251_49303 = state_49244__$1;
(statearr_49251_49303[(2)] = null);

(statearr_49251_49303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (2))){
var state_49244__$1 = state_49244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49244__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_49245 === (3))){
var inst_49242 = (state_49244[(2)]);
var state_49244__$1 = state_49244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49244__$1,inst_49242);
} else {
if((state_val_49245 === (4))){
var inst_49221 = (state_49244[(2)]);
var inst_49222 = app.google_drive.get_gapi();
var state_49244__$1 = (function (){var statearr_49255 = state_49244;
(statearr_49255[(7)] = inst_49221);

return statearr_49255;
})();
if(cljs.core.truth_(inst_49222)){
var statearr_49257_49304 = state_49244__$1;
(statearr_49257_49304[(1)] = (5));

} else {
var statearr_49258_49305 = state_49244__$1;
(statearr_49258_49305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (5))){
var inst_49221 = (state_49244[(7)]);
var inst_49224 = app.google_drive.get_gapi();
var inst_49226 = inst_49224.client;
var inst_49227 = inst_49226.drive;
var inst_49228 = inst_49227.files;
var inst_49229 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_49230 = [inst_49221,"media"];
var inst_49231 = cljs.core.PersistentHashMap.fromArrays(inst_49229,inst_49230);
var inst_49232 = cljs.core.clj__GT_js(inst_49231);
var inst_49233 = inst_49228.get(inst_49232);
var inst_49235 = (function (){var file_id = inst_49221;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_49236 = inst_49233.then(inst_49235);
var state_49244__$1 = state_49244;
var statearr_49261_49306 = state_49244__$1;
(statearr_49261_49306[(2)] = inst_49236);

(statearr_49261_49306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (6))){
var state_49244__$1 = state_49244;
var statearr_49262_49307 = state_49244__$1;
(statearr_49262_49307[(2)] = null);

(statearr_49262_49307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49245 === (7))){
var inst_49239 = (state_49244[(2)]);
var state_49244__$1 = (function (){var statearr_49265 = state_49244;
(statearr_49265[(8)] = inst_49239);

return statearr_49265;
})();
var statearr_49266_49308 = state_49244__$1;
(statearr_49266_49308[(2)] = null);

(statearr_49266_49308[(1)] = (2));


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
var app$google_drive$state_machine__35883__auto__ = null;
var app$google_drive$state_machine__35883__auto____0 = (function (){
var statearr_49269 = [null,null,null,null,null,null,null,null,null];
(statearr_49269[(0)] = app$google_drive$state_machine__35883__auto__);

(statearr_49269[(1)] = (1));

return statearr_49269;
});
var app$google_drive$state_machine__35883__auto____1 = (function (state_49244){
while(true){
var ret_value__35884__auto__ = (function (){try{while(true){
var result__35885__auto__ = switch__35882__auto__(state_49244);
if(cljs.core.keyword_identical_QMARK_(result__35885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35885__auto__;
}
break;
}
}catch (e49271){var ex__35886__auto__ = e49271;
var statearr_49272_49310 = state_49244;
(statearr_49272_49310[(2)] = ex__35886__auto__);


if(cljs.core.seq((state_49244[(4)]))){
var statearr_49274_49311 = state_49244;
(statearr_49274_49311[(1)] = cljs.core.first((state_49244[(4)])));

} else {
throw ex__35886__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__35884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49312 = state_49244;
state_49244 = G__49312;
continue;
} else {
return ret_value__35884__auto__;
}
break;
}
});
app$google_drive$state_machine__35883__auto__ = function(state_49244){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__35883__auto____0.call(this);
case 1:
return app$google_drive$state_machine__35883__auto____1.call(this,state_49244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__35883__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__35883__auto____0;
app$google_drive$state_machine__35883__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__35883__auto____1;
return app$google_drive$state_machine__35883__auto__;
})()
})();
var state__35954__auto__ = (function (){var statearr_49280 = f__35953__auto__();
(statearr_49280[(6)] = c__35952__auto___49302);

return statearr_49280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__35954__auto__);
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
var seq__49286 = cljs.core.seq(files);
var chunk__49287 = null;
var count__49288 = (0);
var i__49289 = (0);
while(true){
if((i__49289 < count__49288)){
var file = chunk__49287.cljs$core$IIndexed$_nth$arity$2(null,i__49289);
var data_key_49314 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_49314)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_49314);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__49316 = seq__49286;
var G__49317 = chunk__49287;
var G__49318 = count__49288;
var G__49319 = (i__49289 + (1));
seq__49286 = G__49316;
chunk__49287 = G__49317;
count__49288 = G__49318;
i__49289 = G__49319;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49286);
if(temp__5753__auto__){
var seq__49286__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49286__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49286__$1);
var G__49320 = cljs.core.chunk_rest(seq__49286__$1);
var G__49321 = c__4679__auto__;
var G__49322 = cljs.core.count(c__4679__auto__);
var G__49323 = (0);
seq__49286 = G__49320;
chunk__49287 = G__49321;
count__49288 = G__49322;
i__49289 = G__49323;
continue;
} else {
var file = cljs.core.first(seq__49286__$1);
var data_key_49324 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_49324)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_49324);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__49325 = cljs.core.next(seq__49286__$1);
var G__49326 = null;
var G__49327 = (0);
var G__49328 = (0);
seq__49286 = G__49325;
chunk__49287 = G__49326;
count__49288 = G__49327;
i__49289 = G__49328;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__49290_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__49290_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
