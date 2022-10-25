/* Swiper elements index.html */
jQuery(document).ready(function sliderSale() {
    let swiper = new Swiper(".mySwiper", {
        speed: 800,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        }

    });
});

jQuery(document).ready(function sliderNews() {
    let swiper = new Swiper(".swiperNew", {
        speed: 1000,
        spaceBetween: 50,
        slidesPerGroup: 1,
        slidesPerView: 'auto',
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
        }
    });
});

/* Towns toggle */
$(".towns").click(function() {
        $(".town-arrow").toggleClass("open");
    });

/* Compare click */
$(document).on('mouseup', function(e){ // При нажатии на документ
        let s = $('.Product__compare.active'); // берём .Product__compare.active
        if(!s.is(e.target) && s.has(e.target).length === 0) {
        // Если нажат не он и не его дочернии И сам он существует
        s.removeClass('active'); // То удаляем у него класс .active
        }
    });

$(".product__button-like--compare").on('click', function(){
        $(".Product__compare").toggleClass('active');
    });


/* Кнопка поиска */

$(".btn_soc").click(function(){
  $(".input").toggleClass("active").focus;
  $(this).toggleClass("animate");
  $(".input").val("");
});


/* Delivery button */

function openDelivery(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

};

/*

$(".tablinks").on('click', function(){
        var i, tabtext;
         $(".tabtext").toggleClass("active");
        tabtext = document.getElementsByClassName("tabtext");
        if (tabtext.classList.contains (" active") {
            tabtext.currentTarget.className += " active";
        }

            });
*/
/*
function selectClass(evt, tabTxt) {
    var i, tabtext, tablinks;
    tablinks = document.getElementsByClassName("tablinks");
    tabtext = document.getElementsByClassName("tabtext");
    for (i = 0; i < tabtext.length; i++) {
        tabtext[i].className = tabtext[i].className.replace(" active", "");
    }
    document.getElementById(tabTxt).currentTarget.className += " active";
}
*/


/* Order */

/* order accordion */

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.paddingTop = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.paddingTop = "50px";
    }
  });
};




/* Выбор способа доставки */
function openOrderDelivery(evt) {
    var i, panel__main__btn__delivery;
    panel__main__btn__delivery = document.getElementsByClassName("panel__main__btn__delivery");
    for (i = 0; i < panel__main__btn__delivery.length; i++) {
        panel__main__btn__delivery[i].className = panel__main__btn__delivery[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
};

/* Выбор даты доставки */
function selectDate(evt) {
    var i, panel__main__btn__date;
    panel__main__btn__date = document.getElementsByClassName("panel__main__btn__date");
    for (i = 0; i < panel__main__btn__date.length; i++) {
        panel__main__btn__date[i].className = panel__main__btn__date[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
};

/* Выбор способа оплаты */

function selectPayment(evt) {
    var i, panel__payments__item;
    panel__payments__item = document.getElementsByClassName("panel__payments__item");
    for (i = 0; i < panel__payments__item.length; i++) {
        panel__payments__item[i].className = panel__payments__item[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
};


/* Личный кабинет */

/* nav bar */
document.getElementById("defaultOpen").click();



function openPersonality(evt, navName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("personality__column__main");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("personality__column__nav__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(navName).style.display = "block";
    evt.currentTarget.className += " active";
}


/* Scroll Items */
