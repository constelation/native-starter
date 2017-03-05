// @flow
// Imports {{{

import { Col, View } from 'constelation-view'
import Animate_, { emitAnimationEvent } from 'constelation-animate_'
import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'

// }}}

const box1Animation = {
  '0': {
    opacity: 0.2,
    width: 20,
    height: 20,
  },
  '1': {
    opacity: 1,
    width: 200,
    height: 200,
  },
}

// Experiments with ref-less components using events
// Even used to loop sequences

export default class BoxSequence extends React.Component {
  box1: Animate_

  state = {
    count: 0,
  }

  handleTriggerBox1Animation = () => {
    this.setState({count: 0}, () => {
      // Has me a bit worried since this looks like a race condition
      emitAnimationEvent('BOX_SEQUENCE')
    })
  }

  handleEnd = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <Col>
        <Event_
          hitSlop={20}
          // Note: this effect doesn't work because Animate_ replaces Opacity
          pressEffect='opacity'
          onPress={this.handleTriggerBox1Animation}
        >
          <Animate_
            startOnEvent={this.state.count < 2 ? 'BOX_SEQUENCE' : undefined}
            friction={14}
            tension={40}
            direction='alternate'
            animation={box1Animation}
            onEnd={this.handleEnd}
            onEndEvent='BOX_1_END'
          >
            <Style_ backgroundColor='purple' >
              <View />
            </Style_>
          </Animate_>
        </Event_>

        <Animate_
          startOnEvent='BOX_1_END'
          duration={500}
          direction='alternate'
          animation={box1Animation}
          onEndEvent='BOX_2_END'
        >
          <Style_ backgroundColor='black' >
            <View />
          </Style_>
        </Animate_>

        <Animate_
          startOnEvent='BOX_2_END'
          friction={14}
          tension={40}
          direction='alternate'
          animation={box1Animation}
          onEndEvent='BOX_SEQUENCE'
        >
          <Style_ backgroundColor='purple' >
            <View />
          </Style_>
        </Animate_>
      </Col>
    )
  }
}
