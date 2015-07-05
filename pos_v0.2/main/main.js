//TODO: Please write code in this file.
function printReceipt(inputs) {
  var num = 1;
  var products = [];
  for(var i=0; i<inputs.length; ++i)
  {
    if(inputs[i] == inputs[i+1])
    {
      num++;
    }
    else
    {
      products.push(num);
      num = 1;
    }
  }
  fun(products);
}

function fun(products)
{
  var str='***<没钱赚商店>收据***\n';
  var j=0;
  var k=0;
  str += '名称：可口可乐，数量：'+products[j]+'瓶，单价：3.00(元)，小计：'+(3*products[j]).toFixed(2)+'(元)'+'\n';
  str += '名称：雪碧，数量：'+products[++j]+'瓶，单价：3.00(元)，小计：'+(3*products[j]).toFixed(2)+'(元)\n';
  str += '名称：电池，数量：'+products[++j]+'个，单价：2.00(元)，小计：'+(2*products[j]).toFixed(2)+'(元)\n';
  str += '----------------------\n';
  str += '总计：'+(3*products[k++]+3*products[k++]+2*products[k]).toFixed(2)+'(元)\n';
  str += '**********************';
  console.log(str);
}
