/**
 * Created by mihai on 16/04/15.
 */
jQuery(document).ready(function($) {
    // Accordion
    var selectIds = $('#collapseOne,#collapseTwo,#collapseThree');
    console.log(selectIds);
    $(function ($) {
        selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
            $(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
        });

        selectIds.on('show.bs.collapse hide.bs.collapse', function () {
            $(this).prev().toggleClass('bg-black bg-gray');
        });
    });
});