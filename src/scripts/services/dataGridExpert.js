/**
 *
 */
angular.module('dataGrid.services').factory('dataGridExpert', ['typograph', '$templateCache', function(typograph, $templateCache) {
    return {
        sensibleDefaults: function() {
            return {
                headerRowHeight:    30,
                multiSelect:        false,
                enableColumnResize: true,
                headerRowTemplate:  $templateCache.get('grid/headerRowTemplate.html'),
                rowTemplate:        $templateCache.get('grid/rowTemplate.html')
            };
        },

        columnDefinitionsFor: function(jsonObject) {
            var columnDefinitions = [],
                columnIndex       = 0;

            angular.forEach(jsonObject, function(value, key) {
                columnDefinitions.push({
                    field: key,
                    displayName: typograph.Start_Case(key),
                    index: columnIndex,
                    width: "*",
                    cellTemplate: $templateCache.get('grid/cellTemplate.html')
                });
                columnIndex++;
            });

            return columnDefinitions;
        }
    };
}]);