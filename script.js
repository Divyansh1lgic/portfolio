function page1animation(){
    var tl = gsap.timeline()

tl.from("#class1 h1 ,#class2 h3",{
    y : -50,
    opacity: 0 ,
    duration:0.6,
    delay : 0.5,
    stagger:0.2,
})

tl.from(".introline1,.introline2,.introline3 , #part1 button",{
    x : -250,
    opacity:0,
    duartion:0.4,
    stagger:0.2,
})

tl.from("#email,#number,#location",{
    z : 50,
    opacity:0,
    duartion:0.1,
    stagger:0.2,
})


tl.from("#part2 img",{
    z :-200,
    opacity:0,
    duartion:0.1,
    stagger:0.2,
})

}

page1animation()

function page2animation(){
var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 20%",
        end:"top 90%",
        
    }
})

tl1.from("#myimage",{
  x:-100,
  opacity:0,
  duration:0.5,
  delay:0.1,
})

tl1.from(".sec2part1,.sec2part2,.sec2part3, #aboutme button",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger:0.2,
  })
  
  
tl1.from("#name, #age, #from, #mail",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger:0.2,
  })


}

page2animation()

function page3animation(){
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 20%",
        end:"top 90%",       
    }
})

tl2.from("#games,#restraunt",{
    y:-100,
    opacity:0,
    duration:0.7,
    delay:0.4,
  })
  
tl2.from("#websiteclone,#todolist",{
    y:100,
    opacity:0,
    duration:0.7,
    delay:0.4,
  })
   
tl2.from("#text1, #text2, #text3, #text4 ",{
    y:50,
    opacity:0,
    duration:0.7,
    delay:0.4,
  })
  
}

page3animation()

