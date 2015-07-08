//TODO: Please write code in this file.
function printReceipt(inputs) {
  var total = 0;
  var str = '***<没钱赚商店>收据***\n';

  for(var i = 0; i < inputs.length; i++) {
    str += '名称：'+inputs[i].name+'，数量：'+inputs[i].count+
    inputs[i].unit+'，单价：'+(inputs[i].price).toFixed(2)+'(元)'+'，小计：'+
    (inputs[i].count * inputs[i].price).toFixed(2)+'(元)'+'\n';

    total += (inputs[i].count * inputs[i].price);

  }

  str += '----------------------'+'\n';
  str += '总计：'+total.toFixed(2)+'(元)'+'\n';
  str += '**********************';
  console.log(str);
}
