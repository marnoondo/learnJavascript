$(function(){
    var $comment=$('#comment');
    // console.log($comment)
    $('.bigger').click(function(){
        // console.log(1)
        if(!$comment.is(':animated')){
            console.log(2)
            if($comment.height()<500){
                $comment.animate({height:'+=50'},400)
            }
        }
    })
    $('.smaller').click(function(){
        // console.log(3)

        if(! $comment.is(':animated')){
            console.log(4)
            if($comment.height()>50){
                $comment.animate({height:'-=50'},400)
            }
        }
    })
})
alert(1)