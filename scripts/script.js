
let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x+"px";
  crsr.style.top = dets.y+"px";
  blur.style.left = dets.x +"px";
  blur.style.top = dets.y +"px";
})
let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
elem.addEventListener('mouseenter', function(){
  crsr.style.scale = 3
  crsr.style.border = "0.5px solid #fff"
  crsr.style.backgroundColor = "transparent"
})
elem.addEventListener('mouseleave', function(){
  crsr.style.scale = 1
  crsr.style.border = "0px solid #95C11E"
  crsr.style.backgroundColor = "#95C11E"
})
})

gsap.to("#nav", {
backgroundColor:"black",
height: "110px",
duration: "1",
scrollTrigger: {
  trigger: "#nav",
  scroller: "body",
  //markers:true,
  start: "top -10%",
  end: "top -11%",
  scrub: 1,
}
})

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -70%",
    //markers:"true",
    scrub: 2,
  }
})

//marquee tag ka use krke bhi hm scroller bana skte hain.

gsap.from("#about-us img, #about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    //markers:true,
    start:"top 70%",
    end: "top 65%",
    scrub: 1
  }
})

gsap.from(".card",{
scale: 0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    //markers:true,
    start:"top 70%",
    end: "top 65%",
    scrub: 1
  }
})
gsap.from("#colon",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger: "#colon",
    scroller:"body",
    start: "top 55%",
    end:"top 50%",
    scrub:3
  }
})
gsap.from("#colon1",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger: "#colon",
    scroller:"body",
    start: "bottom 55%",
    end:"bottom 50%",
    scrub:3
  }
})
gsap.from("#page4>h1",{
  y:50,
  scrollTrigger:{
    trigger: "#page4>h1",
    scroller:"body",
    start: "top 7%",
    end:"top 70%",
    scrub:3
  }
})


/*.elem img{
  width: 90%;
  height: 65%;
  object-fit: cover;
  transition: all ease 0.5s;
  scale: 1.1;}


    
*/