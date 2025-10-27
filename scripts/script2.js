gsap.from("#img1", {
  opacity: 0,
  duration: 1,
  delay:0.2,
  y:60,
})

gsap.from("#img2", {
  opacity: 0,
  duration: 1,
  delay:0.2,
  x:50,
})
gsap.from("#img3", {
  opacity: 0,
  duration: 1,
  delay:0.2,
  y:-60,
})
gsap.from("#main h1", {
  opacity: 0,
  duration: 1,
  delay:0.2,
 
})
gsap.from("#page2 h5", {
  opacity: 0,
stagger: 0.5,
  scrollTrigger:{
    trigger: "#page2 h5",
    scroller: "body",
    start: "top 60%",
    //markers:"true",
  }
})
gsap.from("#page2 h1", {
  opacity: 0,
stagger: 0.5,
  scrollTrigger:{
    trigger: "#page2 h5",
    scroller: "body",
    start: "top 60%",
   // markers:"true",
  }
})
gsap.from("#page2 #about-us", {
  opacity: 0,
stagger: 0.5,
  scrollTrigger:{
    trigger: "#page2 h5",
    scroller: "body",
    start: "top 60%",
    //markers:"true",
  }
})

