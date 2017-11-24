(function($) {
    $(function() {
        $('.carousel').carousel({
            pause: true,
            interval: false,
          });
        $('.carousel-showmanymoveone .item').each(function(){
            var itemToClone = $(this);
            
            for (var i=1;i<5;i++) {
            itemToClone = itemToClone.next();
            
            if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
            }
            
            itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
            }
        });
    });
})(jQuery);