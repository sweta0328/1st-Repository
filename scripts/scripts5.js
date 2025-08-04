const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from('.nlink', {
  stagger: 0.1,
  y: 10,
  duration: 2,
  ease: Power2,
  opacity: 0,
})
gsap.from(".anim2", {
  y:10,
  stagger: 0.2,
  opacity: 0,
  ease: Expo,
  duration:2,
})
//Shery.imageEffect("imgandtext",{
 // style:3,
 // debug:true,
//})
gsap.from("#imgandtext img", {
  y:50,
  stagger: 0.2,
  opacity: 0,
  ease: Expo,
  duration:2,
})
document.querySelector("#ftext button")
.addEventListener("mouseover",function(){
gsap.to("#future video",{
  opacity: 1,
  duration: 1,
  ease: Power2,
})
})

document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
gsap.to("#future video", {
  opacity: 0,
  duration: 1,
  ease: Power2,
})
})