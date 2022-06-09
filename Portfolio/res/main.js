const colors = [
    [//light group
        "#21274b",//font
        "#c9d2df"//bg
    ], 
    [ //dark group
        "#ded8b4",//font
        "#131415"//bg
    ],
    [//others
        "#ffb185", //nav
        "#aaa"//
    ]
];

function dmode(){
    let body = document.querySelector('body');
    let nav = document.getElementsByClassName('nav');

    function dm(){
        body.style.backgroundColor = colors[1][1];
        nav.style.color = colors[1][0];
        console.log('Changed to dark mode');
    }
    function lm(){
        body.style.backgroundColor = colors[0][1];
        nav.style.color = colors[0][0];
        console.log('Changed to light mode');
    }

    if(nav.style.color = colors[0][0]){
        lm();
    } else{
        dm();
    }

}


function nav(){
    let opt = document.getElementById('opt');
    let innav = document.getElementById('nav');

    function openNav(){
        opt.style.flex = '1';
        opt.style.marginRight = '2.5%';
        opt.style.width == '7%';
    
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