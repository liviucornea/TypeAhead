(function() {
  'use strict';

  angular.module('typeAhead')
    .directive('typeAheadWidget', ['typeAheadService', function(typeAheadService) {
      return {
        restrict: 'A',
        link: function(scope, el, attrs, model) {
          scope.commands = typeAheadService.getOptions();
          scope.checkIfEnterKeyWasPressed = function($event, value) {
            var keyCode = $event.which || $event.keyCode;
            if (_.some(scope.commands, function(item) {
                if (item.indexOf(scope.selected) > -1 && item.indexOf(',', scope.selected.length) == -1) {
                  return true;
                }
                return false;
              }) === false) {
              scope.selected = value.substring(0,value.length-1);;
            }
            // I implement here for "enter" key but as well can be implemented for other 
            if (keyCode === 13) {
              alert(value + " is priceless!!!");
            }

          };


        }
      };
    }]);


}());