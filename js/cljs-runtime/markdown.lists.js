goog.provide('markdown.lists');
markdown.lists.close_lists = (function markdown$lists$close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function markdown$lists$close_lists_$_iter__39187(s__39188){
return (new cljs.core.LazySeq(null,(function (){
var s__39188__$1 = s__39188;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__39188__$1);
if(temp__5823__auto__){
var s__39188__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39188__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39188__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39190 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39189 = (0);
while(true){
if((i__39189 < size__5522__auto__)){
var vec__39201 = cljs.core._nth(c__5521__auto__,i__39189);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39201,(0),null);
cljs.core.chunk_append(b__39190,["</li></",cljs.core.name(list_type),">"].join(''));

var G__39544 = (i__39189 + (1));
i__39189 = G__39544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39190),markdown$lists$close_lists_$_iter__39187(cljs.core.chunk_rest(s__39188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39190),null);
}
} else {
var vec__39213 = cljs.core.first(s__39188__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39213,(0),null);
return cljs.core.cons(["</li></",cljs.core.name(list_type),">"].join(''),markdown$lists$close_lists_$_iter__39187(cljs.core.rest(s__39188__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(lists);
})());
});
markdown.lists.add_row = (function markdown$lists$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__39217_SHARP_){
return (cljs.core.second(p1__39217_SHARP_) > num_indents);
}),cljs.core.reverse(new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.lists.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lists","lists",-884730684),(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.name(row_type),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</li><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.name(row_type),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.lists.ul = (function markdown$lists$ul(text,state){
var vec__39260 = cljs.core.last(new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39260,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39260,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(markdown.common._STAR_substring_STAR_.call(null,text,(num_indents + (1))));
return markdown.lists.add_row(new cljs.core.Keyword(null,"ul","ul",-1349521403),list_type,num_indents,indents,(function (){var or__5045__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.ol = (function markdown$lists$ol(text,state){
var vec__39421 = cljs.core.last(new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39421,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39421,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.lists.add_row(new cljs.core.Keyword(null,"ol","ol",932524051),list_type,num_indents,indents,(function (){var or__5045__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.li = (function markdown$lists$li(text,p__39474){
var map__39481 = p__39474;
var map__39481__$1 = cljs.core.__destructure_map(map__39481);
var state = map__39481__$1;
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
if(cljs.core.truth_((function (){var and__5043__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[markdown.lists.close_lists(cljs.core.reverse(lists)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = lists;
if(cljs.core.truth_(and__5043__auto__)){
return codeblock;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(eof);
if(and__5043__auto__){
var and__5043__auto____$1 = lists;
if(cljs.core.truth_(and__5043__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eof","eof",-489063237),false], 0))], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.lists.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.lists.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = (function (){var or__5045__auto__ = eof;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.lists.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"buf","buf",-213913340),text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});

//# sourceMappingURL=markdown.lists.js.map
