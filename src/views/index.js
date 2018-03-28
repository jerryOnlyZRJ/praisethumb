'use strict';

module.exports = function (templateParams) {
                     var _cssList = ['style'];
                     var webAssetsHelp = require('./webAssetsHelp')(templateParams, _cssList);
                     var _html = '{% extends \'layout.html\' %} \n    \t\t{% block title %}My Page{% endblock %} \n                         {% block head %}\n                         <meta http-equiv="x-dns-prefetch-control" content="on">\n                         <link rel="dns-prefetch" href="https://unpkg.com">\n                         <link rel="dns-prefetch" href="http://cdn.bootcss.com">\n                         <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">\n                         {% endblock %}\n    \t\t{% block styles %}' + webAssetsHelp.styles + '{% endblock %}\n    \t\t{% block content %}\n\t\t{% include \'../widget/index.html\' %} \n\t\t{% endblock %}\n\t\t{% block scripts %}<script src="https://unpkg.com/axios/dist/axios.min.js"></script>\n                         <script src="http://cdn.bootcss.com/jquery/3.1.1/jquery.js"></script>\n                         <script src="https://cdnjs.cloudflare.com/ajax/libs/x-tag/1.5.11/x-tag-core-with-shadowdom.min.js"></script>\n                         ' + webAssetsHelp.scripts + '{% endblock %}';
                     return _html;
};
