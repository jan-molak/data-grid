describe('dataGrid.services', function () {
    describe('csvConverter', function() {

        var CSV_SAMPLE =
                'Ticker,Industry,Market Cap,Price,Change,Volume\n' +
                'ACIW,Technical & System Software,"1,837.89",£47.04,1.01%,"51,718.00"\n' +
                'ACXM,Information Technology Services,"1,754.84",£23.95,0.55%,"114,570.00"',

            EXPECTED_JSON_RESULT = [
                { 'ticker': 'ACIW', 'industry': 'Technical & System Software', 'market_cap': '1,837.89', 'price': '£47.04', 'change': '1.01%', 'volume': '51,718.00'},
                { 'ticker': 'ACXM', 'industry': 'Information Technology Services', 'market_cap': '1,754.84', 'price': '£23.95', 'change': '0.55%', 'volume': '114,570.00'}
            ];

        beforeEach(module('dataGrid.services'));

        it('converts a single record CSV string to a valid JSON object', inject(function (csvConverter) {
            var json = csvConverter.jsonFrom('Market Cap\n"1,837.89"');

            expect(json[0]).toBeSameAs({ 'market_cap': '1,837.89' });
        }));

        it('converts more complex CSV to a JSON object', inject(function(csvConverter) {
            expect(csvConverter.jsonFrom(CSV_SAMPLE)).toBeSameAs(EXPECTED_JSON_RESULT);
        }));
    });
});