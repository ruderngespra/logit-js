// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

const transformString = require('/home/janko/it/spiced/finalProject/logit/lib/transformString.js');

function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "logit" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand(
        'extension.logit',
        function() {
            // The code you place here will be executed every time your command is executed

            // Display a message box to the user
            // vscode.window.showInformationMessage('Hello World!');

            let editor = vscode.window.activeTextEditor;
            const start = editor.selection.start.line;
            const end = editor.selection.end.line;

            // const transformedCode = transformString(code, {start, end})

            console.log(editor);

            if (editor) {
                let document = editor.document;
                const code = document.getText();
                const start = editor.selection.start.line;
                const end = editor.selection.end.line;
                const selection = editor.selection;
                console.log('selection: ', selection);
                editor.edit(editBuilder => {
                    editBuilder.replace(document, 'hey');
                });
            }
        }
    );

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
