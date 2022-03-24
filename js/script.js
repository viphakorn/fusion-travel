const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.nav-link')

menuBtn.onclick =() =>{
  menuBtn.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
}
// slider1
const slide = document.querySelector(".welcome .slide");
const slideItem = document.querySelectorAll(".welcome .slide .item");
const nav1 = document.querySelector(".welcome nav");
const pointer1 = document.querySelectorAll(".welcome nav .pointer");

for (let i = 0; i < pointer1.length; i++) {
  function slider1(){
    slide.querySelector(".welcome .slide .item.active").classList.remove("active");
    slideItem[i].classList.add("active");
    nav1.querySelector(".welcome nav .pointer.active").classList.remove("active");
    pointer1[i].classList.add("active");

    for (var slideItemIndex = 0; slideItemIndex < slideItem.length; slideItemIndex++) {
      if (i === 0) {
        slideItem[slideItemIndex].style.transform = "translateX(100%)"
      }
      if (i === 1) {
        slideItem[slideItemIndex].style.transform = "translateX(0)"
      }
      if (i === 2) {
        slideItem[slideItemIndex].style.transform = "translateX(-100%)"
      }
    }
  };
  pointer1[i].onclick = slider1
  slideItem[i].onclick = slider1
}

// slider2
const cardBox = document.querySelectorAll(".testimony .card-box");
const cardItem = document.querySelectorAll(".testimony .card-box .item");
const nav2 = document.querySelector(".testimony nav");
const pointer2 = document.querySelectorAll(".testimony nav .pointer");

for (let i = 0; i < pointer2.length; i++) {
  function slider2(){

    nav2.querySelector(".testimony nav .pointer.active").classList.remove("active");
    pointer2[i].classList.add("active");

    for (var cardItemIndex = 0; cardItemIndex < cardItem.length; cardItemIndex++) {
      if (i === 0) {
        cardItem[cardItemIndex].style.transform = "translateX(100%)"
      }
      if (i === 1) {
        cardItem[cardItemIndex].style.transform = "translateX(0)"
      }
      if (i === 2) {
        cardItem[cardItemIndex].style.transform = "translateX(-100%)"
      }
    }
  };
  pointer2[i].onclick = slider2
}