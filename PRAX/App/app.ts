/// <reference path="typescript/person.ts" />
/// <reference path="angular/angular.d.ts" />

var PRAX = angular.module("PRAX", []);

PRAX.controller("peopleController", function ($scope) {
    $scope.people = [];
    $scope.people.push(new Person("tom"));
    $scope.people.push(new Person("george"));
});

PRAX.directive("personDetail", function () {
    return {
        restrict: "A",
        templateUrl: "templates/persondetail.html"
    };
});

PRAX.controller("personDetailController", function ($scope) {
    $scope.expanded = false;
});