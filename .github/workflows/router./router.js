const manifest = require('../manifest.json');
const handlers = require('../handlers');

function convert({ domain, from, to, value }) {
  if (!manifest.domains.includes(domain)) {
    throw new Error(`Unsupported domain: ${domain}`);
  }

  const handler = handlers[domain];
  if (!handler) {
    throw new Error(`Handler missing for domain: ${domain}`);
  }

  return handler.convert({ from, to, value });
}

module.exports = { convert };
