angular.module('conference', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope, $http){
$scope.talks = [
    ];

$scope.addTalk = function() {
  if($scope.title === '') { return; }
    $scope.create({
      title: $scope.title,
      upvotes: 0,
      year: $scope.year,
      month: $scope.month,
      imageUrl: $scope.imageUrl,
      speaker: $scope.speaker 
    });
    $scope.title = ''; 
    $scope.year = '';
    $scope.month = '';
    $scope.speaker = '';
    $scope.imageUrl = '';
};
    
$scope.incrementUpvotes = function(comment) {
    $scope.upvote(comment);
};

$scope.upvote = function(talk) {
      return $http.put('/talks/' + talk._id + '/upvote')
        .success(function(data){
          talk.upvotes += 1;
        });
};

$scope.getAll = function() {
    return $http.get('/talks').success(function(data){
      angular.copy(data, $scope.talks);
    });
  };

 $scope.create = function(talk) {
    return $http.post('/talks', talk).success(function(data){
      $scope.talks.push(data);
    });
  };

 $scope.delete = function(comment) {
      $http.delete('/talks/' + talk._id )
        .success(function(data){
        });
      $scope.getAll();
    };

}
]);
