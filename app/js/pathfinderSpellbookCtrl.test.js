describe('PathfinderSpellbookCtrl', function() {

    var scope,
        pathfinderService;

    beforeEach(function() {
        module('pathfinderApp');
        module('ui.bootstrap');
    });

    describe('Start up', function() {
        var controller,
            $q;

        beforeEach(inject(function($controller, $rootScope, _$q_, _pathfinderService_) {
            pathfinderService = _pathfinderService_;
            controller = $controller;
            $q = _$q_;
            scope = $rootScope.$new();
        }));

        it('should populate spells', function() {
            var expected = 'a thing';
            deferredSpells = $q.defer();
            spyOn(pathfinderService, 'getSpellbook').and.returnValue(deferredSpells.promise);

            controller('PathfinderSpellbookCtrl', {$scope: scope});
            scope.$digest();

            expect(scope.spellbook).toBeUndefined();

            deferredSpells.resolve(expected);
            scope.$apply();

            expect(scope.spellbook).toBe(expected);
        });
    });

    describe('After start up', function() {
        var modalService;

        beforeEach(inject(function($controller, $rootScope, _pathfinderService_, _modalService_) {
            pathfinderService = _pathfinderService_;
            modalService = _modalService_;
            spyOn(pathfinderService, 'getSpellbook').and.returnValue({then: function() {}});

            scope = $rootScope.$new();
            $controller('PathfinderSpellbookCtrl', {$scope: scope});
            scope.$digest();

        }));

        it('should be defined', function() {
            expect(scope).toBeDefined();
        });

        it('should expose casterTypes', function() {
            expect(scope.casterTypes).toBe(pathfinderService.casterTypes);
        });

        describe('#drillIntoSpell', function() {
            beforeEach(function() {
                spyOn(modalService, 'open');
            });

            it('should open modal', function() {
                var input = {a: 'thing'};

                scope.drillIntoSpell(input);

                expect(modalService.open).toHaveBeenCalled();
                var openObject = modalService.open.calls.mostRecent().args[0];
                expect(openObject.templateUrl).toBe(modalService.spell.url);
                expect(openObject.controller).toBe(modalService.spell.controller);
                expect(openObject.resolve.spell()).toBe(input);
            });
        });
    });
});
