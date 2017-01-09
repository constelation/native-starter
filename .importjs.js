module.exports = {
  aliases: {
    React: 'react',
    mobx: 'mobx',
    Text: 'constelation-Text',
    View: 'constelation-View',
    ScrollView: 'constelation-scroll-view',
    Col: 'constelation-Col',
    Row: 'constelation-Row',
    Style_: 'constelation-Style_',
    Event_: 'constelation-Event_',

    counter: 'stores/counter',
  },
  groupImports: true,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/;$/, '');
  }
}
