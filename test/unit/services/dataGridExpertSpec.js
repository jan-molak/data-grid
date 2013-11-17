describe('dataGrid.services', function () {
    describe('dataGridExpert', function() {

        beforeEach(function(){
            this.addMatchers({
                toHave: function(expectedProperty) {
                    return this.actual.hasOwnProperty(expectedProperty);
                }
            });
        });

        beforeEach(module('dataGrid.services'));

        it("determines column definitions for the grid", inject(function (dataGridExpert) {
            var user = { id: 1, name: 'Jan' },

                expectedColumnDefinition = [
                    { field : 'id',   displayName : 'Id',   index : 0, width : '*' },
                    { field : 'name', displayName : 'Name', index : 1, width : '*' }
                ];

            expect(dataGridExpert.columnDefinitionsFor(user)).toEqual(expectedColumnDefinition);
        }));

        it('provides base configuration for the grid', inject(function (dataGridExpert) {
            var expectedConfigurationKeys = [
                'headerRowHeight',
                'multiSelect',
                'enableColumnResize',
                'headerRowTemplate',
                'rowTemplate',
                'cellTemplate'
            ];

            forEach(expectedConfigurationKeys, function(key) {
                expect(dataGridExpert.sensibleDefaults()).toHave(key);
            });
        }));


        // syntactic sugar
        function forEach(elements, action) {
            for (var i=0; i<elements.length; i++) {
                action(elements[i]);
            }
        }
    });
});