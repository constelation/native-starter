import { action, observable } from 'mobx'
import remotedev from 'mobx-remotedev'

export class Counter {
  @observable value = 0

  /* --- Actions --- */

  @action increase = () => {
    this.value++
  }
}

export default remotedev(new Counter())
