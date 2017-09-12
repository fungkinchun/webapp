
window.onload = function () {
    $.ajax({
    url: "http://localhost:3000/getbookbyuser/users/1/books/2",
    type: "GET",
    context: document.body,
    success: function(result){
      console.log(result);
    },
    error: function(xhr,status,error){
      console.log(xhr);
      console.log(status);
      console.log(error);
    }
    });
}
