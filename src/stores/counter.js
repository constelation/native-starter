// @flow
// Imports {{{

import { action, extendObservable } from 'mobx'

// }}}

export default class Counter {
  value: number
  increase: () => {}

  // initialize observable properties on a new instance
  constructor() {
    // similar to Object.assign()
    extendObservable(this, {
      value: 0,
    })
  }

  /* --- Actions --- */

  increase = action('increase', () => {
    this.value++
  })
}
