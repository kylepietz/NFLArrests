//app initialization
var app = angular.module('test-app', []);

//controller
app.controller('ctrl', function($scope, $http) {
    $http.get("http://nflarrest.com/api/v1/player").then(function(response) {
        $scope.arrestData = response.data;
        $scope.oCount = 0;
        $scope.dCount = 0;
        $scope.sCount = 0;
        for(var x in $scope.arrestData) {
          $scope.sideCount($scope.arrestData[x].Position);
        }
    });



    $scope.sideCount = function(pos) {
        var keys = {'Offense':['QB','WR','RB','FB','OT','TE'],
        'Defense':['DE','DT','LB','FS','SS','CB'],
        'Special':['K','P','LS','ST']};
        if(keys['Offense'].indexOf(pos) > -1) {
          $scope.oCount += 1;
        }
        else if(keys['Defense'].indexOf(pos) > -1) {
          $scope.dCount += 1;
        }
        else if(keys['Special'].indexOf(pos) > -1) {
          $scope.sCount += 1;
        }
        else {
          console.log('Position not found. Abbreviation was ' + pos);
        }
        return;
    }
});
