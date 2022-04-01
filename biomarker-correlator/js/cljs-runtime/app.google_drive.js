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
var c__36136__auto___50272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_50103){
var state_val_50104 = (state_50103[(1)]);
if((state_val_50104 === (1))){
var state_50103__$1 = state_50103;
var statearr_50105_50273 = state_50103__$1;
(statearr_50105_50273[(2)] = null);

(statearr_50105_50273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (2))){
var state_50103__$1 = state_50103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50103__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_50104 === (3))){
var inst_50101 = (state_50103[(2)]);
var state_50103__$1 = state_50103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50103__$1,inst_50101);
} else {
if((state_val_50104 === (4))){
var inst_50077 = (state_50103[(2)]);
var inst_50078 = app.google_drive.get_gapi();
var state_50103__$1 = (function (){var statearr_50106 = state_50103;
(statearr_50106[(7)] = inst_50077);

return statearr_50106;
})();
if(cljs.core.truth_(inst_50078)){
var statearr_50107_50274 = state_50103__$1;
(statearr_50107_50274[(1)] = (5));

} else {
var statearr_50108_50275 = state_50103__$1;
(statearr_50108_50275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (5))){
var inst_50077 = (state_50103[(7)]);
var inst_50080 = app.google_drive.get_gapi();
var inst_50081 = inst_50080.client;
var inst_50082 = inst_50081.drive;
var inst_50083 = inst_50082.files;
var inst_50086 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_50087 = [(100),"nextPageToken, files(id, name)"];
var inst_50088 = cljs.core.PersistentHashMap.fromArrays(inst_50086,inst_50087);
var inst_50089 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_50088,inst_50077], 0));
var inst_50090 = cljs.core.clj__GT_js(inst_50089);
var inst_50091 = inst_50083.list(inst_50090);
var inst_50094 = (function (){var request = inst_50077;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_50095 = inst_50091.then(inst_50094);
var state_50103__$1 = state_50103;
var statearr_50110_50276 = state_50103__$1;
(statearr_50110_50276[(2)] = inst_50095);

(statearr_50110_50276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (6))){
var state_50103__$1 = state_50103;
var statearr_50112_50277 = state_50103__$1;
(statearr_50112_50277[(2)] = null);

(statearr_50112_50277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50104 === (7))){
var inst_50098 = (state_50103[(2)]);
var state_50103__$1 = (function (){var statearr_50117 = state_50103;
(statearr_50117[(8)] = inst_50098);

return statearr_50117;
})();
var statearr_50118_50278 = state_50103__$1;
(statearr_50118_50278[(2)] = null);

(statearr_50118_50278[(1)] = (2));


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
var statearr_50120 = [null,null,null,null,null,null,null,null,null];
(statearr_50120[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_50120[(1)] = (1));

return statearr_50120;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_50103){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_50103);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e50124){var ex__36070__auto__ = e50124;
var statearr_50125_50305 = state_50103;
(statearr_50125_50305[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_50103[(4)]))){
var statearr_50126_50306 = state_50103;
(statearr_50126_50306[(1)] = cljs.core.first((state_50103[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50311 = state_50103;
state_50103 = G__50311;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_50103){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_50103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_50142 = f__36137__auto__();
(statearr_50142[(6)] = c__36136__auto___50272);

return statearr_50142;
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
var c__36136__auto___50313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_50191){
var state_val_50192 = (state_50191[(1)]);
if((state_val_50192 === (1))){
var state_50191__$1 = state_50191;
var statearr_50194_50314 = state_50191__$1;
(statearr_50194_50314[(2)] = null);

(statearr_50194_50314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (2))){
var state_50191__$1 = state_50191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50191__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_50192 === (3))){
var inst_50187 = (state_50191[(2)]);
var state_50191__$1 = state_50191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50191__$1,inst_50187);
} else {
if((state_val_50192 === (4))){
var inst_50164 = (state_50191[(2)]);
var inst_50165 = app.google_drive.get_gapi();
var state_50191__$1 = (function (){var statearr_50199 = state_50191;
(statearr_50199[(7)] = inst_50164);

return statearr_50199;
})();
if(cljs.core.truth_(inst_50165)){
var statearr_50208_50315 = state_50191__$1;
(statearr_50208_50315[(1)] = (5));

} else {
var statearr_50209_50316 = state_50191__$1;
(statearr_50209_50316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (5))){
var inst_50164 = (state_50191[(7)]);
var inst_50168 = app.google_drive.get_gapi();
var inst_50169 = inst_50168.client;
var inst_50170 = inst_50169.drive;
var inst_50171 = inst_50170.files;
var inst_50173 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_50174 = [inst_50164,"media"];
var inst_50175 = cljs.core.PersistentHashMap.fromArrays(inst_50173,inst_50174);
var inst_50176 = cljs.core.clj__GT_js(inst_50175);
var inst_50177 = inst_50171.get(inst_50176);
var inst_50179 = (function (){var file_id = inst_50164;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_50181 = inst_50177.then(inst_50179);
var state_50191__$1 = state_50191;
var statearr_50210_50320 = state_50191__$1;
(statearr_50210_50320[(2)] = inst_50181);

(statearr_50210_50320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (6))){
var state_50191__$1 = state_50191;
var statearr_50211_50321 = state_50191__$1;
(statearr_50211_50321[(2)] = null);

(statearr_50211_50321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50192 === (7))){
var inst_50184 = (state_50191[(2)]);
var state_50191__$1 = (function (){var statearr_50213 = state_50191;
(statearr_50213[(8)] = inst_50184);

return statearr_50213;
})();
var statearr_50214_50322 = state_50191__$1;
(statearr_50214_50322[(2)] = null);

(statearr_50214_50322[(1)] = (2));


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
var statearr_50215 = [null,null,null,null,null,null,null,null,null];
(statearr_50215[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_50215[(1)] = (1));

return statearr_50215;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_50191){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_50191);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e50216){var ex__36070__auto__ = e50216;
var statearr_50217_50323 = state_50191;
(statearr_50217_50323[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_50191[(4)]))){
var statearr_50218_50324 = state_50191;
(statearr_50218_50324[(1)] = cljs.core.first((state_50191[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50325 = state_50191;
state_50191 = G__50325;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_50191){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_50191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_50223 = f__36137__auto__();
(statearr_50223[(6)] = c__36136__auto___50313);

return statearr_50223;
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
var seq__50236 = cljs.core.seq(files);
var chunk__50238 = null;
var count__50239 = (0);
var i__50240 = (0);
while(true){
if((i__50240 < count__50239)){
var file = chunk__50238.cljs$core$IIndexed$_nth$arity$2(null,i__50240);
var data_key_50341 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_50341)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_50341);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__50343 = seq__50236;
var G__50344 = chunk__50238;
var G__50345 = count__50239;
var G__50346 = (i__50240 + (1));
seq__50236 = G__50343;
chunk__50238 = G__50344;
count__50239 = G__50345;
i__50240 = G__50346;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50236);
if(temp__5753__auto__){
var seq__50236__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50236__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50236__$1);
var G__50347 = cljs.core.chunk_rest(seq__50236__$1);
var G__50348 = c__4679__auto__;
var G__50349 = cljs.core.count(c__4679__auto__);
var G__50350 = (0);
seq__50236 = G__50347;
chunk__50238 = G__50348;
count__50239 = G__50349;
i__50240 = G__50350;
continue;
} else {
var file = cljs.core.first(seq__50236__$1);
var data_key_50357 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_50357)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_50357);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__50358 = cljs.core.next(seq__50236__$1);
var G__50359 = null;
var G__50360 = (0);
var G__50361 = (0);
seq__50236 = G__50358;
chunk__50238 = G__50359;
count__50239 = G__50360;
i__50240 = G__50361;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__50263_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__50263_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
