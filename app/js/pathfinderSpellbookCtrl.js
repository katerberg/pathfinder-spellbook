(function() {
    'use strict';

    angular.module('pathfinderApp')
    .controller('PathfinderSpellbookCtrl', ['$scope', 'pathfinderService', 'modalService', function($scope, pathfinderService, modalService) {
        pathfinderService.getSpellbook().then(function(data) {
            $scope.spellbook = data;
        });

        $scope.casterTypes = pathfinderService.casterTypes;

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
    }]);
})();
