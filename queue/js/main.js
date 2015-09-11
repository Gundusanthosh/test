var app = angular.module('MyApp', []);

app.controller('myCtrl', function($scope, $http) 
{
	$scope.alphas = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	$scope.queue=[];
	$scope.front=-1;
	$scope.rear=-1;
	
	
	//$scope.insertsection=true;
	//$scope.deletesection=false;
	//$scope.displaysection=false;
	document.getElementById('insertsection').style.display="block";
	document.getElementById('deletesection').style.display="none";
	document.getElementById('displaysection').style.display="none";
	$scope.range = function(min, max, step){
		  step = step || 1;
		  var input = [];
		  for (var i = min; i <= max; i += step) input.push(i);
		  return input;
		 }
		 
	$scope.showdel=function()
	{
		document.getElementById('insertsection').style.display="none";
		document.getElementById('deletesection').style.display="block";
		document.getElementById('displaysection').style.display="none";
	}
	$scope.showins=function()
	{
		document.getElementById('insertsection').style.display="block";
		document.getElementById('deletesection').style.display="none";
		document.getElementById('displaysection').style.display="none";
	}
	$scope.showqueue=function()
	{
		document.getElementById('insertsection').style.display="none";
		document.getElementById('deletesection').style.display="none";
		document.getElementById('displaysection').style.display="block";
	}
	
	$scope.enqueue=function()
	{
		if($scope.front==-1)
				$scope.front=0;
			
		$scope.rear=$scope.rear+1;
		$scope.queue[$scope.rear]=$scope.eleval;
		$scope.eleval="";
	}
	$scope.dequeue=function()
	{
		// if($scope.front==$scope.rear) 
		// {
			// $scope.front=0;
			// $scope.rear=0;
		// }
		$scope.front=$scope.front+1;
		
	}
	
});