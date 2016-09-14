var app = angular.module('webComics', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/comics/:id', {
    templateUrl: "templates/comics.html",
    controller: 'comicsController',
    controllerAs: 'comicsCtrl'
  })
  .otherwise({redirectTo: '/'});
});

app.controller('comicsController', function($routeParams){
    this.currentId = $routeParams.id;
    this.page = 0;
    this.comicsData = comics;

    this.getPage = function(){
      return this.page;
    };

    this.nextPage = function(){
      if(this.page < this.comicsData[this.currentId].images.length-1){
        return this.page+=1;
      }
    };

    this.previousPage = function(){
      if(this.page > 0){
        return this.page-=1;
      }
    };

    this.changeParam = function(){
      return currentId = $routerParams.id;
    };
});

var comics =
[
  {
    number: 0,
    title: 'Rucil - Rusa Kecil Baik Hati',
    images: ["comics/rucil/Rucil.01.jpg","comics/rucil/Rucil.02.jpg","comics/rucil/Rucil.03.jpg","comics/rucil/Rucil.04.jpg","comics/rucil/Rucil.05.jpg","comics/rucil/Rucil.06.jpg","comics/rucil/Rucil.07.jpg","comics/rucil/Rucil.08.jpg","comics/rucil/Rucil.09.jpg","comics/rucil/Rucil.10.jpg","comics/rucil/Rucil.11.jpg","comics/rucil/Rucil.12.jpg"]
  },
  {
    number:1,
    title: 'The Placeholder for Testing',
    images:
    [
      "comics/placeholder/1.jpg", "comics/placeholder/2.jpg"
    ]
  }
];
