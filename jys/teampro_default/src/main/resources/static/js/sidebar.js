// html dom 이 다 로딩된 후 실행된다.
$(document).ready(function(){
    // depth1의 a 태그 클릭 시 depth2 메뉴 토글
    $(".snb_depth1 li > a").click(function(){
        var depth2 = $(this).next("ul");

        // depth2 메뉴가 화면상에 보일 때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( depth2.is(":visible") ){
            depth2.slideUp();
            // 화살표 회전 원래대로 되돌리기
            $(this).parent().removeClass("open");
        }else{
            depth2.slideDown();
            // 화살표 180도 회전
            $(this).parent().addClass("open");
        }
    });
});

// depth2의 a 태그 클릭 시 depth3 메뉴 토글
$(".snb_depth2 li>a").click(function(){
    var depth3 = $(this).next("ul");

    // depth3 메뉴가 화면상에 보일 때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if( depth3.is(":visible") ){
        depth3.slideUp();
        // 화살표 회전 원래대로 되돌리기
        $(this).parent().removeClass("open");
    }else{
        depth3.slideDown();
        // 화살표 180도 회전
        $(this).parent().addClass("open");
    }

    // 클릭 시 부모 메뉴인 depth2는 열리지 않도록
    return false;  // 이벤트 버블링을 막음
});

