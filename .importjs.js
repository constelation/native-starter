module.exports = {
  aliases: {
    React: 'react',
    mobx: 'mobx',
    Text: 'constelation-Text',
    Image: 'constelation-image',
    View: 'constelation-view',
    ScrollView: 'constelation-scroll-view',
    Col: 'constelation-Col',
    Row: 'constelation-Row',
    Style_: 'constelation-style_',
    Animate_: 'constelation-Animate_',
    Event_: 'constelation-event_',

    counter: 'stores/counter',
  },
  groupImports: true,
  useRelativePaths: false,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/;$/, '');
  }
}
