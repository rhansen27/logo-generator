// function removeDupe(arr) {
//   let removedArr = arr[0];
//   let isNew = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < removedArr.length; j++) {
//       if (arr[i] === removedArr[j]) {
//         isNew = false;
//       }
//     }
//     if (isNew) {
//       removedArr.push(arr[i]);
//     }
//     isNew = true;
//   }
// }

function thereCanOnlyBeOne(...nums) {
  const tempArray = [];
  nums.forEach((num) => {
    if (!tempArray.includes(num)) {
      tempArray.push(num);
    }
  });
  console.log(tempArray);
}

const arr = [1, 1, 4, 5, 3, 8, 3, 2, 4];
arr.sort();
console.log(arr);
