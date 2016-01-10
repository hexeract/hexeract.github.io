appInstaller.controller('AppController', function($scope,$mdSidenav,$location){

  $scope.menuItems = [
    { name:"Dashboard", icon: "home", url:"/dashboard" },
    { name:"Settings", icon: "settings", url:"/settings" },
    { name:"FAQ", icon: "question_answer", url:"/dashboard" },
    { name:"About Us", icon: "info", url:"/about" },
  ];

  $scope.share = {
    hidden : false,
    isOpen : false,
    hover : false,
    items : [
      { name: "Twitter", icon: "img/icons/twitter.svg", direction: "bottom" },
      { name: "Facebook", icon: "img/icons/facebook.svg", direction: "top" },
      { name: "Google Hangout", icon: "img/icons/hangout.svg", direction: "bottom" }
    ]
    };
      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
  $scope.$watch('share.isOpen', function(isOpen) {
    if (isOpen) {
      $timeout(function() {
        $scope.tooltipVisible = isOpen;
      }, 600);
    } else {
      $scope.tooltipVisible = isOpen;
    }
  });

  $scope.toggleNav = function () {
    $mdSidenav('left').toggle();
  };

  $scope.go = function ( path ) {
    $location.path( path );
    $mdSidenav('left').toggle();
  };
});
