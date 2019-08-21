'use babel';

const { CompositeDisposable } = require('atom');
// import transformString from '../../lib/transformString.js';
import transformString from 'logit-js';

module.exports = {
    subscriptions: null,

    activate() {
        this.subscriptions = new CompositeDisposable();
        this.subscriptions.add(atom.commands.add('atom-workspace', { 'logit-js:logit': () => this.logit() }));
        this.subscriptions.add(
            atom.commands.add('atom-workspace', { 'logit-js:logitVerbose': () => this.logitVerbose() })
        );

        this.subscriptions.add(
            atom.commands.add('atom-workspace', { 'logit-js:logitRemove': () => this.logitRemove() })
        );
    },
    deactivate() {
        this.subscriptions.dispose();
    },
    logit() {
        this.defaultAction();
    },
    logitVerbose() {
        this.defaultAction({ verbose: true });
    },
    logitRemove() {
        this.defaultAction({ remove: true });
    },

    defaultAction(options = {}) {
        const editor = atom.workspace.getActiveTextEditor();
        if (editor) {
            const range = editor.getSelectedBufferRange();
            // editor.setSelectedBufferRange([[range.start.row, 0], [range.end.row + 1, 0]]);
            const code = editor.getText();
            const cursorPosition = editor.getCursorBufferPosition();
            const start = range.start.row + 1;
            const end = range.end.row;
            // editor.setSelectedBufferRange([[start, 0], [end, 0]]);
            let formattedCode = '!';
            if (options.verbose) {
                formattedCode = transformString(code, {
                    start,
                    end,
                    verbose: true,
                }).code;
            } else if (options.remove) {
                formattedCode = transformString(code, {
                    start,
                    end,
                    remove: true,
                }).code;
            } else {
                formattedCode = transformString(code, {
                    start,
                    end,
                }).code;
            }
            editor.setSelectedBufferRange([[0, 0], [editor.getLineCount(), 0]]);
            // editor.insertText(`${start}, ${end}`);
            // editor.insertText(JSON.stringify(formattedCode));
            editor.delete();
            editor.insertText(formattedCode);
            editor.setCursorBufferPosition(cursorPosition);
            // editor.insertText(`${start}, ${end}`);
        }
    },
};
