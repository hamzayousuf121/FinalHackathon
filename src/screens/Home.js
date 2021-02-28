import React from 'react'
import { View } from 'react-native'
import {useSelector} from 'react-redux';
import { Button, Image} from 'react-native-elements'

export default function HomeScreen({navigation}) {
  const state = useSelector(state => state.Auth)
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 200, resizeMode: 'contain', height: 150, justifyContent: 'center', alignItems: 'center'}}
      />
      </View>
     <Button
      title="Create Job Post"
      containerStyle={{
       width: '95%',
       margin: 10,
      }}
      buttonStyle={{
        backgroundColor: 'red',

      }}
      onPress={()=>{
        navigation.navigate('Company')
      }}
    />
      <Button
      title="Students Application Forms"
      containerStyle={{
       width: '95%',
       margin: 10,
      }}
      type="solid"
      style={{width: '48%'}}
      onPress={()=>{
        navigation.navigate('Students')
      }}
    />    

      <Button
      title="View Student Applications"
      containerStyle={{
       width: '95%',
       margin: 10,
      }}
      type="solid"
      style={{width: '48%'}}
      onPress={()=>{
        navigation.navigate('StudentList')
      }}
      />
    </View>
  )
}
