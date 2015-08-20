function BandsController($http, $scope) {
    $http.get('/list').success(function(retorno){
        $scope.band = retorno;
    });
}