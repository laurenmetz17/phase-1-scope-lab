var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(name) {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'bobbette'

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bobby';
}
