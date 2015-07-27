function CartItem(barcode, name, unit, price) {
  this.barcode = barcode;
  this.name = name;
  this.unit = unit;
  this.price = price || 0.00;
  this.relCount = 0.00;
  this.payCount = 0.00;
  this.sureToPro = function () {
    var allPromotions = loadPromotions()[0].barcodes;
    for (var x = 0; x < allPromotions.length; x++) {
      if ((allPromotions[x] == this.barcode) && (this.payCount >= 3)) {
        this.payCount -= Math.floor(this.payCount / 3);
      }
    }
  };
}
