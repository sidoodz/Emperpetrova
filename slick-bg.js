$(document).ready(function() {
    if ($('[data-background]').length > 0) {
      $('[data-background]').each(function() {
        var $background, $backgroundmobile, $this;
        $this = $(this);
        $background = $(this).attr('data-background');
        $backgroundmobile = $(this).attr('data-background-mobile');
        if ($this.attr('data-background').substr(0, 1) === '#') {
          return $this.css('background-color', $background);
        } else if ($this.attr('data-background-mobile') && device.mobile()) {
          return $this.css('background-image', 'url(' + $backgroundmobile + ')');
        } else {
          return $this.css('background-image', 'url(' + $background + ')');
        }
      });
    }
  });
setInterval(function() { document.getElementsByClassName("slick-next slick-arrow")[0].click()} , 8000);
$(function(){ 
  var navMain = $(".navbar-collapse");

  navMain.on("click", "a", null, function () {
      navMain.collapse('hide');
  });
});
