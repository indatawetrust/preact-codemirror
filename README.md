# preact-codemirror

> Simple and lightweight CodeMirror component for Preact; for :atom_symbol: [Preact](https://github.com/developit/preact)

## Usage

[languages](https://github.com/codemirror/CodeMirror/tree/master/mode)
[themes](https://github.com/codemirror/CodeMirror/tree/master/theme)

```jsx
const { h, Component, render } = require("preact");
import CodeMirror from "preact-codemirror";

// import language
import "codemirror/mode/dart/dart.js";

// import theme
import "codemirror/theme/dracula.css";

class Demo extends Component {
  state = {
    code: `
// dart-lang

void main() {

  String text = "hello world";

  print(text);

}
`
  }
  render() {
    return (
      <div>
        <CodeMirror
          code={this.state.code.trim()}
          config={{
            mode: "dart",
            theme: "dracula",
            styleActiveLine: true,
            lineNumbers: true
          }}
          instance={instance => {
            instance.on("change", () => {
              console.log(instance.getValue())
            });

          }}
        />
      </div>
    );
  }
}

render(<Demo />, document.body);
```

[![Edit olxow4ny25](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/olxow4ny25)

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
