angular.module('dataGrid').controller('preview',
        [ 'stockTickerClerk', 'typograph', 'dataGridExpert', 'conditionalExecutor', '$scope', '$interval', '$log',
function (stockTickerClerk, typograph, dataGridExpert, conditionalExecutor, $scope, $interval, $log) {
    'use strict';

    // syntactic sugar and helper functions
    var ifTheDataHasChanged  = conditionalExecutor.executeIfTheJSONDataHasChanged,
        columnDefinitionsFor = dataGridExpert.columnDefinitionsFor;


    // the actual core
    $interval(function() {

        stockTickerClerk.getTheLatestUpdate().then(ifTheDataHasChanged(function(newMarketData) {

            $log.info("New market data has arrived!");

            updateTheGridWith(newMarketData);
        }));

    }, 500);


    // ngGrid initialisation
    $scope.marketData                = [];
    $scope.dataGridColumnDefinitions = [];
    $scope.gridOptions = angular.extend(
        dataGridExpert.sensibleDefaults(),
        { data: 'marketData', columnDefs: 'dataGridColumnDefinitions' }
    );

    function updateTheGridWith(marketData) {
        $scope.dataGridColumnDefinitions = columnDefinitionsFor(marketData[0]);
        $scope.marketData = marketData;

        // triggers reload of the grid
        if (! $scope.$$phase) {
            $scope.$apply();
        }
    }
}]);