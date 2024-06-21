var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function(firstName, lastName, height, age, occupation) {
    return 'Jane Doe';
}

var searchPeopleStr = searchPeople.toString();

console.log(searchPeopleStr);