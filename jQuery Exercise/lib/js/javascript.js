//-FORMULAR
//---Mit Click
$(function() {
    $('#submit').on('click', function() {
        let name = $('#name').val();
        $('.ausgabe > strong').text(name);
        $('#name').val('');
    })

})

//---Mit Enter
$(function() {
    let enter = 13;
    $("#name").keydown(function(e) {
        let code = e.keyCode || e.which;
        if (code == enter) {
            let name = $('#name').val();
            $('.ausgabe > strong').text(name);
            $('#name').val('');
        }
    });

})

//-Ein-/ausblenden
$(function() {
    $(".erklaerung").hide();
    $("#content h3").on("click", function() {
            $(this).next().toggle();
        })
        .css("cursor", "pointer");
})