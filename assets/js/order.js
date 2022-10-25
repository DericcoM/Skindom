/* Order */

/* order accordion */

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
            panel.style.paddingTop = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.paddingTop = "50px";
        }
    });
}




/* Выбор способа доставки */
function openOrderDelivery(evt) {
    let i, panel__main__btn__delivery;
    panel__main__btn__delivery = document.getElementsByClassName("panel__main__btn__delivery");
    for (i = 0; i < panel__main__btn__delivery.length; i++) {
        panel__main__btn__delivery[i].className = panel__main__btn__delivery[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

/* Выбор даты доставки */
function selectDate(evt) {
    let i, panel__main__btn__date;
    panel__main__btn__date = document.getElementsByClassName("panel__main__btn__date");
    for (i = 0; i < panel__main__btn__date.length; i++) {
        panel__main__btn__date[i].className = panel__main__btn__date[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

/* Выбор способа оплаты */

function selectPayment(evt) {
    let i, panel__payments__item;
    panel__payments__item = document.getElementsByClassName("panel__payments__item");
    for (i = 0; i < panel__payments__item.length; i++) {
        panel__payments__item[i].className = panel__payments__item[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}
