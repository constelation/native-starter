import { inject, observer } from 'mobx-react/native'
import React from 'react'
import { Counter } from 'stores/counter'

import Profile from './Profile'

interface IProps {
  counter: Counter
}

@inject('counter') @observer
export default class ProfileContainer extends React.Component<IProps, void> {
  handleIncreaseCounter = () => {
    this.props.counter.increase()
  }

  render() {
    return (
      <Profile
        value={this.props.counter.value}
        onIncreaseCounter={this.handleIncreaseCounter}
      />
    )
  }
}