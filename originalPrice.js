//https://www.codewars.com/users/Anush%20%20Markos/completed_solutions

//============================ originalPrice ====================
//We need to write some code to return the original price of a product,
// the return type must be of type decimal and the number must be rounded to two decimal places.
//We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.


function discoverOriginalPrice(discountedPrice, salePercentage){

    let originalPrice = discountedPrice / (1 - salePercentage/ 100);

    //or in this way
    //let originalPrice = (discountedPrice * 100) / (100 - salePercentage);
    return  +originalPrice.toFixed(2);

}
console.log(discoverOriginalPrice(75, 25));//100
console.log(discoverOriginalPrice(25, 75));//100