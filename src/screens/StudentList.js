import React, {useState, useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import StudentCards from '../components/StudentsCards';
import App from '../services/firebase'

export default function StudentList() {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const arr = [];
    App.firestore().collection('students').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          arr.push(doc.data())
      });
      setStudent(arr)
  });
  },[])
  
  const filterList = student?.filter((list) =>
  list?.name?.toLowerCase()?.includes(search?.toLowerCase()));
console.log(filterList, "sTudents")
  return (
    <SafeAreaView style={{flex: 1}}>
      <SearchBar
        placeholder="Search By Title"
        onChangeText={(val) => setSearch(val)}
        value={search}
        lightTheme={true}
        inputContainerStyle={{
          backgroundColor: 'white',
          color: 'black',
          marginHorizontal: 7,
        }}
      />
      <StudentCards users={filterList} />
    </SafeAreaView>
  );
}
