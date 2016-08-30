var fs = require('fs');
var Q = require('q');
var htmlencode = require('htmlencode');
var path = require('path');
var editorLoad = require('./assets/editorLoad');

var _counter = 1;
var _currentPage;

module.exports = {
    website: {
        assets: "./assets",
        js: [
            "http://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js",
            "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.3/ace.js",
            "editor.js"
        ],
        css: [
            'editor.css'
        ]
    },

    hooks: {
        "page:before": function (page) {
            _currentPage = page;
            return page;
        }
    },

    blocks: {
        codeeditor: {
            process: function (block) {

                if (this.generator === 'website') {
                    var id = _counter++;
                    var config = block.kwargs;
                    var height = config.height || '300px';

                    var settings = {
                        readOnly: config.readOnly || false,
                        mode: config.language || 'html',
                        theme: config.theme || 'chrome',
                        maxLines: config.maxLines || 25
                    };

                    var options = {};
                    options.css = "";
                    options.js = "";
                    options.editorSettings = settings;
                    options.height = height;
                    options.id = id;
                    options.initTab = config.initTab || 'html';
                    options.singleTab = config.singleTab || false;
                    if (options.singleTab) {
                        options.initTab = options.singleTab;
                    }

                    if (config.src) {
                        // Read the file
                        var fullPath = path.resolve(path.dirname(_currentPage.rawPath), config.src);
                        return Q.nfcall(fs.readFile, fullPath, "utf-8")
                            .then(function (data) {
                                data = htmlencode.htmlEncode(data).replace(/&nbsp;/g, ' ');

                                options.html = data;
                                return editorLoad.load(options);
                            });
                    }
                    else{
                        //var body = htmlencode.htmlEncode(block.body).replace(/&nbsp;/g, ' ');
                        return '';
                        //options.html = body;
                        //return editorLoad.load(options);
                    }
                }
                else {
                    return '';
                }
            }
        }
    }

};
