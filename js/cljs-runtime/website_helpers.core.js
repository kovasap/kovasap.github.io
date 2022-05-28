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
var G__50869 = cljs.core.last(string);
return (website_helpers.core.get_raw_string.cljs$core$IFn$_invoke$arity$1 ? website_helpers.core.get_raw_string.cljs$core$IFn$_invoke$arity$1(G__50869) : website_helpers.core.get_raw_string.call(null,G__50869));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function website_helpers$core$list_to_hiccup_$_iter__50870(s__50871){
return (new cljs.core.LazySeq(null,(function (){
var s__50871__$1 = s__50871;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50871__$1);
if(temp__5753__auto__){
var s__50871__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50871__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50871__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50873 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50872 = (0);
while(true){
if((i__50872 < size__4651__auto__)){
var s = cljs.core._nth(c__4650__auto__,i__50872);
var hiccup = cljs.core.first(website_helpers.core.my_md__GT_hiccup(s));
cljs.core.chunk_append(b__50873,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(website_helpers.core.anchor(hiccup),hiccup)], null));

var G__51163 = (i__50872 + (1));
i__50872 = G__51163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50873),website_helpers$core$list_to_hiccup_$_iter__50870(cljs.core.chunk_rest(s__50871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50873),null);
}
} else {
var s = cljs.core.first(s__50871__$2);
var hiccup = cljs.core.first(website_helpers.core.my_md__GT_hiccup(s));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),s], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(website_helpers.core.anchor(hiccup),hiccup)], null),website_helpers$core$list_to_hiccup_$_iter__50870(cljs.core.rest(s__50871__$2)));
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
website_helpers.core.example_experiences = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comparing prices","When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Financial Control","A feeling that you understand and are in control of your finances.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities","Constantly examining many options and determining the best one by some\n    usually simple criteria.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["engaging"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bike Commuting](https://kovasap.github.io/docs/lifestyle-optimizations/bike-commuting/)","Using a bike to fulfill daily transportation needs. Best with combined with\n  audiobooks or podcasts.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lifestyle","exercise"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing","Feeling comfortable and liable to zone out.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lead Climbing in a Gym","Clipping quickdraws on the way up a climbing route in a gym.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["climbing","exercise","\u2B50top10","social"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thrill of Committment","Doing something with a penalty for failure that you can't turn back from."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Triumph over Exposure","Putting yourself in a stressful situation and showing yourself that you\n    can survive in it. I think this is a feeling Marc-Andr\u00E9 Leclerc was chasing\n    in the movie 'The Alpinist'."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Having a clear goal","The feeling of knowing exactly what you need to do."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Backpack Hero](https://thejaspel.itch.io/backpack-hero)","A cool rougelike game about arranging a grid inventory optimally.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Redditing","Browsing reddit. Some good subreddits include r/AnimalsBeingDerps and\n  r/DataIsBeautiful. Warning: can be a big time sink!",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do","Requires little to no difficult decision making, so is therefore easy to\n    pick up and do. This can lead to impulsively doing this thing too much."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Joy of sharing","The feeling you get when you find something cool and share it with someone\n    else."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Focus fragmenting","The feeling of constantly having your focus redirected, preventing you\n    from going deeper on any one particular thing."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems","Most of the time this activity is monotonous and/or forgettable, but\n    occasionally it will yield an extremely memorable or life-changing\n    experience."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Browsing Hacker News","Like browsing reddit.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["habit","consuming content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Discovery of hidden gems"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching educational YouTube","This includes watching videos from channels like\n  [Veritasium](https://www.youtube.com/user/1veritasium), \n  [CGP Grey](https://www.youtube.com/user/CGPGrey),\n  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wonder","A sense of wonder at the beauty of the world."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching GothamChess","Watching the GothamChess YouTube channel.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["consuming content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Easy to do"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["False Understanding","A state of mind where something seems to make sense emotionally, but if\n    you were to try to explain it in your own words or otherwise apply the\n    knowledge you would fail."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Relaxing"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Spiderman: Into the Spider-Verse","Great story, cool themes about family and parenting.  Also about self\n  discovery. Quintessential all-ages kind of film.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching Inside Out","I loved the modelling of the mind as a collection of different emotions\n  competing for control.  Really made me get invested with the main character,\n  and made me cry when things started going poorly for her at one point.\n  Discussing this movie might be a good way to connect with people that\n  are otherwise fairly different.  \n  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Watching The Matrix","Watched with my Dad after being told that it would be very hard to understand.\n  Turned out that wasn't true for either of us.\n\n  Excellent sci-fi, where sci-fi is defined as a medium that explores how new\n  plausible technologies would affect the world.  Action/style was very compelling\n  to.  Favorite movie for many years, perhaps even still in some ways.\n\n  I think the sequels are pretty good, unlike many others.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["movie","consuming content"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Drafting Magic: The Gathering","My first experience was 'that complex card game that older kids played' when\n  I was very young.  Faintly remember that I specifically thought the lands were\n  really cool, have specific memory of the plains.  \n\n  Started playing first from a friend's cube (a collection of cards you can draft\n  decks from and then play each other in a tournament style).  Was pretty\n  intense/overwhelming at first, but in a good way.  \n\n  Since have played a bunch on MTG: Arena, a very polished computer interface\n  to the game.\n  ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wavelength or [Longwave](https://longwave.web.app/)","An icebreaker-type game that revolves around guessing people's opinions.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Codenames](https://codenames.game/)","One variant worth trying is trying to play with pictures instead of words on\n  the main board. A stand-alone game (Codenames Pictures) exists for this, but \n  it's also fun to try using custom pictures. For instance, the dream cards\n  from Mysterium led to a pretty fun game. Note that\n  [this site](https://codenames-pictures.dport.me/) looks like it allows you to\n  do this in a virtual setting.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chess","I've found lichess.org is a great place to play.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","turn-based","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yo-Yoing","Playing with a yo-yo, and learning new tricks for it.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place","The feeling when something that you thought was impossible, or otherwise\n    had no idea how to even approach doing, you can suddenly do effortlessly."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beat Saber","Playing the VR rhythm game beat saber.",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Skill clicking into place"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Being in the Zone","Being in a state of mind where all your attention must be focused on a\n    single thing to avoid failure, leading to an emptiness of other thoughts."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Making Small Web Apps in ClojureScript with Reagent","See title :)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["programming"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pride of Construction","Feeling proud or even in awe of something you made that is now a (semi)\n    permenant thing in the world. ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["positive"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chaos to Solution","The feeling when you have no idea how to fix something but suddenly a\n    solution appears out of nowhere. You may or may not understand how the\n    solution works or where it came from."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apex Legends","A fast-paced first person shooter video game. Has extremely good art\n  direction, smooth gameplay, and balanced mechanics.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","multiplayer","competitive","real-time"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Constructive regret","The feeling when you step out of a test and think 'I knew that answer!!'\n    in a way that makes you want to walk right back into the testing hall and\n    fix your mistake."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Wordle](https://www.nytimes.com/games/wordle/index.html)","A fun word game.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Quordle](https://www.quordle.com/#/)","A more complex form of wordle, with a higher frequency of [BS words](https://www.reddit.com/r/Quordle/comments/t27irp/unfair_word_today/).",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[DAT Creativity](https://www.datcreativity.com/)","A test about tring to come up with the most different words possible.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Semantle](https://semantle.novalis.org/)","Similar to DAT Creativity, but a daily game like Wordle.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Puzzgrid](https://puzzgrid.com/best.php)","A game about matching ambiguous word meanings.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[The Witness](https://store.steampowered.com/app/210970/The_Witness/)","3-D puzzle game in a beautiful world",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Opus Magnum](https://store.steampowered.com/app/558990/Opus_Magnum/)","Game about programming machines to build molecules.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","puzzle","programming"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fire Emblem 7 & 8](https://en.wikipedia.org/wiki/Fire_Emblem_(video_game%29)","I first played this game on the Game Boy Advance when I was in middle school.\nFor some reason the art style and especially animation really spoke to me, and\nI found the gameplay loop very compelling.  Fair warning though that this game\nmay be on this list mostly because of nostalgia.\n\nOne aspect of this game that I really enjoy is the process of building your\nparty over time and making sure you train the right characters.  It's very\nsatisfying to help a weaker character finish enemies to get experience with the\ngoal of making them a core part of your team composition later on.  This is\noften fairly difficult - since the characters are weaker after all - which only\nadds to the satisfaction when you pull it off.\n\nAnother cool mechanic in FE is building supports between characters.  When two\ncharacters fight side by side they will over time build a relationship, which\nleads to little dialogue bites.  It's satisfying to discover these as you play\nthrough the game.\n\nBoth training weaker units and building supports are examples of\n'meta-challenges' in FE; they aren't required to finish the games, but give you\nself-directed and sometimes difficult optional objectives during the battles.\nBecause these challenges are self directed they make me feel like I am\nexpressing myself more as a player, which makes the game feel more interesting\nthan if I was just solving the same battle puzzles as everyone else.",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","story","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[XCOM 2 + War of the Chosen](https://en.wikipedia.org/wiki/XCOM_2)","Very similar appeal to Fire Emblem. Less story focused and more focused on \n  character customization.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Battle Brothers](http://battlebrothersgame.com/)","Good tactical RPG set in a low fantasy world.\n\n  Lots of character customization via different weapon types, and stat/perk\n  assignment on level up. Not to mention the starting stats given to each\n  character. Unfortunately, the randomness in this game will lead to characters\n  dying, so if you want to preserve specific characters get ready to save and\n  load a lot :).\n  \n  This game is pretty hard and doesn't necessarily give you direct feedback as\n  to why you are failing. The combat uses randomness pretty heavily to\n  determine hit/miss/crit (head hit) chance, which means that the consequences\n  of your actions are 'fuzzed' - good decisions will sometimes be punished, and\n  bad ones you will sometimes get away with. This means that it's tricky to\n  personally track if your strategy is working without a decent time investment\n  for each strategy you are trying.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Reactive Randomness Stress","Committing a decision and then bracing yourself for bad things to happen\n    based on some probability which you cannot stop (since you have already\n    committed)."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Fell Seal - Arbiter's Mark](https://www.fellseal.com/)","Really well designed game with a good story, deep character customization,\n  and difficult encounters. This game does a great job of letting you customize\n  your character abilities with a lot of depth, but still with enough\n  constraints to not make every character feel the same. Then, it makes the\n  encounters in the main story difficult, but allows you to level up your\n  characters in 'patrol' side-encounters in case the way you built your\n  characters was not optimal for the main story. This is an awesome way to\n  reward players who do a good job with their builds (they have to grind less)\n  without forcing players into said optimal builds.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Overwatch](https://en.wikipedia.org/wiki/Overwatch_(video_game%29)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Darkest Dungeon](https://en.wikipedia.org/wiki/Darkest_Dungeon)","Amazing atmosphere and fun character building.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","\u2B50top10"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bananagrams","One fun variant is to open a book in text format with some program that can \n  search text and make it so that you can only use words that exist in that\n  book.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","social"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Islanders](https://en.wikipedia.org/wiki/Islanders_(video_game%29)","Cool turn based city builder made with a beautiful art style.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Bad North](https://www.badnorth.com/)","",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Rainbow 6: Siege","Very intense and engaging game that requires a high level of focus.  Every\nmovement made in this game produces audible sound, meaning that movement gives\naway your position and makes you vulnerable.  However, like in most shooters,\nif you proactively move to shoot at a particular point, you will still have an\nadvantage against someone reacting to your movement.  This leads to a dynamic\nwhere both you and your opponent are trying to determine the location of the\nother without giving away their own location - once one person knows with\ncertainty they can simply move to attack and will have a strong advantage.\n\nThis dynamic is framed by the asymmetric nature of all game modes, which have\nattacking and defending sides.  Attackers must move to engage the defenders,\nmeaning that they start out disadvantaged (they are moving and making noise\nwhile defenders are not).  To counter this, attackers all have remote control\ndrones that make noise when they move around.  These are easily destroyed, but\ncan be used to determine the locations of defenders, giving attackers\nadvantage.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CoD: MW2","This game was trash but at least it let me [make a YouTube video with 160k views](https://www.youtube.com/watch?v=fx1vtMZCFvI&ab_channel=s1lentProtector).",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","competitive"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Iron Danger](https://store.steampowered.com/app/899310/Iron_Danger/)","Really cool strategy game with a cool story. Would love it if they made a\n  sequel and/or expanded it into a bigger RPG with more customization.",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","story","solitary"], null),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Slipways](https://slipways.net/)","A video game about colonizing planets and connecting them with trade\n  routes.",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary","turn-based","puzzle"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Scanning through possibilities"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Age of Darkness: Final Stand](https://www.ageofdarkness.com/)","A real-time-with-pause strategy game with excellent art. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["game","solitary"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fitting puzzle pieces together","The feeling of finding the right place for a part of something you are\n    building."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[Three Worlds\n      Collide](https://www.lesswrong.com/posts/HawFh7RvDM4RyoJ2d/three-worlds-collide-0-8)","Science fiction with a philosophical twist.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["story","philosophy"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Thought Provoking"], null)], null)], null)], true);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$make_experience_map_$_iter__50874(s__50875){
return (new cljs.core.LazySeq(null,(function (){
var s__50875__$1 = s__50875;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50875__$1);
if(temp__5753__auto__){
var s__50875__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50875__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50875__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50877 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50876 = (0);
while(true){
if((i__50876 < size__4651__auto__)){
var vec__50878 = cljs.core._nth(c__4650__auto__,i__50876);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50878,(3),null);
cljs.core.chunk_append(b__50877,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4652__auto__ = ((function (i__50876,vec__50878,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__50877,s__50875__$2,temp__5753__auto__){
return (function website_helpers$core$make_experience_map_$_iter__50874_$_iter__50881(s__50882){
return (new cljs.core.LazySeq(null,((function (i__50876,vec__50878,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__50877,s__50875__$2,temp__5753__auto__){
return (function (){
var s__50882__$1 = s__50882;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50882__$1);
if(temp__5753__auto____$1){
var s__50882__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50882__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__50882__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__50884 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__50883 = (0);
while(true){
if((i__50883 < size__4651__auto____$1)){
var vec__50885 = cljs.core._nth(c__4650__auto____$1,i__50883);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50885,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50885,(1),null);
cljs.core.chunk_append(b__50884,website_helpers.core.clean(mental_state_name));

var G__51164 = (i__50883 + (1));
i__50883 = G__51164;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50884),website_helpers$core$make_experience_map_$_iter__50874_$_iter__50881(cljs.core.chunk_rest(s__50882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50884),null);
}
} else {
var vec__50888 = cljs.core.first(s__50882__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50888,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50888,(1),null);
return cljs.core.cons(website_helpers.core.clean(mental_state_name),website_helpers$core$make_experience_map_$_iter__50874_$_iter__50881(cljs.core.rest(s__50882__$2)));
}
} else {
return null;
}
break;
}
});})(i__50876,vec__50878,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__50877,s__50875__$2,temp__5753__auto__))
,null,null));
});})(i__50876,vec__50878,experience_name,details,tags,mental_states,c__4650__auto__,size__4651__auto__,b__50877,s__50875__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})())], null)], null));

var G__51165 = (i__50876 + (1));
i__50876 = G__51165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50877),website_helpers$core$make_experience_map_$_iter__50874(cljs.core.chunk_rest(s__50875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50877),null);
}
} else {
var vec__50891 = cljs.core.first(s__50875__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50891,(0),null);
var details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50891,(1),null);
var tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50891,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50891,(3),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(experience_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(details),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.set(tags),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__50891,experience_name,details,tags,mental_states,s__50875__$2,temp__5753__auto__){
return (function website_helpers$core$make_experience_map_$_iter__50874_$_iter__50894(s__50895){
return (new cljs.core.LazySeq(null,(function (){
var s__50895__$1 = s__50895;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50895__$1);
if(temp__5753__auto____$1){
var s__50895__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50895__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50895__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50897 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50896 = (0);
while(true){
if((i__50896 < size__4651__auto__)){
var vec__50898 = cljs.core._nth(c__4650__auto__,i__50896);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50898,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50898,(1),null);
cljs.core.chunk_append(b__50897,website_helpers.core.clean(mental_state_name));

var G__51166 = (i__50896 + (1));
i__50896 = G__51166;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50897),website_helpers$core$make_experience_map_$_iter__50874_$_iter__50894(cljs.core.chunk_rest(s__50895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50897),null);
}
} else {
var vec__50901 = cljs.core.first(s__50895__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50901,(1),null);
return cljs.core.cons(website_helpers.core.clean(mental_state_name),website_helpers$core$make_experience_map_$_iter__50874_$_iter__50894(cljs.core.rest(s__50895__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50891,experience_name,details,tags,mental_states,s__50875__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})())], null)], null),website_helpers$core$make_experience_map_$_iter__50874(cljs.core.rest(s__50875__$2)));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(existing,cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50904_SHARP_){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [null,null,"",null], null), null),p1__50904_SHARP_)));
}),new$)));
});
/**
 * Adds a single [Name Info] pair to an DataMap, merging it with an existing
 *   entry if need be.
 */
website_helpers.core._accrete_mental_states = (function website_helpers$core$_accrete_mental_states(data_map,p__50905){
var vec__50906 = p__50905;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906,(0),null);
var map__50909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50906,(1),null);
var map__50909__$1 = cljs.core.__destructure_map(map__50909);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50909__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var map__50910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name);
var map__50910__$1 = cljs.core.__destructure_map(map__50910);
var existing_details = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50910__$1,new cljs.core.Keyword(null,"details","details",1956795411),"");
var existing_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50910__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentHashSet.EMPTY);
var existing_children = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50910__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data_map,name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(existing_details),cljs.core.str.cljs$core$IFn$_invoke$arity$1(details)].join(''),new cljs.core.Keyword(null,"tags","tags",1771418977),website_helpers.core.accrete_set(existing_tags,tags),new cljs.core.Keyword(null,"children","children",-940561982),website_helpers.core.accrete_set(existing_children,children)], null));
});
website_helpers.core.make_mental_state_map = (function website_helpers$core$make_mental_state_map(raw_experiences){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(website_helpers.core._accrete_mental_states,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$core$make_mental_state_map_$_iter__50911(s__50912){
return (new cljs.core.LazySeq(null,(function (){
var s__50912__$1 = s__50912;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50912__$1);
if(temp__5753__auto__){
var s__50912__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50912__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50912__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50914 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50913 = (0);
while(true){
if((i__50913 < size__4651__auto__)){
var vec__50915 = cljs.core._nth(c__4650__auto__,i__50913);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50915,(3),null);
cljs.core.chunk_append(b__50914,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__50913,vec__50915,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__50914,s__50912__$2,temp__5753__auto__){
return (function website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50918(s__50919){
return (new cljs.core.LazySeq(null,((function (i__50913,vec__50915,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__50914,s__50912__$2,temp__5753__auto__){
return (function (){
var s__50919__$1 = s__50919;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50919__$1);
if(temp__5753__auto____$1){
var s__50919__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50919__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__50919__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__50921 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__50920 = (0);
while(true){
if((i__50920 < size__4651__auto____$1)){
var vec__50922 = cljs.core._nth(c__4650__auto____$1,i__50920);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50922,(2),null);
cljs.core.chunk_append(b__50921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.core.clean(experience_name)])], null)], null));

var G__51167 = (i__50920 + (1));
i__50920 = G__51167;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50921),website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50918(cljs.core.chunk_rest(s__50919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50921),null);
}
} else {
var vec__50925 = cljs.core.first(s__50919__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.core.clean(experience_name)])], null)], null),website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50918(cljs.core.rest(s__50919__$2)));
}
} else {
return null;
}
break;
}
});})(i__50913,vec__50915,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__50914,s__50912__$2,temp__5753__auto__))
,null,null));
});})(i__50913,vec__50915,experience_name,_,___$1,mental_states,c__4650__auto__,size__4651__auto__,b__50914,s__50912__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})()));

var G__51168 = (i__50913 + (1));
i__50913 = G__51168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50914),website_helpers$core$make_mental_state_map_$_iter__50911(cljs.core.chunk_rest(s__50912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50914),null);
}
} else {
var vec__50928 = cljs.core.first(s__50912__$2);
var experience_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50928,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50928,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50928,(2),null);
var mental_states = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50928,(3),null);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__50928,experience_name,_,___$1,mental_states,s__50912__$2,temp__5753__auto__){
return (function website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50931(s__50932){
return (new cljs.core.LazySeq(null,(function (){
var s__50932__$1 = s__50932;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50932__$1);
if(temp__5753__auto____$1){
var s__50932__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50932__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50932__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50934 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50933 = (0);
while(true){
if((i__50933 < size__4651__auto__)){
var vec__50935 = cljs.core._nth(c__4650__auto__,i__50933);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50935,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50935,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50935,(2),null);
cljs.core.chunk_append(b__50934,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.core.clean(experience_name)])], null)], null));

var G__51169 = (i__50933 + (1));
i__50933 = G__51169;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50934),website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50931(cljs.core.chunk_rest(s__50932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50934),null);
}
} else {
var vec__50938 = cljs.core.first(s__50932__$2);
var mental_state_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50938,(0),null);
var mental_state_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50938,(1),null);
var mental_state_tags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50938,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.clean(mental_state_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"details","details",1956795411),website_helpers.core.clean(mental_state_details),new cljs.core.Keyword(null,"tags","tags",1771418977),(((mental_state_tags == null))?cljs.core.PersistentHashSet.EMPTY:cljs.core.set(mental_state_tags)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentHashSet.createAsIfByAssoc([website_helpers.core.clean(experience_name)])], null)], null),website_helpers$core$make_mental_state_map_$_iter__50911_$_iter__50931(cljs.core.rest(s__50932__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50928,experience_name,_,___$1,mental_states,s__50912__$2,temp__5753__auto__))
;
return iter__4652__auto__(mental_states);
})()),website_helpers$core$make_mental_state_map_$_iter__50911(cljs.core.rest(s__50912__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50941_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__50941_SHARP_,/=/);
}),param_strs));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
website_helpers.core.sync_url_params_BANG_ = (function website_helpers$core$sync_url_params_BANG_(vars){
var url = (new URL(window.location));
var seq__50942 = cljs.core.seq(vars);
var chunk__50943 = null;
var count__50944 = (0);
var i__50945 = (0);
while(true){
if((i__50945 < count__50944)){
var vec__50952 = chunk__50943.cljs$core$IIndexed$_nth$arity$2(null,i__50945);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__51170 = seq__50942;
var G__51171 = chunk__50943;
var G__51172 = count__50944;
var G__51173 = (i__50945 + (1));
seq__50942 = G__51170;
chunk__50943 = G__51171;
count__50944 = G__51172;
i__50945 = G__51173;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50942);
if(temp__5753__auto__){
var seq__50942__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50942__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50942__$1);
var G__51174 = cljs.core.chunk_rest(seq__50942__$1);
var G__51175 = c__4679__auto__;
var G__51176 = cljs.core.count(c__4679__auto__);
var G__51177 = (0);
seq__50942 = G__51174;
chunk__50943 = G__51175;
count__50944 = G__51176;
i__50945 = G__51177;
continue;
} else {
var vec__50955 = cljs.core.first(seq__50942__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50955,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50955,(1),null);
if(cljs.core.truth_(value)){
url.searchParams.set(var$,value);
} else {
url.searchParams.delete(var$);
}

window.history.pushState(null,"",url.toString());


var G__51178 = cljs.core.next(seq__50942__$1);
var G__51179 = null;
var G__51180 = (0);
var G__51181 = (0);
seq__50942 = G__51178;
chunk__50943 = G__51179;
count__50944 = G__51180;
i__50945 = G__51181;
continue;
}
} else {
return null;
}
}
break;
}
});
website_helpers.core.dropdown_check_list = (function website_helpers$core$dropdown_check_list(vars,title){
var opened = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"tag-list",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropdown-check-list",(cljs.core.truth_(cljs.core.deref(opened))?"visible":null)], null),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"anchor",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(opened,cljs.core.not(cljs.core.deref(opened)));
})], null),title], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items"], null)], null),(function (){var iter__4652__auto__ = (function website_helpers$core$dropdown_check_list_$_iter__50958(s__50959){
return (new cljs.core.LazySeq(null,(function (){
var s__50959__$1 = s__50959;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50959__$1);
if(temp__5753__auto__){
var s__50959__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50959__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50959__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50961 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50960 = (0);
while(true){
if((i__50960 < size__4651__auto__)){
var var$ = cljs.core._nth(c__4650__auto__,i__50960);
cljs.core.chunk_append(b__50961,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__50960,var$,c__4650__auto__,size__4651__auto__,b__50961,s__50959__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.core.sync_url_params_BANG_(cljs.core.deref(vars));
});})(i__50960,var$,c__4650__auto__,size__4651__auto__,b__50961,s__50959__$2,temp__5753__auto__,opened))
], null)], null),var$], null));

var G__51182 = (i__50960 + (1));
i__50960 = G__51182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50961),website_helpers$core$dropdown_check_list_$_iter__50958(cljs.core.chunk_rest(s__50959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50961),null);
}
} else {
var var$ = cljs.core.first(s__50959__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),var$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$))?"checked":""),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (var$,s__50959__$2,temp__5753__auto__,opened){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(vars,cljs.core.assoc,var$,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(vars),var$)));

return website_helpers.core.sync_url_params_BANG_(cljs.core.deref(vars));
});})(var$,s__50959__$2,temp__5753__auto__,opened))
], null)], null),var$], null),website_helpers$core$dropdown_check_list_$_iter__50958(cljs.core.rest(s__50959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(cljs.core.deref(vars))));
})())], null);
});
});
website_helpers.core.get_url_param_selections = (function website_helpers$core$get_url_param_selections(vars){
var url_params = website_helpers.core.parse_params();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_url_param_selections_$_iter__50962(s__50963){
return (new cljs.core.LazySeq(null,(function (){
var s__50963__$1 = s__50963;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50963__$1);
if(temp__5753__auto__){
var s__50963__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50963__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50963__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50965 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50964 = (0);
while(true){
if((i__50964 < size__4651__auto__)){
var var$ = cljs.core._nth(c__4650__auto__,i__50964);
cljs.core.chunk_append(b__50965,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null));

var G__51183 = (i__50964 + (1));
i__50964 = G__51183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50965),website_helpers$core$get_url_param_selections_$_iter__50962(cljs.core.chunk_rest(s__50963__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50965),null);
}
} else {
var var$ = cljs.core.first(s__50963__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.core.contains_QMARK_(url_params,var$)], null),website_helpers$core$get_url_param_selections_$_iter__50962(cljs.core.rest(s__50963__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(vars);
})());
});
/**
 * If no vars are selected, all are!
 */
website_helpers.core.get_selected_vars = (function website_helpers$core$get_selected_vars(selections){
if(cljs.core.every_QMARK_((function (p1__50966_SHARP_){
return cljs.core.not(p1__50966_SHARP_);
}),cljs.core.vals(selections))){
return cljs.core.set(cljs.core.keys(selections));
} else {
return cljs.core.set((function (){var iter__4652__auto__ = (function website_helpers$core$get_selected_vars_$_iter__50967(s__50968){
return (new cljs.core.LazySeq(null,(function (){
var s__50968__$1 = s__50968;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50968__$1);
if(temp__5753__auto__){
var s__50968__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50968__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50968__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50970 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50969 = (0);
while(true){
if((i__50969 < size__4651__auto__)){
var vec__50971 = cljs.core._nth(c__4650__auto__,i__50969);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50971,(1),null);
if(cljs.core.truth_(selected)){
cljs.core.chunk_append(b__50970,var$);

var G__51184 = (i__50969 + (1));
i__50969 = G__51184;
continue;
} else {
var G__51185 = (i__50969 + (1));
i__50969 = G__51185;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50970),website_helpers$core$get_selected_vars_$_iter__50967(cljs.core.chunk_rest(s__50968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50970),null);
}
} else {
var vec__50974 = cljs.core.first(s__50968__$2);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50974,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50974,(1),null);
if(cljs.core.truth_(selected)){
return cljs.core.cons(var$,website_helpers$core$get_selected_vars_$_iter__50967(cljs.core.rest(s__50968__$2)));
} else {
var G__51186 = cljs.core.rest(s__50968__$2);
s__50968__$1 = G__51186;
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
return iter__4652__auto__(selections);
})());
}
});
website_helpers.core.make_tag_hiccup = (function website_helpers$core$make_tag_hiccup(tags,selected_tags){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Tags: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50977_SHARP_){
if(cljs.core.truth_((selected_tags.cljs$core$IFn$_invoke$arity$1 ? selected_tags.cljs$core$IFn$_invoke$arity$1(p1__50977_SHARP_) : selected_tags.call(null,p1__50977_SHARP_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__50977_SHARP_], null),p1__50977_SHARP_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__50977_SHARP_], null),p1__50977_SHARP_], null);
}
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(tags)))], null);
});
website_helpers.core.calc_similarity = (function website_helpers$core$calc_similarity(info1,info2){
return cljs.core.count(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info1),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(info2)));
});
website_helpers.core.Similarities = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),website_helpers.core.Name,new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
website_helpers.core.get_all_similarities = (function website_helpers$core$get_all_similarities(data_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_all_similarities_$_iter__50978(s__50979){
return (new cljs.core.LazySeq(null,(function (){
var s__50979__$1 = s__50979;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50979__$1);
if(temp__5753__auto__){
var s__50979__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50979__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50979__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__50981 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__50980 = (0);
while(true){
if((i__50980 < size__4651__auto__)){
var vec__50982 = cljs.core._nth(c__4650__auto__,i__50980);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50982,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50982,(1),null);
cljs.core.chunk_append(b__50981,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (i__50980,vec__50982,name1,info1,c__4650__auto__,size__4651__auto__,b__50981,s__50979__$2,temp__5753__auto__){
return (function website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50985(s__50986){
return (new cljs.core.LazySeq(null,((function (i__50980,vec__50982,name1,info1,c__4650__auto__,size__4651__auto__,b__50981,s__50979__$2,temp__5753__auto__){
return (function (){
var s__50986__$1 = s__50986;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50986__$1);
if(temp__5753__auto____$1){
var s__50986__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50986__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__50986__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__50988 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__50987 = (0);
while(true){
if((i__50987 < size__4651__auto____$1)){
var vec__50989 = cljs.core._nth(c__4650__auto____$1,i__50987);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(1),null);
cljs.core.chunk_append(b__50988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null));

var G__51187 = (i__50987 + (1));
i__50987 = G__51187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50988),website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50985(cljs.core.chunk_rest(s__50986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50988),null);
}
} else {
var vec__50992 = cljs.core.first(s__50986__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null),website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50985(cljs.core.rest(s__50986__$2)));
}
} else {
return null;
}
break;
}
});})(i__50980,vec__50982,name1,info1,c__4650__auto__,size__4651__auto__,b__50981,s__50979__$2,temp__5753__auto__))
,null,null));
});})(i__50980,vec__50982,name1,info1,c__4650__auto__,size__4651__auto__,b__50981,s__50979__$2,temp__5753__auto__))
;
return iter__4652__auto__(data_map);
})())], null));

var G__51188 = (i__50980 + (1));
i__50980 = G__51188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50981),website_helpers$core$get_all_similarities_$_iter__50978(cljs.core.chunk_rest(s__50979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50981),null);
}
} else {
var vec__50995 = cljs.core.first(s__50979__$2);
var name1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50995,(0),null);
var info1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50995,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = ((function (vec__50995,name1,info1,s__50979__$2,temp__5753__auto__){
return (function website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50998(s__50999){
return (new cljs.core.LazySeq(null,(function (){
var s__50999__$1 = s__50999;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__50999__$1);
if(temp__5753__auto____$1){
var s__50999__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50999__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__50999__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51001 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51000 = (0);
while(true){
if((i__51000 < size__4651__auto__)){
var vec__51002 = cljs.core._nth(c__4650__auto__,i__51000);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51002,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51002,(1),null);
cljs.core.chunk_append(b__51001,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null));

var G__51189 = (i__51000 + (1));
i__51000 = G__51189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51001),website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50998(cljs.core.chunk_rest(s__50999__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51001),null);
}
} else {
var vec__51005 = cljs.core.first(s__50999__$2);
var name2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51005,(0),null);
var info2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51005,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name2,website_helpers.core.calc_similarity(info1,info2)], null),website_helpers$core$get_all_similarities_$_iter__50978_$_iter__50998(cljs.core.rest(s__50999__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__50995,name1,info1,s__50979__$2,temp__5753__auto__))
;
return iter__4652__auto__(data_map);
})())], null),website_helpers$core$get_all_similarities_$_iter__50978(cljs.core.rest(s__50979__$2)));
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
return cljs.core.first(cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51008_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(distances,p1__51008_SHARP_);
}),cljs.core.keys(distances))));
});
/**
 * Remove the given name from the similarities map.
 */
website_helpers.core.prune_similarities = (function website_helpers$core$prune_similarities(name_to_prune,similarities){
return clojure.walk.postwalk((function (p1__51009_SHARP_){
if(cljs.core.map_QMARK_(p1__51009_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51009_SHARP_,name_to_prune);
} else {
return p1__51009_SHARP_;
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__4652__auto__ = (function website_helpers$core$sort_by_tags_$_iter__51010(s__51011){
return (new cljs.core.LazySeq(null,(function (){
var s__51011__$1 = s__51011;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51011__$1);
if(temp__5753__auto__){
var s__51011__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51011__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51011__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51013 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51012 = (0);
while(true){
if((i__51012 < size__4651__auto__)){
var name = cljs.core._nth(c__4650__auto__,i__51012);
cljs.core.chunk_append(b__51013,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null));

var G__51190 = (i__51012 + (1));
i__51012 = G__51190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51013),website_helpers$core$sort_by_tags_$_iter__51010(cljs.core.chunk_rest(s__51011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51013),null);
}
} else {
var name = cljs.core.first(s__51011__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_map,name)], null),website_helpers$core$sort_by_tags_$_iter__51010(cljs.core.rest(s__51011__$2)));
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
var tag_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.core.get_url_param_selections(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.vals(data_map)))));
return (function (data_name__$1,other_name__$1,data_map__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),data_name__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.dropdown_check_list,tag_selections,"Select Tags"], null)], null)], null),(function (){var iter__4652__auto__ = (function website_helpers$core$aggregated_items_$_iter__51014(s__51015){
return (new cljs.core.LazySeq(null,(function (){
var s__51015__$1 = s__51015;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51015__$1);
if(temp__5753__auto__){
var s__51015__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51015__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51015__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51017 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51016 = (0);
while(true){
if((i__51016 < size__4651__auto__)){
var vec__51018 = cljs.core._nth(c__4650__auto__,i__51016);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51018,(0),null);
var map__51021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51018,(1),null);
var map__51021__$1 = cljs.core.__destructure_map(map__51021);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51021__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.core.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.core.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
cljs.core.chunk_append(b__51017,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.core.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.core.anchor(hiccup_name)], null),website_helpers.core.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.core.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.core.list_to_hiccup(children)], null));

var G__51191 = (i__51016 + (1));
i__51016 = G__51191;
continue;
} else {
var G__51192 = (i__51016 + (1));
i__51016 = G__51192;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51017),website_helpers$core$aggregated_items_$_iter__51014(cljs.core.chunk_rest(s__51015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51017),null);
}
} else {
var vec__51022 = cljs.core.first(s__51015__$2);
var item_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51022,(0),null);
var map__51025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51022,(1),null);
var map__51025__$1 = cljs.core.__destructure_map(map__51025);
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51025__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var selected_tags = website_helpers.core.get_selected_vars(cljs.core.deref(tag_selections));
var hiccup_name = website_helpers.core.my_md__GT_hiccup(item_name);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_tags),cljs.core.count(cljs.core.deref(tag_selections)))) || (clojure.set.subset_QMARK_(selected_tags,tags)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),website_helpers.core.anchor_string(hiccup_name)], null),hiccup_name,website_helpers.core.anchor(hiccup_name)], null),website_helpers.core.make_tag_hiccup(tags,selected_tags),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),website_helpers.core.my_md__GT_hiccup(details)," ",other_name__$1,":"], null),website_helpers.core.list_to_hiccup(children)], null),website_helpers$core$aggregated_items_$_iter__51014(cljs.core.rest(s__51015__$2)));
} else {
var G__51193 = cljs.core.rest(s__51015__$2);
s__51015__$1 = G__51193;
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
var idxes_by_path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__51026(s__51027){
return (new cljs.core.LazySeq(null,(function (){
var s__51027__$1 = s__51027;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51027__$1);
if(temp__5753__auto__){
var s__51027__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51027__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51027__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51029 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51028 = (0);
while(true){
if((i__51028 < size__4651__auto__)){
var node = cljs.core._nth(c__4650__auto__,i__51028);
cljs.core.chunk_append(b__51029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node)], null));

var G__51194 = (i__51028 + (1));
i__51028 = G__51194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51029),website_helpers$core$get_idxed_nodes_$_iter__51026(cljs.core.chunk_rest(s__51027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51029),null);
}
} else {
var node = cljs.core.first(s__51027__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(node)], null),website_helpers$core$get_idxed_nodes_$_iter__51026(cljs.core.rest(s__51027__$2)));
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
var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__51030(s__51031){
return (new cljs.core.LazySeq(null,(function (){
var s__51031__$1 = s__51031;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51031__$1);
if(temp__5753__auto__){
var s__51031__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51031__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51031__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51033 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51032 = (0);
while(true){
if((i__51032 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__51032);
cljs.core.chunk_append(b__51033,cljs.core.update.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),((function (i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51034(s__51035){
return (new cljs.core.LazySeq(null,((function (i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (){
var s__51035__$1 = s__51035;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51035__$1);
if(temp__5753__auto____$1){
var s__51035__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51035__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__51035__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__51037 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__51036 = (0);
while(true){
if((i__51036 < size__4651__auto____$1)){
var c = cljs.core._nth(c__4650__auto____$1,i__51036);
cljs.core.chunk_append(b__51037,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))));

var G__51195 = (i__51036 + (1));
i__51036 = G__51195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51037),website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51034(cljs.core.chunk_rest(s__51035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51037),null);
}
} else {
var c = cljs.core.first(s__51035__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))),website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51034(cljs.core.rest(s__51035__$2)));
}
} else {
return null;
}
break;
}
});})(i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
,null,null));
});})(i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
;
return iter__4652__auto__(children);
})());
});})(i__51032,n,c__4650__auto__,size__4651__auto__,b__51033,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
));

var G__51196 = (i__51032 + (1));
i__51032 = G__51196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51033),website_helpers$core$get_idxed_nodes_$_iter__51030(cljs.core.chunk_rest(s__51031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51033),null);
}
} else {
var n = cljs.core.first(s__51031__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"children","children",-940561982),((function (n,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path){
return (function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51038(s__51039){
return (new cljs.core.LazySeq(null,(function (){
var s__51039__$1 = s__51039;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51039__$1);
if(temp__5753__auto____$1){
var s__51039__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51039__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51039__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51041 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51040 = (0);
while(true){
if((i__51040 < size__4651__auto__)){
var c = cljs.core._nth(c__4650__auto__,i__51040);
cljs.core.chunk_append(b__51041,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))));

var G__51197 = (i__51040 + (1));
i__51040 = G__51197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51041),website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51038(cljs.core.chunk_rest(s__51039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51041),null);
}
} else {
var c = cljs.core.first(s__51039__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.get.cljs$core$IFn$_invoke$arity$2(idxes_by_path,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c))].join(''))),website_helpers$core$get_idxed_nodes_$_iter__51030_$_iter__51038(cljs.core.rest(s__51039__$2)));
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
});})(n,s__51031__$2,temp__5753__auto__,idxed_nodes,idxes_by_path))
),website_helpers$core$get_idxed_nodes_$_iter__51030(cljs.core.rest(s__51031__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4652__auto__ = (function website_helpers$core$get_links_$_iter__51042(s__51043){
return (new cljs.core.LazySeq(null,(function (){
var s__51043__$1 = s__51043;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51043__$1);
if(temp__5753__auto__){
var s__51043__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51043__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51043__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51045 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51044 = (0);
while(true){
if((i__51044 < size__4651__auto__)){
var subtree = cljs.core._nth(c__4650__auto__,i__51044);
cljs.core.chunk_append(b__51045,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (i__51044,subtree,c__4650__auto__,size__4651__auto__,b__51045,s__51043__$2,temp__5753__auto__){
return (function website_helpers$core$get_links_$_iter__51042_$_iter__51046(s__51047){
return (new cljs.core.LazySeq(null,((function (i__51044,subtree,c__4650__auto__,size__4651__auto__,b__51045,s__51043__$2,temp__5753__auto__){
return (function (){
var s__51047__$1 = s__51047;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51047__$1);
if(temp__5753__auto____$1){
var s__51047__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51047__$2)){
var c__4650__auto____$1 = cljs.core.chunk_first(s__51047__$2);
var size__4651__auto____$1 = cljs.core.count(c__4650__auto____$1);
var b__51049 = cljs.core.chunk_buffer(size__4651__auto____$1);
if((function (){var i__51048 = (0);
while(true){
if((i__51048 < size__4651__auto____$1)){
var child = cljs.core._nth(c__4650__auto____$1,i__51048);
cljs.core.chunk_append(b__51049,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null));

var G__51198 = (i__51048 + (1));
i__51048 = G__51198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51049),website_helpers$core$get_links_$_iter__51042_$_iter__51046(cljs.core.chunk_rest(s__51047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51049),null);
}
} else {
var child = cljs.core.first(s__51047__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),website_helpers$core$get_links_$_iter__51042_$_iter__51046(cljs.core.rest(s__51047__$2)));
}
} else {
return null;
}
break;
}
});})(i__51044,subtree,c__4650__auto__,size__4651__auto__,b__51045,s__51043__$2,temp__5753__auto__))
,null,null));
});})(i__51044,subtree,c__4650__auto__,size__4651__auto__,b__51045,s__51043__$2,temp__5753__auto__))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()));

var G__51199 = (i__51044 + (1));
i__51044 = G__51199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51045),website_helpers$core$get_links_$_iter__51042(cljs.core.chunk_rest(s__51043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51045),null);
}
} else {
var subtree = cljs.core.first(s__51043__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = ((function (subtree,s__51043__$2,temp__5753__auto__){
return (function website_helpers$core$get_links_$_iter__51042_$_iter__51050(s__51051){
return (new cljs.core.LazySeq(null,(function (){
var s__51051__$1 = s__51051;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51051__$1);
if(temp__5753__auto____$1){
var s__51051__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51051__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51051__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51053 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51052 = (0);
while(true){
if((i__51052 < size__4651__auto__)){
var child = cljs.core._nth(c__4650__auto__,i__51052);
cljs.core.chunk_append(b__51053,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null));

var G__51200 = (i__51052 + (1));
i__51052 = G__51200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51053),website_helpers$core$get_links_$_iter__51042_$_iter__51050(cljs.core.chunk_rest(s__51051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51053),null);
}
} else {
var child = cljs.core.first(s__51051__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(child),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(subtree),new cljs.core.Keyword(null,"value","value",305978217),(6)], null),website_helpers$core$get_links_$_iter__51042_$_iter__51050(cljs.core.rest(s__51051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(subtree,s__51043__$2,temp__5753__auto__))
;
return iter__4652__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(subtree));
})()),website_helpers$core$get_links_$_iter__51042(cljs.core.rest(s__51043__$2)));
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
var len__4864__auto___51201 = arguments.length;
var i__4865__auto___51202 = (0);
while(true){
if((i__4865__auto___51202 < len__4864__auto___51201)){
args__4870__auto__.push((arguments[i__4865__auto___51202]));

var G__51203 = (i__4865__auto___51202 + (1));
i__4865__auto___51202 = G__51203;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return website_helpers.core.update_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(website_helpers.core.update_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,update_fns){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4652__auto__ = (function website_helpers$core$iter__51056(s__51057){
return (new cljs.core.LazySeq(null,(function (){
var s__51057__$1 = s__51057;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51057__$1);
if(temp__5753__auto__){
var s__51057__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51057__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__51057__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__51059 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__51058 = (0);
while(true){
if((i__51058 < size__4651__auto__)){
var n = cljs.core._nth(c__4650__auto__,i__51058);
cljs.core.chunk_append(b__51059,(function (){var fexpr__51060 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__51060.cljs$core$IFn$_invoke$arity$1 ? fexpr__51060.cljs$core$IFn$_invoke$arity$1(n) : fexpr__51060.call(null,n));
})());

var G__51204 = (i__51058 + (1));
i__51058 = G__51204;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51059),website_helpers$core$iter__51056(cljs.core.chunk_rest(s__51057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51059),null);
}
} else {
var n = cljs.core.first(s__51057__$2);
return cljs.core.cons((function (){var fexpr__51061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,update_fns);
return (fexpr__51061.cljs$core$IFn$_invoke$arity$1 ? fexpr__51061.cljs$core$IFn$_invoke$arity$1(n) : fexpr__51061.call(null,n));
})(),website_helpers$core$iter__51056(cljs.core.rest(s__51057__$2)));
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
(website_helpers.core.update_nodes.cljs$lang$applyTo = (function (seq51054){
var G__51055 = cljs.core.first(seq51054);
var seq51054__$1 = cljs.core.next(seq51054);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51055,seq51054__$1);
}));

website_helpers.core.scale_size = (function website_helpers$core$scale_size(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"size","size",1098693007),(function (p1__51062_SHARP_){
return Math.sqrt((p1__51062_SHARP_ / (10)));
}));
});
website_helpers.core.assign_group = (function website_helpers$core$assign_group(node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"group","group",582596132),(((new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node) == null))?(1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(2):((((0) <= cljs.core.count(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))?(3):null))));
});
website_helpers.core.strip_extension = (function website_helpers$core$strip_extension(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__51063_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__51063_SHARP_,/\./));
})),new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__51064_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__51064_SHARP_,/\./));
}));
});
website_helpers.core.fix_path = (function website_helpers$core$fix_path(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"path","path",-188191168),(function (p1__51065_SHARP_){
return clojure.string.replace(p1__51065_SHARP_,/\/home/,"docs/");
}));
});
/**
 * Capitalize every word in a string
 */
website_helpers.core.capitalize_words = (function website_helpers$core$capitalize_words(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\b/)));
});
website_helpers.core.prettify_name = (function website_helpers$core$prettify_name(node){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__51066_SHARP_){
return website_helpers.core.capitalize_words(clojure.string.replace(p1__51066_SHARP_,/-/," "));
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
website_helpers.core.make_index_menu = (function website_helpers$core$make_index_menu(notes){
var category_selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(website_helpers.core.get_url_param_selections(cljs.core.keys(website_helpers.notes.get_notes_by_category(notes))));
return (function (){
var selected_categories = website_helpers.core.get_selected_vars(cljs.core.deref(category_selections));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.dropdown_check_list,category_selections,"Select Categories"], null)], null),website_helpers.notes.make_category_menu(notes,selected_categories,website_helpers.notes.get_notes_by_largest_category)], null);
});
});
goog.exportSymbol('website_helpers.core.make_index_menu', website_helpers.core.make_index_menu);
website_helpers.core.home_page = (function website_helpers$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"hi"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.make_index_menu,website_helpers.notes.example_notes], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.make_aggregated_items,website_helpers.core.example_experiences], null)], null);
});
});
website_helpers.core.mount_root = (function website_helpers$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website_helpers.core.home_page], null),document.getElementById("app"));
});
website_helpers.core.refresh = (function website_helpers$core$refresh(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hot code Remount"], 0));

cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
}));

(website_helpers.core._accrete_mental_states = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
}));

(website_helpers.core.get_url_param_selections = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
}));

(website_helpers.core.sync_url_params_BANG_ = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
}));

(website_helpers.core.calc_similarity = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
}));

(website_helpers.core.make_aggregated_items = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
}));

(website_helpers.core.accrete_set = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
}));

(website_helpers.core.get_closest_name = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
}));

(website_helpers.core.dropdown_check_list = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
}));

(website_helpers.core.make_experience_map = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
}));

(website_helpers.core.aggregated_items = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
}));

(website_helpers.core.list_to_hiccup = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
}));

(website_helpers.core.prune_similarities = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
}));

(website_helpers.core.get_selected_vars = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
}));

(website_helpers.core.get_all_similarities = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
}));

(website_helpers.core.make_tag_hiccup = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
}));

(website_helpers.core.make_mental_state_map = orig_fn__47886__auto__);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-selected-vars","get-selected-vars",-2100130819,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selections","selections",362921294,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"If no vars are selected, all are!",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-similarity","calc-similarity",1641430634,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"info1","info1",525109113,null),new cljs.core.Symbol(null,"info2","info2",401851582,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Info","Info",-1276427045,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sync-url-params!","sync-url-params!",-167046012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-url-param-selections","get-url-param-selections",-2051873021,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-check-list","dropdown-check-list",-205445998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null),website_helpers.core._accrete_mental_states);
}));

(website_helpers.core._accrete_mental_states = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51068 = type__47861__auto__;
var G__51069 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
var fexpr__51067 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51067.cljs$core$IFn$_invoke$arity$2 ? fexpr__51067.cljs$core$IFn$_invoke$arity$2(G__51068,G__51069) : fexpr__51067.call(null,G__51068,G__51069));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null))], null),website_helpers.core._accrete_mental_states));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null),website_helpers.core.get_url_param_selections);
}));

(website_helpers.core.get_url_param_selections = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51071 = type__47861__auto__;
var G__51072 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
var fexpr__51070 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51070.cljs$core$IFn$_invoke$arity$2 ? fexpr__51070.cljs$core$IFn$_invoke$arity$2(G__51071,G__51072) : fexpr__51070.call(null,G__51071,G__51072));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null))], null),website_helpers.core.get_url_param_selections));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null),website_helpers.core.sync_url_params_BANG_);
}));

(website_helpers.core.sync_url_params_BANG_ = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51074 = type__47861__auto__;
var G__51075 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
var fexpr__51073 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51073.cljs$core$IFn$_invoke$arity$2 ? fexpr__51073.cljs$core$IFn$_invoke$arity$2(G__51074,G__51075) : fexpr__51073.call(null,G__51074,G__51075));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null))], null),website_helpers.core.sync_url_params_BANG_));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null),website_helpers.core.calc_similarity);
}));

(website_helpers.core.calc_similarity = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51077 = type__47861__auto__;
var G__51078 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
var fexpr__51076 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51076.cljs$core$IFn$_invoke$arity$2 ? fexpr__51076.cljs$core$IFn$_invoke$arity$2(G__51077,G__51078) : fexpr__51076.call(null,G__51077,G__51078));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),website_helpers.core.calc_similarity));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null),website_helpers.core.make_aggregated_items);
}));

(website_helpers.core.make_aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51080 = type__47861__auto__;
var G__51081 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
var fexpr__51079 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51079.cljs$core$IFn$_invoke$arity$2 ? fexpr__51079.cljs$core$IFn$_invoke$arity$2(G__51080,G__51081) : fexpr__51079.call(null,G__51080,G__51081));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.make_aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null),website_helpers.core.accrete_set);
}));

(website_helpers.core.accrete_set = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51083 = type__47861__auto__;
var G__51084 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
var fexpr__51082 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51082.cljs$core$IFn$_invoke$arity$2 ? fexpr__51082.cljs$core$IFn$_invoke$arity$2(G__51083,G__51084) : fexpr__51082.call(null,G__51083,G__51084));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),website_helpers.core.accrete_set));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null),website_helpers.core.get_closest_name);
}));

(website_helpers.core.get_closest_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51086 = type__47861__auto__;
var G__51087 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
var fexpr__51085 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51085.cljs$core$IFn$_invoke$arity$2 ? fexpr__51085.cljs$core$IFn$_invoke$arity$2(G__51086,G__51087) : fexpr__51085.call(null,G__51086,G__51087));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null))], null),website_helpers.core.get_closest_name));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null),website_helpers.core.dropdown_check_list);
}));

(website_helpers.core.dropdown_check_list = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51089 = type__47861__auto__;
var G__51090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
var fexpr__51088 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51088.cljs$core$IFn$_invoke$arity$2 ? fexpr__51088.cljs$core$IFn$_invoke$arity$2(G__51089,G__51090) : fexpr__51088.call(null,G__51089,G__51090));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.dropdown_check_list));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null),website_helpers.core.make_experience_map);
}));

(website_helpers.core.make_experience_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51092 = type__47861__auto__;
var G__51093 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
var fexpr__51091 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51091.cljs$core$IFn$_invoke$arity$2 ? fexpr__51091.cljs$core$IFn$_invoke$arity$2(G__51092,G__51093) : fexpr__51091.call(null,G__51092,G__51093));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_experience_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null),website_helpers.core.aggregated_items);
}));

(website_helpers.core.aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51095 = type__47861__auto__;
var G__51096 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
var fexpr__51094 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51094.cljs$core$IFn$_invoke$arity$2 ? fexpr__51094.cljs$core$IFn$_invoke$arity$2(G__51095,G__51096) : fexpr__51094.call(null,G__51095,G__51096));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null),website_helpers.core.list_to_hiccup);
}));

(website_helpers.core.list_to_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51098 = type__47861__auto__;
var G__51099 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
var fexpr__51097 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51097.cljs$core$IFn$_invoke$arity$2 ? fexpr__51097.cljs$core$IFn$_invoke$arity$2(G__51098,G__51099) : fexpr__51097.call(null,G__51098,G__51099));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.list_to_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null),website_helpers.core.prune_similarities);
}));

(website_helpers.core.prune_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51101 = type__47861__auto__;
var G__51102 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
var fexpr__51100 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51100.cljs$core$IFn$_invoke$arity$2 ? fexpr__51100.cljs$core$IFn$_invoke$arity$2(G__51101,G__51102) : fexpr__51100.call(null,G__51101,G__51102));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null))], null),website_helpers.core.prune_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null),website_helpers.core.get_selected_vars);
}));

(website_helpers.core.get_selected_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51104 = type__47861__auto__;
var G__51105 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
var fexpr__51103 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51103.cljs$core$IFn$_invoke$arity$2 ? fexpr__51103.cljs$core$IFn$_invoke$arity$2(G__51104,G__51105) : fexpr__51103.call(null,G__51104,G__51105));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null))], null),website_helpers.core.get_selected_vars));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null),website_helpers.core.get_all_similarities);
}));

(website_helpers.core.get_all_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51107 = type__47861__auto__;
var G__51108 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
var fexpr__51106 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51106.cljs$core$IFn$_invoke$arity$2 ? fexpr__51106.cljs$core$IFn$_invoke$arity$2(G__51107,G__51108) : fexpr__51106.call(null,G__51107,G__51108));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null))], null),website_helpers.core.get_all_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null),website_helpers.core.make_tag_hiccup);
}));

(website_helpers.core.make_tag_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51110 = type__47861__auto__;
var G__51111 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
var fexpr__51109 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51109.cljs$core$IFn$_invoke$arity$2 ? fexpr__51109.cljs$core$IFn$_invoke$arity$2(G__51110,G__51111) : fexpr__51109.call(null,G__51110,G__51111));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.make_tag_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null),website_helpers.core.make_mental_state_map);
}));

(website_helpers.core.make_mental_state_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51113 = type__47861__auto__;
var G__51114 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
var fexpr__51112 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51112.cljs$core$IFn$_invoke$arity$2 ? fexpr__51112.cljs$core$IFn$_invoke$arity$2(G__51113,G__51114) : fexpr__51112.call(null,G__51113,G__51114));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_mental_state_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
})()
], null));

return website_helpers.core.mount_root();
});
website_helpers.core.init_BANG_ = (function website_helpers$core$init_BANG_(){
cljs.core.filterv(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
}));

(website_helpers.core._accrete_mental_states = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
}));

(website_helpers.core.get_url_param_selections = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
}));

(website_helpers.core.sync_url_params_BANG_ = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
}));

(website_helpers.core.calc_similarity = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
}));

(website_helpers.core.make_aggregated_items = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
}));

(website_helpers.core.accrete_set = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
}));

(website_helpers.core.get_closest_name = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
}));

(website_helpers.core.dropdown_check_list = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
}));

(website_helpers.core.make_experience_map = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
}));

(website_helpers.core.aggregated_items = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
}));

(website_helpers.core.list_to_hiccup = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
}));

(website_helpers.core.prune_similarities = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
}));

(website_helpers.core.get_selected_vars = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
}));

(website_helpers.core.get_all_similarities = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
}));

(website_helpers.core.make_tag_hiccup = orig_fn__47886__auto__);

console.log("..unstrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(malli.instrument.cljs.instrumented_vars),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
if(cljs.core.truth_(temp__5753__auto__)){
var orig_fn__47886__auto__ = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47885__47887__auto__){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__47885__47887__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
}));

(website_helpers.core.make_mental_state_map = orig_fn__47886__auto__);

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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-selected-vars","get-selected-vars",-2100130819,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selections","selections",362921294,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"If no vars are selected, all are!",new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
})()
,(function (){
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"calc-similarity","calc-similarity",1641430634,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"info1","info1",525109113,null),new cljs.core.Symbol(null,"info2","info2",401851582,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Symbol(null,"Info","Info",-1276427045,null),new cljs.core.Symbol(null,"Info","Info",-1276427045,null)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"sync-url-params!","sync-url-params!",-167046012,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"get-url-param-selections","get-url-param-selections",-2051873021,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
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
malli.core._register_function_schema_BANG_.cljs$core$IFn$_invoke$arity$6(new cljs.core.Symbol(null,"website-helpers.core","website-helpers.core",337214263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dropdown-check-list","dropdown-check-list",-205445998,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"title","title",-2017930186,null)], null))),new cljs.core.Keyword("malli","schema","malli/schema",-1764044328),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.Symbol(null,"ReagentComponent","ReagentComponent",-830263325,null)], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null)], null),new cljs.core.Keyword(null,"cljs","cljs",1492417629),cljs.core.identity);

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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null),website_helpers.core._accrete_mental_states);
}));

(website_helpers.core._accrete_mental_states = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51116 = type__47861__auto__;
var G__51117 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));
var fexpr__51115 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51115.cljs$core$IFn$_invoke$arity$2 ? fexpr__51115.cljs$core$IFn$_invoke$arity$2(G__51116,G__51117) : fexpr__51115.call(null,G__51116,G__51117));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),website_helpers.core.Name,website_helpers.core.Info], null)], null),website_helpers.core.DataMap], null))], null),website_helpers.core._accrete_mental_states));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null));

return new cljs.core.Symbol("website-helpers.core","-accrete-mental-states","website-helpers.core/-accrete-mental-states",-1783855320,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null),website_helpers.core.get_url_param_selections);
}));

(website_helpers.core.get_url_param_selections = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51119 = type__47861__auto__;
var G__51120 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));
var fexpr__51118 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51118.cljs$core$IFn$_invoke$arity$2 ? fexpr__51118.cljs$core$IFn$_invoke$arity$2(G__51119,G__51120) : fexpr__51118.call(null,G__51119,G__51120));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null))], null),website_helpers.core.get_url_param_selections));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null));

return new cljs.core.Symbol("website-helpers.core","get-url-param-selections","website-helpers.core/get-url-param-selections",1421196009,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null),website_helpers.core.sync_url_params_BANG_);
}));

(website_helpers.core.sync_url_params_BANG_ = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51122 = type__47861__auto__;
var G__51123 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));
var fexpr__51121 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51121.cljs$core$IFn$_invoke$arity$2 ? fexpr__51121.cljs$core$IFn$_invoke$arity$2(G__51122,G__51123) : fexpr__51121.call(null,G__51122,G__51123));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.Keyword(null,"nil","nil",99600501)], null))], null),website_helpers.core.sync_url_params_BANG_));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null));

return new cljs.core.Symbol("website-helpers.core","sync-url-params!","website-helpers.core/sync-url-params!",420655586,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null),website_helpers.core.calc_similarity);
}));

(website_helpers.core.calc_similarity = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51125 = type__47861__auto__;
var G__51126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));
var fexpr__51124 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51124.cljs$core$IFn$_invoke$arity$2 ? fexpr__51124.cljs$core$IFn$_invoke$arity$2(G__51125,G__51126) : fexpr__51124.call(null,G__51125,G__51126));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Info,website_helpers.core.Info], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null))], null),website_helpers.core.calc_similarity));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null));

return new cljs.core.Symbol("website-helpers.core","calc-similarity","website-helpers.core/calc-similarity",-790638132,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null),website_helpers.core.make_aggregated_items);
}));

(website_helpers.core.make_aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51128 = type__47861__auto__;
var G__51129 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));
var fexpr__51127 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51127.cljs$core$IFn$_invoke$arity$2 ? fexpr__51127.cljs$core$IFn$_invoke$arity$2(G__51128,G__51129) : fexpr__51127.call(null,G__51128,G__51129));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.make_aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null));

return new cljs.core.Symbol("website-helpers.core","make-aggregated-items","website-helpers.core/make-aggregated-items",1206128873,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null),website_helpers.core.accrete_set);
}));

(website_helpers.core.accrete_set = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51131 = type__47861__auto__;
var G__51132 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));
var fexpr__51130 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51130.cljs$core$IFn$_invoke$arity$2 ? fexpr__51130.cljs$core$IFn$_invoke$arity$2(G__51131,G__51132) : fexpr__51130.call(null,G__51131,G__51132));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null))], null),website_helpers.core.accrete_set));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null));

return new cljs.core.Symbol("website-helpers.core","accrete-set","website-helpers.core/accrete-set",40521761,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null),website_helpers.core.get_closest_name);
}));

(website_helpers.core.get_closest_name = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51134 = type__47861__auto__;
var G__51135 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));
var fexpr__51133 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51133.cljs$core$IFn$_invoke$arity$2 ? fexpr__51133.cljs$core$IFn$_invoke$arity$2(G__51134,G__51135) : fexpr__51133.call(null,G__51134,G__51135));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Name], null))], null),website_helpers.core.get_closest_name));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null));

return new cljs.core.Symbol("website-helpers.core","get-closest-name","website-helpers.core/get-closest-name",891921207,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null),website_helpers.core.dropdown_check_list);
}));

(website_helpers.core.dropdown_check_list = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51137 = type__47861__auto__;
var G__51138 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));
var fexpr__51136 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51136.cljs$core$IFn$_invoke$arity$2 ? fexpr__51136.cljs$core$IFn$_invoke$arity$2(G__51137,G__51138) : fexpr__51136.call(null,G__51137,G__51138));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423)], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.dropdown_check_list));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null));

return new cljs.core.Symbol("website-helpers.core","dropdown-check-list","website-helpers.core/dropdown-check-list",1556642612,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null),website_helpers.core.make_experience_map);
}));

(website_helpers.core.make_experience_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51140 = type__47861__auto__;
var G__51141 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));
var fexpr__51139 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51139.cljs$core$IFn$_invoke$arity$2 ? fexpr__51139.cljs$core$IFn$_invoke$arity$2(G__51140,G__51141) : fexpr__51139.call(null,G__51140,G__51141));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_experience_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null));

return new cljs.core.Symbol("website-helpers.core","make-experience-map","website-helpers.core/make-experience-map",-578597902,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null),website_helpers.core.aggregated_items);
}));

(website_helpers.core.aggregated_items = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51143 = type__47861__auto__;
var G__51144 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));
var fexpr__51142 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51142.cljs$core$IFn$_invoke$arity$2 ? fexpr__51142.cljs$core$IFn$_invoke$arity$2(G__51143,G__51144) : fexpr__51142.call(null,G__51143,G__51144));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),website_helpers.core.DataMap], null),website_helpers.core.ReagentComponent], null))], null),website_helpers.core.aggregated_items));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null));

return new cljs.core.Symbol("website-helpers.core","aggregated-items","website-helpers.core/aggregated-items",1215761311,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null),website_helpers.core.list_to_hiccup);
}));

(website_helpers.core.list_to_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51146 = type__47861__auto__;
var G__51147 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));
var fexpr__51145 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51145.cljs$core$IFn$_invoke$arity$2 ? fexpr__51145.cljs$core$IFn$_invoke$arity$2(G__51146,G__51147) : fexpr__51145.call(null,G__51146,G__51147));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.list_to_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null));

return new cljs.core.Symbol("website-helpers.core","list-to-hiccup","website-helpers.core/list-to-hiccup",1891421995,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null),website_helpers.core.prune_similarities);
}));

(website_helpers.core.prune_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51149 = type__47861__auto__;
var G__51150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));
var fexpr__51148 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51148.cljs$core$IFn$_invoke$arity$2 ? fexpr__51148.cljs$core$IFn$_invoke$arity$2(G__51149,G__51150) : fexpr__51148.call(null,G__51149,G__51150));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Name,website_helpers.core.Similarities], null),website_helpers.core.Similarities], null))], null),website_helpers.core.prune_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null));

return new cljs.core.Symbol("website-helpers.core","prune-similarities","website-helpers.core/prune-similarities",-2005609769,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null),website_helpers.core.get_selected_vars);
}));

(website_helpers.core.get_selected_vars = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51152 = type__47861__auto__;
var G__51153 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));
var fexpr__51151 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51151.cljs$core$IFn$_invoke$arity$2 ? fexpr__51151.cljs$core$IFn$_invoke$arity$2(G__51152,G__51153) : fexpr__51151.call(null,G__51152,G__51153));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null))], null),website_helpers.core.get_selected_vars));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null));

return new cljs.core.Symbol("website-helpers.core","get-selected-vars","website-helpers.core/get-selected-vars",2110467411,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null),website_helpers.core.get_all_similarities);
}));

(website_helpers.core.get_all_similarities = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51155 = type__47861__auto__;
var G__51156 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));
var fexpr__51154 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51154.cljs$core$IFn$_invoke$arity$2 ? fexpr__51154.cljs$core$IFn$_invoke$arity$2(G__51155,G__51156) : fexpr__51154.call(null,G__51155,G__51156));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.DataMap], null),website_helpers.core.Similarities], null))], null),website_helpers.core.get_all_similarities));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null));

return new cljs.core.Symbol("website-helpers.core","get-all-similarities","website-helpers.core/get-all-similarities",1861441624,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null),website_helpers.core.make_tag_hiccup);
}));

(website_helpers.core.make_tag_hiccup = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51158 = type__47861__auto__;
var G__51159 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));
var fexpr__51157 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51157.cljs$core$IFn$_invoke$arity$2 ? fexpr__51157.cljs$core$IFn$_invoke$arity$2(G__51158,G__51159) : fexpr__51157.call(null,G__51158,G__51159));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),website_helpers.core.Tag], null)], null),website_helpers.core.Hiccup], null))], null),website_helpers.core.make_tag_hiccup));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null));

return new cljs.core.Symbol("website-helpers.core","make-tag-hiccup","website-helpers.core/make-tag-hiccup",-75722439,null);
})()
,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(malli.instrument.cljs.instrumented_vars,(function (p1__47863__47864__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47863__47864__auto__,new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null),website_helpers.core.make_mental_state_map);
}));

(website_helpers.core.make_mental_state_map = malli.core._instrument.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report","report",1394055010),(function (type__47861__auto__,data__47862__auto__){
var G__51161 = type__47861__auto__;
var G__51162 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data__47862__auto__,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));
var fexpr__51160 = malli.dev.pretty.reporter.cljs$core$IFn$_invoke$arity$0();
return (fexpr__51160.cljs$core$IFn$_invoke$arity$2 ? fexpr__51160.cljs$core$IFn$_invoke$arity$2(G__51161,G__51162) : fexpr__51160.call(null,G__51161,G__51162));
}),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.function_schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),website_helpers.core.Experiences], null),website_helpers.core.DataMap], null))], null),website_helpers.core.make_mental_state_map));

console.log("..instrumented",new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null));

return new cljs.core.Symbol("website-helpers.core","make-mental-state-map","website-helpers.core/make-mental-state-map",-1555684235,null);
})()
], null));

return website_helpers.core.mount_root();
});
goog.exportSymbol('website_helpers.core.init_BANG_', website_helpers.core.init_BANG_);

//# sourceMappingURL=website_helpers.core.js.map
