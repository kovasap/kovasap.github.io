goog.provide('hickory.core');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

var hickory$core$HiccupRepresentable$as_hiccup$dyn_39150 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hickory.core.as_hiccup["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
});
/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
return hickory$core$HiccupRepresentable$as_hiccup$dyn_39150(this$);
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

var hickory$core$HickoryRepresentable$as_hickory$dyn_39153 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hickory.core.as_hickory[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hickory.core.as_hickory["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
});
/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
return hickory$core$HickoryRepresentable$as_hickory$dyn_39153(this$);
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"_NODE"].join('')]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
(t.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

return (t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
}));
});
hickory.core.extend_type_with_seqable(NodeList);
if((typeof NamedNodeMap !== 'undefined')){
hickory.core.extend_type_with_seqable(NamedNodeMap);
} else {
}
if((typeof MozNamedAttrMap !== 'undefined')){
hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if((!(cljs.core.empty_QMARK_(publicId)))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return ["<!DOCTYPE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),">"].join('');
}
});
(hickory.core.HiccupRepresentable["object"] = true);

(hickory.core.as_hiccup["object"] = (function (this$){
var pred__39076 = cljs.core._EQ_;
var expr__39077 = (this$["nodeType"]);
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__39077) : pred__39076.call(null,hickory.core.Attribute,expr__39077)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__39077) : pred__39076.call(null,hickory.core.Comment,expr__39077)))){
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"])),"-->"].join('');
} else {
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__39077) : pred__39076.call(null,hickory.core.Document,expr__39077)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__39077) : pred__39076.call(null,hickory.core.DocumentType,expr__39077)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__39077) : pred__39076.call(null,hickory.core.Element,expr__39077)))){
var tag = hickory.utils.lower_case_keyword((this$["tagName"]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39075_SHARP_){
return (p1__39075_SHARP_["wholeText"]);
}),(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_((pred__39076.cljs$core$IFn$_invoke$arity$2 ? pred__39076.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__39077) : pred__39076.call(null,hickory.core.Text,expr__39077)))){
return hickory.utils.html_escape((this$["wholeText"]));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39077)].join('')));
}
}
}
}
}
}
}));
(hickory.core.HickoryRepresentable["object"] = true);

(hickory.core.as_hickory["object"] = (function (this$){
var pred__39093 = cljs.core._EQ_;
var expr__39094 = (this$["nodeType"]);
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__39094) : pred__39093.call(null,hickory.core.Attribute,expr__39094)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__39094) : pred__39093.call(null,hickory.core.Comment,expr__39094)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__39094) : pred__39093.call(null,hickory.core.Document,expr__39094)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__39094) : pred__39093.call(null,hickory.core.DocumentType,expr__39094)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"document-type","document-type",-1309437776),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),(this$["name"]),new cljs.core.Keyword(null,"publicid","publicid",1557995850),(this$["publicId"]),new cljs.core.Keyword(null,"systemid","systemid",-2052878192),(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__39094) : pred__39093.call(null,hickory.core.Element,expr__39094)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),new cljs.core.Keyword(null,"tag","tag",-1290361223),hickory.utils.lower_case_keyword((this$["tagName"])),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__39093.cljs$core$IFn$_invoke$arity$2 ? pred__39093.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__39094) : pred__39093.call(null,hickory.core.Text,expr__39094)))){
return (this$["wholeText"]);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39094)].join('')));
}
}
}
}
}
}
}));
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__5823__auto__ = cljs.core.second((function (){var or__5045__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__5823__auto__)){
var doctype = temp__5823__auto__;
return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if((typeof DOMParser !== 'undefined')){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype(s))){
} else {
hickory.core.remove_el(doctype_el);
}

var temp__5823__auto___39160 = cljs.core.first((doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__5823__auto___39160)){
var title_el_39161 = temp__5823__auto___39160;
if(cljs.core.empty_QMARK_((title_el_39161["text"]))){
hickory.core.remove_el(title_el_39161);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hiccup)
 * ```
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hickory)
 * ```
 * 
 * 
 *   
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__5045__auto__ = hickory.core.parse_dom_with_domparser(s);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hickory.core.parse_dom_with_write(s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse(s)["body"]["childNodes"]);
});

//# sourceMappingURL=hickory.core.js.map
