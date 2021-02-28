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
import { Picker } from "@react-native-picker/picker";
import {StudentForm} from '../store/Actions/Auth';
import {AuthState} from '../store/type';

const StudentRecord = ({ navigation }) => {
  const [state, setState] = useState({
    name: "",
    qualification: "",
    address: "",
    phone: "",
    gpa: "",
    placeOfStudy: "college",
  });

  const dispatch = useDispatch();
  const store = useSelector((state) => state.Auth);
  const RegisterStudent = () => {
    const { name, qualification, gpa, address, placeOfStudy, phone } = state;

    if (name && qualification && phone && gpa) {
      dispatch(StudentForm(name, qualification, gpa, address, placeOfStudy, phone))
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
          <Text style={styles.label}>Full Name:</Text>
          <Input
            placeholder="Enter Your Full Name"
            value={state.name}
            onChangeText={(val) => setState({ ...state, name: val })}
          />
          <Text style={styles.label}>GPA:</Text>
          <Input
            placeholder="Enter Your Gpa/Grade"
            value={state.gpa}
            onChangeText={(val) => setState({ ...state, gpa: val })}
          />
          <Text style={styles.label}>Address:</Text>
          <Input
            placeholder="Enter Your Address"
            value={state.address}
            onChangeText={(val) => setState({ ...state, address: val })}
          />
          <Text style={styles.label}>Phone No:</Text>
          <Input
            placeholder="Enter Your Phone No"
            value={state.phone}
            keyboardType="decimal-pad"
            onChangeText={(val) => setState({ ...state, phone: val })}
          />

          <Text style={styles.label}>Place of Study</Text>
          <View
            style={{
              marginHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#99a3ac",
              marginBottom: 25,
            }}
          >
            <Picker
              selectedValue={state.placeOfStudy}
              style={{ height: 50, width: "100%" }}
              onValueChange={(itemValue) =>
                setState({ ...state, placeOfStudy: itemValue })
              }
            >
              <Picker.Item label="College" value="college" />
              <Picker.Item label="University" value="university" />
              <Picker.Item label="School" value="school" />
            </Picker>
          </View>

          <Text style={styles.label}>Qualification:</Text>
          <Input
            placeholder="Enter Your Qualification"
            value={state.qualification}
            onChangeText={(val) => setState({ ...state, qualification: val })}
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
