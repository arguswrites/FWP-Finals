const colors = [
    [//light group
        "#000",//font
        "#DDD3CB"//bg
    ], 
    [ //dark group
        "#fff",//font
        "#181A1A"//bg
    ],
    [//others
        "#696A8A", //nav
        "#aaa"//
    ]
];


function nav(){
    let opt =  $('#opt');
    let innav = $('#nav');
    let outnav = $('.nav');
    let panel =  $('.panel_board'); 

    function openNav(){
        opt.css(
            'flex', 1,
            'marginRight', '2.5%',
            'width', '7%'
        );

        innav.css("display", "flex");

        outnav.css("background-color", colors[2][0]);
        panel .css("brightness","50%");
        console.log('open')
    }

    function closeNav(){
        $('#opt').remove('style');
        
        $('#nav').css("display", "none");
        console.log('close')
    }

    if(innav.css("display","none")){
        openNav();
    }else{
        closeNav();
    }

}