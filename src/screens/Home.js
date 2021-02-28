import React from 'react'
import { View } from 'react-native'
import { Button, Image, Header,} from 'react-native-elements'
import {useSelector} from 'react-redux';
import {logout} from '../store/Actions/Auth';

export default function HomeScreen({navigation}) {
  var userType = 'user';
  var type = useSelector(state => state?.Auth?.user)
  if(type?.userType === '' || type?.userType == undefined || type?.userType == null ){
    userType = 'user'
  }else{
    userType = type?.userType
  }

  const SignOut = () =>{
      logout();
      navigation.navigate('Login')
  }
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
    <Header
      rightComponent={<Button title="Logout" onPress={()=> SignOut()} />}
      leftComponent={<Button title="Recruitment"/>}
    />
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
      <Image
        source={require('../../assets/logo.png')}
        style={{ width: 200, resizeMode: 'contain', height: 150, justifyContent: 'center', alignItems: 'center'}}
      />
      </View>
      { userType !== 'user' && 
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
      }
  
      <Button
      title="Students Application Forms"
      containerStyle={{
       width: '95%',
       margin: 10,
      }}
      type="solid"
      onPress={()=>{
        navigation.navigate('Students')
      }}
    />    
{
  userType !== 'user' && 
   <Button
   title="View Student Applications"
   containerStyle={{
    width: '95%',
    margin: 10,
   }}
   type="solid" 
    buttonStyle={{
     backgroundColor: 'red',
   }}
   onPress={()=>{
     navigation.navigate('StudentList')
   }}
   />
}
   

      <Button
      title="View Student Applications"
      containerStyle={{
       margin: 10,
       width: '95%',

      }}
      type="solid"
      onPress={()=>{
        navigation.navigate('CompanyList')
      }}
      />
    </View>
  )
}
