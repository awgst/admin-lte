$(document).ready(function () {
    jQuery.readyException = function(error){
        $('#dataTable').DataTable();
    };
    $('#checkbox').change(function () {
        if (this.checked) {
            $('button').prop('disabled', 'false');
            $('#button').removeClass('mybtn-disabled');
        } else {
            $('#button').prop('disabled', 'true');
            $('#button').addClass('mybtn-disabled');
        }
    });
});