import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

export default function Cards({employee}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, marginBottom: 15}}>
          {employee.map((u, i) => (
            <Card key={i}>
              <Card.Title>Job Title: {u.title}</Card.Title>
              <Card.Divider />
              <View style={{flex: 1}}>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Company Name</ListItem.Title>
                    <ListItem.Title>{u.companyname}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <ListItem.Title>Description</ListItem.Title>
                    <ListItem.Title>{u.description}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>

                  <ListItem.Title>Salary Package</ListItem.Title>
                    <ListItem.Title>{u.salaray}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>

                  <ListItem.Title>Last Date To Apply</ListItem.Title>
                    <ListItem.Title>{u.lastdate}</ListItem.Title>
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
