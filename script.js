/* ---------------------------------page 1--------------------------- */
var tl=gsap.timeline()
tl.from("#navbar",{
    opacity:0,
    delay:0.3
})
tl.from("#navbarimg img, #navbar2 h3, #navbar3 i, #navbar3 h3",{
    opacity:0,
    y:-20,
    duration:0.3,
    delay:0.2,
    stagger:0.1
})


tl.from(".div h1",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.5
})
tl.from(".imgh1img", {
  duration: 0.5,
  x: -200,
  stagger: -0.1,
  rotation: -360,
  scale: 0,
  opacity: 0,
});
tl.from("#text2,#text21,#text22",{
    opacity:0,
    scale:0,
    stagger:0.1,
    duration:0.5
})
tl.from("#textimg1 img,#textimg2 h4,#textimg3",{
    opacity:0,
    scale:0,
    stagger:0.3,
    duration:0.4
})

/*--------------------------------- page 2 ---------------------------------- */

var tl1=gsap.timeline()
tl1.from("#page2 .page2class", {
  opacity: 0,
  scale: 0,
  y: 200,
  stagger: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    scrub: true,
    start: "top 75%",
    end: "top 50%",
  },
});
tl1.from("#pp1,#pp12,#pp2,#pp21,#pp22,#pp31,#pp32, #pp41,#pp42", {
  delay: 1,
  stagger:1,
  duration: 2,
  opacity: 0,
  scale: 0,
  scrollTrigger: {
    trigger: "#page2 .page2class ",
    scroller: "body",
    scrub: true,
    start: "top 75%",
    end: "top 50%",
  },
});