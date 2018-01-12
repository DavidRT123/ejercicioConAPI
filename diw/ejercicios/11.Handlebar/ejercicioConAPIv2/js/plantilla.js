(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['plantilla'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"container text-center\">\r\n	<div class=\"row\">\r\n		<div class=\"title col\">Name: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n		<div class=\"title col\">Height: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n	</div>\r\n\r\n	<div class=\"row\">\r\n		<div class=\"title col\">Mass: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.mass || (depth0 != null ? depth0.mass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mass","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n		<div class=\"title col\">Hair color: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.hair_color || (depth0 != null ? depth0.hair_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hair_color","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n	</div>\r\n\r\n	<div class=\"row\">\r\n		<div class=\"title col\">Skin color: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.skin_color || (depth0 != null ? depth0.skin_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skin_color","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n		<div class=\"title col\">Eye color: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.eye_color || (depth0 != null ? depth0.eye_color : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eye_color","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n	</div>\r\n\r\n	<div class=\"row\">\r\n		<div class=\"title col\">Birth year: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.birth_year || (depth0 != null ? depth0.birth_year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"birth_year","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n		<div class=\"title col\">Gender: <p class=\"valor\">"
    + alias4(((helper = (helper = helpers.gender || (depth0 != null ? depth0.gender : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"gender","hash":{},"data":data}) : helper)))
    + "</p></div>\r\n	</div>	\r\n</div>";
},"useData":true});
})();