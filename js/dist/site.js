var midasmovers = window.midasmovers = {
  init: function() {
    this.set_events();
  },

  set_events: function() {
    $(document).on('scroll', function(event){
      var height = (
            $('header').height() - $('header nav').height()
          ),
          scrollTop = $(window).scrollTop(),
          $target = $('header nav');

      if(scrollTop > height) {
        $target.addClass('sticky');
      } else {
        $target.removeClass('sticky');
      }
    }).trigger('scroll');

    return this;
  }
};

midasmovers.init();
