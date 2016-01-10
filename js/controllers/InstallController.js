appInstaller.controller('InstallController', function($scope, $window, document, $mdDialog, profileService, InstallerFactory) {

  $scope.distro = 'Ubuntu';
  $scope.distros = ['Ubuntu'];
  $scope.url = "";

  $scope.download = function() {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    var prof = $scope.$parent.profiles[$scope.$parent.profile];
    var distro = $scope.distro;

    InstallerFactory.getInstaller(prof, distro).then(function (installer) {
      var blob = new Blob([installer], {type: "application/x-sh;charset=utf-8"}),
          url = $window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "script.sh";
        a.click();
      $window.URL.revokeObjectURL($scope.url);
    });
  };
});
