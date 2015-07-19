//TODO: Please write code in this file.
function printReceipt(inputs) {
  var products = loadAllItems();
  var productFree = loadPromotions();
  var productGive = [];

  for(var n = 0; n < products.length; n++){
    products[n].count = 0;
  }

  for(var x = 0; x < inputs.length; x++) {
    findProduct(inputs[x],products);
  }

  getFreeProduct(productFree,products,productGive);

  finalPrint(products,productGive);
}

function findProduct(item,products) {
  for(var y = 0; y < products.length; y++) {
    if(/*item === products[y].barcode*/comp(item,products[y].barcode)) {
      products[y].count += item.length == 10 ? 1 : parseInt(item[item.length-1]);
      return;
    }
  }
}

function getFreeProduct(productFree,products,productGive) {
  var flag = true;
  var h = 0;
  for(var m = 0; m < productFree.length; m++) {
    switch (productFree[m].type) {
      case 'BUY_TWO_GET_ONE_FREE':
        for(var n = 0; n < products.length; n++) {
          for(var k = 0; k < productFree[m].barcodes.length; k++) {
          if(products[n].count >= 2 && products[n].barcode === productFree[m].barcodes[k]) {
            products[n].total = ((products[n].count - 1) * products[n].price).toFixed(2);
            flag = true;
            productGive[h] = products[n];
            //productGive[h].count = 1;
            h++;
            break;
          }
          else {
            flag = false;
          //  products[n].total = (products[n].count * products[n].price).toFixed(2);
          }
        }
        if(flag === false)
        {
          products[n].total = (products[n].count * products[n].price).toFixed(2);
        }
      }
        break;
      default:
        break;
    }
    //console.log(productFree[m]);
  }
}

function comp(itemA,itemB){
  for(var m = 0; m < itemB.length; m++){
    if(itemA[m] !== itemB[m]){
      return;
    }
  }
  return true;
}

function finalPrint(products,productGive) {
  var total_1 = 0;
  var less = 0;
  var str = '***<没钱赚商店>收据***\n';

  for(var n = 0; n < products.length; n++) {
    if(products[n].count !== 0){
      str += '名称：'+products[n].name+'，数量：'+products[n].count+
            products[n].unit+'，单价：'+(products[n].price).toFixed(2)+'(元)'+
            '，小计：'+(products[n].total)+'(元)'+'\n';
      total_1 += parseInt(products[n].total);
    }
  }
  str += '----------------------\n';
  str += '挥泪赠送商品：\n';
  for(var x = 0; x < productGive.length; x++) {
    str += '名称：'+productGive[x].name+'，数量：'+productGive[x].count%2+
          productGive[x].unit+'\n';
          less += parseFloat(productGive[x].price);
  }
  str += '----------------------\n';
  str += '总计：'+total_1.toFixed(2)+'(元)'+'\n';
  str += '节省：'+less.toFixed(2)+'(元)'+'\n';
  str += '**********************';
  console.log(str);
}
