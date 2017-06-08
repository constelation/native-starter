// @flow
// Imports {{{

import { Animate } from 'constelation-animate_'
import { Col } from 'constelation-view'
import React from 'react'
import Space from 'constelation-space'

import Button from 'shared/Button'

import Logo from './_/Logo'

// }}}

type Props = {
  onShowFromRight: Function,
  onShowFromBottom: Function,
}

const EVENTS = {
  END_HERO: 'HOME_END_HERO',
}

export default class Home extends React.Component<void, Props, void> {
  render() {
    return (
      <Col
        center
        grow
      >
        <Animate
          start
          animation={`
            0: {
              translateY: 100,
              scale: 1
            },
            1: {
              translateY: 0,
              scale: 1.3
            }
          `}
          duration={400}
          delay={700}
          easing='out'
          onEndEvent={EVENTS.END_HERO}
        >
          <Logo />
        </Animate>

        <Animate
          startOnEvent={EVENTS.END_HERO}
          animation='fadeIn'
          duration={300}
        >
          <Space size={60} />
          <Button
            label='Full screen Detail scene'
            onPress={this.props.onShowFromRight}
          />
          <Space size={30} />
          <Button
            label='Full screen Modal scene'
            onPress={this.props.onShowFromBottom}
          />
        </Animate>

      </Col>
    )
  }
}
