// $(document).ready(function() {
//
//     $("#button").click(function (e) {
//         e.preventDefault();
//         var file = "../json/" + $("#title").val() + ".json";
//         var items = [];
//         $.getJSON( file, function( data ) {
//             $.each( data, function( key, val ) {
//                 items.push(key + "=" + val);
//             });
//         });
//
//         $.ajax({
//             type: "GET",
//             url: "/search",
//             data: items,
//         });
//     });
//
// });




// $.post('ajax.php', {'login':'1111', 'password' : '2222'},
//     function(data) {
//         $('#news').html(data);
//     });