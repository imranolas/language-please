const Buildify = require('./buildify');

module.exports = {
  config: {
    formatFileOnSave: {
      type: 'boolean',
      default: true,
      description: 'Requires `buildifier` to be globally installed and in your $PATH.'
    }

  },

  activate() {
    this.buildify = new Buildify();
  },

  deactivate() {
    this.buildify && this.buildify.destroy();
    this.buildify = null;
  }
};
