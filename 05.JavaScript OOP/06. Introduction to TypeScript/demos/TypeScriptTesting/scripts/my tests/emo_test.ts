export class Shop {
    private customers: Customer[];

    constructor(_customers: Customer[]) {
        this.customers = _customers;
    }

    public addCustomer(customer: Customer) {
        this.customers.push(customer);
    }
    public deleteCustomer(customer: Customer) {

        this.customers.splice(this.customers.findIndex(function(val, indx, arr) {
            if(val.name === customer.name) {
                return true;
            }
        }), 1)

        this.customers.splice(this.customers.findIndex((val, index, arr) => {
            if(val.name === customer.name)
            return true;
        }), 1)
    }

}

export interface Customer {
    name: string;
    age: number;
    wallet: WalletType;
}

export interface WalletType {
    currency: string;
}


function filter(callback) {
     var b = [2,3,4,5,6,7,8];
     if(typeof callback !== "function") {
         throw new Error('sloji function be! kvo se pravish');
     }
     b.forEach(function(val, indx, arr) {
         callback(arguments);
     })

}