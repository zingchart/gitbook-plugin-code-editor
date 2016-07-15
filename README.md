
GitBook Plugin to display and run included files.
==============
### View/Edit Code in ACE Editor
![Editor View](/assets/images/editor.png)

### Run code in Page
![Run](/assets/images/run.png)


### 1. You can use install it via **NPM** and save it to package.json:
```
$ npm install gitbook-plugin-code-editor --save
```
### 2. Add the plugin to `book.json` config
```
{
    "plugins": [ "code-editor"]
}
```

### 3. Include codeeditor blocks in your markdown files.
```
{% codeeditor src='../HTML/4Elements/forms/select.html' %}
{% endcodeeditor %}
```

```
{% codeeditor   src='../HTML/4Elements/forms/input.html',
                language='javascript', readOnly='true', theme='github' %}
{% endcodeeditor %}
```

```
{% codeeditor src='../HTML/4Elements/forms/meter.html' %}
{% endcodeeditor %}
```

#### General Attributes

* `src` *required* - The relative path to the file that will be displayed in the editor and run in page.
* `singleTab` *optional* - Can be set to `false`, `html`, `result`.  If `html` or `result`, only that tab will be shown.
    * default: `false`

#### Editor Attributes

We are using an Ace editor for the editor.  We currently support the following attributes.
* `language` *optional* - Sets the programming language mode to be used in the syntax highlighter.  The full list of supported languages can be found in the [Ace Editor Repository](https://github.com/ajaxorg/ace-builds/tree/master/src-min-noconflict).
    * default: `html`
* `theme` *optional* - Sets the Ace Editor Theme.  The full list of supported themes can be found in the [Ace Editor Repository](https://github.com/ajaxorg/ace/tree/master/lib/ace/theme).
    * default: `chrome`
* `readOnly` *optional* - If set to `true`, the editor will not be editable.
    * default: `false`
* `maxLines` *optional* - Sets the maximum number of lines that will be visible in the editor.
    * default: 25

#### Executed Code Attributes

The executed code displays in an iframe in order to preserve any items in the `<head>` that may be necessary for the example.
* `height` *optional* - Sets the height of the iframe
    * default: 300

---
# License

MIT License

&copy; 2016 ZingChart, Inc.
