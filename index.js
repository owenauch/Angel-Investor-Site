//Adds emphasis to text in image and changes from fixed to absolute positioning
$(document).ready( function() {

    if (($(window).width()) > 950)
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 615;
        $('.meet-nick').css({'height':adj+'px'});
    }
    else if (($(window).width()) < 615)
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 700;
        $('.meet-nick').css({'height':adj+'px'});
    }
    else
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 900;
        $('.meet-nick').css({'height':adj+'px'});
    }

    $(".nav-icon").click(function(){
        $("nav").slideToggle();
        $(this).toggleClass("rotate");
    });
});

// $(window).onload(headScroll);
$(window).scroll(headScroll);

//Keeps pic width and height at 1:1 ratio
window.onresize = function() {
    var cw = $('.bio-pic').width();
    $('.bio-pic').css({'height':cw+'px'});

    if (($(window).width()) > 950)
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 615;
        $('.meet-nick').css({'height':adj+'px'});
    }
    else if (($(window).width()) < 615)
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 700;
        $('.meet-nick').css({'height':adj+'px'});
    }
    else
    {
        //Resize height of section to contain bio when resized
        var divHi = $('.bio').height();
        //Adjust height to be div height by subtracting original text height and adding height of section
        var adj = divHi - 414 + 900;
        $('.meet-nick').css({'height':adj+'px'});
    }
};

function headScroll() {
    var scrl = $(window).scrollTop();
    //add emphasis on entrepreneur at scroll 50
    if (scrl > 50)
    {
        $(".emp1").addClass("emp-scroll");
    }
    else
    {
        $(".emp1").removeClass("emp-scroll");
    }

    //add emphasis to takeoff and change positioning to absolute at scroll 175
    if (scrl > 175)
    {
        $(".headline").addClass("headline-scroll");
        $(".emp2").addClass("emp-scroll");
        if (($(window).width()) < 615)
        {
            $("nav").slideUp();
        }
    }
    else
    {
        $(".headline").removeClass("headline-scroll");
        $(".emp2").removeClass("emp-scroll");
    }
}

function thanks() {
    document.getElementById("contact").innerHTML = "Thank you! Your message has been submitted, and someone will reach out to you soon."
}
