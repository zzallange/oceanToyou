$(function () {
  //hover logoImage change
  var header = $(".header");
  var logoImg = $(".head-logo").find("img");

  header.hover(
    function () {
      logoImg.attr("src", logoImg.attr("src").replace("01.png", "02.png"));
    },
    function () {
      logoImg.attr("src", logoImg.attr("src").replace("02.png", "01.png"));
    }
  );

  //header scroll Fixed
  var $window = $(window);
  var headerClone = header.contents().clone();
  var headerCloneCont = $('<div class="header-clone"></div>');
  var threshold = header.offset().top + header.outerHeight();

  headerCloneCont.append(headerClone);
  headerCloneCont.appendTo("body");

  $window.scroll(function () {
    if (this.scrollTop() >= threshold) {
      headerCloneCont.addClass("visible");
    } else {
      headerCloneCont.removeClass("visible");
    }
  });
});

//https://www.jejudreamtower.com/assets/kor/images/txt/h1_jejuDreamTower02.png
