var clock = angular.module("myClock",[ ]);
clock.controller("myCtrl",function($scope, $interval){
          $scope.time = new Date().toLocaleTimeString();
          $interval(function( ){
                    $scope.time = new Date( ).toLocaleTimeString();        
          },1000);
});