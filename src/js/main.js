$(document).ready(function(){
  if ($('.reviews-slider').length) {
    $('.reviews-slider').slick({
      infinite: true,
      speed: 500,
      fade: true
    });
  }
});

$("._open-success-call-modal").click(function(event) {
  event.preventDefault();
  $("#success-modal").modal();
  return false;
});

$("._open-calc-modal").click(function(event) {
  event.preventDefault();
  $("#success-calc-modal").modal();
  return false;
});

$("._open-master-modal").click(function(event) {
  event.preventDefault();
  $("#success-master-modal").modal();
  return false;
});

$("._open-order-call-modal").click(function(event) {
  event.preventDefault();
  $("#call-modal").modal();
  return false;
});

var characteristicsBlocks = document.querySelectorAll(".panel");
var showMoreBtns = document.querySelectorAll("._show-more-btn");
var body = document.querySelector("body");

if (window.innerWidth > 600) {
  showMoreBtns.forEach(function(el) {
    el.addEventListener("click", function(e) {
      e.stopPropagation();
      var parent = el.closest(".product-container");
      var characteristics = parent.querySelector(".panel");
      characteristicsBlocks.forEach(function(block) {
        if (block.classList.contains("active") && block !== characteristics) {
          block.classList.remove("active");
        }
      });
      characteristics.classList.toggle("active");
    })
  });

  body.addEventListener("click", function(e) {
    e.stopPropagation();
    characteristicsBlocks.forEach(function(block) {
      if (block.classList.contains("active")) {
        block.classList.remove("active");
      }
    });
  });
}
