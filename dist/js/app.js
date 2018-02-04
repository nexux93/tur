<script>
$(document).ready(function() {
    var windowWidth = $(window).width();
    if(windowWidth > 768)$("#nav-reg-login").addClass("nav-justified");
    else $("#nav-reg-login").removeClass("nav-justified");

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 768)$("#nav-reg-login").addClass("nav-justified");
        else $("#nav-reg-login").removeClass("nav-justified");
    });
});
</script>