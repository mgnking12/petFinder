(function($) {
    $(function() {

        $('#signUpSwitch').click(function() {
            $('#signUpOption').removeClass('hidden');
            $('#signInOption').addClass('hidden');
        });
        $('#signInSwitch').click(function() {
            $('#signUpOption').addClass('hidden');
            $('#signInOption').removeClass('hidden');
        });
    }); // end of document ready
})(jQuery);