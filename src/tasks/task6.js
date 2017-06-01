define(['react', 'lodash', './task6.rt'], function (React, _, template) {
    'use strict';

    var COUNTRIES = [
            'Israel',
            'Lebanon'
        ],
        CITIES = {
            'Israel': [
                'Herzliya',
                'Jerusalem',
                'Tel-Aviv'
            ],
            'Lebanon': [
                'Beirut',
                'Sidon',
                'Tripoli'
            ]
        };

    return React.createClass({
        displayName: 'Task6',

        getInitialState: function () {
            return {
                country: '',
                city: ''
            }
        },

        componentWillMount: function () {
            this.COUNTRIES = COUNTRIES;
            this.CITIES = CITIES;
        },

        onCountryChange: function (ev) {
            var newCountry = ev.target.value;

            this.setState({
                country: newCountry,
                city: ''
            })
        },

        onCityChange: function (ev) {
            var newCity = ev.target.value;

            this.setState({
                city: newCity
            })
        },

        render: template
    });
});
