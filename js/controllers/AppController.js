appInstaller.controller('AppController', function($scope,$mdSidenav,$location){

  $scope.menuItems = [
    { name:"Dashboard", icon: "home", url:"/dashboard" },
    { name:"Settings", icon: "settings", url:"/settings" },
    { name:"FAQ", icon: "question_answer", url:"/dashboard" },
    { name:"About Us", icon: "info", url:"/about" },
  ];

  $scope.toggleNav = function () {
    $mdSidenav('left').toggle();
  };

  $scope.go = function ( path ) {
    $location.path( path );
    $mdSidenav('left').toggle();
  };
});
