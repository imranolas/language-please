const {CompositeDisposable} = require('atom');
const spawnSync = require('child_process').spawnSync;

class Buildify {
  constructor() {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.workspace.observeTextEditors(editor => {
        const scopes = editor.getRootScopeDescriptor().scopes;
        if (scopes.includes('source.please-build')) {
          this.handleEvents(editor);
        }
      })
    );
  }

  destroy() {
    this.subscriptions.dispose();
  }

  handleEvents(editor) {
    const buffer = editor.getBuffer();
    buffer.onWillSave(() => {
      const cursorPoint = editor.getCursorBufferPosition()
      if (!atom.config.get('language-please.formatFileOnSave')) {
        return;
      }
      const text = buffer.getText();
      const response = spawnSync('buildifier', [], {input: text});
      if (!response.stderr.length) {
        buffer.setText(response.stdout.toString('utf8'));
        editor.setCursorBufferPosition(cursorPoint)
      }
    });
  }
}


module.exports = Buildify;
