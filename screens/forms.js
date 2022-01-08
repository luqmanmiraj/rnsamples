import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Picker, Switch, Button } from 'react-native'
import Slider from '@react-native-community/slider';

class Inputs extends Component {
   state = {
      email: '',
      password: '',
      switchValue: false,
      value: 50
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }

   toggleSwitch1 = (value) => {
      this.setState({ switchValue: value })
      console.log('Switch 1 is: ' + value)
   }
   sliderValue = (value) => {
      this.setState({ value: value })
      console.log('slider value is: ' + value)
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style={styles.container}>
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               onChangeText={this.handleEmail} />

            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Password"
               placeholderTextColor="#9a73ef"
               autoCapitalize="none"
               onChangeText={this.handlePassword} />
            <View>
               <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                  <Picker.Item label="Steve" value="steve" />
                  <Picker.Item label="Ellen" value="ellen" />
                  <Picker.Item label="Maria" value="maria" />
               </Picker>
               <Switch
                  onValueChange={this.toggleSwitch1}
                  value={this.state.switchValue} />
            </View>
            <View>
               <Text> Demo Form </Text>
               <View>
                  <TextInput placeholder="Email" />
                  <TextInput
                     secureTextEntry={true}
                     placeholder="Password"
                  />
                  <Text>
                     Rate your teams performance this quarter
                  </Text>
                  <Slider
                     step={1}
                     minimumValue={0}
                     maximumValue={100}
                     value={this.state.value}
                     onValueChange={this.sliderValue}
                     minimumTrackTintColor="#1fb28a"
                     maximumTrackTintColor="#d3d3d3"
                     thumbTintColor="#b9e4c9"
                  />
                  <Text>
                     Slide value: {this.state.value}%
                  </Text>
               </View>
            </View>
            <Button onPress={() => this.login(this.state.email, this.state.password)} title="Submit" color='red' />
         </View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText: {
      color: 'white'
   }
})
