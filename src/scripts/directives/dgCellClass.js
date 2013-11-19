angular.module('dataGrid.directives').

// dg-cell-class="{ cell_value }"
directive('dgCellClass', function() {
    var dgConditionalClass = {
        restrict: 'A',
        link: function(scope, element, attr) {

            attr.$observe('dgCellClass', function(value) {
                element.toggleClass('percentage', isPercentage(value));
                element.toggleClass('negative',   isNegative(value));
            });

            function isPercentage(value) {
                return (typeof value) === 'string' &&
                    value.slice(-1) === "%";
            }

            function isNegative(value) {
                // any value that gets here is a string and that's ensured by Angular
                return !! value.match(/^[-][£$]?[\d,.]+%?$/);
            }
        }
    };
    return dgConditionalClass;
});