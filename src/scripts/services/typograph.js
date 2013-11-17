/**
 * A simple letter case conversion utility service
 * http://en.wikipedia.org/wiki/Letter_case
 */
angular.module('dataGrid.services').service('typograph', function() {
    this.snake_case = function(string) {
        return string.
            replace(/[^\w\s]/g, "").
            trim().
            toLowerCase().
            replace(/\s+/g, "_");
    };

    this.Start_Case = function(string) {
        return string.
            replace(/[_\s]+/g, " ").
            trim().
            replace(/[^\s]+/g, function(s){
                return s.substr(0,1).toUpperCase() + s.substr(1).toLowerCase();
            });
    };
});