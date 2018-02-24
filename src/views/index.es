module.exports = function(templateParams) {
    var _cssList = ['vendor'];
    var webAssetsHelp = require('./webAssetsHelp')(templateParams, _cssList);
    var _html = `{% extends 'layout.html' %} 
    		{% block title %}My Page{% endblock %} {% block head %} {% parent %} {% endblock %}
    		{% block styles %}${webAssetsHelp.styles}{% endblock %}
    		{% block content %}
		{% include '../widget/index.html' %} 
		{% endblock %}
		{% block scripts %}${webAssetsHelp.scripts}{% endblock %}`;
    return _html;
}