import Event_ from 'constelation-event_'
import Text from 'constelation-text'
import View from 'constelation-view'
import React from 'react'

interface IProps {
  value: number,
  onIncreaseCounter: Function,
}

export default class Profile extends React.Component<IProps, void> {
  render() {
    return (
      <View
        grow
        alignVertical='center'
      >
        <View margin={10}>
          <Text
            center
            size={20}
          >
            This is the Profile scene
          </Text>
        </View>

        <Text center >Click 'Detail' for a threaded view</Text>

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
