# vscode-html2pug

> Transform html to pug inside your Visual Studio Code, forget about using an external page anymore.

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub](https://img.shields.io/github/release/dbalas/vscode-html2pug.svg?style=flat-square)](https://github.com/dbalas/vscode-html2pug/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/version-short/dbalas.vscode-html2pug.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs/dbalas.vscode-html2pug.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)

## Features

* Format selection.
* Multiple selections support.
* Keyboard shortcut: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd> / <kbd>⌘ Command</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd>

## Installation

Install this extension from the [VSCode
Marketplace](https://marketplace.visualstudio.com/items?itemName=dbalas.vscode-html2pug)

## Usage

1. Select the html.
2. Hit <kbd>⌘ Command</kbd> + <kbd>⇧ Shift</kbd> + <kbd>p</kbd> / <kbd>Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>p</kbd>
3. Run `html2pug: Transform` or <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd> / <kbd>⌘ Command</kbd> + <kbd>Alt</kbd> + <kbd>p</kbd> .

## Keyboard Shortcut

Use the following to embed a shortcut in keybindings.json. Replace with your preferred key bindings.

```json
    {
      "key": "ctrl+alt+p",
      "command": "extension.transformHtmlToPug",
    }
```
You can customize your shortcuts too under: File > Preferences > Keyboard Shortcuts. (Code > Preferences > Keyboard Shortcuts on macOS)
Check [key bindings docs](https://code.visualstudio.com/docs/getstarted/keybindings).

## Options

Settings object with defaults.

```json
    {
      "html2pug": {
        "tabs": false, // !editor.options.insertSpaces
        "fragment": true,
        "doubleQuotes": false,
        "commas": false,
      }
    }
```

## Built With
* [html2pug](https://github.com/izolate/html2pug) - html to pug engine

## Contributing
Feel free to submit pull request or suggestions [here](https://github.com/dbalas/vscode-html2pug/issues/new).

## Contributors

* **Daniel Balastegui** - *Initial work* - [dbalas](https://github.com/dbalas)
* **Lu Nelson** - *Contributor* - [lunelson](https://github.com/lunelson)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/dbalas/devdome/tags).

## License

[MIT license](LICENSE.md).
