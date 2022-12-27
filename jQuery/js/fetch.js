var productList = [];
async function getProductList() {
  var response = await fetch("https://fakestoreapi.com/products");
  // get a data from response .json()
  var finalData = await response.json();
  console.log(finalData);
}

getProductList();
