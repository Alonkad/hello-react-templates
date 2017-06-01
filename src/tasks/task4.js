define(['react', 'lodash', './task4.rt'], function (React, _, template) {
    'use strict';

    var MyLinkedStateMixin = {
        linkState: function (pathToChange) {
            var self = this;

            function onChange(newVal) {
                _.set(self.state, pathToChange, newVal);  // Hack: I probably should have cloned state, make the update and then set it
                self.setState(self.state);
            }

            return {
                value: _.get(self.state, pathToChange),
                requestChange: onChange
            };
        }
    };

    return React.createClass({
        displayName: 'Task4',

        mixins: [MyLinkedStateMixin],  // React.addons.LinkedStateMixin is deprecated

        getInitialState: function () {
            return {
                location: {
                    lat: 0,
                    long: 0
                }
            };
        },

        render: template
    });
});
