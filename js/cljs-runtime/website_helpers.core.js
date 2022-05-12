goog.provide('website_helpers.core');
website_helpers.core.Hiccup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"any","any",1705907423)], null);
website_helpers.core.ReagentComponent = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.Hiccup], null),website_helpers.core.Hiccup], null);
website_helpers.core.my_md__GT_hiccup = (function website_helpers$core$my_md__GT_hiccup(string){
return cljs.core.rest(cljs.core.rest(cljs.core.last(markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(string)))));
});
website_helpers.core.my_md__GT_hiccup("[Slipways](https://slipways.net/)");
website_helpers.core.my_md__GT_hiccup("This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).");
/**
 * Removes links or other hiccup wrappers from a string.
 */
website_helpers.core.get_raw_string = (function website_helpers$core$get_raw_string(string){
if(typeof string === 'string'){
return string;
} else {
var G__29083 = cljs.core.last(string);
return (website_helpers.core.get_raw_string.cljs$core$IFn$_invoke$arity$1 ? website_helpers.core.get_raw_string.cljs$core$IFn$_invoke$arity$1(G__29083) : website_helpers.core.get_raw_string.call(null,G__29083));
}
});
website_helpers.core.anchor_string = (function website_helpers$core$anchor_string(item_name){
return clojure.string.replace(website_helpers.core.get_raw_string(item_name)," ","-");
});
website_helpers.core.anchor = (function website_helpers$core$anchor(item_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"href","href",-793805698),["#",website_helpers.core.anchor_string(item_name)].join('')], null),"#"], null);
});
/**
 * Useful for debugging when trying to call functions in this file from js.
 */
website_helpers.core.to_js = (function website_helpers$core$to_js(thing){
return cljs.core.clj__GT_js(thing);
});
goog.exportSymbol('website_helpers.core.to_js', website_helpers.core.to_js);
website_helpers.core.read_edn_string = (function website_helpers$core$read_edn_string(string){
var unescaped_str = clojure.string.replace(clojure.string.replace(string,"&#34;","\""),"&#39;","'");
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(unescaped_str);
});
goog.exportSymbol('website_helpers.core.read_edn_string', website_helpers.core.read_edn_string);
website_helpers.core.render_to_element = (function website_helpers$core$render_to_element(component,element_id){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),document.getElementById(element_id));
});
goog.exportSymbol('website_helpers.core.render_to_element', website_helpers.core.render_to_element);
/**
 * Converts a sequence of string to hiccup. 
 */
website_helpers.core.list_to_hiccup = (function website_helpers$core$list_to_hiccup(strings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function website_helpers$core$list_to_hiccup_$_iter__29084(s__29085){
return (new cljs.core.LazySeq(null,(function (){
var s__29085__$1 = s__29085;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29085__$1);
if(temp__5753__auto__){
var s__29085__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29085__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29085__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29087 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29086 = (0);
while(true){
if((i__29086 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__29086);
var hiccup = cljs.core.first(website_helpers.core.my_md__GT_hiccup(s));
cljs.core.chunk_append(b__29087,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(website_helpers.core.anchor(hiccup),hiccup)], null));

var G__29329 = (i__29086 + (1));
i__29086 = G__29329;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29087),website_helpers$core$list_to_hiccup_$_iter__29084(cljs.core.chunk_rest(s__29085__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29087),null);
}
} else {
var s = cljs.core.first(s__29085__$2);
var hiccup = cljs.core.first(website_helpers.core.my_md__GT_hiccup(s));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(website_helpers.core.anchor(hiccup),hiccup)], null),website_helpers$core$list_to_hiccup_$_iter__29084(cljs.core.rest(s__29085__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(strings);
})()], null);
});
goog.exportSymbol('website_helpers.core.list_to_hiccup', website_helpers.core.list_to_hiccup);
website_helpers.core.Name = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A more detailed description of a specific experience or mental-state.
 */
website_helpers.core.Details = new cljs.core.Keyword(null,"string","string",-1989541586);
website_helpers.core.Tag = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * A syntax for writing experiences, to be parsed into maps for easier coding.
 *   Experiences are on the outer layer.
 */
website_helpers.core.Experiences = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Details], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Details,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),website_helpers.core.Tag], null)], null)], null)], null)], null)], null);
website_helpers.core.Info = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.Details], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Name], null)], null)], null);
website_helpers.core.DataMap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Name,website_helpers.core.Info], null);
website_helpers.core.example_experiences_orig = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n    best price. For example, looking at the price per pound of various grocery\n    items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A sense that you are living within or below your means.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem","Involves constantly scanning many options and determining the best one.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n    routes.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Optimization problem"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Weights","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drugs","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Running","",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["exercise"], null),cljs.core.PersistentVector.EMPTY], null)], null);
website_helpers.core.example_experiences = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A feeling that you understand and are in control of your finances.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities","Constantly examining many options and determining the best one by some\n    usually simple criteria.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lead Climbing in a Gym","Clipping quickdraws on the way up a climbing route in a gym.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["climbing","exercise","\u2B50top10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thrill of Committment","Doing something with a penalty for failure that you can't turn back from."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Triumph over Exposure","Putting yourself in a stressful situation and showing yourself that you\n    can survive in it. I think this is a feeling Marc-Andr\u00E9 Leclerc was chasing\n    in the movie 'The Alpinist'."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Redditing","This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do","Requires little to no difficult decision making, so is therefore easy to\n    pick up and do."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contains hidden gems","Most of the time this activity is monotonous and/or forgettable, but\n    occasionally it will yield an extremely memorable or life-changing\n    experience."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Browsing Hacker News","Like browsing reddit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Contains hidden gems"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching GothamChess","Watching the GothamChess YouTube channel.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["False Understanding","A state of mind where something seems to make sense emotionally, but if\n    you were to try to explain it in your own words or otherwise apply the\n    knowledge you would fail."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yo-Yoing","Playing with a yo-yo, and learning new tricks for it.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place","The feeling when something that you thought was impossible, or otherwise\n    had no idea how to even approach doing, you can suddenly do effortlessly."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beat Saber","Playing the VR rhythm game beat saber.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone","Being in a state of mind where all your attention must be focused on a\n    single thing to avoid failure, leading to an emptiness of other thoughts."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Making Small Web Apps in ClojureScript with Reagent","See title :)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["programming"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pride of Construction","Feeling proud or even in awe of something you made that is now a (semi)\n    permenant thing in the world. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chaos to Solution","The feeling when you have no idea how to fix something but suddenly a\n    solution appears out of nowhere. You may or may not understand how the\n    solution works or where it came from."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apex Legends","A fast-paced first person shooter video game. Has extremely good art\n  direction, smooth gameplay, and balanced mechanics.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","multiplayer","competitive"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Constructive regret","The feeling when you step out of a test and think 'I knew that answer!!'\n    in a way that makes you want to walk right back into the testing hall and\n    fix your mistake."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Wordle](https://www.nytimes.com/games/wordle/index.html)","A fun word game.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Slipways","A video game about colonizing planets and connecting them with trade\n  routes.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null)], null);
/**
 * Cleans newlines and other stuff out of strings.
 */
website_helpers.core.clean = (function website_helpers$core$clean(string){
if((string == null)){
return "";
} else {
return clojure.string.replace(string,/\n +/," ");
}
});
website_helpers.core.make_experience_map = (function website_helpers$core$make_experience_map(raw_experiences){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$make_experience_map_$_iter__29088(s__29089){
return (new cljs.core.LazySeq(null,(function (){
var s__29089__$1 = s__29089;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29089__$1);
if(temp__5753__auto__){
var s__29089__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29089__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29089__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29091 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29090 = (0);
while(true){
if((i__29090 < size__4651__auto__)){
var vec__29092 = cljs.core._nth(c__4650__auto__,i__29090);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29092,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29092,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29092,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29092,(3),null);
cljs.core.chunk_append(b__29091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [experience_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4652__auto__ = ((function (i__29090,vec__29092,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__29091,s__29089__$2,temp__5753__auto__){
return (function website_helpers$core$make_experience_map_$_iter__29088_$_iter__29095(s__29096){
return (new cljs.core.LazySeq(null,((function (i__29090,vec__29092,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__29091,s__29089__$2,temp__5753__auto__){
return (function (){
var s__29096__$1 = s__29096;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29096__$1);
if(temp__5753__auto____$1){
var s__29096__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29096__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29096__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29098 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29097 = (0);
while(true){
if((i__29097 < size__4651__auto____$1)){
var vec__29099 = cljs.core._nth(c__4650__auto____$1,i__29097);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29099,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29099,(1),null);
cljs.core.chunk_append(b__29098,mental_state_name);

var G__29330 = (i__29097 + (1));
i__29097 = G__29330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29098),website_helpers$core$make_experience_map_$_iter__29088_$_iter__29095(cljs.core.chunk_rest(s__29096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29098),null);
}
} else {
var vec__29102 = cljs.core.first(s__29096__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29102,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29102,(1),null);
return cljs.core.cons(mental_state_name,website_helpers$core$make_experience_map_$_iter__29088_$_iter__29095(cljs.core.rest(s__29096__$2)));
}
} else {
return null;
}
break;
}
});})(i__29090,vec__29092,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__29091,s__29089__$2,temp__5753__auto__))
,null,null));
});})(i__29090,vec__29092,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__29091,s__29089__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})())], null)], null));

var G__29331 = (i__29090 + (1));
i__29090 = G__29331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29091),website_helpers$core$make_experience_map_$_iter__29088(cljs.core.chunk_rest(s__29089__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29091),null);
}
} else {
var vec__29105 = cljs.core.first(s__29089__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29105,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [experience_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__29105,experience_name,details,tags,mental_states,s__29089__$2,temp__5753__auto__){
return (function website_helpers$core$make_experience_map_$_iter__29088_$_iter__29108(s__29109){
return (new cljs.core.LazySeq(null,(function (){
var s__29109__$1 = s__29109;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29109__$1);
if(temp__5753__auto____$1){
var s__29109__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29109__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29109__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29111 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29110 = (0);
while(true){
if((i__29110 < size__4651__auto__)){
var vec__29112 = cljs.core._nth(c__4650__auto__,i__29110);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29112,(1),null);
cljs.core.chunk_append(b__29111,mental_state_name);

var G__29332 = (i__29110 + (1));
i__29110 = G__29332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29111),website_helpers$core$make_experience_map_$_iter__29088_$_iter__29108(cljs.core.chunk_rest(s__29109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29111),null);
}
} else {
var vec__29115 = cljs.core.first(s__29109__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(1),null);
return cljs.core.cons(mental_state_name,website_helpers$core$make_experience_map_$_iter__29088_$_iter__29108(cljs.core.rest(s__29109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__29105,experience_name,details,tags,mental_states,s__29089__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})())], null)], null),website_helpers$core$make_experience_map_$_iter__29088(cljs.core.rest(s__29089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(raw_experiences);
})());
});
/**
 * Combines two sets, filtering out any nil or empty string values from the
 *   second set.
 */
website_helpers.core.accrete_set = (function website_helpers$core$accrete_set(existing,new$){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(existing,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29118_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,"",null], null), null),p1__29118_SHARP_)));
}),new$)));
});
/**
 * Adds a single [Name Info] pair to an DataMap, merging it with an existing
 *   entry if need be.
 */
website_helpers.core._accrete_mental_states = (function website_helpers$core$_accrete_mental_states(data_map,p__29119){
var vec__29120 = p__29119;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29120,(0),null);
var map__29123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29120,(1),null);
var map__29123__$1 = cljs.core.__destructure_map(map__29123);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29123__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29123__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29123__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var map__29124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name);
var map__29124__$1 = cljs.core.__destructure_map(map__29124);
var existing_details = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29124__$1,new cljs.core.Keyword(null,"details","details",1956795411),"");
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29124__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentHashSet.EMPTY);
var existing_children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29124__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_map,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(existing_details),cljs.core.str.cljs$core$IFn$_invoke$arity$1(details)].join(''),new cljs.core.Keyword(null,"tags","tags",1771418977),website_helpers.core.accrete_set(existing_tags,tags),new cljs.core.Keyword(null,"children","children",-940561982),website_helpers.core.accrete_set(existing_children,children)], null));
});
website_helpers.core.make_mental_state_map = (function website_helpers$core$make_mental_state_map(raw_experiences){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(website_helpers.core._accrete_mental_states,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$core$make_mental_state_map_$_iter__29125(s__29126){
return (new cljs.core.LazySeq(null,(function (){
var s__29126__$1 = s__29126;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29126__$1);
if(temp__5753__auto__){
var s__29126__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29126__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29126__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29128 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29127 = (0);
while(true){
if((i__29127 < size__4651__auto__)){
var vec__29129 = cljs.core._nth(c__4650__auto__,i__29127);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29129,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29129,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29129,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29129,(3),null);
cljs.core.chunk_append(b__29128,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__29127,vec__29129,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__29128,s__29126__$2,temp__5753__auto__){
return (function website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29132(s__29133){
return (new cljs.core.LazySeq(null,((function (i__29127,vec__29129,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__29128,s__29126__$2,temp__5753__auto__){
return (function (){
var s__29133__$1 = s__29133;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29133__$1);
if(temp__5753__auto____$1){
var s__29133__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29133__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29133__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29135 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29134 = (0);
while(true){
if((i__29134 < size__4651__auto____$1)){
var vec__29136 = cljs.core._nth(c__4650__auto____$1,i__29134);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29136,(2),null);
cljs.core.chunk_append(b__29135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mental_state_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([experience_name])], null)], null));

var G__29333 = (i__29134 + (1));
i__29134 = G__29333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29135),website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29132(cljs.core.chunk_rest(s__29133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29135),null);
}
} else {
var vec__29139 = cljs.core.first(s__29133__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29139,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mental_state_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([experience_name])], null)], null),website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29132(cljs.core.rest(s__29133__$2)));
}
} else {
return null;
}
break;
}
});})(i__29127,vec__29129,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__29128,s__29126__$2,temp__5753__auto__))
,null,null));
});})(i__29127,vec__29129,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__29128,s__29126__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})()));

var G__29334 = (i__29127 + (1));
i__29127 = G__29334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29128),website_helpers$core$make_mental_state_map_$_iter__29125(cljs.core.chunk_rest(s__29126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29128),null);
}
} else {
var vec__29142 = cljs.core.first(s__29126__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29142,(3),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__29142,experience_name,_,___$1,mental_states,s__29126__$2,temp__5753__auto__){
return (function website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29145(s__29146){
return (new cljs.core.LazySeq(null,(function (){
var s__29146__$1 = s__29146;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29146__$1);
if(temp__5753__auto____$1){
var s__29146__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29146__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29146__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29148 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29147 = (0);
while(true){
if((i__29147 < size__4651__auto__)){
var vec__29149 = cljs.core._nth(c__4650__auto__,i__29147);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29149,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29149,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29149,(2),null);
cljs.core.chunk_append(b__29148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mental_state_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([experience_name])], null)], null));

var G__29335 = (i__29147 + (1));
i__29147 = G__29335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29148),website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29145(cljs.core.chunk_rest(s__29146__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29148),null);
}
} else {
var vec__29152 = cljs.core.first(s__29146__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29152,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29152,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29152,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mental_state_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([experience_name])], null)], null),website_helpers$core$make_mental_state_map_$_iter__29125_$_iter__29145(cljs.core.rest(s__29146__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__29142,experience_name,_,___$1,mental_states,s__29126__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})()),website_helpers$core$make_mental_state_map_$_iter__29125(cljs.core.rest(s__29126__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(raw_experiences);
})()));
});
website_helpers.core.make_mental_state_map(website_helpers.core.example_experiences);
/**
 * Parse URL parameters into a hashmap
 */
website_helpers.core.parse_params = (function website_helpers$core$parse_params(){
var url = window.location;
var param_strs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),/\&/);
if(clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"?")){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29155_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29155_SHARP_,/=/);
}),param_strs));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.core.sync_url_tag_params_BANG_ = (function website_helpers$core$sync_url_tag_params_BANG_(tags){
var url = (new URL(window.location));
var seq__29156 = cljs.core.seq(tags);
var chunk__29157 = null;
var count__29158 = (0);
var i__29159 = (0);
while(true){
if((i__29159 < count__29158)){
var vec__29166 = chunk__29157.cljs$core$IIndexed$_nth$arity$2(null,i__29159);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29166,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(tag,value);
} else {
url.searchParams.delete(tag);
}

window.history.pushState(null,"",url.toString());


var G__29336 = seq__29156;
var G__29337 = chunk__29157;
var G__29338 = count__29158;
var G__29339 = (i__29159 + (1));
seq__29156 = G__29336;
chunk__29157 = G__29337;
count__29158 = G__29338;
i__29159 = G__29339;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29156);
if(temp__5753__auto__){
var seq__29156__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29156__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29156__$1);
var G__29340 = cljs.core.chunk_rest(seq__29156__$1);
var G__29341 = c__4679__auto__;
var G__29342 = cljs.core.count(c__4679__auto__);
var G__29343 = (0);
seq__29156 = G__29340;
chunk__29157 = G__29341;
count__29158 = G__29342;
i__29159 = G__29343;
continue;
} else {
var vec__29169 = cljs.core.first(seq__29156__$1);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29169,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(tag,value);
} else {
url.searchParams.delete(tag);
}

window.history.pushState(null,"",url.toString());


var G__29344 = cljs.core.next(seq__29156__$1);
var G__29345 = null;
var G__29346 = (0);
var G__29347 = (0);
seq__29156 = G__29344;
chunk__29157 = G__29345;
count__29158 = G__29346;
i__29159 = G__29347;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.core.dropdown_check_list = (function website_helpers$core$dropdown_check_list(tags){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),"Select Tags"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__4652__auto__ = (function website_helpers$core$dropdown_check_list_$_iter__29172(s__29173){
return (new cljs.core.LazySeq(null,(function (){
var s__29173__$1 = s__29173;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29173__$1);
if(temp__5753__auto__){
var s__29173__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29173__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29173__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29175 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29174 = (0);
while(true){
if((i__29174 < size__4651__auto__)){
var tag = cljs.core._nth(c__4650__auto__,i__29174);
cljs.core.chunk_append(b__29175,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tags),tag))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29174,tag,c__4650__auto__,size__4651__auto__,b__29175,s__29173__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tags,cljs.core.assoc,tag,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tags),tag)));

return website_helpers.core.sync_url_tag_params_BANG_(cljs.core.deref(tags));
});})(i__29174,tag,c__4650__auto__,size__4651__auto__,b__29175,s__29173__$2,temp__5753__auto__,opened))
], null)], null),tag], null));

var G__29348 = (i__29174 + (1));
i__29174 = G__29348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29175),website_helpers$core$dropdown_check_list_$_iter__29172(cljs.core.chunk_rest(s__29173__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29175),null);
}
} else {
var tag = cljs.core.first(s__29173__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tags),tag))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tag,s__29173__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tags,cljs.core.assoc,tag,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tags),tag)));

return website_helpers.core.sync_url_tag_params_BANG_(cljs.core.deref(tags));
});})(tag,s__29173__$2,temp__5753__auto__,opened))
], null)], null),tag], null),website_helpers$core$dropdown_check_list_$_iter__29172(cljs.core.rest(s__29173__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(tags))));
})())], null);
});
});
website_helpers.core.get_tag_selections = (function website_helpers$core$get_tag_selections(data_map){
var url_params = website_helpers.core.parse_params();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_tag_selections_$_iter__29176(s__29177){
return (new cljs.core.LazySeq(null,(function (){
var s__29177__$1 = s__29177;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29177__$1);
if(temp__5753__auto__){
var s__29177__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29177__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29177__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29179 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29178 = (0);
while(true){
if((i__29178 < size__4651__auto__)){
var tag = cljs.core._nth(c__4650__auto__,i__29178);
cljs.core.chunk_append(b__29179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.contains_QMARK_(url_params,tag)], null));

var G__29349 = (i__29178 + (1));
i__29178 = G__29349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29179),website_helpers$core$get_tag_selections_$_iter__29176(cljs.core.chunk_rest(s__29177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29179),null);
}
} else {
var tag = cljs.core.first(s__29177__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.contains_QMARK_(url_params,tag)], null),website_helpers$core$get_tag_selections_$_iter__29176(cljs.core.rest(s__29177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vals(data_map))));
})());
});
/**
 * If no tags are selected, all are!
 */
website_helpers.core.get_selected_tags = (function website_helpers$core$get_selected_tags(tag_selections){
if(cljs.core.every_QMARK_((function (p1__29180_SHARP_){
return cljs.core.not(p1__29180_SHARP_);
}),cljs.core.vals(tag_selections))){
return cljs.core.set(cljs.core.keys(tag_selections));
} else {
return cljs.core.set((function (){var iter__4652__auto__ = (function website_helpers$core$get_selected_tags_$_iter__29181(s__29182){
return (new cljs.core.LazySeq(null,(function (){
var s__29182__$1 = s__29182;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29182__$1);
if(temp__5753__auto__){
var s__29182__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29182__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29182__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29184 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29183 = (0);
while(true){
if((i__29183 < size__4651__auto__)){
var vec__29185 = cljs.core._nth(c__4650__auto__,i__29183);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__29184,tag);

var G__29350 = (i__29183 + (1));
i__29183 = G__29350;
continue;
} else {
var G__29351 = (i__29183 + (1));
i__29183 = G__29351;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29184),website_helpers$core$get_selected_tags_$_iter__29181(cljs.core.chunk_rest(s__29182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29184),null);
}
} else {
var vec__29188 = cljs.core.first(s__29182__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29188,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(tag,website_helpers$core$get_selected_tags_$_iter__29181(cljs.core.rest(s__29182__$2)));
} else {
var G__29352 = cljs.core.rest(s__29182__$2);
s__29182__$1 = G__29352;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(tag_selections);
})());
}
});
website_helpers.core.make_tag_hiccup = (function website_helpers$core$make_tag_hiccup(tags,selected_tags){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tags: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29191_SHARP_){
if(cljs.core.truth_((selected_tags.cljs$core$IFn$_invoke$arity$1 ? selected_tags.cljs$core$IFn$_invoke$arity$1(p1__29191_SHARP_) : selected_tags.call(null,p1__29191_SHARP_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__29191_SHARP_], null),p1__29191_SHARP_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__29191_SHARP_], null),p1__29191_SHARP_], null);
}
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(tags)))], null);
});
website_helpers.core.calc_similarity = (function website_helpers$core$calc_similarity(info1,info2){
return cljs.core.count(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info2)));
});
website_helpers.core.Similarities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Name,new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
website_helpers.core.get_all_similarities = (function website_helpers$core$get_all_similarities(data_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_all_similarities_$_iter__29192(s__29193){
return (new cljs.core.LazySeq(null,(function (){
var s__29193__$1 = s__29193;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29193__$1);
if(temp__5753__auto__){
var s__29193__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29193__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29193__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29195 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29194 = (0);
while(true){
if((i__29194 < size__4651__auto__)){
var vec__29196 = cljs.core._nth(c__4650__auto__,i__29194);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29196,(1),null);
cljs.core.chunk_append(b__29195,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__29194,vec__29196,name1,info1,c__4650__auto__,size__4651__auto__,b__29195,s__29193__$2,temp__5753__auto__){
return (function website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29199(s__29200){
return (new cljs.core.LazySeq(null,((function (i__29194,vec__29196,name1,info1,c__4650__auto__,size__4651__auto__,b__29195,s__29193__$2,temp__5753__auto__){
return (function (){
var s__29200__$1 = s__29200;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29200__$1);
if(temp__5753__auto____$1){
var s__29200__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29200__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29200__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29202 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29201 = (0);
while(true){
if((i__29201 < size__4651__auto____$1)){
var vec__29203 = cljs.core._nth(c__4650__auto____$1,i__29201);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29203,(1),null);
cljs.core.chunk_append(b__29202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null));

var G__29353 = (i__29201 + (1));
i__29201 = G__29353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29202),website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29199(cljs.core.chunk_rest(s__29200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29202),null);
}
} else {
var vec__29206 = cljs.core.first(s__29200__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29206,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null),website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29199(cljs.core.rest(s__29200__$2)));
}
} else {
return null;
}
break;
}
});})(i__29194,vec__29196,name1,info1,c__4650__auto__,size__4651__auto__,b__29195,s__29193__$2,temp__5753__auto__))
,null,null));
});})(i__29194,vec__29196,name1,info1,c__4650__auto__,size__4651__auto__,b__29195,s__29193__$2,temp__5753__auto__))
;
return iter__4652__auto__(data_map);
})())], null));

var G__29354 = (i__29194 + (1));
i__29194 = G__29354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29195),website_helpers$core$get_all_similarities_$_iter__29192(cljs.core.chunk_rest(s__29193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29195),null);
}
} else {
var vec__29209 = cljs.core.first(s__29193__$2);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29209,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__29209,name1,info1,s__29193__$2,temp__5753__auto__){
return (function website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29212(s__29213){
return (new cljs.core.LazySeq(null,(function (){
var s__29213__$1 = s__29213;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29213__$1);
if(temp__5753__auto____$1){
var s__29213__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29213__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29213__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29215 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29214 = (0);
while(true){
if((i__29214 < size__4651__auto__)){
var vec__29216 = cljs.core._nth(c__4650__auto__,i__29214);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29216,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29216,(1),null);
cljs.core.chunk_append(b__29215,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null));

var G__29355 = (i__29214 + (1));
i__29214 = G__29355;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29215),website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29212(cljs.core.chunk_rest(s__29213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29215),null);
}
} else {
var vec__29219 = cljs.core.first(s__29213__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29219,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null),website_helpers$core$get_all_similarities_$_iter__29192_$_iter__29212(cljs.core.rest(s__29213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__29209,name1,info1,s__29193__$2,temp__5753__auto__))
;
return iter__4652__auto__(data_map);
})())], null),website_helpers$core$get_all_similarities_$_iter__29192(cljs.core.rest(s__29193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(data_map);
})());
});
website_helpers.core.get_closest_name = (function website_helpers$core$get_closest_name(name,similarities){
var distances = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(similarities,name),name);
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__29222_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(distances,p1__29222_SHARP_);
}),cljs.core.keys(distances))));
});
/**
 * Remove the given name from the similarities map.
 */
website_helpers.core.prune_similarities = (function website_helpers$core$prune_similarities(name_to_prune,similarities){
return clojure.walk.postwalk((function (p1__29223_SHARP_){
if(cljs.core.map_QMARK_(p1__29223_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29223_SHARP_,name_to_prune);
} else {
return p1__29223_SHARP_;
}
}),similarities);
});
website_helpers.core._get_rest = (function website_helpers$core$_get_rest(last_name,similarities){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(similarities))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null);
} else {
var cur_name = website_helpers.core.get_closest_name(last_name,similarities);
var pruned_similarities = website_helpers.core.prune_similarities(last_name,similarities);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_name], null),(website_helpers.core._get_rest.cljs$core$IFn$_invoke$arity$2 ? website_helpers.core._get_rest.cljs$core$IFn$_invoke$arity$2(cur_name,pruned_similarities) : website_helpers.core._get_rest.call(null,cur_name,pruned_similarities)));

}
});
/**
 * Sort the input data map by tag similarity.
 *   
 *   This is done by computing a similarity score between every pair of items,
 *   then solving the travelling salesman problem given these pairs.
 */
website_helpers.core.sort_by_tags = (function website_helpers$core$sort_by_tags(data_map){
var similarities = website_helpers.core.get_all_similarities(data_map);
var start_name = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(data_map)));
var sorted_names = website_helpers.core._get_rest(start_name,similarities);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__4652__auto__ = (function website_helpers$core$sort_by_tags_$_iter__29224(s__29225){
return (new cljs.core.LazySeq(null,(function (){
var s__29225__$1 = s__29225;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29225__$1);
if(temp__5753__auto__){
var s__29225__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29225__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29225__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29227 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29226 = (0);
while(true){
if((i__29226 < size__4651__auto__)){
var name = cljs.core._nth(c__4650__auto__,i__29226);
cljs.core.chunk_append(b__29227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null));

var G__29356 = (i__29226 + (1));
i__29226 = G__29356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29227),website_helpers$core$sort_by_tags_$_iter__29224(cljs.core.chunk_rest(s__29225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29227),null);
}
} else {
var name = cljs.core.first(s__29225__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null),website_helpers$core$sort_by_tags_$_iter__29224(cljs.core.rest(s__29225__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(sorted_names);
})());
});
/**
 * Example:
 *   
 *   ```
 *   Recipe 1:
 * - Ingredient 1
 * - Ingredient 2
 * 
 *   Recipe 2:
 * - Ingredient 2
 * - Ingredient 3
 * ...
 *   ...
 *   ```
 * 
 *   Or
 * 
 *   ```
 *   Ingredient 1:
 * - Recipe 1
 * - Recipe 3
 * 
 *   Ingredient 2:
 * - Recipe 1
 * - Recipe 2
 * ...
 *   ...
 *   ```
 *   
 */
website_helpers.core.aggregated_items = (function website_helpers$core$aggregated_items(data_name,other_name,data_map){
var tag_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.core.get_tag_selections(data_map));
return (function (data_name__$1,other_name__$1,data_map__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),data_name__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.dropdown_check_list,tag_selections], null)], null)], null),(function (){var iter__4652__auto__ = (function website_helpers$core$aggregated_items_$_iter__29228(s__29229){
return (new cljs.core.LazySeq(null,(function (){
var s__29229__$1 = s__29229;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29229__$1);
if(temp__5753__auto__){
var s__29229__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29229__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29229__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29231 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29230 = (0);
while(true){
if((i__29230 < size__4651__auto__)){
var vec__29232 = cljs.core._nth(c__4650__auto__,i__29230);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(0),null);
var map__29235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29232,(1),null);
var map__29235__$1 = cljs.core.__destructure_map(map__29235);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29235__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29235__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29235__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.core.get_selected_tags(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.core.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
cljs.core.chunk_append(b__29231,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.core.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.core.anchor(hiccup_name)], null),website_helpers.core.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.core.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.core.list_to_hiccup(children)], null));

var G__29357 = (i__29230 + (1));
i__29230 = G__29357;
continue;
} else {
var G__29358 = (i__29230 + (1));
i__29230 = G__29358;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29231),website_helpers$core$aggregated_items_$_iter__29228(cljs.core.chunk_rest(s__29229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29231),null);
}
} else {
var vec__29236 = cljs.core.first(s__29229__$2);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29236,(0),null);
var map__29239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29236,(1),null);
var map__29239__$1 = cljs.core.__destructure_map(map__29239);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29239__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.core.get_selected_tags(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.core.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.core.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.core.anchor(hiccup_name)], null),website_helpers.core.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.core.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.core.list_to_hiccup(children)], null),website_helpers$core$aggregated_items_$_iter__29228(cljs.core.rest(s__29229__$2)));
} else {
var G__29359 = cljs.core.rest(s__29229__$2);
s__29229__$1 = G__29359;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(website_helpers.core.sort_by_tags(data_map__$1));
})());
});
});
goog.exportSymbol('website_helpers.core.aggregated_items', website_helpers.core.aggregated_items);
website_helpers.core.make_aggregated_items = (function website_helpers$core$make_aggregated_items(raw_experiences){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.aggregated_items,"Experiences","States of Mind",website_helpers.core.make_experience_map(raw_experiences)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.aggregated_items,"States of Mind","Experiences",website_helpers.core.make_mental_state_map(raw_experiences)], null)], null);
});
});
goog.exportSymbol('website_helpers.core.make_aggregated_items', website_helpers.core.make_aggregated_items);
website_helpers.core.example_page_tree = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"manifesto.md",new cljs.core.Keyword(null,"size","size",1098693007),(10074)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"climbing",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"media.md",new cljs.core.Keyword(null,"size","size",1098693007),(592)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safety-checklist.md",new cljs.core.Keyword(null,"size","size",1098693007),(3276)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"event-reports",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2019-10-7-namaste-wall-zion.md",new cljs.core.Keyword(null,"size","size",1098693007),(1899)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-10-lake-erie.md",new cljs.core.Keyword(null,"size","size",1098693007),(1225)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"2020-8-12-mile-high-club.md",new cljs.core.Keyword(null,"size","size",1098693007),(10662)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"first-512.md",new cljs.core.Keyword(null,"size","size",1098693007),(214)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"mcmahon-hall.md",new cljs.core.Keyword(null,"size","size",1098693007),(928)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"datavis",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"reddit-tree.md",new cljs.core.Keyword(null,"size","size",1098693007),(551)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seattle-rain.md",new cljs.core.Keyword(null,"size","size",1098693007),(2105)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"common-patterns.md",new cljs.core.Keyword(null,"size","size",1098693007),(2276)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"gamedev-context.md",new cljs.core.Keyword(null,"size","size",1098693007),(246)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-projects.md",new cljs.core.Keyword(null,"size","size",1098693007),(1131)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"game-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"farming-video-game.md",new cljs.core.Keyword(null,"size","size",1098693007),(786)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"roguelike-base-builder.md",new cljs.core.Keyword(null,"size","size",1098693007),(2019)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"safe-building-designer.md",new cljs.core.Keyword(null,"size","size",1098693007),(507)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"mechanic-ideas",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"character-alignment.md",new cljs.core.Keyword(null,"size","size",1098693007),(436)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"low-friction-turn-based-tactics.md",new cljs.core.Keyword(null,"size","size",1098693007),(3187)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"gaming",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"buying-games.md",new cljs.core.Keyword(null,"size","size",1098693007),(912)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chess.md",new cljs.core.Keyword(null,"size","size",1098693007),(297)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fps-principles.md",new cljs.core.Keyword(null,"size","size",1098693007),(6329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"oxygen-not-included.md",new cljs.core.Keyword(null,"size","size",1098693007),(472)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"recommendations.md",new cljs.core.Keyword(null,"size","size",1098693007),(326)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"health-and-longevity",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"aging-science.md",new cljs.core.Keyword(null,"size","size",1098693007),(94)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"avoiding-accidents.md",new cljs.core.Keyword(null,"size","size",1098693007),(244)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"biomarker-correlator.md",new cljs.core.Keyword(null,"size","size",1098693007),(188)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"causes-of-death.md",new cljs.core.Keyword(null,"size","size",1098693007),(703)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"chronic-stress.md",new cljs.core.Keyword(null,"size","size",1098693007),(26)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"circadian-rhythm.md",new cljs.core.Keyword(null,"size","size",1098693007),(72)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"continuous-glucose-monitoring.md",new cljs.core.Keyword(null,"size","size",1098693007),(1384)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cooking.md",new cljs.core.Keyword(null,"size","size",1098693007),(9101)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dental-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(135)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"dna-testing.md",new cljs.core.Keyword(null,"size","size",1098693007),(670)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"exercise.md",new cljs.core.Keyword(null,"size","size",1098693007),(29)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"fasting.md",new cljs.core.Keyword(null,"size","size",1098693007),(4493)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"finding-care.md",new cljs.core.Keyword(null,"size","size",1098693007),(275)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"food.md",new cljs.core.Keyword(null,"size","size",1098693007),(16612)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(8329)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"misc-research.md",new cljs.core.Keyword(null,"size","size",1098693007),(409)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-physiological-states.md",new cljs.core.Keyword(null,"size","size",1098693007),(636)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"sleep.md",new cljs.core.Keyword(null,"size","size",1098693007),(4462)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tracking-health.md",new cljs.core.Keyword(null,"size","size",1098693007),(4196)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"hydroponics",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"journal.md",new cljs.core.Keyword(null,"size","size",1098693007),(1525)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"my-setup.md",new cljs.core.Keyword(null,"size","size",1098693007),(4052)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"investing-and-finances",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"comprehensive-housing-return-estimator.md",new cljs.core.Keyword(null,"size","size",1098693007),(11714)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"financial-independence.md",new cljs.core.Keyword(null,"size","size",1098693007),(745)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"housing.md",new cljs.core.Keyword(null,"size","size",1098693007),(1515)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(1368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"monthly-costs-of-car-ownership.md",new cljs.core.Keyword(null,"size","size",1098693007),(475)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"strategies.md",new cljs.core.Keyword(null,"size","size",1098693007),(1243)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"taxes.md",new cljs.core.Keyword(null,"size","size",1098693007),(2727)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"lifelogging",new cljs.core.Keyword(null,"size","size",1098693007),(4096),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"camera.md",new cljs.core.Keyword(null,"size","size",1098693007),(869)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"influences.md",new cljs.core.Keyword(null,"size","size",1098693007),(250)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"what-and-why.md",new cljs.core.Keyword(null,"size","size",1098693007),(8752)], null)], null)], null)], null);
/**
 * Like tree-seq, but takes in a tree of maps and a unique :path key to each map.
 *   
 *   See https://clojuredocs.org/clojure.core/tree-seq#example-62780fc7e4b0b1e3652d75ea
 */
website_helpers.core.tree_seq_adding_path = (function website_helpers$core$tree_seq_adding_path(branch_QMARK_,children,root){
var walk = (function website_helpers$core$tree_seq_adding_path_$_walk(path,node){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"path","path",-188191168),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node))].join('')),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(website_helpers$core$tree_seq_adding_path_$_walk,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node))].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node))], 0)):null));
}),null,null));
});
return walk(null,root);
});
website_helpers.core.get_idxed_nodes = (function website_helpers$core$get_idxed_nodes(tree){
var idxed_nodes = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,n){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"idx","idx",1053688473),i);
}),website_helpers.core.tree_seq_adding_path(cljs.core.associative_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"home",new cljs.core.Keyword(null,"children","children",-940561982),tree], null)));
var idxes_by_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__29240(s__29241){
return (new cljs.core.LazySeq(null,(function (){
var s__29241__$1 = s__29241;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29241__$1);
if(temp__5753__auto__){
var s__29241__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29241__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29241__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29243 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29242 = (0);
while(true){
if((i__29242 < size__4651__auto__)){
var node = cljs.core._nth(c__4650__auto__,i__29242);
cljs.core.chunk_append(b__29243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node)], null));

var G__29360 = (i__29242 + (1));
i__29242 = G__29360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29243),website_helpers$core$get_idxed_nodes_$_iter__29240(cljs.core.chunk_rest(s__29241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29243),null);
}
} else {
var node = cljs.core.first(s__29241__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node)], null),website_helpers$core$get_idxed_nodes_$_iter__29240(cljs.core.rest(s__29241__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(idxed_nodes);
})());
var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__29244(s__29245){
return (new cljs.core.LazySeq(null,(function (){
var s__29245__$1 = s__29245;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29245__$1);
if(temp__5753__auto__){
var s__29245__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29245__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29245__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29247 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29246 = (0);
while(true){
if((i__29246 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__29246);
cljs.core.chunk_append(b__29247,cljs.core.update.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),((function (i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29248(s__29249){
return (new cljs.core.LazySeq(null,((function (i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (){
var s__29249__$1 = s__29249;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29249__$1);
if(temp__5753__auto____$1){
var s__29249__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29249__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29249__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29251 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29250 = (0);
while(true){
if((i__29250 < size__4651__auto____$1)){
var c = cljs.core._nth(c__4650__auto____$1,i__29250);
cljs.core.chunk_append(b__29251,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))));

var G__29361 = (i__29250 + (1));
i__29250 = G__29361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29251),website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29248(cljs.core.chunk_rest(s__29249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29251),null);
}
} else {
var c = cljs.core.first(s__29249__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))),website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29248(cljs.core.rest(s__29249__$2)));
}
} else {
return null;
}
break;
}
});})(i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
,null,null));
});})(i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
;
return iter__4652__auto__(children);
})());
});})(i__29246,n,c__4650__auto__,size__4651__auto__,b__29247,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
));

var G__29362 = (i__29246 + (1));
i__29246 = G__29362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29247),website_helpers$core$get_idxed_nodes_$_iter__29244(cljs.core.chunk_rest(s__29245__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29247),null);
}
} else {
var n = cljs.core.first(s__29245__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),((function (n,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29252(s__29253){
return (new cljs.core.LazySeq(null,(function (){
var s__29253__$1 = s__29253;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29253__$1);
if(temp__5753__auto____$1){
var s__29253__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29253__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29253__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29255 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29254 = (0);
while(true){
if((i__29254 < size__4651__auto__)){
var c = cljs.core._nth(c__4650__auto__,i__29254);
cljs.core.chunk_append(b__29255,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))));

var G__29363 = (i__29254 + (1));
i__29254 = G__29363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29255),website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29252(cljs.core.chunk_rest(s__29253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29255),null);
}
} else {
var c = cljs.core.first(s__29253__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))),website_helpers$core$get_idxed_nodes_$_iter__29244_$_iter__29252(cljs.core.rest(s__29253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(children);
})());
});})(n,s__29245__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
),website_helpers$core$get_idxed_nodes_$_iter__29244(cljs.core.rest(s__29245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(idxed_nodes);
});
website_helpers.core.get_links = (function website_helpers$core$get_links(tree){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$core$get_links_$_iter__29256(s__29257){
return (new cljs.core.LazySeq(null,(function (){
var s__29257__$1 = s__29257;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29257__$1);
if(temp__5753__auto__){
var s__29257__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29257__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29257__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29259 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29258 = (0);
while(true){
if((i__29258 < size__4651__auto__)){
var subtree = cljs.core._nth(c__4650__auto__,i__29258);
cljs.core.chunk_append(b__29259,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__29258,subtree,c__4650__auto__,size__4651__auto__,b__29259,s__29257__$2,temp__5753__auto__){
return (function website_helpers$core$get_links_$_iter__29256_$_iter__29260(s__29261){
return (new cljs.core.LazySeq(null,((function (i__29258,subtree,c__4650__auto__,size__4651__auto__,b__29259,s__29257__$2,temp__5753__auto__){
return (function (){
var s__29261__$1 = s__29261;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29261__$1);
if(temp__5753__auto____$1){
var s__29261__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29261__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__29261__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__29263 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__29262 = (0);
while(true){
if((i__29262 < size__4651__auto____$1)){
var child = cljs.core._nth(c__4650__auto____$1,i__29262);
cljs.core.chunk_append(b__29263,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null));

var G__29364 = (i__29262 + (1));
i__29262 = G__29364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29263),website_helpers$core$get_links_$_iter__29256_$_iter__29260(cljs.core.chunk_rest(s__29261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29263),null);
}
} else {
var child = cljs.core.first(s__29261__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),website_helpers$core$get_links_$_iter__29256_$_iter__29260(cljs.core.rest(s__29261__$2)));
}
} else {
return null;
}
break;
}
});})(i__29258,subtree,c__4650__auto__,size__4651__auto__,b__29259,s__29257__$2,temp__5753__auto__))
,null,null));
});})(i__29258,subtree,c__4650__auto__,size__4651__auto__,b__29259,s__29257__$2,temp__5753__auto__))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()));

var G__29365 = (i__29258 + (1));
i__29258 = G__29365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29259),website_helpers$core$get_links_$_iter__29256(cljs.core.chunk_rest(s__29257__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29259),null);
}
} else {
var subtree = cljs.core.first(s__29257__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (subtree,s__29257__$2,temp__5753__auto__){
return (function website_helpers$core$get_links_$_iter__29256_$_iter__29264(s__29265){
return (new cljs.core.LazySeq(null,(function (){
var s__29265__$1 = s__29265;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__29265__$1);
if(temp__5753__auto____$1){
var s__29265__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29265__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29265__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29267 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29266 = (0);
while(true){
if((i__29266 < size__4651__auto__)){
var child = cljs.core._nth(c__4650__auto__,i__29266);
cljs.core.chunk_append(b__29267,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null));

var G__29366 = (i__29266 + (1));
i__29266 = G__29366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29267),website_helpers$core$get_links_$_iter__29256_$_iter__29264(cljs.core.chunk_rest(s__29265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29267),null);
}
} else {
var child = cljs.core.first(s__29265__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),website_helpers$core$get_links_$_iter__29256_$_iter__29264(cljs.core.rest(s__29265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(subtree,s__29257__$2,temp__5753__auto__))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()),website_helpers$core$get_links_$_iter__29256(cljs.core.rest(s__29257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(website_helpers.core.get_idxed_nodes(tree));
})());
});
website_helpers.core.update_nodes = (function website_helpers$core$update_nodes(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29367 = arguments.length;
var i__4865__auto___29368 = (0);
while(true){
if((i__4865__auto___29368 < len__4864__auto___29367)){
args__4870__auto__.push((arguments[i__4865__auto___29368]));

var G__29369 = (i__4865__auto___29368 + (1));
i__4865__auto___29368 = G__29369;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return website_helpers.core.update_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(website_helpers.core.update_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,update_fns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$iter__29270(s__29271){
return (new cljs.core.LazySeq(null,(function (){
var s__29271__$1 = s__29271;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__29271__$1);
if(temp__5753__auto__){
var s__29271__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29271__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__29271__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__29273 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__29272 = (0);
while(true){
if((i__29272 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__29272);
cljs.core.chunk_append(b__29273,(function (){var fexpr__29274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__29274.cljs$core$IFn$_invoke$arity$1 ? fexpr__29274.cljs$core$IFn$_invoke$arity$1(n) : fexpr__29274.call(null,n));
})());

var G__29370 = (i__29272 + (1));
i__29272 = G__29370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29273),website_helpers$core$iter__29270(cljs.core.chunk_rest(s__29271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29273),null);
}
} else {
var n = cljs.core.first(s__29271__$2);
return cljs.core.cons((function (){var fexpr__29275 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__29275.cljs$core$IFn$_invoke$arity$1 ? fexpr__29275.cljs$core$IFn$_invoke$arity$1(n) : fexpr__29275.call(null,n));
})(),website_helpers$core$iter__29270(cljs.core.rest(s__29271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(nodes);
})());
}));

(website_helpers.core.update_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(website_helpers.core.update_nodes.cljs$lang$applyTo = (function (seq29268){
var G__29269 = cljs.core.first(seq29268);
var seq29268__$1 = cljs.core.next(seq29268);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29269,seq29268__$1);
}));

website_helpers.core.scale_size = (function website_helpers$core$scale_size(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"size","size",1098693007),(function (p1__29276_SHARP_){
return Math.sqrt((p1__29276_SHARP_ / (10)));
}));
});
website_helpers.core.assign_group = (function website_helpers$core$assign_group(node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"group","group",582596132),(((new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node) == null))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(2):((((0) <= cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(3):null))));
});
website_helpers.core.strip_extension = (function website_helpers$core$strip_extension(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__29277_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29277_SHARP_,/\./));
})),new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__29278_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29278_SHARP_,/\./));
}));
});
website_helpers.core.fix_path = (function website_helpers$core$fix_path(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__29279_SHARP_){
return clojure.string.replace(p1__29279_SHARP_,/\/home/,"docs/");
}));
});
/**
 * Capitalize every word in a string
 */
website_helpers.core.capitalize_words = (function website_helpers$core$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
website_helpers.core.prettify_name = (function website_helpers$core$prettify_name(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__29280_SHARP_){
return website_helpers.core.capitalize_words(clojure.string.replace(p1__29280_SHARP_,/-/," "));
}));
});
website_helpers.core.page_tree_to_graph = (function website_helpers$core$page_tree_to_graph(page_tree){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),website_helpers.core.update_nodes.cljs$core$IFn$_invoke$arity$variadic(website_helpers.core.get_idxed_nodes(page_tree),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.core.prettify_name,website_helpers.core.fix_path,website_helpers.core.strip_extension,website_helpers.core.scale_size,website_helpers.core.assign_group], 0)),new cljs.core.Keyword(null,"links","links",-654507394),website_helpers.core.get_links(page_tree)], null);
});
website_helpers.core.page_graph_data_simple = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Home"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mind",new cljs.core.Keyword(null,"size","size",1098693007),(5),new cljs.core.Keyword(null,"id","id",-1388402092),"Mind"], null)], null),new cljs.core.Keyword(null,"links","links",-654507394),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"target","target",253001721),(1),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null)], null));
website_helpers.core.example_page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.core.page_tree_to_graph(website_helpers.core.example_page_tree));
website_helpers.core.page_graph = (function website_helpers$core$page_graph(page_tree,options){
var page_graph_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.core.page_tree_to_graph(page_tree));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page_graph_data], 0)),"https://kovasap.github.io/",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null)], null);
});
});
goog.exportSymbol('website_helpers.core.page_graph', website_helpers.core.page_graph);
website_helpers.core.home_page = (function website_helpers$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.graph.viz,reagent.core.track.cljs$core$IFn$_invoke$arity$variadic(website_helpers.graph.prechew,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([website_helpers.core.example_page_graph_data], 0)),"https://kovasap.github.io/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.make_aggregated_items,website_helpers.core.example_experiences], null)], null);
});
});
website_helpers.core.mount_root = (function website_helpers$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.home_page], null),document.getElementById("app"));
});
website_helpers.core.refresh = (function website_helpers$core$refresh(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot code Remount"], 0));

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.EMPTY);

cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-all-similarities","get-all-similarities",972686142,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-mental-state-map","make-mental-state-map",1917829791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-similarity","calc-similarity",1641430634,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"info1","info1",525109113,null),new cljs.core.Symbol(null,"info2","info2",401851582,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Info","Info",-1276427045,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-selected-tags","get-selected-tags",-741322052,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-selections","tag-selections",-1493824187,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"If no tags are selected, all are!",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-tag-selections","get-tag-selections",778440040,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-closest-name","get-closest-name",-2078269807,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"similarities","similarities",-1419611587,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null),new cljs.core.Symbol(null,"Name","Name",1509320158,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-aggregated-items","make-aggregated-items",-1264601521,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"list-to-hiccup","list-to-hiccup",-1480870763,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"strings","strings",-414875280,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of string to hiccup. "], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"prune-similarities","prune-similarities",1501177981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name-to-prune","name-to-prune",1616372821,null),new cljs.core.Symbol(null,"similarities","similarities",-1419611587,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove the given name from the similarities map.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"-accrete-mental-states","-accrete-mental-states",1185365058,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null)], null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds a single [Name Info] pair to an DataMap, merging it with an existing\n  entry if need be.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-experience-map","make-experience-map",-1937141740,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregated-items","aggregated-items",-1722899339,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-name","data-name",321123568,null),new cljs.core.Symbol(null,"other-name","other-name",1698754039,null),new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Example:\n  \n  ```\n  Recipe 1:\n   - Ingredient 1\n   - Ingredient 2\n\n  Recipe 2:\n   - Ingredient 2\n   - Ingredient 3\n   ...\n  ...\n  ```\n\n  Or\n\n  ```\n  Ingredient 1:\n   - Recipe 1\n   - Recipe 3\n\n  Ingredient 2:\n   - Recipe 1\n   - Recipe 2\n   ...\n  ...\n  ```\n  "], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sync-url-tag-params!","sync-url-tag-params!",-1972999168,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-check-list","dropdown-check-list",-205445998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"accrete-set","accrete-set",-749687985,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"existing","existing",1299735433,null),new cljs.core.Symbol(null,"new","new",-444906321,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combines two sets, filtering out any nil or empty string values from the\n  second set.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-tag-hiccup","make-tag-hiccup",1249262239,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"selected-tags","selected-tags",-318383030,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,cljs.core.PersistentVector.EMPTY);

return website_helpers.core.mount_root();
});
website_helpers.core.init_BANG_ = (function website_helpers$core$init_BANG_(){
cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null));
}));

(website_helpers.core.sync_url_tag_params_BANG_ = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
}));

(website_helpers.core._accrete_mental_states = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null));
}));

(website_helpers.core.get_tag_selections = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null));

return new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
}));

(website_helpers.core.calc_similarity = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
}));

(website_helpers.core.make_aggregated_items = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
}));

(website_helpers.core.accrete_set = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
}));

(website_helpers.core.get_closest_name = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
}));

(website_helpers.core.dropdown_check_list = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
}));

(website_helpers.core.make_experience_map = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
}));

(website_helpers.core.aggregated_items = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
}));

(website_helpers.core.list_to_hiccup = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null));
}));

(website_helpers.core.get_selected_tags = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
}));

(website_helpers.core.prune_similarities = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
}));

(website_helpers.core.get_all_similarities = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
}));

(website_helpers.core.make_tag_hiccup = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__26365__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26364__26366__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__26364__26366__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
}));

(website_helpers.core.make_mental_state_map = orig_fn__26365__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
} else {
return null;
}
})()], null));

cljs.core.PersistentHashSet.createAsIfByAssoc([(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-all-similarities","get-all-similarities",972686142,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-mental-state-map","make-mental-state-map",1917829791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-similarity","calc-similarity",1641430634,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"info1","info1",525109113,null),new cljs.core.Symbol(null,"info2","info2",401851582,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Info","Info",-1276427045,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-selected-tags","get-selected-tags",-741322052,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-selections","tag-selections",-1493824187,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"If no tags are selected, all are!",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-tag-selections","get-tag-selections",778440040,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-closest-name","get-closest-name",-2078269807,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"similarities","similarities",-1419611587,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null),new cljs.core.Symbol(null,"Name","Name",1509320158,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-aggregated-items","make-aggregated-items",-1264601521,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"list-to-hiccup","list-to-hiccup",-1480870763,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"strings","strings",-414875280,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Converts a sequence of string to hiccup. "], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"prune-similarities","prune-similarities",1501177981,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name-to-prune","name-to-prune",1616372821,null),new cljs.core.Symbol(null,"similarities","similarities",-1419611587,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Remove the given name from the similarities map.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null),new cljs.core.Symbol(null,"Similarities","Similarities",1895587641,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"-accrete-mental-states","-accrete-mental-states",1185365058,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null)], null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Adds a single [Name Info] pair to an DataMap, merging it with an existing\n  entry if need be.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Symbol(null,"Name","Name",1509320158,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-experience-map","make-experience-map",-1937141740,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"raw-experiences","raw-experiences",-706742745,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Experiences","Experiences",1736736734,null)], null),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"aggregated-items","aggregated-items",-1722899339,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"export","export",214356590),true,new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"DataMap","DataMap",493263082,null)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data-name","data-name",321123568,null),new cljs.core.Symbol(null,"other-name","other-name",1698754039,null),new cljs.core.Symbol(null,"data-map","data-map",-1041574801,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Example:\n  \n  ```\n  Recipe 1:\n   - Ingredient 1\n   - Ingredient 2\n\n  Recipe 2:\n   - Ingredient 2\n   - Ingredient 3\n   ...\n  ...\n  ```\n\n  Or\n\n  ```\n  Ingredient 1:\n   - Recipe 1\n   - Recipe 3\n\n  Ingredient 2:\n   - Recipe 1\n   - Recipe 2\n   ...\n  ...\n  ```\n  "], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sync-url-tag-params!","sync-url-tag-params!",-1972999168,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-check-list","dropdown-check-list",-205445998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"accrete-set","accrete-set",-749687985,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"existing","existing",1299735433,null),new cljs.core.Symbol(null,"new","new",-444906321,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Combines two sets, filtering out any nil or empty string values from the\n  second set.",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"make-tag-hiccup","make-tag-hiccup",1249262239,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"selected-tags","selected-tags",-318383030,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"Tag","Tag",-307564055,null)], null)], null),new cljs.core.Symbol(null,"Hiccup","Hiccup",853691521,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
})()
]);

cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null),website_helpers.core.sync_url_tag_params_BANG_);
}));

(website_helpers.core.sync_url_tag_params_BANG_ = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29282 = type__26340__auto__;
var G__29283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null));
var fexpr__29281 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29281.cljs$core$IFn$_invoke$arity$2 ? fexpr__29281.cljs$core$IFn$_invoke$arity$2(G__29282,G__29283) : fexpr__29281.call(null,G__29282,G__29283));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null))], null),website_helpers.core.sync_url_tag_params_BANG_));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-tag-params!","website-helpers.core/sync-url-tag-params!",2037237742,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null),website_helpers.core._accrete_mental_states);
}));

(website_helpers.core._accrete_mental_states = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29285 = type__26340__auto__;
var G__29286 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
var fexpr__29284 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29284.cljs$core$IFn$_invoke$arity$2 ? fexpr__29284.cljs$core$IFn$_invoke$arity$2(G__29285,G__29286) : fexpr__29284.call(null,G__29285,G__29286));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null))], null),website_helpers.core._accrete_mental_states));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null),website_helpers.core.get_tag_selections);
}));

(website_helpers.core.get_tag_selections = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29288 = type__26340__auto__;
var G__29289 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null));
var fexpr__29287 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29287.cljs$core$IFn$_invoke$arity$2 ? fexpr__29287.cljs$core$IFn$_invoke$arity$2(G__29288,G__29289) : fexpr__29287.call(null,G__29288,G__29289));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null))], null),website_helpers.core.get_tag_selections));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null));

return new cljs.core.Symbol("website-helpers.core","get-tag-selections","website-helpers.core/get-tag-selections",-23087166,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null),website_helpers.core.calc_similarity);
}));

(website_helpers.core.calc_similarity = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29291 = type__26340__auto__;
var G__29292 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
var fexpr__29290 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29290.cljs$core$IFn$_invoke$arity$2 ? fexpr__29290.cljs$core$IFn$_invoke$arity$2(G__29291,G__29292) : fexpr__29290.call(null,G__29291,G__29292));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),website_helpers.core.calc_similarity));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null),website_helpers.core.make_aggregated_items);
}));

(website_helpers.core.make_aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29294 = type__26340__auto__;
var G__29295 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
var fexpr__29293 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29293.cljs$core$IFn$_invoke$arity$2 ? fexpr__29293.cljs$core$IFn$_invoke$arity$2(G__29294,G__29295) : fexpr__29293.call(null,G__29294,G__29295));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.make_aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null),website_helpers.core.accrete_set);
}));

(website_helpers.core.accrete_set = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29297 = type__26340__auto__;
var G__29298 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
var fexpr__29296 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29296.cljs$core$IFn$_invoke$arity$2 ? fexpr__29296.cljs$core$IFn$_invoke$arity$2(G__29297,G__29298) : fexpr__29296.call(null,G__29297,G__29298));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),website_helpers.core.accrete_set));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null),website_helpers.core.get_closest_name);
}));

(website_helpers.core.get_closest_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29300 = type__26340__auto__;
var G__29301 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
var fexpr__29299 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29299.cljs$core$IFn$_invoke$arity$2 ? fexpr__29299.cljs$core$IFn$_invoke$arity$2(G__29300,G__29301) : fexpr__29299.call(null,G__29300,G__29301));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null))], null),website_helpers.core.get_closest_name));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null),website_helpers.core.dropdown_check_list);
}));

(website_helpers.core.dropdown_check_list = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29303 = type__26340__auto__;
var G__29304 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
var fexpr__29302 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29302.cljs$core$IFn$_invoke$arity$2 ? fexpr__29302.cljs$core$IFn$_invoke$arity$2(G__29303,G__29304) : fexpr__29302.call(null,G__29303,G__29304));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.dropdown_check_list));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null),website_helpers.core.make_experience_map);
}));

(website_helpers.core.make_experience_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29306 = type__26340__auto__;
var G__29307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
var fexpr__29305 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29305.cljs$core$IFn$_invoke$arity$2 ? fexpr__29305.cljs$core$IFn$_invoke$arity$2(G__29306,G__29307) : fexpr__29305.call(null,G__29306,G__29307));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_experience_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null),website_helpers.core.aggregated_items);
}));

(website_helpers.core.aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29309 = type__26340__auto__;
var G__29310 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
var fexpr__29308 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29308.cljs$core$IFn$_invoke$arity$2 ? fexpr__29308.cljs$core$IFn$_invoke$arity$2(G__29309,G__29310) : fexpr__29308.call(null,G__29309,G__29310));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null),website_helpers.core.list_to_hiccup);
}));

(website_helpers.core.list_to_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29312 = type__26340__auto__;
var G__29313 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
var fexpr__29311 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29311.cljs$core$IFn$_invoke$arity$2 ? fexpr__29311.cljs$core$IFn$_invoke$arity$2(G__29312,G__29313) : fexpr__29311.call(null,G__29312,G__29313));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.list_to_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null),website_helpers.core.get_selected_tags);
}));

(website_helpers.core.get_selected_tags = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29315 = type__26340__auto__;
var G__29316 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null));
var fexpr__29314 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29314.cljs$core$IFn$_invoke$arity$2 ? fexpr__29314.cljs$core$IFn$_invoke$arity$2(G__29315,G__29316) : fexpr__29314.call(null,G__29315,G__29316));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Tag,new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null))], null),website_helpers.core.get_selected_tags));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-tags","website-helpers.core/get-selected-tags",741247462,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null),website_helpers.core.prune_similarities);
}));

(website_helpers.core.prune_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29318 = type__26340__auto__;
var G__29319 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
var fexpr__29317 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29317.cljs$core$IFn$_invoke$arity$2 ? fexpr__29317.cljs$core$IFn$_invoke$arity$2(G__29318,G__29319) : fexpr__29317.call(null,G__29318,G__29319));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null))], null),website_helpers.core.prune_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null),website_helpers.core.get_all_similarities);
}));

(website_helpers.core.get_all_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29321 = type__26340__auto__;
var G__29322 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
var fexpr__29320 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29320.cljs$core$IFn$_invoke$arity$2 ? fexpr__29320.cljs$core$IFn$_invoke$arity$2(G__29321,G__29322) : fexpr__29320.call(null,G__29321,G__29322));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null))], null),website_helpers.core.get_all_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null),website_helpers.core.make_tag_hiccup);
}));

(website_helpers.core.make_tag_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29324 = type__26340__auto__;
var G__29325 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
var fexpr__29323 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29323.cljs$core$IFn$_invoke$arity$2 ? fexpr__29323.cljs$core$IFn$_invoke$arity$2(G__29324,G__29325) : fexpr__29323.call(null,G__29324,G__29325));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.make_tag_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__26342__26343__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26342__26343__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null),website_helpers.core.make_mental_state_map);
}));

(website_helpers.core.make_mental_state_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__26340__auto__,data__26341__auto__){
var G__29327 = type__26340__auto__;
var G__29328 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__26341__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
var fexpr__29326 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__29326.cljs$core$IFn$_invoke$arity$2 ? fexpr__29326.cljs$core$IFn$_invoke$arity$2(G__29327,G__29328) : fexpr__29326.call(null,G__29327,G__29328));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_mental_state_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
})()
], null));

return website_helpers.core.mount_root();
});
goog.exportSymbol('website_helpers.core.init_BANG_', website_helpers.core.init_BANG_);

//# sourceMappingURL=website_helpers.core.js.map
