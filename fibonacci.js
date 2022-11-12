var first =0;
var second = 1;
var n =10;
var third ;
process.stdout.write(first + ' ');
process.stdout.write(second + ' ');
for (let i = 0; i < n; i++) {
    third = first + second;
    process.stdout.write(third + ' ');
    first = second;
    second = third;
    
}
