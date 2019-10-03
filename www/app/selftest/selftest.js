moduleCtrl

.controller('selftestCtrl', function($scope, $rootScope, $state, Data, $ionicModal, ApiService) {
	$scope.selftest= Data.data;
	
	$scope.pageInfo = {template: '', assign: {}};
	$scope.selectedTest = function(obj){
		$scope.selected = obj;
		$scope.loadData(obj);
	};
	$scope.subjects = [];
	ApiService.get_subjects().then(function(res){
		$scope.subjects = res.data;
	});

	$scope.get_test = function(){
		$scope.pageInfo.template = '';
		ApiService.get_self_tests().then(function(res){
			$scope.selftest = res.data;
		});
	}

	$scope.loadData = function(v){
		ApiService.get_self_test_questions(v.id);
        ApiService.get_self_test_report(v.id);

        angular.forEach(v.tests, function(v1,k1){
            ApiService.get_self_test_review(v.id, v1.id);
        });
	};

	$scope.readPageData = {};

		$scope.getReadData = function(id){
			$scope.readPageData = {};
			ApiService.get_self_test_questions(id).then(function(res){
				$scope.readPageData = res.data;

				if($scope.pageInfo.template == 'write'){
					$scope.pageInfo.writetest={test_id:id, test_name: $scope.readPageData.info.daily_test_name,questions:{}, question_answers: {}};

					angular.forEach($scope.readPageData.questions, function(arr, type){
						$scope.readPageData.questions[type] = $scope.$parent.shuffle(arr);

						if(type == 'Missing Letters'){
							angular.forEach($scope.readPageData.questions[type], function(v,k){
								$scope.pageInfo.writetest.question_answers[v.id] = $scope.$parent.missing_letters(v.question);
							});
						} else if(type == 'Jumbled Letters'){
							angular.forEach($scope.readPageData.questions[type], function(v,k){
								$scope.pageInfo.writetest.question_answers[v.id] = $scope.$parent.jumbled_letters(v.question);
							});
						} else if(type == 'Jumbled Words'){
							angular.forEach($scope.readPageData.questions[type], function(v,k){
								$scope.pageInfo.writetest.question_answers[v.id] = $scope.$parent.jumbled_words(v.question);
							});
						}
					});
				}
			});
		};


	$scope.reportPageData = {};

		$scope.getReportData = function(id){
			$scope.reportPageData = {};
			ApiService.get_self_test_report(id).then(function(res){
				$scope.reportPageData = res.data;
			});
		};


	$scope.reviewPageData = {};

		$scope.getReviewData = function(id, aid){
			$scope.reviewPageData = {};
			ApiService.get_self_test_review(id, aid).then(function(res){
				$scope.reviewPageData = res.data;
			});
		};

	$scope.get_results = function(){
		if($scope.pageInfo.term && $scope.pageInfo.sub){
			ApiService.get_self_test_results($scope.pageInfo.sub, $scope.pageInfo.term).then(function(res){
				$scope.testresults = res.data;
			});
		}
		
	}

	$scope.assign_self_test = function(){
		ApiService.assign_self_test($scope.pageInfo.sub, $scope.pageInfo.term, $scope.pageInfo.assign).then(function(res){
			$scope.get_test();
		});
	};

	$scope.writetest = function(){
		if($rootScope.isOnline){
			ApiService.write_self_test($scope.pageInfo.writetest).then(function(res){
				$scope.pageInfo.template = 'review';
				$scope.getReviewData($scope.pageInfo.writetest.test_id, res.id);
			});
		} else {
			var insCachedPackage = localStorage.getItem('smsCachedTest');

            if(insCachedPackage){
                insCachedPackage = JSON.parse(insCachedPackage);
            } else {
                insCachedPackage = {};
            }
            $scope.newansid = 'offline-'+new Date().getTime();
            insCachedPackage[$scope.newansid] = {action: 'write_self_test', data: $scope.pageInfo.writetest};
            localStorage.setItem('smsCachedTest', JSON.stringify(insCachedPackage));

			var reviewData = {info: $scope.readPageData.info, questions: {}};
            var mark = 0;
            angular.forEach($scope.readPageData.questions, function(questions, type){
            	angular.forEach(questions, function(qst){
            		if(reviewData.questions[type] === undefined){
            			reviewData.questions[type] = [];
            		}
            		qst.urans = {answer: $scope.pageInfo.writetest.questions[qst.id], question_answer: $scope.pageInfo.writetest.question_answers[qst.id]};
            		
            		if(qst.answer && qst.answer.trim().toLowerCase() == $scope.pageInfo.writetest.questions[qst.id].toLowerCase()){
            			qst.urans.daily_test_mark = 1;
            			mark++;
            		} else {
            			qst.urans.daily_test_mark = 0;
            		}

            		reviewData.questions[type].push(qst);
	            });
            });

            localStorage.setItem('sms_sync_get_self_test_review&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+$scope.pageInfo.writetest.test_id+'&answer_id='+$scope.newansid, JSON.stringify({data: {data:reviewData, status: 'Success'}}));


            var ress = JSON.parse(localStorage.getItem('sms_sync_get_self_tests&user_id='+$rootScope.loggedInUserInfo.id));
            angular.forEach(ress.data.data, function(dt){
            	if(dt.id == $scope.pageInfo.writetest.test_id){
            		dt.tests.push({id: $scope.newansid, mark: mark});
            	}
            });
            localStorage.setItem('sms_sync_get_self_tests&user_id='+$rootScope.loggedInUserInfo.id, JSON.stringify(ress));


            var reportData = JSON.parse(localStorage.getItem('sms_sync_get_self_test_report&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+$scope.pageInfo.writetest.test_id));

            angular.forEach(reportData.data.data.questions, function(qst, k){
            		if(qst.results === undefined) qst.results = [];
            		if(qst.correct === undefined) qst.correct = 0;
            		if(qst.wrong === undefined) qst.wrong = 0;

            		var tres = {};
            		if(qst.answer && qst.answer.trim().toLowerCase() == $scope.pageInfo.writetest.questions[qst.id].toLowerCase()){
            			tres.daily_test_mark = 1;
            			qst.correct++;
            		} else {
            			tres.daily_test_mark = 0;
            			qst.wrong++;
            		}

            		qst.results.push(tres);
            });

            localStorage.setItem('sms_sync_get_self_test_report&user_id='+$rootScope.loggedInUserInfo.id+'&test_id='+$scope.pageInfo.writetest.test_id, JSON.stringify(reportData));
            $scope.pageInfo.template = 'review';
            $scope.getReviewData($scope.pageInfo.writetest.test_id, $scope.newansid);
		}

	}
});


