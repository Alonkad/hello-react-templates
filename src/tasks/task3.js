define(['react', 'lodash', './task3.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Task3',

        getInitialState: function () {
            var queryParams = this.getQueryParams(document.location.search);

            return {
                name: queryParams['name'] || 'add ?name=kaduri to URL'
            };
        },

        getQueryParams: function(qs) {
            qs = qs.split('+').join(' ');

            var params = {},
                tokens,
                re = /[?&]?([^=]+)=([^&]*)/g;

            while (tokens = re.exec(qs)) {
                params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
            }

            return params;
        },

        onChange: function (ev) {
            this.setState({
                name: ev.target.value
            });
        },

        render: template
    });
});
