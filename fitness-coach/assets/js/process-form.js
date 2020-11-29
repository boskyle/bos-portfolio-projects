$(document).ready(function () {
    

$('#form_id').submit(function(e) {
    e.preventDefault();

    var form = $(this);


    $.ajax({
        type: "POST",
        url: "send-email.php",
        data: form.serialize(),
        // dataType: "dataType",
        success: function (response) {

            alert(response);
            // clear input afterwards
            $('#email_id').val('');
            
        }, error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
         }
    });


})







});