import {h, Component} from 'preact';

import CM from 'codemirror';
import AppendChild from 'preact-append-child';
import 'codemirror/lib/codemirror.css';

export default class CodeMirror extends Component {
  constructor() {
    super();
  }

  render() {
    var textarea = document.createElement('textarea');

    textarea.value = this.props.code || '';

    return (
      <AppendChild
        child={textarea}
        afterAppend={() => {
          const instance = CM.fromTextArea(textarea, this.props.config || {});

          if (this.props.instance) {
            this.props.instance(instance);
          }
        }}
      />
    );
  }
}
