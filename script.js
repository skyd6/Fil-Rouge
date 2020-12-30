    let element = document.getElementById('element');
    let son = document.getElementById('son'); 
     
    element.onmouseover = function(){
        son.play();
    };
     
    element.onmouseout = function(){ 
        son.pause(); 
        son.currentTime=0;
    };
