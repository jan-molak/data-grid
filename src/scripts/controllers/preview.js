angular.module('dataGrid').controller('preview', [ 'stockTickerClerk', 'typograph', 'md5', '$scope', '$interval', '$log', '$templateCache', function (stockTickerClerk, typograph, md5, $scope, $interval, $log, $templateCache) {
    $interval(function() {

        stockTickerClerk.getTheLatestUpdate().then(ifTheDataHasChanged(function(newMarketData) {
            $log.info("New stock market data has arrived! Updating the Data Grid ...");
            updateTheGridWith(newMarketData);
        }));

    }, 500);


    $scope.marketData                = [];
    $scope.dataGridColumnDefinitions = [];
    $scope.gridOptions = {
        data:               'marketData',
        columnDefs:         'dataGridColumnDefinitions',
        headerRowHeight:    30,
        multiSelect:        false,
        enableColumnResize: true,
        headerRowTemplate:  $templateCache.get('grid/headerRowTemplate.html'),
        rowTemplate:        $templateCache.get('grid/rowTemplate.html'),
        cellTemplate:       $templateCache.get('grid/cellTemplate.html')
    };

    /**
     * Calculates a checksum of the new batch of Market Data;
     * If the checksum differs from a one calculated for the previous request,
     * "action(marketData)" gets executed.
     * This pattern is similar to Ruby's "blocks".
     *
     * @param action
     * @returns {executeAround}
     */
    function ifTheDataHasChanged(action) {
        function executeAround(marketData) {
            var checksum = md5.createHash(JSON.stringify(marketData));

            if (checksum === this.previousResultChecksum) {
                return;
            }

            action(marketData);
            this.previousResultChecksum = checksum;
        }
        executeAround.prototype.previousResultChecksum = undefined;

        return executeAround;
    }

    function updateTheGridWith(marketData) {
        var shareDetails      = marketData[0],
            columnDefinitions = [],
            columnIndex       = 0;

        angular.forEach(shareDetails, function(value, key){
            columnDefinitions.push({
                field: key,
                displayName: typograph.Start_Case(key),
                index: columnIndex,
                width: "*"
            });
            columnIndex++;
        });


        $scope.dataGridColumnDefinitions = columnDefinitions;
        $scope.marketData = marketData;

        if (! $scope.$$phase) {
            $scope.$apply();
        }
    }
}]);