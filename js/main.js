"use strict";

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll(".idc-bg-wrapper"));
    banners.forEach(function (elem) {
        return (elem.style.width = document.documentElement.clientWidth + "px");
    });
}

// // открытие и закрытие "списков вакансий" и выбор городов
// function openCloseVacancy() {
//     const burgerBtns = document.querySelectorAll(".idc-btn-burger");
//     for (let burgerBtn of burgerBtns) {
//         burgerBtn.addEventListener("click", function (e) {
//             e.preventDefault();
//             burgerBtn.classList.toggle("open");
//         });
//     }
//     window.addEventListener("click", (e) => {
//         // при клике в любом месте окна браузера
//         const target = e.target; // находим элемент, на котором был клик
//         if (
//             !target.closest(".idc-burger") &&
//             !target.closest(".idc-btn-burger")
//         ) {
//             for (let burgerBtn of burgerBtns) {
//                 burgerBtn.classList.remove("open");
//             }
//         }
//     });
// }

// открытие и закрытие "списков вакансий" и выбор городов
const burgerBtns = document.querySelectorAll(".idc-btn-burger");
for (let burgerBtn of burgerBtns) {
    burgerBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const burgerOpen = document.querySelector(".idc-btn-burger.open");
        if (burgerOpen && e.target.closest(".idc-btn-burger") != burgerOpen) {
            burgerOpen.classList.remove("open");
            burgerBtn.classList.toggle("open");
        } else burgerBtn.classList.toggle("open");
    });
}
window.addEventListener("click", (e) => {
    // при клике в любом месте окна браузера
    const target = e.target; // находим элемент, на котором был клик
    if (!target.closest(".idc-burger") && !target.closest(".idc-btn-burger")) {
        for (let burgerBtn of burgerBtns) {
            burgerBtn.classList.remove("open");
        }
    }
});

document.onreadystatechange = function () {
    window.addEventListener("resize", function () {
        banner_resize();
    });
    banner_resize();
};
