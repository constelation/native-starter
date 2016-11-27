// @flow

import React from 'react'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class ProfileDetail extends React.Component {
  props: {
    value: number,
    onIncreaseCounter: Function,
  }

  render() {
    return (
      <View
        flex={1}
        alignVertical='center'
      >
        <Text style={styles.welcome}>
          Profile Detail
        </Text>

        <TouchableOpacity onPress={this.props.onIncreaseCounter} >
          <Text style={styles.welcome}>{this.props.value}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
