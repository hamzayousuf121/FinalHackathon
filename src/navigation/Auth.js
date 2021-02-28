import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";

const Auth = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Home" component={Screens.Home} />
      <Stack.Screen name="Students" title='Student Application' component={Screens.Student} />
      <Stack.Screen name="Company" component={Screens.Company} />
      <Stack.Screen name="StudentList" component={Screens.StudentList} />
      {/* <Stack.Screen name="CompanyList" component={Screens.CompanyList} /> */}
    </Stack.Navigator>
  );
};

export default Auth;
