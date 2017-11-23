$( document ).ready(function() {
    $('.panel-group>.panel .panel-title>a').click(function(){
        $($(this).children('.fa')).toggleClass('fa-angle-down')
        .toggleClass('fa-angle-up');

        $('.rd_first').each(function() {
          $(this).trigger("click");
        });

    });

    $('#myModal').modal();
    $('.modal-backdrop').appendTo('.body');   
    //remove the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    $('body').removeClass("modal-open")
    $('body').css("padding-right","");  

    // Click event under 18
    $('.btn-u').click(function() {
        window.location.href = "error.html";
    });
});