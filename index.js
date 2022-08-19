//first test
var customerName = "bob";

//Second test
function  upperCaseCustomerName () {
     customerName = 'BOB';
}

//Third test
var setBestCustomer= function () {
    window.bestCustomer = 'not bob';
}

//Fourth test
var overwriteBestCustomer= function () {
    bestCustomer = 'maybe bob';
}

//Fifth test
const leastFavoriteCustomer = 'claire';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'job';
}