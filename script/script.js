
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
let sliderIconOne = document.querySelector(".slider-icon-one");
let sliderIconTwo = document.querySelector(".slider-icon-two");
let sliderIconThree = document.querySelector(".slider-icon-three");
let headerPriceText = document.querySelector(".header__price-text");
let headerPriceSale = document.querySelector(".header__price-sale");
let headerItemImgOne = document.querySelector(".header__item-img-one"),
    headerItemImgTwo = document.querySelector(".header__item-img-two"),
    headerItemImgThree = document.querySelector(".header__item-img-three");


sliderIconOne.addEventListener("click", function () {
    sliderIconOne.classList.add("active");
    sliderIconTwo.classList.remove("active");
    sliderIconThree.classList.remove("active");
    headerPriceText.innerHTML = "$125", headerPriceSale.innerHTML = "$169";
    headerItemImgOne.classList.add("active")
    headerItemImgTwo.classList.remove("active")
    headerItemImgThree.classList.remove("active")

    
})

sliderIconTwo.addEventListener("click", function () {
    sliderIconTwo.classList.add("active");
    sliderIconOne.classList.remove("active");
    sliderIconThree.classList.remove("active");
    headerPriceText.innerHTML = "$100", headerPriceSale.innerHTML = "$110";
    headerItemImgOne.classList.remove("active")
    headerItemImgTwo.classList.add("active")
    headerItemImgThree.classList.remove("active")

})

sliderIconThree.addEventListener("click", function () {
    sliderIconThree.classList.add("active");
    sliderIconTwo.classList.remove("active");
    sliderIconOne.classList.remove("active");
    headerPriceText.innerHTML = "$140", headerPriceSale.innerHTML = "$150";
    headerItemImgOne.classList.remove("active")
    headerItemImgTwo.classList.remove("active")
    headerItemImgThree.classList.add("active")

})

let burgerMenu = document.querySelector(".burger__menu");
let navList = document.querySelector(".nav__list");
let body = document.getElementsByTagName("body")[0]


burgerMenu.addEventListener("click", function() {
  burgerMenu.classList.toggle("active");
  navList.classList.toggle("active")
  body.classList.toggle("active");
})