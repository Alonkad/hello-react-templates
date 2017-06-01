define(['react', 'lodash', './task2.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Task2',

        getInitialState: function () {
            return {
                name: 'kaduri'
            };
        },

        onChange: function (ev) {
            this.setState({
                name: ev.target.value
            });
        },

        render: template
    });
});
