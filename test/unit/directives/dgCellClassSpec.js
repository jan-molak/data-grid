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

    it('sets a "percentage" css class on any cell that contains a percentage value', function() {
        givenTheCellValueIs('12%');

        expect(span).toHaveClass('percentage');
    });

    describe('sets a "negative" css class on any cell that', function() {
        it('contains a negative percentage value', function() {
            givenTheCellValueIs('-1.01%');
            expect(span).toHaveClass('negative');
        });

        it('contains a negative amount of money (£)', function() {
            givenTheCellValueIs('-£12.00');
            expect(span).toHaveClass('negative');
        });

        it('contains a negative amount of money ($)', function() {
            givenTheCellValueIs('-$12.00');
            expect(span).toHaveClass('negative');
        });

        it('contains a negative number', function() {
            givenTheCellValueIs('-12,000.00');
            expect(span).toHaveClass('negative');
        });

        it('contains a negative integer', function() {
            givenTheCellValueIs(-5);
            expect(span).toHaveClass('negative');
        });
    });

    describe('recalculates the CSS classes of a cell when the value', function() {
        it('changes from a negative to a positive value', function() {
            givenTheCellValueIs('-12%');
            andThenTheCellValueIs('12%');

            expect(span).not.toHaveClass('negative');
        });

        it('changes from a percentage to anything other than percentage', function() {
            givenTheCellValueIs('-12%');
            andThenTheCellValueIs('other, non-percentage value');

            expect(span).not.toHaveClass('percentage');
            expect(span).not.toHaveClass('negative');
        });

    });

    it('sets the class of an element to "negative percentage", if the value is a negative percentage.', function() {
        givenTheCellValueIs('-12%');

        expect(span).toHaveClass('percentage');
        expect(span).toHaveClass('negative');
    });

    it('sets the class of an element to "negative percentage", ONLY if the value is a negative percentage.', function() {
        givenTheCellValueIs('12%');

        expect(span).not.toHaveClass('negative');
    });

    it('removes its classes from a cell that no longer contains either a number or a percentage', function() {
        givenTheCellValueIs('-12%');
        andThenTheCellValueIs(aDate());

        expect(span).not.toHaveClass('percentage');
        expect(span).not.toHaveClass('negative');
    });


    // syntactic sugar
    function andThenTheCellValueIs(value) {
        givenTheCellValueIs(value);
    }
    function givenTheCellValueIs(value) {
        scope.$apply(function() {
            scope.cellValue = value;
        });
    }

    function aDate() {
        return new Date();
    }
});