// @flow

import {action, reaction, observable, observe, computed, autorun, extendObservable} from 'mobx'
import remotedev from 'mobx-remotedev'

export class CounterStore {
  increase: () => null
  value: number

  constructor() {
    extendObservable(this, {
      value: 0,
      increase: action(() => {
        this.value++
      })
    })
  }
  // value = observable(0)
  //
  // increase = action(() => {
  //   this.value++
  // })

  // @action increase() {
  //   this.value++
  // }
}

export default remotedev(new CounterStore())
