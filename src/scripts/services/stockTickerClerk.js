angular.module('dataGrid.services').factory('stockTickerClerk', ['spreadsheet', 'csvConverter', function(spreadsheet, csvConverter) {

    function read(spreadsheet) {
        return spreadsheet.fetch();
    }

    function translateToJSON() {
        return function(market) {
            return csvConverter.jsonFrom(market.data);
        };
    }

    return {
        // The Stock Ticker Clerk reads the Stock Ticker Tape (in a form of a spreadsheet)
        // and translates what's written there to a format understood by other parties.
        // For the mental model see: http://en.wikipedia.org/wiki/Ticker_tape
        getTheLatestUpdate: function() {
            //todo: in a "real world" application Clerk should complain when errors happen,
            // ie. when they can't find their spreadsheet a message should be broadcasted
            return read(spreadsheet).then(translateToJSON());
        }
    };
}]);