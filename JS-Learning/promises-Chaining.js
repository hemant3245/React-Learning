// const cart = ["sugar", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// }); //gives orderId
// // Passing a callback funciton to another function

// //{data: order}

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

//Passing a function to a Promise

const cart = ["sugar", "pants", "kurta"];

createOrder(cart, function (orderId) {

  proceedToPayment(orderId, function () {

    showOrderSummary(paymentInfo, function () {

      updateWalletBalance();

    });

  });

});

// const promise = createOrder(cart);

// promise.then((orderId)=>
// {
//     proceedToPayment(orderId)
// })

//gives orderId

const GITHUB_API = "https://api.github.com/users/hemant3245";

const user = fetch(GITHUB_API);
console.log(user);

// user.then((data)=>  addinf cb function to a promise
// {
//     console.log(data);
// })


//Promise Chainig

const promise = createOrder(cart).then((orderId)=>
{
   return proceedToPayment(orderId)
})
.then((paymentInfo)=>
{
    return showOrderSummary(paymentInfo)
})
.then((paymentInfo)=>
{
     return updateWalletBalance(paymentInfo);
})


