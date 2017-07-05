$(document).ready(function () {
    function getData(){
         $('#grid').empty();
        $.get('https://api.mlab.com/api/1/databases/kundandata/collections/student?apiKey=o112lXuoyo_MEIoK-L1QdKNsA6yTv98W', function (res) {
            $.each(res, function (index, obj) {
                $('#grid').append('<tr><td>' + obj.roll_no + '</td><td>' + obj.name + '</td></tr>');
            });
         $('#table').show();
         $('#loader').hide();
        });
}
    getData();

    $('#btn_add').click(function () {

        var name1 = $("#name1").val();
        var roll_no1 = $("#roll_no1").val();

        $.ajax({
            'type': 'POST',
            'url': 'https://api.mlab.com/api/1/databases/kundandata/collections/student?apiKey=o112lXuoyo_MEIoK-L1QdKNsA6yTv98W',
            'contentType': 'application/json',
             'data': JSON.stringify({"name":name1, "roll_no":roll_no1}),
            success: function(res){
               getData();
                alert("you have added data successfully");
            }
        });

    });


});
