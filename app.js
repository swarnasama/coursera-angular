(function () {
'use strict';

angular.module('Lunchcheck', [])
.controller('Lunchcheckcontroller', function ($scope) {
  $scope.name = "";
  $scope.msg = "";
  $scope.lunchcheck = function () {
    var str = $scope.name;
    var array = str.split(',');
    var noofitems = array.length;
    if(noofitems<=3){$scope.msg = "Enjoy!";}
    else{$scope.msg = "Too Much!";}
  };
});
})();
