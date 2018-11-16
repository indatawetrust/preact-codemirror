# preact-codemirror

> Simple and lightweight CodeMirror component for Preact; for :atom_symbol: [Preact](https://github.com/developit/preact)

## Usage

[languages](https://github.com/codemirror/CodeMirror/tree/master/mode)
[themes](https://github.com/codemirror/CodeMirror/tree/master/theme)

```jsx
const { h, Component, render } = require("preact");
import CodeMirror from "preact-codemirror";

// import language
import "codemirror/mode/sql/sql.js";

// import theme
import "codemirror/theme/dracula.css";

function loadStyleSheet(url) {
  var sheet = document.createElement("link");
  sheet.rel = "stylesheet";
  sheet.href = url;
  sheet.type = "text/css";
  document.head.appendChild(sheet);
  var _timer;

  // TODO: handle failure
  return new Promise(function(resolve) {
    sheet.onload = resolve;
    sheet.addEventListener("load", resolve);
    sheet.onreadystatechange = function() {
      if (sheet.readyState === "loaded" || sheet.readyState === "complete") {
        resolve();
      }
    };

    _timer = setInterval(function() {
      try {
        for (var i = 0; i < document.styleSheets.length; i++)
          if (document.styleSheets[i].href === sheet.href) resolve();
      } catch (e) {
        /* the stylesheet wasn't loaded */
      }
    }, 250);
  }).then(function() {
    clearInterval(_timer);
    return sheet;
  });
}

class Demo extends Component {
  state = {
    currentTheme: "mbo",
    themes: [
      "3024-day",
      "3024-night",
      "abcdef",
      "ambiance-mobile",
      "ambiance",
      "base16-dark",
      "base16-light",
      "bespin",
      "blackboard",
      "cobalt",
      "colorforth",
      "darcula",
      "dracula",
      "duotone-dark",
      "duotone-light",
      "eclipse",
      "elegant",
      "erlang-dark",
      "gruvbox-dark",
      "hopscotch",
      "icecoder",
      "idea",
      "isotope",
      "lesser-dark",
      "liquibyte",
      "lucario",
      "material",
      "mbo",
      "mdn-like",
      "midnight",
      "monokai",
      "neat",
      "neo",
      "night",
      "oceanic-next",
      "panda-syntax",
      "paraiso-dark",
      "paraiso-light",
      "pastel-on-dark",
      "railscasts",
      "rubyblue",
      "seti",
      "shadowfox",
      "solarized",
      "ssms",
      "the-matrix",
      "tomorrow-night-bright",
      "tomorrow-night-eighties",
      "ttcn",
      "twilight",
      "vibrant-ink",
      "xq-dark",
      "xq-light",
      "yeti",
      "zenburn"
    ],
    code: ` 
SELECT 'Customer' As Type, 
       FirstName + ' ' + LastName AS ContactName, 
       City, Country, Phone
  FROM Customer
UNION
SELECT 'Supplier', 
       ContactName, City, Country, Phone
  FROM Supplier
`
  };
  componentWillMount() {
    loadStyleSheet(
      `https://codemirror.net/theme/${this.state.currentTheme}.css`
    );
  }
  themeChange = e => {
    this.setState(
      {
        currentTheme: e.target.value
      },
      () => {
        loadStyleSheet(`https://codemirror.net/theme/${e.target.value}.css`);
      }
    );
  };
  render(props, state) {
    return (
      <div>
        <select
          onChange={this.themeChange}
          style={{
            width: "100%",
            border: "1px solid #ccc",
            height: "30px"
          }}
        >
          {state.themes.map(item => (
            <option value={item} selected={state.currentTheme == item}>
              {item}
            </option>
          ))}
        </select>
        <CodeMirror
          code={state.code.trim()}
          config={{
            mode: "sql",
            theme: state.currentTheme,
            styleActiveLine: true,
            lineNumbers: true
          }}
          instance={instance => {
            instance.on("change", () => {
              console.log(instance.getValue());
            });
          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.body);
```

[![Edit mzn9j60m48](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mzn9j60m48)

## Install

```
$ npm install --save preact-codemirror
```

```html
<script src="https://unpkg.com/preact-codemirror@1.0.0/dist/preact-codemirror.min.js"></script>
```

## Properties

#### code
Type: `String`

#### config
Type: `Object`

#### instance
Type: `Function`

## License

MIT © [Ahmet Şimşek](https://github.com/indatawetrust)
