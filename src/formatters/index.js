import formatStylish from './stylish.js';
import formatPlain from './plain.js';

const getFormatting = (diff, formatName) => {
  const formatJson = () => JSON.stringify(diff, null, 2);
  const formatters = {
    plain: formatPlain,
    json: formatJson,
    stylish: formatStylish,
  };
  const formatter = formatters[formatName];
  return formatter(diff);
};

export default getFormatting;
