////  String işlemi ve arralerin bir arada kullanımı

function camelize(str) {
  let arr = str.split("-");
  let arr2 = [];
  for (let index in arr) {
    if (index == 0) {
      arr2.push(arr[index]);
    } else {
      arr2.push(arr[index].replace(arr[index][0], arr[index][0].toUpperCase()));
    }
  }

  alert(arr2.join(""));
}

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");

// /// farklı çözüm
// function camelize2(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");
//------------------------------------------------------------------------------
/// Filitreleme işlemi
// function filterRange(arr, a, b) {
//   return arr.filter((item) => a <= item && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 2, 4);

// alert(filtered);

// alert(arr);
//------------------------------------------------------------------------------

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let value = arr[i];

//     if (value < a || value > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4);

// alert(arr);

/////_______________________________________/////////////
// DİZİYİ TERSİNE SIRALAMA

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a); // terse sıralar eğer a-b yaparsan normal sıralar

alert(arr);





/// ---------------- ////////---KOPYALAMA VE SIRALAMA 


function copySorted(arr){
  return arr.slice().sort();

}



let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (değişmedi)