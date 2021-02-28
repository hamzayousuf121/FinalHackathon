import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { Input, Text, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../store/Actions/Auth";
import { AuthState } from "../store/type";
import { Picker } from "@react-native-picker/picker"


const initalState = {
  name: "",
  email: "",
  password: "",
  userType: "student",
};

const RegisterScreen = ({ navigation }) => {
  const [state, setState] = useState({ ...initalState });

  const dispatch = useDispatch();
  const store = useSelector((state) => state.Auth);
  const registerUser = () => {
    const { name, email, password, userType } = state;
    if (email && password && name && userType) {
      dispatch(SignUp(name, email, password, userType));
    } else {
      Alert.alert("Name, userType, Emailand  Password Are Required");
    }
  };
  useEffect(() => {
    if (store.signUp) {
      setState({ ...initalState });
      dispatch({ type: AuthState, payload: { signUp: false } });
      navigation.navigate("Login");
    }
  }, [store.signUp]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Name:</Text>
          <Input
            placeholder="Enter Your Name"
            value={state.name}
            onChangeText={(val) => setState({ ...state, name: val })}
          />
          <Text style={styles.label}>Email:</Text>
          <Input
            placeholder="Enter Your Email"
            value={state.email}
            onChangeText={(val) => setState({ ...state, email: val })}
          />
          <Text style={styles.label}>Password:</Text>
          <Input
            placeholder="Enter Your Password"
            errorStyle={{ color: "red" }}
            secureTextEntry={true}
            value={state.password}
            onChangeText={(val) => setState({ ...state, password: val })}
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
              selectedValue={state.userType}
              style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue) =>
                setState({ ...state, userType: itemValue })
              }
            >
              <Picker.Item label="Student" value="student" />
              <Picker.Item label="Employee" value="employee" />
              <Picker.Item label="Admin" value="admin" />
            </Picker>
          </View>
          <View style={styles.container}>
            <Button
              title="Register"
              type="outline"
              buttonStyle={{
                backgroundColor: "#34495e",
              }}
              titleStyle={{
                color: "white",
              }}
              onPress={registerUser}
              loading={store.loading}
              disabled={store.loading}
            />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          >
            <Text>Already have an Accout?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              disabled={store.loading}
            >
              <Text>Login</Text>
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
});

export default RegisterScreen;
