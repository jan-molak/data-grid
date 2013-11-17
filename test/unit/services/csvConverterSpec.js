describe('dataGrid.services', function () {
    describe('csvConverter', function() {

        var SIMPLE_CSV =
                'Ticker,Industry,Market Cap,Price,Change,Volume\n' +
                'ACIW,Technical & System Software,"1,837.89",£47.04,1.01%,"51,718.00"\n' +
                'ACXM,Information Technology Services,"1,754.84",£23.95,0.55%,"114,570.00"',

            EXPECTED_JSON_RESULT = [
                { 'Ticker': 'ACIW', 'Industry': 'Technical & System Software', 'Market Cap': '1,837.89', 'Price': '£47.04', 'Change': '1.01%', 'Volume': '51,718.00'},
                { 'Ticker': 'ACXM', 'Industry': 'Information Technology Services', 'Market Cap': '1,754.84', 'Price': '£23.95', 'Change': '0.55%', 'Volume': '114,570.00'}
            ];

        // custom Jasmine matcher to compare values of two JSON objects
        beforeEach(function(){
            this.addMatchers({
                toBeSameAs: function(expected) {
                    return JSON.stringify(this.actual) === JSON.stringify(expected);
                }
            });
        });

        beforeEach(module('dataGrid.services'));

        it('should convert a simple CSV string to a JSON object', inject(function (csvConverter) {
            var json = csvConverter.jsonFrom('Market Cap\n"1,837.89"');

            expect(json[0]).toBeSameAs({ 'Market Cap': '1,837.89' });
        }));

        it('should convert CSV column headers to valid JSON keys when requested', inject(function (csvConverter) {
            function snake_case(key) { return key.toLowerCase().replace(" ", "_"); }

            var json = csvConverter.jsonFrom('Market Cap\n"1,837.89"', snake_case);

            expect(json[0]).toBeSameAs({ 'market_cap': '1,837.89' });
        }));

        it('should convert more complex CSV to a JSON object', inject(function(csvConverter) {
            expect(csvConverter.jsonFrom(SIMPLE_CSV)).toBeSameAs(EXPECTED_JSON_RESULT);
        }));
    });
});