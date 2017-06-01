define(['react', 'lodash', './task11.rt'], function (React, _, template) {
    'use strict';

    var FOAAS_mixin = {
        baseUrl: 'http://foaas.com/[type]/[name]/[from]',

        TYPES: [
            'off',
            'you',
            'this',
            'that',
            'everything',
            'everyone',
            'donut',
            'shakespeare',
            'linus',
            'king',
            'chainsaw',
            'outside',
            'madison',
            'nugget',
            'yoda',
            'bus',
            'xmas',
            'bday',
            'shutup',
            'bm',
            'gfy',
            'back',
            'think',
            'keep',
            'look'
        ],

        getResponse: function (data, callback) {
            var url = this.baseUrl
                .replace('[type]', data.type)
                .replace('[from]', data.from);

            if(_.isString(data.name)) {
                url = url.replace('[name]', data.name)
            }
            else {
                url = url.replace('[name]/', '')
            }

            this._doAjaxRequest(url, callback);
        },

        _doAjaxRequest: function (url, callback) {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(JSON.parse(xhr.responseText));
                }
            };

            xhr.open('GET', url);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send(null);
        }
    };

    return React.createClass({
        displayName: 'Task11',

        mixins: [FOAAS_mixin, React.addons.LinkedStateMixin],

        getInitialState: function () {
            return {
                type: '',
                from: '',
                name: '',
                response: {
                    message: '',
                    subtitle: ''
                },
                isLoading: false
            };
        },

        onResponse: function (response) {
            // Fake delay
            setTimeout(function () {

                this.setState(_.merge(this.state, {
                    response: response,
                    isLoading: false
                }));

            }.bind(this), 1000);
        },

        onSubmit: function (ev) {
            var data = {
                type: this.state.type,
                from: this.state.from,
                name: this.state.name || null
            };

            this.getResponse(data, this.onResponse);

            this.setState(_.merge(this.state, {
                response: {
                    message: '',
                    subtitle: ''
                },
                isLoading: true
            }));

            ev.preventDefault();
            return false;
        },

        render: template
    });
});
