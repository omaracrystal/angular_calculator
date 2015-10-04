var app = angular.module('app', []);

app.controller('MainController', function($scope){
$scope.screenValue = [];

$scope.operator = function(value){
  $scope.screenValue.push(value);
};

$scope.integer = function(value){
   var isNumber = /([0-9])+/;
   var lastNumber = $scope.screenValue[$scope.screenValue.length-1];
  if (isNumber.test(lastNumber)){
      lastNumber += value;
      $scope.screenValue.pop();
      $scope.screenValue.push(lastNumber);
  } else{
  $scope.screenValue.push(value);
 }
};


$scope.clear = function(){
 $scope.screenValue = [];
};

  // calculate function
$scope.calculate = function(arr){
  var  workArr = arr.slice(0);
  while (workArr.length !== 1){
    var answer;
    for (var i = 0; i < workArr.length; i++) {
      if(workArr[i]=== "x"){
        answer = parseFloat(workArr[i-1]) * parseFloat(workArr[i+1]);
        workArr.splice([i-1],3,answer);
      }else if(workArr[i]=== "/"){
        answer = parseFloat(workArr[i-1]) / parseFloat(workArr[i+1]);
        workArr.splice([i-1],3,answer);
      }
    }
    for (var k = 0; k < workArr.length; k++) {
      if(workArr[k]=== "+"){
        answer = parseFloat(workArr[k-1]) + parseFloat(workArr[k+1]);
        workArr.splice([k-1],3,answer);
      }else if(workArr[k]=== "-"){
        answer = parseFloat(workArr[k-1]) - parseFloat(workArr[k+1]);
        workArr.splice([k-1],3,answer);
      }
    }
  }
  $scope.screenValue = workArr;
};
});
