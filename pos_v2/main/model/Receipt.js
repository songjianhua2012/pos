function Receipt(cart) {
  this.cart = cart;
  this.allPayMoney = 0.00;
  this.saveMoney = 0.00;
}

Receipt.prototype.print = function() {
  var str = '***<没钱赚商店>收据***\n';
  str += '打印时间：' + getTime() + '\n';
  str += '----------------------\n';

  console.log(str);

};
