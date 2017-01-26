import Event_ from 'constelation-event_'
import Style_ from 'constelation-style_'
import Text from 'constelation-text'
import View from 'constelation-view'
import React from 'react'

interface IProps {
  marginTop: number,
  label: string,
  onPress: Function,
}

export default class Button extends React.Component<IProps, void> {
  render() {
    return (
      <Event_
        onPress={this.props.onPress}
        pressEffect='opacity'
      >
        <Style_
          borderColor='black'
          borderWidth={1}
          borderRadius={1}
        >
          <View
            center
            paddingVertical={5}
            paddingHorizontal={10}
            marginTop={this.props.marginTop}
          >
            <Text color='black'>
              {this.props.label}
            </Text>
          </View>
        </Style_>
      </Event_>
    )
  }
}
