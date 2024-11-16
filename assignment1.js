/* Assignment 1

Task 1: Implement a conditional statement to check if a user is logged in
-No need to be complex

Task 2: If logged in, loop over the 'cart' array and log the list of available products to the user.
-if not logged in, tell the user they will need to be logged in before they can view their cart
*/

let loggedIn = true;

let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato'];

if (loggedIn == true) {
    for (let i=0; i<7; i++)
        console.log(`${i+1}`, cart[i]);
} else if (loggedIn != true) {
    console.log("You must log in before viewing the cart");
}