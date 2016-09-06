var app = angular.module("MadLibApp", []);

app.controller("MadLibController", function($scope) {
	$scope.title = 'Angular Mad Lib';
	$scope.inputs = [];
	$scope.inputPlaceholders = ['[Foreign Country]', '[adverb]','[adjective]', '[animal]', '[verb ending in -ing]', '[verb]', '[verb ending in -ing]', '[adverb]', '[adjective]', '[a place]', '[type of liquid]', '[part of body]','[verb]'];
	$scope.progress = 0;
	$scope.showStory = false;

	//clear the form
	$scope.reset = function() {
		$scope.inputs = [];
		angular.element($('form').find('input')[0].focus());
		$scope.showStory = false;
	};

	$scope.formProgress = function($event){
		$scope.progress = 0;
		$scope.inputs.forEach(function(currentValue) {
			if (currentValue) {
				$scope.progress += 1;
			}
		});
		$scope.progressPct = Math.floor($scope.progress/12*100).toString() + '%';
	};

	$scope.storyReady = function() {
		$scope.inputPlaceholders.forEach(function(currentValue, index) {
			if (!$scope.inputs[index]) {
				$scope.inputs[index] = $scope.inputPlaceholders[index];
			}
			 $scope.showStory = true;
		});
	}
});