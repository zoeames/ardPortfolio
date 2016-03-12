app.factory('artModal', function (vModal) {
  return vModal({
    controller: 'ArtModalCtrl',
    controllerAs: 'ArtModalCtrl',
    templateUrl: 'views/artworkModal.html'
  });
})

