gsap.to("#main .contain",{
    y:400,
    opacity:0,
    scrollTrigger:{
        trigger:"#main .contain",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 30%",
        end:"bottom 0%",
    }
})
gsap.from("#main .img",{
    y:-500,
    scrollTrigger:{
        trigger:"#main .img",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 30%",
        end:"bottom 0%",
    }
})
gsap.from("#main .img1",{
    y:-300,
    scrollTrigger:{
        trigger:"#main .img1",
        scroller:"body",
        scrub:2,
        // markers:true,
        start:"top 10%",
        end:"bottom 0%",
    }
})

gsap.from("#main .contain h4",{
    y:-20,
    duration:.7,
    yoyo:-1,
    repeat:-1,
    
    
})
