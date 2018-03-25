module.exports = function(templateParams) {
    var _cssList = ['style'];
    var webAssetsHelp = require('./webAssetsHelp')(templateParams, _cssList);
    var _html = `{% extends 'layout.html' %} 
    		{% block title %}My Page{% endblock %} 
                         {% block head %}
                         <link rel="dns-prefetch" href="https://unpkg.com">
                         <link rel="dns-prefetch" href="http://cdn.bootcss.com">
                         <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
                         {% endblock %}
    		{% block styles %}${webAssetsHelp.styles}{% endblock %}
    		{% block content %}
		{% include '../widget/index.html' %} 
		{% endblock %}
		{% block scripts %}${webAssetsHelp.scripts}{% endblock %}`;
    return _html;
}