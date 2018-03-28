module.exports = function(templateParams) {
    var _cssList = ['style'];
    var webAssetsHelp = require('./webAssetsHelp')(templateParams, _cssList);
    var _html = `{% extends 'layout.html' %} 
    		{% block title %}My Page{% endblock %} 
                         {% block head %}
                         <meta http-equiv="x-dns-prefetch-control" content="on">
                         <link rel="dns-prefetch" href="https://unpkg.com">
                         <link rel="dns-prefetch" href="http://cdn.bootcss.com">
                         <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
                         {% endblock %}
    		{% block styles %}${webAssetsHelp.styles}{% endblock %}
    		{% block content %}
		{% include '../widget/star.html' %} 
		{% endblock %}
		{% block scripts %}<script src="https://unpkg.com/axios/dist/axios.min.js"></script><script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/x-tag/1.5.11/x-tag-core-with-shadowdom.min.js"></script>${webAssetsHelp.scripts}{% endblock %}`;
    return _html;
}