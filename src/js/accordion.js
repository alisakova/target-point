var accordion = document.querySelectorAll('.accordion');

if (window.innerWidth < 600) {
  for (var i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var parent = this.closest(".product-container");
      var panel = parent.querySelector(".panel");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  }
}
