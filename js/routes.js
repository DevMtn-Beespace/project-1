angular.module('rijksApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        //This is a catch all for our routes

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "views/home.html"
            })
            .state('gallery', {
                url: "/gallery",
                templateUrl: "views/gallery.html",
                controller: "galleryCtrl" // put the click function to get more art in this controller
            })
            .state('about', {
                url: "/about",
                templateUrl: "views/about.html"
            })
            // .state('search', {
            //     url: "/search",
            //     templateUrl: "views/search.html",
            //     controller: "searchCtrl" // put the logic to toggle the favorite artist menus here, as well as main search
            // })

    });
