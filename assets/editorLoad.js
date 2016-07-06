function loadTemplate(options)
{
  return `<div class="zc-top blue" data-id="${options.id}">
      <div class="zc-commands">
        <div id="result-btn${options.id}" class="zc-btn" onclick="toggle('result', ${options.id})">Result</div>
        <div id="html-btn${options.id}" class="zc-btn" onclick="toggle('html', ${options.id})">HTML</div>
        <!--<div id="js-btn${options.id}" class="zc-btn" onclick="toggle('js', ${options.id})">JavaScript</div>
        <div id="css-btn${options.id}" class="zc-btn" onclick="toggle('css', ${options.id})">CSS</div>-->
      </div>

      <div class="zc-actions">
        <div class="zc-btn wide" data-text="JSFiddle" onclick="exportToCodepen(${options.id});" style="min-width:75px; max-width:75px"><div class='zc-sprite wide' style="background-position: -47px 0; width:25px;"> </div><div>Export</div></div>
      </div>
    </div>
    
    <div class="zc-content">
      <div id="result${options.id}" class="zc-cont" style="overflow:hidden;" data-height="${options.height}"></div>

      <div id="html${options.id}" class="zc-cont" style="display:none; ">
        <div class="editor" id="codeeditor${options.id}" data-settings='${ JSON.stringify(options.editorSettings) }'>${options.html}</div>
      </div>

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
    <input type="hidden" id="init-active${options.id}" value= "result">

    <div style="display:none;">
            <form method="post" id="codepen-form${options.id}" action="//codepen.io/pen/define" target="check">
              <input id="codepen-data${options.id}" type="hidden" name="data" />
              <input type="hidden" name="wrap" value="l">
            </form>
    </div>
    `;
}

module.exports.load = loadTemplate;