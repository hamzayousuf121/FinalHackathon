import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";

const Auth = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown: false}}  name="Home" component={Screens.Home} />
      <Stack.Screen name="Students" title='Student Application' component={Screens.Student} />
      <Stack.Screen name="Company" component={Screens.Company} />
      <Stack.Screen name="StudentList" component={Screens.StudentList} />
      <Stack.Screen name="CompanyList" component={Screens.CompanyList} />
      <Stack.Screen options={{headerShown: false}} name="Register" component={Screens.SignUp} />
      <Stack.Screen  options={{headerShown: false}} name="Login" component={Screens.Login} />
    </Stack.Navigator>
  );
};

export default Auth;
