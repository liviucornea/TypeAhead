(function() {
  "use strict";
  var app = angular.module('typeAhead');
  // use minification safe array to define your controller 
  app.controller("typeAheadCtrl", ['typeAheadService', typeAheadCtrl]);

  function typeAheadCtrl(typeAheadService) {
    var self = this;
    self.commands = typeAheadService.getOptions();
    self.checkIfEnterKeyWasPressed = function($event, value) {
      var keyCode = $event.which || $event.keyCode;
      if (_.some(self.commands, function(item) {
          if (item.indexOf(self.selected) > -1 && item.indexOf(',', self.selected.length) == -1) {
            return true;
          }
          return false;
        }) === false) {
        self.selected = value.substring(0,value.length-1);
      }
      // I implement here for "enter" key but as well can be implemented for other 
      if (keyCode === 13) {
        alert(value + " is priceless!!!!");
      }

    };

  }
  /// I define here a filter, but in enterprise application this should be moved out from 
  // this script to his own place as this script should be kept for controller 
  // see John Papa recomandations for structuring Angular apps
  app.filter('bycommand', function () {
        return function (input, passedValue) {
            var filtered = _.filter(input,
               function (item) {
                   if (item.indexOf(passedValue) > -1 && (item.indexOf(',', passedValue.length) == -1 | item.indexOf(',') == -1) ) {
                       return item;
                   }

                   return null;
               });


            return filtered;
        };
    })


}());
