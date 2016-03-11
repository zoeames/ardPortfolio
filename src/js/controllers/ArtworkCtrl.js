app.controller("ArtworkCtrl", function($scope, artworkFactory, $http) {
    $scope.title = "Artwork";
    $scope.artwork = [];
    $scope.newArtwork = {};
  	$scope.sortType = 'title'; 
  	$scope.sortReverse = false;
  	$scope.searchArtwork = '';

	$scope.deleteArt = function(artId){
		artworkFactory.deleteArtwork(artId).success(function(data, status) {
			if(status === 200){
				getAllTheArtwork(); 
			}
    	});
	};

    $scope.addArt = function(){
		artworkFactory.postArtwork($scope.newArtwork).success(function(data, status) {
        	$scope.newArtwork = {};
			getAllTheArtwork(); 
		});
    }

   	var getAllTheArtwork = function(){
	    artworkFactory.getArtwork().success(function(data, status) {
			$scope.artwork = artworkFactory.mapArtworkToArray(data)
		});
	};
	
	getAllTheArtwork(); 
});
