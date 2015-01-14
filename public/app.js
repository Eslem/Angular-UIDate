var app = angular.module("app", ['ui.date']);
angular.module('ui.date')

.constant('uiDateConfig', {
    dateFormat: "dd/mm/yy",
    firstDay: 1
})
app.controller('MainController', function ($scope) {
    /*
    $scope.dateOptions = {
        dateFormat: "dd/mm/yy",
        firstDay: 1
    };*/
});