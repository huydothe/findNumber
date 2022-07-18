function findNumber(numbers, value) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            count++;
        }
    }
    return count;
}
var data = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
var target = 5;
var result = findNumber(data, target);
console.log(result);
