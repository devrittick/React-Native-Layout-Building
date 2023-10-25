import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image style={styles.userImage} source={{uri: imageUrl}} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginTop: 30,
  },
  container: {},
  userCard: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginVertical: 4,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 4,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 2,
  },
  userStatus: {
    fontSize: 12,
    color: '#ccc',
    fontWeight: 'normal',
  },
});
