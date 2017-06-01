requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.13.1/lodash',
        react: '//fb.me/react-with-addons-0.14.3.min',
        reactDOM: '//cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

requirejs(['react', 'reactDOM', './hello'], function (React, reactDOM, hello) {
    'use strict';
    reactDOM.render(React.createElement(hello), document.getElementById('container'));
});
