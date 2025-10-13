//ハンバーガー開閉ロジック
$(function(){
    function hamburger() {
        $('.hamburger').toggleClass('active');
        $('#navi').toggleClass('active');
    }
    $('.hamburger').on('click',function(){
        hamburger();
    });
    $('#navi a').on('click',function(){
        hamburger();
    }); 
});