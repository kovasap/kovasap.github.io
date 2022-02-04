goog.provide('app.csv');
var module$node_modules$csv_parse$lib$sync=shadow.js.require("module$node_modules$csv_parse$lib$sync", {});
var module$node_modules$csv_stringify$lib$sync=shadow.js.require("module$node_modules$csv_stringify$lib$sync", {});
app.csv.csv_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-data","input-data",2052925403),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)], null));
app.csv.maps_to_csv = (function app$csv$maps_to_csv(maps){
return module$node_modules$csv_stringify$lib$sync.stringify(cljs.core.clj__GT_js(maps));
});
app.csv.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
(target.value = "");

return file;
}));
app.csv.my_parse_csv = (function app$csv$my_parse_csv(csv_data){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(module$node_modules$csv_parse$lib$sync.parse(csv_data,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"columns","columns",1998437288),true,new cljs.core.Keyword(null,"skip_empty_lines","skip_empty_lines",-551583290),true,new cljs.core.Keyword(null,"trim","trim",774319767),true], null))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
app.csv.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__42743_SHARP_){
return app.csv.my_parse_csv(p1__42743_SHARP_.target.result);
}));
app.csv.input_upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.first_file);
app.csv.input_file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.extract_result);
var c__26640__auto___42881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_42770){
var state_val_42772 = (state_42770[(1)]);
if((state_val_42772 === (1))){
var state_42770__$1 = state_42770;
var statearr_42776_42882 = state_42770__$1;
(statearr_42776_42882[(2)] = null);

(statearr_42776_42882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42772 === (2))){
var inst_42753 = (new FileReader());
var state_42770__$1 = (function (){var statearr_42777 = state_42770;
(statearr_42777[(7)] = inst_42753);

return statearr_42777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42770__$1,(4),app.csv.input_upload_reqs);
} else {
if((state_val_42772 === (3))){
var inst_42767 = (state_42770[(2)]);
var state_42770__$1 = state_42770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42770__$1,inst_42767);
} else {
if((state_val_42772 === (4))){
var inst_42753 = (state_42770[(7)]);
var inst_42755 = (state_42770[(2)]);
var inst_42756 = inst_42755.name;
var inst_42757 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"input-file-name","input-file-name",-1886577211),inst_42756);
var inst_42761 = (function (){var reader = inst_42753;
var file = inst_42755;
return (function (p1__42751_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.csv.input_file_reads,p1__42751_SHARP_);
});
})();
var inst_42762 = (inst_42753.onload = inst_42761);
var inst_42763 = inst_42753.readAsText(inst_42755);
var state_42770__$1 = (function (){var statearr_42779 = state_42770;
(statearr_42779[(8)] = inst_42762);

(statearr_42779[(9)] = inst_42757);

(statearr_42779[(10)] = inst_42763);

return statearr_42779;
})();
var statearr_42783_42886 = state_42770__$1;
(statearr_42783_42886[(2)] = null);

(statearr_42783_42886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26556__auto__ = null;
var app$csv$state_machine__26556__auto____0 = (function (){
var statearr_42784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42784[(0)] = app$csv$state_machine__26556__auto__);

(statearr_42784[(1)] = (1));

return statearr_42784;
});
var app$csv$state_machine__26556__auto____1 = (function (state_42770){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_42770);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e42787){var ex__26559__auto__ = e42787;
var statearr_42789_42888 = state_42770;
(statearr_42789_42888[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_42770[(4)]))){
var statearr_42790_42890 = state_42770;
(statearr_42790_42890[(1)] = cljs.core.first((state_42770[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42892 = state_42770;
state_42770 = G__42892;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
app$csv$state_machine__26556__auto__ = function(state_42770){
switch(arguments.length){
case 0:
return app$csv$state_machine__26556__auto____0.call(this);
case 1:
return app$csv$state_machine__26556__auto____1.call(this,state_42770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26556__auto____0;
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26556__auto____1;
return app$csv$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_42794 = f__26641__auto__();
(statearr_42794[(6)] = c__26640__auto___42881);

return statearr_42794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

var c__26640__auto___42895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_42803){
var state_val_42804 = (state_42803[(1)]);
if((state_val_42804 === (1))){
var state_42803__$1 = state_42803;
var statearr_42805_42896 = state_42803__$1;
(statearr_42805_42896[(2)] = null);

(statearr_42805_42896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42804 === (2))){
var state_42803__$1 = state_42803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42803__$1,(4),app.csv.input_file_reads);
} else {
if((state_val_42804 === (3))){
var inst_42801 = (state_42803[(2)]);
var state_42803__$1 = state_42803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42803__$1,inst_42801);
} else {
if((state_val_42804 === (4))){
var inst_42797 = (state_42803[(2)]);
var inst_42798 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"input-data","input-data",2052925403),inst_42797);
var state_42803__$1 = (function (){var statearr_42806 = state_42803;
(statearr_42806[(7)] = inst_42798);

return statearr_42806;
})();
var statearr_42807_42897 = state_42803__$1;
(statearr_42807_42897[(2)] = null);

(statearr_42807_42897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26556__auto__ = null;
var app$csv$state_machine__26556__auto____0 = (function (){
var statearr_42808 = [null,null,null,null,null,null,null,null];
(statearr_42808[(0)] = app$csv$state_machine__26556__auto__);

(statearr_42808[(1)] = (1));

return statearr_42808;
});
var app$csv$state_machine__26556__auto____1 = (function (state_42803){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_42803);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e42809){var ex__26559__auto__ = e42809;
var statearr_42810_42909 = state_42803;
(statearr_42810_42909[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_42803[(4)]))){
var statearr_42811_42910 = state_42803;
(statearr_42811_42910[(1)] = cljs.core.first((state_42803[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42911 = state_42803;
state_42803 = G__42911;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
app$csv$state_machine__26556__auto__ = function(state_42803){
switch(arguments.length){
case 0:
return app$csv$state_machine__26556__auto____0.call(this);
case 1:
return app$csv$state_machine__26556__auto____1.call(this,state_42803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26556__auto____0;
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26556__auto____1;
return app$csv$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_42812 = f__26641__auto__();
(statearr_42812[(6)] = c__26640__auto___42895);

return statearr_42812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

app.csv.biomarker_upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.first_file);
app.csv.biomarker_file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),app.csv.extract_result);
var c__26640__auto___42914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_42827){
var state_val_42828 = (state_42827[(1)]);
if((state_val_42828 === (1))){
var state_42827__$1 = state_42827;
var statearr_42829_42915 = state_42827__$1;
(statearr_42829_42915[(2)] = null);

(statearr_42829_42915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42828 === (2))){
var inst_42815 = (new FileReader());
var state_42827__$1 = (function (){var statearr_42830 = state_42827;
(statearr_42830[(7)] = inst_42815);

return statearr_42830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42827__$1,(4),app.csv.biomarker_upload_reqs);
} else {
if((state_val_42828 === (3))){
var inst_42825 = (state_42827[(2)]);
var state_42827__$1 = state_42827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42827__$1,inst_42825);
} else {
if((state_val_42828 === (4))){
var inst_42815 = (state_42827[(7)]);
var inst_42817 = (state_42827[(2)]);
var inst_42818 = inst_42817.name;
var inst_42819 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"biomarker-file-name","biomarker-file-name",1322694478),inst_42818);
var inst_42820 = (function (){var reader = inst_42815;
var file = inst_42817;
return (function (p1__42813_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.csv.biomarker_file_reads,p1__42813_SHARP_);
});
})();
var inst_42821 = (inst_42815.onload = inst_42820);
var inst_42822 = inst_42815.readAsText(inst_42817);
var state_42827__$1 = (function (){var statearr_42831 = state_42827;
(statearr_42831[(8)] = inst_42822);

(statearr_42831[(9)] = inst_42821);

(statearr_42831[(10)] = inst_42819);

return statearr_42831;
})();
var statearr_42832_42921 = state_42827__$1;
(statearr_42832_42921[(2)] = null);

(statearr_42832_42921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26556__auto__ = null;
var app$csv$state_machine__26556__auto____0 = (function (){
var statearr_42833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42833[(0)] = app$csv$state_machine__26556__auto__);

(statearr_42833[(1)] = (1));

return statearr_42833;
});
var app$csv$state_machine__26556__auto____1 = (function (state_42827){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_42827);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e42836){var ex__26559__auto__ = e42836;
var statearr_42837_42922 = state_42827;
(statearr_42837_42922[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_42827[(4)]))){
var statearr_42838_42923 = state_42827;
(statearr_42838_42923[(1)] = cljs.core.first((state_42827[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42928 = state_42827;
state_42827 = G__42928;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
app$csv$state_machine__26556__auto__ = function(state_42827){
switch(arguments.length){
case 0:
return app$csv$state_machine__26556__auto____0.call(this);
case 1:
return app$csv$state_machine__26556__auto____1.call(this,state_42827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26556__auto____0;
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26556__auto____1;
return app$csv$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_42841 = f__26641__auto__();
(statearr_42841[(6)] = c__26640__auto___42914);

return statearr_42841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

var c__26640__auto___42930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26641__auto__ = (function (){var switch__26555__auto__ = (function (state_42850){
var state_val_42851 = (state_42850[(1)]);
if((state_val_42851 === (1))){
var state_42850__$1 = state_42850;
var statearr_42857_42931 = state_42850__$1;
(statearr_42857_42931[(2)] = null);

(statearr_42857_42931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42851 === (2))){
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42850__$1,(4),app.csv.biomarker_file_reads);
} else {
if((state_val_42851 === (3))){
var inst_42848 = (state_42850[(2)]);
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42850__$1,inst_42848);
} else {
if((state_val_42851 === (4))){
var inst_42844 = (state_42850[(2)]);
var inst_42845 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.csv.csv_data,cljs.core.assoc,new cljs.core.Keyword(null,"biomarker-data","biomarker-data",-1785875135),inst_42844);
var state_42850__$1 = (function (){var statearr_42860 = state_42850;
(statearr_42860[(7)] = inst_42845);

return statearr_42860;
})();
var statearr_42865_42936 = state_42850__$1;
(statearr_42865_42936[(2)] = null);

(statearr_42865_42936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var app$csv$state_machine__26556__auto__ = null;
var app$csv$state_machine__26556__auto____0 = (function (){
var statearr_42867 = [null,null,null,null,null,null,null,null];
(statearr_42867[(0)] = app$csv$state_machine__26556__auto__);

(statearr_42867[(1)] = (1));

return statearr_42867;
});
var app$csv$state_machine__26556__auto____1 = (function (state_42850){
while(true){
var ret_value__26557__auto__ = (function (){try{while(true){
var result__26558__auto__ = switch__26555__auto__(state_42850);
if(cljs.core.keyword_identical_QMARK_(result__26558__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26558__auto__;
}
break;
}
}catch (e42868){var ex__26559__auto__ = e42868;
var statearr_42869_42939 = state_42850;
(statearr_42869_42939[(2)] = ex__26559__auto__);


if(cljs.core.seq((state_42850[(4)]))){
var statearr_42870_42940 = state_42850;
(statearr_42870_42940[(1)] = cljs.core.first((state_42850[(4)])));

} else {
throw ex__26559__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26557__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42942 = state_42850;
state_42850 = G__42942;
continue;
} else {
return ret_value__26557__auto__;
}
break;
}
});
app$csv$state_machine__26556__auto__ = function(state_42850){
switch(arguments.length){
case 0:
return app$csv$state_machine__26556__auto____0.call(this);
case 1:
return app$csv$state_machine__26556__auto____1.call(this,state_42850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$0 = app$csv$state_machine__26556__auto____0;
app$csv$state_machine__26556__auto__.cljs$core$IFn$_invoke$arity$1 = app$csv$state_machine__26556__auto____1;
return app$csv$state_machine__26556__auto__;
})()
})();
var state__26642__auto__ = (function (){var statearr_42873 = f__26641__auto__();
(statearr_42873[(6)] = c__26640__auto___42930);

return statearr_42873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26642__auto__);
}));

app.csv.upload_btn = (function app$csv$upload_btn(file_name,upload_reqs_channel){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.upload-label","span.upload-label",-112039379),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__42875_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(upload_reqs_channel,p1__42875_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-upload.fa-lg","i.fa.fa-upload.fa-lg",1001949208)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),(function (){var or__4253__auto__ = file_name;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Choose a file...";
}
})()], null)], null)], null)], null);
});

//# sourceMappingURL=app.csv.js.map
