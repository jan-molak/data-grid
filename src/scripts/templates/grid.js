angular.module("dataGrid.templates", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("grid/headerRowTemplate.html",
        "<div ng-style=\"{ height: col.headerRowHeight }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngHeaderCell {{ (col.showSortButtonDown() || col.showSortButtonUp()) && 'selected' }}\">" +
        "  <div ng-header-cell></div>" +
        "</div>"
    );

    $templateCache.put("grid/rowTemplate.html",
        "<div ng-style=\"{ 'cursor': row.cursor }\" ng-repeat=\"col in renderedColumns\" ng-class=\"col.colIndex()\" class=\"ngCell {{col.cellClass}}\">" +
        "  <div ng-cell></div>" +
        "</div>"
    );

    $templateCache.put("grid/cellTemplate.html",
        "<div class=\"ngCellText\" ng-class=\"col.colIndex()\"><span ng-cell-text>{{COL_FIELD CUSTOM_FILTERS}}</span></div>"
    );
}]);