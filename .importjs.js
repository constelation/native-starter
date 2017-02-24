module.exports = {
  aliases: {
    React: 'react',
    mobx: 'mobx',
    Text: 'constelation-text',
    Image: 'constelation-image',
    View: 'constelation-view',
    ScrollView: 'constelation-scroll-view',
    Style_: 'constelation-style_',
    Animate_: 'constelation-animate_',
    Event_: 'constelation-event_',

    counter: 'stores/counter',
  },

  namedExports: {
    'constelation-animate_': [
      'Animate',
      'emitAnimationEvent',
    ],
    'constelation-style_': [
      'Style',
    ],
    'constelation-event_': [
      'Event',
    ],
  },
  groupImports: true,
  useRelativePaths: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/;$/, '');
  }
}
