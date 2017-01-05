// @flow
// Imports {{{

import { Actions, Scene, Modal } from 'react-native-router-flux'
import {
  Image,
} from 'react-native'
import React from 'react'

import Dummy from './Dummy'
import Home from './Home'
import Profile from './Profile'
import ProfileDetail from './ProfileDetail'
import Showcase from './Showcase'

// }}}

const showcaseIconSource = require( 'images/icon-bonfire.png' )

// const VectorIcon = props => (
//   <Icon
//     name={props.iconName}
//     size={24}
//     color={props.selected ? 'black' : '#929292'}
//   />
// )

const ImageIcon = props => (
  <Image
    source={props.imageSource}
    style={props.selected && {tintColor: 'black'}}
  />
)

function handleShowProfileDetail() {
  Actions.profileDetail()
}

// Root is wrapped in a Modal for the full screen from bottom scenes, like Dummy
// The first 2 Scenes are important configuration for the rest of the app!
export default Actions.create(
  <Scene key='modal' component={Modal} >
    <Scene key='root' hideTabBar hideNavBar >

      <Scene key='tabbar' tabs direction='vertical' >

        <Scene key='homeTab' icon={ImageIcon} imageSource={showcaseIconSource} >
          <Scene key='home' component={Home} title='Home' initial />
          <Scene key='fullDetail' component={Dummy} hideNavBar hideTabBar direction='horizontal' type='push' />
        </Scene>

        <Scene key='profileTab' icon={ImageIcon} imageSource={showcaseIconSource} >
          <Scene
            key='profile'
            component={Profile}
            title='Profile'
            rightTitle='Detail'
            onRight={handleShowProfileDetail}
          />

          <Scene key='profileDetail' component={ProfileDetail} title='Profile Detail' hideTabBar />

        </Scene>

        <Scene key='showcase' component={Showcase} title='Showcase' icon={ImageIcon} imageSource={showcaseIconSource} />
      </Scene>

      <Scene key='fullModal' component={Dummy} direction='vertical' hideNavBar />

    </Scene>
  </Scene>
)
