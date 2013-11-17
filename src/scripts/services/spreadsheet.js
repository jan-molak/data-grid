angular.module('dataGrid.services').service('spreadsheet', ['$http', function($http) {
    var url = 'https://docs.google.com/spreadsheet/pub?key=0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc&single=true&gid=0&output=csv';

    this.fetch = function() {
        return $http({method: 'GET', url: url});
    };
}]);