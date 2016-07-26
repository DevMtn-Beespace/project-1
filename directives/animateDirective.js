angular.module('rijksApp')
.directive('animateDirective', [function(){


  return{
    link: function(scope, elements, attr) {
      // console.log('link animate hit');
      // home page
      $('.lead-head').animate({height: "100px"});
      $('#home-explore-btn').hide();
      $('#home-explore-btn').fadeIn(4000);
      //about page
      $('.about-head').animate({"margin-top": "60px"}, "slow");
      $('.egg-1').hide().fadeIn(3000);
      $('.egg-2').hide().fadeIn(6000);
      $('.egg-3').hide().fadeIn(9000);
      $('.great-head').hide().fadeIn(11000);
      //gallery
      $('.long-title').hide().fadeIn(6000);

    }
  };

}]);
