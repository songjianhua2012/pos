//TODO: Please write code in this file.
function printReceipt(inputs) {
  var cart = [];
  inputs.forEach(function (oneInput) {
    putIncart(oneInput, cart);
  });

  cart.forEach(function (oneOfCart) {
    oneOfCart.sureToPro();
  });
  var printMessage = new Receipt(cart);
  printMessage.print();
}
function putIncart(oneItem, cart) {
  var allItems = loadAllItems();
  var arrBarcode = oneItem.split('-');
  for (var x = 0; x < cart.length; x++) {
    if (arrBarcode[0] == cart[x].barcode) {
      cart[x].payCount = cart[x].relCount += arrBarcode.length == 1 ? 1 : parseInt(arrBarcode[1]);
      return 0;
    }
  }
  allItems.forEach(function (oneItem) {
    if (oneItem.barcode == arrBarcode[0]) {
      var newItem = new CartItem(arrBarcode[0], oneItem.name, oneItem.unit, oneItem.price);
      newItem.payCount = newItem.relCount = arrBarcode.length == 1 ? 1 : parseInt(arrBarcode[1]);
      cart.push(newItem);
    }
  });
}
