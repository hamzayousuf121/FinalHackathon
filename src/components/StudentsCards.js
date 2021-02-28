import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

export default function Cards({users}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: 15}}>
          {users.map((u, i) => (
            <Card key={i}>
              <Card.Title>Name: {u.name}</Card.Title>
              <Card.Divider />
              <View style={{flex: 1}}>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Address</ListItem.Title>
                    <ListItem.Title>{u.address}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>GPA</ListItem.Title>
                    <ListItem.Title>{u.gpa}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>

                  <ListItem.Title>Qualification</ListItem.Title>
                    <ListItem.Title>{u.qualification}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>

                  <ListItem.Title>Place Of Study</ListItem.Title>
                    <ListItem.Title>{u.placeOfStudy}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>


                    <ListItem.Title>Phone No</ListItem.Title>
                    <ListItem.Title>{u.phone}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Location</ListItem.Title>
                    <ListItem.Title>{u.location}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
