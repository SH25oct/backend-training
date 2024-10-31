/*
//closures 
// a function along with its lexical environment is called closures i.e;

function x() {
    var a=7;
    function y() {
        console.log(a);
    }
    y();
}
x();
*/


//higher order functions
//function that take another function as an argument known as higher order functions
/*
//callback
//function that we pass in another function as an argument is known as callback

const cart = ['shoes', 'bag', 'shirt', 'pants'];

//code using callbacks 

createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });

});

//above code creates callback hell to avoid callback hells we use promise and promise chaining for a lean code

//code using promise chaining 

createrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(paymentInfo))
.then((paymentInfo) => updateWalletBalance(paymentInfo))


*/

/* promise is an object that represents the eventual completion of asynchronous js operations

    promises have 3 states (pending, fulfilled, rejected)

promises are immutable */





/*   Async/Await

Async is a keyword that is used before a function to make that function asynchronous i.e;
syntax

async function getData () {

}

//async function always return a promise

//code example 

// creating promises
const p1 = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is resolved");
    }, 10000)
});

const p2 = new promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise is resolved");
    }, 5000)
});

//await can only be used inside an async function
async function handlePromise (){
    console.log("hello world");

    const val = await p1;
    console.log("promise resolved p1");
    console.log(val);

    const val2 = await p2;
    console.log("promise resolved p2");
    console.log(val2);
}
hendlePromise();

*/


/*promises vs async/await
 While promises are powerful and can be used effectively for asynchronous programming, async/await enhances readability, simplifies error handling, and provides better control flow, making it a popular choice in modern JavaScript development.*/