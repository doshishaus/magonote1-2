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

function openModal(){
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(()=>{
        modal.classList.add("show");
    },10);
}

function closeModal(){
    const modal = document.getElementById("myModal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 500);
}

window.onclick = function(event){
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // ページロード時にフェードイン
    var body = document.querySelector('body');
    body.classList.add('visible');
  });
  
  window.addEventListener("beforeunload", function(event) {
    // ページアンロード時にフェードアウト
    var body = document.querySelector('body');
    body.classList.add('fade-out');
  });