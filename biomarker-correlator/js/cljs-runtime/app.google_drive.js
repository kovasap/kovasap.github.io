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
var c__36136__auto___65704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_65505){
var state_val_65507 = (state_65505[(1)]);
if((state_val_65507 === (1))){
var state_65505__$1 = state_65505;
var statearr_65523_65706 = state_65505__$1;
(statearr_65523_65706[(2)] = null);

(statearr_65523_65706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65507 === (2))){
var state_65505__$1 = state_65505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65505__$1,(4),app.google_drive.list_files_requests);
} else {
if((state_val_65507 === (3))){
var inst_65503 = (state_65505[(2)]);
var state_65505__$1 = state_65505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65505__$1,inst_65503);
} else {
if((state_val_65507 === (4))){
var inst_65480 = (state_65505[(2)]);
var inst_65481 = app.google_drive.get_gapi();
var state_65505__$1 = (function (){var statearr_65529 = state_65505;
(statearr_65529[(7)] = inst_65480);

return statearr_65529;
})();
if(cljs.core.truth_(inst_65481)){
var statearr_65531_65713 = state_65505__$1;
(statearr_65531_65713[(1)] = (5));

} else {
var statearr_65532_65716 = state_65505__$1;
(statearr_65532_65716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65507 === (5))){
var inst_65480 = (state_65505[(7)]);
var inst_65483 = app.google_drive.get_gapi();
var inst_65484 = inst_65483.client;
var inst_65485 = inst_65484.drive;
var inst_65486 = inst_65485.files;
var inst_65489 = [new cljs.core.Keyword(null,"pageSize","pageSize",732080883),new cljs.core.Keyword(null,"fields","fields",-1932066230)];
var inst_65490 = [(100),"nextPageToken, files(id, name)"];
var inst_65491 = cljs.core.PersistentHashMap.fromArrays(inst_65489,inst_65490);
var inst_65492 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65491,inst_65480], 0));
var inst_65493 = cljs.core.clj__GT_js(inst_65492);
var inst_65494 = inst_65486.list(inst_65493);
var inst_65495 = (function (){var request = inst_65480;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_65496 = inst_65494.then(inst_65495);
var state_65505__$1 = state_65505;
var statearr_65538_65718 = state_65505__$1;
(statearr_65538_65718[(2)] = inst_65496);

(statearr_65538_65718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65507 === (6))){
var state_65505__$1 = state_65505;
var statearr_65540_65720 = state_65505__$1;
(statearr_65540_65720[(2)] = null);

(statearr_65540_65720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65507 === (7))){
var inst_65499 = (state_65505[(2)]);
var state_65505__$1 = (function (){var statearr_65543 = state_65505;
(statearr_65543[(8)] = inst_65499);

return statearr_65543;
})();
var statearr_65545_65721 = state_65505__$1;
(statearr_65545_65721[(2)] = null);

(statearr_65545_65721[(1)] = (2));


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
var statearr_65550 = [null,null,null,null,null,null,null,null,null];
(statearr_65550[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_65550[(1)] = (1));

return statearr_65550;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_65505){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_65505);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e65553){var ex__36070__auto__ = e65553;
var statearr_65555_65725 = state_65505;
(statearr_65555_65725[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_65505[(4)]))){
var statearr_65557_65727 = state_65505;
(statearr_65557_65727[(1)] = cljs.core.first((state_65505[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65728 = state_65505;
state_65505 = G__65728;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_65505){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_65505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_65571 = f__36137__auto__();
(statearr_65571[(6)] = c__36136__auto___65704);

return statearr_65571;
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
var c__36136__auto___65731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36137__auto__ = (function (){var switch__36066__auto__ = (function (state_65621){
var state_val_65622 = (state_65621[(1)]);
if((state_val_65622 === (1))){
var state_65621__$1 = state_65621;
var statearr_65633_65732 = state_65621__$1;
(statearr_65633_65732[(2)] = null);

(statearr_65633_65732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65622 === (2))){
var state_65621__$1 = state_65621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65621__$1,(4),app.google_drive.get_file_ids);
} else {
if((state_val_65622 === (3))){
var inst_65619 = (state_65621[(2)]);
var state_65621__$1 = state_65621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65621__$1,inst_65619);
} else {
if((state_val_65622 === (4))){
var inst_65589 = (state_65621[(2)]);
var inst_65590 = app.google_drive.get_gapi();
var state_65621__$1 = (function (){var statearr_65634 = state_65621;
(statearr_65634[(7)] = inst_65589);

return statearr_65634;
})();
if(cljs.core.truth_(inst_65590)){
var statearr_65635_65740 = state_65621__$1;
(statearr_65635_65740[(1)] = (5));

} else {
var statearr_65636_65742 = state_65621__$1;
(statearr_65636_65742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65622 === (5))){
var inst_65589 = (state_65621[(7)]);
var inst_65595 = app.google_drive.get_gapi();
var inst_65596 = inst_65595.client;
var inst_65597 = inst_65596.drive;
var inst_65598 = inst_65597.files;
var inst_65604 = [new cljs.core.Keyword(null,"fileId","fileId",-2058475137),new cljs.core.Keyword(null,"alt","alt",-3214426)];
var inst_65606 = [inst_65589,"media"];
var inst_65607 = cljs.core.PersistentHashMap.fromArrays(inst_65604,inst_65606);
var inst_65608 = cljs.core.clj__GT_js(inst_65607);
var inst_65609 = inst_65598.get(inst_65608);
var inst_65611 = (function (){var file_id = inst_65589;
return (function (response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.file_datas,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
})();
var inst_65612 = inst_65609.then(inst_65611);
var state_65621__$1 = state_65621;
var statearr_65641_65744 = state_65621__$1;
(statearr_65641_65744[(2)] = inst_65612);

(statearr_65641_65744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65622 === (6))){
var state_65621__$1 = state_65621;
var statearr_65642_65747 = state_65621__$1;
(statearr_65642_65747[(2)] = null);

(statearr_65642_65747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65622 === (7))){
var inst_65616 = (state_65621[(2)]);
var state_65621__$1 = (function (){var statearr_65643 = state_65621;
(statearr_65643[(8)] = inst_65616);

return statearr_65643;
})();
var statearr_65644_65748 = state_65621__$1;
(statearr_65644_65748[(2)] = null);

(statearr_65644_65748[(1)] = (2));


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
var statearr_65645 = [null,null,null,null,null,null,null,null,null];
(statearr_65645[(0)] = app$google_drive$state_machine__36067__auto__);

(statearr_65645[(1)] = (1));

return statearr_65645;
});
var app$google_drive$state_machine__36067__auto____1 = (function (state_65621){
while(true){
var ret_value__36068__auto__ = (function (){try{while(true){
var result__36069__auto__ = switch__36066__auto__(state_65621);
if(cljs.core.keyword_identical_QMARK_(result__36069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36069__auto__;
}
break;
}
}catch (e65646){var ex__36070__auto__ = e65646;
var statearr_65647_65754 = state_65621;
(statearr_65647_65754[(2)] = ex__36070__auto__);


if(cljs.core.seq((state_65621[(4)]))){
var statearr_65648_65756 = state_65621;
(statearr_65648_65756[(1)] = cljs.core.first((state_65621[(4)])));

} else {
throw ex__36070__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65757 = state_65621;
state_65621 = G__65757;
continue;
} else {
return ret_value__36068__auto__;
}
break;
}
});
app$google_drive$state_machine__36067__auto__ = function(state_65621){
switch(arguments.length){
case 0:
return app$google_drive$state_machine__36067__auto____0.call(this);
case 1:
return app$google_drive$state_machine__36067__auto____1.call(this,state_65621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$0 = app$google_drive$state_machine__36067__auto____0;
app$google_drive$state_machine__36067__auto__.cljs$core$IFn$_invoke$arity$1 = app$google_drive$state_machine__36067__auto____1;
return app$google_drive$state_machine__36067__auto__;
})()
})();
var state__36138__auto__ = (function (){var statearr_65649 = f__36137__auto__();
(statearr_65649[(6)] = c__36136__auto___65731);

return statearr_65649;
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
var seq__65677 = cljs.core.seq(files);
var chunk__65678 = null;
var count__65679 = (0);
var i__65680 = (0);
while(true){
if((i__65680 < count__65679)){
var file = chunk__65678.cljs$core$IIndexed$_nth$arity$2(null,i__65680);
var data_key_65760 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_65760)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_65760);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__65761 = seq__65677;
var G__65762 = chunk__65678;
var G__65763 = count__65679;
var G__65764 = (i__65680 + (1));
seq__65677 = G__65761;
chunk__65678 = G__65762;
count__65679 = G__65763;
i__65680 = G__65764;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__65677);
if(temp__5753__auto__){
var seq__65677__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65677__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__65677__$1);
var G__65765 = cljs.core.chunk_rest(seq__65677__$1);
var G__65766 = c__4679__auto__;
var G__65767 = cljs.core.count(c__4679__auto__);
var G__65768 = (0);
seq__65677 = G__65765;
chunk__65678 = G__65766;
count__65679 = G__65767;
i__65680 = G__65768;
continue;
} else {
var file = cljs.core.first(seq__65677__$1);
var data_key_65769 = app.google_drive.get_data_key(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
if(cljs.core.truth_(data_key_65769)){
app.google_drive.get_file_data(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),data_key_65769);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.google_drive.found_files,cljs.core.conj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file));
} else {
}


var G__65770 = cljs.core.next(seq__65677__$1);
var G__65771 = null;
var G__65772 = (0);
var G__65773 = (0);
seq__65677 = G__65770;
chunk__65678 = G__65771;
count__65679 = G__65772;
i__65680 = G__65773;
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

return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(app.google_drive.listed_files,(function (p1__65694_SHARP_){
return app.google_drive.get_folder_file_data(app.google_drive.get_single_file_id(p1__65694_SHARP_));
}));
});

//# sourceMappingURL=app.google_drive.js.map
