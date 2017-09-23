import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import RoundedButton from '../Components/RoundedButton.js'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            {/* <Image source={Images.launch} style={styles.logo} /> */}
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              Trust us, swag overflow is actually a good thing.  
            </Text>
          </View>

          <RoundedButton text="Login" /> 
          <RoundedButton text="Search" />
          <DevscreensButton />
        </ScrollView>
      </View>
    )
  }
}
