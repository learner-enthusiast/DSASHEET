//pivot index
// dont mess with big
// increase the value of i first
// Swap the eelemnts
//breaking point of array

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, (right = pivot - 1));
    quickSort(arr, (low = pivot + 1), (high = arr.length - 1));
  }
  return arr;
}

console.log(quickSort([5, 6, 1, 4, 3, 2]));
