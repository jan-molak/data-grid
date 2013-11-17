describe('dataGrid.services', function () {
    describe('typograph', function() {

        beforeEach(module('dataGrid.services'));

        describe('snake_case', function() {
            it('converts "Start Case" to snake_case', inject(function (typograph) {
                expect(typograph.snake_case('Market Cap')).toBe('market_cap');
            }));

            it('replaces multiple spaces with single underscore', inject(function (typograph) {
                expect(typograph.snake_case('  Market    Cap   ')).toBe('market_cap');
            }));

            it('removes any special characters', inject(function (typograph) {
                expect(typograph.snake_case('($$$)(£££) The Price !!! ;)')).toBe('the_price');
            }));
        });

        describe('Start Case', function() {
            it('converts "a regular string" to "Start Case"', inject(function (typograph) {
                expect(typograph.Start_Case('a regular string')).toBe('A Regular String');
            }));

            it('replaces multiple spaces with a single one', inject(function (typograph) {
                expect(typograph.Start_Case('  market   cap ')).toBe('Market Cap');
            }));
        });
    });
});