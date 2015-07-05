//TODO: Please write code in this file.
function printReceipt(inputs) {
  var total_product = [];
  fun(inputs,total_product);
  finalPrint(total_product);
}
function fun(inputs,total_product)
{
  var num = 1;
  for(var i=0; i<inputs.length-1; ++i)
  {
    if(inputs[i].barcode == inputs[i+1].barcode)
    {
      num++;
    }
    else
    {
      total_product.push({name:inputs[i].name,count:num,unit:inputs[i].unit,price:inputs[i].price});
      num=1;
    }
  }
  total_product.push({name:inputs[inputs.length-1].name,count:num,unit:inputs[inputs.length-1].unit,price:inputs[inputs.length-1].price});
}
function finalPrint(total_product)
{
  var total = 0;
  var str = '***<没钱赚商店>收据***\n';
  for(var i=0; i<total_product.length; ++i)
  {
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
