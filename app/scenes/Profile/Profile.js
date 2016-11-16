// @flow

import React from 'react'
import { observer, inject } from 'mobx-react/native'
import { CounterStore } from 'stores/counter'

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import View from 'constelation-View'

export default inject('counter')(observer(
  class Profile extends React.Component {
    props: {
      counter: CounterStore
    }

    render() {
      return (
        <View
          flex={1}
          alignVertical='center'
        >
          <Text style={styles.welcome}>
            This is the Profile scene
          </Text>
          <Text style={{textAlign: 'center'}}>Click 'Detail' for a threaded view</Text>

          <TouchableOpacity onPress={() => this.props.counter.increase()} >
            <Text style={styles.welcome}>{this.props.counter.value}</Text>
          </TouchableOpacity>

        </View>
      )
    }
  }
))

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  titleStyle: {
    color: '#111111',
  },
})
