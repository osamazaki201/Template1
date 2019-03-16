/* global $,document,window*/

$(document).ready(function () {
    "use strict";
        
    $(".carousel").carousel({
        interval:4000
    });
    // To Show Color Option Box
    $(".gear-check").click(function(){
        $(".color-option").fadeToggle(500);
    });
    //Change Theme Color On Click
    var ColorLi = $(".color-option ul li");
    
    ColorLi
    .eq(0).css("backgroundColor","crimson").end()
    .eq(1).css("backgroundColor","#9b59b6").end()
    .eq(2).css("backgroundColor","#0652DD").end()
    .eq(3).css("backgroundColor","#16a085").end()
    .eq(4).css("backgroundColor","darkgoldenrod");
    
    
    ColorLi.click(function(){
       $("link[href*='theme']").attr("href",$(this).attr("data-value"));
        //console.log( $(this).attr("data-value") );
    });
    
    
    //loading Screen
    
    $(window).load(function(){
         $("body").css("overflow","auto");
        $(".loading-overlay .spinner").fadeOut(500,
         function(){
             $(this).parent().fadeOut(2000,
             function(){
                 $(this).remove();  
             });
        });
    });
    
    
    //Scroll Top
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 700)
        {
          scrollButton.fadeIn();  
        }else{
            scrollButton.fadeOut();  
        }
    });
    //click button to scroll
    scrollButton.click(function(){
        $("html,body").animate({scrollTop:0},600);
    });
    
    
    
    
});