(function ($, Drupal) {
  Drupal.behaviors.behaviorName = {
    attach: function (context, settings) {

      //Equal Heights
      if (document.documentElement.clientWidth > 640 ) {
        $.fn.equalHeights = function () {
          let maxHeight = 0;
          $(this).each(function () {
            maxHeight = Math.max($(this).height(), maxHeight);
          });
          $(this).each(function () {
            $(this).height(maxHeight);
          });
        };


        $(".paragraph--type--columns").each(function () {
          $(this).find(".col").equalHeights();
          $(this).find(".paragraph").equalHeights();
        });

        $(".view .view-rows").each(function () {
          $(this).find(".col").equalHeights();


          $(".col").each(function () {
            $(this).find(".views-field-nothing").equalHeights();
          });
        });
      }
    }
  }
})(jQuery, Drupal);


