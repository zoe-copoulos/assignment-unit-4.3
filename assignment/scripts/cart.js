console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem( item ) {


    if (isFull()) {
        return false;
    }
    else {
        basket.push( item );
        return true;
    }
 }

console.log ( basket );

addItem('Broccoli');
addItem('Green Beans');
addItem('Garlic');
addItem('Chicken');
addItem('Stock');
addItem('Lemons');

 function listItems() {
    console.log( 'listItems' );
    for ( let item of basket ){
        console.log( item );
    }
 }

 console.log ( basket );
  
 function empty() {
    basket.length = 0;
    console.log( basket );
 }
 
 console.log( basket );
 
 function isFull() {

    if ( basket.length >= maxItems ) {
        return true;
    }
    else {

        return false;

    }
 }
 
 console.log( basket );



 
 
 
 
 
 
 
 
    








// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
