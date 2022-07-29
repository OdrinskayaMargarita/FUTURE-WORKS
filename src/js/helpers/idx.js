export default (item) => {
  let index = Array.from(item.parentNode.children).indexOf(item);
  return index;
}
