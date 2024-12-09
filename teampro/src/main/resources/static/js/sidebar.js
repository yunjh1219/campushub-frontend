$(document).ready(function(){
    // depth1의 a 태그 클릭 시 depth2 메뉴 토글
    $(".snb_depth1 li > a").click(function(){
        var depth2 = $(this).next("ul");

        // depth2 메뉴가 화면상에 보일 때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( depth2.is(":visible") ){
            depth2.slideUp(100);  // 100ms 동안 슬라이드 업
            $(this).parent().removeClass("open");
        }else{
            depth2.slideDown(100);  // 100ms 동안 슬라이드 다운
            $(this).parent().addClass("open");
        }

        // 모든 다른 li 요소에서 active 클래스 제거
        $(".snb_depth1 li").removeClass("active");
        // 클릭된 요소에 active 클래스 추가
        $(this).parent().addClass("active");

        return false; // 클릭 시 페이지 이동 방지
    });

    // depth2의 a 태그 클릭 시 depth3 메뉴 토글
    $(".snb_depth2 li > a").click(function(){
        var depth3 = $(this).next("ul");
        

        // 클릭된 depth1 항목에 active 클래스 유지
        $(this).closest(".snb_depth1 > li").addClass("active");

        return false;  // 이벤트 버블링을 막음
    });
});