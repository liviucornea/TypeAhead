(function () {
    "use strict";
    //this is a custom ANgular service and we hard code the values here but they can come from database via REST API or can be stored in 
    // config files or Json object or...whatever....
    var app = angular.module("typeAhead")
                .factory("typeAheadService",
                [typeAheadService]);
    function typeAheadService() {
        var typeAheadServiceData = {};

        typeAheadServiceData.getOptions = function getOptions() {
            var myCommands = ["buy", "borrow", "sell", "rent","finance","loan","plc"];
            var buyArray = ["buy,socks", "buy,shoes", "buy,pants", "buy,jaket","buy,hat", "buy,handbag"];
            var buyChildArray = ["buy,socks,color","buy,socks,size","buy,socks,model", "buy,shoes,size", "buy,shoes,color","buy,shoes,gender" , "buy,pants,color", "buy,pants,size", "buy,jaket,size", "buy,handbag,shape"];
            var sellArray = ["rent,car","rent,house","rent,apt","sell,jaket", "sell,handbag", "sell,shoes"];
            var sellChildArray = ["sell,handbag,shape", "sell,shoes,color"];
 
            return myCommands.concat(buyArray, buyChildArray, sellArray, sellChildArray);
             
        }
        return typeAheadServiceData;
    }

}());