module.exports = function solveEquation(equation) {
var a,b,c;
var arr = equation.split(' ');
console.log(typeof(equation));
a = Number(arr[0]);
b = Number(arr[3]+arr[4]);
c = Number(arr[7]+arr[8]);
console.log('==================================')
console.log(a)
console.log(b)
console.log(c)
var x1,x2,D;
var solutions;
D = b*b -4*a*c;
console.log(D)
if(!D)
solutions = '1 solution';
if(D<0)
solutions = null;
if(D>0){
x1 = (-b + Math.sqrt(D))/(2*a);
x1 = Math.round(x1) ;
x2 = (-b - Math.sqrt(D))/(2*a);
x2 = Math.round(x2) ;
if(x1<x2)
solutions =[x1 ,x2];
else
solutions =[x2 ,x1];

}
return solutions;
}

