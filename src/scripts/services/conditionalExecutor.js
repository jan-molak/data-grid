angular.module('dataGrid.services').factory('conditionalExecutor', ['md5', function(md5) {

    var conditionalExecutor = this;
    conditionalExecutor.previousChecksum = undefined;

    return {
        /**
         * Calculates a checksum of a JSON data object provided and compares it with
         * the previously calculated checksum; If they differ - the action(data) gets executed.
         *
         * This pattern is similar to Ruby's "blocks" and helps to avoid executing an expensive
         * action (such as re-drawing the grid) if the data hasn't changed.
         *
         * @param action
         * @returns {Function}
         */
        executeIfTheJSONDataHasChanged: function(action) {
            return function(data) {

                var checksum = md5.createHash(JSON.stringify(data));

                if (checksum === conditionalExecutor.previousChecksum) {
                    return;
                }

                action(data);

                conditionalExecutor.previousChecksum = checksum;
            };
        }
    };
}]);