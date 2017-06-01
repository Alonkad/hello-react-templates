define(['react', 'lodash', './task5.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Task5',

        getInitialState: function () {
            return {
                fields: []
            };
        },

        onAddField: function (ev) {
            this.state.fields.push(true);
            this.setState(this.state);

            ev.preventDefault();
            return false;
        },

        render: template
    });
});
