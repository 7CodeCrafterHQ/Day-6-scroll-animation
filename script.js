var tl = gsap.timeline()
tl.from("#content:nth-child(odd)",{
    x:300,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#content",
        end:"top -280%",
        start:"top 60%",
        scrub:2
    }
})
tl.from("#content:nth-child(even)",{
    x:-300,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        scroll:"#main",
        trigger:"#content",
        end:"top -280%",
        start:"top 140%",
        scrub:2
    }
})


gsap.to(".box1",{
    x:0,
})
gsap.to(".box2",{
    x:0,
})
gsap.to(".box3",{
    x:0,
})