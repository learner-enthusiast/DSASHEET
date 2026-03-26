function bubbleSort(array) {
  let isSwap;

  do {
    isSwap = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        (array[i], (array[i + 1] = array[i + 1]), array[i]);
        isSwap = true;
      }
    }
  } while (isSwap);
}
