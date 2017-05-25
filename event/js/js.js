// $(function(){
//     $('#panel h5.head').click(function(){
//         $(this).css('backgroundColor','blue')
//     }).mousemove(function(){
//         $(this).css('backgroundColor','yellow')
//     }).mouseout(function(){
//         $(this).css('backgroundColor','green')
//     })
// })
// $(function(){
//     $('#panel h5.head').toggle(function(){
//         $(this).next().show();
//     })
// })
// $(function(){
//     $('#panel h5.head').toggle(function(){
//         $(this).next().toggle();
//     },function(){
//         $(this).next().toggle();  
//     })
// })
$(function(){
    $('#panel h5.head').toggle(function(){
        $(this).next().fadeOut()
    },function(){
        $(this).next().fadeIn()
    });
})