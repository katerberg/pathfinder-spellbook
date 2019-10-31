describe('Spell', function() {

    var Spell;

    beforeEach(module('pathfinderApp'));

    beforeEach(inject(function(_Spell_) {
        Spell = _Spell_;
    }));

    it('instantiates without arguments', function() {
        expect(new Spell() instanceof Spell).toBe(true);
    });

    it('instantiates with parameters', function() {
        expect(new Spell({description: 'something'}) instanceof Spell).toBe(true);
    });

    describe('level', function() {
        it('creates arrays out of comma separated lists', function() {
            var input = {level: 'Sorcerer/Wizard 7, Cleric 2'};

            var spellClasses = new Spell(input).classes;

            expect(spellClasses.length).toEqual(2);
            expect(spellClasses[0].name).toEqual('Sorcerer/Wizard');
            expect(spellClasses[0].level).toEqual(7);
            expect(spellClasses[1].name).toEqual('Cleric');
            expect(spellClasses[1].level).toEqual(2);
        });

        it('uppercases the first character of class names', function() {
            var input = {level: 'bard 7'};

            var spellClasses = new Spell(input).classes;

            expect(spellClasses[0].name).toEqual('Bard');
        });

        it('uppercases the first character after slash', function() {
            var input = {level: 'sorcerer/wizard 7'};

            var spellClasses = new Spell(input).classes;

            expect(spellClasses[0].name).toEqual('Sorcerer/Wizard');
        });
    });
});
