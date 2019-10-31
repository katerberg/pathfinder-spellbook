(function() {
    angular.module('pathfinderApp').factory('pathfinderService', function($http, $q, spellService) {
        function getSpellbook() {
            return $http.get('static/spells.json').then(function(res) {
                return res.data.map(function(dirtySpell) {
                    return spellService.spellify(dirtySpell);
                });
            });

        }
        var casterTypes = ['Bard',
            'Cleric',
            'Druid',
            'Paladin',
            'Ranger',
            'Sorcerer/Wizard'];

        return {
            getSpellbook: getSpellbook,
            casterTypes: casterTypes
        };
    });
})();

