//set up ScrollMagic
  var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
          triggerHook: 'onLeave'
      }
  });


  //pin the navigation
  var pin = new ScrollMagic.Scene({
      triggerElement: '#nav'
  }).setPin('#nav', {pushFollowers: false}).addTo(controller);

