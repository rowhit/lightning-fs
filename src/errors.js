function Err(name) {
  return class extends Error {
    constructor(...args) {
      super(...args);
      this.code = name;
      if (this.message) {
        this.message = name + ": " + this.message;
      } else {
        this.message = name;
      }
    }
  };
}

const EEXIST = Err("EEXIST");
const EISDIR = Err("EISDIR");
const ENOENT = Err("ENOENT");
const ENOTDIR = Err("ENOTDIR");
const ENOTEMPTY = Err("ENOTEMPTY");
const ETIMEDOUT = Err("ETIMEDOUT");

module.exports = { EEXIST, EISDIR, ENOENT, ENOTDIR, ENOTEMPTY, ETIMEDOUT };
