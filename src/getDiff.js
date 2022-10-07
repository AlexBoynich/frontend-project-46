import _ from 'lodash';


const getDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const diff =`{${keys.flatMap ((key) => {

  // если ключ есть во втором файле но отсутствует в первом
  if (!_.has(data1, key)) {
    return `\n+ ${key}: ${data2[key]}`;
  }
  // если ключ есть в первом файле но отсутствует во втором
  if (!_.has(data2, key)) {
    return `\n- ${key}: ${data1[key]}`;
  }

  // если равны ключи и значения
  if (data1[key] === data2[key]) {
    return `\n  ${key}: ${data1[key]}`;
  }

  // если равны ключи , но значения разные
  return `\n- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
})} \n}`;

return diff;
};

export default getDiff;
