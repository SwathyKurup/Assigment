var routerApp = angular.module('routerapp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
	  
    
    $stateProvider.state('display', {
                                 url: '/:soft',

                              views: {
                                      '': {
                                          templateUrl: 'display.html',
                                           controller: 'routerCtrl'

                                          },
            
                                    }       
      
                           })

    });
routerApp.controller('routerCtrl',function($scope,$state,$stateParams,$http){
    $scope.hidden=false;
	var htm=$stateParams.soft;

	$http.get('json/data.json').success( function(response) {
    console.log(response[htm]);
    $scope.disp=response[htm];

   });

})

routerApp.controller('mainctrl',function($scope,$state,$stateParams){

$scope.hidden=true;
});