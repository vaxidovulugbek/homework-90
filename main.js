
// 1 masala
// function aa (a) {
//   let b = [...a]
//   console.log(b);
// }
// aa("js😊")

// 2 masala
// function num (a,n) {
//   console.log(n.toString(a));
// }
// num(2,155)

// 3 masala
// let arr = []
// function getPrimeNumbersAsArray(n,b,c,d,s) {
//     if (n < 2){
//       return 'tub emas';
//     }
//     for (let i = 2; i < n; i++){
//       if (n % i === 0){
//         return 'tub emas';
//       }
//     }
//     arr.push(n)
// // ======================================================
//     if (b < 2){
//       return 'tub emas';
//     }
//     for (let i = 2; i < b; i++){
//       if (b % i === 0){
//         return 'tub emas';
//       }
//     }
//     arr.push(b)
// // ========================================================
//     if (c < 2){
//       return 'tub emas';
//     }
//     for (let i = 2; i < c; i++){
//       if (c % i === 0){
//         return 'tub emas';
//       }
//     }
//     arr.push(c)
// // ===========================================================
//     if (d < 2){
//       return 'tub emas';
//     }
//     for (let i = 2; i < d; i++){
//       if (d % i === 0){
//         return 'tub emas';
//       }
//     }
//     arr.push(d)
//   // ==============================================================
//   if (s < 2){
//     return 'tub emas';
//   }
//   for (let i = 2; i < s; i++){
//     if (s % i === 0){
//       return 'tub emas';
//     }
//   }
//   arr.push(s)
// }

// getPrimeNumbersAsArray(3,2,5,7,12)
// console.log(arr);




// problem 213
// let arr = [1,4,5,7,12];
// let arr2 = [];
// console.log(getPalindromeNumbersAsArray(arr));
// function getPalindromeNumbersAsArray(arr){
//   for(let i = 2; i < arr.length; i++){
//     let sum = 0;
//     for(let j = 2; j < arr[i]; j++){
//       if(arr[i] % j == 0){
//         sum++;
//       }
//     }
//     if(sum == 0){
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }




// PALINDROM SONNI TOPISH
const isPalindrom = function (n) {
  let newarray = n + ""
  for (let i= 0; Math.floor(newarray.length / 2); i++) {
    if (newarray[i] !== newarray[newarray.length - i - 1]) {
      return false
    }
  }
  return true
}
// console.log(isPalindrom(32));

// =================

const getPalindrom = function (...args) {
  const res = []
  for (let i = 0; i < args.length; i++) {
    if (isPalindrom(args[i])) {
      res[res.length] = args[i]
    }
  }
  return res
}

const res = getPalindrom(1,4,5,7,12)
console.log(res);










