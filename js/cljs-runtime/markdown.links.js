goog.provide('markdown.links');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__26567 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26567,(1),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<a href='"),link__$1,cljs.core.seq("'"),(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str," title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title)),">")):cljs.core.seq(">")),text,cljs.core.seq("</a>"),state], 0));
});
markdown.links.img = (function markdown$links$img(var_args){
var args__5775__auto__ = [];
var len__5769__auto___26835 = arguments.length;
var i__5770__auto___26836 = (0);
while(true){
if((i__5770__auto___26836 < len__5769__auto___26835)){
args__5775__auto__.push((arguments[i__5770__auto___26836]));

var G__26837 = (i__5770__auto___26836 + (1));
i__5770__auto___26836 = G__26837;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__26620){
var vec__26621 = p__26620;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621,(0),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
}));

(markdown.links.img.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(markdown.links.img.cljs$lang$applyTo = (function (seq26612){
var G__26613 = cljs.core.first(seq26612);
var seq26612__$1 = cljs.core.next(seq26612);
var G__26614 = cljs.core.first(seq26612__$1);
var seq26612__$2 = cljs.core.next(seq26612__$1);
var G__26615 = cljs.core.first(seq26612__$2);
var seq26612__$3 = cljs.core.next(seq26612__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26613,G__26614,G__26615,seq26612__$3);
}));

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__26642 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26642,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26642,(1),null);
var vec__26645 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26645,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26645,(1),null);
var vec__26648 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648,(1),null);
var vec__26651 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26651,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26658_SHARP_,p2__26657_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__26657_SHARP_,p1__26658_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__26674){
var map__26675 = p__26674;
var map__26675__$1 = cljs.core.__destructure_map(map__26675);
var state = map__26675__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26675__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26675__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__5045__auto__ = code;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__26725 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26725,(1),null);
var vec__26728 = markdown.links.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(1),null);
var vec__26731 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(1),null);
var vec__26734 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(1),null);
var vec__26737 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26737,(1),null);
if((((cljs.core.count(link__$1) < (2))) || ((((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1))))))){
var G__26844 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markdown.links.process_link_title(title,state),dud,link__$1], 0));
var G__26845 = tail;
var G__26846 = loop_state__$1;
out = G__26844;
tokens = G__26845;
loop_state = G__26846;
continue;
} else {
if(((cljs.core.not(img_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!")))){
var vec__26758 = markdown.links.href(cljs.core.rest(markdown.links.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26758,(1),null);
var G__26847 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link_text], 0));
var G__26848 = cljs.core.rest(tail);
var G__26849 = new_loop_state;
out = G__26847;
tokens = G__26848;
loop_state = G__26849;
continue;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = img_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!");
} else {
return and__5043__auto__;
}
})())){
var alt = cljs.core.rest(title);
var vec__26761 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26761,(1),null);
var title__$2 = markdown.links.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__26764 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26764,(1),null);
var G__26855 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.butlast(head),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([img_text], 0));
var G__26856 = cljs.core.rest(tail);
var G__26857 = new_loop_state;
out = G__26855;
tokens = G__26856;
loop_state = G__26857;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link(false);
markdown.links.image = markdown.links.make_link(true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__5804__auto__ = markdown.links.reference(trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__26787 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26787,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26787,(1),null);
var vec__26790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26790,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26790,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",(cljs.core.truth_(alt)?[" title='",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1))),"'"].join(''):null),">",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1)),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26795,link){
var vec__26796 = p__26795;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796,(0),null);
var encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26796,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encoded,markdown.common.gen_token(i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26800){
var vec__26801 = p__26800;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26801,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link(references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq(/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links(links,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__26809){
var vec__26810 = p__26809;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26810,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26810,(1),null);
return clojure.string.replace(s,link,id);
}),text,encoded_links),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),cljs.core.merge,markdown.links.parse_links(references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__26816){
var map__26817 = p__26816;
var map__26817__$1 = cljs.core.__destructure_map(map__26817);
var state = map__26817__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26817__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26817__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26817__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__5045__auto__ = (references == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links(references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace(text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__5804__auto__ = markdown.links.footnote(trimmed);
if(cljs.core.truth_(temp__5804__auto__)){
var link = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",link,"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__26818){
while(true){
var map__26819 = p__26818;
var map__26819__$1 = cljs.core.__destructure_map(map__26819);
var state = map__26819__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26819__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__26864 = next_text;
var G__26865 = next_state;
text = G__26864;
p__26818 = G__26865;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__26820){
var map__26821 = p__26820;
var map__26821__$1 = cljs.core.__destructure_map(map__26821);
var state = map__26821__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26821__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26821__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26821__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__5045__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = code;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__26822 = markdown.links.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26822,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26822,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = (cljs.core.truth_(title)?["\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title),""].join(''):"\"");
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),title_text," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__26826){
var map__26828 = p__26826;
var map__26828__$1 = cljs.core.__destructure_map(map__26828);
var state = map__26828__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26828__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(((cljs.core.not(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(references)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq(ms)){
var vec__26832 = cljs.core.first(ms);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26832,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26832,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26832,(2),null);
var refval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,ref);
var im = markdown.links.make_image_reference(cljs.core.first(refval),alt,cljs.core.second(refval));
var G__26869 = cljs.core.rest(ms);
var G__26870 = clojure.string.replace(new_text,m,im);
ms = G__26869;
new_text = G__26870;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});

//# sourceMappingURL=markdown.links.js.map
