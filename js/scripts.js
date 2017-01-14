(function() {

    var app = angular.module("app", []);

    app.controller("RegisterController", ["$scope", function($scope) {

        $scope.register = function() {
            console.log($scope.user);
        }

    }]);

})();