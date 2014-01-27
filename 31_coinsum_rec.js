var count=0;
var coins=[200,100,50,20,10,5,2,1];
var nonOne=[];
var oneCount=0;
function rec(i,sum){
  console.log(i,sum);
  var tot = sum+coins[i];
  if(tot < 200){
    if(i !== 7) nonOne.push(i);
    else oneCount++;
    rec (i,tot);
  }
  else if (tot >200 && i <7) rec(i+1,sum)
  else{
    if(i !== 7) nonOne.push(i);
    else oneCount++;
    count++;
    var currCount=oneCount;
    oneCount=0;
    var next = nonOne.pop();
    if(next !== undefined)
    rec(next+1,200-coins[next]-currCount)
  }
}
rec(0,0)
console.log(count);

//Very suitable to DP. Ways to make 1 with coins... 2, 3.. etc
// Then include this in later calculations