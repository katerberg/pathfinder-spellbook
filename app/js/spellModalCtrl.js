(function() {
    'use strict';

    angular.module('pathfinderApp').controller('SpellModalCtrl', ['$scope', '$modalInstance', 'spell', function($scope, $modalInstance, spell) {
        function close() {
            $modalInstance.close();
        }

        function showDetails(spell) {
            spell.showDetails = true;
        }

        $scope.close = close;
        $scope.spell = spell;
        $scope.showDetails = showDetails;
    }]);
})();
