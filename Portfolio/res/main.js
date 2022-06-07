function dmode(){
    let body = document.querySelector('body');
    let nav = document.getElementsByClassName('nav');

    body.style.backgroundColor = rgba(24,26,26,1);
    nav.style.color = white;
}


function nav(){
    let opt = document.getElementById('opt');
    let innav = document.getElementById('nav');
    let outnav = document.getElementsByClassName('nav');
    let panel = document.getElementsByClassName('panel_board'); 

    function openNav(){
        outnav.style.backgroundColor = "#0000ff";

        opt.style.flex = '1';
        opt.style.marginRight = '2.5%';
        opt.style.width == '7%';
    
        innav.style.display = "flex";

        //panel.style.filter = "brightness(50%)";
        console.log('open');
    }

    function closeNav(){
        innav.style.display = "none";
        
        opt.removeAttribute('style');
    
        console.log('close');
    }
    
    if(innav.style.display == "none"){
        openNav();
    }else{
        closeNav();
    }
}