// @flow
import remotedev from 'mobx-remotedev'
import Counter from 'stores/counter'

export type Stores = {
  counter: Counter,
}

export function createStores() {
  return {
    counter: remotedev(new Counter()),
  }
}
