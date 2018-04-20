function myFunction() {
      var menu = document.getElementById("menu");
      if (menu.className === "header-content") {
          menu.className += "myFunction";
      } else {
          menu.className = "header-content";
      }
  }

jQuery(document).ready(function($) {
  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop(),
        navmenu = $('.header-content');
    if (scrollPos > 20 ) {
      navmenu.addClass('change');
    } else {
      navmenu.removeClass('change');
    }
  });
});