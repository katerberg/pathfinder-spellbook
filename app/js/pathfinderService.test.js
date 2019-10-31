describe('pathfinderService', function() {

    var instance,
        $http,
        spellService,
        rootScope;

    beforeEach(module('pathfinderApp'));

    beforeEach(inject(function(pathfinderService, $rootScope, _$httpBackend_, _spellService_) {
        rootScope = $rootScope;
        $httpBackend = _$httpBackend_;
        spellService = _spellService_;
        instance = pathfinderService;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('After start up', function() {

        describe('getSpellbook', function() {
            beforeEach(function() {
                spyOn(spellService, 'spellify');
            });

            it('should fetch from http', function() {
                var executed = false,
                    input0 = 'a',
                    input1 = 'another',
                    expected0 = {'actual': 'val'},
                    expected1 = {'final': 'val'},
                    dataFromHttp = [input0, input1];
                spellService.spellify.and.callFake(function(thingToSpellify) {
                    switch (thingToSpellify) {
                        case input0:
                            return expected0;
                        case input1:
                            return expected1;
                        default:
                            return null;
                    }
                });
                $httpBackend.expect('GET', 'static/spells.json').respond(dataFromHttp);

                instance.getSpellbook().then(function(data) {
                    executed = true;
                    expect(data.length).toEqual(2);
                    expect(data[0]).toEqual(expected0);
                    expect(data[1]).toEqual(expected1);
                });
                $httpBackend.flush();
                rootScope.$apply();

                expect(executed).toBeTruthy();
            });
        });

        describe('casterTypes', function() {
            it('should be an array of strings', function() {
                expect(instance.casterTypes.length).not.toEqual(0);
                expect(typeof instance.casterTypes[0]).toEqual('string');
            });
        });
    });
});

