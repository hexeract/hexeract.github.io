appInstaller.controller('InstallController', function($scope, $window, $mdDialog, profileService, InstallerFactory) {

  var target = angular.element('#downloader');

  $scope.distro = 'Ubuntu';
  $scope.distros = ['Ubuntu'];
  $scope.url = "";

  $scope.download = function() {
    var prof = $scope.$parent.profiles[$scope.$parent.profile];
    var distro = $scope.distro;

    InstallerFactory.getInstaller(prof, distro).then(function (installer) {
      var blob = new Blob([installer], {type: "application/x-sh;charset=utf-8"});
      $scope.url = $window.URL.createObjectURL(blob);
      target.click();
      $window.URL.revokeObjectURL($scope.url);
    });
  };
});
