function findNumber(numbers:number[], value){
    let count=0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]===value){
            count++;
        }
    }
    return count;
}
let data: number[] = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
let target: number = 5;
let result=findNumber(data,target);
console.log(result);