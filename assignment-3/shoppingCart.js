class Shopping {
    constructor() {
      this.cart = {};
      this.catalog = {
        mouse: 35,
        keyboard: 50,
        monitor: 200,
        fan: 10,
        cable: 5,
      }
    }
  
    addToCart(item, quantity){
        if (this.catalog[item] && typeof quantity === 'number') 
            if (this.cart[item]) this.cart[item] += quantity;
            else this.cart[item] = quantity;
        else if (typeof quantity !== 'number') 
            throw new Error("QUANTITY MUST BE A NUMBER");
        else if (!this.catalog[item]) 
            throw new Error("ITEM IS NOT AVAILABLE");
    }
  
    removeFromCart(item, quantity){
        if (quantity <= this.cart[item])
            this.cart[item] -= quantity;
        else 
            throw new Error("REMOVAL QUANTITY GREATER THAN CART QUANTITY")
    }
  
    calculateTotal() {
        let total = 0;
        for (let key in this.cart){
            total += this.catalog[key] * this.cart[key]
        }
        return total;
    }
  }
  
  module.exports = Shopping
  