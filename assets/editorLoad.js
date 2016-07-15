function loadTemplate(options) {
  var str =  `
    <div class="zc-editor" data-id="${options.id}" data-single-tab="${options.singleTab}">`;

  if (!options.singleTab) {
    str += `
      <div class="zc-top blue">
        <div class="zc-actions">
          <div class="zc-btn" data-text="JSFiddle" onclick="exportToCodepen(${options.id});">
            <div>Export</div>
          </div>
        </div>
        
        <div class="zc-commands">
          <div id="html-btn${options.id}" class="zc-btn" onclick="toggle('html', ${options.id})">HTML</div>
          <!--<div id="js-btn${options.id}" class="zc-btn" onclick="toggle('js', ${options.id})">JavaScript</div>-->
          <!--<div id="css-btn${options.id}" class="zc-btn" onclick="toggle('css', ${options.id})">CSS</div>-->
          <div id="result-btn${options.id}" class="zc-btn" onclick="toggle('result', ${options.id})">Result</div>
        </div>
      </div>`;
  }

    str += `
      <div class="zc-content">
        <div id="html${options.id}" class="zc-cont" style="display:none; ">
          <div class="editor" id="codeeditor${options.id}" data-settings='${ JSON.stringify(options.editorSettings) }'>${options.html}</div>
        </div>`;

    if (!options.singleTab || options.singleTab === 'result') {
      str += `<div id="result${options.id}" class="zc-cont" style="overflow:hidden;" data-height="${options.height}"></div>`;
    }

    str += `
        <div id="js${options.id}" class="zc-cont" style="display:none">
          <pre  id="js-code${options.id}" class="prettyprint linenums"></pre>
        </div>
  
        <div id="css${options.id}" class="zc-cont" style="display:none">
          <pre  id="css-code${options.id}" class="prettyprint linenums"></pre>
        </div>
  
      </div>
  
      <input type="hidden" id="init-html${options.id}" value= "${ options.html }">
      <input type="hidden" id="init-css${options.id}" value= "${ options.css }">
      <input type="hidden" id="init-js${options.id}" value= "${options.js }">
      <input type="hidden" id="init-active${options.id}" value= "${options.initTab }">
  
      <div style="display:none;">
        <form method="post" id="codepen-form${options.id}" action="//codepen.io/pen/define" target="check">
          <input id="codepen-data${options.id}" type="hidden" name="data" />
          <input type="hidden" name="wrap" value="l">
        </form>
      </div>
    </div>
  `;

  return str;
}

module.exports.load = loadTemplate;