(function() {
    angular.module('pathfinderApp').factory('Spell', function() {
        var Spell;

        Spell = (function() {
            function buildClasses(input) {
                if (!input) {
                    return input;
                }
                return input.split(', ').map(function(levelInput) {
                    var classAndLevel = levelInput.split(' ');
                    classAndLevel[0] = classAndLevel[0].charAt(0).toUpperCase() + classAndLevel[0].substr(1);
                    classAndLevel[0] = classAndLevel[0].replace(/\/(.)/, function(charToReplace) {
                        return charToReplace.toUpperCase();
                    });
                    return {name: classAndLevel[0], level: parseInt(classAndLevel[1])};
                });
            }

            function Spell(args) {
                if (!args) {
                    return;
                }
                this.description = args.description;
                this.school = args.school;
                this.name = args.name;
                this.classes = buildClasses(args.level);
                this.area = args.area;
                this.effect = args.effect;
                this.descriptor = args.descriptor;
                this.range = args.range;
                this.components = args.components;
                this.duration = args.duration;
                this.subSchool = args.subschool;
                this.target = args.target;
                // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
                this.savingThrow = args.saving_throw;
                this.spellResistance = args.spell_resistance;
                this.shortDescription = args.short_description;
                this.castingTime = args.casting_time;
                // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
            }

            return Spell;
        })();

        return Spell;
    });
})();

