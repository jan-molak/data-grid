angular.module('dataGrid.directives').

// dg-cell-class="{ cell_value }"
directive('dgCellClass', function() {
    var dgConditionalClass = {
        restrict: 'A',
        link: function(scope, element, attr) {

            attr.$observe('dgCellClass', function(value) {
                if (isPercentage(value)) {
                    element.addClass('percentage');
                    element.toggleClass('decrease', isNegative(value));
                }
            });

            function isPercentage(value) {
                return (typeof value) === 'string' &&
                    value.slice(-1) === "%";
            }

            function isNegative(value) {
                return value[0] === '-';
            }
        }
    };
    return dgConditionalClass;
});