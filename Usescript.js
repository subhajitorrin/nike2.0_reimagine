window.addEventListener('DOMContentLoaded',()=>{
    let coord={
        x:0,
        y:0
    }
const Trail = document.querySelectorAll('.CursorTrail')
Trail.forEach(item=> {
    item.x=0;
    item.y=0;
});

var timesPerSecond = 50000; // how many times to fire the event per second
var wait = false;

    window.addEventListener('mousemove',(e)=>{
    if(!wait){
        coord.x = e.clientX
        coord.y = e.clientY
        wait=true;
        setTimeout(function () {
            wait = false;
        }, 1000 / timesPerSecond);
    }
  
    })
    function TrailEffect(){
    let X=coord.x
    let Y=coord.y
        Trail.forEach(function(item,index){
            item.style.left= X-3 + 'px'
            item.style.top= Y-3 + 'px'
        item.x = X;
        item.y = Y
        item.style.scale=(Trail.length - index)/Trail.length
        const NextTrail = Trail[index+1]||Trail[0];
        X+=(NextTrail.x - X)*0.1;
        Y+=(NextTrail.y - Y)*0.1;
    })
    requestAnimationFrame(TrailEffect)
    }
    TrailEffect();  
})