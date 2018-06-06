module.exports = class Parameter {
  constructor (options = {}) {
    options = Object.assign({required: true, full: false}, options)

    this.required = !!options.required
    this.full = !!options.full
  }

  parse (arg, error) {
    return arg
  }
}
