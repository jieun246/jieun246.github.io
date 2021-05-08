/*!
* Start Bootstrap - Creative v6.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/

var modal = $(".modal"); 
var modalBody = modal.find(".modal-body");
var slideIndex = 1;

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    $(".move").click(function(e){
        e.preventDefault(); 
        var href = $(this).attr("href");
        var str = ""; 
        if(href == "1"){
            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>복지몰 모바일 웹 개발</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 쇼핑몰 모바일 웹 사이트 일부 구축<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2015.12~2016.02<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 3명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 특정 회원사의 요청한 것으로, 모바일 웹 쇼핑몰을 구축하였습니다. 이를 통해 기존에는 피씨로만 사용했던 쇼핑몰을 모바일로도 이용할 수 있게 되었으며, 모든 회원사에도 모바일 쇼핑몰을 구현하였습니다.</p>";
                        
            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>복지몰 사이트 리뉴얼</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 일부 사이트 보조 작업<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2016.09~2016.10<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 3명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 주요 고객층이 나이 드신 분들이라 사이트를 이용하는데 글자 크기가 작다든지 설명서 부분을 못 찾겠다는 등의 항의가 많았습니다. 사이트를 고객들 눈에 맞춰 직관적으로 리뉴얼하여 항의를 줄일 수 있었습니다.</p>"; 

            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>건강검진 예약시스템 개발</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 검강검진 병원 소개 및 병원 예약 시스템 개발<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2016.03~2016.10<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 1명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 기존에 있었던 예약시스템을 단독으로 맡았었고, 일일 예약 컷이 없어 병원에서 전화로 예약취소를 전달하는 부분을 예약 컷을 만들고 예약/미예약 현황을 볼 수 있도록 개선하였습니다. </p>"; 

            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>결제하기 포인트 추가</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 결제단, 관리자 페이지 수정<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2016.04~2016.06<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 1명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 자체 포인트가 추가됨에 따라 포인트 선 차감-후결제로 진행될 수 있도록 하였고, 관리자에게도 결제된 내용이 구분해서 보이도록 하였습니다.  </p>"; 
        } else if(href == "2"){
            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>네이버 매물센터 사이트 개발 및 유지보수 </strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 사용자(매물전송), 관리자 사이트 관리<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2017.04~2020.12<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 2명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 정책에 따라 변경되는 부분에 맞춰 매물 전송이 원활히 될 수 있도록 하였고, 운영팀과 실시간으로 전송 오류된 부분을 바로 피드백해주거나 개선할 점을 소통함으로써 사용자들이 이용하는 데 불편함을 최소화했습니다. 또한, 전송/상품 및 쿠폰 결제/미전송 리스트를 개발하여 관리자 사이트를 개선하였습니다.</p>"; 
        } else if(href == "3"){
            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>뉴스테이 시스템 개발</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 임대인, 임차인 사이트 개발 및 유지보수<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2018.11~2020.12<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 2명<br>"
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 2개 업체의 요청으로 진행됐던 프로젝트로 빌딩/호실 관리, 월별 임대료/관리비/연체료를 계산함으로써 임대인과 임차인이 편히 이용할 수 있도록 했습니다. </p>"; 
        } else{
            str+="<div class='header'>"; 
            str+="<strong class='primary-font'>공실클럽 사이트 리뉴얼</strong>"; 
            str+="</div><p>"; 
            str+="<span class='badge badge-pill badge-secondary'>역할</span> 일부 사이트 보조 작업<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>기간</span> 2020.09~2020.10<br>"; 
            str+="<span class='badge badge-pill badge-secondary'>인원</span> 5명<br>"; 
            str+="<span class='badge badge-pill badge-success'>결과 및 성과</span> 오래 운영된 사이트였으며, 작년 말에 종료한 익스플로러와 어도비 플레이어로 인해 리뉴얼이 필요하여 기간에 맞춰 사이트가 오픈될 수 있도록 하였습니다.</p>"; 
        }
            modalBody.html(str);
            modal.modal("show");
    });
})(jQuery); // End of use strict

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function showImage(){
    var str=""; 
    alert("폐쇄몰로, 이미지로 대체합니다.");
    str+='<div class="slideshow-container">';
    for(var i=1;i<6;i++){
        str+='<div class="mySlides">';
        str+='<img src="assets/img/work/네티웰'+i+'.png" style="width:100%">';
        str+='</div>';
    }  
    str+='<a class="prev" onclick="plusSlides(-1)">&#10094;</a>';
    str+='<a class="next" onclick="plusSlides(1)">&#10095;</a>';
    str+='</div>';
    str+='<br>';
    str+='<div style="text-align:center">';
    str+='<span class="dot" onclick="currentSlide(1)"></span>';
    str+='<span class="dot" onclick="currentSlide(2)"></span>';
    str+='<span class="dot" onclick="currentSlide(3)"></span>';
    str+='<span class="dot" onclick="currentSlide(4)"></span>';
    str+='<span class="dot" onclick="currentSlide(5)"></span>';
    str+='</div>';
                
    modalBody.html(str);
    showSlides(slideIndex);
    modal.modal("show");
}