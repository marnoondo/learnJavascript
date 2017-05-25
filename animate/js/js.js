$(function(){
    $('.box').css('opacity','.5')
    $('.box').click(function(){
        $(this).animate({left:'+=500px',height:'300px'},3000)
        .animate({top:'200px',width:'200px'},3000)
        .css('border','5px solid black')
    })
})