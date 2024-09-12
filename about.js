const lenis = new Lenis({
    duration:1.2,
    easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t))
});
function raf(time){
    lenis.raf(time);scrollTrigger.update();
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({pasued:true});

timeln.fromTo(col_left,{y:0},{y:'170vh',duration:1,ease:'none'},0);

const scroll_1 = scrollTrigger.create({
    animation : timeln,
    trigger:section_1,
    start:'top top',
    end:'bottom center',
    scrub:true,
});