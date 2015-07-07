//TODO: Please write code in this file.
function printReceipt(inputs) {
  var total_product = [];
  for(var x=0; x<inputs.length; ++x) {
    finProduct(inputs[x],total_product);
  }

  finalPrint(total_product);
}

function finProduct(product,total_product) {
  for(var y=0; y<total_product.length; ++y) {
    if(product.name === total_product[y].name) {
      total_product[y].count += 1;
      return;
    }
  }
  total_product.push({name:product.name,unit:product.unit,price:product.price,count:1});
}

function finalPrint(total_product){
  var total = 0;
  var str = '***<没钱赚商店>收据***\n';

  for(var i=0; i<total_product.length; ++i) {
    str += '名称：'+total_product[i].name+'，数量：'+total_product[i].count+
    total_product[i].unit+'，单价：'+total_product[i].price+'.00(元)'+'，小计：'+
    total_product[i].count*total_product[i].price+'.00(元)'+'\n';
    total += (total_product[i].count*total_product[i].price);
  }
  
  str +='----------------------'+'\n';
  str +='总计：'+total+'.00(元)'+'\n';
  str +='**********************';
  console.log(str);
}
