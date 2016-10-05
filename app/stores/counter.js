import {action, reaction, observable, observe, computed, autorun} from 'mobx'

class CounterStore {
  @observable value = 0

  @action increase() {
    this.value++
  }
}

export default new CounterStore()
