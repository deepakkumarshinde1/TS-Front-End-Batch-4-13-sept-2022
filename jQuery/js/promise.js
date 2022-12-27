async function div(a, b) {
  if (b === 0) {
    return Promise.reject("Cant div by zero");
  } else {
    var result = a / b;
    return Promise.resolve(result);
  }
}

async function add(a, b) {
  return Promise.resolve(a + b);
}

// async await multi promise
async function calculation() {
  try {
    var result = await add(10, 20); // wait for other promise & return resolve result
    var finalResult = await div(result, 0);
    console.log(finalResult);
  } catch (error) {
    console.log(error);
  }
}

// single
// div(2, 0)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// a=>2,b=>1
//    pending
//    b == 0 ==> false => rejected => catch()
//    b != 0 ==> true => resolve(fulfilled) => then()

// how to fetch data from server
// fetch API
