//content만 갱신
$(document).ready(function() {
    // 링크 클릭 시 content만 갱신
    $("a").click(function(e) {
        e.preventDefault(); // 링크 클릭 기본 동작 막기

        var url = $(this).attr('href'); // 클릭한 링크의 URL을 가져옴

        // Ajax 요청을 통해 content 영역만 갱신
        $.ajax({
            url: url,
            method: 'GET',
            success: function(response) {
                // 새로운 content만 갱신
                $(".content").html($(response).find(".content").html());
                window.history.pushState({path: url}, '', url);  // URL 변경
            }
        });
    });
});

$(document).ready(function() {
    // 페이지 로드 시 저장된 active 상태 복원
    var activeDepth1 = sessionStorage.getItem('activeDepth1');
    if (activeDepth1) {
        $(".snb_depth1 li").removeClass("active");
        $(activeDepth1).addClass("active");
        $(activeDepth1).children("ul").slideDown(100); // 해당 depth2 메뉴 펼치기
    }

    // depth1의 a 태그 클릭 시 depth2 메뉴 토글
    $(".snb_depth1 li > a").click(function() {
        var depth2 = $(this).next("ul");

        // depth2 메뉴가 화면상에 보일 때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if (depth2.is(":visible")) {
            depth2.slideUp(100);  // 100ms 동안 슬라이드 업
            $(this).parent().removeClass("open");
        } else {
            depth2.slideDown(100);  // 100ms 동안 슬라이드 다운
            $(this).parent().addClass("open");
        }

        // 모든 다른 li 요소에서 active 클래스 제거
        $(".snb_depth1 li").removeClass("active");
        // 클릭된 요소에 active 클래스 추가
        $(this).parent().addClass("active");

        // 활성화된 메뉴를 sessionStorage에 저장
        sessionStorage.setItem('activeDepth1', $(this).parent()[0].outerHTML);

    });

    // depth2의 a 태그 클릭 시, 페이지 이동 전에 상태 유지
    $(".snb_depth2 li > a").click(function() {
        var depth1 = $(this).closest(".snb_depth1 > li");
        // 클릭된 depth1 항목에 active 클래스 유지
        depth1.addClass("active");

        // 이동 시에도 sessionStorage에 저장
        sessionStorage.setItem('activeDepth1', depth1[0].outerHTML);
    });

    // depth3의 a 태그 클릭 시 페이지 이동 허용
    $(".snb_depth3 li > a").click(function() {
        return true; // 페이지 이동을 허용
    });
});