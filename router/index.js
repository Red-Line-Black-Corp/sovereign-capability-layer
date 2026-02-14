const manifest = require('../manifest.json');
const colorHandler = require('./handlers/color');
const jsonHandler = require('./handlers/json');
const encodeHandler = require('./handlers/encode');
const cryptoHandler = require('./handlers/crypto');
const stringHandler = require('./handlers/string');
const numberHandler = require('./handlers/number');

const handlers = {
  color: colorHandler,
  json: jsonHandler,
  encode: encodeHandler,
  crypto: cryptoHandler,
  string: stringHandler,
  number: numberHandler
};

function convert(domain, from, to, value) {
  if (!domain || !from || !to || value === undefined) {
    return { error: 'Missing required parameters: domain, from, to, value' };
  }

  if (!manifest.domains.includes(domain)) {
    return { error: `Unsupported domain: ${domain}` };
  }

  if (!handlers[domain]) {
    return { error: `No handler for domain: ${domain}` };
  }

  try {
    const result = handlers[domain].convert(from, to, value);
    return result;
  } catch (err) {
    return { error: `Conversion failed: ${err.message}` };
  }
}

module.exports = { convert };