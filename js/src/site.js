var midasmovers = window.midasmovers = {
  init: function() {
    this.set_events();
  },

  set_events: function() {
    this._sticky_menu();
    this._toggle_mobile_menu();

    return this;
  },

  _sticky_menu: function() {
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
    });
  },

  _toggle_mobile_menu: function() {
    $('.nav-button').on('click', function(event){

    });
  }
};

midasmovers.init();
