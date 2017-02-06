// @flow
// Imports {{{

import Animate_, { emit } from 'constelation-animate_'
import Event_ from 'constelation-event_'
import React from 'react'
import Style_ from 'constelation-style_'
import View from 'constelation-view'

// }}}

const box1Animation = {
  0: {
    opacity: 0.2,
    width: 20,
    height: 20,
  },
  1: {
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
      emit('BOX_SEQUENCE')
    })
  }

  handleEnd = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <View>
        <Event_
          hitSlop={20}
          onPress={this.handleTriggerBox1Animation}
          // Note: this effect doesn't work because Animate_ replaces Opacity
          pressEffect='opacity'
        >
          <Animate_
            friction={14}
            tension={40}
            direction='alternate'
            animation={box1Animation}
            startEvent={this.state.count < 2 ? 'BOX_SEQUENCE' : undefined}
            onEnd={this.handleEnd}
            onEndEvent='BOX_1_END'
          >
            <Style_ backgroundColor='purple' >
              <View height={200} />
            </Style_>
          </Animate_>
        </Event_>

        <Animate_
          duration={500}
          direction='alternate'
          animation={box1Animation}
          startEvent='BOX_1_END'
          onEndEvent='BOX_2_END'
        >
          <Style_ backgroundColor='purple' >
            <View height={200} />
          </Style_>
        </Animate_>

        <Animate_
          friction={14}
          tension={40}
          direction='alternate'
          animation={box1Animation}
          startEvent='BOX_2_END'
          onEndEvent='BOX_SEQUENCE'
        >
          <Style_ backgroundColor='purple' >
            <View height={200} />
          </Style_>
        </Animate_>
      </View>
    )
  }
}
