$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

        afterLoad: function (origin, destination, direction) {
            var loadedSection = $('this');

            if(destination.index==1){
                $('.bioCon').fadeIn('slow');
            }

            if(destination.index==2){
                $('.proCon_1').animate({
                    left:'+=65vw'
                },'slow')

                $('.antLionVideo').animate({
                    right:'+4rem'
                },'slow')
            }

            if(destination.index==3){
                $('.proCon_2').animate({
                    right:'+=65vw'
                },'slow')

                $('.missionXVideo').animate({
                    left:'+4rem'
                },'slow')
            }

            if(origin.index==2){
                $('.proCon_1').animate({
                    left:'-=65vw'
                })

                $('.antLionVideo').animate({
                    right:'-=65vw'
                },'slow')
            }
            
            if(origin.index==3){
                $('.proCon_2').animate({
                    right:'-=65vw'
                })

                $('.missionXVideo').animate({
                    left:'-=65vw'
                },'slow')
            }       
        },   
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
    
});


