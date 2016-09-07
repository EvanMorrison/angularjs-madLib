var app = angular.module("MadLibApp", []);

app.controller("MadLibController", function($scope) {
	$scope.title = 'Angular Mad Lib';
	$scope.fillIns = [	
						{	"type"	: 	"Foreign Country",
							"value"	: 	""
						}, 
						{	"type"	: 	"adverb",
							"value"	: 	""	
						},
						{	"type"	: 	"adjective",
							"value" : 	""
						},
						{	"type"	: 	"animal",
							"value"	: ""
						},
						{	"type"	: 	"verb ending in \'ing\'",
							"value" : 	""
						},
						{	"type"	: 	"verb",
							"value" : 	""
						},
						{ 	"type"	: 	"verb ending in \'ing\'",
							"value" : 	""
						},
						{	"type"	: 	"adverb",			
							"value"	:   ""
						},
						{	"type"	: 	"adjective",
							"value"	: 	""
						},
						{	"type"	: 	"a place",
							"value" : 	""
						},
						{	"type"	: 	"type of liquid",
							"value"	: 	""
						}, 
						{	"type"	: 	"part of body",
							"value" : 	""
						},
						{	"type" 	: 	"verb",
							"value"	: 	""
						}
					   ]
	

	$scope.story = [
					'If you are traveling in ',
					' and find yourself having to cross a piranha-filled river, here\'s how to do it ',
					': Piranhas are more ',
					' during the day, so cross the river at night. Avoid areas with netted ',
					' traps-piranhas may be ',
					' there looking to ',' them! When ',
					' the river, swim ',
					'. You don\'t want to wake them up and make them ',
					'! Whatever you do, if you have an open wound, try to find another way to get back to the ',
					'. Piranhas are attracted to fresh ',
					' and will most likely take a bite out of your ',
					' if you ',
					' in the water!'
					]

	
   //demo1 and demo2 arrays were used for testing
	$scope.demo1 = ['Brazil', 'safely','aggressive', 'monkey', 'lurking', 'eat', 'crossing', 'smoothly', 'angry', 'other side', 'blood', 'arm or leg','splash'];
	$scope.demo2 = ['_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________','_________________'];
	
	$scope.progress = 0;
	$scope.completed = false;
	

	//clear the form
	$scope.reset = function() {
		$scope.fillIns.forEach(function(val) {
			val.value = "";
		});
		$scope.progress = 0;
		$scope.progressPct = 0;
		$scope.completed = false;
		$scope.counter = 0;
		angular.element('input').focus();
	};

	//a progressbar that shows portion of completed form
	$scope.formProgress = function($event){
		$scope.progress = 0;
		//count up how many fill-in values are populated
		$scope.fillIns.forEach(function(currentValue) {
			if (currentValue.value) {
				$scope.progress += 1;
			}
		});
		//convert progress to a percentage; used to set the width of the progress bar
		$scope.progressPct = Math.floor($scope.progress/$scope.fillIns.length*100).toString() + '%';
		//set the completed variabel to true or false
		if ($scope.progress === $scope.fillIns.length) {
			$scope.completed = true;
		} else {
			$scope.completed = false;
		}
	};


	$scope.counter = 0;
	//display Next input upon pressing enter key in input field
	$scope.isEnter = function($event, $index) {
		if ($event.which === 13) {
			$scope.displayNext($event, $index)
		}
	}

	//display next input
	$scope.displayNext = function($event, $index) {
		$event.preventDefault();
		if ($scope.fillIns[$index+1]) {
			$scope.counter = $index + 1;
		} else {
			$scope.counter = $scope.fillIns.length - 1;

		}	
		$scope.formProgress(0);
		setTimeout(function() {
			angular.element('input').select();
			angular.element('button')[1]
		},20);
		
		console.log('fillInslength = ' + $scope.fillIns.length);
		console.log('index = ' + $index);
		console.log('counter = ' + $index)
		// $scope.isComplete();
	};

	//display previous input
	$scope.displayPrev = function($event, $index) {
		// $event.preventDefault();
		if ($index > 0) {
			$scope.counter = $index - 1;
			$scope.formProgress(0);
			setTimeout(function() {
				angular.element('input').select();
				// angular.element('#singleLineForm').find('input')[$index-1].select();
			},20);
		}
		// $scope.isComplete();
	};

	

});

