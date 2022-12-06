///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((a, c) => { return a += c.price}, 0);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/


function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
# First Name: String -> For identifying the user and creating a personal experience
# Last Name: String -> For identifying the user and creating a personal experience
# Email: String -> For contacting with prompotions and to keep customer up to date with shipping info
# Address: String -> Shipping info
# Town/City: String -> Shipping info 
# State: String -> Shipping info
# Zip: Number -> Shipping info

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

let customer = {
    firstName: 'Colby',
    lastName: 'Mehmen',
    email: 'colbymehmen@gmail.com',
    address: '3893 fm 546',
    city: 'Princeton',
    state: 'Text',
    zip: 75407
}
