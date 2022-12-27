// AJAX => Async Javascript & XML

$(function () {
  $("#get-data").on("click", function (event) {
    $.ajax({
      url: "https://fakestoreapi.com/products",
      method: "GET",
    })
      .done(function (data) {
        var productList = data.map(function (product, index) {
          return `<li>
                      <img
                        src="${product.image}"
                        alt=""
                      />
                      <p>${product.title}</p>
                    </li>`;
        }); //[li,li,li]
        productList = productList.join(""); //<li><><>
        $("#userList").html(productList);
        // javascript to html inject data .html()
      })
      .fail(function (error) {
        console.log(error);
      });
  });
});

/*
click*
keypress
keyup*
keydown
dblclick
mouseout
mouseover
drag*
drop*
scroll
*/
// red save/update/delete/get
// synchronous
// asynchronous => AJAX
//xhr => XML HTTP Request
//GET =>Default (get resources from server)
//POST => add/insert new record
//PUT => update record
//DELETE => delete record
