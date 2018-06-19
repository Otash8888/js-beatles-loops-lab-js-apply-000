/*function theBeatlesPlay(musicians, instruments) {
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
} */

	var superheroines = ["catwoman", "she-hulk", "mystique"];
	 
	superheroines.push("wonder woman");
	// superheroines is now ["catwoman", "she-hulk", "mystique", "wonder woman"]
console.log(superheroines);

	var cities = ["New York", "San Francisco"]
	 
	cities.unshift("Philadelphia")
	 
	// cities is now ["Philadelphia", "New York", "San Francisco"]
	console.log(cities)


var arr=["laskdjf","lksdjf","alsdkjf"]
var arr1=[...arr, "llllll"]

console.log(arr1)


	var cats = ["Milo", "Garfield", "Otis","lskdjf","kkkkkkk"]
	
	var cats2 = cats.slice(1) 
		var cats3 = cats.slice(-2) 

	cats // ["Milo", "Garfield", "Otis"]
console.log(cats2)

