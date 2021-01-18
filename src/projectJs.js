var isUnitySlided = false;
var isCsharpSlided = false;
var isMayaSlided = false;

$(document).ready(function () {

    var textWrapper = document.querySelector('.ml2');
    $('.ml2').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });


        anime.timeline({ loop: false })
        .add({
            targets: '.ml2 .letter',
            translateY: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: function (el, i) {
                return 300 + 30 * i;
            }
        });
        
    if(screen.width>375){
        $(".unityIcon").click(function () {
            //alert("yes");
            if (isUnitySlided == false) {
                $(".unityCon").animate({
                    left: '+=30vw'
                });

                $(".unityIcon").animate({
                    left: '+=30vw'
                });

                $(".unityCon").css("width", "25vw");

                isUnitySlided = true;
                $(".unityVideo").fadeIn(1000);


            } else if (isUnitySlided == true) {
                $(".unityCon").animate({
                    left: '-=30vw'
                });

                $(".unityIcon").animate({
                    left: '-=30vw'
                });

                $(".unityCon").css("width", "40vw");
                isUnitySlided = false;
                $(".unityVideo").fadeOut(500);
            }
        });


        $(".cSharpIcon").click(function () {
            if (isCsharpSlided == false) {
                $(".leftBg").animate({
                    width: '90vw'
                }, "slow");

                $(".cSharpCon").animate({
                    left: '+=30vw'
                }, "slow");

                $(".cSharpIcon").animate({
                    left: '+=30vw'
                }, "slow");

                $(".cSharpCon").css("width", "25vw");
                isCsharpSlided = true;

                $(".cSharpVideo").fadeIn(1000);
            } else if (isCsharpSlided == true) {
                $(".leftBg").animate({
                    width: '45vw'
                }, "slow");

                $(".cSharpCon").animate({
                    left: '-=30vw'
                }, "slow");

                $(".cSharpIcon").animate({
                    left: '-=30vw'
                }, "slow");

                $(".cSharpCon").css("width", "30vw");
                isCsharpSlided = false;

                $(".cSharpVideo").fadeOut(500);
            }
        });


        $(".mayaIcon").click(function () {

            if (isMayaSlided == false) {
                $(".rightBg").animate({
                    width: '90vw'
                }, "slow");

                $(".mayaCon").animate({
                    left: '+=30vw'
                }, "slow");

                $(".mayaIcon").animate({
                    left: '+=30vw'
                }, "slow");

                $(".mayaVideo").fadeIn(1000);



                $(".mayaCon").css("width", "30vw");

                $('html, body').animate({
                    scrollTop: $(".rightBg").offset().top
                }, 500);

                isMayaSlided = true;
            } else if (isMayaSlided == true) {
                $(".rightBg").animate({
                    width: '45vw'
                }, "slow");

                $(".mayaCon").animate({
                    left: '-=30vw'
                }, "slow");

                $(".mayaIcon").animate({
                    left: '-=30vw'
                }, "slow");

                $(".mayaCon").css("width", "30vw");
                isMayaSlided = false;

                $(".mayaVideo").fadeOut(500);
            }
        });
    }

});