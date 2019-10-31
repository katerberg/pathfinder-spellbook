'use strict';

/* App Module */

var pathfinderApp = angular.module('pathfinderApp', [
  'ngRoute',
  'ui.bootstrap'
]);

pathfinderApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/pathfinder-spellbook', {
        templateUrl: 'partials/pathfinder-spellbook.html',
        controller: 'PathfinderSpellbookCtrl'
      }).
      otherwise({
        redirectTo: '/pathfinder-spellbook'
      });
  }]);
