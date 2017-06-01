define(['react', 'lodash', './task12.rt'], function (React, _, template) {
    'use strict';

    var PAGES_DATA = {
        normal: [
            {
                title: 'My folder',
                subpages: [
                    { title: 'My Page 1' },
                    { title: 'My Page 2' },
                    {
                        title: 'My folder 2',
                        subpages: [
                            { title: 'My Page 3' }
                        ]
                    }
                ]
            },
            {
                title: 'My folder 3',
                subpages: [
                    { title: 'My Page 4' },
                    { title: 'My Page 5' }
                ]
            }
        ],
        blog: [
            { title: 'My blog page 1' },
            { title: 'My blog page 2' }
        ]
    };

    return React.createClass({
        displayName: 'Task12',

        getInitialState: function () {
            return {
                sections: PAGES_DATA
            }
        },

        render: template
    });
});
