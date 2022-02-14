goog.provide('app.csv');
app.csv.csv_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"1/1/00 to 2/1/00",new cljs.core.Keyword(null,"walks","walks",245026620),(2),new cljs.core.Keyword(null,"potatoes","potatoes",1338099662),(10),new cljs.core.Keyword(null,"leaves","leaves",-2143630574),(300),new cljs.core.Keyword(null,"climbs","climbs",-1528427521),(1)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"2/2/00 to 3/1/00",new cljs.core.Keyword(null,"walks","walks",245026620),(2),new cljs.core.Keyword(null,"potatoes","potatoes",1338099662),(10),new cljs.core.Keyword(null,"leaves","leaves",-2143630574),(300),new cljs.core.Keyword(null,"climbs","climbs",-1528427521),(1)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"3/2/00 to 4/1/00",new cljs.core.Keyword(null,"walks","walks",245026620),(3),new cljs.core.Keyword(null,"potatoes","potatoes",1338099662),(15),new cljs.core.Keyword(null,"leaves","leaves",-2143630574),(300),new cljs.core.Keyword(null,"climbs","climbs",-1528427521),(3)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/1/00",new cljs.core.Keyword(null,"walks","walks",245026620),(2),new cljs.core.Keyword(null,"potatoes","potatoes",1338099662),(20),new cljs.core.Keyword(null,"leaves","leaves",-2143630574),(300),new cljs.core.Keyword(null,"climbs","climbs",-1528427521),(3)], null)], null),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"1/1/00 to 2/1/00",new cljs.core.Keyword(null,"BW","BW",2063432789),(100),new cljs.core.Keyword(null,"health","health",-295520649),(50),new cljs.core.Keyword(null,"bio-age","bio-age",-374102058),(6),new cljs.core.Keyword(null,"ai-age","ai-age",-907692278),(10)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"2/2/00 to 3/1/00",new cljs.core.Keyword(null,"BW","BW",2063432789),(100),new cljs.core.Keyword(null,"health","health",-295520649),(50),new cljs.core.Keyword(null,"bio-age","bio-age",-374102058),(8),new cljs.core.Keyword(null,"ai-age","ai-age",-907692278),(10)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"3/2/00 to 4/1/00",new cljs.core.Keyword(null,"BW","BW",2063432789),(150),new cljs.core.Keyword(null,"health","health",-295520649),(60),new cljs.core.Keyword(null,"bio-age","bio-age",-374102058),(9),new cljs.core.Keyword(null,"ai-age","ai-age",-907692278),(10)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),"4/2/00 to 5/1/00",new cljs.core.Keyword(null,"BW","BW",2063432789),(150),new cljs.core.Keyword(null,"health","health",-295520649),(70),new cljs.core.Keyword(null,"bio-age","bio-age",-374102058),(9),new cljs.core.Keyword(null,"ai-age","ai-age",-907692278),(10)], null)], null)], null));
app.csv.maps_to_csv = (function app$csv$maps_to_csv(maps){
return shadow.js.shim.module$csv_stringify$sync.stringify(cljs.core.clj__GT_js(maps),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),true], null)));
});
app.csv.download_as_csv = (function app$csv$download_as_csv(maps,export_name){
var data_blob = (new Blob([app.csv.maps_to_csv(maps)],({"type": "text/csv;charset=utf-8;"})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
app.csv.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
(target.value = "");

return file;
}));
app.csv.my_parse_csv = (function app$csv$my_parse_csv(csv_data){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$csv_parse$sync.parse(csv_data,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),true,new cljs.core.Keyword(null,"skip_empty_lines","skip_empty_lines",-551583290),true,new cljs.core.Keyword(null,"trim","trim",774319767),true], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
app.csv.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__125836_SHARP_){
return app.csv.my_parse_csv(p1__125836_SHARP_.target.result);
}));
app.csv.input_upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.first_file);
app.csv.input_file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.extract_result);
var c__26976__auto___126014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26977__auto__ = (function (){var switch__26906__auto__ = (function (state_125851){
var state_val_125852 = (state_125851[(1)]);
if((state_val_125852 === (1))){
var state_125851__$1 = state_125851;
var statearr_125853_126015 = state_125851__$1;
(statearr_125853_126015[(2)] = null);

(statearr_125853_126015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125852 === (2))){
var inst_125839 = (new FileReader());
var state_125851__$1 = (function (){var statearr_125854 = state_125851;
(statearr_125854[(7)] = inst_125839);

return statearr_125854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125851__$1,(4),app.csv.input_upload_reqs);
} else {
if((state_val_125852 === (3))){
var inst_125849 = (state_125851[(2)]);
var state_125851__$1 = state_125851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125851__$1,inst_125849);
} else {
if((state_val_125852 === (4))){
var inst_125839 = (state_125851[(7)]);
var inst_125841 = (state_125851[(2)]);
var inst_125842 = inst_125841.name;
var inst_125843 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211),inst_125842);
var inst_125844 = (function (){var reader = inst_125839;
var file = inst_125841;
return (function (p1__125837_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.csv.input_file_reads,p1__125837_SHARP_);
});
})();
var inst_125845 = (inst_125839.onload = inst_125844);
var inst_125846 = inst_125839.readAsText(inst_125841);
var state_125851__$1 = (function (){var statearr_125855 = state_125851;
(statearr_125855[(8)] = inst_125843);

(statearr_125855[(9)] = inst_125846);

(statearr_125855[(10)] = inst_125845);

return statearr_125855;
})();
var statearr_125856_126023 = state_125851__$1;
(statearr_125856_126023[(2)] = null);

(statearr_125856_126023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26907__auto__ = null;
var app$csv$state_machine__26907__auto____0 = (function (){
var statearr_125857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_125857[(0)] = app$csv$state_machine__26907__auto__);

(statearr_125857[(1)] = (1));

return statearr_125857;
});
var app$csv$state_machine__26907__auto____1 = (function (state_125851){
while(true){
var ret_value__26908__auto__ = (function (){try{while(true){
var result__26909__auto__ = switch__26906__auto__(state_125851);
if(cljs.core.keyword_identical_QMARK_(result__26909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26909__auto__;
}
break;
}
}catch (e125858){var ex__26910__auto__ = e125858;
var statearr_125859_126026 = state_125851;
(statearr_125859_126026[(2)] = ex__26910__auto__);


if(cljs.core.seq((state_125851[(4)]))){
var statearr_125860_126028 = state_125851;
(statearr_125860_126028[(1)] = cljs.core.first((state_125851[(4)])));

} else {
throw ex__26910__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126029 = state_125851;
state_125851 = G__126029;
continue;
} else {
return ret_value__26908__auto__;
}
break;
}
});
app$csv$state_machine__26907__auto__ = function(state_125851){
switch(arguments.length){
case 0:
return app$csv$state_machine__26907__auto____0.call(this);
case 1:
return app$csv$state_machine__26907__auto____1.call(this,state_125851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26907__auto____0;
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26907__auto____1;
return app$csv$state_machine__26907__auto__;
})()
})();
var state__26978__auto__ = (function (){var statearr_125861 = f__26977__auto__();
(statearr_125861[(6)] = c__26976__auto___126014);

return statearr_125861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26978__auto__);
}));

var c__26976__auto___126032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26977__auto__ = (function (){var switch__26906__auto__ = (function (state_125872){
var state_val_125873 = (state_125872[(1)]);
if((state_val_125873 === (1))){
var state_125872__$1 = state_125872;
var statearr_125889_126034 = state_125872__$1;
(statearr_125889_126034[(2)] = null);

(statearr_125889_126034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125873 === (2))){
var state_125872__$1 = state_125872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125872__$1,(4),app.csv.input_file_reads);
} else {
if((state_val_125873 === (3))){
var inst_125869 = (state_125872[(2)]);
var state_125872__$1 = state_125872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125872__$1,inst_125869);
} else {
if((state_val_125873 === (4))){
var inst_125865 = (state_125872[(2)]);
var inst_125866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"input-data","input-data",2052925403),inst_125865);
var state_125872__$1 = (function (){var statearr_125892 = state_125872;
(statearr_125892[(7)] = inst_125866);

return statearr_125892;
})();
var statearr_125893_126040 = state_125872__$1;
(statearr_125893_126040[(2)] = null);

(statearr_125893_126040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26907__auto__ = null;
var app$csv$state_machine__26907__auto____0 = (function (){
var statearr_125895 = [null,null,null,null,null,null,null,null];
(statearr_125895[(0)] = app$csv$state_machine__26907__auto__);

(statearr_125895[(1)] = (1));

return statearr_125895;
});
var app$csv$state_machine__26907__auto____1 = (function (state_125872){
while(true){
var ret_value__26908__auto__ = (function (){try{while(true){
var result__26909__auto__ = switch__26906__auto__(state_125872);
if(cljs.core.keyword_identical_QMARK_(result__26909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26909__auto__;
}
break;
}
}catch (e125897){var ex__26910__auto__ = e125897;
var statearr_125898_126043 = state_125872;
(statearr_125898_126043[(2)] = ex__26910__auto__);


if(cljs.core.seq((state_125872[(4)]))){
var statearr_125900_126046 = state_125872;
(statearr_125900_126046[(1)] = cljs.core.first((state_125872[(4)])));

} else {
throw ex__26910__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126048 = state_125872;
state_125872 = G__126048;
continue;
} else {
return ret_value__26908__auto__;
}
break;
}
});
app$csv$state_machine__26907__auto__ = function(state_125872){
switch(arguments.length){
case 0:
return app$csv$state_machine__26907__auto____0.call(this);
case 1:
return app$csv$state_machine__26907__auto____1.call(this,state_125872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26907__auto____0;
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26907__auto____1;
return app$csv$state_machine__26907__auto__;
})()
})();
var state__26978__auto__ = (function (){var statearr_125904 = f__26977__auto__();
(statearr_125904[(6)] = c__26976__auto___126032);

return statearr_125904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26978__auto__);
}));

app.csv.biomarker_upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.first_file);
app.csv.biomarker_file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.extract_result);
var c__26976__auto___126051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26977__auto__ = (function (){var switch__26906__auto__ = (function (state_125930){
var state_val_125931 = (state_125930[(1)]);
if((state_val_125931 === (1))){
var state_125930__$1 = state_125930;
var statearr_125934_126054 = state_125930__$1;
(statearr_125934_126054[(2)] = null);

(statearr_125934_126054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125931 === (2))){
var inst_125918 = (new FileReader());
var state_125930__$1 = (function (){var statearr_125936 = state_125930;
(statearr_125936[(7)] = inst_125918);

return statearr_125936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125930__$1,(4),app.csv.biomarker_upload_reqs);
} else {
if((state_val_125931 === (3))){
var inst_125928 = (state_125930[(2)]);
var state_125930__$1 = state_125930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125930__$1,inst_125928);
} else {
if((state_val_125931 === (4))){
var inst_125918 = (state_125930[(7)]);
var inst_125920 = (state_125930[(2)]);
var inst_125921 = inst_125920.name;
var inst_125922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478),inst_125921);
var inst_125923 = (function (){var reader = inst_125918;
var file = inst_125920;
return (function (p1__125914_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.csv.biomarker_file_reads,p1__125914_SHARP_);
});
})();
var inst_125924 = (inst_125918.onload = inst_125923);
var inst_125925 = inst_125918.readAsText(inst_125920);
var state_125930__$1 = (function (){var statearr_125941 = state_125930;
(statearr_125941[(8)] = inst_125925);

(statearr_125941[(9)] = inst_125922);

(statearr_125941[(10)] = inst_125924);

return statearr_125941;
})();
var statearr_125942_126060 = state_125930__$1;
(statearr_125942_126060[(2)] = null);

(statearr_125942_126060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26907__auto__ = null;
var app$csv$state_machine__26907__auto____0 = (function (){
var statearr_125944 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_125944[(0)] = app$csv$state_machine__26907__auto__);

(statearr_125944[(1)] = (1));

return statearr_125944;
});
var app$csv$state_machine__26907__auto____1 = (function (state_125930){
while(true){
var ret_value__26908__auto__ = (function (){try{while(true){
var result__26909__auto__ = switch__26906__auto__(state_125930);
if(cljs.core.keyword_identical_QMARK_(result__26909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26909__auto__;
}
break;
}
}catch (e125947){var ex__26910__auto__ = e125947;
var statearr_125951_126061 = state_125930;
(statearr_125951_126061[(2)] = ex__26910__auto__);


if(cljs.core.seq((state_125930[(4)]))){
var statearr_125959_126062 = state_125930;
(statearr_125959_126062[(1)] = cljs.core.first((state_125930[(4)])));

} else {
throw ex__26910__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126063 = state_125930;
state_125930 = G__126063;
continue;
} else {
return ret_value__26908__auto__;
}
break;
}
});
app$csv$state_machine__26907__auto__ = function(state_125930){
switch(arguments.length){
case 0:
return app$csv$state_machine__26907__auto____0.call(this);
case 1:
return app$csv$state_machine__26907__auto____1.call(this,state_125930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26907__auto____0;
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26907__auto____1;
return app$csv$state_machine__26907__auto__;
})()
})();
var state__26978__auto__ = (function (){var statearr_125964 = f__26977__auto__();
(statearr_125964[(6)] = c__26976__auto___126051);

return statearr_125964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26978__auto__);
}));

var c__26976__auto___126064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26977__auto__ = (function (){var switch__26906__auto__ = (function (state_125975){
var state_val_125976 = (state_125975[(1)]);
if((state_val_125976 === (1))){
var state_125975__$1 = state_125975;
var statearr_125979_126065 = state_125975__$1;
(statearr_125979_126065[(2)] = null);

(statearr_125979_126065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125976 === (2))){
var state_125975__$1 = state_125975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_125975__$1,(4),app.csv.biomarker_file_reads);
} else {
if((state_val_125976 === (3))){
var inst_125973 = (state_125975[(2)]);
var state_125975__$1 = state_125975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_125975__$1,inst_125973);
} else {
if((state_val_125976 === (4))){
var inst_125969 = (state_125975[(2)]);
var inst_125970 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),inst_125969);
var state_125975__$1 = (function (){var statearr_125984 = state_125975;
(statearr_125984[(7)] = inst_125970);

return statearr_125984;
})();
var statearr_125985_126066 = state_125975__$1;
(statearr_125985_126066[(2)] = null);

(statearr_125985_126066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26907__auto__ = null;
var app$csv$state_machine__26907__auto____0 = (function (){
var statearr_125997 = [null,null,null,null,null,null,null,null];
(statearr_125997[(0)] = app$csv$state_machine__26907__auto__);

(statearr_125997[(1)] = (1));

return statearr_125997;
});
var app$csv$state_machine__26907__auto____1 = (function (state_125975){
while(true){
var ret_value__26908__auto__ = (function (){try{while(true){
var result__26909__auto__ = switch__26906__auto__(state_125975);
if(cljs.core.keyword_identical_QMARK_(result__26909__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26909__auto__;
}
break;
}
}catch (e125998){var ex__26910__auto__ = e125998;
var statearr_125999_126067 = state_125975;
(statearr_125999_126067[(2)] = ex__26910__auto__);


if(cljs.core.seq((state_125975[(4)]))){
var statearr_126000_126068 = state_125975;
(statearr_126000_126068[(1)] = cljs.core.first((state_125975[(4)])));

} else {
throw ex__26910__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26908__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__126070 = state_125975;
state_125975 = G__126070;
continue;
} else {
return ret_value__26908__auto__;
}
break;
}
});
app$csv$state_machine__26907__auto__ = function(state_125975){
switch(arguments.length){
case 0:
return app$csv$state_machine__26907__auto____0.call(this);
case 1:
return app$csv$state_machine__26907__auto____1.call(this,state_125975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26907__auto____0;
app$csv$state_machine__26907__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26907__auto____1;
return app$csv$state_machine__26907__auto__;
})()
})();
var state__26978__auto__ = (function (){var statearr_126002 = f__26977__auto__();
(statearr_126002[(6)] = c__26976__auto___126064);

return statearr_126002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26978__auto__);
}));

app.csv.upload_btn = (function app$csv$upload_btn(file_name,upload_reqs_channel){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upload-label","span.upload-label",-112039379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__126005_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(upload_reqs_channel,p1__126005_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-upload.fa-lg","i.fa.fa-upload.fa-lg",1001949208)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),(function (){var or__4253__auto__ = file_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Choose a file...";
}
})()], null)], null)], null)], null);
});

//# sourceMappingURL=app.csv.js.map
