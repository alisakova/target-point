//для плавного скролла к якорям
$(document).ready(function() {
  $("body").on("click", "._scroll-btn", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

//плавный скролл наверх страницы
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout("scrollToTop()", 10);
  } else clearTimeout(timeOut);
}
