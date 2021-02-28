import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { Login } from "../store/Actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../store/type";
import { Picker } from "@react-native-picker/picker"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.Auth);

  const LoginHandler = () => {
    if (email && password) {
      dispatch(Login(email, password, userType));
    } else {
      Alert.alert("Email and Password Are Required");
    }
  };

  useEffect(() => {
    if (state.login) {
      dispatch({ type: AuthState, payload: { login: false } });
      navigation.navigate("Home");
    }
  }, [state.login]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              marginTop: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{ width: 200, height: 150 }}
              placeholder={ActivityIndicator}
            />
          </View>
          <Text style={styles.label}>Email:</Text>
          <Input
            placeholder="Enter Your Email"
            onChangeText={(val) => setEmail(val)}
            value={email}
            keyboardType="email-address"
            require
          />
          <Text style={styles.label}>Password:</Text>

          <Input
            placeholder="Enter Your Password"
            errorStyle={{ color: "red" }}
            secureTextEntry={true}
            value={password}
            require
            onChangeText={(val) => setPassword(val)}
          />

            <View
            style={{
              marginHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#99a3ac",
              marginBottom: 25,
            }}
          >
            <Picker
              selectedValue={userType}
              style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue) =>
                setUserType(itemValue)
              }
            >
              <Picker.Item label="Student" value="student" />
              <Picker.Item label="Employee" value="employee" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>
          <View style={styles.container}>
            <Button
              title="Login"
              type="outline"
              buttonStyle={{
                backgroundColor: "#34495e",
              }}
              titleStyle={{
                color: "white",
              }}
              onPress={LoginHandler}
              loading={state.loading}
              disabled={state.loading}
            />
          </View>

          <View style={styles.accountSetting}>
            <Text>Don't have an Accout?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={{ color: "#34495e" }}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 14,
    paddingLeft: 15,
  },
  accountSetting: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 5,
  },
});

export default LoginScreen;
