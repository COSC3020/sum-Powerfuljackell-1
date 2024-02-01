function sum(a) {
    var sum = 0; //found error at line 2, using a[0] results in the first value in the array being used rather than 0
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
