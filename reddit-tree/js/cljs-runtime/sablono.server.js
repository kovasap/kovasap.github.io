goog.provide('sablono.server');
var module$node_modules$react_dom$server_browser=shadow.js.require("module$node_modules$react_dom$server_browser", {});
/**
 * Render `element` as HTML string.
 */
sablono.server.render = (function sablono$server$render(element){
if(cljs.core.truth_(element)){
return module$node_modules$react_dom$server_browser.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.server.render_static = (function sablono$server$render_static(element){
if(cljs.core.truth_(element)){
return module$node_modules$react_dom$server_browser.renderToStaticMarkup(element);
} else {
return null;
}
});

//# sourceMappingURL=sablono.server.js.map
