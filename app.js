angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {templateUrl: "/list.html"})
            .when("/new", {templateUrl: "/edit.html", controller: NewCtrl})
            .when("/edit/:id", {templateUrl: "/edit.html", controller: EditCtrl})
            .otherwise("/");
    })
    .controller('AppCtrl', AppCtrl);

    function AppCtrl($scope) {
        $scope.crew = [
            {name: "Ahmad", description: "BackEnd"},
            {name: "Sven", description: "Customization"},
            {name: "Caro", description: "Human Resources"}
        ]
    }

    function NewCtrl($scope, $location) {
        $scope.person = {name:"", description:""};
        $scope.save = function () {
            $scope.crew.push($scope.person);
            $location.path("/");
        }
    }

    function EditCtrl($scope, $location, $routeParams) {
        $scope.person = $scope.crew[$routeParams.id];
        $scope.save = function () {
        $location.path("/");
        }
    }