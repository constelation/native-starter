import { observer, inject } from 'mobx-react/native'
import React from 'react'
import { Counter } from 'stores/counter'
import ProfileDetail from './ProfileDetail'

interface Props {
  counter: Counter
}

@inject('counter') @observer
export default class ProfileDetailContainer extends React.Component<Props, void> {
  handleIncreaseCounter = () => {
    this.props.counter.increase()
  }

  render() {
    return (
      <ProfileDetail
        value={this.props.counter.value}
        onIncreaseCounter={this.handleIncreaseCounter}
      />
    )
  }
}