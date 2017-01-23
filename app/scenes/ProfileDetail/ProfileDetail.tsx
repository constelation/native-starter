import Event_ from 'constelation-Event_'
import React from 'react'
import Text from 'constelation-Text'
import View from 'constelation-View'

interface Props {
  value: number,
  onIncreaseCounter: Function,
}

export default class ProfileDetail extends React.Component<Props, void> {
  render() {
    return (
      <View
        grow
        alignVertical='center'
      >
        <Text
          center
          size={20}
        >
          Profile Detail
        </Text>

        <Event_
          onPress={this.props.onIncreaseCounter}
          pressEffect='opacity'
        >
          <View margin={10}>
            <Text
              center
              size={20}
            >
              {this.props.value}
            </Text>
          </View>
        </Event_>
      </View>
    )
  }
}