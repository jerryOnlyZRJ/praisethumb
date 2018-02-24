'use strict';

module.exports = function (templateParams) {
    var _cssList = ['style']; //需要引入的CSS模块
    var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
    var _html = '{% extends \'layout.html\' %} \n    \t\t{% block title %}My Page{% endblock %} {% block head %} {% parent %} {% endblock %}\n    \t\t{% block styles %}' + webAssetsHelp.styles + '{% endblock %}\n    \t\t{% block content %}\n\t\t{% include \'../widget/index.html\' %} \n\t\t{% endblock %}\n\t\t{% block scripts %}' + webAssetsHelp.scripts + '{% endblock %}';
    return _html;
};
