perssonalAssistant.controller("loginCtrl", function ($scope, $http, $window) {

    // TODO: Detele this
    $scope.email = "yanivstern26@gmail.com";
    $scope.password = "yanivst";
    
    $scope.login = function () {
        $window.location.href = "#!/home";
    }
   
});
