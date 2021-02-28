import React, {useState, useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import CompanyCards from '../components/EmployeCards';
import App from '../services/firebase'

export default function StudentList() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const arr = [];
    App.firestore().collection('jobs').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          arr.push(doc.data())
      });
      setJobs(arr)
  });
  },[])
  
  const filterList = jobs?.filter((list) =>
  list?.title?.toLowerCase()?.includes(search?.toLowerCase()));

  console.log(filterList)
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
      <CompanyCards employee={filterList} />
    </SafeAreaView>
  );
}
