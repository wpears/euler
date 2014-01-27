var arr=[{1:1,2:1,5:1,10:1,20:1,50:1,100:1,200:1,tot:1},{1:1,tot:1}]
var coins=[1,2,5,10,20,50,100,200];
for(var i = 2; i < 201; i++){
  arr.push({1:1});
  var sum=1;
  for(var j=1;j<8;j++){
    var coin=coins[j];
    if(i < coin) break;
    var index=i-coin;
    
    if (coin > index) coin = 'tot';
    sum+=arr[index][coin];
    arr[i][coins[j]]=sum;
  }
  arr[i].tot=sum;
}
console.log(arr[200][200])