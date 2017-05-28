$(function(){
    var hash = window.location.hash.slice(1);
    var type = "world"; //记录数据类型
    var num = 1;   //记录页码
    //处理hash
    if( hash === "" ){
        num = 1;
        type = "world"
    }else{
       var arr = hash.split("&"); //["p=1","type=world"]
       var obj = {};
       arr.forEach(function (item){
            var a = item.split("=");
            console.log( a );
            obj[a[0]] = a[1];
       })

       console.log( obj );
       //如果在hash中不存在某一个，设置默认参数
       num = obj["p"] || 1;
       type = obj["type"] || "world";

    }

    if( type === "world"){
        $("#leftBox a").eq(0).addClass("red")
    }else if(type === "school"){
        $("#leftBox a").eq(1).addClass("red")
    }else{
        $("#leftBox a").eq(0).addClass("red");
        type="world";
        window.location.hash = 'type='+type+"&p="+num;
    }
    

    getInfoAjax(type,(num-1)*5);



    //4. 封装一个ajax函数用于发送指定地址的请求
    function getInfoAjax(type,index){
        $.ajax({
            url:"http://localhost:8088/recruit/php/new.php",
            data:{
                type:type,
                start:index
            },
            dataType:"json",  //数据的类型 “json” 获取到的数据是json格式转换后的对象
            success(data){
               // console.log( JSON.parse(data) );
               //展示到页面中
               $("#loading").hide();
               //渲染招聘信息
               render(data);
               //生成页数
               if($("#pages").attr("done") !== "true" ){

                   createPage(data)
                   //绑定事件
                   addEvent();
               }
            }
        });
    }
    //2. 生成分页
    //生成分页
    function createPage(d){
        var pages = Math.ceil(d.count/5);  
        var str = '';
        for( var i = 0; i < pages; i++ ){
            str += '<span>'+(i+1)+'</span>'
        }

        $("#pages").html(str);

        $("#pages").find("span").eq(num-1).css("background","red");

        //生成页数之后，加个状态，说明已经渲染了。

        $("#pages").attr("done",true);
    }   
    //3. 分页父级绑定事件
    function addEvent(){
       $("#pages").on("click","span",function (){
            // 标签中的内容拿到当前的页码
           var currentPage =  $(this).text().trim();
           /*
            每一页是5条
                第一页   下标 0     (1-1) * 5
                第二页   下标 5     (2-1) * 5
                第三页   下标 10    (3-1) * 5

                总公式 (页码-1)*5
           */

           getInfoAjax(type,(currentPage-1)*5);
           //改变hash为当前页
           window.location.hash = "type="+type+'&p='+currentPage
           num = currentPage;
           $("#pages").find("span").css("background","");
           $(this).css("background","red");
       })     
    }

    //用来生成招聘信息结构的
    function InfoHtml(d){
        var html = d.data.map(function (item){
             return `<div><p class="block"><span>${item.num}</span><span>职位需求：${item.job}</span><span>需求人数：${item.pNum}名</span><span>${item.data}</span></p><p class="gays">${item.ask}<a href="javascript:void(0);">【查看详情】</a></p></div>`   
        }).join("");

        return html;
    }
    //1. 生成招聘信息结构
    //渲染招聘信息区域内容
    function render(d){
       

       $("#info").html(InfoHtml(d));
    }

    //点击校园招聘和社会招聘按钮

    $("#leftBox").on("click","a",function (){
        var text = $(this).text().trim();

        var index = $(this).index();
        $("#pages").attr("done",false);

        $("#leftBox a").removeClass("red");
        $(this).addClass("red");

        if( index === 0 ){
            console.log('社会招聘'); 
            //请求ajax，获取社会招聘的数据

            getInfoAjax("world",1);
            type = 'world';
            num = 1;
            window.location.hash = "type="+type+'&p='+num;
        }else if(index === 1){
            console.log('校园招聘'); 
            getInfoAjax("school",1);
            num = 1;
            type = 'school';
            window.location.hash = "type="+type+'&p='+num;
        }

        /*if(text === "校园招聘"){
            console.log('校园招聘'); 
        }else{

        }*/
        
    })
})