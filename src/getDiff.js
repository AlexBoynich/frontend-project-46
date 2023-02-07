import _ from 'lodash'

const getDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)))
  const diff = keys.flatMap((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        type: 'nested',
        children: getDiff(data1[key], data2[key])
      }
    }
    if (!_.has(data1, key)) {
      return {
        key,
        type: 'added',
        value: data2[key]
      }
    }
    if (!_.has(data2, key)) {
      return {
        key,
        type: 'removed',
        value: data1[key]
      }
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'changed',
        value1: data1[key],
        value2: data2[key]
      }
    }
    return {
      key,
      type: 'unChanged',
      value: data1[key]
    }
  })

  return diff
}

export default getDiff
