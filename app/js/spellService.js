(function() {
    angular.module('pathfinderApp').factory('spellService', ['Spell', function(Spell) {
        function spellify(dirtySpell) {
            Object.keys(dirtySpell.fields, function(key, value) {
                dirtySpell.fields[key] = value.replace(/<[^>]*>/gm, '');
            });
            return new Spell(dirtySpell.fields);
        }

        return {
            spellify: spellify
        };
    }]);
})();
