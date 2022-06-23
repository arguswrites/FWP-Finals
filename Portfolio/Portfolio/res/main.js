const colors = [
    [
    //light group
        "#21274b",//font
        "#c9d2df",//bg
    //dark group
        "#ded8b4",//font
        "#131415",//bg
    //others
        "#c7ccd1"
    ],
];

//opening nav bar

function nav(){
    let opt = document.getElementById('opt');
    let innav = document.getElementById('nav');

    function openNav(){
        opt.style.flex = '1';
        opt.style.marginRight = '3%';
    
        innav.style.display = "flex";
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
