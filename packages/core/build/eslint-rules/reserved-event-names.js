/**
 * This rule catches event overrides that conflicts with a existing event on the HTMLElement base type
 * Credit to https://github.com/ionic-team/stencil-eslint/blob/main/src/rules/reserved-event-names.ts
 */
const rule = {
  meta: {
    docs: {
      description:
        'This rule catches event overrides that conflicts with a existing event on the HTMLElement base type',
      category: 'Possible Errors',
    },
    schema: [],
    type: 'problem',
  },
  create: function (context) {
    return {
      Decorator: node => {
        const decoratorName = node.expression.callee.name;

        if (decoratorName === 'event') {
          const propName = node.parent.key.name;
          if (isReservedEvent(propName)) {
            context.report({
              node: node.parent.key,
              message: `"@${decoratorName} ${propName}" conflicts with a event in the HTMLElement base type. Please choose a different name.`,
            });
          }
        }
      },
    };
  },
};

const htmlElementEvents = [
  'abort',
  'auxclick',
  'blur',
  'cancel',
  'canplay',
  'canplaythrough',
  'change',
  'click',
  'close',
  'contextmenu',
  'copy',
  'cuechange',
  'cut',
  'dblclick',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'ended',
  'error',
  'focus',
  'gotpointercapture',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'load',
  'loadeddata',
  'loadedmetadata',
  'loadstart',
  'lostpointercapture',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'mousewheel',
  'paste',
  'pause',
  'play',
  'playing',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'progress',
  'ratechange',
  'reset',
  'resize',
  'scroll',
  'seeked',
  'seeking',
  'select',
  'selectionchange',
  'selectstart',
  'stalled',
  'submit',
  'suspend',
  'timeupdate',
  'toggle',
  'volumechange',
  'waiting',
  'wheel',
];

const reservedPublicEvents = new Set([...htmlElementEvents].map(p => p.toLowerCase()));

function isReservedEvent(memberName) {
  memberName = memberName.toLowerCase();
  return reservedPublicEvents.has(memberName);
}

module.exports = rule;
