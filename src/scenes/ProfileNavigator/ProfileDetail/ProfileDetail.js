// @flow
// Imports {{{

import { Col } from 'constelation-view'
import Event_ from 'constelation-event_'
import React from 'react'
import Space from 'constelation-space'
import Text from 'constelation-text'

// }}}

type Props = {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProfileDetail extends React.Component<void, Props, void> {
  render() {
    return (
      <Col
        grow
        alignVertical='center'
      >
        <Text
          center
          size={20}
        >
          Profile Detail
        </Text>

        <Space size={10} />

        <Event_
          pressEffect='opacity'
          onPress={this.props.onIncreaseCounter}
        >
          <Text
            center
            size={20}
          >
            {this.props.value}
          </Text>
        </Event_>
      </Col>
    )
  }
}
