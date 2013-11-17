describe('dataGrid.services', function () {
    describe('conditionalExecutor', function() {

        beforeEach(module('dataGrid.services'));

        it('calls the action when new data arrives', inject(function (conditionalExecutor) {
            var action  = sinon.spy(),
                data    = { },
                newData = { "some": "json object" };

            var process = conditionalExecutor.executeIfTheJSONDataHasChanged(action);

            process(data);
            process(newData);

            expect(action).toHaveBeenCalledTwice();
            expect(action).toHaveBeenCalledWith(data);
            expect(action).toHaveBeenCalledWith(newData);
        }));

        it('calls the action only when new data arrives', inject(function (conditionalExecutor) {
            var action  = sinon.spy(),
                data    = { };

            var process = conditionalExecutor.executeIfTheJSONDataHasChanged(action);

            process(data);
            process(data);
            process(data);

            expect(action).toHaveBeenCalledOnce();
            expect(action).toHaveBeenCalledWith(data);
        }));
    });
});