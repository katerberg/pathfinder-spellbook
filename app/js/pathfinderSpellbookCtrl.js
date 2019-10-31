(function() {
    'use strict';

    angular.module('pathfinderApp')
    .controller('PathfinderSpellbookCtrl', function($scope, pathfinderService, modalService) {
        pathfinderService.getSpellbook().then(function(data) {
            $scope.spellbook = data;
        });

        $scope.casterTypes = pathfinderService.casterTypes;
        $scope.$watch('search.level', function(item) {
            if (item === null) {
                $scope.search.level = undefined;
            }
        });

        function drillIntoSpell(spell) {
            modalService.open({
                templateUrl: modalService.spell.url,
                controller: modalService.spell.controller,
                resolve: {spell: function() {
                    return spell;
                }}
            });
        }

        $scope.drillIntoSpell = drillIntoSpell;
    });
})();
