describe('spellService', function() {

    var instance,
        Spell;

    beforeEach(module('pathfinderApp'));

    beforeEach(inject(function(spellService, _Spell_) {
        instance = spellService;
        Spell = _Spell_;
    }));

    describe('After start up', function() {
        describe('spellify', function() {
            it('creates a spell', function() {
                var input = {fields: {'fo': 'val', ba: 'value'}};

                expect(instance.spellify(input) instanceof Spell).toBe(true);
            });

            it('strips any html', function() {
                var dirty = {'description': '<a foo="bar">val</a>', 'short_description': 'value'},
                    input = {'fields': dirty};

                var result = instance.spellify(input);

                expect(result.description).toEqual('val');
                expect(result.shortDescription).toEqual('value');
            });
        });
    });
});
