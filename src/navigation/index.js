import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthStack from "./Auth";
import PublicStack from "./Public";

const index = () => {
  const Auth = useSelector((state) => state.Auth);
  console.log("Auth ----> ", Auth);
  return (
    <NavigationContainer>
      {Auth.isLogin ? <AuthStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default index;
