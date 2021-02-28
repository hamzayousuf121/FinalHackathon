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
import { useDispatch, useSelector } from "react-redux";
import {JobPosts} from '../store/Actions/Auth';
import {AuthState} from '../store/type';

const StudentRecord = ({ navigation }) => {
  const [state, setState] = useState({
    title: "",
    description: "",
    phone: "",
    salaray: "",
    experience: "",
    companytitle: ""
  });

  const dispatch = useDispatch();
  const store = useSelector((state) => state.Auth);
  const RegisterStudent = () => {
    const { title, description,  salaray, companytitle, experience, phone } = state;

    if (title && description && phone && salaray && experience && phone) {
      dispatch(JobPosts(title, description,  salaray, companytitle, experience, phone))
    } else {
      Alert.alert("All Fields Are Required");
    }
  };

  useEffect(() => {
    if (store.created) {
      dispatch({ type: AuthState, payload: { created: false } });
      navigation.goBack();
    }
  }, [store.created]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            marginTop: 20,
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
          <Text style={styles.label}> Job Title:</Text>
          <Input
            placeholder="Enter Job title"
            value={state.title}
            onChangeText={(val) => setState({ ...state, title: val })}
          />
          <Text style={styles.label}>Salaray:</Text>
          <Input
            placeholder="Enter Your salaray"
            value={state.salaray}
            keyboardType="decimal-pad"
            onChangeText={(val) => setState({ ...state, salaray: val })}
          />
          <Text style={styles.label}>Phone No:</Text>
          <Input
            placeholder="Enter Your Phone No"
            value={state.phone}
            keyboardType="decimal-pad"
            onChangeText={(val) => setState({ ...state, phone: val })}
          />

          <Text style={styles.label}>Company Name:</Text>
          <Input
            placeholder="Enter Your Company Name"
            value={state.companytitle}
            onChangeText={(val) => setState({ ...state, companytitle: val })}
          />

          <Text style={styles.label}>Years of Experience:</Text>
          <Input
            placeholder="Years of Experience"
            value={state.experience}
            keyboardType="decimal-pad"
            onChangeText={(val) => setState({ ...state, experience: val })}
          />

          <Text style={styles.label}>Description:</Text>
          <Input
            placeholder="Enter Your description"
            multiline
            value={state.description}
            onChangeText={(val) => setState({ ...state, description: val })}
          />

          <View style={styles.container}>
            <Button
              title="Submit Application"
              type="outline"
              buttonStyle={{
                backgroundColor: "#34495e",
              }}
              titleStyle={{
                color: "white",
              }}
              onPress={RegisterStudent}
              loading={store.loading}
              disabled={store.loading}
            />
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
    paddingLeft: 10,
  },
});

export default StudentRecord;
