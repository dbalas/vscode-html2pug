const vscode = require('vscode');
const {transformHtml} = require('./commands');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.transformHtml', transformHtml);
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {}
exports.deactivate = deactivate;