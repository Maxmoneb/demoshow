

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  TweenMax.from(".active",1,{
    opacity:0,
    x:-20,
    ease:Expo.easeInOut
 });

 TweenMax.from("#mockup",1,{
  opacity:0,
  delay:2,
  y:20,
  ease:Expo.easeInOut
});
TweenMax.from("#ani",1,{
  opacity:0,
  delay:1,
  y:20,
  ease:Expo.easeInOut
});
TweenMax.from("#ani1",1,{
  opacity:0,
  delay:1.6,
  y:20,
  ease:Expo.easeInOut
});









//  ball animations

  const flightPath = {
    curviness: 1.25,
    autoRotate:true,
    values:[
      {x:window.innerWidth, y:-100},
      {x:window.innerWidth, y:300},      
    ]
  }

  const  tween = new TimelineLite();
  tween.add(
    TweenLite.to('.paper-plane' ,6, {
      bezier : flightPath,
      ease:Power1.easeInOut
    })
  );

  const controller = new ScrollMagic.Controller();
  const scene = new ScrollMagic.scene({
    triggerElement:'.mainheaderba',
    duration:1000,
  })
 .setTween(tween)
  .addIndicators()
  .addTo(controller);







  