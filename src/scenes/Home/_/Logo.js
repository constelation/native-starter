// @flow
// Imports {{{

import { bind } from 'decko'
import Animate_ from 'constelation-animate_'
import Event_ from 'constelation-event_'
import Image from 'constelation-image'
import React from 'react'

// }}}

export default class Logo extends React.Component<void, any, void> {
  node: Animate_
  rotating: boolean

  // Showing controls of Animate_ with refs
  @bind
  handleToggleRotation() {
    if (this.rotating === true) {
      this.node.stop()
      this.rotating = false
    }
    else {
      this.node.start()
      this.rotating = true
    }
  }

  @bind
  setRef(node: Animate_) {
    this.node = node
  }

  render() {
    return (
      <Event_
        pressEffect='opacity'
        onPress={this.handleToggleRotation}
      >
        <Animate_
          repeat
          // Note what happens if useNativeDriver is commented when opening modal
          useNativeDriver
          animation={`
            0: {
              rotate: '0deg',
            },
            1: {
              rotate: '360deg',
            }
          `}
          duration={20000}
          easing='linear'
          ref={this.setRef}
        >
          <Image
            source={require('images/logo.png')}
            width={134}
            height={121}
          />
        </Animate_>
      </Event_>
    )
  }
}
