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
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				let document = editor.document;
				const code = document.getText()
				const start = editor.selection.start.line
				const end = editor.selection.end.line
				const formattedCode = transformString(code, {start, end}).code
				const firstLine = editor.document.lineAt(0);
				const lastLine = editor.document.lineAt(editor.document.lineCount - 1);
				const textRange = new vscode.Range(
				  0,
				  firstLine.range.start.character,
				  editor.document.lineCount - 1,
				  lastLine.range.end.character
				);
				
				editor.edit(function(editBuilder) {
				  editBuilder.replace(textRange, formattedCode);
				});
			
			}
	
            // The code you place here will be executed every time your command is executed
            // Display a message box to the user
            // vscode.window.showInformationMessage('Hello World!');
            // const transformedCode = transformString(code, {start, end})
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
