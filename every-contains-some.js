
const every = (list, predicate) => {
  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false;
  } return true;
};

const contains = (list, value) => {
  return list.includes(value);
};

const some = (list, predicate) => {
  const listWithNum = list.filter(value => predicate(value));
  if (listWithNum.length > 0) {
    return true
  } else {
    return false
  }
};

module.exports = {
  every,
  contains,
  some
};
