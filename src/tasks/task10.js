define(['react', 'lodash', './task10.rt'], function (React, _, template) {
    'use strict';

    return React.createClass({
        displayName: 'Task10',

        getInitialState: function () {
            return {
                textStyles: {
                    'size': false,
                    'color': false
                }
            }
        },

        changeTextColor: function (ev) {
            this.setState(_.merge(this.state, {
                textStyles: {
                    color: !this.state.textStyles.color
                }
            }));
        },

        changeTextSize: function (ev) {
            this.setState(_.merge(this.state, {
                textStyles: {
                    size: !this.state.textStyles.size
                }
            }));
        },

        render: template
    });
});
