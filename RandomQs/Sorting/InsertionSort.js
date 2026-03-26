function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    for (j = i - 1; j >= 0; j--) {
      if (element < array[j]) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = element;
  }
  return array;
}

console.log(insertionSort([1, 6, 7, 4, 2, 3]));
