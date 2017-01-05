module.exports = {
  aliases: {
    React: 'react',
    mobx: 'mobx',
    Text: 'constelation-Text',
    View: 'constelation-View',
    Col: 'constelation-Col',
    Row: 'constelation-Row',
    Style_: 'constelation-Style_',

    counter: 'stores/counter',
  },
  groupImports: true,
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/;$/, '');
  }
}
