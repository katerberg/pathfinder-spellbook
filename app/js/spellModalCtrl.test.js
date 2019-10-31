(function() {
describe('SpellModalCtrl', function() {

    var scope;

    beforeEach(function() {
        module('pathfinderApp');
        module('ui.bootstrap');
    });

    describe('start up', function() {
        var controller;

        beforeEach(inject(function($controller, $rootScope) {
            controller = $controller;
            scope = $rootScope.$new();
        }));

        it('should populate spell', function() {
            var expected = 'a thing';

            controller('SpellModalCtrl', {$scope: scope, $modalInstance: {}, spell: expected});
            scope.$digest();

            expect(scope.spell).toBe(expected);
        });
    });

    describe('after start up', function() {
        var spell,
            $modalInstance;
        beforeEach(inject(function($controller, $rootScope) {
            $modalInstance = {close: jasmine.createSpy('modalInstanceClose')};
            scope = $rootScope.$new();
            spell = {};

            $controller('SpellModalCtrl', {$scope: scope, $modalInstance: $modalInstance, spell: spell});
            scope.$digest();
        }));

        describe('#close', function() {
            it('should close the modal', function() {
                scope.close();

                expect($modalInstance.close).toHaveBeenCalled();
            });
        });
    });
});
})();
