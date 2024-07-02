$(document).ready(function () {
    $('.your-class').slick({
        dots: true,
        arrows: true,
        autoplay: false,
    });
    // 初期設定
    $('.content').addClass('slide-1');

    // スライド変更時に背景を変更
    $('.your-class').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.content').removeClass(function (index, className) {
            return (className.match(/(^|\s)slide-\S+/g) || []).join(' ');
        });
        $('.content').addClass('slide-' + (nextSlide + 1));
    });
});

document.addEventListener("DOMContentLoaded",function(){
    const checkItems = document.querySelectorAll(".checklist-button");

    checkItems.forEach(item=>{
        item.addEventListener("click",function(){
            const isChecked = this.getAttribute("data-checked")==="true";
            this.setAttribute("data-checked",!isChecked);

            if(isChecked){
                this.classList.remove("checked");
            }else{
                this.classList.add("checked");
            }
        });
    });
});

