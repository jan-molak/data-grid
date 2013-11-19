(function(jasmine, beforeEach) {
    'use strict';

    beforeEach(function() {
        this.addMatchers({
            // verifies whether an angular.element has a given css class
            toHaveClass: function(expectedClass) {
                var negateIfNecessary = this.isNot ? ' not' : '';

                this.message = function() {
                    return [ "Expected element with following classes: " +
                        jasmine.pp(this.actual.attr('class')) + ", " +
                        negateIfNecessary + "to have " +
                        jasmine.pp(expectedClass) + ' class as well.' ];
                };

                return this.actual.hasClass(expectedClass);
            },

            // compares values of two JSON objects, rather than objects themselves
            toBeSameAs: function(expected) {
                return JSON.stringify(this.actual) === JSON.stringify(expected);
            },

            // checks whether a JSON object has a given property
            toHaveProperty: function(expectedProperty) {
                return this.actual.hasOwnProperty(expectedProperty);
            }
        });
    });

})(jasmine, beforeEach);