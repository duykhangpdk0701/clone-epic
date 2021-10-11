export const removeItemOnce = (arr, item) => {
  const newArr = [...arr];
  const index = newArr.indexOf(item);
  if (index > -1) {
    newArr.splice(index, 1);
  }
  return newArr;
};
