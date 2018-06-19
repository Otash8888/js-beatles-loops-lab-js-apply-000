function theBeatlesPlay(musicians, instruments) {
  var combination=[];
  for (let i=0;i<musicians.length;i++){
    combination[i]=`${musicians[i]} plays ${instruments[i]}`
    
  }
  return combination;
}
function johnLennonFacts (arr){
  let l=arr.length
  while (l>=0) {
   
    arr[l-1]=`${arr[l-1]}!!!`;
     --l;
  }
  return arr;
}
function iLoveTheBeatles (n){
 
 var newArr=[];
 var l=n;
 
  do{
    newArr[l-1]= "I love the Beatles!"

    --l
  } 
  while (n<15)
  return newArr
}