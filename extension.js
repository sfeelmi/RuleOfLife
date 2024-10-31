const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('ruleoflife.insertPhrase', function () {
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const phrase = 'The best things in life are the people we love the places we have been and the memories we have made along the way';
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, phrase);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
