
const every = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  } return true;
};

const contains = (list, value) => {
  return list.includes(value);
};

const some = (list, predicate) => {
  // Your code here
};

module.exports = {
  every,
  contains,
  some
};
