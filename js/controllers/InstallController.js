appInstaller.controller('InstallController', function($scope, $mdDialog, profileService, InstallerFactory) {

  $scope.distro = 'Ubuntu';
  $scope.distros = ['Ubuntu'];

  $scope.download = function() {

    var prof = $scope.$parent.profiles[$scope.$parent.profile];
    var distro = $scope.distro;

  };

  $scope.install = function() {
    var p = $scope.$parent.profiles[$scope.$parent.profile];
    var distro = $scope.distro;

    var repos, install, postInstall;
  };
});
