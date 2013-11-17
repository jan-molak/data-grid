angular.module('dataGrid.services').factory('stockTickerClerk', ['spreadsheet', 'csvConverter', 'typograph', function(spreadsheet, csvConverter, typograph) {

    function read(spreadsheet) {
        return spreadsheet.fetch();
    }

    function translateToJSON() {
        return function(market) {
            return csvConverter.jsonFrom(market.data);
        };
    }

    return {
        // The Stock Ticker clerk reads the Stock Ticker Tape (in a form of a spreadsheet)
        // and translates what's written there to a format understood by other parties.
        // For the mental model see: http://en.wikipedia.org/wiki/Ticker_tape
        getTheLatestUpdate: function() {
            //todo: should complain when errors happen
            return read(spreadsheet).then(translateToJSON());
        }
    };
}]);