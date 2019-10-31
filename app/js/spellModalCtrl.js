(function() {
    'use strict';

    angular.module('pathfinderApp').controller('SpellModalCtrl', function($scope, $modalInstance, spell) {
        function close() {
            $modalInstance.close();
        }

        function showDetails(spell) {
            spell.showDetails = true;
        }

        $scope.close = close;
        $scope.spell = spell;
        $scope.showDetails = showDetails;
    });
})();
