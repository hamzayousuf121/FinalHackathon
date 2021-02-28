import React, {useState, useEffect} from 'react';
import { SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Cards from '../components/Cards';
import {getList} from '../services/Auth';

export default function StudentList() {
  const [student, setStudent] = useState([]);
  const [search, setSearch] = useState('');

  const getStudentList = async ()=>{
     try {
       const students =  await getList('students')

       if(student){
        setStudent(students);
        console.log(students, "Student")

       }
     } catch (error) {
       console.log(error)
     }
  }

  useEffect(() => {
    getStudentList()

  },[])
  

  console.log(student, "Student")

  const filterList = student?.filter((list) =>
  list?.title?.toLowerCase()?.includes(search?.toLowerCase()),
  );

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
      <Cards users={filterList} />
    </SafeAreaView>
  );
}
