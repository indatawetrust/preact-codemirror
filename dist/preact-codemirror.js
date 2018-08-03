(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact'), require('codemirror'), require('preact-append-child'), require('codemirror/lib/codemirror.css')) :
	typeof define === 'function' && define.amd ? define(['preact', 'codemirror', 'preact-append-child', 'codemirror/lib/codemirror.css'], factory) :
	(global.CodeMirror = factory(global.preact,global.CM,global.AppendChild));
}(this, (function (preact,CM,AppendChild) { 'use strict';

CM = 'default' in CM ? CM['default'] : CM;
AppendChild = 'default' in AppendChild ? AppendChild['default'] : AppendChild;

var CodeMirror = (function (Component$$1) {
  function CodeMirror() {
    Component$$1.call(this);
  }

  if ( Component$$1 ) CodeMirror.__proto__ = Component$$1;
  CodeMirror.prototype = Object.create( Component$$1 && Component$$1.prototype );
  CodeMirror.prototype.constructor = CodeMirror;

  CodeMirror.prototype.render = function render () {
    var this$1 = this;

    var textarea = document.createElement('textarea');

    textarea.value = this.props.code || '';

    return (
      preact.h( AppendChild, {
        child: textarea, afterAppend: function () {
          var instance = CM.fromTextArea(textarea, this$1.props.config || {});

          if (this$1.props.instance) {
            this$1.props.instance(instance);
          }
        } })
    );
  };

  return CodeMirror;
}(preact.Component));

return CodeMirror;

})));
