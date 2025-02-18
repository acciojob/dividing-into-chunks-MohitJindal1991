const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let currentArr=[];
	let currentSum=0;
	let result=[];

	for(let num of arr){
		if((currentSum+num)>n){
			result.push(currentArr);
			currentArr=[];
			result=[];
		}
		if(currentArr.length>0){
			result.push(currentArr);
		}
	}
		return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
