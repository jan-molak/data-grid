describe('dataGrid.services', function () {
    describe('stockTickerClerk', function() {

        var CSV_SAMPLE =
                'Ticker,Industry,Market Cap,Price,Change,Volume\n' +
                'ACIW,Technical & System Software,"1,837.89",£47.04,1.01%,"51,718.00"',

            EXPECTED_JSON_RESULT = [
                { 'ticker': 'ACIW', 'industry': 'Technical & System Software', 'market_cap': '1,837.89', 'price': '£47.04', 'change': '1.01%', 'volume': '51,718.00'}
            ];

        var httpBackend,
            clerk;


        beforeEach(module('dataGrid.services'));

        beforeEach(inject(function($injector) {
            httpBackend = $injector.get('$httpBackend');
            clerk       = $injector.get('stockTickerClerk');
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('fetches the data from his spreadsheet, translates it to JSON and passes it on', function () {
            var passTheDataOn = sinon.spy();

            givenFetchingTheSpreadsheet().succeedesWith(CSV_SAMPLE);

            clerk.getTheLatestUpdate().then(passTheDataOn);

            httpBackend.flush();

            expect(passTheDataOn).toHaveBeenCalled();
            expect(passTheDataOn).toHaveBeenCalledWith(EXPECTED_JSON_RESULT);
        });



        // teeny-tiny DSL to simplify setting up the httpBackend mock
        function givenFetchingTheSpreadsheet() {
            var url = 'https://docs.google.com/spreadsheet/pub?key=0AsGCguxC1yoSdHNKZm1lSW5CbGdwTUF1amdiSC01dXc&single=true&gid=0&output=csv';

            function respondsWith(httpStatus, data) {
                httpBackend.
                    whenGET(url).
                    respond(httpStatus, data);
            }

            return {
                succeedesWith: function(result) {
                    respondsWith(200, result);
                }
            };
        }
    });
});