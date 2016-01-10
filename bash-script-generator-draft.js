var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (body, fileName) {
        var blob = new Blob([header, body], {type: "application/x-sh"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

var fileName = "installer.sh";
var header = '#!/bin/bash/\n\n';
var body = '';
var apps = [
   {
    "name": 'git',
    "bashCommand": 'sudo apt-get install git'
  },
   {
   	"name": 'svn',
    "bashCommand": 'sudo apt-get install svn'
  }
];

apps.forEach(function(currentValue,index){	
  body+='# application being installed: ' + currentValue.name + '\n';
  body+=currentValue.bashCommand;
  if (index < apps.length -1) body+=' && \n';
  
})

//var body = 'sudo apt-get install git' + ' && \n' + 'sudo apt-get install svn' ;

saveData(body, fileName);

