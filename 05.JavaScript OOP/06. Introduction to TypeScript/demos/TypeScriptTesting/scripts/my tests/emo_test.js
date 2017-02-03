"use strict";
var Shop = (function () {
    function Shop(_customers) {
        this.customers = _customers;
    }
    Shop.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    Shop.prototype.deleteCustomer = function (customer) {
        this.customers.splice(this.customers.findIndex(function (val, indx, arr) {
            if (val.name === customer.name) {
                return true;
            }
        }), 1);
        this.customers.splice(this.customers.findIndex(function (val, index, arr) {
            if (val.name === customer.name)
                return true;
        }), 1);
    };
    return Shop;
}());
exports.Shop = Shop;
function filter(callback) {
    var b = [2, 3, 4, 5, 6, 7, 8];
    if (typeof callback !== "function") {
        throw new Error('sloji function be! kvo se pravish');
    }
    b.forEach(function (val, indx, arr) {
        callback(arguments);
    });
}
