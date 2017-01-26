import { action, observable } from 'mobx'

// import remotedev from 'mobx-remotedev'
// HACK: type mobx-remotedev to any
const remotedev: any = require('mobx-remotedev')

export class Counter {
  @observable value = 0

  /* --- Actions --- */

  @action increase = () => {
    this.value++
  }
}

export default remotedev(new Counter())
