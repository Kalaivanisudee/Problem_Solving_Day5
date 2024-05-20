function binarySearch(){
    let start=0;
    let end = arr.length -1;

while (start <=end ){
    let mid = Math.floor((start+end)/2);
    console.log(start,end,arr[mid],searchValue);
    if(arr[mid]===searchValue){
        return mid;
    }
    if(arr[mid]<searchValue) start=mid +1;
    else end = mid-1;
}
return -1;
}
console.log([1,2,3,4,5,6,7,8,9],5)//4
