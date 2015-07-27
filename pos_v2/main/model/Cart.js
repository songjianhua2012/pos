function Cart(Item) {
  this.Item = Item;
  this.realCount = 0;
  this.payCount = 0;
}
Cart.prototype.getRealCount = function() {
  //this.realCount += (this.Item).barcode.length > 10 ? 1 : parseInt(Item);
  var allItems = loadAllItems();

  for(var y = 0; y < allItems.length; y++) {
    if(comp(Item,allItems[y].barcode)) {
      realCount += Item.barcode.length == 10 ? 1 : parseInt(Item.barcode[Item.barcode.length-1]);
      return;
    }
  }
};

Cart.prototype.getPayCount = function() {
  var allPromotions = loadPromotions()[0].barcodes;
    for (var x = 0; x < allPromotions.length; x++) {
      if ((allPromotions[x] == this.Item.barcode) && (this.payCount >= 3)) {
        this.payCount -= Math.floor(this.payCount / 3);
      }
    }
};

function comp(itemA,itemB) {
  for(var m = 0; m < itemB.length; m++) {
   if(itemA.barcode[m] !== itemB[m]) {
     return;
   }
 }
 return true;
}
