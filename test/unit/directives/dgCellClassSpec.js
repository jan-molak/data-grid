describe('dgCellClass', function() {
    var span,
        scope,
        cellTemplate = '<span dg-cell-class="{{ cellValue }}">{{ cellValue }}</span>';

    beforeEach(module('dataGrid.directives'));

    beforeEach(inject(function($rootScope, $compile) {
        span = angular.element(cellTemplate);

        // compile the element into a function and run the compiled view
        scope = $rootScope;
        $compile(span)(scope);
        scope.$digest();
    }));

    it('sets the class of an element to "percentage", if the value is a percentage.', function() {
        givenTheCellValueIs('12%');

        expect(span).toHaveClass('percentage');
    });

    it('sets the class of an element to "percentage decrease", if the value is a negative percentage.', function() {
        givenTheCellValueIs('-12%');

        expect(span).toHaveClass('percentage');
        expect(span).toHaveClass('decrease');
    });

    it('sets the class of an element to "percentage decrease", ONLY if the value is a negative percentage.', function() {
        givenTheCellValueIs('12%');

        expect(span).not.toHaveClass('decrease');
    });


    function givenTheCellValueIs(value) {
        scope.$apply(function() {
            scope.cellValue = value;
        });
    }
});