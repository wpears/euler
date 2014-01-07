function checkPal(str){
  var halfLen = str.length/2
    , first = str.slice(0,Math.floor(halfLen))
    , second = reverse(str.slice(Math.ceil(halfLen)))
    ;
  if(first === second)return true;
  return false;
}

function palRecursish(str){
  var front = 0
    , back = str.length-1
    ;
  while(front < back){
    if(str[front] !== str[back]) return false;
    front++;
    back--;
  }
  return true
}

function reverse(str){
  var revStr = "";
  for (var i =str.length-1; i>=0; i--){
    revStr+=str[i];
  }
  return revStr;
}

var pals = [];
for(var i = 10000, j=999*999; i < j; i++){
  if(checkPal(i.toString())) pals.push(i);
}

while (pals.length){
  var curr = pals.pop()
    , currN = +curr
  for(var high = 999, low = 100; high >= low; high--){
    if(currN/high === Math.floor(currN/high)&&currN/high<1000&&currN/high>99) break;
  }
  if( high >= low){
    alert(curr)
    alert(high)
    break;
  }
}