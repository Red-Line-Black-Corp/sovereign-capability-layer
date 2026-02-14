module.exports = {
  unsupportedOperation(msg) {
    return { error: `Unsupported operation: ${msg}` };
  }
};
