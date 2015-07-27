function Receipt(carts) {
  this.carts = carts;
  this.allPayMoney = 0.00;
  this.saveMoney = 0.00;
  this.print = function () {
    var str = '***<没钱赚商店>收据***\n';
    str += '打印时间：' + getTime() + '\n';
    str += '----------------------\n';
    for (var x = 0; x < this.carts.length; x++) {
      this.allPayMoney += this.carts[x].payCount * this.carts[x].price;
      str += '名称：' + this.carts[x].name + '，数量：' +
      this.carts[x].relCount + this.carts[x].unit + '，单价：' +
       this.carts[x].price.toFixed(2) + '(元)，小计：' +
        (this.carts[x].payCount * this.carts[x].price).toFixed(2) + '(元)\n';
    }

    str += '----------------------\n挥泪赠送商品：\n';

    for (var y = 0; y < this.carts.length; y++) {
      if (this.carts[y].payCount != this.carts[y].relCount) {
        this.saveMoney += this.carts[y].price * ( this.carts[y].relCount -
          this.carts[y].payCount);
        str += '名称：' + this.carts[y].name +
        '，数量：' + ( this.carts[y].relCount - this.carts[y].payCount) +
        this.carts[y].unit + '\n';
      }
    }
    str += '----------------------\n';
    str += '总计：' + this.allPayMoney.toFixed(2) + '(元)\n';
    str += '节省：' + this.saveMoney.toFixed(2) + '(元)\n';
    str += '**********************';

    console.log(str);
  };
}

function getTime() {
  var date = new Date();
  return (date.getFullYear() + '年' +
   toDouble(date.getMonth() + 1) + '月' +
    toDouble(date.getDate()) + '日 ' +
    toDouble(date.getHours()) + ':' + toDouble(date.getMinutes()) +
     ':' + toDouble(date.getSeconds()));
}

function toDouble(num) {
  return num < 10 ? ('0' + num) : ('' + num);
}
